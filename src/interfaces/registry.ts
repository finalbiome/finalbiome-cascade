// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/types/types/registry';

import type { FinalbiomeNodeRuntimeRuntime, FinalityGrandpaEquivocationPrecommit, FinalityGrandpaEquivocationPrevote, FinalityGrandpaPrecommit, FinalityGrandpaPrevote, FrameSupportTokensMiscBalanceStatus, FrameSupportWeightsDispatchClass, FrameSupportWeightsDispatchInfo, FrameSupportWeightsPays, FrameSupportWeightsPerDispatchClassU32, FrameSupportWeightsPerDispatchClassU64, FrameSupportWeightsPerDispatchClassWeightsPerClass, FrameSupportWeightsRuntimeDbWeight, FrameSupportWeightsWeightToFeeCoefficient, FrameSystemAccountInfo, FrameSystemCall, FrameSystemError, FrameSystemEvent, FrameSystemEventRecord, FrameSystemExtensionsCheckGenesis, FrameSystemExtensionsCheckNonZeroSender, FrameSystemExtensionsCheckNonce, FrameSystemExtensionsCheckSpecVersion, FrameSystemExtensionsCheckTxVersion, FrameSystemExtensionsCheckWeight, FrameSystemLastRuntimeUpgradeInfo, FrameSystemLimitsBlockLength, FrameSystemLimitsBlockWeights, FrameSystemLimitsWeightsPerClass, FrameSystemPhase, PalletBalancesAccountData, PalletBalancesBalanceLock, PalletBalancesCall, PalletBalancesError, PalletBalancesEvent, PalletBalancesReasons, PalletBalancesReleases, PalletBalancesReserveData, PalletFungibleAssetsAssetAccount, PalletFungibleAssetsAssetDetails, PalletFungibleAssetsCall, PalletFungibleAssetsCupFA, PalletFungibleAssetsError, PalletFungibleAssetsEvent, PalletFungibleAssetsExistenceReason, PalletFungibleAssetsTopUppedFA, PalletGrandpaCall, PalletGrandpaError, PalletGrandpaEvent, PalletGrandpaStoredPendingChange, PalletGrandpaStoredState, PalletMechanicsBetResult, PalletMechanicsCall, PalletMechanicsError, PalletMechanicsEvent, PalletMechanicsEventMechanicResultData, PalletMechanicsEventMechanicResultDataBet, PalletMechanicsEventMechanicStopReason, PalletMechanicsMechanicData, PalletMechanicsMechanicDataBet, PalletMechanicsMechanicDetails, PalletMechanicsMechanicUpgradeData, PalletMechanicsMechanicUpgradePayload, PalletNonFungibleAssetsCall, PalletNonFungibleAssetsError, PalletNonFungibleAssetsEvent, PalletOrganizationIdentityAirDropAsset, PalletOrganizationIdentityCall, PalletOrganizationIdentityError, PalletOrganizationIdentityEvent, PalletOrganizationIdentityOrganizationDetails, PalletSudoCall, PalletSudoError, PalletSudoEvent, PalletSupportAttribute, PalletSupportAttributeValue, PalletSupportCharacteristicsBettor, PalletSupportCharacteristicsBettorBettorOutcome, PalletSupportCharacteristicsBettorBettorWinning, PalletSupportCharacteristicsBettorDrawOutcomeResult, PalletSupportCharacteristicsBettorOutcomeResult, PalletSupportCharacteristicsCharacteristic, PalletSupportCharacteristicsPurchased, PalletSupportCharacteristicsPurchasedOffer, PalletSupportErrorsCommonError, PalletSupportLockedAccet, PalletSupportLocker, PalletSupportMechanicId, PalletSupportNumberAttribute, PalletSupportTypesNfaAssetDetails, PalletSupportTypesNfaClassDetails, PalletTemplateCall, PalletTemplateError, PalletTemplateEvent, PalletTimestampCall, PalletTransactionPaymentChargeTransactionPayment, PalletTransactionPaymentReleases, SpConsensusAuraSr25519AppSr25519Public, SpCoreEcdsaSignature, SpCoreEd25519Public, SpCoreEd25519Signature, SpCoreSr25519Public, SpCoreSr25519Signature, SpCoreVoid, SpFinalityGrandpaAppPublic, SpFinalityGrandpaAppSignature, SpFinalityGrandpaEquivocation, SpFinalityGrandpaEquivocationProof, SpRuntimeArithmeticError, SpRuntimeDigest, SpRuntimeDigestDigestItem, SpRuntimeDispatchError, SpRuntimeModuleError, SpRuntimeMultiSignature, SpRuntimeTokenError, SpRuntimeTransactionalError, SpVersionRuntimeVersion } from '@polkadot/types/lookup';

declare module '@polkadot/types/types/registry' {
  interface InterfaceTypes {
    FinalbiomeNodeRuntimeRuntime: FinalbiomeNodeRuntimeRuntime;
    FinalityGrandpaEquivocationPrecommit: FinalityGrandpaEquivocationPrecommit;
    FinalityGrandpaEquivocationPrevote: FinalityGrandpaEquivocationPrevote;
    FinalityGrandpaPrecommit: FinalityGrandpaPrecommit;
    FinalityGrandpaPrevote: FinalityGrandpaPrevote;
    FrameSupportTokensMiscBalanceStatus: FrameSupportTokensMiscBalanceStatus;
    FrameSupportWeightsDispatchClass: FrameSupportWeightsDispatchClass;
    FrameSupportWeightsDispatchInfo: FrameSupportWeightsDispatchInfo;
    FrameSupportWeightsPays: FrameSupportWeightsPays;
    FrameSupportWeightsPerDispatchClassU32: FrameSupportWeightsPerDispatchClassU32;
    FrameSupportWeightsPerDispatchClassU64: FrameSupportWeightsPerDispatchClassU64;
    FrameSupportWeightsPerDispatchClassWeightsPerClass: FrameSupportWeightsPerDispatchClassWeightsPerClass;
    FrameSupportWeightsRuntimeDbWeight: FrameSupportWeightsRuntimeDbWeight;
    FrameSupportWeightsWeightToFeeCoefficient: FrameSupportWeightsWeightToFeeCoefficient;
    FrameSystemAccountInfo: FrameSystemAccountInfo;
    FrameSystemCall: FrameSystemCall;
    FrameSystemError: FrameSystemError;
    FrameSystemEvent: FrameSystemEvent;
    FrameSystemEventRecord: FrameSystemEventRecord;
    FrameSystemExtensionsCheckGenesis: FrameSystemExtensionsCheckGenesis;
    FrameSystemExtensionsCheckNonZeroSender: FrameSystemExtensionsCheckNonZeroSender;
    FrameSystemExtensionsCheckNonce: FrameSystemExtensionsCheckNonce;
    FrameSystemExtensionsCheckSpecVersion: FrameSystemExtensionsCheckSpecVersion;
    FrameSystemExtensionsCheckTxVersion: FrameSystemExtensionsCheckTxVersion;
    FrameSystemExtensionsCheckWeight: FrameSystemExtensionsCheckWeight;
    FrameSystemLastRuntimeUpgradeInfo: FrameSystemLastRuntimeUpgradeInfo;
    FrameSystemLimitsBlockLength: FrameSystemLimitsBlockLength;
    FrameSystemLimitsBlockWeights: FrameSystemLimitsBlockWeights;
    FrameSystemLimitsWeightsPerClass: FrameSystemLimitsWeightsPerClass;
    FrameSystemPhase: FrameSystemPhase;
    PalletBalancesAccountData: PalletBalancesAccountData;
    PalletBalancesBalanceLock: PalletBalancesBalanceLock;
    PalletBalancesCall: PalletBalancesCall;
    PalletBalancesError: PalletBalancesError;
    PalletBalancesEvent: PalletBalancesEvent;
    PalletBalancesReasons: PalletBalancesReasons;
    PalletBalancesReleases: PalletBalancesReleases;
    PalletBalancesReserveData: PalletBalancesReserveData;
    PalletFungibleAssetsAssetAccount: PalletFungibleAssetsAssetAccount;
    PalletFungibleAssetsAssetDetails: PalletFungibleAssetsAssetDetails;
    PalletFungibleAssetsCall: PalletFungibleAssetsCall;
    PalletFungibleAssetsCupFA: PalletFungibleAssetsCupFA;
    PalletFungibleAssetsError: PalletFungibleAssetsError;
    PalletFungibleAssetsEvent: PalletFungibleAssetsEvent;
    PalletFungibleAssetsExistenceReason: PalletFungibleAssetsExistenceReason;
    PalletFungibleAssetsTopUppedFA: PalletFungibleAssetsTopUppedFA;
    PalletGrandpaCall: PalletGrandpaCall;
    PalletGrandpaError: PalletGrandpaError;
    PalletGrandpaEvent: PalletGrandpaEvent;
    PalletGrandpaStoredPendingChange: PalletGrandpaStoredPendingChange;
    PalletGrandpaStoredState: PalletGrandpaStoredState;
    PalletMechanicsBetResult: PalletMechanicsBetResult;
    PalletMechanicsCall: PalletMechanicsCall;
    PalletMechanicsError: PalletMechanicsError;
    PalletMechanicsEvent: PalletMechanicsEvent;
    PalletMechanicsEventMechanicResultData: PalletMechanicsEventMechanicResultData;
    PalletMechanicsEventMechanicResultDataBet: PalletMechanicsEventMechanicResultDataBet;
    PalletMechanicsEventMechanicStopReason: PalletMechanicsEventMechanicStopReason;
    PalletMechanicsMechanicData: PalletMechanicsMechanicData;
    PalletMechanicsMechanicDataBet: PalletMechanicsMechanicDataBet;
    PalletMechanicsMechanicDetails: PalletMechanicsMechanicDetails;
    PalletMechanicsMechanicUpgradeData: PalletMechanicsMechanicUpgradeData;
    PalletMechanicsMechanicUpgradePayload: PalletMechanicsMechanicUpgradePayload;
    PalletNonFungibleAssetsCall: PalletNonFungibleAssetsCall;
    PalletNonFungibleAssetsError: PalletNonFungibleAssetsError;
    PalletNonFungibleAssetsEvent: PalletNonFungibleAssetsEvent;
    PalletOrganizationIdentityAirDropAsset: PalletOrganizationIdentityAirDropAsset;
    PalletOrganizationIdentityCall: PalletOrganizationIdentityCall;
    PalletOrganizationIdentityError: PalletOrganizationIdentityError;
    PalletOrganizationIdentityEvent: PalletOrganizationIdentityEvent;
    PalletOrganizationIdentityOrganizationDetails: PalletOrganizationIdentityOrganizationDetails;
    PalletSudoCall: PalletSudoCall;
    PalletSudoError: PalletSudoError;
    PalletSudoEvent: PalletSudoEvent;
    PalletSupportAttribute: PalletSupportAttribute;
    PalletSupportAttributeValue: PalletSupportAttributeValue;
    PalletSupportCharacteristicsBettor: PalletSupportCharacteristicsBettor;
    PalletSupportCharacteristicsBettorBettorOutcome: PalletSupportCharacteristicsBettorBettorOutcome;
    PalletSupportCharacteristicsBettorBettorWinning: PalletSupportCharacteristicsBettorBettorWinning;
    PalletSupportCharacteristicsBettorDrawOutcomeResult: PalletSupportCharacteristicsBettorDrawOutcomeResult;
    PalletSupportCharacteristicsBettorOutcomeResult: PalletSupportCharacteristicsBettorOutcomeResult;
    PalletSupportCharacteristicsCharacteristic: PalletSupportCharacteristicsCharacteristic;
    PalletSupportCharacteristicsPurchased: PalletSupportCharacteristicsPurchased;
    PalletSupportCharacteristicsPurchasedOffer: PalletSupportCharacteristicsPurchasedOffer;
    PalletSupportErrorsCommonError: PalletSupportErrorsCommonError;
    PalletSupportLockedAccet: PalletSupportLockedAccet;
    PalletSupportLocker: PalletSupportLocker;
    PalletSupportMechanicId: PalletSupportMechanicId;
    PalletSupportNumberAttribute: PalletSupportNumberAttribute;
    PalletSupportTypesNfaAssetDetails: PalletSupportTypesNfaAssetDetails;
    PalletSupportTypesNfaClassDetails: PalletSupportTypesNfaClassDetails;
    PalletTemplateCall: PalletTemplateCall;
    PalletTemplateError: PalletTemplateError;
    PalletTemplateEvent: PalletTemplateEvent;
    PalletTimestampCall: PalletTimestampCall;
    PalletTransactionPaymentChargeTransactionPayment: PalletTransactionPaymentChargeTransactionPayment;
    PalletTransactionPaymentReleases: PalletTransactionPaymentReleases;
    SpConsensusAuraSr25519AppSr25519Public: SpConsensusAuraSr25519AppSr25519Public;
    SpCoreEcdsaSignature: SpCoreEcdsaSignature;
    SpCoreEd25519Public: SpCoreEd25519Public;
    SpCoreEd25519Signature: SpCoreEd25519Signature;
    SpCoreSr25519Public: SpCoreSr25519Public;
    SpCoreSr25519Signature: SpCoreSr25519Signature;
    SpCoreVoid: SpCoreVoid;
    SpFinalityGrandpaAppPublic: SpFinalityGrandpaAppPublic;
    SpFinalityGrandpaAppSignature: SpFinalityGrandpaAppSignature;
    SpFinalityGrandpaEquivocation: SpFinalityGrandpaEquivocation;
    SpFinalityGrandpaEquivocationProof: SpFinalityGrandpaEquivocationProof;
    SpRuntimeArithmeticError: SpRuntimeArithmeticError;
    SpRuntimeDigest: SpRuntimeDigest;
    SpRuntimeDigestDigestItem: SpRuntimeDigestDigestItem;
    SpRuntimeDispatchError: SpRuntimeDispatchError;
    SpRuntimeModuleError: SpRuntimeModuleError;
    SpRuntimeMultiSignature: SpRuntimeMultiSignature;
    SpRuntimeTokenError: SpRuntimeTokenError;
    SpRuntimeTransactionalError: SpRuntimeTransactionalError;
    SpVersionRuntimeVersion: SpVersionRuntimeVersion;
  } // InterfaceTypes
} // declare module
