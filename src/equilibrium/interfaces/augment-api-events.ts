// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { Asset, Currency, DepositNonce, ResourceId, SubAccType, TransferReason } from '@equilab/api/equilibrium/interfaces/latest';
import type { ApiTypes } from '@polkadot/api-base/types';
import type { Bytes, U256, u32, u64 } from '@polkadot/types-codec';
import type { ChainId } from '@polkadot/types/interfaces/bridges';
import type { EthereumAddress } from '@polkadot/types/interfaces/eth';
import type { AuthorityList } from '@polkadot/types/interfaces/grandpa';
import type { AccountId, Balance, BalanceOf, CallHash, FixedI64, Hash, ValidatorId } from '@polkadot/types/interfaces/runtime';
import type { SessionIndex } from '@polkadot/types/interfaces/session';
import type { DispatchError, DispatchInfo, DispatchResult } from '@polkadot/types/interfaces/system';

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
       * Chain now available for transfers. \[chain_id\]
       **/
      ChainWhitelisted: AugmentedEvent<ApiType, [ChainId]>;
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
    claims: {
      /**
       * `AccountId` claimed `Balance` amount of currency reserved for `EthereumAddress`
       * \[who, ethereum_account, amount\]
       **/
      Claimed: AugmentedEvent<ApiType, [AccountId, EthereumAddress, BalanceOf]>;
    };
    crvBridge: {
      /**
       * Demonstrate an arbitrary call from a proposal. \[hash\]
       **/
      Remark: AugmentedEvent<ApiType, [Hash]>;
    };
    eqBalances: {
      /**
       * Delete account event. \[who\]
       **/
      DeleteAccount: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * Transfer event. Included values are:
       * - from `AccountId`
       * - to `AccountId`
       * - transfer `Currency`
       * - transferred amount
       * - transfer reason
       * \[from, to, currency, amount, reason\]
       **/
      Transfer: AugmentedEvent<ApiType, [AccountId, AccountId, Currency, Balance, TransferReason]>;
    };
    eqBridge: {
      /**
       * Demonstrate an arbitrary call from a proposal. \[hash\]
       **/
      Remark: AugmentedEvent<ApiType, [Hash]>;
    };
    eqLockdrop: {
      /**
       * User `who` locks `amount` of Eq
       * \[who, amount\]
       **/
      Lock: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * User `who` unlocks `amount` of Eq
       * \[who, amount\]
       **/
      Unlock: AugmentedEvent<ApiType, [AccountId, Balance]>;
    };
    eqMarginCall: {
      /**
       * Event is fired when an account achieves maintenance_margin level.
       **/
      MaintenanceMarginCall: AugmentedEvent<ApiType, [AccountId, u64]>;
      /**
       * Event is fired when an account is liquidated.
       **/
      MarginCallExecuted: AugmentedEvent<ApiType, [AccountId]>;
    };
    eqMultisigSudo: {
      /**
       * Storage initialized
       **/
      Initialized: AugmentedEvent<ApiType, []>;
      /**
       * A key has been added to the multisig signatory list
       **/
      KeyAdded: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * A key has been added to the multisig signatory list
       **/
      KeyRemoved: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * Sudo executed on a proposal after enough signatures
       **/
      MultisigSudid: AugmentedEvent<ApiType, [CallHash]>;
      /**
       * New Multisig proposal
       **/
      NewProposal: AugmentedEvent<ApiType, [AccountId, CallHash]>;
      /**
       * Proposal was approved
       **/
      ProposalApproved: AugmentedEvent<ApiType, [AccountId, CallHash]>;
      /**
       * Proposal was cancelled
       **/
      ProposalCancelled: AugmentedEvent<ApiType, [CallHash]>;
      /**
       * Sudo critical failure
       **/
      SudoFailed: AugmentedEvent<ApiType, [CallHash]>;
      /**
       * Signatory threshold was modified; new value is supplied.
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
    ethBridge: {
      /**
       * Demonstrate an arbitrary call from a proposal. \[hash\]
       **/
      Remark: AugmentedEvent<ApiType, [Hash]>;
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
    oracle: {
      /**
       * New price added to storage. Event contains: `Currency` for price,
       * `FixedI64` for price value that was added, `FixedI64` for new
       * aggregated price and `AccountId` of price submitter
       * \[currency, new_value, aggregated, submitter\]
       **/
      NewPrice: AugmentedEvent<ApiType, [Currency, FixedI64, FixedI64, AccountId]>;
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
       * `AccountId` was added to whitelist. \[who\]
       **/
      AddedToWhitelist: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * `AccountId` was removed from whitelist. \[who\]
       **/
      RemovedFromWhitelist: AugmentedEvent<ApiType, [AccountId]>;
    };
  } // AugmentedEvents
} // declare module
