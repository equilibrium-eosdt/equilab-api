// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { Asset, AssetMetrics, Currency, DepositNonce, FinancialMetrics, OperationRequest, PricePayload, ResourceId, SubAccType } from '@equilab/api/equilibrium/interfaces/latest';
import type { ApiTypes } from '@polkadot/api-base/types';
import type { Bytes, Compact, Option, U8aFixed, Vec, bool, u16, u32, u64 } from '@polkadot/types-codec';
import type { AnyNumber, ITuple } from '@polkadot/types-codec/types';
import type { ChainId } from '@polkadot/types/interfaces/bridges';
import type { Proposal } from '@polkadot/types/interfaces/democracy';
import type { EthereumAddress } from '@polkadot/types/interfaces/eth';
import type { EcdsaSignature, Signature } from '@polkadot/types/interfaces/extrinsics';
import type { GrandpaEquivocationProof, KeyOwnerProof } from '@polkadot/types/interfaces/grandpa';
import type { AccountId, Balance, BalanceOf, BlockNumber, Call, ChangesTrieConfiguration, FixedI64, Hash, Header, KeyValue, LookupSource, Moment, Perbill, ValidatorId, Weight } from '@polkadot/types/interfaces/runtime';
import type { Keys } from '@polkadot/types/interfaces/session';
import type { Key } from '@polkadot/types/interfaces/system';
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
       * Enables a chain ID as a source or destination for a bridge transfer.
       * 
       * # <weight>
       * - O(1) lookup and insert
       * # </weight>
       **/
      whitelistChain: AugmentedSubmittable<(id: ChainId | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [ChainId]>;
    };
    claims: {
      /**
       * Attest to a statement, needed to finalize the claims process.
       * 
       * Unsigned Validation:
       * A call to attest is deemed valid if the sender has a `Preclaim` registered
       * and provides a `statement` which is expected for the account.
       * 
       * Parameters:
       * - `statement`: The identity of the statement which is being attested to in the signature.
       **/
      attest: AugmentedSubmittable<(statement: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Make a claim to collect your currency.
       * 
       * The dispatch origin for this call must be _None_.
       * 
       * Unsigned Validation:
       * A call to claim is deemed valid if the signature provided matches
       * the expected signed message of:
       * 
       * > Ethereum Signed Message:
       * > (configured prefix string)(address)
       * 
       * and `address` matches the `dest` account.
       * 
       * Parameters:
       * - `dest`: The destination account to payout the claim.
       * - `ethereum_signature`: The signature of an ethereum signed message
       * matching the format described above.
       **/
      claim: AugmentedSubmittable<(dest: AccountId | string | Uint8Array, ethereumSignature: EcdsaSignature | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId, EcdsaSignature]>;
      /**
       * Make a claim to collect your currency by signing a statement.
       * 
       * The dispatch origin for this call must be _None_.
       * 
       * Unsigned Validation:
       * A call to `claim_attest` is deemed valid if the signature provided matches
       * the expected signed message of:
       * 
       * > Ethereum Signed Message:
       * > (configured prefix string)(address)(statement)
       * 
       * and `address` matches the `dest` account; the `statement` must match that which is
       * expected according to your purchase arrangement.
       * 
       * Parameters:
       * - `dest`: The destination account to payout the claim.
       * - `ethereum_signature`: The signature of an ethereum signed message
       * matching the format described above.
       * - `statement`: The identity of the statement which is being attested to in the signature.
       **/
      claimAttest: AugmentedSubmittable<(dest: AccountId | string | Uint8Array, ethereumSignature: EcdsaSignature | string | Uint8Array, statement: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId, EcdsaSignature, Bytes]>;
      /**
       * Mint a new claim to collect currency
       * 
       * The dispatch origin for this call must be _Root_.
       * 
       * Parameters:
       * - `who`: The Ethereum address allowed to collect this claim.
       * - `value`: The balance that will be claimed.
       * - `vesting_schedule`: An optional vesting schedule for the claim
       **/
      mintClaim: AugmentedSubmittable<(who: EthereumAddress | string | Uint8Array, value: BalanceOf | AnyNumber | Uint8Array, vestingSchedule: Option<ITuple<[BalanceOf, BalanceOf, BlockNumber]>> | null | object | string | Uint8Array, statement: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [EthereumAddress, BalanceOf, Option<ITuple<[BalanceOf, BalanceOf, BlockNumber]>>, bool]>;
    };
    crvBridge: {
      /**
       * This can be called by the bridge to demonstrate an arbitrary call from a proposal.
       **/
      remark: AugmentedSubmittable<(hash: Hash | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Hash]>;
      /**
       * Deposits specified amount of Crv tokens to the user's account
       **/
      transfer: AugmentedSubmittable<(to: AccountId | string | Uint8Array, amount: BalanceOf | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId, BalanceOf]>;
      /**
       * Transfers some amount of the native token to some recipient on a (whitelisted) destination chain.
       * Charges fee and accumulates it on the special account.
       **/
      transferNative: AugmentedSubmittable<(amount: BalanceOf | AnyNumber | Uint8Array, recipient: Bytes | string | Uint8Array, destId: ChainId | AnyNumber | Uint8Array, resourceId: ResourceId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [BalanceOf, Bytes, ChainId, ResourceId]>;
    };
    eqBalances: {
      /**
       * Burns currency (sudo only). Used to withdraw currency from the system
       **/
      burn: AugmentedSubmittable<(currency: Currency | 'Unknown' | 'Usd' | 'Eq' | 'Eth' | 'Btc' | 'Eos' | 'Dot' | 'Crv' | number | Uint8Array, from: AccountId | string | Uint8Array, value: Balance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Currency, AccountId, Balance]>;
      /**
       * Adds currency to account balance (sudo only). Used to deposit currency
       * into system
       **/
      deposit: AugmentedSubmittable<(currency: Currency | 'Unknown' | 'Usd' | 'Eq' | 'Eth' | 'Btc' | 'Eos' | 'Dot' | 'Crv' | number | Uint8Array, to: AccountId | string | Uint8Array, value: Balance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Currency, AccountId, Balance]>;
      /**
       * Disable transfers between accounts
       **/
      disableTransfers: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Enable transfers between accounts
       **/
      enableTransfers: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Transfers `value` amount of `currency` from trx sender to account id `to`
       **/
      transfer: AugmentedSubmittable<(currency: Currency | 'Unknown' | 'Usd' | 'Eq' | 'Eth' | 'Btc' | 'Eos' | 'Dot' | 'Crv' | number | Uint8Array, to: AccountId | string | Uint8Array, value: Balance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Currency, AccountId, Balance]>;
    };
    eqBridge: {
      /**
       * This can be called by the bridge to demonstrate an arbitrary call from a proposal.
       **/
      remark: AugmentedSubmittable<(hash: Hash | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Hash]>;
      /**
       * Executes a simple currency transfer using the bridge account as the source
       **/
      transfer: AugmentedSubmittable<(to: AccountId | string | Uint8Array, amount: Balance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId, Balance]>;
      /**
       * Transfers some amount of the native token to some recipient on a (whitelisted) destination chain.
       * Charges fee and accumulates it on the special account.
       **/
      transferNative: AugmentedSubmittable<(amount: Balance | AnyNumber | Uint8Array, recipient: Bytes | string | Uint8Array, destId: ChainId | AnyNumber | Uint8Array, resourceId: ResourceId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Balance, Bytes, ChainId, ResourceId]>;
    };
    eqInvestors: {
      /**
       * Transfer funds from pallets account
       * 
       * The dispatch origin for this call must be _Root_.
       * 
       * Parameters:
       * - `target`: The account that should be transferred funds.
       * - `amount`: The balance that will be transferred
       **/
      transfer: AugmentedSubmittable<(target: AccountId | string | Uint8Array, amount: BalanceOf | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId, BalanceOf]>;
      /**
       * Transfer funds from pallets account with vesting
       * 
       * The dispatch origin for this call must be _Root_.
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
    eqLiquidityFarming: {
      /**
       * Transfer funds from pallets account
       * 
       * The dispatch origin for this call must be _Root_.
       * 
       * Parameters:
       * - `target`: The account that should be transferred funds.
       * - `amount`: The balance that will be transferred
       **/
      transfer: AugmentedSubmittable<(target: AccountId | string | Uint8Array, amount: BalanceOf | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId, BalanceOf]>;
      /**
       * Transfer funds from pallets account with vesting
       * 
       * The dispatch origin for this call must be _Root_.
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
    eqLockdrop: {
      /**
       * Clear `LockStart` value
       * WARNING! Check twice before using it!
       **/
      clearLockStart: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Lock `amount` of Eq for lock
       **/
      lock: AugmentedSubmittable<(amount: Balance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Balance]>;
      /**
       * Enables or disables offchain worker. `true` to enable offchain worker
       * operations, `false` to disable.
       **/
      setAutoUnlock: AugmentedSubmittable<(enabled: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [bool]>;
      /**
       * Set `Lock
       * Start` in `timestamp`
       * - timestamp: UnixTime timestamp in seconds
       * WARNING! Check twice before using it!
       **/
      setLockStart: AugmentedSubmittable<(timestamp: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64]>;
      /**
       * Unlock all account's locked Eq
       * The dispatch origin for this call must be _None_ (unsigned transaction).
       **/
      unlock: AugmentedSubmittable<(request: OperationRequest | { account?: any; authority_index?: any; validators_len?: any; block_num?: any } | string | Uint8Array, signature: Signature | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [OperationRequest, Signature]>;
      /**
       * Unlock all account's locked Eq
       **/
      unlockExternal: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
    };
    eqMarginCall: {
      /**
       * Tries to margin call an account from a signed account.
       **/
      tryMargincallExternal: AugmentedSubmittable<(account: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId]>;
    };
    eqMultisigSudo: {
      /**
       * Adds key to multisig signatory list. Requires root.
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
       * init storage. Requires root.
       **/
      init: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Modifies the multisig threshold value i.e. the required number of signatories for a call to proceed. Requires root.
       **/
      modifyThreshold: AugmentedSubmittable<(newValue: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Proposes a call to be signed. Requires account to be in multisig signatory list.
       **/
      propose: AugmentedSubmittable<(call: Call | { callIndex?: any; args?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call]>;
      /**
       * Removes key from multisig signatory list. Requires root.
       **/
      removeKey: AugmentedSubmittable<(key: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId]>;
    };
    eqParachainOffering: {
      /**
       * Transfer funds from pallets account
       * 
       * The dispatch origin for this call must be _Root_.
       * 
       * Parameters:
       * - `target`: The account that should be transferred funds.
       * - `amount`: The balance that will be transferred
       **/
      transfer: AugmentedSubmittable<(target: AccountId | string | Uint8Array, amount: BalanceOf | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId, BalanceOf]>;
      /**
       * Transfer funds from pallets account with vesting
       * 
       * The dispatch origin for this call must be _Root_.
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
      deleteAccount: AugmentedSubmittable<(request: OperationRequest | { account?: any; authority_index?: any; validators_len?: any; block_num?: any } | string | Uint8Array, signature: Signature | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [OperationRequest, Signature]>;
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
       * 
       * Parameters:
       * - `request`: OperationRequest.
       * - `_signature`: OperationRequest signature
       **/
      reinit: AugmentedSubmittable<(request: OperationRequest | { account?: any; authority_index?: any; validators_len?: any; block_num?: any } | string | Uint8Array, signature: Signature | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [OperationRequest, Signature]>;
      /**
       * Request to redistribute Bailsman pallet balances.
       * 
       * The dispatch origin for this call must be _None_ (unsigned transaction).
       * 
       * Parameters:
       * - `request`: OperationRequest.
       * - `_signature`: OperationRequest signature
       **/
      reinitBailsman: AugmentedSubmittable<(request: OperationRequest | { account?: any; authority_index?: any; validators_len?: any; block_num?: any } | string | Uint8Array, signature: Signature | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [OperationRequest, Signature]>;
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
       * Transfer funds from pallets account
       * 
       * The dispatch origin for this call must be _Root_.
       * 
       * Parameters:
       * - `target`: The account that should be transferred funds.
       * - `amount`: The balance that will be transferred
       **/
      transfer: AugmentedSubmittable<(target: AccountId | string | Uint8Array, amount: BalanceOf | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId, BalanceOf]>;
      /**
       * Transfer funds from pallets account with vesting
       * 
       * The dispatch origin for this call must be _Root_.
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
    ethBridge: {
      /**
       * This can be called by the bridge to demonstrate an arbitrary call from a proposal.
       **/
      remark: AugmentedSubmittable<(hash: Hash | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Hash]>;
      /**
       * Deposits specified amount of Eq tokens to the user's account
       **/
      transfer: AugmentedSubmittable<(to: AccountId | string | Uint8Array, amount: BalanceOf | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId, BalanceOf]>;
      /**
       * Transfers some amount of the native token to some recipient on a (whitelisted) destination chain.
       * Charges fee and accumulates it on the special account.
       **/
      transferNative: AugmentedSubmittable<(amount: BalanceOf | AnyNumber | Uint8Array, recipient: Bytes | string | Uint8Array, destId: ChainId | AnyNumber | Uint8Array, resourceId: ResourceId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [BalanceOf, Bytes, ChainId, ResourceId]>;
    };
    financial: {
      /**
       * Recalculates financial metrics for all known assets.
       **/
      recalc: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Recalculates financial metrics for a given asset
       **/
      recalcAsset: AugmentedSubmittable<(asset: Asset | 'Unknown' | 'Usd' | 'Eq' | 'Eth' | 'Btc' | 'Eos' | 'Dot' | 'Crv' | number | Uint8Array) => SubmittableExtrinsic<ApiType>, [Asset]>;
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
      setPerAssetMetrics: AugmentedSubmittable<(asset: Asset | 'Unknown' | 'Usd' | 'Eq' | 'Eth' | 'Btc' | 'Eos' | 'Dot' | 'Crv' | number | Uint8Array, metrics: AssetMetrics | { period_start?: any; period_end?: any; returns?: any; volatility?: any; correlations?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Asset, AssetMetrics]>;
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
       * - `request`: OperationRequest.
       * - `_signature`: OperationRequest signature
       **/
      reward: AugmentedSubmittable<(request: OperationRequest | { account?: any; authority_index?: any; validators_len?: any; block_num?: any } | string | Uint8Array, signature: Signature | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [OperationRequest, Signature]>;
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
    oracle: {
      /**
       * Enables or disables auto recalculation of financial metrics
       **/
      setFinMetricsRecalcEnabled: AugmentedSubmittable<(enabled: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [bool]>;
      /**
       * Adds new `DataPoint` containing `currency` price information. It
       * would be used for `PricePoint` calculation. Only whitelisted
       * accounts can add `DataPoint`s
       **/
      setPrice: AugmentedSubmittable<(currency: Currency | 'Unknown' | 'Usd' | 'Eq' | 'Eth' | 'Btc' | 'Eos' | 'Dot' | 'Crv' | number | Uint8Array, price: FixedI64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Currency, FixedI64]>;
      setPriceUnsigned: AugmentedSubmittable<(payload: PricePayload | { None: any } | { Raw: any } | { BlakeTwo256: any } | { Sha256: any } | { Keccak256: any } | { ShaThree256: any } | string | Uint8Array, signature: Signature | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PricePayload, Signature]>;
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
       * Transfers `amount` of `currency` from subaccount to main account. If `subacc_type`
       * is `Bailsman` and it's total collateral value becomes less than minimal bailsman
       * collateral value - subaccount will be unregistered as bailsman.
       **/
      transferFromSubaccount: AugmentedSubmittable<(subaccType: SubAccType | 'Bailsman' | 'Borrower' | 'Lender' | number | Uint8Array, currency: Currency | 'Unknown' | 'Usd' | 'Eq' | 'Eth' | 'Btc' | 'Eos' | 'Dot' | 'Crv' | number | Uint8Array, amount: Balance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [SubAccType, Currency, Balance]>;
      /**
       * Transfers `value` amount of `currency` from main account to `subacc_type` subaccount
       **/
      transferToSubaccount: AugmentedSubmittable<(subaccType: SubAccType | 'Bailsman' | 'Borrower' | 'Lender' | number | Uint8Array, currency: Currency | 'Unknown' | 'Usd' | 'Eq' | 'Eth' | 'Btc' | 'Eos' | 'Dot' | 'Crv' | number | Uint8Array, value: Balance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [SubAccType, Currency, Balance]>;
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
       * Account can buy collateral tokens from treasury paying with it's Eq.
       * Collateral is any [`Currency`](../eq_primitives/currency/enum.Currency.html)
       * except Eq
       **/
      colaterallBuyout: AugmentedSubmittable<(currency: Currency | 'Unknown' | 'Usd' | 'Eq' | 'Eth' | 'Btc' | 'Eos' | 'Dot' | 'Crv' | number | Uint8Array, amount: Balance | AnyNumber | Uint8Array, maxPrice: FixedI64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Currency, Balance, FixedI64]>;
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
       * Create a vested transfer.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * - `target`: The account that should be transferred the vested funds.
       * - `schedule`: The vesting schedule attached to the transfer.
       **/
      vestedTransfer: AugmentedSubmittable<(target: LookupSource | string | Uint8Array, schedule: VestingInfo | { locked?: any; perBlock?: any; startingBlock?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource, VestingInfo]>;
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
       * Adds `who_to_add` to whitelist. Requires Root authorization
       **/
      addToWhitelist: AugmentedSubmittable<(whoToAdd: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId]>;
      /**
       * Removes account `who_to_remove` from whitelist. Requires sudo authorization
       **/
      removeFromWhitelist: AugmentedSubmittable<(whoToRemove: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId]>;
    };
  } // AugmentedSubmittables
} // declare module
