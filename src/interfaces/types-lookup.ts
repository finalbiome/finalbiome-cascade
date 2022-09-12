// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/types/lookup';

import type { Bytes, Compact, Enum, Null, Option, Result, Struct, Text, U8aFixed, Vec, bool, u128, u32, u64, u8 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { AccountId32, Call, H256, MultiAddress, Perbill } from '@polkadot/types/interfaces/runtime';
import type { Event } from '@polkadot/types/interfaces/system';

declare module '@polkadot/types/lookup' {
  /** @name FrameSystemAccountInfo (3) */
  interface FrameSystemAccountInfo extends Struct {
    readonly nonce: u32;
    readonly consumers: u32;
    readonly providers: u32;
    readonly sufficients: u32;
    readonly data: PalletBalancesAccountData;
  }

  /** @name PalletBalancesAccountData (5) */
  interface PalletBalancesAccountData extends Struct {
    readonly free: u128;
    readonly reserved: u128;
    readonly miscFrozen: u128;
    readonly feeFrozen: u128;
  }

  /** @name FrameSupportWeightsPerDispatchClassU64 (7) */
  interface FrameSupportWeightsPerDispatchClassU64 extends Struct {
    readonly normal: u64;
    readonly operational: u64;
    readonly mandatory: u64;
  }

  /** @name SpRuntimeDigest (11) */
  interface SpRuntimeDigest extends Struct {
    readonly logs: Vec<SpRuntimeDigestDigestItem>;
  }

  /** @name SpRuntimeDigestDigestItem (13) */
  interface SpRuntimeDigestDigestItem extends Enum {
    readonly isOther: boolean;
    readonly asOther: Bytes;
    readonly isConsensus: boolean;
    readonly asConsensus: ITuple<[U8aFixed, Bytes]>;
    readonly isSeal: boolean;
    readonly asSeal: ITuple<[U8aFixed, Bytes]>;
    readonly isPreRuntime: boolean;
    readonly asPreRuntime: ITuple<[U8aFixed, Bytes]>;
    readonly isRuntimeEnvironmentUpdated: boolean;
    readonly type: 'Other' | 'Consensus' | 'Seal' | 'PreRuntime' | 'RuntimeEnvironmentUpdated';
  }

  /** @name FrameSystemEventRecord (16) */
  interface FrameSystemEventRecord extends Struct {
    readonly phase: FrameSystemPhase;
    readonly event: Event;
    readonly topics: Vec<H256>;
  }

  /** @name FrameSystemEvent (18) */
  interface FrameSystemEvent extends Enum {
    readonly isExtrinsicSuccess: boolean;
    readonly asExtrinsicSuccess: {
      readonly dispatchInfo: FrameSupportWeightsDispatchInfo;
    } & Struct;
    readonly isExtrinsicFailed: boolean;
    readonly asExtrinsicFailed: {
      readonly dispatchError: SpRuntimeDispatchError;
      readonly dispatchInfo: FrameSupportWeightsDispatchInfo;
    } & Struct;
    readonly isCodeUpdated: boolean;
    readonly isNewAccount: boolean;
    readonly asNewAccount: {
      readonly account: AccountId32;
    } & Struct;
    readonly isKilledAccount: boolean;
    readonly asKilledAccount: {
      readonly account: AccountId32;
    } & Struct;
    readonly isRemarked: boolean;
    readonly asRemarked: {
      readonly sender: AccountId32;
      readonly hash_: H256;
    } & Struct;
    readonly type: 'ExtrinsicSuccess' | 'ExtrinsicFailed' | 'CodeUpdated' | 'NewAccount' | 'KilledAccount' | 'Remarked';
  }

  /** @name FrameSupportWeightsDispatchInfo (19) */
  interface FrameSupportWeightsDispatchInfo extends Struct {
    readonly weight: u64;
    readonly class: FrameSupportWeightsDispatchClass;
    readonly paysFee: FrameSupportWeightsPays;
  }

  /** @name FrameSupportWeightsDispatchClass (20) */
  interface FrameSupportWeightsDispatchClass extends Enum {
    readonly isNormal: boolean;
    readonly isOperational: boolean;
    readonly isMandatory: boolean;
    readonly type: 'Normal' | 'Operational' | 'Mandatory';
  }

  /** @name FrameSupportWeightsPays (21) */
  interface FrameSupportWeightsPays extends Enum {
    readonly isYes: boolean;
    readonly isNo: boolean;
    readonly type: 'Yes' | 'No';
  }

  /** @name SpRuntimeDispatchError (22) */
  interface SpRuntimeDispatchError extends Enum {
    readonly isOther: boolean;
    readonly isCannotLookup: boolean;
    readonly isBadOrigin: boolean;
    readonly isModule: boolean;
    readonly asModule: SpRuntimeModuleError;
    readonly isConsumerRemaining: boolean;
    readonly isNoProviders: boolean;
    readonly isTooManyConsumers: boolean;
    readonly isToken: boolean;
    readonly asToken: SpRuntimeTokenError;
    readonly isArithmetic: boolean;
    readonly asArithmetic: SpRuntimeArithmeticError;
    readonly isTransactional: boolean;
    readonly asTransactional: SpRuntimeTransactionalError;
    readonly type: 'Other' | 'CannotLookup' | 'BadOrigin' | 'Module' | 'ConsumerRemaining' | 'NoProviders' | 'TooManyConsumers' | 'Token' | 'Arithmetic' | 'Transactional';
  }

  /** @name SpRuntimeModuleError (23) */
  interface SpRuntimeModuleError extends Struct {
    readonly index: u8;
    readonly error: U8aFixed;
  }

  /** @name SpRuntimeTokenError (24) */
  interface SpRuntimeTokenError extends Enum {
    readonly isNoFunds: boolean;
    readonly isWouldDie: boolean;
    readonly isBelowMinimum: boolean;
    readonly isCannotCreate: boolean;
    readonly isUnknownAsset: boolean;
    readonly isFrozen: boolean;
    readonly isUnsupported: boolean;
    readonly type: 'NoFunds' | 'WouldDie' | 'BelowMinimum' | 'CannotCreate' | 'UnknownAsset' | 'Frozen' | 'Unsupported';
  }

  /** @name SpRuntimeArithmeticError (25) */
  interface SpRuntimeArithmeticError extends Enum {
    readonly isUnderflow: boolean;
    readonly isOverflow: boolean;
    readonly isDivisionByZero: boolean;
    readonly type: 'Underflow' | 'Overflow' | 'DivisionByZero';
  }

  /** @name SpRuntimeTransactionalError (26) */
  interface SpRuntimeTransactionalError extends Enum {
    readonly isLimitReached: boolean;
    readonly isNoLayer: boolean;
    readonly type: 'LimitReached' | 'NoLayer';
  }

  /** @name PalletGrandpaEvent (27) */
  interface PalletGrandpaEvent extends Enum {
    readonly isNewAuthorities: boolean;
    readonly asNewAuthorities: {
      readonly authoritySet: Vec<ITuple<[SpFinalityGrandpaAppPublic, u64]>>;
    } & Struct;
    readonly isPaused: boolean;
    readonly isResumed: boolean;
    readonly type: 'NewAuthorities' | 'Paused' | 'Resumed';
  }

  /** @name SpFinalityGrandpaAppPublic (30) */
  interface SpFinalityGrandpaAppPublic extends SpCoreEd25519Public {}

  /** @name SpCoreEd25519Public (31) */
  interface SpCoreEd25519Public extends U8aFixed {}

  /** @name PalletBalancesEvent (32) */
  interface PalletBalancesEvent extends Enum {
    readonly isEndowed: boolean;
    readonly asEndowed: {
      readonly account: AccountId32;
      readonly freeBalance: u128;
    } & Struct;
    readonly isDustLost: boolean;
    readonly asDustLost: {
      readonly account: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isBalanceSet: boolean;
    readonly asBalanceSet: {
      readonly who: AccountId32;
      readonly free: u128;
      readonly reserved: u128;
    } & Struct;
    readonly isReserved: boolean;
    readonly asReserved: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isUnreserved: boolean;
    readonly asUnreserved: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isReserveRepatriated: boolean;
    readonly asReserveRepatriated: {
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly amount: u128;
      readonly destinationStatus: FrameSupportTokensMiscBalanceStatus;
    } & Struct;
    readonly isDeposit: boolean;
    readonly asDeposit: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isWithdraw: boolean;
    readonly asWithdraw: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isSlashed: boolean;
    readonly asSlashed: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly type: 'Endowed' | 'DustLost' | 'Transfer' | 'BalanceSet' | 'Reserved' | 'Unreserved' | 'ReserveRepatriated' | 'Deposit' | 'Withdraw' | 'Slashed';
  }

  /** @name FrameSupportTokensMiscBalanceStatus (33) */
  interface FrameSupportTokensMiscBalanceStatus extends Enum {
    readonly isFree: boolean;
    readonly isReserved: boolean;
    readonly type: 'Free' | 'Reserved';
  }

  /** @name PalletSudoEvent (34) */
  interface PalletSudoEvent extends Enum {
    readonly isSudid: boolean;
    readonly asSudid: {
      readonly sudoResult: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isKeyChanged: boolean;
    readonly asKeyChanged: {
      readonly oldSudoer: Option<AccountId32>;
    } & Struct;
    readonly isSudoAsDone: boolean;
    readonly asSudoAsDone: {
      readonly sudoResult: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly type: 'Sudid' | 'KeyChanged' | 'SudoAsDone';
  }

  /** @name PalletTemplateEvent (38) */
  interface PalletTemplateEvent extends Enum {
    readonly isSomethingStored: boolean;
    readonly asSomethingStored: ITuple<[u32, AccountId32]>;
    readonly type: 'SomethingStored';
  }

  /** @name PalletOrganizationIdentityEvent (39) */
  interface PalletOrganizationIdentityEvent extends Enum {
    readonly isSomethingStored: boolean;
    readonly asSomethingStored: ITuple<[u32, AccountId32]>;
    readonly isCreatedOrganization: boolean;
    readonly asCreatedOrganization: ITuple<[Bytes, AccountId32]>;
    readonly isUpdatedOrganization: boolean;
    readonly asUpdatedOrganization: AccountId32;
    readonly isMemberAdded: boolean;
    readonly asMemberAdded: ITuple<[AccountId32, AccountId32]>;
    readonly isMemberRemoved: boolean;
    readonly asMemberRemoved: ITuple<[AccountId32, AccountId32]>;
    readonly isOnboard: boolean;
    readonly asOnboard: ITuple<[AccountId32, AccountId32]>;
    readonly type: 'SomethingStored' | 'CreatedOrganization' | 'UpdatedOrganization' | 'MemberAdded' | 'MemberRemoved' | 'Onboard';
  }

  /** @name PalletFungibleAssetsEvent (40) */
  interface PalletFungibleAssetsEvent extends Enum {
    readonly isCreated: boolean;
    readonly asCreated: {
      readonly assetId: u32;
      readonly owner: AccountId32;
    } & Struct;
    readonly isIssued: boolean;
    readonly asIssued: {
      readonly assetId: u32;
      readonly owner: AccountId32;
      readonly totalSupply: u128;
    } & Struct;
    readonly isBurned: boolean;
    readonly asBurned: {
      readonly assetId: u32;
      readonly owner: AccountId32;
      readonly balance: u128;
    } & Struct;
    readonly isSomethingStored: boolean;
    readonly asSomethingStored: ITuple<[u32, AccountId32]>;
    readonly isDestroyed: boolean;
    readonly asDestroyed: {
      readonly assetId: u32;
      readonly owner: AccountId32;
    } & Struct;
    readonly type: 'Created' | 'Issued' | 'Burned' | 'SomethingStored' | 'Destroyed';
  }

  /** @name PalletNonFungibleAssetsEvent (43) */
  interface PalletNonFungibleAssetsEvent extends Enum {
    readonly isCreated: boolean;
    readonly asCreated: {
      readonly classId: u32;
      readonly owner: AccountId32;
    } & Struct;
    readonly isDestroyed: boolean;
    readonly asDestroyed: {
      readonly classId: u32;
    } & Struct;
    readonly isUpdated: boolean;
    readonly asUpdated: {
      readonly classId: u32;
    } & Struct;
    readonly isIssued: boolean;
    readonly asIssued: {
      readonly classId: u32;
      readonly assetId: u32;
      readonly owner: AccountId32;
    } & Struct;
    readonly isAttributeCreated: boolean;
    readonly asAttributeCreated: {
      readonly classId: u32;
      readonly key: Bytes;
      readonly value: PalletSupportAttributeValue;
    } & Struct;
    readonly isAttributeRemoved: boolean;
    readonly asAttributeRemoved: {
      readonly classId: u32;
      readonly key: Bytes;
    } & Struct;
    readonly isBurned: boolean;
    readonly asBurned: {
      readonly classId: u32;
      readonly assetId: u32;
      readonly owner: AccountId32;
    } & Struct;
    readonly isSomethingStored: boolean;
    readonly asSomethingStored: ITuple<[u32, AccountId32]>;
    readonly type: 'Created' | 'Destroyed' | 'Updated' | 'Issued' | 'AttributeCreated' | 'AttributeRemoved' | 'Burned' | 'SomethingStored';
  }

  /** @name PalletSupportAttributeValue (47) */
  interface PalletSupportAttributeValue extends Enum {
    readonly isNumber: boolean;
    readonly asNumber: PalletSupportNumberAttribute;
    readonly isText: boolean;
    readonly asText: Bytes;
    readonly type: 'Number' | 'Text';
  }

  /** @name PalletSupportNumberAttribute (48) */
  interface PalletSupportNumberAttribute extends Struct {
    readonly numberValue: u32;
    readonly numberMax: Option<u32>;
  }

  /** @name PalletMechanicsEvent (51) */
  interface PalletMechanicsEvent extends Enum {
    readonly isFinished: boolean;
    readonly asFinished: {
      readonly owner: AccountId32;
      readonly id: u32;
      readonly result: Option<PalletMechanicsEventMechanicResultData>;
    } & Struct;
    readonly isStopped: boolean;
    readonly asStopped: {
      readonly owner: AccountId32;
      readonly id: u32;
      readonly reason: PalletMechanicsEventMechanicStopReason;
    } & Struct;
    readonly type: 'Finished' | 'Stopped';
  }

  /** @name PalletMechanicsEventMechanicResultData (53) */
  interface PalletMechanicsEventMechanicResultData extends Enum {
    readonly isBuyNfa: boolean;
    readonly asBuyNfa: u32;
    readonly isBet: boolean;
    readonly asBet: PalletMechanicsEventMechanicResultDataBet;
    readonly type: 'BuyNfa' | 'Bet';
  }

  /** @name PalletMechanicsEventMechanicResultDataBet (54) */
  interface PalletMechanicsEventMechanicResultDataBet extends Struct {
    readonly outcomes: Vec<u32>;
    readonly result: PalletMechanicsBetResult;
  }

  /** @name PalletMechanicsBetResult (57) */
  interface PalletMechanicsBetResult extends Enum {
    readonly isWon: boolean;
    readonly isLost: boolean;
    readonly isDraw: boolean;
    readonly type: 'Won' | 'Lost' | 'Draw';
  }

  /** @name PalletMechanicsEventMechanicStopReason (58) */
  interface PalletMechanicsEventMechanicStopReason extends Enum {
    readonly isUpgradeNeeded: boolean;
    readonly type: 'UpgradeNeeded';
  }

  /** @name FrameSystemPhase (59) */
  interface FrameSystemPhase extends Enum {
    readonly isApplyExtrinsic: boolean;
    readonly asApplyExtrinsic: u32;
    readonly isFinalization: boolean;
    readonly isInitialization: boolean;
    readonly type: 'ApplyExtrinsic' | 'Finalization' | 'Initialization';
  }

  /** @name FrameSystemLastRuntimeUpgradeInfo (63) */
  interface FrameSystemLastRuntimeUpgradeInfo extends Struct {
    readonly specVersion: Compact<u32>;
    readonly specName: Text;
  }

  /** @name FrameSystemCall (67) */
  interface FrameSystemCall extends Enum {
    readonly isFillBlock: boolean;
    readonly asFillBlock: {
      readonly ratio: Perbill;
    } & Struct;
    readonly isRemark: boolean;
    readonly asRemark: {
      readonly remark: Bytes;
    } & Struct;
    readonly isSetHeapPages: boolean;
    readonly asSetHeapPages: {
      readonly pages: u64;
    } & Struct;
    readonly isSetCode: boolean;
    readonly asSetCode: {
      readonly code: Bytes;
    } & Struct;
    readonly isSetCodeWithoutChecks: boolean;
    readonly asSetCodeWithoutChecks: {
      readonly code: Bytes;
    } & Struct;
    readonly isSetStorage: boolean;
    readonly asSetStorage: {
      readonly items: Vec<ITuple<[Bytes, Bytes]>>;
    } & Struct;
    readonly isKillStorage: boolean;
    readonly asKillStorage: {
      readonly keys_: Vec<Bytes>;
    } & Struct;
    readonly isKillPrefix: boolean;
    readonly asKillPrefix: {
      readonly prefix: Bytes;
      readonly subkeys: u32;
    } & Struct;
    readonly isRemarkWithEvent: boolean;
    readonly asRemarkWithEvent: {
      readonly remark: Bytes;
    } & Struct;
    readonly type: 'FillBlock' | 'Remark' | 'SetHeapPages' | 'SetCode' | 'SetCodeWithoutChecks' | 'SetStorage' | 'KillStorage' | 'KillPrefix' | 'RemarkWithEvent';
  }

  /** @name FrameSystemLimitsBlockWeights (72) */
  interface FrameSystemLimitsBlockWeights extends Struct {
    readonly baseBlock: u64;
    readonly maxBlock: u64;
    readonly perClass: FrameSupportWeightsPerDispatchClassWeightsPerClass;
  }

  /** @name FrameSupportWeightsPerDispatchClassWeightsPerClass (73) */
  interface FrameSupportWeightsPerDispatchClassWeightsPerClass extends Struct {
    readonly normal: FrameSystemLimitsWeightsPerClass;
    readonly operational: FrameSystemLimitsWeightsPerClass;
    readonly mandatory: FrameSystemLimitsWeightsPerClass;
  }

  /** @name FrameSystemLimitsWeightsPerClass (74) */
  interface FrameSystemLimitsWeightsPerClass extends Struct {
    readonly baseExtrinsic: u64;
    readonly maxExtrinsic: Option<u64>;
    readonly maxTotal: Option<u64>;
    readonly reserved: Option<u64>;
  }

  /** @name FrameSystemLimitsBlockLength (76) */
  interface FrameSystemLimitsBlockLength extends Struct {
    readonly max: FrameSupportWeightsPerDispatchClassU32;
  }

  /** @name FrameSupportWeightsPerDispatchClassU32 (77) */
  interface FrameSupportWeightsPerDispatchClassU32 extends Struct {
    readonly normal: u32;
    readonly operational: u32;
    readonly mandatory: u32;
  }

  /** @name FrameSupportWeightsRuntimeDbWeight (78) */
  interface FrameSupportWeightsRuntimeDbWeight extends Struct {
    readonly read: u64;
    readonly write: u64;
  }

  /** @name SpVersionRuntimeVersion (79) */
  interface SpVersionRuntimeVersion extends Struct {
    readonly specName: Text;
    readonly implName: Text;
    readonly authoringVersion: u32;
    readonly specVersion: u32;
    readonly implVersion: u32;
    readonly apis: Vec<ITuple<[U8aFixed, u32]>>;
    readonly transactionVersion: u32;
    readonly stateVersion: u8;
  }

  /** @name FrameSystemError (85) */
  interface FrameSystemError extends Enum {
    readonly isInvalidSpecName: boolean;
    readonly isSpecVersionNeedsToIncrease: boolean;
    readonly isFailedToExtractRuntimeVersion: boolean;
    readonly isNonDefaultComposite: boolean;
    readonly isNonZeroRefCount: boolean;
    readonly isCallFiltered: boolean;
    readonly type: 'InvalidSpecName' | 'SpecVersionNeedsToIncrease' | 'FailedToExtractRuntimeVersion' | 'NonDefaultComposite' | 'NonZeroRefCount' | 'CallFiltered';
  }

  /** @name PalletTimestampCall (87) */
  interface PalletTimestampCall extends Enum {
    readonly isSet: boolean;
    readonly asSet: {
      readonly now: Compact<u64>;
    } & Struct;
    readonly type: 'Set';
  }

  /** @name SpConsensusAuraSr25519AppSr25519Public (90) */
  interface SpConsensusAuraSr25519AppSr25519Public extends SpCoreSr25519Public {}

  /** @name SpCoreSr25519Public (91) */
  interface SpCoreSr25519Public extends U8aFixed {}

  /** @name PalletGrandpaStoredState (94) */
  interface PalletGrandpaStoredState extends Enum {
    readonly isLive: boolean;
    readonly isPendingPause: boolean;
    readonly asPendingPause: {
      readonly scheduledAt: u32;
      readonly delay: u32;
    } & Struct;
    readonly isPaused: boolean;
    readonly isPendingResume: boolean;
    readonly asPendingResume: {
      readonly scheduledAt: u32;
      readonly delay: u32;
    } & Struct;
    readonly type: 'Live' | 'PendingPause' | 'Paused' | 'PendingResume';
  }

  /** @name PalletGrandpaStoredPendingChange (95) */
  interface PalletGrandpaStoredPendingChange extends Struct {
    readonly scheduledAt: u32;
    readonly delay: u32;
    readonly nextAuthorities: Vec<ITuple<[SpFinalityGrandpaAppPublic, u64]>>;
    readonly forced: Option<u32>;
  }

  /** @name PalletGrandpaCall (97) */
  interface PalletGrandpaCall extends Enum {
    readonly isReportEquivocation: boolean;
    readonly asReportEquivocation: {
      readonly equivocationProof: SpFinalityGrandpaEquivocationProof;
      readonly keyOwnerProof: SpCoreVoid;
    } & Struct;
    readonly isReportEquivocationUnsigned: boolean;
    readonly asReportEquivocationUnsigned: {
      readonly equivocationProof: SpFinalityGrandpaEquivocationProof;
      readonly keyOwnerProof: SpCoreVoid;
    } & Struct;
    readonly isNoteStalled: boolean;
    readonly asNoteStalled: {
      readonly delay: u32;
      readonly bestFinalizedBlockNumber: u32;
    } & Struct;
    readonly type: 'ReportEquivocation' | 'ReportEquivocationUnsigned' | 'NoteStalled';
  }

  /** @name SpFinalityGrandpaEquivocationProof (98) */
  interface SpFinalityGrandpaEquivocationProof extends Struct {
    readonly setId: u64;
    readonly equivocation: SpFinalityGrandpaEquivocation;
  }

  /** @name SpFinalityGrandpaEquivocation (99) */
  interface SpFinalityGrandpaEquivocation extends Enum {
    readonly isPrevote: boolean;
    readonly asPrevote: FinalityGrandpaEquivocationPrevote;
    readonly isPrecommit: boolean;
    readonly asPrecommit: FinalityGrandpaEquivocationPrecommit;
    readonly type: 'Prevote' | 'Precommit';
  }

  /** @name FinalityGrandpaEquivocationPrevote (100) */
  interface FinalityGrandpaEquivocationPrevote extends Struct {
    readonly roundNumber: u64;
    readonly identity: SpFinalityGrandpaAppPublic;
    readonly first: ITuple<[FinalityGrandpaPrevote, SpFinalityGrandpaAppSignature]>;
    readonly second: ITuple<[FinalityGrandpaPrevote, SpFinalityGrandpaAppSignature]>;
  }

  /** @name FinalityGrandpaPrevote (101) */
  interface FinalityGrandpaPrevote extends Struct {
    readonly targetHash: H256;
    readonly targetNumber: u32;
  }

  /** @name SpFinalityGrandpaAppSignature (102) */
  interface SpFinalityGrandpaAppSignature extends SpCoreEd25519Signature {}

  /** @name SpCoreEd25519Signature (103) */
  interface SpCoreEd25519Signature extends U8aFixed {}

  /** @name FinalityGrandpaEquivocationPrecommit (106) */
  interface FinalityGrandpaEquivocationPrecommit extends Struct {
    readonly roundNumber: u64;
    readonly identity: SpFinalityGrandpaAppPublic;
    readonly first: ITuple<[FinalityGrandpaPrecommit, SpFinalityGrandpaAppSignature]>;
    readonly second: ITuple<[FinalityGrandpaPrecommit, SpFinalityGrandpaAppSignature]>;
  }

  /** @name FinalityGrandpaPrecommit (107) */
  interface FinalityGrandpaPrecommit extends Struct {
    readonly targetHash: H256;
    readonly targetNumber: u32;
  }

  /** @name SpCoreVoid (109) */
  type SpCoreVoid = Null;

  /** @name PalletGrandpaError (110) */
  interface PalletGrandpaError extends Enum {
    readonly isPauseFailed: boolean;
    readonly isResumeFailed: boolean;
    readonly isChangePending: boolean;
    readonly isTooSoon: boolean;
    readonly isInvalidKeyOwnershipProof: boolean;
    readonly isInvalidEquivocationProof: boolean;
    readonly isDuplicateOffenceReport: boolean;
    readonly type: 'PauseFailed' | 'ResumeFailed' | 'ChangePending' | 'TooSoon' | 'InvalidKeyOwnershipProof' | 'InvalidEquivocationProof' | 'DuplicateOffenceReport';
  }

  /** @name PalletBalancesBalanceLock (112) */
  interface PalletBalancesBalanceLock extends Struct {
    readonly id: U8aFixed;
    readonly amount: u128;
    readonly reasons: PalletBalancesReasons;
  }

  /** @name PalletBalancesReasons (113) */
  interface PalletBalancesReasons extends Enum {
    readonly isFee: boolean;
    readonly isMisc: boolean;
    readonly isAll: boolean;
    readonly type: 'Fee' | 'Misc' | 'All';
  }

  /** @name PalletBalancesReserveData (116) */
  interface PalletBalancesReserveData extends Struct {
    readonly id: U8aFixed;
    readonly amount: u128;
  }

  /** @name PalletBalancesReleases (118) */
  interface PalletBalancesReleases extends Enum {
    readonly isV100: boolean;
    readonly isV200: boolean;
    readonly type: 'V100' | 'V200';
  }

  /** @name PalletBalancesCall (119) */
  interface PalletBalancesCall extends Enum {
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly dest: MultiAddress;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isSetBalance: boolean;
    readonly asSetBalance: {
      readonly who: MultiAddress;
      readonly newFree: Compact<u128>;
      readonly newReserved: Compact<u128>;
    } & Struct;
    readonly isForceTransfer: boolean;
    readonly asForceTransfer: {
      readonly source: MultiAddress;
      readonly dest: MultiAddress;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isTransferKeepAlive: boolean;
    readonly asTransferKeepAlive: {
      readonly dest: MultiAddress;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isTransferAll: boolean;
    readonly asTransferAll: {
      readonly dest: MultiAddress;
      readonly keepAlive: bool;
    } & Struct;
    readonly isForceUnreserve: boolean;
    readonly asForceUnreserve: {
      readonly who: MultiAddress;
      readonly amount: u128;
    } & Struct;
    readonly type: 'Transfer' | 'SetBalance' | 'ForceTransfer' | 'TransferKeepAlive' | 'TransferAll' | 'ForceUnreserve';
  }

  /** @name PalletBalancesError (124) */
  interface PalletBalancesError extends Enum {
    readonly isVestingBalance: boolean;
    readonly isLiquidityRestrictions: boolean;
    readonly isInsufficientBalance: boolean;
    readonly isExistentialDeposit: boolean;
    readonly isKeepAlive: boolean;
    readonly isExistingVestingSchedule: boolean;
    readonly isDeadAccount: boolean;
    readonly isTooManyReserves: boolean;
    readonly type: 'VestingBalance' | 'LiquidityRestrictions' | 'InsufficientBalance' | 'ExistentialDeposit' | 'KeepAlive' | 'ExistingVestingSchedule' | 'DeadAccount' | 'TooManyReserves';
  }

  /** @name PalletTransactionPaymentReleases (126) */
  interface PalletTransactionPaymentReleases extends Enum {
    readonly isV1Ancient: boolean;
    readonly isV2: boolean;
    readonly type: 'V1Ancient' | 'V2';
  }

  /** @name FrameSupportWeightsWeightToFeeCoefficient (128) */
  interface FrameSupportWeightsWeightToFeeCoefficient extends Struct {
    readonly coeffInteger: u128;
    readonly coeffFrac: Perbill;
    readonly negative: bool;
    readonly degree: u8;
  }

  /** @name PalletSudoCall (129) */
  interface PalletSudoCall extends Enum {
    readonly isSudo: boolean;
    readonly asSudo: {
      readonly call: Call;
    } & Struct;
    readonly isSudoUncheckedWeight: boolean;
    readonly asSudoUncheckedWeight: {
      readonly call: Call;
      readonly weight: u64;
    } & Struct;
    readonly isSetKey: boolean;
    readonly asSetKey: {
      readonly new_: MultiAddress;
    } & Struct;
    readonly isSudoAs: boolean;
    readonly asSudoAs: {
      readonly who: MultiAddress;
      readonly call: Call;
    } & Struct;
    readonly type: 'Sudo' | 'SudoUncheckedWeight' | 'SetKey' | 'SudoAs';
  }

  /** @name PalletTemplateCall (131) */
  interface PalletTemplateCall extends Enum {
    readonly isDoSomething: boolean;
    readonly asDoSomething: {
      readonly something: u32;
    } & Struct;
    readonly isCauseError: boolean;
    readonly type: 'DoSomething' | 'CauseError';
  }

  /** @name PalletOrganizationIdentityCall (132) */
  interface PalletOrganizationIdentityCall extends Enum {
    readonly isCreateOrganization: boolean;
    readonly asCreateOrganization: {
      readonly name: Bytes;
    } & Struct;
    readonly isAddMember: boolean;
    readonly asAddMember: {
      readonly who: AccountId32;
    } & Struct;
    readonly isRemoveMember: boolean;
    readonly asRemoveMember: {
      readonly who: AccountId32;
    } & Struct;
    readonly isSetOnboardingAssets: boolean;
    readonly asSetOnboardingAssets: {
      readonly organizationId: AccountId32;
      readonly assets: Option<Vec<PalletOrganizationIdentityAirDropAsset>>;
    } & Struct;
    readonly isOnboarding: boolean;
    readonly asOnboarding: {
      readonly organizationId: AccountId32;
    } & Struct;
    readonly type: 'CreateOrganization' | 'AddMember' | 'RemoveMember' | 'SetOnboardingAssets' | 'Onboarding';
  }

  /** @name PalletOrganizationIdentityAirDropAsset (135) */
  interface PalletOrganizationIdentityAirDropAsset extends Enum {
    readonly isFa: boolean;
    readonly asFa: ITuple<[u32, u128]>;
    readonly isNfa: boolean;
    readonly asNfa: ITuple<[u32, Vec<PalletSupportAttribute>]>;
    readonly type: 'Fa' | 'Nfa';
  }

  /** @name PalletSupportAttribute (137) */
  interface PalletSupportAttribute extends Struct {
    readonly key: Bytes;
    readonly value: PalletSupportAttributeValue;
  }

  /** @name PalletFungibleAssetsCall (140) */
  interface PalletFungibleAssetsCall extends Enum {
    readonly isCreate: boolean;
    readonly asCreate: {
      readonly organizationId: MultiAddress;
      readonly name: Bytes;
      readonly topUpped: Option<PalletFungibleAssetsTopUppedFA>;
      readonly cupGlobal: Option<PalletFungibleAssetsCupFA>;
      readonly cupLocal: Option<PalletFungibleAssetsCupFA>;
    } & Struct;
    readonly isDestroy: boolean;
    readonly asDestroy: {
      readonly organizationId: MultiAddress;
      readonly assetId: Compact<u32>;
    } & Struct;
    readonly type: 'Create' | 'Destroy';
  }

  /** @name PalletFungibleAssetsTopUppedFA (142) */
  interface PalletFungibleAssetsTopUppedFA extends Struct {
    readonly speed: u128;
  }

  /** @name PalletFungibleAssetsCupFA (144) */
  interface PalletFungibleAssetsCupFA extends Struct {
    readonly amount: u128;
  }

  /** @name PalletNonFungibleAssetsCall (146) */
  interface PalletNonFungibleAssetsCall extends Enum {
    readonly isCreate: boolean;
    readonly asCreate: {
      readonly organizationId: MultiAddress;
      readonly name: Bytes;
    } & Struct;
    readonly isDestroy: boolean;
    readonly asDestroy: {
      readonly organizationId: MultiAddress;
      readonly classId: Compact<u32>;
    } & Struct;
    readonly isCreateAttribute: boolean;
    readonly asCreateAttribute: {
      readonly organizationId: MultiAddress;
      readonly classId: Compact<u32>;
      readonly attribute: PalletSupportAttribute;
    } & Struct;
    readonly isRemoveAttribute: boolean;
    readonly asRemoveAttribute: {
      readonly organizationId: MultiAddress;
      readonly classId: Compact<u32>;
      readonly attributeName: Bytes;
    } & Struct;
    readonly isSetCharacteristic: boolean;
    readonly asSetCharacteristic: {
      readonly organizationId: MultiAddress;
      readonly classId: Compact<u32>;
      readonly characteristic: PalletSupportCharacteristicsCharacteristic;
    } & Struct;
    readonly type: 'Create' | 'Destroy' | 'CreateAttribute' | 'RemoveAttribute' | 'SetCharacteristic';
  }

  /** @name PalletSupportCharacteristicsCharacteristic (148) */
  interface PalletSupportCharacteristicsCharacteristic extends Enum {
    readonly isBettor: boolean;
    readonly asBettor: Option<PalletSupportCharacteristicsBettor>;
    readonly isPurchased: boolean;
    readonly asPurchased: Option<PalletSupportCharacteristicsPurchased>;
    readonly type: 'Bettor' | 'Purchased';
  }

  /** @name PalletSupportCharacteristicsBettor (150) */
  interface PalletSupportCharacteristicsBettor extends Struct {
    readonly outcomes: Vec<PalletSupportCharacteristicsBettorBettorOutcome>;
    readonly winnings: Vec<PalletSupportCharacteristicsBettorBettorWinning>;
    readonly rounds: u32;
    readonly drawOutcome: PalletSupportCharacteristicsBettorDrawOutcomeResult;
  }

  /** @name PalletSupportCharacteristicsBettorBettorOutcome (152) */
  interface PalletSupportCharacteristicsBettorBettorOutcome extends Struct {
    readonly name: Bytes;
    readonly probability: u32;
    readonly result: PalletSupportCharacteristicsBettorOutcomeResult;
  }

  /** @name PalletSupportCharacteristicsBettorOutcomeResult (153) */
  interface PalletSupportCharacteristicsBettorOutcomeResult extends Enum {
    readonly isWin: boolean;
    readonly isLose: boolean;
    readonly isDraw: boolean;
    readonly type: 'Win' | 'Lose' | 'Draw';
  }

  /** @name PalletSupportCharacteristicsBettorBettorWinning (156) */
  interface PalletSupportCharacteristicsBettorBettorWinning extends Enum {
    readonly isFa: boolean;
    readonly asFa: ITuple<[u32, u128]>;
    readonly isNfa: boolean;
    readonly asNfa: u32;
    readonly type: 'Fa' | 'Nfa';
  }

  /** @name PalletSupportCharacteristicsBettorDrawOutcomeResult (158) */
  interface PalletSupportCharacteristicsBettorDrawOutcomeResult extends Enum {
    readonly isWin: boolean;
    readonly isLose: boolean;
    readonly isKeep: boolean;
    readonly type: 'Win' | 'Lose' | 'Keep';
  }

  /** @name PalletSupportCharacteristicsPurchased (160) */
  interface PalletSupportCharacteristicsPurchased extends Struct {
    readonly offers: Vec<PalletSupportCharacteristicsPurchasedOffer>;
  }

  /** @name PalletSupportCharacteristicsPurchasedOffer (162) */
  interface PalletSupportCharacteristicsPurchasedOffer extends Struct {
    readonly fa: u32;
    readonly price: u128;
    readonly attributes: Vec<PalletSupportAttribute>;
  }

  /** @name PalletMechanicsCall (164) */
  interface PalletMechanicsCall extends Enum {
    readonly isExecBuyNfa: boolean;
    readonly asExecBuyNfa: {
      readonly classId: u32;
      readonly offerId: u32;
    } & Struct;
    readonly isExecBet: boolean;
    readonly asExecBet: {
      readonly classId: u32;
      readonly assetId: u32;
    } & Struct;
    readonly isUpgrade: boolean;
    readonly asUpgrade: {
      readonly upgrageData: PalletMechanicsMechanicUpgradeData;
    } & Struct;
    readonly type: 'ExecBuyNfa' | 'ExecBet' | 'Upgrade';
  }

  /** @name PalletMechanicsMechanicUpgradeData (165) */
  interface PalletMechanicsMechanicUpgradeData extends Struct {
    readonly mechanicId: PalletSupportMechanicId;
    readonly payload: PalletMechanicsMechanicUpgradePayload;
  }

  /** @name PalletSupportMechanicId (166) */
  interface PalletSupportMechanicId extends Struct {
    readonly accountId: AccountId32;
    readonly nonce: u32;
  }

  /** @name PalletMechanicsMechanicUpgradePayload (167) */
  interface PalletMechanicsMechanicUpgradePayload extends Enum {
    readonly isBet: boolean;
    readonly type: 'Bet';
  }

  /** @name PalletSudoError (168) */
  interface PalletSudoError extends Enum {
    readonly isRequireSudo: boolean;
    readonly type: 'RequireSudo';
  }

  /** @name PalletTemplateError (169) */
  interface PalletTemplateError extends Enum {
    readonly isNoneValue: boolean;
    readonly isStorageOverflow: boolean;
    readonly type: 'NoneValue' | 'StorageOverflow';
  }

  /** @name PalletOrganizationIdentityOrganizationDetails (170) */
  interface PalletOrganizationIdentityOrganizationDetails extends Struct {
    readonly name: Bytes;
    readonly onboardingAssets: Option<Vec<PalletOrganizationIdentityAirDropAsset>>;
  }

  /** @name PalletOrganizationIdentityError (173) */
  interface PalletOrganizationIdentityError extends Enum {
    readonly isNoneValue: boolean;
    readonly isStorageOverflow: boolean;
    readonly isOrganizationExists: boolean;
    readonly isOrganizationNameTooLong: boolean;
    readonly isNotOrganization: boolean;
    readonly isAlreadyMember: boolean;
    readonly isMembershipLimitReached: boolean;
    readonly isInvalidMember: boolean;
    readonly isNotMember: boolean;
    readonly isAlreadyOnboarded: boolean;
    readonly type: 'NoneValue' | 'StorageOverflow' | 'OrganizationExists' | 'OrganizationNameTooLong' | 'NotOrganization' | 'AlreadyMember' | 'MembershipLimitReached' | 'InvalidMember' | 'NotMember' | 'AlreadyOnboarded';
  }

  /** @name PalletFungibleAssetsAssetDetails (174) */
  interface PalletFungibleAssetsAssetDetails extends Struct {
    readonly owner: AccountId32;
    readonly supply: u128;
    readonly accounts: u32;
    readonly references: u32;
    readonly name: Bytes;
    readonly topUpped: Option<PalletFungibleAssetsTopUppedFA>;
    readonly cupGlobal: Option<PalletFungibleAssetsCupFA>;
    readonly cupLocal: Option<PalletFungibleAssetsCupFA>;
  }

  /** @name PalletFungibleAssetsAssetAccount (176) */
  interface PalletFungibleAssetsAssetAccount extends Struct {
    readonly balance: u128;
    readonly reason: PalletFungibleAssetsExistenceReason;
  }

  /** @name PalletFungibleAssetsExistenceReason (177) */
  interface PalletFungibleAssetsExistenceReason extends Enum {
    readonly isConsumer: boolean;
    readonly isSufficient: boolean;
    readonly isDepositHeld: boolean;
    readonly asDepositHeld: u128;
    readonly isDepositRefunded: boolean;
    readonly type: 'Consumer' | 'Sufficient' | 'DepositHeld' | 'DepositRefunded';
  }

  /** @name PalletFungibleAssetsError (181) */
  interface PalletFungibleAssetsError extends Enum {
    readonly isNoneValue: boolean;
    readonly isStorageOverflow: boolean;
    readonly isInUse: boolean;
    readonly isNoAvailableAssetId: boolean;
    readonly isNoPermission: boolean;
    readonly isAssetNameTooLong: boolean;
    readonly isMaxTopUppedAssetsReached: boolean;
    readonly isZeroGlobalCup: boolean;
    readonly isZeroLocalCup: boolean;
    readonly isZeroTopUpped: boolean;
    readonly isTopUppedWithNoCup: boolean;
    readonly isNoAccount: boolean;
    readonly type: 'NoneValue' | 'StorageOverflow' | 'InUse' | 'NoAvailableAssetId' | 'NoPermission' | 'AssetNameTooLong' | 'MaxTopUppedAssetsReached' | 'ZeroGlobalCup' | 'ZeroLocalCup' | 'ZeroTopUpped' | 'TopUppedWithNoCup' | 'NoAccount';
  }

  /** @name PalletSupportTypesNfaClassDetails (182) */
  interface PalletSupportTypesNfaClassDetails extends Struct {
    readonly owner: AccountId32;
    readonly instances: u32;
    readonly attributes: u32;
    readonly name: Bytes;
    readonly bettor: Option<PalletSupportCharacteristicsBettor>;
    readonly purchased: Option<PalletSupportCharacteristicsPurchased>;
  }

  /** @name PalletSupportTypesNfaAssetDetails (186) */
  interface PalletSupportTypesNfaAssetDetails extends Struct {
    readonly owner: AccountId32;
    readonly locked: PalletSupportLocker;
  }

  /** @name PalletSupportLocker (187) */
  interface PalletSupportLocker extends Enum {
    readonly isNone: boolean;
    readonly isMechanic: boolean;
    readonly asMechanic: PalletSupportMechanicId;
    readonly type: 'None' | 'Mechanic';
  }

  /** @name PalletNonFungibleAssetsError (190) */
  interface PalletNonFungibleAssetsError extends Enum {
    readonly isNoneValue: boolean;
    readonly isStorageOverflow: boolean;
    readonly isNoAvailableAssetId: boolean;
    readonly isNoAvailableClassId: boolean;
    readonly isClassNameTooLong: boolean;
    readonly isNoPermission: boolean;
    readonly isUnknownClass: boolean;
    readonly isUnknownAsset: boolean;
    readonly isWrongBettor: boolean;
    readonly isWrongPurchased: boolean;
    readonly isAttributeConversionError: boolean;
    readonly isNumberAttributeValueExceedsMaximum: boolean;
    readonly isStringAttributeLengthLimitExceeded: boolean;
    readonly isAttributeAlreadyExists: boolean;
    readonly isWrongParameter: boolean;
    readonly isUnsupportedCharacteristic: boolean;
    readonly isWrongCharacteristic: boolean;
    readonly isLocked: boolean;
    readonly isCommonError: boolean;
    readonly asCommonError: PalletSupportErrorsCommonError;
    readonly type: 'NoneValue' | 'StorageOverflow' | 'NoAvailableAssetId' | 'NoAvailableClassId' | 'ClassNameTooLong' | 'NoPermission' | 'UnknownClass' | 'UnknownAsset' | 'WrongBettor' | 'WrongPurchased' | 'AttributeConversionError' | 'NumberAttributeValueExceedsMaximum' | 'StringAttributeLengthLimitExceeded' | 'AttributeAlreadyExists' | 'WrongParameter' | 'UnsupportedCharacteristic' | 'WrongCharacteristic' | 'Locked' | 'CommonError';
  }

  /** @name PalletSupportErrorsCommonError (191) */
  interface PalletSupportErrorsCommonError extends Enum {
    readonly isWrongCharacteristic: boolean;
    readonly isWrongBettor: boolean;
    readonly isWrongPurchased: boolean;
    readonly type: 'WrongCharacteristic' | 'WrongBettor' | 'WrongPurchased';
  }

  /** @name PalletMechanicsMechanicDetails (193) */
  interface PalletMechanicsMechanicDetails extends Struct {
    readonly owner: AccountId32;
    readonly timeoutId: u32;
    readonly locked: Vec<PalletSupportLockedAccet>;
    readonly data: PalletMechanicsMechanicData;
  }

  /** @name PalletSupportLockedAccet (195) */
  interface PalletSupportLockedAccet extends Enum {
    readonly isFa: boolean;
    readonly asFa: ITuple<[u32, u128]>;
    readonly isNfa: boolean;
    readonly asNfa: ITuple<[u32, u32]>;
    readonly type: 'Fa' | 'Nfa';
  }

  /** @name PalletMechanicsMechanicData (197) */
  interface PalletMechanicsMechanicData extends Enum {
    readonly isBuyNfa: boolean;
    readonly isBet: boolean;
    readonly asBet: PalletMechanicsMechanicDataBet;
    readonly type: 'BuyNfa' | 'Bet';
  }

  /** @name PalletMechanicsMechanicDataBet (198) */
  interface PalletMechanicsMechanicDataBet extends Struct {
    readonly outcomes: Vec<u32>;
  }

  /** @name PalletMechanicsError (200) */
  interface PalletMechanicsError extends Enum {
    readonly isMechanicsNotAvailable: boolean;
    readonly isInternal: boolean;
    readonly isAssetsExceedsAllowable: boolean;
    readonly isIncompatibleAsset: boolean;
    readonly isIncompatibleData: boolean;
    readonly isNoPermission: boolean;
    readonly type: 'MechanicsNotAvailable' | 'Internal' | 'AssetsExceedsAllowable' | 'IncompatibleAsset' | 'IncompatibleData' | 'NoPermission';
  }

  /** @name SpRuntimeMultiSignature (202) */
  interface SpRuntimeMultiSignature extends Enum {
    readonly isEd25519: boolean;
    readonly asEd25519: SpCoreEd25519Signature;
    readonly isSr25519: boolean;
    readonly asSr25519: SpCoreSr25519Signature;
    readonly isEcdsa: boolean;
    readonly asEcdsa: SpCoreEcdsaSignature;
    readonly type: 'Ed25519' | 'Sr25519' | 'Ecdsa';
  }

  /** @name SpCoreSr25519Signature (203) */
  interface SpCoreSr25519Signature extends U8aFixed {}

  /** @name SpCoreEcdsaSignature (204) */
  interface SpCoreEcdsaSignature extends U8aFixed {}

  /** @name FrameSystemExtensionsCheckNonZeroSender (207) */
  type FrameSystemExtensionsCheckNonZeroSender = Null;

  /** @name FrameSystemExtensionsCheckSpecVersion (208) */
  type FrameSystemExtensionsCheckSpecVersion = Null;

  /** @name FrameSystemExtensionsCheckTxVersion (209) */
  type FrameSystemExtensionsCheckTxVersion = Null;

  /** @name FrameSystemExtensionsCheckGenesis (210) */
  type FrameSystemExtensionsCheckGenesis = Null;

  /** @name FrameSystemExtensionsCheckNonce (213) */
  interface FrameSystemExtensionsCheckNonce extends Compact<u32> {}

  /** @name FrameSystemExtensionsCheckWeight (214) */
  type FrameSystemExtensionsCheckWeight = Null;

  /** @name PalletTransactionPaymentChargeTransactionPayment (215) */
  interface PalletTransactionPaymentChargeTransactionPayment extends Compact<u128> {}

  /** @name FinalbiomeNodeRuntimeRuntime (216) */
  type FinalbiomeNodeRuntimeRuntime = Null;

} // declare module
