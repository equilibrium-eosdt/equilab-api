// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { Asset, AssetMetrics, Currency, DepositNonce, FinancialMetrics, PortfolioMetrics, PriceLog, PricePoint, PriceUpdate, ProposalVotes, ResourceId, SignedBalance, SubAccType, TotalAggregates, UserGroup } from '@equilab/api/equilibrium/interfaces/latest';
import type { ApiTypes } from '@polkadot/api-base/types';
import type { Bytes, Option, U8aFixed, Vec, bool, u32, u64 } from '@polkadot/types-codec';
import type { AnyNumber, ITuple } from '@polkadot/types-codec/types';
import type { UncleEntryItem } from '@polkadot/types/interfaces/authorship';
import type { ChainId } from '@polkadot/types/interfaces/bridges';
import type { AuthorityId } from '@polkadot/types/interfaces/consensus';
import type { Proposal } from '@polkadot/types/interfaces/democracy';
import type { EthereumAddress } from '@polkadot/types/interfaces/eth';
import type { SetId, StoredPendingChange, StoredState } from '@polkadot/types/interfaces/grandpa';
import type { AccountId, Balance, BalanceOf, BlockNumber, Hash, KeyTypeId, Moment, Releases, ValidatorId } from '@polkadot/types/interfaces/runtime';
import type { Keys, SessionIndex } from '@polkadot/types/interfaces/session';
import type { AccountInfo, ConsumedWeight, DigestOf, EventIndex, EventRecord, LastRuntimeUpgradeInfo, Phase } from '@polkadot/types/interfaces/system';
import type { Multiplier } from '@polkadot/types/interfaces/txpayment';
import type { Multisig } from '@polkadot/types/interfaces/utility';
import type { VestingInfo } from '@polkadot/types/interfaces/vesting';
import type { Observable } from '@polkadot/types/types';

declare module '@polkadot/api-base/types/storage' {
  export interface AugmentedQueries<ApiType extends ApiTypes> {
    authorship: {
      /**
       * Author of current block.
       **/
      author: AugmentedQuery<ApiType, () => Observable<Option<AccountId>>, []>;
      /**
       * Whether uncles were already set in this block.
       **/
      didSetUncles: AugmentedQuery<ApiType, () => Observable<bool>, []>;
      /**
       * Uncles
       **/
      uncles: AugmentedQuery<ApiType, () => Observable<Vec<UncleEntryItem>>, []>;
    };
    bailsman: {
    };
    chainBridge: {
      /**
       * All whitelisted chains and their respective transaction counts.
       **/
      chainNonces: AugmentedQuery<ApiType, (arg: ChainId | AnyNumber | Uint8Array) => Observable<Option<DepositNonce>>, [ChainId]>;
      /**
       * Number of relayers in set.
       **/
      relayerCount: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * Tracks current relayer set.
       **/
      relayers: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<bool>, [AccountId]>;
      /**
       * Number of votes required for a proposal to execute.
       **/
      relayerThreshold: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * Utilized by the bridge software to map resource IDs to actual methods.
       **/
      resources: AugmentedQuery<ApiType, (arg: ResourceId | string | Uint8Array) => Observable<Option<Bytes>>, [ResourceId]>;
      /**
       * All known proposals.
       * The key is the hash of the call and the deposit ID, to ensure it's unique.
       **/
      votes: AugmentedQuery<ApiType, (arg1: ChainId | AnyNumber | Uint8Array, arg2: ITuple<[DepositNonce, Proposal]> | [DepositNonce | AnyNumber | Uint8Array, Proposal | { callIndex?: any; args?: any } | string | Uint8Array]) => Observable<Option<ProposalVotes>>, [ChainId, ITuple<[DepositNonce, Proposal]>]>;
    };
    claims: {
      /**
       * Pallet storage - stores amount to be claimed by each `EthereumAddress`
       **/
      claims: AugmentedQuery<ApiType, (arg: EthereumAddress | string | Uint8Array) => Observable<Option<BalanceOf>>, [EthereumAddress]>;
      /**
       * Pallet storage - pre-claimed Ethereum accounts, by the Account ID that
       * they are claimed to
       **/
      preclaims: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Option<EthereumAddress>>, [AccountId]>;
      /**
       * Pallet storage - stores Ethereum addresses from which additional statement
       * singing is required
       **/
      signing: AugmentedQuery<ApiType, (arg: EthereumAddress | string | Uint8Array) => Observable<bool>, [EthereumAddress]>;
      /**
       * Pallet storage - total `Claims` amount
       **/
      total: AugmentedQuery<ApiType, () => Observable<BalanceOf>, []>;
      /**
       * Pallet storage - vesting schedule for a claim.
       * First balance is the total amount that should be held for vesting.
       * Second balance is how much should be unlocked per block.
       * The block number is when the vesting should start.
       **/
      vesting: AugmentedQuery<ApiType, (arg: EthereumAddress | string | Uint8Array) => Observable<Option<ITuple<[BalanceOf, BalanceOf, BlockNumber]>>>, [EthereumAddress]>;
    };
    eqAggregates: {
      accountUserGroups: AugmentedQuery<ApiType, (arg1: UserGroup | 'Unknown' | 'Balances' | 'Bailsmen' | 'Borrowers' | 'Lenders' | number | Uint8Array, arg2: AccountId | string | Uint8Array) => Observable<bool>, [UserGroup, AccountId]>;
      /**
       * Pallet storage - stores aggregates for each user group
       **/
      totalUserGroups: AugmentedQuery<ApiType, (arg1: UserGroup | 'Unknown' | 'Balances' | 'Bailsmen' | 'Borrowers' | 'Lenders' | number | Uint8Array, arg2: Currency | 'Unknown' | 'Usd' | 'Eq' | 'Eth' | 'Btc' | 'Eos' | 'Dot' | 'Crv' | number | Uint8Array) => Observable<TotalAggregates>, [UserGroup, Currency]>;
    };
    eqBalances: {
      /**
       * Pallet storage - balances for all accounts
       **/
      account: AugmentedQuery<ApiType, (arg1: AccountId | string | Uint8Array, arg2: Currency | 'Unknown' | 'Usd' | 'Eq' | 'Eth' | 'Btc' | 'Eos' | 'Dot' | 'Crv' | number | Uint8Array) => Observable<SignedBalance>, [AccountId, Currency]>;
      /**
       * Flag for enable/disable transfers
       **/
      isTransfersEnabled: AugmentedQuery<ApiType, () => Observable<bool>, []>;
    };
    eqInvestors: {
    };
    eqLiquidityFarming: {
    };
    eqLockdrop: {
      /**
       * Stores flag for on/off setting for offchain worker (unlocks)
       **/
      autoUnlockEnabled: AugmentedQuery<ApiType, () => Observable<bool>, []>;
      /**
       * Pallet storage - accounts locks
       **/
      locks: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Balance>, [AccountId]>;
      /**
       * Pallet storage - start of lock program.
       * Value is UnixTime timestamp in seconds
       **/
      lockStart: AugmentedQuery<ApiType, () => Observable<Option<u64>>, []>;
      /**
       * This is the max amount of unlocks an offchain worker can make
       **/
      maxOffchainUnlocks: AugmentedQuery<ApiType, () => Observable<Option<u64>>, []>;
    };
    eqMarginCall: {
      maintenanceTimers: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Option<u64>>, [AccountId]>;
    };
    eqMultisigSudo: {
      /**
       * Multisig signatory key list.
       **/
      keys: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<bool>, [AccountId]>;
      /**
       * Map storing proposals by call hash CallHash
       **/
      multisigProposals: AugmentedQuery<ApiType, (arg: U8aFixed | string | Uint8Array) => Observable<Multisig>, [U8aFixed]>;
      /**
       * Threshold required to proceed the call.
       **/
      threshold: AugmentedQuery<ApiType, () => Observable<u32>, []>;
    };
    eqParachainOffering: {
    };
    eqRate: {
      /**
       * Stores flag for on/off setting for offchain workers (reinits)
       **/
      autoReinitEnabled: AugmentedQuery<ApiType, () => Observable<bool>, []>;
      /**
       * Pallet storage for keys
       **/
      keys: AugmentedQuery<ApiType, () => Observable<Vec<AuthorityId>>, []>;
      /**
       * Pallet storage - last update timestamps for each `AccountId` that has balances
       **/
      lastFeeUpdate: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<u64>, [AccountId]>;
      /**
       * Pallet storage used for time offset in test builds. Disabled by "production" feature.
       **/
      nowMillisOffset: AugmentedQuery<ApiType, () => Observable<u64>, []>;
    };
    eqSessionManager: {
      /**
       * Pallet storage - flag showing that active validators list changed
       * during a session
       **/
      isChanged: AugmentedQuery<ApiType, () => Observable<bool>, []>;
      /**
       * Pallet storage - list of all active validators
       **/
      validators: AugmentedQuery<ApiType, (arg: ValidatorId | string | Uint8Array) => Observable<bool>, [ValidatorId]>;
    };
    eqTreasury: {
    };
    financial: {
      /**
       * Financial metrics for all known assets.
       **/
      metrics: AugmentedQuery<ApiType, () => Observable<Option<FinancialMetrics>>, []>;
      /**
       * Financial metrics on per asset basis.
       **/
      perAssetMetrics: AugmentedQuery<ApiType, (arg: Asset | 'Unknown' | 'Usd' | 'Eq' | 'Eth' | 'Btc' | 'Eos' | 'Dot' | 'Crv' | number | Uint8Array) => Observable<Option<AssetMetrics>>, [Asset]>;
      /**
       * Financial metrics on per portfolio basis.
       **/
      perPortfolioMetrics: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Option<PortfolioMetrics>>, [AccountId]>;
      /**
       * Price log on per asset basis.
       **/
      priceLogs: AugmentedQuery<ApiType, (arg: Asset | 'Unknown' | 'Usd' | 'Eq' | 'Eth' | 'Btc' | 'Eos' | 'Dot' | 'Crv' | number | Uint8Array) => Observable<Option<PriceLog>>, [Asset]>;
      /**
       * Latest price updates on per asset basis.
       **/
      updates: AugmentedQuery<ApiType, (arg: Asset | 'Unknown' | 'Usd' | 'Eq' | 'Eth' | 'Btc' | 'Eos' | 'Dot' | 'Crv' | number | Uint8Array) => Observable<Option<PriceUpdate>>, [Asset]>;
    };
    grandpa: {
      /**
       * The number of changes (both in terms of keys and underlying economic responsibilities)
       * in the "set" of Grandpa validators from genesis.
       **/
      currentSetId: AugmentedQuery<ApiType, () => Observable<SetId>, []>;
      /**
       * next block number where we can force a change.
       **/
      nextForced: AugmentedQuery<ApiType, () => Observable<Option<BlockNumber>>, []>;
      /**
       * Pending change: (signaled at, scheduled change).
       **/
      pendingChange: AugmentedQuery<ApiType, () => Observable<Option<StoredPendingChange>>, []>;
      /**
       * A mapping from grandpa set ID to the index of the *most recent* session for which its
       * members were responsible.
       * 
       * TWOX-NOTE: `SetId` is not under user control.
       **/
      setIdSession: AugmentedQuery<ApiType, (arg: SetId | AnyNumber | Uint8Array) => Observable<Option<SessionIndex>>, [SetId]>;
      /**
       * `true` if we are currently stalled.
       **/
      stalled: AugmentedQuery<ApiType, () => Observable<Option<ITuple<[BlockNumber, BlockNumber]>>>, []>;
      /**
       * State of the current authority set.
       **/
      state: AugmentedQuery<ApiType, () => Observable<StoredState>, []>;
    };
    liquidityFarming: {
      /**
       * Stores flag for on/off setting for offchain workers (rewards)
       **/
      autoRewardEnabled: AugmentedQuery<ApiType, () => Observable<bool>, []>;
      /**
       * Timestamp (Unix: seconds from 1970) of the last reward.
       **/
      lastRewardTimestamp: AugmentedQuery<ApiType, () => Observable<u64>, []>;
    };
    oracle: {
      /**
       * Stores flag for automatic financial metrics recalculation at start of each block
       **/
      finMetricsRecalcEnabled: AugmentedQuery<ApiType, () => Observable<bool>, []>;
      /**
       * Pallet storage for added price points
       **/
      pricePoints: AugmentedQuery<ApiType, (arg: Currency | 'Unknown' | 'Usd' | 'Eq' | 'Eth' | 'Btc' | 'Eos' | 'Dot' | 'Crv' | number | Uint8Array) => Observable<PricePoint>, [Currency]>;
    };
    randomnessCollectiveFlip: {
      /**
       * Series of block headers from the last 81 blocks that acts as random seed material. This
       * is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of
       * the oldest hash.
       **/
      randomMaterial: AugmentedQuery<ApiType, () => Observable<Vec<Hash>>, []>;
    };
    session: {
      /**
       * Current index of the session.
       **/
      currentIndex: AugmentedQuery<ApiType, () => Observable<SessionIndex>, []>;
      /**
       * Indices of disabled validators.
       * 
       * The set is cleared when `on_session_ending` returns a new set of identities.
       **/
      disabledValidators: AugmentedQuery<ApiType, () => Observable<Vec<u32>>, []>;
      /**
       * The owner of a key. The key is the `KeyTypeId` + the encoded key.
       **/
      keyOwner: AugmentedQuery<ApiType, (arg: ITuple<[KeyTypeId, Bytes]> | [KeyTypeId | AnyNumber | Uint8Array, Bytes | string | Uint8Array]) => Observable<Option<ValidatorId>>, [ITuple<[KeyTypeId, Bytes]>]>;
      /**
       * The next session keys for a validator.
       **/
      nextKeys: AugmentedQuery<ApiType, (arg: ValidatorId | string | Uint8Array) => Observable<Option<Keys>>, [ValidatorId]>;
      /**
       * True if the underlying economic identities or weighting behind the validators
       * has changed in the queued validator set.
       **/
      queuedChanged: AugmentedQuery<ApiType, () => Observable<bool>, []>;
      /**
       * The queued keys for the next session. When the next session begins, these keys
       * will be used to determine the validator's session keys.
       **/
      queuedKeys: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[ValidatorId, Keys]>>>, []>;
      /**
       * The current set of validators.
       **/
      validators: AugmentedQuery<ApiType, () => Observable<Vec<ValidatorId>>, []>;
    };
    subaccounts: {
      /**
       * Pallet storage - a map storing a tuple  (`AccountId`, `SubAccType`)
       * for each existing subaccount. First element in stored tuple is
       * `AccountId` of main user account, owning the subaccount and second
       * is `SubAccType` of key subaccount
       **/
      ownerAccount: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Option<ITuple<[AccountId, SubAccType]>>>, [AccountId]>;
      /**
       * Pallet storage - double map storing subaccounts as `AccountId` where
       * user's main `AccountId` and `SubAccType` used as keys
       **/
      subaccount: AugmentedQuery<ApiType, (arg1: AccountId | string | Uint8Array, arg2: SubAccType | 'Bailsman' | 'Borrower' | 'Lender' | number | Uint8Array) => Observable<Option<AccountId>>, [AccountId, SubAccType]>;
    };
    sudo: {
      /**
       * The `AccountId` of the sudo key.
       **/
      key: AugmentedQuery<ApiType, () => Observable<AccountId>, []>;
    };
    system: {
      /**
       * The full account information for a particular account ID.
       **/
      account: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<AccountInfo>, [AccountId]>;
      /**
       * Total length (in bytes) for all extrinsics put together, for the current block.
       **/
      allExtrinsicsLen: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []>;
      /**
       * Map of block numbers to block hashes.
       **/
      blockHash: AugmentedQuery<ApiType, (arg: BlockNumber | AnyNumber | Uint8Array) => Observable<Hash>, [BlockNumber]>;
      /**
       * The current weight for the block.
       **/
      blockWeight: AugmentedQuery<ApiType, () => Observable<ConsumedWeight>, []>;
      /**
       * Digest of the current block, also part of the block header.
       **/
      digest: AugmentedQuery<ApiType, () => Observable<DigestOf>, []>;
      /**
       * The number of events in the `Events<T>` list.
       **/
      eventCount: AugmentedQuery<ApiType, () => Observable<EventIndex>, []>;
      /**
       * Events deposited for the current block.
       **/
      events: AugmentedQuery<ApiType, () => Observable<Vec<EventRecord>>, []>;
      /**
       * Mapping between a topic (represented by T::Hash) and a vector of indexes
       * of events in the `<Events<T>>` list.
       * 
       * All topic vectors have deterministic storage locations depending on the topic. This
       * allows light-clients to leverage the changes trie storage tracking mechanism and
       * in case of changes fetch the list of events of interest.
       * 
       * The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
       * the `EventIndex` then in case if the topic has the same contents on the next block
       * no notification will be triggered thus the event might be lost.
       **/
      eventTopics: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Vec<ITuple<[BlockNumber, EventIndex]>>>, [Hash]>;
      /**
       * The execution phase of the block.
       **/
      executionPhase: AugmentedQuery<ApiType, () => Observable<Option<Phase>>, []>;
      /**
       * Total extrinsics count for the current block.
       **/
      extrinsicCount: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []>;
      /**
       * Extrinsics data for the current block (maps an extrinsic's index to its data).
       **/
      extrinsicData: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Bytes>, [u32]>;
      /**
       * Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
       **/
      lastRuntimeUpgrade: AugmentedQuery<ApiType, () => Observable<Option<LastRuntimeUpgradeInfo>>, []>;
      /**
       * The current block number being processed. Set by `execute_block`.
       **/
      number: AugmentedQuery<ApiType, () => Observable<BlockNumber>, []>;
      /**
       * Hash of the previous block.
       **/
      parentHash: AugmentedQuery<ApiType, () => Observable<Hash>, []>;
      /**
       * True if we have upgraded so that AccountInfo contains two types of `RefCount`. False
       * (default) if not.
       **/
      upgradedToDualRefCount: AugmentedQuery<ApiType, () => Observable<bool>, []>;
      /**
       * True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
       **/
      upgradedToU32RefCount: AugmentedQuery<ApiType, () => Observable<bool>, []>;
    };
    timestamp: {
      /**
       * Did the timestamp get updated in this block?
       **/
      didUpdate: AugmentedQuery<ApiType, () => Observable<bool>, []>;
      /**
       * Current time for the current block.
       **/
      now: AugmentedQuery<ApiType, () => Observable<Moment>, []>;
    };
    transactionPayment: {
      nextFeeMultiplier: AugmentedQuery<ApiType, () => Observable<Multiplier>, []>;
      storageVersion: AugmentedQuery<ApiType, () => Observable<Releases>, []>;
    };
    treasury: {
    };
    vesting: {
      /**
       * Pallet storage: information about already vested balances for given account
       **/
      vested: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Option<BalanceOf>>, [AccountId]>;
      /**
       * Pallet storage: information regarding the vesting of a given account
       **/
      vesting: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Option<VestingInfo>>, [AccountId]>;
    };
    whitelists: {
      /**
       * Storage of all whitelisted `AccountId`s
       **/
      whiteList: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Option<bool>>, [AccountId]>;
    };
  } // AugmentedQueries
} // declare module
