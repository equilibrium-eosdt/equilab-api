import type { RpcInterface } from "@polkadot/rpc-core/types/jsonrpc";
import type { WsProvider } from "@polkadot/rpc-provider";

import type {
  Hash,
  ExtrinsicStatus,
  RuntimeVersion,
} from "@polkadot/types/interfaces";

import type { Codec, IExtrinsicEra, Signer } from "@polkadot/types/types";
import { RpcCore } from "@polkadot/rpc-core";
import { TypeRegistry, Option, u32, u128 } from "@polkadot/types";
import { decodeAddress, encodeAddress } from "@polkadot/util-crypto";
import * as CONSTS from "./consts";
import definitions from "./defs";
import { blake2Concat } from "./util";

let instanceCounter = 0;

import {
  BehaviorSubject,
  combineLatest,
  combineLatestWith,
  filter,
  map,
  of,
  switchMap,
  Subscription,
  tap,
} from "rxjs";

class ApiLite {
  readonly #instanceId: string;
  readonly isConnected: BehaviorSubject<boolean>;
  readonly #connectedSub: Subscription;
  #genesisHash: string | undefined;
  #runtimeSub: Subscription | undefined;
  #runtimeVersion: RuntimeVersion | undefined;
  #keepaliveInterval: NodeJS.Timeout | undefined;
  public readonly registry = new TypeRegistry();
  public readonly rpc: RpcCore & RpcInterface;

  public get genesisHash() {
    if (!this.#genesisHash) {
      throw new Error("not initialized");
    }

    return this.#genesisHash;
  }

  public static create(provider: WsProvider) {
    const api = new ApiLite(provider);

    return api.isConnected.pipe(
      filter((v) => !!v),
      map(() => api),
    );
  }

  async #init() {
    const sub = this.rpc.chain.getBlockHash(0).subscribe((genesisHash) => {
      this.#genesisHash = genesisHash.toHex();
      sub.unsubscribe();
    });

    this.#keepaliveInterval = setInterval(() => {
      const sub = this.rpc.system.health().subscribe(() => {
        sub.unsubscribe();
      });
    }, 10000);

    this.#runtimeSub = combineLatest([
      this.rpc.state.subscribeRuntimeVersion(),
    ]).subscribe(([runtimeVersion]) => {
      this.#runtimeVersion = runtimeVersion;
    });
  }

  async #destroy() {
    if (this.#keepaliveInterval) {
      clearInterval(this.#keepaliveInterval);
    }

    this.#connectedSub.unsubscribe();
    this.#runtimeSub?.unsubscribe();
  }

  constructor(provider: WsProvider) {
    let ready = false;
    this.#instanceId = `lite:${instanceCounter++}`;

    this.rpc = new RpcCore(
      this.#instanceId,
      this.registry,
      provider,
    ) as RpcCore & RpcInterface;

    this.isConnected = new BehaviorSubject(this.rpc.provider.isConnected);
    this.rpc.provider.on("connected", () => this.isConnected.next(true));
    this.rpc.provider.on("disconnected", () => this.isConnected.next(false));

    this.#connectedSub = this.isConnected.subscribe(async (isConnected) => {
      if (isConnected) {
        if (!ready) {
          await this.#init();
        }

        ready = true;
      } else if (ready) {
        await this.#destroy();
        ready = false;
      }
    });

    this.registry.register(definitions);
  }

  #signingHeader() {
    return combineLatest([
      this.rpc.chain
        .getHeader()
        .pipe(
          switchMap((header) =>
            header.parentHash.isEmpty
              ? of(header)
              : this.rpc.chain.getHeader(header.parentHash),
          ),
        ),
      this.rpc.chain
        .getFinalizedHead()
        .pipe(switchMap((hash) => this.rpc.chain.getHeader(hash))),
    ]).pipe(
      map(([current, finalized]) =>
        current.number.unwrap().toNumber() - finalized.number.toNumber() >
        CONSTS.MAX_FINALITY_LAG
          ? current
          : finalized,
      ),
    );
  }

  #signingInfo(address: string, era?: IExtrinsicEra | number) {
    const CURRENT = CONSTS.CHAIN.KUSAMA; // TODO multiple chain support

    return combineLatest([
      this.rpc.system.accountNextIndex(address),
      !era || (typeof era === "number" && era > 0)
        ? this.#signingHeader()
        : of(null),
    ]).pipe(
      map(([nonce, header]) => ({
        header,
        mortalLength: Math.min(
          CURRENT.SYSTEM_BLOCKHASHCOUNT ?? CONSTS.FALLBACK_MAX_HASH_COUNT,
          Math.floor(
            CONSTS.MORTAL_PERIOD /
              (CURRENT.BABE_EXPECTEDBLOCKTIME ??
                CURRENT.TIMESTAMP_MINIMUMPERIOD / 2 ??
                CONSTS.FALLBACK_PERIOD) +
              CONSTS.MAX_FINALITY_LAG,
          ),
        ),
        nonce,
      })),
    );
  }

  account(address: string) {
    const endpoint =
      "0x" +
      CONSTS.STORAGE_KEYS.PALLETS.SYSTEM +
      CONSTS.STORAGE_KEYS.METHODS.ACCOUNT +
      blake2Concat(decodeAddress(address)).slice(2);

    return this.rpc.state
      .subscribeStorage<[Option<Codec>]>([endpoint])
      .pipe(
        map((v) => {
          const hex = v[0].unwrapOr(undefined)?.toHex();
          return (
            hex &&
            ((this.registry.createType("AccountInfo", hex) as unknown) as {
              nonce: u32;
              consumer: u32;
              providers: u32;
              sufficients: u32;
              data: {
                free: u128;
                reserved: u128;
                miscFrozen: u128;
                feeFrozen: u128;
              };
            })
          );
        }),
      );
  }

  /** @deprecated for now; need to parse events w/o metadata */
  eventsAt(blockHash: Hash) {
    const endpoint =
      "0x" +
      CONSTS.STORAGE_KEYS.PALLETS.SYSTEM +
      CONSTS.STORAGE_KEYS.METHODS.ACCOUNT;

    return this.rpc.state.queryStorageAt<[Option<Codec>]>(
      [endpoint],
      blockHash,
    );
  }

  xcmTransfer(pub: string, amount: string) {
    const callIndex = "6302";

    const dest = this.registry
      .createType("XcmVersionedMultiLocation", {
        V1: {
          parents: 0,
          interior: {
            X1: {
              Parachain: 2024, // TODO no hardcode
            },
          },
        },
      })
      .toHex()
      .slice(2);

    const beneficiary = this.registry
      .createType("XcmVersionedMultiLocation", {
        V1: {
          parents: 0,
          interior: {
            X1: {
              AccountId32: {
                network: "Kusama",
                id: pub,
              },
            },
          },
        },
      })
      .toHex()
      .slice(2);

    const assets = this.registry
      .createType("XcmVersionedMultiAssets", {
        V1: [
          {
            id: {
              Concrete: {
                parents: 0,
                interior: "Here",
              },
            },
            fun: {
              Fungible: amount,
            },
          },
        ],
      })
      .toHex()
      .slice(2);

    const feeAssetItem = this.registry.createType("u32", 0).toHex().slice(2);
    const method = `0x${callIndex}${dest}${beneficiary}${assets}${feeAssetItem}`;
    const address = encodeAddress(pub /** TODO get ss58 from chain */);

    return {
      paymentInfo: () =>
        this.#signingInfo(address, undefined).pipe(
          switchMap((info) => {
            const message = `${CONSTS.MAGIC_SIG_FAKE}${pub.slice(
              2,
            )}${CONSTS.FAKE_SIGNATURE.slice(
              2,
            )}00${this.registry
              .createType("[Compact<u32>; 2]", [
                info.nonce.toNumber(),
                0 /* TODO tip */,
              ])
              .toHex()
              .slice(2)}${method.slice(2)}`;

            return this.rpc.payment.queryInfo(message);
          }),
        ),
      signAndSend: (
        signer: Signer,
        { era /** TODO tip */ }: { era?: IExtrinsicEra },
      ) => {
        const status$ = new BehaviorSubject<ExtrinsicStatus | undefined>(
          undefined,
        );

        return this.#signingInfo(address, era).pipe(
          switchMap((info) => {
            const payload = {
              address,
              blockHash:
                info.header?.hash.toHex() ?? this.#genesisHash ?? "0x0",
              blockNumber: info.header?.number.toHex() ?? "0x00000000",
              era: this.registry
                .createTypeUnsafe("ExtrinsicEra", [
                  {
                    current: info.header?.number ?? 0,
                    period: era ?? info.mortalLength,
                  },
                ])
                .toHex(),
              genesisHash: this.#genesisHash ?? "0x0",
              method,
              nonce: info.nonce.toHex(),
              signedExtensions: [
                "CheckNonZeroSender",
                "CheckSpecVersion",
                "CheckTxVersion",
                "CheckGenesis",
                "CheckMortality",
                "CheckNonce",
                "CheckWeight",
                "ChargeTransactionPayment",
              ],
              specVersion: this.#runtimeVersion?.specVersion.toHex() ?? "0x0",
              tip: "0x00000000000000000000000000000000",
              transactionVersion:
                this.#runtimeVersion?.transactionVersion?.toHex() ?? "0x0",
              version: 4,
            };

            return of(payload).pipe(
              switchMap((p) => signer.signPayload?.(p) ?? of(undefined)),
              switchMap((result) => {
                if (!result) {
                  return of(undefined);
                }

                const message = `${CONSTS.MAGIC_SIG}${pub.slice(
                  2,
                )}${result.signature.slice(2)}${payload.era.slice(
                  2,
                )}${this.registry
                  .createType("[Compact<u32>; 2]", [
                    info.nonce.toNumber(),
                    0 /* TODO tip */,
                  ])
                  .toHex()
                  .slice(2)}${method.slice(2)}`;

                return this.rpc.provider.subscribe(
                  "author_extrinsicUpdate",
                  "author_submitAndWatchExtrinsic",
                  [message],
                  (err, raw: any) => {
                    const status = this.registry.createType<ExtrinsicStatus>(
                      "ExtrinsicStatus",
                      raw,
                    );

                    if (!err) {
                      status$.next(status);
                    } else {
                      console.error(err);
                      // TODO proper error handling
                    }
                  },
                );
              }),
            );
          }),
          combineLatestWith(status$),
          tap(([subId, status]) => {
            if (
              subId &&
              (status?.isRetracted ||
                status?.isFinalityTimeout ||
                status?.isFinalized ||
                status?.isUsurped ||
                status?.isDropped ||
                status?.isInvalid)
            ) {
              this.rpc.provider.unsubscribe(
                "author_extrinsicUpdate",
                "author_submitAndWatchExtrinsic",
                subId,
              );
            }
          }),
          map(([, status]) => {
            return status;
          }),
        );
      },
    };
  }

  disconnect() {
    this.rpc.provider.disconnect();
  }
}

export default ApiLite;
