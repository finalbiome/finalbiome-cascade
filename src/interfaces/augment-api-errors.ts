// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/errors';

import type { ApiTypes, AugmentedError } from '@polkadot/api-base/types';

export type __AugmentedError<ApiType extends ApiTypes> = AugmentedError<ApiType>;

declare module '@polkadot/api-base/types/errors' {
  interface AugmentedErrors<ApiType extends ApiTypes> {
    balances: {
      /**
       * Beneficiary account must pre-exist
       **/
      DeadAccount: AugmentedError<ApiType>;
      /**
       * Value too low to create account due to existential deposit
       **/
      ExistentialDeposit: AugmentedError<ApiType>;
      /**
       * A vesting schedule already exists for this account
       **/
      ExistingVestingSchedule: AugmentedError<ApiType>;
      /**
       * Balance too low to send value
       **/
      InsufficientBalance: AugmentedError<ApiType>;
      /**
       * Transfer/payment would kill account
       **/
      KeepAlive: AugmentedError<ApiType>;
      /**
       * Account liquidity restrictions prevent withdrawal
       **/
      LiquidityRestrictions: AugmentedError<ApiType>;
      /**
       * Number of named reserves exceed MaxReserves
       **/
      TooManyReserves: AugmentedError<ApiType>;
      /**
       * Vesting balance too high to send value
       **/
      VestingBalance: AugmentedError<ApiType>;
    };
    fungibleAssets: {
      /**
       * Asset name is too long.
       **/
      AssetNameTooLong: AugmentedError<ApiType>;
      /**
       * The asset ID is already taken.
       **/
      InUse: AugmentedError<ApiType>;
      /**
       * Limit of tipupped assets is reached.
       **/
      MaxTopUppedAssetsReached: AugmentedError<ApiType>;
      /**
       * The account to alter does not exist.
       **/
      NoAccount: AugmentedError<ApiType>;
      NoAvailableAssetId: AugmentedError<ApiType>;
      /**
       * Error names should be descriptive.
       **/
      NoneValue: AugmentedError<ApiType>;
      /**
       * The signing account has no permission to do the operation.
       **/
      NoPermission: AugmentedError<ApiType>;
      /**
       * Errors should have helpful documentation associated with them.
       **/
      StorageOverflow: AugmentedError<ApiType>;
      /**
       * Top upped speed can't be set without a local cup.
       **/
      TopUppedWithNoCup: AugmentedError<ApiType>;
      /**
       * Global Cup must be above zero.
       **/
      ZeroGlobalCup: AugmentedError<ApiType>;
      /**
       * Local Cup must be above zero.
       **/
      ZeroLocalCup: AugmentedError<ApiType>;
      /**
       * Top upped speed must be above zero.
       **/
      ZeroTopUpped: AugmentedError<ApiType>;
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
    mechanics: {
      /**
       * The number of assets exceeds the allowable
       **/
      AssetsExceedsAllowable: AugmentedError<ApiType>;
      /**
       * Asset is incompatible with mechanic
       **/
      IncompatibleAsset: AugmentedError<ApiType>;
      /**
       * Given data is incompatible with mechanic
       **/
      IncompatibleData: AugmentedError<ApiType>;
      /**
       * Internal error
       **/
      Internal: AugmentedError<ApiType>;
      /**
       * Mechanics are not available for this asset or this origin
       **/
      MechanicsNotAvailable: AugmentedError<ApiType>;
      /**
       * The signing account has no permission to do the operation.
       **/
      NoPermission: AugmentedError<ApiType>;
    };
    nonFungibleAssets: {
      /**
       * An attribute with the specified name already exists
       **/
      AttributeAlreadyExists: AugmentedError<ApiType>;
      /**
       * Attribute value not supported
       **/
      AttributeConversionError: AugmentedError<ApiType>;
      /**
       * Class name is too long.
       **/
      ClassNameTooLong: AugmentedError<ApiType>;
      /**
       * The common error
       **/
      CommonError: AugmentedError<ApiType>;
      /**
       * The asset instance is locked
       **/
      Locked: AugmentedError<ApiType>;
      NoAvailableAssetId: AugmentedError<ApiType>;
      NoAvailableClassId: AugmentedError<ApiType>;
      /**
       * Error names should be descriptive.
       **/
      NoneValue: AugmentedError<ApiType>;
      /**
       * The signing account has no permission to do the operation.
       **/
      NoPermission: AugmentedError<ApiType>;
      /**
       * Attribute numeric value exceeds maximum value
       **/
      NumberAttributeValueExceedsMaximum: AugmentedError<ApiType>;
      /**
       * Errors should have helpful documentation associated with them.
       **/
      StorageOverflow: AugmentedError<ApiType>;
      /**
       * String attribute length limit exceeded
       **/
      StringAttributeLengthLimitExceeded: AugmentedError<ApiType>;
      /**
       * The given asset Id is unknown.
       **/
      UnknownAsset: AugmentedError<ApiType>;
      /**
       * The given class Id is unknown.
       **/
      UnknownClass: AugmentedError<ApiType>;
      /**
       * This characteristic is not supported by this asset
       **/
      UnsupportedCharacteristic: AugmentedError<ApiType>;
      /**
       * The bettor characteristic is wrong.
       **/
      WrongBettor: AugmentedError<ApiType>;
      /**
       * Characteristic is invalid
       **/
      WrongCharacteristic: AugmentedError<ApiType>;
      /**
       * General error if any parameter is invalid
       **/
      WrongParameter: AugmentedError<ApiType>;
      /**
       * The purchased characteristic is wrong.
       **/
      WrongPurchased: AugmentedError<ApiType>;
    };
    organizationIdentity: {
      /**
       * Cannot add a user to an organization to which they already belong.
       **/
      AlreadyMember: AugmentedError<ApiType>;
      /**
       * Account has already been onboarded.
       **/
      AlreadyOnboarded: AugmentedError<ApiType>;
      /**
       * Cannot add organization as an organization's member.
       **/
      InvalidMember: AugmentedError<ApiType>;
      /**
       * Cannot add another member because the limit is already reached.
       **/
      MembershipLimitReached: AugmentedError<ApiType>;
      /**
       * Error names should be descriptive.
       **/
      NoneValue: AugmentedError<ApiType>;
      /**
       * Member not exits.
       **/
      NotMember: AugmentedError<ApiType>;
      /**
       * Account is not an organization
       **/
      NotOrganization: AugmentedError<ApiType>;
      /**
       * Cannot create the organization because it already exists.
       **/
      OrganizationExists: AugmentedError<ApiType>;
      /**
       * Organization name is too long.
       **/
      OrganizationNameTooLong: AugmentedError<ApiType>;
      /**
       * Errors should have helpful documentation associated with them.
       **/
      StorageOverflow: AugmentedError<ApiType>;
    };
    sudo: {
      /**
       * Sender must be the Sudo account
       **/
      RequireSudo: AugmentedError<ApiType>;
    };
    system: {
      /**
       * The origin filter prevent the call to be dispatched.
       **/
      CallFiltered: AugmentedError<ApiType>;
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
    templateModule: {
      /**
       * Error names should be descriptive.
       **/
      NoneValue: AugmentedError<ApiType>;
      /**
       * Errors should have helpful documentation associated with them.
       **/
      StorageOverflow: AugmentedError<ApiType>;
    };
  } // AugmentedErrors
} // declare module
