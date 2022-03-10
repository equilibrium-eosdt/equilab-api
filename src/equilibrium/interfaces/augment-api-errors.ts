// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { ApiTypes } from '@polkadot/api-base/types';

declare module '@polkadot/api-base/types/errors' {
  export interface AugmentedErrors<ApiType extends ApiTypes> {
    authorship: {
      /**
       * The uncle is genesis.
       **/
      GenesisUncle: AugmentedError<ApiType>;
      /**
       * The uncle parent not in the chain.
       **/
      InvalidUncleParent: AugmentedError<ApiType>;
      /**
       * The uncle isn't recent enough to be included.
       **/
      OldUncle: AugmentedError<ApiType>;
      /**
       * The uncle is too high in chain.
       **/
      TooHighUncle: AugmentedError<ApiType>;
      /**
       * Too many uncles.
       **/
      TooManyUncles: AugmentedError<ApiType>;
      /**
       * The uncle is already included.
       **/
      UncleAlreadyIncluded: AugmentedError<ApiType>;
      /**
       * Uncles already set in the block.
       **/
      UnclesAlreadySet: AugmentedError<ApiType>;
    };
    bailsman: {
      /**
       * Cannot register account as bailsman because account is already a bailsman
       **/
      AlreadyBailsman: AugmentedError<ApiType>;
      /**
       * Cannot register or unregister bailsman: bailsman account should not have negative balances
       **/
      BailsmanHasDebt: AugmentedError<ApiType>;
      /**
       * Account has insufficient balance to register as bailsman
       **/
      CollateralMustBeMoreThanMin: AugmentedError<ApiType>;
      /**
       * Cannot unregister bailsman account - account is not bailsman
       **/
      NotBailsman: AugmentedError<ApiType>;
      /**
       * Prices received from oracle are outdated
       **/
      PricesAreOutdated: AugmentedError<ApiType>;
    };
    chainBridge: {
      /**
       * Chain has already been enabled
       **/
      ChainAlreadyWhitelisted: AugmentedError<ApiType>;
      /**
       * Interactions with this chain is not permitted
       **/
      ChainNotWhitelisted: AugmentedError<ApiType>;
      /**
       * Provided chain Id is not valid
       **/
      InvalidChainId: AugmentedError<ApiType>;
      /**
       * Relayer threshold cannot be 0
       **/
      InvalidThreshold: AugmentedError<ApiType>;
      /**
       * Protected operation, must be performed by relayer
       **/
      MustBeRelayer: AugmentedError<ApiType>;
      /**
       * Proposal has either failed or succeeded
       **/
      ProposalAlreadyComplete: AugmentedError<ApiType>;
      /**
       * A proposal with these parameters has already been submitted
       **/
      ProposalAlreadyExists: AugmentedError<ApiType>;
      /**
       * No proposal with the ID was found
       **/
      ProposalDoesNotExist: AugmentedError<ApiType>;
      /**
       * Lifetime of proposal has been exceeded
       **/
      ProposalExpired: AugmentedError<ApiType>;
      /**
       * Cannot complete proposal, needs more votes
       **/
      ProposalNotComplete: AugmentedError<ApiType>;
      /**
       * Relayer already in set
       **/
      RelayerAlreadyExists: AugmentedError<ApiType>;
      /**
       * Relayer has already submitted some vote for this proposal
       **/
      RelayerAlreadyVoted: AugmentedError<ApiType>;
      /**
       * Provided accountId is not a relayer
       **/
      RelayerInvalid: AugmentedError<ApiType>;
      /**
       * Resource ID provided isn't mapped to anything
       **/
      ResourceDoesNotExist: AugmentedError<ApiType>;
      /**
       * Relayer threshold not set
       **/
      ThresholdNotSet: AugmentedError<ApiType>;
    };
    claims: {
      /**
       * Invalid Ethereum signature
       **/
      InvalidEthereumSignature: AugmentedError<ApiType>;
      /**
       * Invalid receiver
       **/
      InvalidReceiver: AugmentedError<ApiType>;
      /**
       * A needed statement was not included.
       **/
      InvalidStatement: AugmentedError<ApiType>;
      /**
       * This method is not allowed in production
       **/
      MethodNotAllowed: AugmentedError<ApiType>;
      /**
       * Got an overflow after adding or subtracting balance
       **/
      Overflow: AugmentedError<ApiType>;
      /**
       * There's not enough in the pot to pay out some unvested amount. Generally
       * implies a logic error
       **/
      PotUnderflow: AugmentedError<ApiType>;
      /**
       * Account sending transaction has no claim
       **/
      SenderHasNoClaim: AugmentedError<ApiType>;
      /**
       * Ethereum address has no claim
       **/
      SignerHasNoClaim: AugmentedError<ApiType>;
      /**
       * The account already has a vested balance
       **/
      VestedBalanceExists: AugmentedError<ApiType>;
    };
    crvBridge: {
      InvalidResourceId: AugmentedError<ApiType>;
      InvalidTransfer: AugmentedError<ApiType>;
    };
    eqBalances: {
      /**
       * Beneficiary account must pre-exist
       **/
      DeadAccount: AugmentedError<ApiType>;
      /**
       * This method is not allowed in production
       **/
      MethodNotAllowed: AugmentedError<ApiType>;
      /**
       * Self documented error code
       **/
      NotAllowedToChangeBalance: AugmentedError<ApiType>;
      /**
       * Not allowed to delete account
       **/
      NotAllowedToDeleteAccount: AugmentedError<ApiType>;
      /**
       * Deposit is not enough to buyout Eq from Treasury
       **/
      NotEnoughToBuyoutEq: AugmentedError<ApiType>;
      /**
       * Deposit is not enough to keep account alive
       **/
      NotEnoughToKeepAlive: AugmentedError<ApiType>;
      /**
       * Got an overflow after adding or subtracting balance
       **/
      Overflow: AugmentedError<ApiType>;
      /**
       * Self documented error code
       **/
      TransfersAreDisabled: AugmentedError<ApiType>;
      /**
       * Not allowed to interact with unknown currency
       **/
      UnknownCurrency: AugmentedError<ApiType>;
    };
    eqBridge: {
      InvalidResourceId: AugmentedError<ApiType>;
      InvalidTransfer: AugmentedError<ApiType>;
    };
    eqInvestors: {
      /**
       * Amount being transferred is too low to create a vesting schedule
       **/
      AmountLow: AugmentedError<ApiType>;
      /**
       * An existing vesting schedule already exists for this account that cannot be clobbered
       **/
      ExistingVestingSchedule: AugmentedError<ApiType>;
    };
    eqLiquidityFarming: {
      /**
       * Amount being transferred is too low to create a vesting schedule
       **/
      AmountLow: AugmentedError<ApiType>;
      /**
       * An existing vesting schedule already exists for this account that cannot be clobbered
       **/
      ExistingVestingSchedule: AugmentedError<ApiType>;
    };
    eqLockdrop: {
      /**
       * Lock amount is lower than minimum allowed
       **/
      LockAmountLow: AugmentedError<ApiType>;
      /**
       * Not allowed to make unlock in the period of the lock program
       **/
      LockPeriodNotOver: AugmentedError<ApiType>;
      /**
       * Lock start is already initialized
       **/
      LockStartNotEmpty: AugmentedError<ApiType>;
      /**
       * Not allowed to make multiple locks if account has vesting schedule
       **/
      MultipleTransferWithVesting: AugmentedError<ApiType>;
      /**
       * Not allowed to make lock not in the period of the lock program
       **/
      OutOfLockPeriod: AugmentedError<ApiType>;
    };
    eqMarginCall: {
      /**
       * Auto reinit is disabled
       **/
      AutoReinitIsDisabled: AugmentedError<ApiType>;
      /**
       * Invalid Offset
       **/
      InvalidOffset: AugmentedError<ApiType>;
      /**
       * Invalid Setting value
       **/
      InvalidSettingValue: AugmentedError<ApiType>;
      /**
       * Method not allowed in production
       **/
      MethodNotAllowed: AugmentedError<ApiType>;
      /**
       * Prices are outdated
       **/
      PricesAreOutdated: AugmentedError<ApiType>;
    };
    eqMultisigSudo: {
      /**
       * account already approved a proposal
       **/
      AlreadyApproved: AugmentedError<ApiType>;
      /**
       * account already voted to cancel a proposa
       **/
      AlreadyCancelled: AugmentedError<ApiType>;
      /**
       * a key is already in the multisig signatory list
       **/
      AlreadyInKeyList: AugmentedError<ApiType>;
      /**
       * too few signatories for set threshold
       **/
      FewSignatories: AugmentedError<ApiType>;
      /**
       * threshold is invalid
       **/
      InvalidThresholdValue: AugmentedError<ApiType>;
      /**
       * a key is not in the multisig signatory list
       **/
      NotInKeyList: AugmentedError<ApiType>;
      /**
       * trying to delete a proposal that is not ours
       **/
      NotProposalOwner: AugmentedError<ApiType>;
      /**
       * proposal not found in the map
       **/
      ProposalNotFound: AugmentedError<ApiType>;
      /**
       * sudo pallet legacy
       **/
      RequireSudo: AugmentedError<ApiType>;
    };
    eqParachainOffering: {
      /**
       * Amount being transferred is too low to create a vesting schedule
       **/
      AmountLow: AugmentedError<ApiType>;
      /**
       * An existing vesting schedule already exists for this account that cannot be clobbered
       **/
      ExistingVestingSchedule: AugmentedError<ApiType>;
    };
    eqRate: {
      /**
       * Auto reinit is disabled
       **/
      AutoReinitIsDisabled: AugmentedError<ApiType>;
      /**
       * Error used during time offset in test builds
       **/
      InvalidOffset: AugmentedError<ApiType>;
      /**
       * This method is not allowed in production
       **/
      MethodNotAllowed: AugmentedError<ApiType>;
    };
    eqSessionManager: {
      /**
       * Validator was not added because he is already active
       **/
      AlreadyAdded: AugmentedError<ApiType>;
      /**
       * Validator was not removed: there is no active validator with this id
       **/
      AlreadyRemoved: AugmentedError<ApiType>;
      /**
       * Validator was not added because validator is not registered
       **/
      NotRegistered: AugmentedError<ApiType>;
    };
    eqTreasury: {
      /**
       * Amount being transferred is too low to create a vesting schedule
       **/
      AmountLow: AugmentedError<ApiType>;
      /**
       * An existing vesting schedule already exists for this account that cannot be clobbered
       **/
      ExistingVestingSchedule: AugmentedError<ApiType>;
    };
    ethBridge: {
      InvalidResourceId: AugmentedError<ApiType>;
      InvalidTransfer: AugmentedError<ApiType>;
    };
    financial: {
      /**
       * Division by zero occurred during financial calculation process.
       **/
      DivisionByZero: AugmentedError<ApiType>;
      /**
       * An invalid argument passed to the function.
       **/
      InvalidArgument: AugmentedError<ApiType>;
      /**
       * Default return type or default correlation type is initialized with a value that can
       * not be converted to type `CalcReturnType` or `CalcVolatilityType` respectively.
       **/
      InvalidConstant: AugmentedError<ApiType>;
      /**
       * Specified period start timestamp is invalid for current
       * [`PricePeriod`](./trait.Config.html#associatedtype.PricePeriod) value.
       **/
      InvalidPeriodStart: AugmentedError<ApiType>;
      /**
       * Storage of the pallet is in an unexpected state.
       **/
      InvalidStorage: AugmentedError<ApiType>;
      /**
       * This method is not allowed in production. Method is used in testing only
       **/
      MethodNotAllowed: AugmentedError<ApiType>;
      /**
       * Price log is not long enough to calculate required value.
       **/
      NotEnoughPoints: AugmentedError<ApiType>;
      /**
       * Required functionality is not implemented.
       **/
      NotImplemented: AugmentedError<ApiType>;
      /**
       * Overflow occurred during financial calculation process.
       **/
      Overflow: AugmentedError<ApiType>;
      /**
       * Timestamp of the received price is in the past.
       **/
      PeriodIsInThePast: AugmentedError<ApiType>;
      /**
       * An invalid argument passed to the transcendental function (i.e. log, sqrt, etc.)
       * during financial calculation process.
       **/
      Transcendental: AugmentedError<ApiType>;
    };
    grandpa: {
      /**
       * Attempt to signal GRANDPA change with one already pending.
       **/
      ChangePending: AugmentedError<ApiType>;
      /**
       * A given equivocation report is valid but already previously reported.
       **/
      DuplicateOffenceReport: AugmentedError<ApiType>;
      /**
       * An equivocation proof provided as part of an equivocation report is invalid.
       **/
      InvalidEquivocationProof: AugmentedError<ApiType>;
      /**
       * A key ownership proof provided as part of an equivocation report is invalid.
       **/
      InvalidKeyOwnershipProof: AugmentedError<ApiType>;
      /**
       * Attempt to signal GRANDPA pause when the authority set isn't live
       * (either paused or already pending pause).
       **/
      PauseFailed: AugmentedError<ApiType>;
      /**
       * Attempt to signal GRANDPA resume when the authority set isn't paused
       * (either live or already pending resume).
       **/
      ResumeFailed: AugmentedError<ApiType>;
      /**
       * Cannot signal forced change so soon after last.
       **/
      TooSoon: AugmentedError<ApiType>;
    };
    liquidityFarming: {
      /**
       * Auto reward is disabled
       **/
      AutoRewardIsDisabled: AugmentedError<ApiType>;
      /**
       * Numeric conversion has failed
       **/
      ConversionFailed: AugmentedError<ApiType>;
      /**
       * Prices received from oracle are outdated
       **/
      PricesAreOutdated: AugmentedError<ApiType>;
    };
    oracle: {
      /**
       * Incorrect currency
       **/
      CurrencyNotFound: AugmentedError<ApiType>;
      /**
       * This method is not allowed in production
       **/
      MethodNotAllowed: AugmentedError<ApiType>;
      /**
       * Account is not allowed to set prices
       **/
      NotAllowedToSubmitPrice: AugmentedError<ApiType>;
      /**
       * The same price data point was already added
       **/
      PriceAlreadyAdded: AugmentedError<ApiType>;
      /**
       * Price cannot be negative
       **/
      PriceIsNegative: AugmentedError<ApiType>;
      /**
       * Price cannot be zero
       **/
      PriceIsZero: AugmentedError<ApiType>;
      /**
       * Price data point is too old and cannot be used
       **/
      PriceTimeout: AugmentedError<ApiType>;
      /**
       * Attempting to submit price for constant price currencies
       **/
      WrongCurrency: AugmentedError<ApiType>;
    };
    session: {
      /**
       * Registered duplicate key.
       **/
      DuplicatedKey: AugmentedError<ApiType>;
      /**
       * Invalid ownership proof.
       **/
      InvalidProof: AugmentedError<ApiType>;
      /**
       * Key setting account is not live, so it's impossible to associate keys.
       **/
      NoAccount: AugmentedError<ApiType>;
      /**
       * No associated validator ID for account.
       **/
      NoAssociatedValidatorId: AugmentedError<ApiType>;
      /**
       * No keys are associated with this account.
       **/
      NoKeys: AugmentedError<ApiType>;
    };
    subaccounts: {
      /**
       * Cannot create a subaccount: account in whitelist
       **/
      AccountInWhiteList: AugmentedError<ApiType>;
      /**
       * Cannot create a subaccount: user already has subaccount of
       * this type
       **/
      AlreadyHasSubaccount: AugmentedError<ApiType>;
      /**
       * Cannot delete subaccount or transfer from it: no subaccount of this type
       **/
      NoSubaccountOfThisType: AugmentedError<ApiType>;
      /**
       * Self documented error code
       **/
      TransfersAreDisabled: AugmentedError<ApiType>;
    };
    sudo: {
      /**
       * Sender must be the Sudo account
       **/
      RequireSudo: AugmentedError<ApiType>;
    };
    system: {
      /**
       * Failed to extract the runtime version from the new runtime.
       * 
       * Either calling `Core_version` or decoding `RuntimeVersion` failed.
       **/
      FailedToExtractRuntimeVersion: AugmentedError<ApiType>;
      /**
       * The name of specification does not match between the current runtime
       * and the new runtime.
       **/
      InvalidSpecName: AugmentedError<ApiType>;
      /**
       * Suicide called when the account has non-default composite data.
       **/
      NonDefaultComposite: AugmentedError<ApiType>;
      /**
       * There is a non-zero reference count preventing the account from being purged.
       **/
      NonZeroRefCount: AugmentedError<ApiType>;
      /**
       * The specification version is not allowed to decrease between the current runtime
       * and the new runtime.
       **/
      SpecVersionNeedsToIncrease: AugmentedError<ApiType>;
    };
    treasury: {
      /**
       * The price is higher than max possible price
       **/
      BadPrice: AugmentedError<ApiType>;
      /**
       * Eq tokens cannot be used for collateral buyout
       **/
      BuyEqTokensRestricted: AugmentedError<ApiType>;
      /**
       * Account balance is too low for the operation
       **/
      InsufficientAccountBalance: AugmentedError<ApiType>;
      /**
       * Treasury balance is too low for the operation
       **/
      InsufficientTreasuryBalance: AugmentedError<ApiType>;
      /**
       * One of transacted currencies is missing a price information
       * or price is outdated
       **/
      NoPrice: AugmentedError<ApiType>;
      /**
       * Amount to sell is less than or equal to zero
       **/
      NothingToSell: AugmentedError<ApiType>;
      /**
       * Operation overflow
       **/
      Overflow: AugmentedError<ApiType>;
    };
    vesting: {
      /**
       * Amount being transferred is too low to create a vesting schedule
       **/
      AmountLow: AugmentedError<ApiType>;
      /**
       * An existing vesting schedule already exists for this account that cannot be clobbered
       **/
      ExistingVestingSchedule: AugmentedError<ApiType>;
      /**
       * This method is not allowed in production
       **/
      MethodNotAllowed: AugmentedError<ApiType>;
      /**
       * The account given is not vesting
       **/
      NotVesting: AugmentedError<ApiType>;
      /**
       * Self documented error code
       **/
      TransfersAreDisabled: AugmentedError<ApiType>;
    };
    whitelists: {
      /**
       * Account was not added to whitelist: already in whitelist
       **/
      AlreadyAdded: AugmentedError<ApiType>;
      /**
       * Account was not removed from whitelist: not in whitelist
       **/
      AlreadyRemoved: AugmentedError<ApiType>;
    };
  } // AugmentedErrors
} // declare module
