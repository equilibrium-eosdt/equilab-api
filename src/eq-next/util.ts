import type { ApiBase } from "@polkadot/api/base";
import type { ApiTypes } from "@polkadot/api/types";
import { BN } from "@polkadot/util/bn/bn";

const capitalize = (str: string) =>
  str.slice(0, 1).toUpperCase() + str.slice(1);

export const currencyFromU64 = (u64: number | BN) => {
  const bytes: number[] = [];
  let num = typeof u64 === "number" ? new BN(u64) : u64;

  do {
    bytes.unshift(num.modn(256));
    num = num.divn(256);
  } while (num.gtn(0));

  return capitalize(Buffer.from(bytes).toString("utf8"));
};

export const u64FromCurrency = (currency: string) => {
  const buf = Buffer.from(currency.toLowerCase());
  const size = buf.length;

  return buf.reduce(
    (val, digit, i) => val + Math.pow(256, size - 1 - i) * digit,
    0,
  );
};

export const DEFAULT_DECIMALS = 9;

/** @deprecated */
export const getDecimals = <T extends ApiTypes>(
  api: ApiBase<T>,
  currency: string,
): number => {
  const tokenId = api.registry.chainTokens.findIndex(
    // All tokens in chainTokens are uppercased
    (curr) => curr === currency || curr === currency.toUpperCase(),
  );

  const decimals = api.registry.chainDecimals[tokenId];
  return decimals || DEFAULT_DECIMALS;
};

/** @deprecated */
export const getDecimalsCoefficient = <T extends ApiTypes>(
  api: ApiBase<T>,
  currency: string,
): number => {
  const decimals = getDecimals(api, currency);
  return Math.pow(10, decimals);
};
