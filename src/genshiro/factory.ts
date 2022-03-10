import type { ApiOptions, ApiTypes } from "@polkadot/api/types";
import type { UnwrapObservable, UnwrapPromise } from "./types";
import { ApiPromise, ApiRx } from "@polkadot/api";
import { WsProvider } from "@polkadot/rpc-provider";
import { map } from "rxjs/operators";
import getDefs, { chainType } from "./defs";
import derives, { ChainDerives } from "./derives";
import mapQuery from "./mappers/query";
import mapTx from "./mappers/tx";
import getRpc from "./rpc";

const getOptions = (
  nodes: string | string[],
  options?: ApiOptions,
  specName?: string,
) => {
  const provider = new WsProvider(nodes);

  return {
    ...getDefs(specName),
    derives,
    provider,
    ...options,
  };
};

export const createApi = async (...params: Parameters<typeof getOptions>) => {
  const opt = getOptions(...params);
  const api = await ApiPromise.create(opt);
  const rpc = { ...api.rpc, ...getRpc(api) };
  const query = mapQuery(api);
  const tx = mapTx(api);

  return {
    /** @deprecated */
    getAccounts: async () =>
      (await api.query.system.account.keys()).map(
        (key) => key.args[0].toHuman() as string,
      ),
    /** @deprecated */
    getBlock: api.rpc.chain.getBlock,
    /** @deprecated */
    getBlockHash: api.rpc.chain.getBlockHash,
    /** @deprecated */
    getError: (...args: Parameters<typeof api.registry.findMetaError>) =>
      api.registry.findMetaError(...args),
    /** @deprecated */
    getNonce: api.rpc.system.accountNextIndex,
    /** @deprecated */
    subscribeNewBlockHeads: api.rpc.chain.subscribeNewHeads,
    /** @deprecated */
    batch: api.tx.utility?.batch,
    /** @deprecated */
    sudo: api.tx.sudo?.sudo,
    /** @deprecated */
    _api: api,
    _type: chainType,
    derive: (api.derive as unknown) as ChainDerives<"promise">,
    events: api.events,
    multi: api.queryMulti,
    onError: (cb: (...args: any[]) => void) => opt.provider.on("error", cb),
    query,
    registry: api.registry,
    rpc,
    setSigner: (signer: Parameters<typeof api.setSigner>[0]) =>
      api.setSigner(signer),
    tx,
  };
};

export const createApiRx = (...params: Parameters<typeof getOptions>) => {
  const opt = getOptions(...params);

  return ApiRx.create(opt).pipe(
    map((api) => {
      const rpc = { ...api.rpc, ...getRpc(api) };
      const query = mapQuery(api);
      const tx = mapTx(api);

      return {
        /** @deprecated */
        getAccounts: api.query.system.account
          .keys()
          .pipe(map((keys) => keys.map((key) => key.args[0].toHuman()))),
        /** @deprecated */
        getBlock: api.rpc.chain.getBlock,
        /** @deprecated */
        getBlockHash: api.rpc.chain.getBlockHash,
        /** @deprecated */
        getError: (...args: Parameters<typeof api.registry.findMetaError>) =>
          api.registry.findMetaError(...args),
        /** @deprecated */
        getNonce: api.rpc.system.accountNextIndex,
        /** @deprecated */
        subscribeNewBlockHeads: api.rpc.chain.subscribeNewHeads,
        /** @deprecated */
        batch: api.tx.utility.batch,
        /** @deprecated */
        _api: api,
        _type: chainType,
        derive: (api.derive as unknown) as ChainDerives<"rxjs">,
        events: api.events,
        multi: api.queryMulti,
        onError: (cb: (...args: any[]) => void) => opt.provider.on("error", cb),
        query,
        registry: api.registry,
        rpc,
        setSigner: (signer: Parameters<typeof api.setSigner>[0]) =>
          api.setSigner(signer),
        tx,
      };
    }),
  );
};

export type Api<T extends ApiTypes> = T extends "rxjs"
  ? UnwrapObservable<ReturnType<typeof createApiRx>>
  : UnwrapPromise<ReturnType<typeof createApi>>;
