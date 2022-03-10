import type {
  AccountId,
  AccountIndex,
  Address,
  AccountInfo,
} from "@polkadot/types/interfaces";

import { ApiInterfaceRx } from "@polkadot/api/types";
import { memo } from "@polkadot/api-derive/util";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { SignedBalance } from "../../interfaces/types";
import BN from "bn.js";

type RawResult = [
  SignedBalance,
  SignedBalance,
  SignedBalance,
  SignedBalance,
  SignedBalance,
  SignedBalance,
  AccountInfo,
];

interface LtvResult {
  ltv: BN;
}

type DeriveBalancesQuery = (
  address: AccountIndex | AccountId | Address | string,
) => Observable<LtvResult>;

// TODO make fully compatible with polkadot derive output

export const ltv = (
  instanceId: string,
  api: ApiInterfaceRx,
): DeriveBalancesQuery =>
  // @ts-ignore
  memo(instanceId, (address: AccountIndex | AccountId | Address | string) =>
    api
      .queryMulti([
        [api.query.eqBalances.account, [address, "EQ"]],
        [api.query.eqBalances.account, [address, "Usd"]],
        [api.query.eqBalances.account, [address, "Eth"]],
        [api.query.eqBalances.account, [address, "Btc"]],
        [api.query.eqBalances.account, [address, "Eos"]],
        [api.query.eqBalances.account as any, [address, "Dot"]],
      ])
      .pipe(
        // @ts-ignore
        map(
          (raw): LtvResult => {
            if (raw.length < 6) {
              throw new Error("6 members expected");
            }

            const res = raw as RawResult;
            const balances = (res as SignedBalance[]).slice(0, raw.length - 1);

            const collateral = balances
              .filter((bal) => {
                return (bal as SignedBalance).isPositive;
              })
              .reduce((res, bal) => {
                return res.add(bal.asPositive);
              }, new BN(0));

            const debt = balances
              .filter((bal) => {
                return (bal as SignedBalance).isNegative;
              })
              .reduce((res, bal) => {
                return res.add(bal.asNegative);
              }, new BN(0));

            return {
              ltv: !debt.isZero() ? collateral.div(debt) : new BN(0),
            };
          },
        ),
      ),
  );
