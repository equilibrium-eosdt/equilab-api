import "../interfaces/augment-api";
import "../interfaces/augment-types";
import type { ApiBase } from "@polkadot/api/base";
import type { ApiTypes } from "@polkadot/api/types";

export default <T extends ApiTypes>(api: ApiBase<T>) => ({
  batch: api.tx.utility?.batch,
  sudo: api.tx.sudo?.sudo,
  fromSubaccount: api.tx.subaccounts.transferFromSubaccount,
  toSubaccount: api.tx.subaccounts.transferToSubaccount,
  dexCreateOrder: api.tx.eqDex?.createOrder,

  // Balance
  transfer: api.tx.eqBalances.transfer,

  // Balance Sudo
  deposit: (...args: Parameters<typeof api.tx.eqBalances.deposit>) =>
    api.tx.sudo.sudo(api.tx.eqBalances.deposit(...args)),

  withdraw: (...args: Parameters<typeof api.tx.eqBalances.burn>) =>
    api.tx.sudo.sudo(api.tx.eqBalances.burn(...args)),

  // Bridge
  withdrawExternal: api.tx.eqBridge.transferNative,

  // Claim
  claim: api.tx.claims.claim,
  claimAttest: api.tx.claims.claimAttest,

  // Claim Sudo
  mintClaim: (...args: Parameters<typeof api.tx.claims.mintClaim>) =>
    api.tx.sudo.sudo(api.tx.claims.mintClaim(...args)),

  // Lockgrop
  lockdrop: api.tx.eqLockdrop?.lock,

  // Subaccounts
  transferFrom: api.tx.subaccounts.transferFromSubaccount,
  transferTo: api.tx.subaccounts.transferToSubaccount,

  // Vesting
  vest: api.tx.vesting.vest,
  vestTo: api.tx.vesting.vestOther,

  // Whitelist Sudo
  whitelist: (...args: Parameters<typeof api.tx.whitelists.addToWhitelist>) =>
    api.tx.sudo.sudo(api.tx.whitelists.addToWhitelist(...args)),

  // Oracle
  setPrice: api.tx.oracle.setPrice,
});
