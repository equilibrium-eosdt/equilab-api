// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { Asset, AssetIdInnerType, BinaryId, BinaryMode, DepositNonce, OrderId, OrderSide, PoolId, PoolTokenIndex, ResourceId, SubAccType, TransferReason, XdotNumber } from '@equilab/api/eq-next/interfaces/latest';
import type { ApiTypes } from '@polkadot/api-base/types';
import type { Bytes, Option, U256, Vec, bool, u16, u32, u64 } from '@polkadot/types-codec';
import type { ChainId } from '@polkadot/types/interfaces/bridges';
import type { AuthorityList } from '@polkadot/types/interfaces/grandpa';
import type { ProxyType } from '@polkadot/types/interfaces/proxy';
import type { AccountId, AssetId, Balance, BalanceOf, BlockNumber, CallHash, FixedI64, FixedU128, Hash, ValidatorId } from '@polkadot/types/interfaces/runtime';
import type { SessionIndex } from '@polkadot/types/interfaces/session';
import type { DispatchError, DispatchInfo, DispatchResult } from '@polkadot/types/interfaces/system';
import type { Timepoint } from '@polkadot/types/interfaces/utility';

declare module '@polkadot/api-base/types/events' {
  export interface AugmentedEvents<ApiType extends ApiTypes> {
    bailsman: {
      /**
       * Bailsman subaccount is no longer a bailsman. \[who\]
       **/
      UnregisteredBailsman: AugmentedEvent<ApiType, [AccountId]>;
    };
    chainBridge: {
      /**
       * Allowability transfers for the chain has changed. \[chain_id, enabled\]
       **/
      ChainToggled: AugmentedEvent<ApiType, [ChainId, bool]>;
      /**
       * Chain now available for transfers. \[chain_id\]
       **/
      ChainWhitelisted: AugmentedEvent<ApiType, [ChainId]>;
      /**
       * Fee for chain has changed. \[chain_id, fee\]
       **/
      FeeChanged: AugmentedEvent<ApiType, [ChainId, Balance]>;
      /**
       * FunglibleTransfer is for relaying fungibles. \[dest_id, nonce, resource_id, amount, recipient\]
       **/
      FungibleTransfer: AugmentedEvent<ApiType, [ChainId, DepositNonce, ResourceId, U256, Bytes]>;
      /**
       * GenericTransfer is for a generic data payload. \[dest_id, nonce, resource_id, metadata\]
       **/
      GenericTransfer: AugmentedEvent<ApiType, [ChainId, DepositNonce, ResourceId, Bytes]>;
      /**
       * NonFungibleTransfer is for relaying NFTS. \[dest_id, nonce, resource_id, token_id, recipient, metadata\]
       **/
      NonFungibleTransfer: AugmentedEvent<ApiType, [ChainId, DepositNonce, ResourceId, Bytes, Bytes, Bytes]>;
      /**
       * Voting successful for a proposal. \[dest_id, nonce\]
       **/
      ProposalApproved: AugmentedEvent<ApiType, [ChainId, DepositNonce]>;
      /**
       * Execution of call failed. \[dest_id, nonce\]
       **/
      ProposalFailed: AugmentedEvent<ApiType, [ChainId, DepositNonce]>;
      /**
       * Proposal lifetime has changed. \[lifetime\]
       **/
      ProposalLifetimeChanged: AugmentedEvent<ApiType, [BlockNumber]>;
      /**
       * Voting rejected a proposal. \[dest_id, nonce\]
       **/
      ProposalRejected: AugmentedEvent<ApiType, [ChainId, DepositNonce]>;
      /**
       * Execution of call succeeded. \[dest_id, nonce\]
       **/
      ProposalSucceeded: AugmentedEvent<ApiType, [ChainId, DepositNonce]>;
      /**
       * Relayer added to set. \[who\]
       **/
      RelayerAdded: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * Relayer removed from set. \[who\]
       **/
      RelayerRemoved: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * Vote threshold has changed. \[new_threshold\]
       **/
      RelayerThresholdChanged: AugmentedEvent<ApiType, [u32]>;
      /**
       * Vot submitted against proposal. \[dest_id, nonce, who\]
       **/
      VoteAgainst: AugmentedEvent<ApiType, [ChainId, DepositNonce, AccountId]>;
      /**
       * Vote submitted in favour of proposal. \[dest_id, nonce, who\]
       **/
      VoteFor: AugmentedEvent<ApiType, [ChainId, DepositNonce, AccountId]>;
    };
    curveAmm: {
      /**
       * Liquidity added into the pool `PoolId` by `T::AccountId`.
       * 
       * Included values are:
       * - account identifier `T::AccountId`
       * - pool identifier `PoolId`
       * - added token amounts `Vec<T::Balance>`
       * - charged fees `Vec<T::Balance>`
       * - actual invariant `T::Balance`
       * - actual token supply `T::Balance`
       * - minted amount `T::Balance`
       * 
       * \[who, pool_id, token_amounts, fees, invariant, token_supply, mint_amount\]
       **/
      AddLiquidity: AugmentedEvent<ApiType, [AccountId, PoolId, Vec<Balance>, Vec<Balance>, Balance, Balance, Balance]>;
      /**
       * Pool with specified id `PoolId` was created successfully by `T::AccountId`.
       * 
       * Included values are:
       * - account identifier `T::AccountId`
       * - pool identifier `PoolId`
       * 
       * \[who, pool_id\]
       **/
      CreatePool: AugmentedEvent<ApiType, [AccountId, PoolId]>;
      /**
       * Liquidity removed from pool `PoolId` by `T::AccountId` in balanced way.
       * 
       * Included values are:
       * - account identifier `T::AccountId`
       * - pool identifier `PoolId`
       * - removed token amounts `Vec<T::Balance>`
       * - charged fees `Vec<T::Balance>`
       * - actual token supply `T::Balance`
       * - removed LP token amount `T::Balance`
       * 
       * \[who, pool_id, token_amounts, fees, token_supply\]
       **/
      RemoveLiquidity: AugmentedEvent<ApiType, [AccountId, PoolId, Vec<Balance>, Vec<Balance>, Balance, Balance]>;
      /**
       * Liquidity removed from pool `PoolId` by `T::AccountId` in imbalanced way.
       * 
       * Included values are:
       * - account identifier `T::AccountId`
       * - pool identifier `PoolId`
       * - removed token amounts `Vec<T::Balance>`
       * - charged fees `Vec<T::Balance>`
       * - actual invariant `T::Balance`
       * - actual token supply `T::Balance`
       * - removed LP token amount `T::Balance`
       * 
       * \[who, pool_id, token_amounts, fees, invariant, token_supply, burn_amount\]
       **/
      RemoveLiquidityImbalance: AugmentedEvent<ApiType, [AccountId, PoolId, Vec<Balance>, Vec<Balance>, Balance, Balance, Balance]>;
      /**
       * Liquidity removed from pool `PoolId` only for one token.
       * 
       * Included values are:
       * - account identifier `T::AccountId`
       * - pool identifier `PoolId`
       * - removed token amount `T::Balance`
       * - received token index `PoolTokenIndex`
       * - received token amount `T::Balance`
       * - actual token supply `T::Balance`
       * - charged fee `T::Balance`
       * 
       * \[who, pool_id, burn_amount, received_token, received_amount, token_supply, fee\]
       **/
      RemoveLiquidityOne: AugmentedEvent<ApiType, [AccountId, PoolId, Balance, PoolTokenIndex, Balance, Balance, Balance]>;
      /**
       * Token exchange happened.
       * 
       * Included values are:
       * - account identifier `T::AccountId`
       * - pool identifier `PoolId`
       * - index of sent token `PoolTokenIndex`
       * - amount of sent token `T::Balance`
       * - index of received token `PoolTokenIndex`
       * - amount of received token `T::Balance`
       * - charged fee `T::Balance`
       * 
       * \[who, pool_id, sent_token_index, sent_amount, received_token_index, received_amount, fee\]
       **/
      TokenExchange: AugmentedEvent<ApiType, [AccountId, PoolId, PoolTokenIndex, Balance, PoolTokenIndex, Balance, Balance]>;
      /**
       * Withdraw admin fees `Vec<T::Balance>` from pool `PoolId` by user `T::AccountId`
       * 
       * Included values are:
       * - account identifier `T::AccountId`
       * - pool identifier `PoolId`
       * - withdrew admin fees `Vec<T::Balance>`
       * 
       * [who, pool_id, admin_fees]
       **/
      WithdrawAdminFees: AugmentedEvent<ApiType, [AccountId, PoolId, Vec<Balance>]>;
    };
    curveDistribution: {
      /**
       * Curve admin fees distributed \[asset, asset_name, amount\]
       **/
      CurveAdminFeesDistributed: AugmentedEvent<ApiType, [AssetIdInnerType, Bytes, Balance]>;
    };
    eqAssets: {
      /**
       * Asset removed from store \[asset, asset_name\]
       **/
      DeleteAsset: AugmentedEvent<ApiType, [AssetIdInnerType, Bytes]>;
      /**
       * New asset added to store  \[asset, asset_name\]
       **/
      NewAsset: AugmentedEvent<ApiType, [AssetIdInnerType, Bytes]>;
      /**
       * Asset updated in the store \[asset, asset_name\]
       **/
      UpdateAsset: AugmentedEvent<ApiType, [AssetIdInnerType, Bytes]>;
    };
    eqBalances: {
      /**
       * Delete account event. \[who\]
       **/
      DeleteAccount: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * Deposit event
       **/
      Deposit: AugmentedEvent<ApiType, [AccountId, Asset, Balance]>;
      /**
       * Exchange event. Included values are:
       * - accounts that perform exchange
       * - exchanged assets
       * - exchanged amounts
       * \[account_1, asset_1, amount_1, account_2, asset_2, amount_2\]
       **/
      Exchange: AugmentedEvent<ApiType, [AccountId, Asset, Balance, AccountId, Asset, Balance]>;
      /**
       * Transfer event. Included values are:
       * - from `AccountId`
       * - to `AccountId`
       * - transfer `Asset`
       * - transferred amount
       * - transfer reason
       * \[from, to, asset, amount, reason\]
       **/
      Transfer: AugmentedEvent<ApiType, [AccountId, AccountId, Asset, Balance, TransferReason]>;
      /**
       * Withdraw event
       **/
      Withdraw: AugmentedEvent<ApiType, [AccountId, Asset, Balance]>;
    };
    eqBridge: {
      /**
       * Transfers funds from the bridge into the network
       **/
      FromBridgeTransfer: AugmentedEvent<ApiType, [AccountId, Asset, Balance]>;
      /**
       * Minimum transfer amount to out of the network has changed. \[chainId, resourceId, new_minimum_amount\]
       **/
      MinimumTransferAmountChanged: AugmentedEvent<ApiType, [ChainId, ResourceId, Balance]>;
      /**
       * Demonstrate an arbitrary call from a proposal. \[hash\]
       **/
      Remark: AugmentedEvent<ApiType, [Hash]>;
      /**
       * Transfers funds out of the network to the bridge
       **/
      ToBridgeTransfer: AugmentedEvent<ApiType, [AccountId, Asset, Balance]>;
    };
    eqDex: {
      /**
       * Orders matched
       * `[asset, taker_rest, maker_price, maker_order_id, maker, taker, maker_fee, taker_fee, exchange_amount, maker_side]`
       **/
      Match: AugmentedEvent<ApiType, [Asset, FixedU128, FixedI64, OrderId, AccountId, AccountId, Balance, Balance, FixedU128, OrderSide]>;
      /**
       * Order was created
       * `[subaccount_id, order_id, asset, amount, price, side, created_at, expiration_time]`
       **/
      OrderCreated: AugmentedEvent<ApiType, [AccountId, u64, Asset, FixedU128, FixedI64, OrderSide, u64, u64]>;
      /**
       * Order was deleted
       * `[maybe_account_id, order_id, asset]`
       **/
      OrderDeleted: AugmentedEvent<ApiType, [Option<AccountId>, u64, Asset]>;
    };
    eqMarginCall: {
      /**
       * Event is fired when an account achieves the `maintenance_margin` level.
       **/
      MaintenanceMarginCall: AugmentedEvent<ApiType, [AccountId, u64]>;
      /**
       * Event is fired when an account is liquidated.
       **/
      MarginCallExecuted: AugmentedEvent<ApiType, [AccountId]>;
    };
    eqMultisigSudo: {
      /**
       * The storage has been initialized
       **/
      Initialized: AugmentedEvent<ApiType, []>;
      /**
       * A key has been added to the multisig signatory list
       **/
      KeyAdded: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * A key has been removed to the multisig signatory list
       **/
      KeyRemoved: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * Sudo was executed on the proposal after enough signatures
       **/
      MultisigSudid: AugmentedEvent<ApiType, [CallHash, DispatchResult]>;
      /**
       * A new multisig proposal
       **/
      NewProposal: AugmentedEvent<ApiType, [AccountId, CallHash]>;
      /**
       * The proposal was approved
       **/
      ProposalApproved: AugmentedEvent<ApiType, [AccountId, CallHash]>;
      /**
       * The proposal was cancelled
       **/
      ProposalCancelled: AugmentedEvent<ApiType, [CallHash]>;
      /**
       * Sudo critical failure
       **/
      SudoFailed: AugmentedEvent<ApiType, [CallHash]>;
      /**
       * The signatory threshold was modified; a new value is supplied.
       **/
      ThresholdModified: AugmentedEvent<ApiType, [u32]>;
    };
    eqSessionManager: {
      /**
       * Validator successfully added
       * \[who\]
       **/
      ValidatorAdded: AugmentedEvent<ApiType, [ValidatorId]>;
      /**
       * Validator successfully removed
       * \[who\]
       **/
      ValidatorRemoved: AugmentedEvent<ApiType, [ValidatorId]>;
    };
    financial: {
      /**
       * Financial metrics for the specified asset have been recalculated
       * \[asset\]
       **/
      AssetMetricsRecalculated: AugmentedEvent<ApiType, [Asset]>;
      /**
       * Financial metrics for all assets have been recalculated
       **/
      MetricsRecalculated: AugmentedEvent<ApiType, []>;
      /**
       * Financial metrics for the specified portfolio have been recalculated
       * \[portfolio\]
       **/
      PortfolioMetricsRecalculated: AugmentedEvent<ApiType, [AccountId]>;
    };
    gensBinaryOpt: {
      /**
       * `who` wins binary option and claims `reward`
       * \[binary_id, who, reward\]
       **/
      Claim: AugmentedEvent<ApiType, [BinaryId, AccountId, Balance]>;
      /**
       * `who` participats in binary option with `deposit`
       * \[binary_id, who, deposit\]
       **/
      Enter: AugmentedEvent<ApiType, [BinaryId, AccountId, Balance]>;
      /**
       * Binary option deleted
       * \[binary_id\]
       **/
      Purge: AugmentedEvent<ApiType, [BinaryId]>;
      /**
       * `who` quits binary option
       * \[binary_id, who\]
       **/
      Quit: AugmentedEvent<ApiType, [BinaryId, AccountId]>;
      /**
       * New binary option just started
       * \[binary_id, target_asset, proper_asset\]
       **/
      Start: AugmentedEvent<ApiType, [BinaryId, Asset, BinaryMode, Asset]>;
    };
    gensCrowdloan: {
      /**
       * User `who` claims `amount` of Gens with `penalty`
       * \[who, amount, penalty amount\]
       **/
      Claim: AugmentedEvent<ApiType, [AccountId, BalanceOf, BalanceOf]>;
    };
    gensOptOut: {
      /**
       * Added liquidity to stable pool (user, added, total)
       **/
      Bought: AugmentedEvent<ApiType, [AccountId, Balance, Balance]>;
      /**
       * Distributed token (user, asset, amount, price)
       **/
      Distributed: AugmentedEvent<ApiType, [AccountId, Asset, Balance, Balance]>;
      /**
       * Sold allocation (user, allocation, transfer_amount)
       **/
      Sold: AugmentedEvent<ApiType, [AccountId, Balance, Balance]>;
    };
    grandpa: {
      /**
       * New authority set has been applied. \[authority_set\]
       **/
      NewAuthorities: AugmentedEvent<ApiType, [AuthorityList]>;
      /**
       * Current authority set has been paused.
       **/
      Paused: AugmentedEvent<ApiType, []>;
      /**
       * Current authority set has been resumed.
       **/
      Resumed: AugmentedEvent<ApiType, []>;
    };
    mmPool: {
      /**
       * new Deposit to mm pool
       * [who, asset, deposit_amount, whole_deposit]
       **/
      NewDeposit: AugmentedEvent<ApiType, [AccountId, Asset, Balance, Balance]>;
      /**
       * Existing pool is changed
       * [pool_account_id, currency, min_amount]
       **/
      PoolChanged: AugmentedEvent<ApiType, [Asset, Balance]>;
      /**
       * New pool is created
       * [pool_account_id, currency, min_amount]
       **/
      PoolCreated: AugmentedEvent<ApiType, [AccountId, Asset, Balance]>;
    };
    multisig: {
      /**
       * A multisig operation has been approved by someone.
       * \[approving, timepoint, multisig, call_hash\]
       **/
      MultisigApproval: AugmentedEvent<ApiType, [AccountId, Timepoint, AccountId, CallHash]>;
      /**
       * A multisig operation has been cancelled. \[cancelling, timepoint, multisig, call_hash\]
       **/
      MultisigCancelled: AugmentedEvent<ApiType, [AccountId, Timepoint, AccountId, CallHash]>;
      /**
       * A multisig operation has been executed. \[approving, timepoint, multisig, call_hash\]
       **/
      MultisigExecuted: AugmentedEvent<ApiType, [AccountId, Timepoint, AccountId, CallHash, DispatchResult]>;
      /**
       * A new multisig operation has begun. \[approving, multisig, call_hash\]
       **/
      NewMultisig: AugmentedEvent<ApiType, [AccountId, AccountId, CallHash]>;
    };
    oracle: {
      /**
       * A new price added to the storage. The event contains: `Asset` for the price,
       * `FixedI64` for the price value that was added, `FixedI64` for a new
       * aggregated price and `AccountId` of the price submitter
       * \[asset, new_value, aggregated, submitter\]
       **/
      NewPrice: AugmentedEvent<ApiType, [Asset, FixedI64, FixedI64, AccountId]>;
    };
    proxy: {
      /**
       * An announcement was placed to make a call in the future. \[real, proxy, call_hash\]
       **/
      Announced: AugmentedEvent<ApiType, [AccountId, AccountId, Hash]>;
      /**
       * Anonymous account has been created by new proxy with given
       * disambiguation index and proxy type. \[anonymous, who, proxy_type, disambiguation_index\]
       **/
      AnonymousCreated: AugmentedEvent<ApiType, [AccountId, AccountId, ProxyType, u16]>;
      /**
       * A proxy was executed correctly, with the given \[result\].
       **/
      ProxyExecuted: AugmentedEvent<ApiType, [DispatchResult]>;
    };
    session: {
      /**
       * New session has happened. Note that the argument is the \[session_index\], not the block
       * number as the type might suggest.
       **/
      NewSession: AugmentedEvent<ApiType, [SessionIndex]>;
    };
    subaccounts: {
      /**
       * Register bailsman subaccount as bailsman
       * - first element is subaccount owner's `AccountId`
       * - second element is subaccount of type Bailsman
       * \[owner, subaccount\]
       **/
      RegisterBailsman: AugmentedEvent<ApiType, [AccountId, AccountId]>;
      /**
       * New subaccount created
       * - first element is subaccount owner's `AccountId`
       * - second element is `AccountId` of created subaccount
       * - last element is a type of created subaccount
       * \[owner, subaccount, type\]
       **/
      SubaccountCreated: AugmentedEvent<ApiType, [AccountId, AccountId, SubAccType]>;
    };
    sudo: {
      /**
       * The \[sudoer\] just switched identity; the old key is supplied.
       **/
      KeyChanged: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * A sudo just took place. \[result\]
       **/
      Sudid: AugmentedEvent<ApiType, [DispatchResult]>;
      /**
       * A sudo just took place. \[result\]
       **/
      SudoAsDone: AugmentedEvent<ApiType, [DispatchResult]>;
    };
    system: {
      /**
       * `:code` was updated.
       **/
      CodeUpdated: AugmentedEvent<ApiType, []>;
      /**
       * An extrinsic failed. \[error, info\]
       **/
      ExtrinsicFailed: AugmentedEvent<ApiType, [DispatchError, DispatchInfo]>;
      /**
       * An extrinsic completed successfully. \[info\]
       **/
      ExtrinsicSuccess: AugmentedEvent<ApiType, [DispatchInfo]>;
      /**
       * An \[account\] was reaped.
       **/
      KilledAccount: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * A new \[account\] was created.
       **/
      NewAccount: AugmentedEvent<ApiType, [AccountId]>;
    };
    utility: {
      /**
       * Batch of dispatches completed fully with no error.
       **/
      BatchCompleted: AugmentedEvent<ApiType, []>;
      /**
       * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
       * well as the error. \[index, error\]
       **/
      BatchInterrupted: AugmentedEvent<ApiType, [u32, DispatchError]>;
    };
    vesting: {
      /**
       * An `account` has become fully vested. No further vesting can happen
       * \[account\]
       **/
      VestingCompleted: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * The amount vested has been updated. This could indicate more funds are available. The
       * balance given is the amount which is left unvested (and thus locked)
       * \[account, unvested\]
       **/
      VestingUpdated: AugmentedEvent<ApiType, [AccountId, BalanceOf]>;
    };
    whitelists: {
      /**
       * `AccountId` was added to the whitelist. \[who\]
       **/
      AddedToWhitelist: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * `AccountId` was removed from the whitelist. \[who\]
       **/
      RemovedFromWhitelist: AugmentedEvent<ApiType, [AccountId]>;
    };
    xdot: {
      /**
       * LP tokens was burned, base and xbase was transfered from pool
       * 
       * Included values are:
       * - account identifier `T::AccountId`
       * - pool indentifier `PoolId`
       * - base asset amount `T::Balance`
       * - xbase asset amount `T::Balance`
       * - lp tokens amount `T::Balance`
       * 
       * \[who, pool_id, base_out, xbase_out, tokens_burned\]
       **/
      Burned: AugmentedEvent<ApiType, [AccountId, PoolId, Balance, Balance, Balance]>;
      /**
       * Base was bought from pool in exchange for xbase
       * 
       * Included values are:
       * - account identifier `T::AccountId`
       * - pool indentifier `PoolId`
       * - base asset amount `T::Balance`
       * - xbase asset amount `T::Balance`
       **/
      BuyBase: AugmentedEvent<ApiType, [AccountId, PoolId, Balance, Balance]>;
      /**
       * Xbase was bought from pool in exchange for base
       * 
       * Included values are:
       * - account identifier `T::AccountId`
       * - pool indentifier `PoolId`
       * - base asset amount `T::Balance`
       * - xbase asset amount `T::Balance`
       **/
      BuyXBase: AugmentedEvent<ApiType, [AccountId, PoolId, Balance, Balance]>;
      /**
       * LP tokens was minted, base and xbase was transfered into pool
       * 
       * Included values are:
       * - account identifier `T::AccountId`
       * - pool indentifier `PoolId`
       * - base asset amount `T::Balance`
       * - xbase asset amount `T::Balance`
       * - lp tokens amount `T::Balance`
       * 
       * \[who, pool_id, base_in, xbase_in, tokens_minted\]
       **/
      Minted: AugmentedEvent<ApiType, [AccountId, PoolId, Balance, Balance, Balance]>;
      /**
       * Pool with specified id `PoolId` was created successfully.
       * 
       * Included values are:
       * - pool identifier `PoolId`
       * - LP asset
       * - Base asset
       * - XBase asset
       * - g1 coeff
       * - g2 coeff
       * - ts coeff
       * \[pool_id, base_asset, xbase_asset, g1, g2, ts\]
       **/
      PoolCreated: AugmentedEvent<ApiType, [PoolId, AssetId, AssetId, AssetId, XdotNumber, XdotNumber, XdotNumber]>;
      /**
       * Base was sold into pool in exchange for xbase.
       * 
       * Included values are:
       * - account identifier `T::AccountId`
       * - pool indentifier `PoolId`
       * - base asset amount `T::Balance`
       * - xbase asset amount `T::Balance`
       **/
      SaleBase: AugmentedEvent<ApiType, [AccountId, PoolId, Balance, Balance]>;
      /**
       * Xbase was sold into pool in exchange for base
       * 
       * Included values are:
       * - account identifier `T::AccountId`
       * - pool indentifier `PoolId`
       * - base asset amount `T::Balance`
       * - xbase asset amount `T::Balance`
       **/
      SellXBase: AugmentedEvent<ApiType, [AccountId, PoolId, Balance, Balance]>;
    };
  } // AugmentedEvents
} // declare module
