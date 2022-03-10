import "../interfaces/augment-api";
import "../interfaces/augment-types";
import type { ApiBase } from "@polkadot/api/base";
import type { ApiTypes } from "@polkadot/api/types";
import { u64FromCurrency } from "../util";

type TransferParams<T extends ApiTypes> = Parameters<
  ApiBase<T>["tx"]["eqBalances"]["transfer"]
>;

type TransferFromParams<T extends ApiTypes> = Parameters<
  ApiBase<T>["tx"]["subaccounts"]["transferFromSubaccount"]
>;

type TransferToParams<T extends ApiTypes> = Parameters<
  ApiBase<T>["tx"]["subaccounts"]["transferToSubaccount"]
>;

export default <T extends ApiTypes>(api: ApiBase<T>) => ({
  batch: api.tx.utility?.batch,
  sudo: api.tx.sudo?.sudo,
  fromSubaccount: api.tx.subaccounts.transferFromSubaccount,
  toSubaccount: api.tx.subaccounts.transferToSubaccount,
  dexCreateOrder: api.tx.eqDex.createOrder,

  // Balance
  transfer: (
    asset: string,
    to: TransferParams<T>[1],
    value: TransferParams<T>[2],
  ) => api.tx.eqBalances.transfer({ 0: u64FromCurrency(asset) }, to, value),

  // Balance Sudo
  deposit: (...args: Parameters<typeof api.tx.eqBalances.deposit>) =>
    api.tx.sudo.sudo(api.tx.eqBalances.deposit(...args)),

  withdraw: (...args: Parameters<typeof api.tx.eqBalances.burn>) =>
    api.tx.sudo.sudo(api.tx.eqBalances.burn(...args)),

  // Bridge
  withdrawExternal: api.tx.eqBridge.transferNative,

  // Claim
  // @ts-ignore
  claim: api.tx.claims?.claim,
  // @ts-ignore
  claimAttest: api.tx.claims?.claimAttest,

  // Claim Sudo
  // @ts-ignore
  mintClaim: (...args: any[]) =>
    // @ts-ignore
    api.tx.sudo.sudo(api.tx.claims?.mintClaim(...args)),

  // Curve
  curveExchange: api.tx.curveAmm?.exchange,
  curveAdd: api.tx.curveAmm?.addLiquidity,
  curveRemove: api.tx.curveAmm?.removeLiquidity,
  curveRemoveImbalance: api.tx.curveAmm?.removeLiquidityImbalance,
  curveRemoveOne: api.tx.curveAmm?.removeLiquidityOneCoin,

  // Lockgrop
  // @ts-ignore
  lockdrop: api.tx.eqLockdrop?.lock,

  // Subaccounts
  transferFrom: (
    subaccType: TransferFromParams<T>[0],
    asset: string,
    amount: TransferFromParams<T>[2],
  ) =>
    api.tx.subaccounts.transferFromSubaccount(
      subaccType,
      { 0: u64FromCurrency(asset) },
      amount,
    ),

  transferTo: (
    subaccType: TransferToParams<T>[0],
    asset: string,
    value: TransferToParams<T>[2],
  ) =>
    api.tx.subaccounts.transferToSubaccount(
      subaccType,
      { 0: u64FromCurrency(asset) },
      value,
    ),

  // Vesting
  vest: api.tx.vesting.vest,
  vestTo: api.tx.vesting.vestOther,

  // Whitelist Sudo
  whitelist: (...args: Parameters<typeof api.tx.whitelists.addToWhitelist>) =>
    api.tx.sudo.sudo(api.tx.whitelists.addToWhitelist(...args)),

  // Oracle
  setPrice: api.tx.oracle.setPrice,
});
