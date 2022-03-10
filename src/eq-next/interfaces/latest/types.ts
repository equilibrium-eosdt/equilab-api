// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Bytes, Enum, Option, Struct, U8aFixed, Vec, bool, i128, i32, i64, u128, u32, u64, u8 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { AuthIndex } from '@polkadot/types/interfaces/imOnline';
import type { AccountId, Index, Permill } from '@polkadot/types/interfaces/runtime';
import type { SessionKeys3 } from '@polkadot/types/interfaces/session';
import type { RefCount } from '@polkadot/types/interfaces/system';
import type { MultiAsset, MultiLocation } from '@polkadot/types/interfaces/xcm';

/** @name AccountInfo */
export interface AccountInfo extends Struct {
  readonly nonce: Index;
  readonly consumers: RefCount;
  readonly providers: RefCount;
}

/** @name Address */
export interface Address extends AccountId {}

/** @name AmmPool */
export interface AmmPool extends Enum {
  readonly isCurve: boolean;
  readonly asCurve: PoolId;
  readonly isYield: boolean;
  readonly asYield: PoolId;
  readonly type: 'Curve' | 'Yield';
}

/** @name Asset */
export interface Asset extends Struct {
  readonly 0: AssetIdInnerType;
}

/** @name AssetData */
export interface AssetData extends Struct {
  readonly id: Asset;
  readonly lot: FixedU128;
  readonly price_step: FixedU128;
  readonly maker_fee: FixedU128;
  readonly taker_fee: FixedU128;
  readonly multi_asset: Option<MultiAsset>;
  readonly multi_location: Option<MultiLocation>;
  readonly debt_weight: DebtWeightType;
  readonly buyout_priority: u64;
  readonly asset_type: AssetType;
  readonly is_dex_enabled: bool;
  readonly collateral_enabled: bool;
}

/** @name AssetId */
export interface AssetId extends Asset {}

/** @name AssetIdInnerType */
export interface AssetIdInnerType extends u64 {}

/** @name AssetMetrics */
export interface AssetMetrics extends Struct {
  readonly period_start: Duration;
  readonly period_end: Duration;
  readonly returns: Vec<FixedNumber>;
  readonly volatility: FixedNumber;
  readonly correlations: Vec<ITuple<[Asset, FixedNumber]>>;
}

/** @name AssetName */
export interface AssetName extends Bytes {}

/** @name AssetType */
export interface AssetType extends Enum {
  readonly isNative: boolean;
  readonly isPhysical: boolean;
  readonly isSynthetic: boolean;
  readonly isLp: boolean;
  readonly asLp: AmmPool;
  readonly type: 'Native' | 'Physical' | 'Synthetic' | 'Lp';
}

/** @name Balance */
export interface Balance extends u64 {}

/** @name BalanceOf */
export interface BalanceOf extends Balance {}

/** @name BalancesAggregate */
export interface BalancesAggregate extends Struct {
  readonly total_issuance: Balance;
  readonly total_debt: Balance;
}

/** @name BestPrice */
export interface BestPrice extends Struct {
  readonly ask: Option<FixedI64>;
  readonly bid: Option<FixedI64>;
}

/** @name BinaryId */
export interface BinaryId extends u64 {}

/** @name BinaryInfo */
export interface BinaryInfo extends Struct {
  readonly start_time: u64;
  readonly end_time: u64;
  readonly proper: Asset;
  readonly minimal_amount: Balance;
  readonly target: ITuple<[Asset, BinaryMode]>;
  readonly total: ITuple<[Balance, Balance]>;
  readonly claimed: Balance;
}

/** @name BinaryMode */
export interface BinaryMode extends Enum {
  readonly isCallPut: boolean;
  readonly asCallPut: FixedI64;
  readonly isInOut: boolean;
  readonly asInOut: ITuple<[FixedI64, FixedI64]>;
  readonly type: 'CallPut' | 'InOut';
}

/** @name BlockNumber */
export interface BlockNumber extends u64 {}

/** @name CapVec */
export interface CapVec extends Struct {
  readonly head_index: u32;
  readonly len_cap: u32;
  readonly items: Vec<FixedNumber>;
}

/** @name ChainId */
export interface ChainId extends u8 {}

/** @name ChunkKey */
export interface ChunkKey extends u64 {}

/** @name Currency */
export interface Currency extends Enum {
  readonly isUnknown: boolean;
  readonly isEqd: boolean;
  readonly isEq: boolean;
  readonly isEth: boolean;
  readonly isBtc: boolean;
  readonly isEos: boolean;
  readonly isDot: boolean;
  readonly isCrv: boolean;
  readonly type: 'Unknown' | 'Eqd' | 'Eq' | 'Eth' | 'Btc' | 'Eos' | 'Dot' | 'Crv';
}

/** @name DataPoint */
export interface DataPoint extends Struct {
  readonly price: u64;
  readonly account_id: AccountId;
  readonly block_number: BlockNumber;
  readonly timestamp: u64;
}

/** @name DebtWeightType */
export interface DebtWeightType extends i128 {}

/** @name DebtWeightTypeInner */
export interface DebtWeightTypeInner extends i128 {}

/** @name DepositNonce */
export interface DepositNonce extends u64 {}

/** @name Duration */
export interface Duration extends Struct {
  readonly secs: u64;
  readonly nanos: u32;
}

/** @name FinancialMetrics */
export interface FinancialMetrics extends Struct {
  readonly period_start: Duration;
  readonly period_end: Duration;
  readonly assets: Vec<Asset>;
  readonly mean_returns: Vec<FixedNumber>;
  readonly volatilities: Vec<FixedNumber>;
  readonly correlations: Vec<FixedNumber>;
  readonly covariances: Vec<FixedNumber>;
}

/** @name FinancialRecalcPeriodMs */
export interface FinancialRecalcPeriodMs extends u64 {}

/** @name FixedI64 */
export interface FixedI64 extends i64 {}

/** @name FixedNumber */
export interface FixedNumber extends u128 {}

/** @name FixedU128 */
export interface FixedU128 extends u128 {}

/** @name Keys */
export interface Keys extends SessionKeys3 {}

/** @name LockPeriod */
export interface LockPeriod extends Enum {
  readonly isNone: boolean;
  readonly isThreeMonth: boolean;
  readonly isSixMonth: boolean;
  readonly isYear: boolean;
  readonly type: 'None' | 'ThreeMonth' | 'SixMonth' | 'Year';
}

/** @name LookupSource */
export interface LookupSource extends AccountId {}

/** @name MarginState */
export interface MarginState extends Enum {
  readonly isGood: boolean;
  readonly isSubGood: boolean;
  readonly isMaintenanceStart: boolean;
  readonly asMaintenanceStart: u64;
  readonly isMaintenanceIsGoing: boolean;
  readonly asMaintenanceIsGoing: u64;
  readonly isMaintenanceTimeOver: boolean;
  readonly asMaintenanceTimeOver: u64;
  readonly isMaintenanceEnd: boolean;
  readonly isSubCritical: boolean;
  readonly type: 'Good' | 'SubGood' | 'MaintenanceStart' | 'MaintenanceIsGoing' | 'MaintenanceTimeOver' | 'MaintenanceEnd' | 'SubCritical';
}

/** @name MaxCountOfAssetsRecalcPerBlock */
export interface MaxCountOfAssetsRecalcPerBlock extends i32 {}

/** @name MmPoolInfo */
export interface MmPoolInfo extends Struct {
  readonly account_id: AccountId;
  readonly min_amount: Balance;
  readonly currency: Asset;
  readonly initial_balance: Balance;
}

/** @name Number */
export interface Number extends FixedU128 {}

/** @name OperationRequest */
export interface OperationRequest extends Struct {
  readonly account: AccountId;
  readonly authority_index: AuthIndex;
  readonly validators_len: u32;
  readonly block_num: BlockNumber;
}

/** @name OperationRequestDexDeleteOrder */
export interface OperationRequestDexDeleteOrder extends Struct {
  readonly asset: Asset;
  readonly order_id: OrderId;
  readonly price: FixedI64;
  readonly who: AccountId;
  readonly buyout: Option<Balance>;
  readonly authority_index: AuthIndex;
  readonly validators_len: u32;
  readonly block_num: BlockNumber;
}

/** @name OperationRequestLiqFm */
export interface OperationRequestLiqFm extends Struct {
  readonly authority_index: AuthIndex;
  readonly validators_len: u32;
  readonly block_num: BlockNumber;
}

/** @name Order */
export interface Order extends Struct {
  readonly order_id: OrderId;
  readonly account_id: AccountId;
  readonly side: OrderSide;
  readonly price: FixedI64;
  readonly amount: FixedU128;
  readonly created_at: u64;
  readonly expiration_time: u64;
}

/** @name OrderId */
export interface OrderId extends u64 {}

/** @name OrderSide */
export interface OrderSide extends Enum {
  readonly isBuy: boolean;
  readonly isSell: boolean;
  readonly type: 'Buy' | 'Sell';
}

/** @name OrderType */
export interface OrderType extends Enum {
  readonly isLimit: boolean;
  readonly asLimit: {
    readonly price: FixedI64;
    readonly expiration_time: u64;
  } & Struct;
  readonly isMarket: boolean;
  readonly type: 'Limit' | 'Market';
}

/** @name PoolId */
export interface PoolId extends u32 {}

/** @name PoolInfo */
export interface PoolInfo extends Struct {
  readonly owner: AccountId;
  readonly pool_asset: AssetId;
  readonly assets: Vec<AssetId>;
  readonly amplification: Number;
  readonly fee: Permill;
  readonly admin_fee: Permill;
  readonly balances: Vec<Balance>;
  readonly total_balances: Vec<Balance>;
}

/** @name PoolTokenIndex */
export interface PoolTokenIndex extends u32 {}

/** @name PortfolioMetrics */
export interface PortfolioMetrics extends Struct {
  readonly period_start: Duration;
  readonly period_end: Duration;
  readonly z_score: u32;
  readonly volatility: FixedNumber;
  readonly value_at_risk: FixedNumber;
}

/** @name Price */
export interface Price extends u128 {}

/** @name PriceLog */
export interface PriceLog extends Struct {
  readonly latest_timestamp: Duration;
  readonly prices: CapVec;
}

/** @name PricePayload */
export interface PricePayload extends Struct {
  readonly public: U8aFixed;
  readonly asset: Asset;
  readonly price: FixedI64;
  readonly block_number: BlockNumber;
}

/** @name PricePeriod */
export interface PricePeriod extends Enum {
  readonly isMin: boolean;
  readonly isTenMin: boolean;
  readonly isHour: boolean;
  readonly isFourHour: boolean;
  readonly isDay: boolean;
  readonly type: 'Min' | 'TenMin' | 'Hour' | 'FourHour' | 'Day';
}

/** @name PricePoint */
export interface PricePoint extends Struct {
  readonly block_number: BlockNumber;
  readonly timestamp: u64;
  readonly last_fin_recalc_timestamp: Timestamp;
  readonly price: u64;
  readonly data_points: Vec<DataPoint>;
}

/** @name PriceUpdate */
export interface PriceUpdate extends Struct {
  readonly period_start: Duration;
  readonly time: Duration;
  readonly price: FixedNumber;
}

/** @name ProposalStatus */
export interface ProposalStatus extends Enum {
  readonly isInitiated: boolean;
  readonly isApproved: boolean;
  readonly isRejected: boolean;
  readonly type: 'Initiated' | 'Approved' | 'Rejected';
}

/** @name ProposalVotes */
export interface ProposalVotes extends Struct {
  readonly votes_for: Vec<AccountId>;
  readonly votes_against: Vec<AccountId>;
  readonly status: ProposalStatus;
  readonly expiry: BlockNumber;
}

/** @name ResourceId */
export interface ResourceId extends U8aFixed {}

/** @name Round */
export interface Round extends Struct {
  readonly total_cap: Balance;
  readonly individual_cap: Balance;
  readonly end: u64;
  readonly token: Asset;
  readonly minimal_buy_amount: Balance;
  readonly vesting_params: VestingParams;
}

/** @name Signature */
export interface Signature extends u32 {}

/** @name SignedBalance */
export interface SignedBalance extends Enum {
  readonly isPositive: boolean;
  readonly asPositive: Balance;
  readonly isNegative: boolean;
  readonly asNegative: Balance;
  readonly type: 'Positive' | 'Negative';
}

/** @name SubAccType */
export interface SubAccType extends Enum {
  readonly isBailsman: boolean;
  readonly isBorrower: boolean;
  readonly isLender: boolean;
  readonly type: 'Bailsman' | 'Borrower' | 'Lender';
}

/** @name Timestamp */
export interface Timestamp extends u64 {}

/** @name TotalAggregates */
export interface TotalAggregates extends Struct {
  readonly collateral: Balance;
  readonly debt: Balance;
}

/** @name TransferReason */
export interface TransferReason extends Enum {
  readonly isCommon: boolean;
  readonly isInterestFee: boolean;
  readonly isMarginCall: boolean;
  readonly isLiquidityFarming: boolean;
  readonly isBailsmenRedistribution: boolean;
  readonly isTreasuryEqBuyout: boolean;
  readonly isTreasuryBuyEq: boolean;
  readonly isSubaccount: boolean;
  readonly isLock: boolean;
  readonly isUnlock: boolean;
  readonly isClaim: boolean;
  readonly isCurveFeeWithdraw: boolean;
  readonly isReserve: boolean;
  readonly isUnreserve: boolean;
  readonly type: 'Common' | 'InterestFee' | 'MarginCall' | 'LiquidityFarming' | 'BailsmenRedistribution' | 'TreasuryEqBuyout' | 'TreasuryBuyEq' | 'Subaccount' | 'Lock' | 'Unlock' | 'Claim' | 'CurveFeeWithdraw' | 'Reserve' | 'Unreserve';
}

/** @name UnsignedPriorityPair */
export interface UnsignedPriorityPair extends ITuple<[u64, u64]> {}

/** @name UserGroup */
export interface UserGroup extends Enum {
  readonly isUnknown: boolean;
  readonly isBalances: boolean;
  readonly isBailsmen: boolean;
  readonly isBorrowers: boolean;
  readonly isLenders: boolean;
  readonly type: 'Unknown' | 'Balances' | 'Bailsmen' | 'Borrowers' | 'Lenders';
}

/** @name VestingInfo */
export interface VestingInfo extends Struct {
  readonly locked: Balance;
  readonly perBlock: Balance;
  readonly startingBlock: BlockNumber;
}

/** @name VestingParams */
export interface VestingParams extends Struct {
  readonly blocks_until_beginning: u64;
  readonly amount_of_blocks: u64;
}

/** @name XdotNumber */
export interface XdotNumber extends u128 {}

/** @name XdotPoolInfo */
export interface XdotPoolInfo extends Struct {
  readonly pool_asset: AssetId;
  readonly lp_total_supply: Balance;
  readonly account: AccountId;
  readonly base_asset: AssetId;
  readonly xbase_asset: AssetId;
  readonly g1: XdotNumber;
  readonly g2: XdotNumber;
  readonly maturity: u64;
  readonly ts: XdotNumber;
}

export type PHANTOM_LATEST = 'latest';
