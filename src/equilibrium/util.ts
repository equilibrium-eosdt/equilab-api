import type { ApiBase } from "@polkadot/api/base";
import type { ApiTypes } from "@polkadot/api/types";

export const DEFAULT_DECIMALS = 9;

/**
 * @deprecated assets are now dynamic assume all have DEFAULT_DECIMALS
 */
export const getDecimals = <T extends ApiTypes>(
  api: ApiBase<T>,
  currency: string,
): number => {
  const tokenId = api.registry.chainTokens.findIndex(
    // All tokens in chainTokens are uppercased
    // @ts-ignore
    (curr) => curr === currency || curr === currency.toUpperCase(),
  );
  const decimals = api.registry.chainDecimals[tokenId];

  return decimals || DEFAULT_DECIMALS;
};

/**
 * @deprecated assets are now dynamic assume all have DEFAULT_DECIMALS
 */
export const getDecimalsCoefficient = <T extends ApiTypes>(
  api: ApiBase<T>,
  currency: string,
): number => {
  const decimals = getDecimals(api, currency);
  return Math.pow(10, decimals);
};
