import type { DeriveApi } from "@polkadot/api-derive/types";
import type { Observable } from "rxjs";
import { memo } from "@polkadot/api-derive/util";
import BN from "bn.js";
import { map } from "rxjs/operators";
import { u64FromCurrency } from "../../util";

const bnToStringWithBase = (DIVIDER: BN, num?: BN) => {
  if (!num) {
    return 0;
  }

  const int = num.div(DIVIDER);
  const fra = num.mod(DIVIDER);
  return `${int.toString(10)}.${fra.toString(10)}`;
};

export interface ParsedBestPrice {
  ask: string;
  bid: string;
}

export const bestPrice = (
  instanceId: string,
  api: DeriveApi,
): ((token: String) => Observable<ParsedBestPrice>) => {
  const DIVIDER = new BN(10).pow(new BN(9));
  return memo(instanceId, (token: string) => {
    const asset = { 0: u64FromCurrency(token) };

    return api.query.eqDex.bestPriceByAsset(asset).pipe(
      map((bestPrice) => ({
        ask: bnToStringWithBase(DIVIDER, bestPrice.ask.unwrapOr(undefined)),
        bid: bnToStringWithBase(DIVIDER, bestPrice.bid.unwrapOr(undefined)),
      })),
    );
  });
};
