import type { Order } from "@equilab/api/genshiro/interfaces";
import type { DeriveApi } from "@polkadot/api-derive/types";
import type { Vec } from "@polkadot/types";
import type { Observable } from "rxjs";
import { memo } from "@polkadot/api-derive/util";
import BN from "bn.js";
import { map, mergeMap } from "rxjs/operators";
import { u64FromCurrency } from "../../util";

const bnToStringWithBase = (num: BN, dec: number = 9) => {
  const TEN = new BN(10);
  const pow = new BN(dec);
  const div = TEN.pow(pow);
  const int = num.div(div);
  const fra = num.mod(div);
  const res = `${int.toString(10)}.${fra.toString(10)}`;
  return res;
};

export interface ParsedOrder {
  id: number;
  account: string;
  side: "buy" | "sell";
  price: string;
  amount: string;
  createdAt: string;
  expirationTime: string;
}

export enum Sides {
  Buy = "buy",
  Sell = "sell",
}

export const orders = (
  instanceId: string,
  api: DeriveApi,
): ((token: String) => Observable<ParsedOrder[]>) =>
  memo(instanceId, (token: string) => {
    const asset = { 0: u64FromCurrency(token) };

    return api.query.eqDex.actualChunksByAsset(asset).pipe(
      mergeMap((chunks) =>
        api.query.eqDex.ordersByAssetAndChunkKey.multi<Vec<Order>>(
          chunks.map((chunk) => [asset, chunk]),
        ),
      ),
      map((bundles) =>
        bundles.reduce((prev: ParsedOrder[], bundle) => {
          return [
            ...prev,
            ...bundle.map((order) => ({
              id: order.order_id.toNumber(),
              account: order.account_id.toString(),
              side: order.side.isBuy ? Sides.Buy : Sides.Sell,
              price: bnToStringWithBase(order.price),
              amount: bnToStringWithBase(order.amount, 18),
              createdAt: order.created_at.toString(10),
              expirationTime: order.expiration_time.toString(10),
            })),
          ];
        }, []),
      ),
    );
  });
