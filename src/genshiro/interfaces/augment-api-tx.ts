// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { Asset, AssetMetrics, AssetName, AssetType, BinaryId, BinaryMode, DebtWeightTypeInner, DepositNonce, FinancialMetrics, LockPeriod, Number, OperationRequest, OperationRequestDexDeleteOrder, OperationRequestLiqFm, OrderId, OrderSide, OrderType, PoolId, PoolTokenIndex, PricePayload, ResourceId, Round, SubAccType, XdotNumber } from '@equilab/api/genshiro/interfaces/latest';
import type { ApiTypes } from '@polkadot/api-base/types';
import type { Bytes, Compact, Option, U8aFixed, Vec, bool, u128, u16, u32, u64 } from '@polkadot/types-codec';
import type { AnyNumber, ITuple } from '@polkadot/types-codec/types';
import type { ChainId } from '@polkadot/types/interfaces/bridges';
import type { Proposal } from '@polkadot/types/interfaces/democracy';
import type { Signature } from '@polkadot/types/interfaces/extrinsics';
import type { GrandpaEquivocationProof, KeyOwnerProof } from '@polkadot/types/interfaces/grandpa';
import type { ProxyType } from '@polkadot/types/interfaces/proxy';
import type { AccountId, AssetId, Balance, BalanceOf, BlockNumber, Call, CallHashOf, ChangesTrieConfiguration, FixedI64, FixedU128, Hash, Header, KeyValue, LookupSource, Moment, OpaqueCall, Perbill, Permill, ValidatorId, Weight } from '@polkadot/types/interfaces/runtime';
import type { Keys } from '@polkadot/types/interfaces/session';
import type { Key } from '@polkadot/types/interfaces/system';
import type { Timepoint } from '@polkadot/types/interfaces/utility';
import type { VestingInfo } from '@polkadot/types/interfaces/vesting';

declare module '@polkadot/api-base/types/submittable' {
  export interface AugmentedSubmittables<ApiType extends ApiTypes> {
    authorship: {
      /**
       * Provide a set of uncles.
       **/
      setUncles: AugmentedSubmittable<(newUncles: Vec<Header> | (Header | { parentHash?: any; number?: any; stateRoot?: any; extrinsicsRoot?: any; digest?: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Header>]>;
    };
    bailsman: {
      /**
       * Request to redistribute Bailsman pallet balances.
       * 
       * The dispatch origin for this call must be `Signed` by the transactor.
       **/
      reinit: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
    };
    chainBridge: {
      /**
       * Commits a vote in favour of the provided proposal.
       * 
       * If a proposal with the given nonce and source chain ID does not already exist, it will
       * be created with an initial vote in favour from the caller.
       * 
       * # <weight>
       * - weight of proposed call, regardless of whether execution is performed
       * # </weight>
       **/
      acknowledgeProposal: AugmentedSubmittable<(nonce: DepositNonce | AnyNumber | Uint8Array, srcId: ChainId | AnyNumber | Uint8Array, rId: ResourceId | string | Uint8Array, call: Proposal | { callIndex?: any; args?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [DepositNonce, ChainId, ResourceId, Proposal]>;
      /**
       * Adds a new relayer to the relayer set.
       * 
       * # <weight>
       * - O(1) lookup and insert
       * # </weight>
       **/
      addRelayer: AugmentedSubmittable<(v: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId]>;
      /**
       * Evaluate the state of a proposal given the current vote threshold.
       * 
       * A proposal with enough votes will be either executed or cancelled, and the status
       * will be updated accordingly.
       * 
       * # <weight>
       * - weight of proposed call, regardless of whether execution is performed
       * # </weight>
       **/
      evalVoteState: AugmentedSubmittable<(nonce: DepositNonce | AnyNumber | Uint8Array, srcId: ChainId | AnyNumber | Uint8Array, prop: Proposal | { callIndex?: any; args?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [DepositNonce, ChainId, Proposal]>;
      /**
       * Redistributes accumulated fees between relayers.
       **/
      redistributeFees: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Commits a vote against a provided proposal.
       * 
       * # <weight>
       * - Fixed, since execution of proposal should not be included
       * # </weight>
       **/
      rejectProposal: AugmentedSubmittable<(nonce: DepositNonce | AnyNumber | Uint8Array, srcId: ChainId | AnyNumber | Uint8Array, rId: ResourceId | string | Uint8Array, call: Proposal | { callIndex?: any; args?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [DepositNonce, ChainId, ResourceId, Proposal]>;
      /**
       * Removes an existing relayer from the set.
       * 
       * # <weight>
       * - O(1) lookup and removal
       * # </weight>
       **/
      removeRelayer: AugmentedSubmittable<(v: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId]>;
      /**
       * Removes a resource ID from the resource mapping.
       * 
       * After this call, bridge transfers with the associated resource ID will
       * be rejected.
       * 
       * # <weight>
       * - O(1) removal
       * # </weight>
       **/
      removeResource: AugmentedSubmittable<(id: ResourceId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [ResourceId]>;
      /**
       * Sets fee for chain id.
       * 
       * After that the transfers will get the fee from runtime storage.
       * # <weight>
       * - O(1) write
       * # </weight>
       **/
      setFee: AugmentedSubmittable<(chainId: ChainId | AnyNumber | Uint8Array, fee: Balance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [ChainId, Balance]>;
      /**
       * Sets proposal lifetime.
       * 
       * This lifetime is used for determine how many blocks have relays to votes for deposit.
       * # <weight>
       * - O(1) write
       * # </weight>
       **/
      setProposalLifetime: AugmentedSubmittable<(lifetime: BlockNumber | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [BlockNumber]>;
      /**
       * Stores a method name on chain under an associated resource ID.
       * 
       * # <weight>
       * - O(1) write
       * # </weight>
       **/
      setResource: AugmentedSubmittable<(id: ResourceId | string | Uint8Array, method: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [ResourceId, Bytes]>;
      /**
       * Sets the vote threshold for proposals.
       * 
       * This threshold is used to determine how many votes are required
       * before a proposal is executed.
       * 
       * # <weight>
       * - O(1) lookup and insert
       * # </weight>
       **/
      setThreshold: AugmentedSubmittable<(threshold: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Sets transfers allowability.
       * 
       * This param is used for determine transfers possibility for chain.
       * # <weight>
       * - O(1) write
       * # </weight>
       **/
      toggleChain: AugmentedSubmittable<(chainId: ChainId | AnyNumber | Uint8Array, enabled: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [ChainId, bool]>;
      /**
       * Enables a chain ID as a source or destination for a bridge transfer.
       * 
       * # <weight>
       * - O(1) lookup and insert
       * # </weight>
       **/
      whitelistChain: AugmentedSubmittable<(id: ChainId | AnyNumber | Uint8Array, fee: Balance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [ChainId, Balance]>;
    };
    curveAmm: {
      /**
       * Deposit coins into the pool
       * `amounts` - list of amounts of coins to deposit,
       * `min_mint_amount` - minimum amount of LP tokens to mint from the deposit.
       **/
      addLiquidity: AugmentedSubmittable<(poolId: PoolId | AnyNumber | Uint8Array, amounts: Vec<Balance> | (Balance | AnyNumber | Uint8Array)[], minMintAmount: Balance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [PoolId, Vec<Balance>, Balance]>;
      /**
       * Creates a pool, taking a creation fee from the caller
       **/
      createPool: AugmentedSubmittable<(assets: Vec<AssetId> | (AssetId | { 0?: any } | string | Uint8Array)[], amplification: Number | AnyNumber | Uint8Array, fee: Permill | AnyNumber | Uint8Array, adminFee: Permill | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<AssetId>, Number, Permill, Permill]>;
      /**
       * Perform an exchange between two coins.
       * `i` - index value of the coin to send,
       * `j` - index value of the coin to receive,
       * `dx` - amount of `i` being exchanged,
       * `min_dy` - minimum amount of `j` to receive.
       **/
      exchange: AugmentedSubmittable<(poolId: PoolId | AnyNumber | Uint8Array, i: PoolTokenIndex | AnyNumber | Uint8Array, j: PoolTokenIndex | AnyNumber | Uint8Array, dx: Balance | AnyNumber | Uint8Array, minDy: Balance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [PoolId, PoolTokenIndex, PoolTokenIndex, Balance, Balance]>;
      /**
       * Withdraw coins from the pool.
       * Withdrawal amount are based on current deposit ratios.
       * `amount` - quantity of LP tokens to burn in the withdrawal,
       * `min_amounts` - minimum amounts of underlying coins to receive.
       **/
      removeLiquidity: AugmentedSubmittable<(poolId: PoolId | AnyNumber | Uint8Array, amount: Balance | AnyNumber | Uint8Array, minAmounts: Vec<Balance> | (Balance | AnyNumber | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [PoolId, Balance, Vec<Balance>]>;
      /**
       * Withdraw coins from the pool in an imbalanced amount.
       * `amounts` - list of amounts of underlying coins to withdraw,
       * `max_burn_amount` - maximum amount of LP token to burn in the withdrawal.
       **/
      removeLiquidityImbalance: AugmentedSubmittable<(poolId: PoolId | AnyNumber | Uint8Array, amounts: Vec<Balance> | (Balance | AnyNumber | Uint8Array)[], maxBurnAmount: Balance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [PoolId, Vec<Balance>, Balance]>;
      /**
       * Withdraw a single coin from the pool.
       * `token_amount` - amount of LP tokens to burn in the withdrawal,
       * `i` - index value of the coin to withdraw,
       * `min_amount` - minimum amount of coin to receive.
       **/
      removeLiquidityOneCoin: AugmentedSubmittable<(poolId: PoolId | AnyNumber | Uint8Array, tokenAmount: Balance | AnyNumber | Uint8Array, i: PoolTokenIndex | AnyNumber | Uint8Array, minAmount: Balance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [PoolId, Balance, PoolTokenIndex, Balance]>;
      /**
       * Withdraw admin fee.
       **/
      withdrawAdminFees: AugmentedSubmittable<(poolId: PoolId | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [PoolId]>;
    };
    curveDistribution: {
      addFeeHolder: AugmentedSubmittable<(account: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId]>;
      /**
       * Distribute admin-fees from pallet account
       **/
      distribute: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
    };
    eqAssets: {
      /**
       * Constructs and adds an asset
       **/
      addAsset: AugmentedSubmittable<(assetName: AssetName | string | Uint8Array, lot: u128 | AnyNumber | Uint8Array, priceStep: u128 | AnyNumber | Uint8Array, makerFee: u128 | AnyNumber | Uint8Array, takerFee: u128 | AnyNumber | Uint8Array, multiAsset: u64 | AnyNumber | Uint8Array, multiLocation: u64 | AnyNumber | Uint8Array, debtWeight: DebtWeightTypeInner | AnyNumber | Uint8Array, buyoutPriority: u64 | AnyNumber | Uint8Array, assetType: AssetType | { Native: any } | { Physical: any } | { Synthetic: any } | { Lp: any } | string | Uint8Array, isDexEnabled: bool | boolean | Uint8Array, collateralEnabled: bool | boolean | Uint8Array, prices: Vec<FixedI64> | (FixedI64 | AnyNumber | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [AssetName, u128, u128, u128, u128, u64, u64, DebtWeightTypeInner, u64, AssetType, bool, bool, Vec<FixedI64>]>;
      /**
       * Removes an asset
       **/
      removeAsset: AugmentedSubmittable<(assetId: Asset | { 0?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Asset]>;
      /**
       * Updates an asset
       **/
      updateAsset: AugmentedSubmittable<(assetId: Asset | { 0?: any } | string | Uint8Array, lot: Option<u128> | null | object | string | Uint8Array, priceStep: Option<u128> | null | object | string | Uint8Array, makerFee: Option<u128> | null | object | string | Uint8Array, takerFee: Option<u128> | null | object | string | Uint8Array, multiAsset: Option<u64> | null | object | string | Uint8Array, multiLocation: Option<u64> | null | object | string | Uint8Array, debtWeight: Option<DebtWeightTypeInner> | null | object | string | Uint8Array, buyoutPriority: Option<u64> | null | object | string | Uint8Array, assetType: Option<AssetType> | null | object | string | Uint8Array, isDexEnabled: Option<bool> | null | object | string | Uint8Array, collateralEnabled: Option<bool> | null | object | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Asset, Option<u128>, Option<u128>, Option<u128>, Option<u128>, Option<u64>, Option<u64>, Option<DebtWeightTypeInner>, Option<u64>, Option<AssetType>, Option<bool>, Option<bool>]>;
    };
    eqBalances: {
      /**
       * Burns currency (sudo only). Used to withdraw currency from the system.
       * Disabled in production.
       **/
      burn: AugmentedSubmittable<(asset: Asset | { 0?: any } | string | Uint8Array, from: AccountId | string | Uint8Array, value: Balance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Asset, AccountId, Balance]>;
      /**
       * Adds currency to account balance (sudo only). Used to deposit currency
       * into system. Disabled in production.
       **/
      deposit: AugmentedSubmittable<(asset: Asset | { 0?: any } | string | Uint8Array, to: AccountId | string | Uint8Array, value: Balance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Asset, AccountId, Balance]>;
      /**
       * Disable transfers between accounts
       **/
      disableTransfers: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Enable transfers between accounts
       **/
      enableTransfers: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Transfers `value` amount of `Asset` from trx sender to account id `to`
       **/
      transfer: AugmentedSubmittable<(asset: Asset | { 0?: any } | string | Uint8Array, to: AccountId | string | Uint8Array, value: Balance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Asset, AccountId, Balance]>;
    };
    eqBridge: {
      /**
       * This can be called by the bridge to demonstrate an arbitrary call from a proposal.
       **/
      remark: AugmentedSubmittable<(hash: Hash | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Hash]>;
      /**
       * Stores minimum transfer amount for sending asset to external chain.
       * Sudo only.
       * 
       * # <weight>
       * - O(1) write
       * # </weight>
       **/
      setMinimumTransferAmount: AugmentedSubmittable<(destId: ChainId | AnyNumber | Uint8Array, resourceId: ResourceId | string | Uint8Array, minimumAmount: Balance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [ChainId, ResourceId, Balance]>;
      /**
       * Stores an asset on chain under an associated resource ID.
       * Sudo only.
       * 
       * # <weight>
       * - O(1) write
       * # </weight>
       **/
      setResource: AugmentedSubmittable<(id: ResourceId | string | Uint8Array, asset: Asset | { 0?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [ResourceId, Asset]>;
      /**
       * Deposits specified amount of Eq/Gens tokens to the user's account
       **/
      transfer: AugmentedSubmittable<(to: AccountId | string | Uint8Array, amount: Balance | AnyNumber | Uint8Array, resourceId: ResourceId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId, Balance, ResourceId]>;
      /**
       * Transfers some amount of the native token to some recipient on a (whitelisted) destination chain.
       * Charges fee and accumulates it on the special account.
       **/
      transferNative: AugmentedSubmittable<(amount: Balance | AnyNumber | Uint8Array, recipient: Bytes | string | Uint8Array, destId: ChainId | AnyNumber | Uint8Array, resourceId: ResourceId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Balance, Bytes, ChainId, ResourceId]>;
    };
    eqDex: {
      createOrder: AugmentedSubmittable<(asset: Asset | { 0?: any } | string | Uint8Array, orderType: OrderType | { Limit: any } | { Market: any } | string | Uint8Array, side: OrderSide | 'Buy' | 'Sell' | number | Uint8Array, amount: FixedU128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Asset, OrderType, OrderSide, FixedU128]>;
      /**
       * Delete order.
       * The dispatch origin for this call must be _None_ (unsigned transaction).
       **/
      deleteOrder: AugmentedSubmittable<(request: OperationRequestDexDeleteOrder | { asset?: any; order_id?: any; price?: any; who?: any; buyout?: any; authority_index?: any; validators_len?: any; block_num?: any } | string | Uint8Array, signature: Signature | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [OperationRequestDexDeleteOrder, Signature]>;
      /**
       * Delete order. This must be called by order owner or root.
       **/
      deleteOrderExternal: AugmentedSubmittable<(asset: Asset | { 0?: any } | string | Uint8Array, orderId: OrderId | AnyNumber | Uint8Array, price: FixedI64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Asset, OrderId, FixedI64]>;
      /**
       * Update stored asset corridor value
       **/
      updateAssetCorridor: AugmentedSubmittable<(asset: Asset | { 0?: any } | string | Uint8Array, newCorridorValue: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Asset, u32]>;
    };
    eqLiquidityFarming: {
      /**
       * Set manager for this pallet instance
       * 
       * The dispatch origin for this call must be _Root_.
       * 
       * Parameters:
       * - `who`: Which account will be the pallet manager.
       **/
      setManager: AugmentedSubmittable<(who: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId]>;
      /**
       * Transfer funds from pallets account
       * 
       * The dispatch origin for this call must be _Root_ or _Manager_.
       * 
       * Parameters:
       * - `asset`: The asset that will be transfered;
       * - `target`: The account that should be transferred funds;
       * - `value`: The amount of `asset` that will be transferred.
       **/
      transfer: AugmentedSubmittable<(asset: Asset | { 0?: any } | string | Uint8Array, target: AccountId | string | Uint8Array, value: BalanceOf | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Asset, AccountId, BalanceOf]>;
      /**
       * Transfer funds from pallets account with vesting
       * 
       * The dispatch origin for this call must be _Root_ or _Manager_.
       * 
       * Parameters:
       * - `target`: The account that should be transferred funds.
       * - `schedule`: The vesting schedule:
       * -  First balance is the total amount that should be held for vesting.
       * -  Second balance is how much should be unlocked per block.
       * -  The block number is when the vesting should start.
       **/
      vestedTransfer: AugmentedSubmittable<(target: AccountId | string | Uint8Array, schedule: ITuple<[BalanceOf, BalanceOf, BlockNumber]> | [BalanceOf | AnyNumber | Uint8Array, BalanceOf | AnyNumber | Uint8Array, BlockNumber | AnyNumber | Uint8Array]) => SubmittableExtrinsic<ApiType>, [AccountId, ITuple<[BalanceOf, BalanceOf, BlockNumber]>]>;
    };
    eqMarginCall: {
      /**
       * Tries to margin-call an account from another account signed call.
       **/
      tryMargincallExternal: AugmentedSubmittable<(account: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId]>;
    };
    eqMultisigSudo: {
      /**
       * Adds a key to the multisig signatory list. Requires root.
       **/
      addKey: AugmentedSubmittable<(key: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId]>;
      /**
       * Approves a proposal. Requires an account be in the multisig signatory list.
       **/
      approve: AugmentedSubmittable<(callHash: U8aFixed | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [U8aFixed]>;
      /**
       * Cancels an earlier submitted proposal.
       **/
      cancelProposal: AugmentedSubmittable<(callHash: U8aFixed | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [U8aFixed]>;
      /**
       * Modifies the multisig threshold value i.e. the required number of signatories for a call to proceed. Requires root.
       **/
      modifyThreshold: AugmentedSubmittable<(newValue: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Proposes a call to be signed. Requires account to be in multisig signatory list.
       **/
      propose: AugmentedSubmittable<(call: Call | { callIndex?: any; args?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call]>;
      /**
       * Removes a key from the multisig signatory list. Requires root.
       **/
      removeKey: AugmentedSubmittable<(key: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId]>;
    };
    eqParachainOffering: {
      /**
       * Set manager for this pallet instance
       * 
       * The dispatch origin for this call must be _Root_.
       * 
       * Parameters:
       * - `who`: Which account will be the pallet manager.
       **/
      setManager: AugmentedSubmittable<(who: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId]>;
      /**
       * Transfer funds from pallets account
       * 
       * The dispatch origin for this call must be _Root_ or _Manager_.
       * 
       * Parameters:
       * - `asset`: The asset that will be transfered;
       * - `target`: The account that should be transferred funds;
       * - `value`: The amount of `asset` that will be transferred.
       **/
      transfer: AugmentedSubmittable<(asset: Asset | { 0?: any } | string | Uint8Array, target: AccountId | string | Uint8Array, value: BalanceOf | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Asset, AccountId, BalanceOf]>;
      /**
       * Transfer funds from pallets account with vesting
       * 
       * The dispatch origin for this call must be _Root_ or _Manager_.
       * 
       * Parameters:
       * - `target`: The account that should be transferred funds.
       * - `schedule`: The vesting schedule:
       * -  First balance is the total amount that should be held for vesting.
       * -  Second balance is how much should be unlocked per block.
       * -  The block number is when the vesting should start.
       **/
      vestedTransfer: AugmentedSubmittable<(target: AccountId | string | Uint8Array, schedule: ITuple<[BalanceOf, BalanceOf, BlockNumber]> | [BalanceOf | AnyNumber | Uint8Array, BalanceOf | AnyNumber | Uint8Array, BlockNumber | AnyNumber | Uint8Array]) => SubmittableExtrinsic<ApiType>, [AccountId, ITuple<[BalanceOf, BalanceOf, BlockNumber]>]>;
    };
    eqRate: {
      /**
       * Request to delete an account and all of it subaccounts
       * 
       * The dispatch origin for this call must be _None_ (unsigned transaction).
       * 
       * Parameters:
       * - `request`: OperationRequest.
       * - `_signature`: OperationRequest signature
       **/
      deleteAccount: AugmentedSubmittable<(request: OperationRequest | { account?: any; authority_index?: any; validators_len?: any; block_num?: any } | string | Uint8Array, signature: Signature | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [OperationRequest, Signature]>;
      /**
       * Request to delete an account and all of it subaccounts
       * This function is used by any user and executed by substrate transaction
       * 
       * The dispatch origin for this call must be `Signed` by the transactor.
       * 
       * Parameters:
       * - `account`: Account that should be checked for deletion.
       **/
      deleteAccountExternal: AugmentedSubmittable<(account: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId]>;
      /**
       * Request to check account balance for margin call and withdraw fees.
       * 
       * The dispatch origin for this call must be _None_ (unsigned transaction).
       * Parameters:
       * - `request`: OperationRequest.
       * - `_signature`: OperationRequest signature
       **/
      reinit: AugmentedSubmittable<(request: OperationRequest | { account?: any; authority_index?: any; validators_len?: any; block_num?: any } | string | Uint8Array, signature: Signature | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [OperationRequest, Signature]>;
      /**
       * Request to redistribute Bailsman pallet balances.
       * 
       * The dispatch origin for this call must be _None_ (unsigned transaction).
       * 
       * Parameters:
       * - `request`: OperationRequest.
       * - `_signature`: OperationRequest signature
       **/
      reinitBailsman: AugmentedSubmittable<(request: OperationRequest | { account?: any; authority_index?: any; validators_len?: any; block_num?: any } | string | Uint8Array, signature: Signature | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [OperationRequest, Signature]>;
      /**
       * Request to check account balance for margin call and withdraw fees.
       * This function is used by any user and executed by substrate transaction
       * 
       * The dispatch origin for this call must be `Signed` by the transactor.
       * 
       * Parameters:
       * - `account`: Account that should be checked for margin call and charged fee.
       **/
      reinitExternal: AugmentedSubmittable<(owner: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId]>;
      /**
       * Enables or disables offchain workers. `true` to enable offchain worker
       * operations, `false` to disable them.
       **/
      setAutoReinitEnabled: AugmentedSubmittable<(enabled: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [bool]>;
      /**
       * Function used in test builds for time move
       **/
      setNowMillisOffset: AugmentedSubmittable<(offset: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64]>;
    };
    eqSessionManager: {
      addValidator: AugmentedSubmittable<(validatorId: ValidatorId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [ValidatorId]>;
      /**
       * Removes validator. Root authorization required to remove validator.
       **/
      removeValidator: AugmentedSubmittable<(validatorId: ValidatorId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [ValidatorId]>;
    };
    eqTreasury: {
      /**
       * Set manager for this pallet instance
       * 
       * The dispatch origin for this call must be _Root_.
       * 
       * Parameters:
       * - `who`: Which account will be the pallet manager.
       **/
      setManager: AugmentedSubmittable<(who: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId]>;
      /**
       * Transfer funds from pallets account
       * 
       * The dispatch origin for this call must be _Root_ or _Manager_.
       * 
       * Parameters:
       * - `asset`: The asset that will be transfered;
       * - `target`: The account that should be transferred funds;
       * - `value`: The amount of `asset` that will be transferred.
       **/
      transfer: AugmentedSubmittable<(asset: Asset | { 0?: any } | string | Uint8Array, target: AccountId | string | Uint8Array, value: BalanceOf | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Asset, AccountId, BalanceOf]>;
      /**
       * Transfer funds from pallets account with vesting
       * 
       * The dispatch origin for this call must be _Root_ or _Manager_.
       * 
       * Parameters:
       * - `target`: The account that should be transferred funds.
       * - `schedule`: The vesting schedule:
       * -  First balance is the total amount that should be held for vesting.
       * -  Second balance is how much should be unlocked per block.
       * -  The block number is when the vesting should start.
       **/
      vestedTransfer: AugmentedSubmittable<(target: AccountId | string | Uint8Array, schedule: ITuple<[BalanceOf, BalanceOf, BlockNumber]> | [BalanceOf | AnyNumber | Uint8Array, BalanceOf | AnyNumber | Uint8Array, BlockNumber | AnyNumber | Uint8Array]) => SubmittableExtrinsic<ApiType>, [AccountId, ITuple<[BalanceOf, BalanceOf, BlockNumber]>]>;
    };
    financial: {
      /**
       * Recalculates financial metrics for all known assets.
       **/
      recalc: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Recalculates financial metrics for a given asset
       **/
      recalcAsset: AugmentedSubmittable<(asset: Asset | { 0?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Asset]>;
      /**
       * Recalculates financial metrics for a given portfolio
       **/
      recalcPortfolio: AugmentedSubmittable<(accountId: AccountId | string | Uint8Array, zScore: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId, u32]>;
      /**
       * Test utility function for setting metrics, not allowed in production
       **/
      setMetrics: AugmentedSubmittable<(metrics: FinancialMetrics | { period_start?: any; period_end?: any; assets?: any; mean_returns?: any; volatilities?: any; correlations?: any; covariances?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [FinancialMetrics]>;
      /**
       * Test utility function for setting asset metrics, not allowed in production
       **/
      setPerAssetMetrics: AugmentedSubmittable<(asset: Asset | { 0?: any } | string | Uint8Array, metrics: AssetMetrics | { period_start?: any; period_end?: any; returns?: any; volatility?: any; correlations?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Asset, AssetMetrics]>;
    };
    gensBinaryOpt: {
      claim: AugmentedSubmittable<(binaryId: BinaryId | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [BinaryId]>;
      claimOther: AugmentedSubmittable<(other: AccountId | string | Uint8Array, binaryId: BinaryId | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId, BinaryId]>;
      deposit: AugmentedSubmittable<(binaryId: BinaryId | AnyNumber | Uint8Array, expectedResult: bool | boolean | Uint8Array, amount: Balance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [BinaryId, bool, Balance]>;
      purge: AugmentedSubmittable<(binaryId: BinaryId | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [BinaryId]>;
      start: AugmentedSubmittable<(binaryId: BinaryId | AnyNumber | Uint8Array, duration: u64 | AnyNumber | Uint8Array, target: Asset | { 0?: any } | string | Uint8Array, targetMode: BinaryMode | { CallPut: any } | { InOut: any } | string | Uint8Array, proper: Asset | { 0?: any } | string | Uint8Array, minimalAmount: Balance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [BinaryId, u64, Asset, BinaryMode, Asset, Balance]>;
      withdraw: AugmentedSubmittable<(binaryId: BinaryId | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [BinaryId]>;
    };
    gensCrowdloan: {
      /**
       * Inner function to add allocation
       **/
      addAllocation: AugmentedSubmittable<(address: AccountId | string | Uint8Array, balance: BalanceOf | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId, BalanceOf]>;
      /**
       * Claim gens
       **/
      claim: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Set `Claim Start` in `timestamp`
       * - timestamp: UnixTime timestamp in seconds
       **/
      setClaimStart: AugmentedSubmittable<(timestamp: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64]>;
    };
    gensOptOut: {
      addRound: AugmentedSubmittable<(round: Round | { total_cap?: any; individual_cap?: any; end?: any; token?: any; minimal_buy_amount?: any; vesting_params?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Round]>;
      buy: AugmentedSubmittable<(amount: Balance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Balance]>;
      distribute: AugmentedSubmittable<(request: OperationRequest | { account?: any; authority_index?: any; validators_len?: any; block_num?: any } | string | Uint8Array, blockNumber: BlockNumber | AnyNumber | Uint8Array, signature: Signature | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [OperationRequest, BlockNumber, Signature]>;
      distributeExternal: AugmentedSubmittable<(to: AccountId | string | Uint8Array, blockNumber: BlockNumber | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId, BlockNumber]>;
      sell: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
    };
    grandpa: {
      /**
       * Note that the current authority set of the GRANDPA finality gadget has
       * stalled. This will trigger a forced authority set change at the beginning
       * of the next session, to be enacted `delay` blocks after that. The delay
       * should be high enough to safely assume that the block signalling the
       * forced change will not be re-orged (e.g. 1000 blocks). The GRANDPA voters
       * will start the new authority set using the given finalized block as base.
       * Only callable by root.
       **/
      noteStalled: AugmentedSubmittable<(delay: BlockNumber | AnyNumber | Uint8Array, bestFinalizedBlockNumber: BlockNumber | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [BlockNumber, BlockNumber]>;
      /**
       * Report voter equivocation/misbehavior. This method will verify the
       * equivocation proof and validate the given key ownership proof
       * against the extracted offender. If both are valid, the offence
       * will be reported.
       **/
      reportEquivocation: AugmentedSubmittable<(equivocationProof: GrandpaEquivocationProof | { setId?: any; equivocation?: any } | string | Uint8Array, keyOwnerProof: KeyOwnerProof | { session?: any; trieNodes?: any; validatorCount?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [GrandpaEquivocationProof, KeyOwnerProof]>;
      /**
       * Report voter equivocation/misbehavior. This method will verify the
       * equivocation proof and validate the given key ownership proof
       * against the extracted offender. If both are valid, the offence
       * will be reported.
       * 
       * This extrinsic must be called unsigned and it is expected that only
       * block authors will call it (validated in `ValidateUnsigned`), as such
       * if the block author is defined it will be defined as the equivocation
       * reporter.
       **/
      reportEquivocationUnsigned: AugmentedSubmittable<(equivocationProof: GrandpaEquivocationProof | { setId?: any; equivocation?: any } | string | Uint8Array, keyOwnerProof: KeyOwnerProof | { session?: any; trieNodes?: any; validatorCount?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [GrandpaEquivocationProof, KeyOwnerProof]>;
    };
    liquidityFarming: {
      /**
       * Requests to check payout for bailsmen and make the transfer (if any).
       * 
       * The dispatch origin for this call must be _None_ (unsigned transaction).
       * 
       * Parameters:
       * - `request`: OperationRequestLiqFm.
       * - `_signature`: OperationRequestLiqFm signature
       **/
      reward: AugmentedSubmittable<(request: OperationRequestLiqFm | { authority_index?: any; validators_len?: any; block_num?: any } | string | Uint8Array, signature: Signature | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [OperationRequestLiqFm, Signature]>;
      /**
       * Requests to check payout for bailsmen and make the transfer (if any).
       * This function is used by any user and executed by substrate transaction.
       * 
       * The dispatch origin for this call must be `Signed` by the transactor.
       **/
      rewardExternal: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Enables or disables offchain workers. `true` to enable offchain worker
       * operations, `false` to disable them.
       **/
      setAutoRewardEnabled: AugmentedSubmittable<(enabled: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [bool]>;
    };
    mmPool: {
      changeMinAmount: AugmentedSubmittable<(currency: Asset | { 0?: any } | string | Uint8Array, minAmount: Balance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Asset, Balance]>;
      createPool: AugmentedSubmittable<(currency: Asset | { 0?: any } | string | Uint8Array, minAmount: Balance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Asset, Balance]>;
      deposit: AugmentedSubmittable<(amount: Balance | AnyNumber | Uint8Array, currency: Asset | { 0?: any } | string | Uint8Array, newLockPeriod: LockPeriod | 'None' | 'ThreeMonth' | 'SixMonth' | 'Year' | number | Uint8Array) => SubmittableExtrinsic<ApiType>, [Balance, Asset, LockPeriod]>;
    };
    multisig: {
      /**
       * Register approval for a dispatch to be made from a deterministic composite account if
       * approved by a total of `threshold - 1` of `other_signatories`.
       * 
       * Payment: `DepositBase` will be reserved if this is the first approval, plus
       * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
       * is cancelled.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * - `threshold`: The total number of approvals for this dispatch before it is executed.
       * - `other_signatories`: The accounts (other than the sender) who can approve this
       * dispatch. May not be empty.
       * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
       * not the first approval, then it must be `Some`, with the timepoint (block number and
       * transaction index) of the first approval transaction.
       * - `call_hash`: The hash of the call to be executed.
       * 
       * NOTE: If this is the final approval, you will want to use `as_multi` instead.
       * 
       * # <weight>
       * - `O(S)`.
       * - Up to one balance-reserve or unreserve operation.
       * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
       * signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
       * - One encode & hash, both of complexity `O(S)`.
       * - Up to one binary search and insert (`O(logS + S)`).
       * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
       * - One event.
       * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a
       * deposit taken for its lifetime of
       * `DepositBase + threshold * DepositFactor`.
       * ----------------------------------
       * - DB Weight:
       * - Read: Multisig Storage, [Caller Account]
       * - Write: Multisig Storage, [Caller Account]
       * # </weight>
       **/
      approveAsMulti: AugmentedSubmittable<(threshold: u16 | AnyNumber | Uint8Array, otherSignatories: Vec<AccountId> | (AccountId | string | Uint8Array)[], maybeTimepoint: Option<Timepoint> | null | object | string | Uint8Array, callHash: U8aFixed | string | Uint8Array, maxWeight: Weight | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, Vec<AccountId>, Option<Timepoint>, U8aFixed, Weight]>;
      /**
       * Register approval for a dispatch to be made from a deterministic composite account if
       * approved by a total of `threshold - 1` of `other_signatories`.
       * 
       * If there are enough, then dispatch the call.
       * 
       * Payment: `DepositBase` will be reserved if this is the first approval, plus
       * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
       * is cancelled.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * - `threshold`: The total number of approvals for this dispatch before it is executed.
       * - `other_signatories`: The accounts (other than the sender) who can approve this
       * dispatch. May not be empty.
       * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
       * not the first approval, then it must be `Some`, with the timepoint (block number and
       * transaction index) of the first approval transaction.
       * - `call`: The call to be executed.
       * 
       * NOTE: Unless this is the final approval, you will generally want to use
       * `approve_as_multi` instead, since it only requires a hash of the call.
       * 
       * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
       * on success, result is `Ok` and the result from the interior call, if it was executed,
       * may be found in the deposited `MultisigExecuted` event.
       * 
       * # <weight>
       * - `O(S + Z + Call)`.
       * - Up to one balance-reserve or unreserve operation.
       * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
       * signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
       * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
       * - One encode & hash, both of complexity `O(S)`.
       * - Up to one binary search and insert (`O(logS + S)`).
       * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
       * - One event.
       * - The weight of the `call`.
       * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a
       * deposit taken for its lifetime of
       * `DepositBase + threshold * DepositFactor`.
       * -------------------------------
       * - DB Weight:
       * - Reads: Multisig Storage, [Caller Account], Calls (if `store_call`)
       * - Writes: Multisig Storage, [Caller Account], Calls (if `store_call`)
       * - Plus Call Weight
       * # </weight>
       **/
      asMulti: AugmentedSubmittable<(threshold: u16 | AnyNumber | Uint8Array, otherSignatories: Vec<AccountId> | (AccountId | string | Uint8Array)[], maybeTimepoint: Option<Timepoint> | null | object | string | Uint8Array, call: OpaqueCall | string | Uint8Array, storeCall: bool | boolean | Uint8Array, maxWeight: Weight | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, Vec<AccountId>, Option<Timepoint>, OpaqueCall, bool, Weight]>;
      /**
       * Immediately dispatch a multi-signature call using a single approval from the caller.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * - `other_signatories`: The accounts (other than the sender) who are part of the
       * multi-signature, but do not participate in the approval process.
       * - `call`: The call to be executed.
       * 
       * Result is equivalent to the dispatched result.
       * 
       * # <weight>
       * O(Z + C) where Z is the length of the call and C its execution weight.
       * -------------------------------
       * - DB Weight: None
       * - Plus Call Weight
       * # </weight>
       **/
      asMultiThreshold1: AugmentedSubmittable<(otherSignatories: Vec<AccountId> | (AccountId | string | Uint8Array)[], call: Call | { callIndex?: any; args?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<AccountId>, Call]>;
      /**
       * Cancel a pre-existing, on-going multisig transaction. Any deposit reserved previously
       * for this operation will be unreserved on success.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * - `threshold`: The total number of approvals for this dispatch before it is executed.
       * - `other_signatories`: The accounts (other than the sender) who can approve this
       * dispatch. May not be empty.
       * - `timepoint`: The timepoint (block number and transaction index) of the first approval
       * transaction for this dispatch.
       * - `call_hash`: The hash of the call to be executed.
       * 
       * # <weight>
       * - `O(S)`.
       * - Up to one balance-reserve or unreserve operation.
       * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
       * signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
       * - One encode & hash, both of complexity `O(S)`.
       * - One event.
       * - I/O: 1 read `O(S)`, one remove.
       * - Storage: removes one item.
       * ----------------------------------
       * - DB Weight:
       * - Read: Multisig Storage, [Caller Account], Refund Account, Calls
       * - Write: Multisig Storage, [Caller Account], Refund Account, Calls
       * # </weight>
       **/
      cancelAsMulti: AugmentedSubmittable<(threshold: u16 | AnyNumber | Uint8Array, otherSignatories: Vec<AccountId> | (AccountId | string | Uint8Array)[], timepoint: Timepoint | { height?: any; index?: any } | string | Uint8Array, callHash: U8aFixed | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, Vec<AccountId>, Timepoint, U8aFixed]>;
    };
    oracle: {
      /**
       * Enables or disables auto recalculation of financial metrics
       **/
      setFinMetricsRecalcEnabled: AugmentedSubmittable<(enabled: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [bool]>;
      /**
       * Adds and saves a new `DataPoint` containing an asset price information. It
       * would be used for the `PricePoint` calculation. Only whitelisted
       * accounts can add `DataPoints`
       **/
      setPrice: AugmentedSubmittable<(asset: Asset | { 0?: any } | string | Uint8Array, price: FixedI64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Asset, FixedI64]>;
      /**
       * Adds new `DataPoint` from an unsigned transaction
       **/
      setPriceUnsigned: AugmentedSubmittable<(payload: PricePayload | { public?: any; asset?: any; price?: any; block_number?: any } | string | Uint8Array, signature: Signature | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [PricePayload, Signature]>;
    };
    proxy: {
      /**
       * Register a proxy account for the sender that is able to make calls on its behalf.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * Parameters:
       * - `proxy`: The account that the `caller` would like to make a proxy.
       * - `proxy_type`: The permissions allowed for this proxy account.
       * - `delay`: The announcement period required of the initial proxy. Will generally be
       * zero.
       * 
       * # <weight>
       * Weight is a function of the number of proxies the user has (P).
       * # </weight>
       **/
      addProxy: AugmentedSubmittable<(delegate: AccountId | string | Uint8Array, proxyType: ProxyType | 'Any' | 'NonTransfer' | 'Governance' | 'Staking' | number | Uint8Array, delay: BlockNumber | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId, ProxyType, BlockNumber]>;
      /**
       * Publish the hash of a proxy-call that will be made in the future.
       * 
       * This must be called some number of blocks before the corresponding `proxy` is attempted
       * if the delay associated with the proxy relationship is greater than zero.
       * 
       * No more than `MaxPending` announcements may be made at any one time.
       * 
       * This will take a deposit of `AnnouncementDepositFactor` as well as
       * `AnnouncementDepositBase` if there are no other pending announcements.
       * 
       * The dispatch origin for this call must be _Signed_ and a proxy of `real`.
       * 
       * Parameters:
       * - `real`: The account that the proxy will make a call on behalf of.
       * - `call_hash`: The hash of the call to be made by the `real` account.
       * 
       * # <weight>
       * Weight is a function of:
       * - A: the number of announcements made.
       * - P: the number of proxies the user has.
       * # </weight>
       **/
      announce: AugmentedSubmittable<(real: AccountId | string | Uint8Array, callHash: CallHashOf | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId, CallHashOf]>;
      /**
       * Spawn a fresh new account that is guaranteed to be otherwise inaccessible, and
       * initialize it with a proxy of `proxy_type` for `origin` sender.
       * 
       * Requires a `Signed` origin.
       * 
       * - `proxy_type`: The type of the proxy that the sender will be registered as over the
       * new account. This will almost always be the most permissive `ProxyType` possible to
       * allow for maximum flexibility.
       * - `index`: A disambiguation index, in case this is called multiple times in the same
       * transaction (e.g. with `utility::batch`). Unless you're using `batch` you probably just
       * want to use `0`.
       * - `delay`: The announcement period required of the initial proxy. Will generally be
       * zero.
       * 
       * Fails with `Duplicate` if this has already been called in this transaction, from the
       * same sender, with the same parameters.
       * 
       * Fails if there are insufficient funds to pay for deposit.
       * 
       * # <weight>
       * Weight is a function of the number of proxies the user has (P).
       * # </weight>
       * TODO: Might be over counting 1 read
       **/
      anonymous: AugmentedSubmittable<(proxyType: ProxyType | 'Any' | 'NonTransfer' | 'Governance' | 'Staking' | number | Uint8Array, delay: BlockNumber | AnyNumber | Uint8Array, index: u16 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [ProxyType, BlockNumber, u16]>;
      /**
       * Removes a previously spawned anonymous proxy.
       * 
       * WARNING: **All access to this account will be lost.** Any funds held in it will be
       * inaccessible.
       * 
       * Requires a `Signed` origin, and the sender account must have been created by a call to
       * `anonymous` with corresponding parameters.
       * 
       * - `spawner`: The account that originally called `anonymous` to create this account.
       * - `index`: The disambiguation index originally passed to `anonymous`. Probably `0`.
       * - `proxy_type`: The proxy type originally passed to `anonymous`.
       * - `height`: The height of the chain when the call to `anonymous` was processed.
       * - `ext_index`: The extrinsic index in which the call to `anonymous` was processed.
       * 
       * Fails with `NoPermission` in case the caller is not a previously created anonymous
       * account whose `anonymous` call has corresponding parameters.
       * 
       * # <weight>
       * Weight is a function of the number of proxies the user has (P).
       * # </weight>
       **/
      killAnonymous: AugmentedSubmittable<(spawner: AccountId | string | Uint8Array, proxyType: ProxyType | 'Any' | 'NonTransfer' | 'Governance' | 'Staking' | number | Uint8Array, index: u16 | AnyNumber | Uint8Array, height: Compact<BlockNumber> | AnyNumber | Uint8Array, extIndex: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId, ProxyType, u16, Compact<BlockNumber>, Compact<u32>]>;
      /**
       * Dispatch the given `call` from an account that the sender is authorised for through
       * `add_proxy`.
       * 
       * Removes any corresponding announcement(s).
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * Parameters:
       * - `real`: The account that the proxy will make a call on behalf of.
       * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
       * - `call`: The call to be made by the `real` account.
       * 
       * # <weight>
       * Weight is a function of the number of proxies the user has (P).
       * # </weight>
       **/
      proxy: AugmentedSubmittable<(real: AccountId | string | Uint8Array, forceProxyType: Option<ProxyType> | null | object | string | Uint8Array, call: Call | { callIndex?: any; args?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId, Option<ProxyType>, Call]>;
      /**
       * Dispatch the given `call` from an account that the sender is authorised for through
       * `add_proxy`.
       * 
       * Removes any corresponding announcement(s).
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * Parameters:
       * - `real`: The account that the proxy will make a call on behalf of.
       * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
       * - `call`: The call to be made by the `real` account.
       * 
       * # <weight>
       * Weight is a function of:
       * - A: the number of announcements made.
       * - P: the number of proxies the user has.
       * # </weight>
       **/
      proxyAnnounced: AugmentedSubmittable<(delegate: AccountId | string | Uint8Array, real: AccountId | string | Uint8Array, forceProxyType: Option<ProxyType> | null | object | string | Uint8Array, call: Call | { callIndex?: any; args?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId, AccountId, Option<ProxyType>, Call]>;
      /**
       * Remove the given announcement of a delegate.
       * 
       * May be called by a target (proxied) account to remove a call that one of their delegates
       * (`delegate`) has announced they want to execute. The deposit is returned.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * Parameters:
       * - `delegate`: The account that previously announced the call.
       * - `call_hash`: The hash of the call to be made.
       * 
       * # <weight>
       * Weight is a function of:
       * - A: the number of announcements made.
       * - P: the number of proxies the user has.
       * # </weight>
       **/
      rejectAnnouncement: AugmentedSubmittable<(delegate: AccountId | string | Uint8Array, callHash: CallHashOf | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId, CallHashOf]>;
      /**
       * Remove a given announcement.
       * 
       * May be called by a proxy account to remove a call they previously announced and return
       * the deposit.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * Parameters:
       * - `real`: The account that the proxy will make a call on behalf of.
       * - `call_hash`: The hash of the call to be made by the `real` account.
       * 
       * # <weight>
       * Weight is a function of:
       * - A: the number of announcements made.
       * - P: the number of proxies the user has.
       * # </weight>
       **/
      removeAnnouncement: AugmentedSubmittable<(real: AccountId | string | Uint8Array, callHash: CallHashOf | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId, CallHashOf]>;
      /**
       * Unregister all proxy accounts for the sender.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * WARNING: This may be called on accounts created by `anonymous`, however if done, then
       * the unreserved fees will be inaccessible. **All access to this account will be lost.**
       * 
       * # <weight>
       * Weight is a function of the number of proxies the user has (P).
       * # </weight>
       **/
      removeProxies: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Unregister a proxy account for the sender.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * Parameters:
       * - `proxy`: The account that the `caller` would like to remove as a proxy.
       * - `proxy_type`: The permissions currently enabled for the removed proxy account.
       * 
       * # <weight>
       * Weight is a function of the number of proxies the user has (P).
       * # </weight>
       **/
      removeProxy: AugmentedSubmittable<(delegate: AccountId | string | Uint8Array, proxyType: ProxyType | 'Any' | 'NonTransfer' | 'Governance' | 'Staking' | number | Uint8Array, delay: BlockNumber | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId, ProxyType, BlockNumber]>;
    };
    randomnessCollectiveFlip: {
    };
    session: {
      /**
       * Removes any session key(s) of the function caller.
       * This doesn't take effect until the next session.
       * 
       * The dispatch origin of this function must be signed.
       * 
       * # <weight>
       * - Complexity: `O(1)` in number of key types.
       * Actual cost depends on the number of length of `T::Keys::key_ids()` which is fixed.
       * - DbReads: `T::ValidatorIdOf`, `NextKeys`, `origin account`
       * - DbWrites: `NextKeys`, `origin account`
       * - DbWrites per key id: `KeyOwnder`
       * # </weight>
       **/
      purgeKeys: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Sets the session key(s) of the function caller to `keys`.
       * Allows an account to set its session key prior to becoming a validator.
       * This doesn't take effect until the next session.
       * 
       * The dispatch origin of this function must be signed.
       * 
       * # <weight>
       * - Complexity: `O(1)`
       * Actual cost depends on the number of length of `T::Keys::key_ids()` which is fixed.
       * - DbReads: `origin account`, `T::ValidatorIdOf`, `NextKeys`
       * - DbWrites: `origin account`, `NextKeys`
       * - DbReads per key id: `KeyOwner`
       * - DbWrites per key id: `KeyOwner`
       * # </weight>
       **/
      setKeys: AugmentedSubmittable<(keys: Keys | string | Uint8Array, proof: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Keys, Bytes]>;
    };
    subaccounts: {
      /**
       * Transfers `amount` of `currency` from subaccount to 'destination' account. If `subacc_type`
       * is `Bailsman` and it's total collateral value becomes less than minimal bailsman
       * collateral value - subaccount will be unregistered as bailsman.
       **/
      transfer: AugmentedSubmittable<(subaccType: SubAccType | 'Bailsman' | 'Borrower' | 'Lender' | number | Uint8Array, destination: AccountId | string | Uint8Array, asset: Asset | { 0?: any } | string | Uint8Array, amount: Balance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [SubAccType, AccountId, Asset, Balance]>;
      /**
       * Transfers `amount` of `currency` from subaccount to main account. If `subacc_type`
       * is `Bailsman` and it's total collateral value becomes less than minimal bailsman
       * collateral value - subaccount will be unregistered as bailsman.
       **/
      transferFromSubaccount: AugmentedSubmittable<(subaccType: SubAccType | 'Bailsman' | 'Borrower' | 'Lender' | number | Uint8Array, asset: Asset | { 0?: any } | string | Uint8Array, amount: Balance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [SubAccType, Asset, Balance]>;
      /**
       * Transfers `value` amount of `currency` from main account to `subacc_type` subaccount
       **/
      transferToSubaccount: AugmentedSubmittable<(subaccType: SubAccType | 'Bailsman' | 'Borrower' | 'Lender' | number | Uint8Array, asset: Asset | { 0?: any } | string | Uint8Array, value: Balance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [SubAccType, Asset, Balance]>;
    };
    sudo: {
      /**
       * Authenticates the current sudo key and sets the given AccountId (`new`) as the new sudo key.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * # <weight>
       * - O(1).
       * - Limited storage reads.
       * - One DB change.
       * # </weight>
       **/
      setKey: AugmentedSubmittable<(updated: LookupSource | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource]>;
      /**
       * Authenticates the sudo key and dispatches a function call with `Root` origin.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * # <weight>
       * - O(1).
       * - Limited storage reads.
       * - One DB write (event).
       * - Weight of derivative `call` execution + 10,000.
       * # </weight>
       **/
      sudo: AugmentedSubmittable<(call: Call | { callIndex?: any; args?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call]>;
      /**
       * Authenticates the sudo key and dispatches a function call with `Signed` origin from
       * a given account.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * # <weight>
       * - O(1).
       * - Limited storage reads.
       * - One DB write (event).
       * - Weight of derivative `call` execution + 10,000.
       * # </weight>
       **/
      sudoAs: AugmentedSubmittable<(who: LookupSource | string | Uint8Array, call: Call | { callIndex?: any; args?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource, Call]>;
      /**
       * Authenticates the sudo key and dispatches a function call with `Root` origin.
       * This function does not check the weight of the call, and instead allows the
       * Sudo user to specify the weight of the call.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * # <weight>
       * - O(1).
       * - The weight of this call is defined by the caller.
       * # </weight>
       **/
      sudoUncheckedWeight: AugmentedSubmittable<(call: Call | { callIndex?: any; args?: any } | string | Uint8Array, weight: Weight | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call, Weight]>;
    };
    system: {
      /**
       * A dispatch that will fill the block weight up to the given ratio.
       **/
      fillBlock: AugmentedSubmittable<(ratio: Perbill | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Perbill]>;
      /**
       * Kill all storage items with a key that starts with the given prefix.
       * 
       * **NOTE:** We rely on the Root origin to provide us the number of subkeys under
       * the prefix we are removing to accurately calculate the weight of this function.
       * 
       * # <weight>
       * - `O(P)` where `P` amount of keys with prefix `prefix`
       * - `P` storage deletions.
       * - Base Weight: 0.834 * P µs
       * - Writes: Number of subkeys + 1
       * # </weight>
       **/
      killPrefix: AugmentedSubmittable<(prefix: Key | string | Uint8Array, subkeys: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Key, u32]>;
      /**
       * Kill some items from storage.
       * 
       * # <weight>
       * - `O(IK)` where `I` length of `keys` and `K` length of one key
       * - `I` storage deletions.
       * - Base Weight: .378 * i µs
       * - Writes: Number of items
       * # </weight>
       **/
      killStorage: AugmentedSubmittable<(keys: Vec<Key> | (Key | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Key>]>;
      /**
       * Make some on-chain remark.
       * 
       * # <weight>
       * - `O(1)`
       * - Base Weight: 0.665 µs, independent of remark length.
       * - No DB operations.
       * # </weight>
       **/
      remark: AugmentedSubmittable<(remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Set the new changes trie configuration.
       * 
       * # <weight>
       * - `O(1)`
       * - 1 storage write or delete (codec `O(1)`).
       * - 1 call to `deposit_log`: Uses `append` API, so O(1)
       * - Base Weight: 7.218 µs
       * - DB Weight:
       * - Writes: Changes Trie, System Digest
       * # </weight>
       **/
      setChangesTrieConfig: AugmentedSubmittable<(changesTrieConfig: Option<ChangesTrieConfiguration> | null | object | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Option<ChangesTrieConfiguration>]>;
      /**
       * Set the new runtime code.
       * 
       * # <weight>
       * - `O(C + S)` where `C` length of `code` and `S` complexity of `can_set_code`
       * - 1 storage write (codec `O(C)`).
       * - 1 call to `can_set_code`: `O(S)` (calls `sp_io::misc::runtime_version` which is expensive).
       * - 1 event.
       * The weight of this function is dependent on the runtime, but generally this is very expensive.
       * We will treat this as a full block.
       * # </weight>
       **/
      setCode: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Set the new runtime code without doing any checks of the given `code`.
       * 
       * # <weight>
       * - `O(C)` where `C` length of `code`
       * - 1 storage write (codec `O(C)`).
       * - 1 event.
       * The weight of this function is dependent on the runtime. We will treat this as a full block.
       * # </weight>
       **/
      setCodeWithoutChecks: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Set the number of pages in the WebAssembly environment's heap.
       * 
       * # <weight>
       * - `O(1)`
       * - 1 storage write.
       * - Base Weight: 1.405 µs
       * - 1 write to HEAP_PAGES
       * # </weight>
       **/
      setHeapPages: AugmentedSubmittable<(pages: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64]>;
      /**
       * Set some items of storage.
       * 
       * # <weight>
       * - `O(I)` where `I` length of `items`
       * - `I` storage writes (`O(1)`).
       * - Base Weight: 0.568 * i µs
       * - Writes: Number of items
       * # </weight>
       **/
      setStorage: AugmentedSubmittable<(items: Vec<KeyValue> | (KeyValue)[]) => SubmittableExtrinsic<ApiType>, [Vec<KeyValue>]>;
    };
    timestamp: {
      /**
       * Set the current time.
       * 
       * This call should be invoked exactly once per block. It will panic at the finalization
       * phase, if this call hasn't been invoked by that time.
       * 
       * The timestamp should be greater than the previous one by the amount specified by
       * `MinimumPeriod`.
       * 
       * The dispatch origin for this call must be `Inherent`.
       * 
       * # <weight>
       * - `O(1)` (Note that implementations of `OnTimestampSet` must also be `O(1)`)
       * - 1 storage read and 1 storage mutation (codec `O(1)`). (because of `DidUpdate::take` in `on_finalize`)
       * - 1 event handler `on_timestamp_set`. Must be `O(1)`.
       * # </weight>
       **/
      set: AugmentedSubmittable<(now: Compact<Moment> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<Moment>]>;
    };
    treasury: {
      /**
       * An Account can buy collateral tokens from treasury paying with its funds in the basic asset.
       * Collateral is sum of any [`Asset`](../eq_primitives/asset/struct.Asset.html)
       * except the basic asset.
       **/
      colaterallBuyout: AugmentedSubmittable<(asset: Asset | { 0?: any } | string | Uint8Array, amount: Balance | AnyNumber | Uint8Array, maxPrice: FixedI64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Asset, Balance, FixedI64]>;
    };
    utility: {
      /**
       * Send a call through an indexed pseudonym of the sender.
       * 
       * Filter from origin are passed along. The call will be dispatched with an origin which
       * use the same filter as the origin of this call.
       * 
       * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
       * because you expect `proxy` to have been used prior in the call stack and you do not want
       * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
       * in the Multisig pallet instead.
       * 
       * NOTE: Prior to version *12, this was called `as_limited_sub`.
       * 
       * The dispatch origin for this call must be _Signed_.
       **/
      asDerivative: AugmentedSubmittable<(index: u16 | AnyNumber | Uint8Array, call: Call | { callIndex?: any; args?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, Call]>;
      /**
       * Send a batch of dispatch calls.
       * 
       * May be called from any origin.
       * 
       * - `calls`: The calls to be dispatched from the same origin.
       * 
       * If origin is root then call are dispatch without checking origin filter. (This includes
       * bypassing `frame_system::Config::BaseCallFilter`).
       * 
       * # <weight>
       * - Complexity: O(C) where C is the number of calls to be batched.
       * # </weight>
       * 
       * This will return `Ok` in all circumstances. To determine the success of the batch, an
       * event is deposited. If a call failed and the batch was interrupted, then the
       * `BatchInterrupted` event is deposited, along with the number of successful calls made
       * and the error of the failed call. If all were successful, then the `BatchCompleted`
       * event is deposited.
       **/
      batch: AugmentedSubmittable<(calls: Vec<Call> | (Call | { callIndex?: any; args?: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Call>]>;
      /**
       * Send a batch of dispatch calls and atomically execute them.
       * The whole transaction will rollback and fail if any of the calls failed.
       * 
       * May be called from any origin.
       * 
       * - `calls`: The calls to be dispatched from the same origin.
       * 
       * If origin is root then call are dispatch without checking origin filter. (This includes
       * bypassing `frame_system::Config::BaseCallFilter`).
       * 
       * # <weight>
       * - Complexity: O(C) where C is the number of calls to be batched.
       * # </weight>
       **/
      batchAll: AugmentedSubmittable<(calls: Vec<Call> | (Call | { callIndex?: any; args?: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Call>]>;
    };
    vesting: {
      /**
       * Force a vested transfer.
       * 
       * The dispatch origin for this call must be _Root_.
       * 
       * - `source`: The account whose funds should be transferred.
       * - `target`: The account that should be transferred the vested funds.
       * - `amount`: The amount of funds to transfer and will be vested.
       * - `schedule`: The vesting schedule attached to the transfer.
       **/
      forceVestedTransfer: AugmentedSubmittable<(source: LookupSource | string | Uint8Array, target: LookupSource | string | Uint8Array, schedule: VestingInfo | { locked?: any; perBlock?: any; startingBlock?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource, LookupSource, VestingInfo]>;
      /**
       * Unlock any vested funds of the sender account.
       * 
       * The dispatch origin for this call must be _Signed_ and the sender must have funds still
       * locked under this module.
       * 
       * Emits either `VestingCompleted` or `VestingUpdated`.
       **/
      vest: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Unlock any vested funds of a `target` account.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * - `target`: The account whose vested funds should be unlocked. Must have funds still
       * locked under this module.
       * 
       * Emits either `VestingCompleted` or `VestingUpdated`.
       **/
      vestOther: AugmentedSubmittable<(target: LookupSource | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource]>;
    };
    whitelists: {
      /**
       * Adds a `who_to_add` account to whitelist. Requires root authorization
       **/
      addToWhitelist: AugmentedSubmittable<(whoToAdd: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId]>;
      /**
       * Removes an account `who_to_remove` from whitelist. Requires sudo authorization
       **/
      removeFromWhitelist: AugmentedSubmittable<(whoToRemove: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId]>;
    };
    xdot: {
      /**
       * Burn liquidity tokens in exchange for base and fyToken or base only with `trade_to_base=true`
       **/
      burn: AugmentedSubmittable<(poolId: PoolId | AnyNumber | Uint8Array, minRatio: ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array], maxRatio: ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array], tokensBurned: Balance | AnyNumber | Uint8Array, tradeToBase: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [PoolId, ITuple<[u32, u32]>, ITuple<[u32, u32]>, Balance, bool]>;
      /**
       * Buy base for xbase token
       * buy_base_amount - amount of base being bought that will be deposited to caller
       * max - maximum amount of xbase token that will be paid for the trade
       **/
      buyBase: AugmentedSubmittable<(poolId: PoolId | AnyNumber | Uint8Array, baseToBuy: Balance | AnyNumber | Uint8Array, xbaseToSell: Balance | AnyNumber | Uint8Array, max: Balance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [PoolId, Balance, Balance, Balance]>;
      /**
       * Buy xbase for base
       * xbase_to_buy - amount of xbase being bought that will be transfered to caller
       * max - maximum amount of base token that will be paid for the trade
       **/
      buyXbase: AugmentedSubmittable<(poolId: PoolId | AnyNumber | Uint8Array, baseToSell: Balance | AnyNumber | Uint8Array, xbaseToBuy: Balance | AnyNumber | Uint8Array, max: Balance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [PoolId, Balance, Balance, Balance]>;
      changeInitializer: AugmentedSubmittable<(poolId: PoolId | AnyNumber | Uint8Array, account: Option<AccountId> | null | object | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PoolId, Option<AccountId>]>;
      /**
       * Creates pool
       * - maturity: unix timestamp when maturity is coming
       * - ts_period: period in secs for ts coeff
       **/
      createPool: AugmentedSubmittable<(initializer: AccountId | string | Uint8Array, baseAsset: AssetId | { 0?: any } | string | Uint8Array, xbaseAsset: AssetId | { 0?: any } | string | Uint8Array, sellBaseFeeCoeff: XdotNumber | AnyNumber | Uint8Array, sellXbaseFeeCoeff: XdotNumber | AnyNumber | Uint8Array, maturity: u64 | AnyNumber | Uint8Array, tsPeriod: XdotNumber | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId, AssetId, AssetId, XdotNumber, XdotNumber, u64, XdotNumber]>;
      initialize: AugmentedSubmittable<(poolId: PoolId | AnyNumber | Uint8Array, baseAmount: Balance | AnyNumber | Uint8Array, xbaseAmount: Balance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [PoolId, Balance, Balance]>;
      /**
       * Mint liquidity tokens, with an optional internal trade to buy xbase tokens beforehand.
       * The amount of liquidity tokens is calculated from the amount of xbase tokens to buy from the pool,
       * plus the `xbase_in`. A proportional amount of base tokens need to be sent.
       * It fails if amount of base tokens for trade less than `base_in`
       **/
      mint: AugmentedSubmittable<(poolId: PoolId | AnyNumber | Uint8Array, minRatio: ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array], maxRatio: ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array], baseIn: Balance | AnyNumber | Uint8Array, xbaseIn: Balance | AnyNumber | Uint8Array, xbaseToBuy: Balance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [PoolId, ITuple<[u32, u32]>, ITuple<[u32, u32]>, Balance, Balance, Balance]>;
      optimalMint: AugmentedSubmittable<(poolId: PoolId | AnyNumber | Uint8Array, baseIn: Balance | AnyNumber | Uint8Array, xbaseIn: Balance | AnyNumber | Uint8Array, lpToMint: Balance | AnyNumber | Uint8Array, baseInRatioCorridor: Option<ITuple<[u64, u64]>> | null | object | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PoolId, Balance, Balance, Balance, Option<ITuple<[u64, u64]>>]>;
      removePool: AugmentedSubmittable<(poolId: PoolId | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [PoolId]>;
      /**
       * Sell base for xbase token.
       * min -  minimm accepted amount of xbase token
       * Returns amount of xbase token that will be transfered on caller account
       **/
      sellBase: AugmentedSubmittable<(poolId: PoolId | AnyNumber | Uint8Array, baseToSell: Balance | AnyNumber | Uint8Array, min: Balance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [PoolId, Balance, Balance]>;
      /**
       * Sell xbase token for base
       * xbase_to_sell - amount of xbase token to sell for base
       * min - minimum accepted amount of base
       **/
      sellXbase: AugmentedSubmittable<(poolId: PoolId | AnyNumber | Uint8Array, xbaseToSell: Balance | AnyNumber | Uint8Array, min: Balance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [PoolId, Balance, Balance]>;
    };
  } // AugmentedSubmittables
} // declare module
