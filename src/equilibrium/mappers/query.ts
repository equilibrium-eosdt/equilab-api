import "../interfaces/augment-api";
import "../interfaces/augment-types";
import type { ApiBase } from "@polkadot/api/base";
import type { ApiTypes } from "@polkadot/api/types";

export default <T extends ApiTypes>(api: ApiBase<T>) => ({
  assetInfo: api.query.eqAssets?.assets,
  aggregates: api.query.eqAggregates.totalUserGroups,
  balances: api.query.eqBalances.account,
  rates: api.query.oracle.pricePoints,

  // Group
  hasGroup: api.query.eqAggregates.accountUserGroups,
  aggregatesByGroup: api.query.eqAggregates.totalUserGroups,

  // Balance
  getBalance: api.query.eqBalances.account,

  // Claim
  getClaim: api.query.claims.claims,
  getClaimSigning: api.query.claims.signing,
  getClaimVesting: api.query.claims.vesting,
  getTotalClaim: api.query.claims.total,

  // Lockdrop
  getLocks: api.query.eqLockdrop.locks,
  getLockTime: api.query.eqLockdrop.lockStart,

  // SubAccounts
  getAddress: api.query.subaccounts.subaccount,
  getOwner: api.query.subaccounts.ownerAccount,

  // Vesting
  getVested: api.query.vesting.vested,
  getVesting: api.query.vesting.vesting,

  // Volatility
  getMetrics: api.query.financial.metrics,
  // getPrices: api.query.volatility.prices,
  // getVolatility: api.query.volatility.volatility,

  // Oracle
  getRate: api.query.oracle.pricePoints,
});
