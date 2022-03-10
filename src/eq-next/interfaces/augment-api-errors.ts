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
       * Cannot register/unregister or transfer from bailsman: bailsman account should not have negative balances
       **/
      BailsmanHasDebt: AugmentedError<ApiType>;
      /**
       * Account has insufficient balance to register as bailsman
       **/
      CollateralMustBeMoreThanMin: AugmentedError<ApiType>;
      /**
       * Bailsman cannot have debt > collat
       **/
      NeedToMcBailsmanFirstly: AugmentedError<ApiType>;
      /**
       * Cannot unregister bailsman account - account is not bailsman
       **/
      NotBailsman: AugmentedError<ApiType>;
      /**
       * Prices received from oracle are outdated
       **/
      PricesAreOutdated: AugmentedError<ApiType>;
      /**
       * Need to distribute temp balances
       **/
      TempBalancesNotDistributed: AugmentedError<ApiType>;
      /**
       * No basic transfers from / to bailsman temp balances
       **/
      TempBalancesTransfer: AugmentedError<ApiType>;
      /**
       * Bailsmen cannot have negative total balance
       **/
      TotalBailsmenPoolBalanceIsNegative: AugmentedError<ApiType>;
      /**
       * Wrong margin for operation performing
       **/
      WrongMargin: AugmentedError<ApiType>;
    };
    chainBridge: {
      /**
       * Bridge transfers to this chain have equal allowability
       **/
      AllowabilityEqual: AugmentedError<ApiType>;
      /**
       * Chain has already been enabled
       **/
      ChainAlreadyWhitelisted: AugmentedError<ApiType>;
      /**
       * Interactions with this chain is not permitted
       **/
      ChainNotWhitelisted: AugmentedError<ApiType>;
      /**
       * Bridge transfers to this chain are disabled
       **/
      DisabledChain: AugmentedError<ApiType>;
      /**
       * Provided chain Id is not valid
       **/
      InvalidChainId: AugmentedError<ApiType>;
      /**
       * Fee cannot be less than 0
       **/
      InvalidFee: AugmentedError<ApiType>;
      /**
       * Proposal lifetime cannot be equal 0
       **/
      InvalidProposalLifetime: AugmentedError<ApiType>;
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
    curveAmm: {
      /**
       * Could not create new asset
       **/
      AssetNotCreated: AugmentedError<ApiType>;
      /**
       * Some provided assets are not unique
       **/
      DuplicateAssets: AugmentedError<ApiType>;
      /**
       * The `AssetChecker` can use this error in case it can't provide better error
       **/
      ExternalAssetCheckFailed: AugmentedError<ApiType>;
      /**
       * Values in the storage are inconsistent
       **/
      InconsistentStorage: AugmentedError<ApiType>;
      /**
       * Specified index is out of range
       **/
      IndexOutOfRange: AugmentedError<ApiType>;
      /**
       * Source does not have required amount of coins to complete operation
       **/
      InsufficientFunds: AugmentedError<ApiType>;
      /**
       * Error occurred while performing math calculations
       **/
      Math: AugmentedError<ApiType>;
      /**
       * Not enough assets provided
       **/
      NotEnoughAssets: AugmentedError<ApiType>;
      /**
       * Pool with specified id is not found
       **/
      PoolNotFound: AugmentedError<ApiType>;
      /**
       * Required amount of some token did not reached during adding or removing liquidity
       **/
      RequiredAmountNotReached: AugmentedError<ApiType>;
      /**
       * Specified asset amount is wrong
       **/
      WrongAssetAmount: AugmentedError<ApiType>;
    };
    curveDistribution: {
      /**
       * Fee holder must be initialized for operation
       **/
      FeeHolderUninitialized: AugmentedError<ApiType>;
      /**
       * Accumulated admin fees less than MinCurveFee
       **/
      InsufficientBalance: AugmentedError<ApiType>;
      /**
       * Math error in calculations
       **/
      Math: AugmentedError<ApiType>;
    };
    eqAssets: {
      /**
       * Asset with the same AssetId already exists
       **/
      AssetAlreadyExists: AugmentedError<ApiType>;
      /**
       * Asset name is too long
       **/
      AssetNameWrongLength: AugmentedError<ApiType>;
      /**
       * Asset name contains a wrong symbol.
       * Only standard latin letters and digits are allowed.
       **/
      AssetNameWrongSymbols: AugmentedError<ApiType>;
      /**
       * Cannot delete an asset that does not exist
       **/
      AssetNotExists: AugmentedError<ApiType>;
      /**
       * New asset without prices cannot be collateral.
       **/
      CollateralMustBeDisabledWithoutPrices: AugmentedError<ApiType>;
      /**
       * Debt weight cannot be over 100%
       **/
      DebtWeightMoreThanOne: AugmentedError<ApiType>;
      /**
       * Debt weight cannot be negative
       **/
      DebtWeightNegative: AugmentedError<ApiType>;
    };
    eqBalances: {
      /**
       * Beneficiary account must pre-exist
       **/
      DeadAccount: AugmentedError<ApiType>;
      /**
       * Exchange asset to itself
       **/
      ExchangeSameAsset: AugmentedError<ApiType>;
      /**
       * This method is not allowed in production
       **/
      MethodNotAllowed: AugmentedError<ApiType>;
      /**
       * Transfer checks failed
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
       * Transfers are disabled
       **/
      TransfersAreDisabled: AugmentedError<ApiType>;
      /**
       * Direct transfer to subaccount not allowed from EqBalances
       **/
      TransferToSubaccount: AugmentedError<ApiType>;
      /**
       * Not allowed to interact with unknown asset
       **/
      UnknownAsset: AugmentedError<ApiType>;
    };
    eqBridge: {
      /**
       * Interactions with this chain is not permitted
       **/
      ChainNotWhitelisted: AugmentedError<ApiType>;
      /**
       * Bridge transfers to this chain are disabled
       **/
      DisabledChain: AugmentedError<ApiType>;
      /**
       * no AssetData for `AssetId`
       **/
      InvalidAssetId: AugmentedError<ApiType>;
      /**
       * not allowed to bridge tokens of this type
       **/
      InvalidAssetType: AugmentedError<ApiType>;
      /**
       * Resource id not mapped to `Asset`
       **/
      InvalidResourceId: AugmentedError<ApiType>;
      InvalidTransfer: AugmentedError<ApiType>;
      /**
       * Transfer amount is lower than a minimum for given `ChainId` and `ResourceId`
       **/
      TransferAmountLowerMinimum: AugmentedError<ApiType>;
    };
    eqDex: {
      /**
       * Only borrower can create order. Need to have borrower subaccount
       **/
      AccountIsNotBorrower: AugmentedError<ApiType>;
      /**
       * Asset not exists
       **/
      AssetNotExists: AugmentedError<ApiType>;
      /**
       * Bad margin state for order create
       **/
      BadMargin: AugmentedError<ApiType>;
      /**
       * Dex is disabled for asset
       **/
      DexIsDisabledForAsset: AugmentedError<ApiType>;
      /**
       * Inconsistent storage state
       **/
      InconsistentStorage: AugmentedError<ApiType>;
      /**
       * Math error
       **/
      Math: AugmentedError<ApiType>;
      /**
       * There is no best price for market order
       **/
      NoBestPriceForMarketOrder: AugmentedError<ApiType>;
      /**
       * Only owner or sudo can remove order
       **/
      OnlyOwnerCanRemoveOrder: AugmentedError<ApiType>;
      /**
       * Order amount should be positive value
       **/
      OrderAmountShouldBePositive: AugmentedError<ApiType>;
      /**
       * Order amount should satisfy lot
       **/
      OrderAmountShouldSatisfyLot: AugmentedError<ApiType>;
      /**
       * No order found by id and price
       **/
      OrderNotFound: AugmentedError<ApiType>;
      /**
       * Order price should be in corridor
       **/
      OrderPriceShouldBeInCorridor: AugmentedError<ApiType>;
      /**
       * Order price should be positive value
       **/
      OrderPriceShouldBePositive: AugmentedError<ApiType>;
      /**
       * Order price should satisfy price_step
       **/
      OrderPriceShouldSatisfyPriceStep: AugmentedError<ApiType>;
      /**
       * Price step should be positive value
       **/
      PriceStepShouldBePositive: AugmentedError<ApiType>;
    };
    eqLending: {
      /**
       * Bailsman can not be unregistered because of debt weight
       **/
      BailsmanCantBeUnregistered: AugmentedError<ApiType>;
      /**
       * Bailsman cannot decrease his collateral because of debt weight
       **/
      BailsmanWrongDebtWeight: AugmentedError<ApiType>;
      /**
       * Not allowed because of debt weight
       **/
      WrongDebtWeight: AugmentedError<ApiType>;
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
    eqMarginCall: {
      /**
       * Asset does not exist
       **/
      AssetNotExists: AugmentedError<ApiType>;
      /**
       * Auto reinit is disabled
       **/
      AutoReinitIsDisabled: AugmentedError<ApiType>;
      /**
       * Invalid offset
       **/
      InvalidOffset: AugmentedError<ApiType>;
      /**
       * Invalid setting value
       **/
      InvalidSettingValue: AugmentedError<ApiType>;
      /**
       * Overflow error
       **/
      Math: AugmentedError<ApiType>;
      /**
       * Method is not allowed in production
       **/
      MethodNotAllowed: AugmentedError<ApiType>;
      /**
       * Prices are outdated
       **/
      PricesAreOutdated: AugmentedError<ApiType>;
    };
    eqMultisigSudo: {
      /**
       * The account already approved a proposal
       **/
      AlreadyApproved: AugmentedError<ApiType>;
      /**
       * The account already voted to cancel a proposal
       **/
      AlreadyCancelled: AugmentedError<ApiType>;
      /**
       * The key is already in the multisig signatory list
       **/
      AlreadyInKeyList: AugmentedError<ApiType>;
      /**
       * Too few signatories for the set threshold
       **/
      FewSignatories: AugmentedError<ApiType>;
      /**
       * The threshold is invalid
       **/
      InvalidThresholdValue: AugmentedError<ApiType>;
      /**
       * The key is not in the multisig signatory list
       **/
      NotInKeyList: AugmentedError<ApiType>;
      /**
       * Trying to delete a proposal that is not ours
       **/
      NotProposalOwner: AugmentedError<ApiType>;
      /**
       * The proposal not found in the map
       **/
      ProposalNotFound: AugmentedError<ApiType>;
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
       * Prices or financial parameters are outdated
       **/
      ExternalError: AugmentedError<ApiType>;
      /**
       * Error used during time offset in test builds
       **/
      InvalidOffset: AugmentedError<ApiType>;
      /**
       * Math error in rate calculation
       **/
      MathError: AugmentedError<ApiType>;
      /**
       * This method is not allowed in production
       **/
      MethodNotAllowed: AugmentedError<ApiType>;
      /**
       * Validation error
       **/
      ValidationError: AugmentedError<ApiType>;
      /**
       * Error in rate calculation
       **/
      ValueError: AugmentedError<ApiType>;
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
    gensBinaryOpt: {
      AlreadyStarted: AugmentedError<ApiType>;
      AssetNotExists: AugmentedError<ApiType>;
      DepositForOppositeResult: AugmentedError<ApiType>;
      LowDeposit: AugmentedError<ApiType>;
      Math: AugmentedError<ApiType>;
      NoBinary: AugmentedError<ApiType>;
      NoDeposit: AugmentedError<ApiType>;
      NoReward: AugmentedError<ApiType>;
      ParticipateTimeIsOver: AugmentedError<ApiType>;
      TryClaimEarlier: AugmentedError<ApiType>;
      TryPurgeEarlier: AugmentedError<ApiType>;
      TryPurgeWithWinners: AugmentedError<ApiType>;
    };
    gensCrowdloan: {
      /**
       * Math error
       **/
      AllocationCalculationProblem: AugmentedError<ApiType>;
      /**
       * ClaimStart is already set
       **/
      ClaimStartNotEmpty: AugmentedError<ApiType>;
      /**
       * Transfer amount error
       **/
      CouldNotCalculateTransferAmount: AugmentedError<ApiType>;
      /**
       * Error which signals problem with claim call
       **/
      CouldNotClaim: AugmentedError<ApiType>;
      /**
       * Could not move allocation to another destination
       **/
      CouldNotMoveAllocation: AugmentedError<ApiType>;
      /**
       * User doesn't have an allocation
       **/
      NoAllocation: AugmentedError<ApiType>;
      /**
       * ClaimStart is not set or the period is already ended
       **/
      OutOfClaimPeriod: AugmentedError<ApiType>;
    };
    gensOptOut: {
      /**
       * User has already sold his allocation
       **/
      AlreadySold: AugmentedError<ApiType>;
      /**
       * User with over 10k GENS allocation tried to opt out
       **/
      CannotOptOut: AugmentedError<ApiType>;
      /**
       * Trying to sell amount which will go over the round cap
       **/
      CapOverflow: AugmentedError<ApiType>;
      /**
       * User did not add liquidity in stable pool
       **/
      HasNotBought: AugmentedError<ApiType>;
      /**
       * User has not sold his allocation
       **/
      HasNotSold: AugmentedError<ApiType>;
      /**
       * Cannot distribute to buyer because he already has vesting schedule
       **/
      HasVestingSchedule: AugmentedError<ApiType>;
      /**
       * Tried to add liquidity to pool when claim bootstrap is over
       **/
      LiquidityBootstrapOver: AugmentedError<ApiType>;
      /**
       * Tried to insert less balance of buy pool than needed
       **/
      LowBuyAmount: AugmentedError<ApiType>;
      /**
       * Math error
       **/
      MathError: AugmentedError<ApiType>;
      /**
       * No active round for opting out
       **/
      NoActiveRound: AugmentedError<ApiType>;
      /**
       * User doesn't have an allocation
       **/
      NoAllocation: AugmentedError<ApiType>;
      /**
       * No finalized price
       **/
      NoFinalizedPrice: AugmentedError<ApiType>;
      /**
       * Tried to buy amount which is not available according to user balance
       **/
      NotEnoughBalance: AugmentedError<ApiType>;
      /**
       * Tried to distribute to user not in pool
       **/
      NotInPool: AugmentedError<ApiType>;
      /**
       * Round has not finished yet
       **/
      RoundHasNotFinished: AugmentedError<ApiType>;
      /**
       * Round has never been set once
       **/
      RoundIsNotSet: AugmentedError<ApiType>;
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
       * Reward is less than minimal
       **/
      LessThanMinReward: AugmentedError<ApiType>;
    };
    mmPool: {
      AmountIsLessThanNin: AugmentedError<ApiType>;
      /**
       * Client can't change lock period
       **/
      CantChangeLockPeriod: AugmentedError<ApiType>;
      ExternalError: AugmentedError<ApiType>;
      NoPoolWithCurrency: AugmentedError<ApiType>;
      PoolAlreadyExists: AugmentedError<ApiType>;
    };
    multisig: {
      /**
       * Call is already approved by this signatory.
       **/
      AlreadyApproved: AugmentedError<ApiType>;
      /**
       * The data to be stored is already stored.
       **/
      AlreadyStored: AugmentedError<ApiType>;
      /**
       * Threshold must be 2 or greater.
       **/
      MinimumThreshold: AugmentedError<ApiType>;
      /**
       * Call doesn't need any (more) approvals.
       **/
      NoApprovalsNeeded: AugmentedError<ApiType>;
      /**
       * Multisig operation not found when attempting to cancel.
       **/
      NotFound: AugmentedError<ApiType>;
      /**
       * No timepoint was given, yet the multisig operation is already underway.
       **/
      NoTimepoint: AugmentedError<ApiType>;
      /**
       * Only the account that originally created the multisig is able to cancel it.
       **/
      NotOwner: AugmentedError<ApiType>;
      /**
       * The sender was contained in the other signatories; it shouldn't be.
       **/
      SenderInSignatories: AugmentedError<ApiType>;
      /**
       * The signatories were provided out of order; they should be ordered.
       **/
      SignatoriesOutOfOrder: AugmentedError<ApiType>;
      /**
       * There are too few signatories in the list.
       **/
      TooFewSignatories: AugmentedError<ApiType>;
      /**
       * There are too many signatories in the list.
       **/
      TooManySignatories: AugmentedError<ApiType>;
      /**
       * A timepoint was given, yet no multisig operation is underway.
       **/
      UnexpectedTimepoint: AugmentedError<ApiType>;
      /**
       * The maximum weight information provided was too low.
       **/
      WeightTooLow: AugmentedError<ApiType>;
      /**
       * A different timepoint was given to the multisig operation that is underway.
       **/
      WrongTimepoint: AugmentedError<ApiType>;
    };
    oracle: {
      /**
       * Incorrect asset
       **/
      CurrencyNotFound: AugmentedError<ApiType>;
      /**
       * This method is not allowed in production
       **/
      MethodNotAllowed: AugmentedError<ApiType>;
      /**
       * The account is not allowed to set prices
       **/
      NotAllowedToSubmitPrice: AugmentedError<ApiType>;
      /**
       * LP token pool is not found
       **/
      PoolNotFound: AugmentedError<ApiType>;
      /**
       * The same price data point has been already added
       **/
      PriceAlreadyAdded: AugmentedError<ApiType>;
      /**
       * The price cannot be negative
       **/
      PriceIsNegative: AugmentedError<ApiType>;
      /**
       * The price cannot be zero
       **/
      PriceIsZero: AugmentedError<ApiType>;
      /**
       * The price data point is too old and cannot be used
       **/
      PriceTimeout: AugmentedError<ApiType>;
      /**
       * A primitive asset is expected
       **/
      PrimitiveAssetExpected: AugmentedError<ApiType>;
      /**
       * Attempting to submit a new price for constant price currencies
       **/
      WrongCurrency: AugmentedError<ApiType>;
    };
    proxy: {
      /**
       * Account is already a proxy.
       **/
      Duplicate: AugmentedError<ApiType>;
      /**
       * Call may not be made by proxy because it may escalate its privileges.
       **/
      NoPermission: AugmentedError<ApiType>;
      /**
       * Cannot add self as proxy.
       **/
      NoSelfProxy: AugmentedError<ApiType>;
      /**
       * Proxy registration not found.
       **/
      NotFound: AugmentedError<ApiType>;
      /**
       * Sender is not a proxy of the account to be proxied.
       **/
      NotProxy: AugmentedError<ApiType>;
      /**
       * There are too many proxies registered or too many announcements pending.
       **/
      TooMany: AugmentedError<ApiType>;
      /**
       * Announcement, if made at all, was made too recently.
       **/
      Unannounced: AugmentedError<ApiType>;
      /**
       * A call which is incompatible with the proxy type's filter was attempted.
       **/
      Unproxyable: AugmentedError<ApiType>;
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
       * Debt not allowed to be creating in this operation
       **/
      Debt: AugmentedError<ApiType>;
      /**
       * Cannot delete subaccount or transfer from it: no subaccount of this type
       **/
      NoSubaccountOfThisType: AugmentedError<ApiType>;
      /**
       * Transfers are disabled
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
       * The price is higher than the max possible price
       **/
      BadPrice: AugmentedError<ApiType>;
      /**
       * Basic asset cannot be used for collateral buyout
       **/
      BuyEqTokensRestricted: AugmentedError<ApiType>;
      /**
       * The account balance is too low for an operation
       **/
      InsufficientAccountBalance: AugmentedError<ApiType>;
      /**
       * The treasury balance is too low for an operation
       **/
      InsufficientTreasuryBalance: AugmentedError<ApiType>;
      /**
       * One of transacted currencies is missing price information
       * or the price is outdated
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
    xdot: {
      BalanceConvertOverflow: AugmentedError<ApiType>;
      BuyBaseTooMuchForMax: AugmentedError<ApiType>;
      BuyXbaseTooMuchForMax: AugmentedError<ApiType>;
      CalcRatioMathError: AugmentedError<ApiType>;
      CalcVirtualXbaseOverflow: AugmentedError<ApiType>;
      ExternalAssetCheckFailed: AugmentedError<ApiType>;
      ExternalError: AugmentedError<ApiType>;
      InconsistentStorage: AugmentedError<ApiType>;
      LPAssetNotCreated: AugmentedError<ApiType>;
      MathError: AugmentedError<ApiType>;
      MaturityInThePast: AugmentedError<ApiType>;
      MaturityTooFarFromNow: AugmentedError<ApiType>;
      NeedToInitialize: AugmentedError<ApiType>;
      NoNeedToInitialize: AugmentedError<ApiType>;
      NotAuthorized: AugmentedError<ApiType>;
      PoolCountOverflow: AugmentedError<ApiType>;
      PoolNotFound: AugmentedError<ApiType>;
      SellBaseTooLowForMin: AugmentedError<ApiType>;
      SellXBaseTooLowForMin: AugmentedError<ApiType>;
      TooLowBaseIn: AugmentedError<ApiType>;
      TooLowXbaseIn: AugmentedError<ApiType>;
      TooMuchBaseIn: AugmentedError<ApiType>;
      TooMuchXbaseOut: AugmentedError<ApiType>;
      TsPeriodTooLarge: AugmentedError<ApiType>;
      WrongMaxRatio: AugmentedError<ApiType>;
      WrongMinRatio: AugmentedError<ApiType>;
      XbaseBalanceTooLow: AugmentedError<ApiType>;
      YieldMathBaseInForFyOut: AugmentedError<ApiType>;
      YieldMathBaseOutForFyIn: AugmentedError<ApiType>;
      YieldMathFyInForBaseOut: AugmentedError<ApiType>;
      YieldMathFyOutForBaseIn: AugmentedError<ApiType>;
      YieldMathInvariant: AugmentedError<ApiType>;
    };
  } // AugmentedErrors
} // declare module
