// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Data } from '@polkadot/types';
import type { Enum, Struct, U8aFixed, Vec, i64, u128, u32, u64, u8 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { AuthIndex } from '@polkadot/types/interfaces/imOnline';
import type { AccountId, Index } from '@polkadot/types/interfaces/runtime';
import type { SessionKeys3 } from '@polkadot/types/interfaces/session';
import type { RefCount } from '@polkadot/types/interfaces/system';

/** @name AccountInfo */
export interface AccountInfo extends Struct {
  readonly nonce: Index;
  readonly consumers: RefCount;
  readonly providers: RefCount;
}

/** @name Address */
export interface Address extends AccountId {}

/** @name Asset */
export interface Asset extends Currency {}

/** @name AssetMetrics */
export interface AssetMetrics extends Struct {
  readonly period_start: Duration;
  readonly period_end: Duration;
  readonly returns: Vec<FixedNumber>;
  readonly volatility: FixedNumber;
  readonly correlations: Vec<ITuple<[Asset, FixedNumber]>>;
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

/** @name Currency */
export interface Currency extends Enum {
  readonly isUnknown: boolean;
  readonly isUsd: boolean;
  readonly isEq: boolean;
  readonly isEth: boolean;
  readonly isBtc: boolean;
  readonly isEos: boolean;
  readonly isDot: boolean;
  readonly isCrv: boolean;
  readonly type: 'Unknown' | 'Usd' | 'Eq' | 'Eth' | 'Btc' | 'Eos' | 'Dot' | 'Crv';
}

/** @name DataPoint */
export interface DataPoint extends Struct {
  readonly price: u64;
  readonly account_id: AccountId;
  readonly block_number: BlockNumber;
  readonly timestamp: u64;
}

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

/** @name FixedI64 */
export interface FixedI64 extends i64 {}

/** @name FixedNumber */
export interface FixedNumber extends u128 {}

/** @name Keys */
export interface Keys extends SessionKeys3 {}

/** @name LookupSource */
export interface LookupSource extends AccountId {}

/** @name OperationRequest */
export interface OperationRequest extends Struct {
  readonly account: AccountId;
  readonly authority_index: AuthIndex;
  readonly validators_len: u32;
  readonly block_num: BlockNumber;
}

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
export interface PricePayload extends Data {}

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
  readonly type: 'Common' | 'InterestFee' | 'MarginCall' | 'LiquidityFarming' | 'BailsmenRedistribution' | 'TreasuryEqBuyout' | 'TreasuryBuyEq' | 'Subaccount' | 'Lock';
}

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

export type PHANTOM_LATEST = 'latest';
