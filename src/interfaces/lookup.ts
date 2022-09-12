// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

/* eslint-disable sort-keys */

export default {
  /**
   * Lookup3: frame_system::AccountInfo<Index, pallet_balances::AccountData<Balance>>
   **/
  FrameSystemAccountInfo: {
    nonce: 'u32',
    consumers: 'u32',
    providers: 'u32',
    sufficients: 'u32',
    data: 'PalletBalancesAccountData'
  },
  /**
   * Lookup5: pallet_balances::AccountData<Balance>
   **/
  PalletBalancesAccountData: {
    free: 'u128',
    reserved: 'u128',
    miscFrozen: 'u128',
    feeFrozen: 'u128'
  },
  /**
   * Lookup7: frame_support::weights::PerDispatchClass<T>
   **/
  FrameSupportWeightsPerDispatchClassU64: {
    normal: 'u64',
    operational: 'u64',
    mandatory: 'u64'
  },
  /**
   * Lookup11: sp_runtime::generic::digest::Digest
   **/
  SpRuntimeDigest: {
    logs: 'Vec<SpRuntimeDigestDigestItem>'
  },
  /**
   * Lookup13: sp_runtime::generic::digest::DigestItem
   **/
  SpRuntimeDigestDigestItem: {
    _enum: {
      Other: 'Bytes',
      __Unused1: 'Null',
      __Unused2: 'Null',
      __Unused3: 'Null',
      Consensus: '([u8;4],Bytes)',
      Seal: '([u8;4],Bytes)',
      PreRuntime: '([u8;4],Bytes)',
      __Unused7: 'Null',
      RuntimeEnvironmentUpdated: 'Null'
    }
  },
  /**
   * Lookup16: frame_system::EventRecord<finalbiome_node_runtime::Event, primitive_types::H256>
   **/
  FrameSystemEventRecord: {
    phase: 'FrameSystemPhase',
    event: 'Event',
    topics: 'Vec<H256>'
  },
  /**
   * Lookup18: frame_system::pallet::Event<T>
   **/
  FrameSystemEvent: {
    _enum: {
      ExtrinsicSuccess: {
        dispatchInfo: 'FrameSupportWeightsDispatchInfo',
      },
      ExtrinsicFailed: {
        dispatchError: 'SpRuntimeDispatchError',
        dispatchInfo: 'FrameSupportWeightsDispatchInfo',
      },
      CodeUpdated: 'Null',
      NewAccount: {
        account: 'AccountId32',
      },
      KilledAccount: {
        account: 'AccountId32',
      },
      Remarked: {
        _alias: {
          hash_: 'hash',
        },
        sender: 'AccountId32',
        hash_: 'H256'
      }
    }
  },
  /**
   * Lookup19: frame_support::weights::DispatchInfo
   **/
  FrameSupportWeightsDispatchInfo: {
    weight: 'u64',
    class: 'FrameSupportWeightsDispatchClass',
    paysFee: 'FrameSupportWeightsPays'
  },
  /**
   * Lookup20: frame_support::weights::DispatchClass
   **/
  FrameSupportWeightsDispatchClass: {
    _enum: ['Normal', 'Operational', 'Mandatory']
  },
  /**
   * Lookup21: frame_support::weights::Pays
   **/
  FrameSupportWeightsPays: {
    _enum: ['Yes', 'No']
  },
  /**
   * Lookup22: sp_runtime::DispatchError
   **/
  SpRuntimeDispatchError: {
    _enum: {
      Other: 'Null',
      CannotLookup: 'Null',
      BadOrigin: 'Null',
      Module: 'SpRuntimeModuleError',
      ConsumerRemaining: 'Null',
      NoProviders: 'Null',
      TooManyConsumers: 'Null',
      Token: 'SpRuntimeTokenError',
      Arithmetic: 'SpRuntimeArithmeticError',
      Transactional: 'SpRuntimeTransactionalError'
    }
  },
  /**
   * Lookup23: sp_runtime::ModuleError
   **/
  SpRuntimeModuleError: {
    index: 'u8',
    error: '[u8;4]'
  },
  /**
   * Lookup24: sp_runtime::TokenError
   **/
  SpRuntimeTokenError: {
    _enum: ['NoFunds', 'WouldDie', 'BelowMinimum', 'CannotCreate', 'UnknownAsset', 'Frozen', 'Unsupported']
  },
  /**
   * Lookup25: sp_runtime::ArithmeticError
   **/
  SpRuntimeArithmeticError: {
    _enum: ['Underflow', 'Overflow', 'DivisionByZero']
  },
  /**
   * Lookup26: sp_runtime::TransactionalError
   **/
  SpRuntimeTransactionalError: {
    _enum: ['LimitReached', 'NoLayer']
  },
  /**
   * Lookup27: pallet_grandpa::pallet::Event
   **/
  PalletGrandpaEvent: {
    _enum: {
      NewAuthorities: {
        authoritySet: 'Vec<(SpFinalityGrandpaAppPublic,u64)>',
      },
      Paused: 'Null',
      Resumed: 'Null'
    }
  },
  /**
   * Lookup30: sp_finality_grandpa::app::Public
   **/
  SpFinalityGrandpaAppPublic: 'SpCoreEd25519Public',
  /**
   * Lookup31: sp_core::ed25519::Public
   **/
  SpCoreEd25519Public: '[u8;32]',
  /**
   * Lookup32: pallet_balances::pallet::Event<T, I>
   **/
  PalletBalancesEvent: {
    _enum: {
      Endowed: {
        account: 'AccountId32',
        freeBalance: 'u128',
      },
      DustLost: {
        account: 'AccountId32',
        amount: 'u128',
      },
      Transfer: {
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u128',
      },
      BalanceSet: {
        who: 'AccountId32',
        free: 'u128',
        reserved: 'u128',
      },
      Reserved: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Unreserved: {
        who: 'AccountId32',
        amount: 'u128',
      },
      ReserveRepatriated: {
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u128',
        destinationStatus: 'FrameSupportTokensMiscBalanceStatus',
      },
      Deposit: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Withdraw: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Slashed: {
        who: 'AccountId32',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup33: frame_support::traits::tokens::misc::BalanceStatus
   **/
  FrameSupportTokensMiscBalanceStatus: {
    _enum: ['Free', 'Reserved']
  },
  /**
   * Lookup34: pallet_sudo::pallet::Event<T>
   **/
  PalletSudoEvent: {
    _enum: {
      Sudid: {
        sudoResult: 'Result<Null, SpRuntimeDispatchError>',
      },
      KeyChanged: {
        oldSudoer: 'Option<AccountId32>',
      },
      SudoAsDone: {
        sudoResult: 'Result<Null, SpRuntimeDispatchError>'
      }
    }
  },
  /**
   * Lookup38: pallet_template::pallet::Event<T>
   **/
  PalletTemplateEvent: {
    _enum: {
      SomethingStored: '(u32,AccountId32)'
    }
  },
  /**
   * Lookup39: pallet_organization_identity::pallet::Event<T>
   **/
  PalletOrganizationIdentityEvent: {
    _enum: {
      SomethingStored: '(u32,AccountId32)',
      CreatedOrganization: '(Bytes,AccountId32)',
      UpdatedOrganization: 'AccountId32',
      MemberAdded: '(AccountId32,AccountId32)',
      MemberRemoved: '(AccountId32,AccountId32)',
      Onboard: '(AccountId32,AccountId32)'
    }
  },
  /**
   * Lookup40: pallet_fungible_assets::pallet::Event<T>
   **/
  PalletFungibleAssetsEvent: {
    _enum: {
      Created: {
        assetId: 'u32',
        owner: 'AccountId32',
      },
      Issued: {
        assetId: 'u32',
        owner: 'AccountId32',
        totalSupply: 'u128',
      },
      Burned: {
        assetId: 'u32',
        owner: 'AccountId32',
        balance: 'u128',
      },
      SomethingStored: '(u32,AccountId32)',
      Destroyed: {
        assetId: 'u32',
        owner: 'AccountId32'
      }
    }
  },
  /**
   * Lookup43: pallet_non_fungible_assets::pallet::Event<T>
   **/
  PalletNonFungibleAssetsEvent: {
    _enum: {
      Created: {
        classId: 'u32',
        owner: 'AccountId32',
      },
      Destroyed: {
        classId: 'u32',
      },
      Updated: {
        classId: 'u32',
      },
      Issued: {
        classId: 'u32',
        assetId: 'u32',
        owner: 'AccountId32',
      },
      AttributeCreated: {
        classId: 'u32',
        key: 'Bytes',
        value: 'PalletSupportAttributeValue',
      },
      AttributeRemoved: {
        classId: 'u32',
        key: 'Bytes',
      },
      Burned: {
        classId: 'u32',
        assetId: 'u32',
        owner: 'AccountId32',
      },
      SomethingStored: '(u32,AccountId32)'
    }
  },
  /**
   * Lookup47: pallet_support::AttributeValue
   **/
  PalletSupportAttributeValue: {
    _enum: {
      Number: 'PalletSupportNumberAttribute',
      Text: 'Bytes'
    }
  },
  /**
   * Lookup48: pallet_support::NumberAttribute
   **/
  PalletSupportNumberAttribute: {
    numberValue: 'u32',
    numberMax: 'Option<u32>'
  },
  /**
   * Lookup51: pallet_mechanics::pallet::Event<T>
   **/
  PalletMechanicsEvent: {
    _enum: {
      Finished: {
        owner: 'AccountId32',
        id: 'u32',
        result: 'Option<PalletMechanicsEventMechanicResultData>',
      },
      Stopped: {
        owner: 'AccountId32',
        id: 'u32',
        reason: 'PalletMechanicsEventMechanicStopReason'
      }
    }
  },
  /**
   * Lookup53: pallet_mechanics::types::EventMechanicResultData
   **/
  PalletMechanicsEventMechanicResultData: {
    _enum: {
      BuyNfa: 'u32',
      Bet: 'PalletMechanicsEventMechanicResultDataBet'
    }
  },
  /**
   * Lookup54: pallet_mechanics::types::EventMechanicResultDataBet
   **/
  PalletMechanicsEventMechanicResultDataBet: {
    outcomes: 'Vec<u32>',
    result: 'PalletMechanicsBetResult'
  },
  /**
   * Lookup57: pallet_mechanics::types::BetResult
   **/
  PalletMechanicsBetResult: {
    _enum: ['Won', 'Lost', 'Draw']
  },
  /**
   * Lookup58: pallet_mechanics::types::EventMechanicStopReason
   **/
  PalletMechanicsEventMechanicStopReason: {
    _enum: ['UpgradeNeeded']
  },
  /**
   * Lookup59: frame_system::Phase
   **/
  FrameSystemPhase: {
    _enum: {
      ApplyExtrinsic: 'u32',
      Finalization: 'Null',
      Initialization: 'Null'
    }
  },
  /**
   * Lookup63: frame_system::LastRuntimeUpgradeInfo
   **/
  FrameSystemLastRuntimeUpgradeInfo: {
    specVersion: 'Compact<u32>',
    specName: 'Text'
  },
  /**
   * Lookup67: frame_system::pallet::Call<T>
   **/
  FrameSystemCall: {
    _enum: {
      fill_block: {
        ratio: 'Perbill',
      },
      remark: {
        remark: 'Bytes',
      },
      set_heap_pages: {
        pages: 'u64',
      },
      set_code: {
        code: 'Bytes',
      },
      set_code_without_checks: {
        code: 'Bytes',
      },
      set_storage: {
        items: 'Vec<(Bytes,Bytes)>',
      },
      kill_storage: {
        _alias: {
          keys_: 'keys',
        },
        keys_: 'Vec<Bytes>',
      },
      kill_prefix: {
        prefix: 'Bytes',
        subkeys: 'u32',
      },
      remark_with_event: {
        remark: 'Bytes'
      }
    }
  },
  /**
   * Lookup72: frame_system::limits::BlockWeights
   **/
  FrameSystemLimitsBlockWeights: {
    baseBlock: 'u64',
    maxBlock: 'u64',
    perClass: 'FrameSupportWeightsPerDispatchClassWeightsPerClass'
  },
  /**
   * Lookup73: frame_support::weights::PerDispatchClass<frame_system::limits::WeightsPerClass>
   **/
  FrameSupportWeightsPerDispatchClassWeightsPerClass: {
    normal: 'FrameSystemLimitsWeightsPerClass',
    operational: 'FrameSystemLimitsWeightsPerClass',
    mandatory: 'FrameSystemLimitsWeightsPerClass'
  },
  /**
   * Lookup74: frame_system::limits::WeightsPerClass
   **/
  FrameSystemLimitsWeightsPerClass: {
    baseExtrinsic: 'u64',
    maxExtrinsic: 'Option<u64>',
    maxTotal: 'Option<u64>',
    reserved: 'Option<u64>'
  },
  /**
   * Lookup76: frame_system::limits::BlockLength
   **/
  FrameSystemLimitsBlockLength: {
    max: 'FrameSupportWeightsPerDispatchClassU32'
  },
  /**
   * Lookup77: frame_support::weights::PerDispatchClass<T>
   **/
  FrameSupportWeightsPerDispatchClassU32: {
    normal: 'u32',
    operational: 'u32',
    mandatory: 'u32'
  },
  /**
   * Lookup78: frame_support::weights::RuntimeDbWeight
   **/
  FrameSupportWeightsRuntimeDbWeight: {
    read: 'u64',
    write: 'u64'
  },
  /**
   * Lookup79: sp_version::RuntimeVersion
   **/
  SpVersionRuntimeVersion: {
    specName: 'Text',
    implName: 'Text',
    authoringVersion: 'u32',
    specVersion: 'u32',
    implVersion: 'u32',
    apis: 'Vec<([u8;8],u32)>',
    transactionVersion: 'u32',
    stateVersion: 'u8'
  },
  /**
   * Lookup85: frame_system::pallet::Error<T>
   **/
  FrameSystemError: {
    _enum: ['InvalidSpecName', 'SpecVersionNeedsToIncrease', 'FailedToExtractRuntimeVersion', 'NonDefaultComposite', 'NonZeroRefCount', 'CallFiltered']
  },
  /**
   * Lookup87: pallet_timestamp::pallet::Call<T>
   **/
  PalletTimestampCall: {
    _enum: {
      set: {
        now: 'Compact<u64>'
      }
    }
  },
  /**
   * Lookup90: sp_consensus_aura::sr25519::app_sr25519::Public
   **/
  SpConsensusAuraSr25519AppSr25519Public: 'SpCoreSr25519Public',
  /**
   * Lookup91: sp_core::sr25519::Public
   **/
  SpCoreSr25519Public: '[u8;32]',
  /**
   * Lookup94: pallet_grandpa::StoredState<N>
   **/
  PalletGrandpaStoredState: {
    _enum: {
      Live: 'Null',
      PendingPause: {
        scheduledAt: 'u32',
        delay: 'u32',
      },
      Paused: 'Null',
      PendingResume: {
        scheduledAt: 'u32',
        delay: 'u32'
      }
    }
  },
  /**
   * Lookup95: pallet_grandpa::StoredPendingChange<N, Limit>
   **/
  PalletGrandpaStoredPendingChange: {
    scheduledAt: 'u32',
    delay: 'u32',
    nextAuthorities: 'Vec<(SpFinalityGrandpaAppPublic,u64)>',
    forced: 'Option<u32>'
  },
  /**
   * Lookup97: pallet_grandpa::pallet::Call<T>
   **/
  PalletGrandpaCall: {
    _enum: {
      report_equivocation: {
        equivocationProof: 'SpFinalityGrandpaEquivocationProof',
        keyOwnerProof: 'SpCoreVoid',
      },
      report_equivocation_unsigned: {
        equivocationProof: 'SpFinalityGrandpaEquivocationProof',
        keyOwnerProof: 'SpCoreVoid',
      },
      note_stalled: {
        delay: 'u32',
        bestFinalizedBlockNumber: 'u32'
      }
    }
  },
  /**
   * Lookup98: sp_finality_grandpa::EquivocationProof<primitive_types::H256, N>
   **/
  SpFinalityGrandpaEquivocationProof: {
    setId: 'u64',
    equivocation: 'SpFinalityGrandpaEquivocation'
  },
  /**
   * Lookup99: sp_finality_grandpa::Equivocation<primitive_types::H256, N>
   **/
  SpFinalityGrandpaEquivocation: {
    _enum: {
      Prevote: 'FinalityGrandpaEquivocationPrevote',
      Precommit: 'FinalityGrandpaEquivocationPrecommit'
    }
  },
  /**
   * Lookup100: finality_grandpa::Equivocation<sp_finality_grandpa::app::Public, finality_grandpa::Prevote<primitive_types::H256, N>, sp_finality_grandpa::app::Signature>
   **/
  FinalityGrandpaEquivocationPrevote: {
    roundNumber: 'u64',
    identity: 'SpFinalityGrandpaAppPublic',
    first: '(FinalityGrandpaPrevote,SpFinalityGrandpaAppSignature)',
    second: '(FinalityGrandpaPrevote,SpFinalityGrandpaAppSignature)'
  },
  /**
   * Lookup101: finality_grandpa::Prevote<primitive_types::H256, N>
   **/
  FinalityGrandpaPrevote: {
    targetHash: 'H256',
    targetNumber: 'u32'
  },
  /**
   * Lookup102: sp_finality_grandpa::app::Signature
   **/
  SpFinalityGrandpaAppSignature: 'SpCoreEd25519Signature',
  /**
   * Lookup103: sp_core::ed25519::Signature
   **/
  SpCoreEd25519Signature: '[u8;64]',
  /**
   * Lookup106: finality_grandpa::Equivocation<sp_finality_grandpa::app::Public, finality_grandpa::Precommit<primitive_types::H256, N>, sp_finality_grandpa::app::Signature>
   **/
  FinalityGrandpaEquivocationPrecommit: {
    roundNumber: 'u64',
    identity: 'SpFinalityGrandpaAppPublic',
    first: '(FinalityGrandpaPrecommit,SpFinalityGrandpaAppSignature)',
    second: '(FinalityGrandpaPrecommit,SpFinalityGrandpaAppSignature)'
  },
  /**
   * Lookup107: finality_grandpa::Precommit<primitive_types::H256, N>
   **/
  FinalityGrandpaPrecommit: {
    targetHash: 'H256',
    targetNumber: 'u32'
  },
  /**
   * Lookup109: sp_core::Void
   **/
  SpCoreVoid: 'Null',
  /**
   * Lookup110: pallet_grandpa::pallet::Error<T>
   **/
  PalletGrandpaError: {
    _enum: ['PauseFailed', 'ResumeFailed', 'ChangePending', 'TooSoon', 'InvalidKeyOwnershipProof', 'InvalidEquivocationProof', 'DuplicateOffenceReport']
  },
  /**
   * Lookup112: pallet_balances::BalanceLock<Balance>
   **/
  PalletBalancesBalanceLock: {
    id: '[u8;8]',
    amount: 'u128',
    reasons: 'PalletBalancesReasons'
  },
  /**
   * Lookup113: pallet_balances::Reasons
   **/
  PalletBalancesReasons: {
    _enum: ['Fee', 'Misc', 'All']
  },
  /**
   * Lookup116: pallet_balances::ReserveData<ReserveIdentifier, Balance>
   **/
  PalletBalancesReserveData: {
    id: '[u8;8]',
    amount: 'u128'
  },
  /**
   * Lookup118: pallet_balances::Releases
   **/
  PalletBalancesReleases: {
    _enum: ['V1_0_0', 'V2_0_0']
  },
  /**
   * Lookup119: pallet_balances::pallet::Call<T, I>
   **/
  PalletBalancesCall: {
    _enum: {
      transfer: {
        dest: 'MultiAddress',
        value: 'Compact<u128>',
      },
      set_balance: {
        who: 'MultiAddress',
        newFree: 'Compact<u128>',
        newReserved: 'Compact<u128>',
      },
      force_transfer: {
        source: 'MultiAddress',
        dest: 'MultiAddress',
        value: 'Compact<u128>',
      },
      transfer_keep_alive: {
        dest: 'MultiAddress',
        value: 'Compact<u128>',
      },
      transfer_all: {
        dest: 'MultiAddress',
        keepAlive: 'bool',
      },
      force_unreserve: {
        who: 'MultiAddress',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup124: pallet_balances::pallet::Error<T, I>
   **/
  PalletBalancesError: {
    _enum: ['VestingBalance', 'LiquidityRestrictions', 'InsufficientBalance', 'ExistentialDeposit', 'KeepAlive', 'ExistingVestingSchedule', 'DeadAccount', 'TooManyReserves']
  },
  /**
   * Lookup126: pallet_transaction_payment::Releases
   **/
  PalletTransactionPaymentReleases: {
    _enum: ['V1Ancient', 'V2']
  },
  /**
   * Lookup128: frame_support::weights::WeightToFeeCoefficient<Balance>
   **/
  FrameSupportWeightsWeightToFeeCoefficient: {
    coeffInteger: 'u128',
    coeffFrac: 'Perbill',
    negative: 'bool',
    degree: 'u8'
  },
  /**
   * Lookup129: pallet_sudo::pallet::Call<T>
   **/
  PalletSudoCall: {
    _enum: {
      sudo: {
        call: 'Call',
      },
      sudo_unchecked_weight: {
        call: 'Call',
        weight: 'u64',
      },
      set_key: {
        _alias: {
          new_: 'new',
        },
        new_: 'MultiAddress',
      },
      sudo_as: {
        who: 'MultiAddress',
        call: 'Call'
      }
    }
  },
  /**
   * Lookup131: pallet_template::pallet::Call<T>
   **/
  PalletTemplateCall: {
    _enum: {
      do_something: {
        something: 'u32',
      },
      cause_error: 'Null'
    }
  },
  /**
   * Lookup132: pallet_organization_identity::pallet::Call<T>
   **/
  PalletOrganizationIdentityCall: {
    _enum: {
      create_organization: {
        name: 'Bytes',
      },
      add_member: {
        who: 'AccountId32',
      },
      remove_member: {
        who: 'AccountId32',
      },
      set_onboarding_assets: {
        organizationId: 'AccountId32',
        assets: 'Option<Vec<PalletOrganizationIdentityAirDropAsset>>',
      },
      onboarding: {
        organizationId: 'AccountId32'
      }
    }
  },
  /**
   * Lookup135: pallet_organization_identity::types::AirDropAsset
   **/
  PalletOrganizationIdentityAirDropAsset: {
    _enum: {
      Fa: '(u32,u128)',
      Nfa: '(u32,Vec<PalletSupportAttribute>)'
    }
  },
  /**
   * Lookup137: pallet_support::Attribute
   **/
  PalletSupportAttribute: {
    key: 'Bytes',
    value: 'PalletSupportAttributeValue'
  },
  /**
   * Lookup140: pallet_fungible_assets::pallet::Call<T>
   **/
  PalletFungibleAssetsCall: {
    _enum: {
      create: {
        organizationId: 'MultiAddress',
        name: 'Bytes',
        topUpped: 'Option<PalletFungibleAssetsTopUppedFA>',
        cupGlobal: 'Option<PalletFungibleAssetsCupFA>',
        cupLocal: 'Option<PalletFungibleAssetsCupFA>',
      },
      destroy: {
        organizationId: 'MultiAddress',
        assetId: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup142: pallet_fungible_assets::types::TopUppedFA
   **/
  PalletFungibleAssetsTopUppedFA: {
    speed: 'u128'
  },
  /**
   * Lookup144: pallet_fungible_assets::types::CupFA
   **/
  PalletFungibleAssetsCupFA: {
    amount: 'u128'
  },
  /**
   * Lookup146: pallet_non_fungible_assets::pallet::Call<T>
   **/
  PalletNonFungibleAssetsCall: {
    _enum: {
      create: {
        organizationId: 'MultiAddress',
        name: 'Bytes',
      },
      destroy: {
        organizationId: 'MultiAddress',
        classId: 'Compact<u32>',
      },
      create_attribute: {
        organizationId: 'MultiAddress',
        classId: 'Compact<u32>',
        attribute: 'PalletSupportAttribute',
      },
      remove_attribute: {
        organizationId: 'MultiAddress',
        classId: 'Compact<u32>',
        attributeName: 'Bytes',
      },
      set_characteristic: {
        organizationId: 'MultiAddress',
        classId: 'Compact<u32>',
        characteristic: 'PalletSupportCharacteristicsCharacteristic'
      }
    }
  },
  /**
   * Lookup148: pallet_support::characteristics::Characteristic
   **/
  PalletSupportCharacteristicsCharacteristic: {
    _enum: {
      Bettor: 'Option<PalletSupportCharacteristicsBettor>',
      Purchased: 'Option<PalletSupportCharacteristicsPurchased>'
    }
  },
  /**
   * Lookup150: pallet_support::characteristics::bettor::Bettor
   **/
  PalletSupportCharacteristicsBettor: {
    outcomes: 'Vec<PalletSupportCharacteristicsBettorBettorOutcome>',
    winnings: 'Vec<PalletSupportCharacteristicsBettorBettorWinning>',
    rounds: 'u32',
    drawOutcome: 'PalletSupportCharacteristicsBettorDrawOutcomeResult'
  },
  /**
   * Lookup152: pallet_support::characteristics::bettor::BettorOutcome
   **/
  PalletSupportCharacteristicsBettorBettorOutcome: {
    name: 'Bytes',
    probability: 'u32',
    result: 'PalletSupportCharacteristicsBettorOutcomeResult'
  },
  /**
   * Lookup153: pallet_support::characteristics::bettor::OutcomeResult
   **/
  PalletSupportCharacteristicsBettorOutcomeResult: {
    _enum: ['Win', 'Lose', 'Draw']
  },
  /**
   * Lookup156: pallet_support::characteristics::bettor::BettorWinning
   **/
  PalletSupportCharacteristicsBettorBettorWinning: {
    _enum: {
      Fa: '(u32,u128)',
      Nfa: 'u32'
    }
  },
  /**
   * Lookup158: pallet_support::characteristics::bettor::DrawOutcomeResult
   **/
  PalletSupportCharacteristicsBettorDrawOutcomeResult: {
    _enum: ['Win', 'Lose', 'Keep']
  },
  /**
   * Lookup160: pallet_support::characteristics::purchased::Purchased
   **/
  PalletSupportCharacteristicsPurchased: {
    offers: 'Vec<PalletSupportCharacteristicsPurchasedOffer>'
  },
  /**
   * Lookup162: pallet_support::characteristics::purchased::Offer
   **/
  PalletSupportCharacteristicsPurchasedOffer: {
    fa: 'u32',
    price: 'u128',
    attributes: 'Vec<PalletSupportAttribute>'
  },
  /**
   * Lookup164: pallet_mechanics::pallet::Call<T>
   **/
  PalletMechanicsCall: {
    _enum: {
      exec_buy_nfa: {
        classId: 'u32',
        offerId: 'u32',
      },
      exec_bet: {
        classId: 'u32',
        assetId: 'u32',
      },
      upgrade: {
        upgrageData: 'PalletMechanicsMechanicUpgradeData'
      }
    }
  },
  /**
   * Lookup165: pallet_mechanics::types::MechanicUpgradeData<sp_core::crypto::AccountId32, Index>
   **/
  PalletMechanicsMechanicUpgradeData: {
    mechanicId: 'PalletSupportMechanicId',
    payload: 'PalletMechanicsMechanicUpgradePayload'
  },
  /**
   * Lookup166: pallet_support::MechanicId<sp_core::crypto::AccountId32, Index>
   **/
  PalletSupportMechanicId: {
    accountId: 'AccountId32',
    nonce: 'u32'
  },
  /**
   * Lookup167: pallet_mechanics::types::MechanicUpgradePayload
   **/
  PalletMechanicsMechanicUpgradePayload: {
    _enum: ['Bet']
  },
  /**
   * Lookup168: pallet_sudo::pallet::Error<T>
   **/
  PalletSudoError: {
    _enum: ['RequireSudo']
  },
  /**
   * Lookup169: pallet_template::pallet::Error<T>
   **/
  PalletTemplateError: {
    _enum: ['NoneValue', 'StorageOverflow']
  },
  /**
   * Lookup170: pallet_organization_identity::types::OrganizationDetails<frame_support::storage::bounded_vec::BoundedVec<T, S>>
   **/
  PalletOrganizationIdentityOrganizationDetails: {
    name: 'Bytes',
    onboardingAssets: 'Option<Vec<PalletOrganizationIdentityAirDropAsset>>'
  },
  /**
   * Lookup173: pallet_organization_identity::pallet::Error<T>
   **/
  PalletOrganizationIdentityError: {
    _enum: ['NoneValue', 'StorageOverflow', 'OrganizationExists', 'OrganizationNameTooLong', 'NotOrganization', 'AlreadyMember', 'MembershipLimitReached', 'InvalidMember', 'NotMember', 'AlreadyOnboarded']
  },
  /**
   * Lookup174: pallet_fungible_assets::types::AssetDetails<sp_core::crypto::AccountId32, frame_support::storage::bounded_vec::BoundedVec<T, S>>
   **/
  PalletFungibleAssetsAssetDetails: {
    owner: 'AccountId32',
    supply: 'u128',
    accounts: 'u32',
    references: 'u32',
    name: 'Bytes',
    topUpped: 'Option<PalletFungibleAssetsTopUppedFA>',
    cupGlobal: 'Option<PalletFungibleAssetsCupFA>',
    cupLocal: 'Option<PalletFungibleAssetsCupFA>'
  },
  /**
   * Lookup176: pallet_fungible_assets::types::AssetAccount
   **/
  PalletFungibleAssetsAssetAccount: {
    balance: 'u128',
    reason: 'PalletFungibleAssetsExistenceReason'
  },
  /**
   * Lookup177: pallet_fungible_assets::types::ExistenceReason
   **/
  PalletFungibleAssetsExistenceReason: {
    _enum: {
      Consumer: 'Null',
      Sufficient: 'Null',
      DepositHeld: 'u128',
      DepositRefunded: 'Null'
    }
  },
  /**
   * Lookup181: pallet_fungible_assets::pallet::Error<T>
   **/
  PalletFungibleAssetsError: {
    _enum: ['NoneValue', 'StorageOverflow', 'InUse', 'NoAvailableAssetId', 'NoPermission', 'AssetNameTooLong', 'MaxTopUppedAssetsReached', 'ZeroGlobalCup', 'ZeroLocalCup', 'ZeroTopUpped', 'TopUppedWithNoCup', 'NoAccount']
  },
  /**
   * Lookup182: pallet_support::types_nfa::ClassDetails<sp_core::crypto::AccountId32>
   **/
  PalletSupportTypesNfaClassDetails: {
    owner: 'AccountId32',
    instances: 'u32',
    attributes: 'u32',
    name: 'Bytes',
    bettor: 'Option<PalletSupportCharacteristicsBettor>',
    purchased: 'Option<PalletSupportCharacteristicsPurchased>'
  },
  /**
   * Lookup186: pallet_support::types_nfa::AssetDetails<sp_core::crypto::AccountId32, Index>
   **/
  PalletSupportTypesNfaAssetDetails: {
    owner: 'AccountId32',
    locked: 'PalletSupportLocker'
  },
  /**
   * Lookup187: pallet_support::Locker<sp_core::crypto::AccountId32, Index>
   **/
  PalletSupportLocker: {
    _enum: {
      None: 'Null',
      Mechanic: 'PalletSupportMechanicId'
    }
  },
  /**
   * Lookup190: pallet_non_fungible_assets::pallet::Error<T>
   **/
  PalletNonFungibleAssetsError: {
    _enum: {
      NoneValue: 'Null',
      StorageOverflow: 'Null',
      NoAvailableAssetId: 'Null',
      NoAvailableClassId: 'Null',
      ClassNameTooLong: 'Null',
      NoPermission: 'Null',
      UnknownClass: 'Null',
      UnknownAsset: 'Null',
      WrongBettor: 'Null',
      WrongPurchased: 'Null',
      AttributeConversionError: 'Null',
      NumberAttributeValueExceedsMaximum: 'Null',
      StringAttributeLengthLimitExceeded: 'Null',
      AttributeAlreadyExists: 'Null',
      WrongParameter: 'Null',
      UnsupportedCharacteristic: 'Null',
      WrongCharacteristic: 'Null',
      Locked: 'Null',
      CommonError: 'PalletSupportErrorsCommonError'
    }
  },
  /**
   * Lookup191: pallet_support::errors::CommonError
   **/
  PalletSupportErrorsCommonError: {
    _enum: ['WrongCharacteristic', 'WrongBettor', 'WrongPurchased']
  },
  /**
   * Lookup193: pallet_mechanics::types::MechanicDetails<sp_core::crypto::AccountId32, BlockNumber>
   **/
  PalletMechanicsMechanicDetails: {
    owner: 'AccountId32',
    timeoutId: 'u32',
    locked: 'Vec<PalletSupportLockedAccet>',
    data: 'PalletMechanicsMechanicData'
  },
  /**
   * Lookup195: pallet_support::LockedAccet
   **/
  PalletSupportLockedAccet: {
    _enum: {
      Fa: '(u32,u128)',
      Nfa: '(u32,u32)'
    }
  },
  /**
   * Lookup197: pallet_mechanics::types::MechanicData
   **/
  PalletMechanicsMechanicData: {
    _enum: {
      BuyNfa: 'Null',
      Bet: 'PalletMechanicsMechanicDataBet'
    }
  },
  /**
   * Lookup198: pallet_mechanics::types::MechanicDataBet
   **/
  PalletMechanicsMechanicDataBet: {
    outcomes: 'Vec<u32>'
  },
  /**
   * Lookup200: pallet_mechanics::pallet::Error<T>
   **/
  PalletMechanicsError: {
    _enum: ['MechanicsNotAvailable', 'Internal', 'AssetsExceedsAllowable', 'IncompatibleAsset', 'IncompatibleData', 'NoPermission']
  },
  /**
   * Lookup202: sp_runtime::MultiSignature
   **/
  SpRuntimeMultiSignature: {
    _enum: {
      Ed25519: 'SpCoreEd25519Signature',
      Sr25519: 'SpCoreSr25519Signature',
      Ecdsa: 'SpCoreEcdsaSignature'
    }
  },
  /**
   * Lookup203: sp_core::sr25519::Signature
   **/
  SpCoreSr25519Signature: '[u8;64]',
  /**
   * Lookup204: sp_core::ecdsa::Signature
   **/
  SpCoreEcdsaSignature: '[u8;65]',
  /**
   * Lookup207: frame_system::extensions::check_non_zero_sender::CheckNonZeroSender<T>
   **/
  FrameSystemExtensionsCheckNonZeroSender: 'Null',
  /**
   * Lookup208: frame_system::extensions::check_spec_version::CheckSpecVersion<T>
   **/
  FrameSystemExtensionsCheckSpecVersion: 'Null',
  /**
   * Lookup209: frame_system::extensions::check_tx_version::CheckTxVersion<T>
   **/
  FrameSystemExtensionsCheckTxVersion: 'Null',
  /**
   * Lookup210: frame_system::extensions::check_genesis::CheckGenesis<T>
   **/
  FrameSystemExtensionsCheckGenesis: 'Null',
  /**
   * Lookup213: frame_system::extensions::check_nonce::CheckNonce<T>
   **/
  FrameSystemExtensionsCheckNonce: 'Compact<u32>',
  /**
   * Lookup214: frame_system::extensions::check_weight::CheckWeight<T>
   **/
  FrameSystemExtensionsCheckWeight: 'Null',
  /**
   * Lookup215: pallet_transaction_payment::ChargeTransactionPayment<T>
   **/
  PalletTransactionPaymentChargeTransactionPayment: 'Compact<u128>',
  /**
   * Lookup216: finalbiome_node_runtime::Runtime
   **/
  FinalbiomeNodeRuntimeRuntime: 'Null'
};
