// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { Asset, ResourceId, UnsignedPriorityPair } from '@equilab/api/eq-next/interfaces/latest';
import type { ApiTypes } from '@polkadot/api-base/types';
import type { Bytes, Vec, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { ChainId } from '@polkadot/types/interfaces/bridges';
import type { Balance, BalanceOf, BlockNumber, FixedI128, ModuleId, Moment, Perbill, Permill, Perquintill, RuntimeDbWeight, TransactionPriority } from '@polkadot/types/interfaces/runtime';
import type { RuntimeVersion } from '@polkadot/types/interfaces/state';
import type { WeightToFeeCoefficient } from '@polkadot/types/interfaces/support';
import type { BlockLength, BlockWeights } from '@polkadot/types/interfaces/system';

declare module '@polkadot/api-base/types/consts' {
  export interface AugmentedConsts<ApiType extends ApiTypes> {
    bailsman: {
      /**
       * Pricing model scaling factor
       **/
      alpha: FixedI128 & AugmentedConst<ApiType>;
      /**
       * Minimum amount of balances account should have to register as bailsman
       **/
      minimalCollateral: Balance & AugmentedConst<ApiType>;
      /**
       * Minimal sum of the collateral and debt abs values to distribute temp Bailsman balances
       **/
      minTempBalanceUsd: Balance & AugmentedConst<ApiType>;
      /**
       * Pallet's AccountId for balances
       **/
      moduleId: ModuleId & AugmentedConst<ApiType>;
      /**
       * Lower bound for scaling risk model
       **/
      riskLowerBound: FixedI128 & AugmentedConst<ApiType>;
      /**
       * Number of standard deviations to consider when stress testing
       **/
      riskNSigma: FixedI128 & AugmentedConst<ApiType>;
      /**
       * Power coefficient for scale calculations
       **/
      riskRho: FixedI128 & AugmentedConst<ApiType>;
      /**
       * Defines the target liquidity with default value set to 1 (bailout pool
       * has to cover stressed collateral losses in full)
       **/
      riskTarget: FixedI128 & AugmentedConst<ApiType>;
      /**
       * Upper bound for scaling risk model
       **/
      riskUpperBound: FixedI128 & AugmentedConst<ApiType>;
    };
    chainBridge: {
      /**
       * The identifier for this chain.
       * This must be unique and must not collide with existing IDs within a set of bridged chains.
       **/
      chainIdentity: ChainId & AugmentedConst<ApiType>;
    };
    curveAmm: {
      /**
       * Anti ddos fee for pool creation
       **/
      creationFee: Balance & AugmentedConst<ApiType>;
      /**
       * Module account
       **/
      moduleId: ModuleId & AugmentedConst<ApiType>;
    };
    curveDistribution: {
      /**
       * Contract address
       **/
      contractAddress: Bytes & AugmentedConst<ApiType>;
      /**
       * CurveAmm module id
       **/
      curveAmmModuleId: ModuleId & AugmentedConst<ApiType>;
      /**
       * Destination chain id
       **/
      destinationId: ChainId & AugmentedConst<ApiType>;
      moduleId: ModuleId & AugmentedConst<ApiType>;
      /**
       * ResourceId associated with main asset
       **/
      resourceId: ResourceId & AugmentedConst<ApiType>;
      /**
       * Treasury module id
       **/
      treasuryModuleId: ModuleId & AugmentedConst<ApiType>;
    };
    eqAssets: {
      /**
       * Network native asset
       * Commissions are paid in this asset
       **/
      mainAsset: Asset & AugmentedConst<ApiType>;
    };
    eqBalances: {
      /**
       * Bailsman module's account
       **/
      bailsmanModuleId: ModuleId & AugmentedConst<ApiType>;
      /**
       * Amount of Eq that will be automatically bought from Treasury on deposit creation
       **/
      depositEq: Balance & AugmentedConst<ApiType>;
      /**
       * Account for storing reserved balance
       **/
      moduleId: ModuleId & AugmentedConst<ApiType>;
      /**
       * Treasury module's account
       **/
      treasuryModuleId: ModuleId & AugmentedConst<ApiType>;
    };
    eqDex: {
      /**
       * Used for calculation unsigned transaction priority
       **/
      dexUnsignedPriority: TransactionPriority & AugmentedConst<ApiType>;
      /**
       * Fee for deleting orders by offchain worker
       **/
      penaltyFee: Balance & AugmentedConst<ApiType>;
      /**
       * Used for group orders in chunks. Should be positive value
       **/
      priceStepCount: u32 & AugmentedConst<ApiType>;
    };
    eqLiquidityFarming: {
      /**
       * Pallet's AccountId for balance
       **/
      moduleId: ModuleId & AugmentedConst<ApiType>;
    };
    eqMarginCall: {
      /**
       * `critical_margin` setting, when the margin is below this value, a position is liquidated immediately
       **/
      criticalMargin: FixedI128 & AugmentedConst<ApiType>;
      /**
       * `initial_margin` setting, when the margin is below this value, borrowing is prohibited
       **/
      initialMargin: FixedI128 & AugmentedConst<ApiType>;
      /**
       * `maintenance_margin` setting, when the margin is below this value, a MaintenanceMarginCall event is fired
       **/
      maintenanceMargin: FixedI128 & AugmentedConst<ApiType>;
      /**
       * `maintenance_period` setting, a time period (in seconds) when the margin account can be topped up to the `initial_margin` setting to avoid a margin call
       **/
      maintenancePeriod: u64 & AugmentedConst<ApiType>;
    };
    eqMultisigSudo: {
      /**
       * Maximal number of signatories
       **/
      maxSignatories: u32 & AugmentedConst<ApiType>;
    };
    eqParachainOffering: {
      /**
       * Pallet's AccountId for balance
       **/
      moduleId: ModuleId & AugmentedConst<ApiType>;
    };
    eqRate: {
      /**
       * Gets bailsman module account for margincall and fee transfers
       **/
      bailsmanModuleId: ModuleId & AugmentedConst<ApiType>;
      /**
       * Minimum new debt for system reinit
       **/
      minSurplus: Balance & AugmentedConst<ApiType>;
      /**
       * Minimum temp bailsmen balances for Bailsman pallet reinit
       **/
      minTempBailsman: Balance & AugmentedConst<ApiType>;
      /**
       * For unsigned transaction priority calculation
       **/
      unsignedPriority: TransactionPriority & AugmentedConst<ApiType>;
    };
    eqTreasury: {
      /**
       * Pallet's AccountId for balance
       **/
      moduleId: ModuleId & AugmentedConst<ApiType>;
    };
    financial: {
      priceCount: u32 & AugmentedConst<ApiType>;
      pricePeriod: u32 & AugmentedConst<ApiType>;
    };
    gensBinaryOpt: {
      /**
       * Participation offset in seconds
       **/
      depositOffset: u64 & AugmentedConst<ApiType>;
      /**
       * Account for storing reserved balance
       **/
      moduleId: ModuleId & AugmentedConst<ApiType>;
      /**
       * Penalty for quitting option
       **/
      penalty: Perquintill & AugmentedConst<ApiType>;
      /**
       * Treasury account
       **/
      treasuryModuleId: ModuleId & AugmentedConst<ApiType>;
    };
    gensCrowdloan: {
      /**
       * Pallet's AccountId for balances
       **/
      moduleId: ModuleId & AugmentedConst<ApiType>;
      /**
       * Penalty period in days
       **/
      penaltyPeriod: u64 & AugmentedConst<ApiType>;
    };
    gensOptOut: {
      /**
       * Pallet's AccountId for balances
       **/
      moduleId: ModuleId & AugmentedConst<ApiType>;
      /**
       * Used to calculate unsigned transaction priority
       **/
      optOutUnsignedPriority: TransactionPriority & AugmentedConst<ApiType>;
      /**
       * Used to set how much seconds we use per block. e.g. 6 seconds in standalone and 12 in parachain
       **/
      secondsPerBlock: u64 & AugmentedConst<ApiType>;
    };
    liquidityFarming: {
      /**
       * The annual rate (per cents).
       **/
      annualRate: Perbill & AugmentedConst<ApiType>;
      /**
       * Distributor's module account
       **/
      distributorModuleId: ModuleId & AugmentedConst<ApiType>;
      /**
       * The limit amount (from above) to distribute per second.
       **/
      limitPayoutPerSecond: Balance & AugmentedConst<ApiType>;
      /**
       * Used for calculation unsigned transaction priority
       **/
      liqFmUnsignedPriority: TransactionPriority & AugmentedConst<ApiType>;
      /**
       * The threshold amount (from below) to make another round of reward.
       **/
      minimalPayout: Balance & AugmentedConst<ApiType>;
      /**
       * Recipient's module account
       **/
      recipientModuleId: ModuleId & AugmentedConst<ApiType>;
    };
    multisig: {
      /**
       * The base amount of currency needed to reserve for creating a multisig execution or to store
       * a dispatch call for later.
       **/
      depositBase: BalanceOf & AugmentedConst<ApiType>;
      /**
       * The amount of currency needed per unit threshold when creating a multisig execution.
       **/
      depositFactor: BalanceOf & AugmentedConst<ApiType>;
      /**
       * The maximum amount of signatories allowed for a given multisig.
       **/
      maxSignatories: u16 & AugmentedConst<ApiType>;
    };
    oracle: {
      /**
       * Time between recalculation assets financial data in ms
       **/
      financialRecalcPeriodBlocks: BlockNumber & AugmentedConst<ApiType>;
      /**
       * Pallet setting representing amount of time for which price median is valid
       **/
      medianPriceTimeout: u64 & AugmentedConst<ApiType>;
      /**
       * Pallet setting representing amount of time for which price point is valid
       **/
      priceTimeout: u64 & AugmentedConst<ApiType>;
      /**
       * Lifetime in blocks for unsigned transactions
       **/
      unsignedLifetimeInBlocks: u32 & AugmentedConst<ApiType>;
      /**
       * For priority calculation of an unsigned transaction
       **/
      unsignedPriority: UnsignedPriorityPair & AugmentedConst<ApiType>;
    };
    proxy: {
      /**
       * `AnnouncementDepositBase` metadata shadow.
       **/
      announcementDepositBase: BalanceOf & AugmentedConst<ApiType>;
      /**
       * `AnnouncementDepositFactor` metadata shadow.
       **/
      announcementDepositFactor: BalanceOf & AugmentedConst<ApiType>;
      /**
       * `MaxPending` metadata shadow.
       **/
      maxPending: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum amount of proxies allowed for a single account.
       **/
      maxProxies: u16 & AugmentedConst<ApiType>;
      /**
       * The base amount of currency needed to reserve for creating a proxy.
       **/
      proxyDepositBase: BalanceOf & AugmentedConst<ApiType>;
      /**
       * The amount of currency needed per proxy added.
       **/
      proxyDepositFactor: BalanceOf & AugmentedConst<ApiType>;
    };
    system: {
      /**
       * Maximum number of block number to block hash mappings to keep (oldest pruned first).
       **/
      blockHashCount: BlockNumber & AugmentedConst<ApiType>;
      /**
       * The maximum length of a block (in bytes).
       **/
      blockLength: BlockLength & AugmentedConst<ApiType>;
      /**
       * Block & extrinsics weights: base values and limits.
       **/
      blockWeights: BlockWeights & AugmentedConst<ApiType>;
      /**
       * The weight of runtime database operations the runtime can invoke.
       **/
      dbWeight: RuntimeDbWeight & AugmentedConst<ApiType>;
      /**
       * The designated SS85 prefix of this chain.
       * 
       * This replaces the "ss58Format" property declared in the chain spec. Reason is
       * that the runtime should know about the prefix in order to make use of it as
       * an identifier of the chain.
       **/
      ss58Prefix: u8 & AugmentedConst<ApiType>;
      /**
       * Get the chain's current version.
       **/
      version: RuntimeVersion & AugmentedConst<ApiType>;
    };
    timestamp: {
      /**
       * The minimum period between blocks. Beware that this is different to the *expected* period
       * that the block production apparatus provides. Your chosen consensus system will generally
       * work with this to determine a sensible block time. e.g. For Aura, it will be double this
       * period on default settings.
       **/
      minimumPeriod: Moment & AugmentedConst<ApiType>;
    };
    transactionPayment: {
      /**
       * The fee to be paid for making a transaction; the per-byte portion.
       **/
      transactionByteFee: BalanceOf & AugmentedConst<ApiType>;
      /**
       * The polynomial that is applied in order to derive fee from weight.
       **/
      weightToFee: Vec<WeightToFeeCoefficient> & AugmentedConst<ApiType>;
    };
    treasury: {
      /**
       * Fee from collateral buyouts (any currency that is not basic asset)
       **/
      buyFee: Permill & AugmentedConst<ApiType>;
      /**
       * Treasury pallet fee for FeeManager
       **/
      fee: Permill & AugmentedConst<ApiType>;
      /**
       * Fee from the basic asset buyouts
       **/
      sellFee: Permill & AugmentedConst<ApiType>;
      /**
       * Fee part that stays in Treasury pallet
       **/
      weightFeeTreasury: u32 & AugmentedConst<ApiType>;
      /**
       * Fee part that goes to validator
       **/
      weightFeeValidator: u32 & AugmentedConst<ApiType>;
    };
    vesting: {
      /**
       * The minimum amount transferred to call `vested_transfer`
       **/
      minVestedTransfer: BalanceOf & AugmentedConst<ApiType>;
      moduleId: ModuleId & AugmentedConst<ApiType>;
    };
  } // AugmentedConsts
} // declare module
