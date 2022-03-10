import type { ApiTypes } from "@polkadot/api/types";
import {
  createApi as createEqApi,
  createApiRx as createEqRxApi,
  Api as EqApi,
} from "@equilab/api/equilibrium";

import {
  createApi as createEqNextApi,
  createApiRx as createEqNextApiRx,
  Api as EqNextApi,
} from "@equilab/api/eq-next";

import {
  createApi as createGensApi,
  createApiRx as createGensRxApi,
  Api as GensApi,
} from "@equilab/api/genshiro";

import * as util from "@polkadot/util";
import * as utilCrypto from "@polkadot/util-crypto";

import * as extensionDApp from "@polkadot/extension-dapp";

import ApiLite from "./lite/class";

export { ApiPromise, ApiRx } from "@polkadot/api";
export { WsProvider } from "@polkadot/rpc-provider";

export type ChainApiTypes = "Eq" | "EqNext" | "Gens";

export type Api<C extends ChainApiTypes, T extends ApiTypes = "promise"> =
  C extends "Eq" ? EqApi<T> : C extends "EqNext" ? EqNextApi<T> : GensApi<T>;

export const isApi = <C extends ChainApiTypes, T extends ApiTypes>(
  api: Api<ChainApiTypes, T> | undefined,
  apiType: C,
): api is Api<C, T> => {
  return api?._type === apiType;
};

export const getApiCreator = <C extends ChainApiTypes>(
  apiType: C,
): C extends "Eq"
  ? typeof createEqApi
  : C extends "EqNext"
  ? typeof createEqNextApi
  : typeof createGensApi => {
  if (apiType === "Eq") {
    return createEqApi as any;
  } else if (apiType === "EqNext") {
    return createEqNextApi as any;
  } else {
    return createGensApi as any;
  }
};

export const getApiCreatorRx = <C extends ChainApiTypes>(
  apiType: C,
): C extends "Eq"
  ? typeof createEqRxApi
  : C extends "EqNext"
  ? typeof createEqNextApiRx
  : typeof createGensRxApi => {
  if (apiType === "Eq") {
    return createEqRxApi as any;
  } else if (apiType === "EqNext") {
    return createEqNextApiRx as any;
  } else {
    return createGensRxApi as any;
  }
};

export * from "./util";
export { util, utilCrypto, extensionDApp, ApiLite };
