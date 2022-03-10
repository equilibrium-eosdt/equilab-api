import { ApiRx } from "@polkadot/api";
import { WsProvider } from "@polkadot/rpc-provider";
import { decodeAddress } from "@polkadot/util-crypto";
import assert from "assert";
import { combineLatest, filter } from "rxjs";
import ApiLite from "../lite/class";

import "@polkadot/api-augment/kusama";
import "mocha";

let api: ApiRx;
let apiLite: ApiLite;

const ADDRESS = "12iwSN3eJmJEy52QYH35ZUHB91RpYvpEA9ajjKAxV4kPpLbF";
const PUB = `0x${Buffer.from(decodeAddress(ADDRESS)).toString("hex")}`;
const AMOUNT = "1010000000000";

/*
const fakeSignature =
  "0x0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101";
  */

const XCM_ARGS = [
  {
    V1: {
      parents: 0,
      interior: {
        X1: {
          Parachain: 2024, // TODO no hardcode
        },
      },
    },
  },
  {
    V1: {
      parents: 0,
      interior: {
        X1: {
          AccountId32: {
            network: "Kusama",
            id: PUB,
          },
        },
      },
    },
  },
  {
    V1: [
      {
        id: {
          Concrete: {
            parents: 0,
            interior: "Here",
          },
        },
        fun: {
          Fungible: AMOUNT,
        },
      },
    ],
  },
  0,
];

describe("Substrate lite api", () => {
  before((done) => {
    const provider = new WsProvider(
      "wss://parachain-devnet.equilab.io/genshiro/relay/api/wss",
    );

    const api$ = ApiRx.create({ provider });
    apiLite = new ApiLite(provider);

    const sub = combineLatest([
      api$,
      apiLite.isConnected.pipe(filter((v) => !!v)),
    ]).subscribe(([_api]) => {
      api = _api;
      sub.unsubscribe();
      done();
    });
  });

  it("fetches same balances", (done) => {
    const sub = combineLatest([
      api.query.system.account(ADDRESS),
      apiLite.account(ADDRESS),
    ]).subscribe((values) => {
      console.log(values.map((info) => info?.data.free.toString(10)));

      assert.deepEqual(
        values[0]?.data.free.toString(10),
        values[1]?.data.free.toString(10),
      );

      sub.unsubscribe();
      done();
    });
  });

  it("xcm format is the same", () => {
    const ex = api.tx.xcmPallet
      // @ts-ignore
      .reserveTransferAssets(...(XCM_ARGS as any));

    console.log(
      ex.toHex(),
      ex.toHuman(),
      ex.toJSON(),
      ex.toRawType(),
      ex.inner.toHuman(),
    );

    ex.signFake(ADDRESS, {
      blockHash:
        "0x7f3610d477c95a39d7cf83d8fed058b76d2c0ce2b4b30b5ad307ad7c00a2b249",
      genesisHash:
        "0x27185110f46b47703709cdbab3bbe13213dd9f787d116d6fee4c9a7b4abeac6c",
      nonce: "0x00000008",
      runtimeVersion: api.runtimeVersion,
    });
    console.log(
      ex.toHex(),
      ex.toHuman(),
      ex.toJSON(),
      ex.toRawType(),
      ex.inner.toHuman(),
    );
    //const exLite = apiLite.xcmTransfer(PUB, AMOUNT);

    // const callData = [exLite.toHex().slice(2), ex.toHex().slice(6)];

    // @ts-ignore
    //assert.deepEqual(...callData);
  });

  after(() => {
    apiLite.rpc.provider.disconnect();
  });
});

export {};
