import type {
  Currency,
  SignedBalance,
} from "@equilab/api/equilibrium/interfaces";

import type {
  ApiInterfaceRx,
  AugmentedQueryDoubleMap,
} from "@polkadot/api/types";

import type {
  AccountData,
  AccountId,
  AccountIndex,
  Address,
} from "@polkadot/types/interfaces";

import type { Codec } from '@polkadot/types/types';
import type { Observable } from "rxjs";

import { Enum } from "@polkadot/types";
import { map } from "rxjs/operators";
import BN from 'bn.js';

type EqBalanceDoubleMap = AugmentedQueryDoubleMap<
  "rxjs",
  (
    key1: AccountIndex | AccountId | Address | string,
    key2: Currency | string,
  ) => Observable<SignedBalance>,
  [AccountId, Currency]
>;

const transformBalanceStorage = (
  query: EqBalanceDoubleMap,
  arg: Currency | string,
  transform: <SB extends Enum>(data: SB) => AccountData,
) => {
  // HACK as we cannot properly transform queryMulti result, define AccountData getters on standard Enum
  if (!(Enum as { hacked?: boolean }).hacked) {
    (Enum as { hacked?: boolean }).hacked = true;

    for (const prop of ["free", "reserved", "miscFrozen", "feeFrozen"] as Array<
      keyof AccountData
    >) {
      Object.defineProperty(Enum.prototype, prop, {
        get() {
          const accData: AccountData = transform(this as Enum);

          return accData[prop];
        },
        set() {
          // Do nothing
        },
      });
    }
  }

  // Transform result if we call the func normally
  const boundFunction = (
    account: AccountIndex | AccountId | Address | string,
  ) =>
    //@ts-ignore
    query(account, arg).pipe(map(transform));

  // Bind currency as second key for doubleMap for queryMulti
  const boundCreator = (account: AccountIndex | AccountId | Address | string) =>
    query.creator([account, arg]);

  Object.assign(boundCreator, { ...query.creator });

  return Object.assign(boundFunction, {
    ...query,
    creator: boundCreator,
  } as any);
};

const signedBalancePredicate = (raw: Codec): raw is SignedBalance =>
  ["asNegative", "asPositive", "isNegative", "isPositive"].some((key) =>
    Object.prototype.hasOwnProperty.call(raw, key),
  );

export const createCustomAccount = (cur: string) => (
  instanceId: string,
  api: ApiInterfaceRx, // TODO rename as it's not a NOP anymore
) => {
  const registry = api.registry;

  const transform = <SB extends Enum>(balance: SB): AccountData => {
    let free = registry.createType("Balance");
    const reserved = registry.createType("Balance");
    const miscFrozen = registry.createType("Balance");
    const feeFrozen = registry.createType("Balance");

    if (signedBalancePredicate(balance)) {
      if (balance.isPositive) {
        free = registry.createType("Balance", balance.asPositive);
      } else if (balance.isNegative) {
        free = registry.createType(
          "Balance",
          balance.asNegative.mul(new BN(-1)),
        );
      }
    }

    return registry.createType("AccountData", {
      feeFrozen,
      free,
      miscFrozen,
      reserved,
    });
  };

  return transformBalanceStorage(
    (api.query.eqBalances.account as unknown) as EqBalanceDoubleMap,
    cur,
    transform,
  );
};
