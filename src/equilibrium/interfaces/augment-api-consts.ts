// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { ResourceId } from '@equilab/api/equilibrium/interfaces/latest';
import type { ApiTypes } from '@polkadot/api-base/types';
import type { Vec, u32, u64, u8 } from '@polkadot/types-codec';
import type { ChainId } from '@polkadot/types/interfaces/bridges';
import type { Balance, BalanceOf, BlockNumber, FixedI128, ModuleId, Moment, Perbill, Permill, RuntimeDbWeight, TransactionPriority } from '@polkadot/types/interfaces/runtime';
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
       * Pallet setting indicating at which collateral/debt ratio should a
       * margin call occur
       **/
      criticalLtv: FixedI128 & AugmentedConst<ApiType>;
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
      /**
       * Fee to charge for a bridge transfer S->E.
       **/
      fee: Balance & AugmentedConst<ApiType>;
      proposalLifetime: BlockNumber & AugmentedConst<ApiType>;
    };
    crvBridge: {
      /**
       * Ids can be defined by the runtime and passed in, perhaps from blake2b_128 hashes.
       **/
      hashId: ResourceId & AugmentedConst<ApiType>;
      nativeTokenId: ResourceId & AugmentedConst<ApiType>;
    };
    eqBridge: {
      /**
       * Ids can be defined by the runtime and passed in, perhaps from blake2b_128 hashes.
       **/
      hashId: ResourceId & AugmentedConst<ApiType>;
      nativeTokenId: ResourceId & AugmentedConst<ApiType>;
    };
    eqInvestors: {
      moduleId: ModuleId & AugmentedConst<ApiType>;
    };
    eqLiquidityFarming: {
      moduleId: ModuleId & AugmentedConst<ApiType>;
    };
    eqLockdrop: {
      /**
       * Period of lock program in seconds
       **/
      lockPeriod: u64 & AugmentedConst<ApiType>;
      minLockAmount: Balance & AugmentedConst<ApiType>;
      /**
       * Pallet's AccountId for balances
       **/
      moduleId: ModuleId & AugmentedConst<ApiType>;
    };
    eqMarginCall: {
      /**
       * critical_margin settings, margin below this level liquidates position immediately
       **/
      criticalMargin: FixedI128 & AugmentedConst<ApiType>;
      /**
       * initial_margin setting, when margin below this value, borrowing is prohibited
       **/
      initialMargin: FixedI128 & AugmentedConst<ApiType>;
      /**
       * maintenance_margin setting, when margin below this value, MaintenanceMarginCall is fired
       **/
      maintenanceMargin: FixedI128 & AugmentedConst<ApiType>;
      /**
       * maintenance_period setting, time period (in seconds) when margin account can be topped up to initial_margin value to avoid margin call
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
       * A configuration for base priority of unsigned transactions.
       * 
       * This is exposed so that it can be tuned for particular runtime, when
       * multiple pallets send unsigned transactions.
       **/
      unsignedPriority: TransactionPriority & AugmentedConst<ApiType>;
    };
    eqTreasury: {
      moduleId: ModuleId & AugmentedConst<ApiType>;
    };
    ethBridge: {
      /**
       * Ids can be defined by the runtime and passed in, perhaps from blake2b_128 hashes.
       **/
      hashId: ResourceId & AugmentedConst<ApiType>;
      nativeTokenId: ResourceId & AugmentedConst<ApiType>;
    };
    financial: {
      priceCount: u32 & AugmentedConst<ApiType>;
      pricePeriod: u32 & AugmentedConst<ApiType>;
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
       * The limit amount (from above) to distribute per block.
       **/
      limitPayoutPerBlock: Balance & AugmentedConst<ApiType>;
      /**
       * The threshold amount (from below) to make another round of reward.
       **/
      minimalPayoutPerBlock: Balance & AugmentedConst<ApiType>;
      /**
       * Recipient's module account
       **/
      recipientModuleId: ModuleId & AugmentedConst<ApiType>;
      /**
       * Expected amount of seconds per block
       **/
      secsPerBlock: u64 & AugmentedConst<ApiType>;
    };
    oracle: {
      /**
       * Pallet setting representing amount of time for which price median is valid
       **/
      medianPriceTimeout: u64 & AugmentedConst<ApiType>;
      /**
       * Pallet setting representing amount of time for which price point is valid
       **/
      priceTimeout: u64 & AugmentedConst<ApiType>;
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
       * Fee from collateral buyouts (any currency that is not Eq)
       **/
      buyFee: Permill & AugmentedConst<ApiType>;
      /**
       * Treasury pallet fee for FeeManager
       **/
      fee: Permill & AugmentedConst<ApiType>;
      /**
       * Fee from Eq buyouts
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
