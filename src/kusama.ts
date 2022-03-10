import type { ApiTypes } from "@polkadot/api-base/types";

import type { AugmentedEvent } from "@polkadot/api-base/types/events";

import type {
  AugmentedSubmittable,
  SubmittableExtrinsic,
  SubmittableExtrinsicFunction,
} from "@polkadot/api-base/types/submittable";

import type { H256 } from "@polkadot/types/interfaces/runtime";

import type {
  XcmErrorV2 as XcmV2TraitsError,
  MultiLocationV1 as XcmV1MultiLocation,
  Outcome as XcmV2TraitsOutcome,
  ResponseV2 as XcmV2Response,
  VersionedMultiAssets as XcmVersionedMultiAssets,
  VersionedMultiLocation as XcmVersionedMultiLocation,
  VersionedXcm as XcmVersionedXcm,
  WeightLimitV2 as XcmV2WeightLimit,
  XcmV2 as XcmV2Xcm,
} from "@polkadot/types/interfaces/xcm";

import type { Option, u32, u64, u8 } from "@polkadot/types-codec";
import type { AnyNumber } from "@polkadot/types-codec/types";

// https://github.com/polkadot-js/api/blob/master/packages/api-augment/src/kusama/events.ts
export interface KusamaEvents<ApiType extends ApiTypes> {
  xcmPallet: {
    /**
     * Some assets have been placed in an asset trap.
     *
     * \[ hash, origin, assets \]
     **/
    AssetsTrapped: AugmentedEvent<
      ApiType,
      [H256, XcmV1MultiLocation, XcmVersionedMultiAssets]
    >;
    /**
     * Execution of an XCM message was attempted.
     *
     * \[ outcome \]
     **/
    Attempted: AugmentedEvent<ApiType, [XcmV2TraitsOutcome]>;
    /**
     * Expected query response has been received but the origin location of the response does
     * not match that expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     *
     * \[ origin location, id, expected location \]
     **/
    InvalidResponder: AugmentedEvent<
      ApiType,
      [XcmV1MultiLocation, u64, Option<XcmV1MultiLocation>]
    >;
    /**
     * Expected query response has been received but the expected origin location placed in
     * storage by this runtime previously cannot be decoded. The query remains registered.
     *
     * This is unexpected (since a location placed in storage in a previously executing
     * runtime should be readable prior to query timeout) and dangerous since the possibly
     * valid response will be dropped. Manual governance intervention is probably going to be
     * needed.
     *
     * \[ origin location, id \]
     **/
    InvalidResponderVersion: AugmentedEvent<ApiType, [XcmV1MultiLocation, u64]>;
    /**
     * Query response has been received and query is removed. The registered notification has
     * been dispatched and executed successfully.
     *
     * \[ id, pallet index, call index \]
     **/
    Notified: AugmentedEvent<ApiType, [u64, u8, u8]>;
    /**
     * Query response has been received and query is removed. The dispatch was unable to be
     * decoded into a `Call`; this might be due to dispatch function having a signature which
     * is not `(origin, QueryId, Response)`.
     *
     * \[ id, pallet index, call index \]
     **/
    NotifyDecodeFailed: AugmentedEvent<ApiType, [u64, u8, u8]>;
    /**
     * Query response has been received and query is removed. There was a general error with
     * dispatching the notification call.
     *
     * \[ id, pallet index, call index \]
     **/
    NotifyDispatchError: AugmentedEvent<ApiType, [u64, u8, u8]>;
    /**
     * Query response has been received and query is removed. The registered notification could
     * not be dispatched because the dispatch weight is greater than the maximum weight
     * originally budgeted by this runtime for the query result.
     *
     * \[ id, pallet index, call index, actual weight, max budgeted weight \]
     **/
    NotifyOverweight: AugmentedEvent<ApiType, [u64, u8, u8, u64, u64]>;
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * migrating the location to our new XCM format.
     *
     * \[ location, query ID \]
     **/
    NotifyTargetMigrationFail: AugmentedEvent<
      ApiType,
      [XcmVersionedMultiLocation, u64]
    >;
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     *
     * \[ location, query ID, error \]
     **/
    NotifyTargetSendFail: AugmentedEvent<
      ApiType,
      [XcmV1MultiLocation, u64, XcmV2TraitsError]
    >;
    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     *
     * \[ id, response \]
     **/
    ResponseReady: AugmentedEvent<ApiType, [u64, XcmV2Response]>;
    /**
     * Received query response has been read and removed.
     *
     * \[ id \]
     **/
    ResponseTaken: AugmentedEvent<ApiType, [u64]>;
    /**
     * A XCM message was sent.
     *
     * \[ origin, destination, message \]
     **/
    Sent: AugmentedEvent<
      ApiType,
      [XcmV1MultiLocation, XcmV1MultiLocation, XcmV2Xcm]
    >;
    /**
     * The supported version of a location has been changed. This might be through an
     * automatic notification or a manual intervention.
     *
     * \[ location, XCM version \]
     **/
    SupportedVersionChanged: AugmentedEvent<ApiType, [XcmV1MultiLocation, u32]>;
    /**
     * Query response received which does not match a registered query. This may be because a
     * matching query was never registered, it may be because it is a duplicate response, or
     * because the query timed out.
     *
     * \[ origin location, id \]
     **/
    UnexpectedResponse: AugmentedEvent<ApiType, [XcmV1MultiLocation, u64]>;
    /**
     * An XCM version change notification message has been attempted to be sent.
     *
     * \[ destination, result \]
     **/
    VersionChangeNotified: AugmentedEvent<ApiType, [XcmV1MultiLocation, u32]>;
    /**
     * Generic event
     **/
    [key: string]: AugmentedEvent<ApiType>;
  };
}
// Copied from https://github.com/polkadot-js/api/blob/master/packages/api-augment/src/kusama/tx.ts
export interface KusamaTx<ApiType extends ApiTypes> {
  xcmPallet: {
    /**
     * Execute an XCM message from a local, signed, origin.
     *
     * An event is deposited indicating whether `msg` could be executed completely or only
     * partially.
     *
     * No more than `max_weight` will be used in its attempted execution. If this is less than the
     * maximum amount of weight that the message could take to be executed, then no execution
     * attempt will be made.
     *
     * NOTE: A successful return to this does *not* imply that the `msg` was executed successfully
     * to completion; only that *some* of it was executed.
     **/
    execute: AugmentedSubmittable<
      (
        message:
          | XcmVersionedXcm
          | { V0: any }
          | { V1: any }
          | { V2: any }
          | string
          | Uint8Array,
        maxWeight: u64 | AnyNumber | Uint8Array,
      ) => SubmittableExtrinsic<ApiType>,
      [XcmVersionedXcm, u64]
    >;
    /**
     * Set a safe XCM version (the version that XCM should be encoded with if the most recent
     * version a destination can accept is unknown).
     *
     * - `origin`: Must be Root.
     * - `maybe_xcm_version`: The default XCM encoding version, or `None` to disable.
     **/
    forceDefaultXcmVersion: AugmentedSubmittable<
      (
        maybeXcmVersion: Option<u32> | null | object | string | Uint8Array,
      ) => SubmittableExtrinsic<ApiType>,
      [Option<u32>]
    >;
    /**
     * Ask a location to notify us regarding their XCM version and any changes to it.
     *
     * - `origin`: Must be Root.
     * - `location`: The location to which we should subscribe for XCM version notifications.
     **/
    forceSubscribeVersionNotify: AugmentedSubmittable<
      (
        location:
          | XcmVersionedMultiLocation
          | { V0: any }
          | { V1: any }
          | string
          | Uint8Array,
      ) => SubmittableExtrinsic<ApiType>,
      [XcmVersionedMultiLocation]
    >;
    /**
     * Require that a particular destination should no longer notify us regarding any XCM
     * version changes.
     *
     * - `origin`: Must be Root.
     * - `location`: The location to which we are currently subscribed for XCM version
     * notifications which we no longer desire.
     **/
    forceUnsubscribeVersionNotify: AugmentedSubmittable<
      (
        location:
          | XcmVersionedMultiLocation
          | { V0: any }
          | { V1: any }
          | string
          | Uint8Array,
      ) => SubmittableExtrinsic<ApiType>,
      [XcmVersionedMultiLocation]
    >;
    /**
     * Extoll that a particular destination can be communicated with through a particular
     * version of XCM.
     *
     * - `origin`: Must be Root.
     * - `location`: The destination that is being described.
     * - `xcm_version`: The latest version of XCM that `location` supports.
     **/
    forceXcmVersion: AugmentedSubmittable<
      (
        location:
          | XcmV1MultiLocation
          | { parents?: any; interior?: any }
          | string
          | Uint8Array,
        xcmVersion: u32 | AnyNumber | Uint8Array,
      ) => SubmittableExtrinsic<ApiType>,
      [XcmV1MultiLocation, u32]
    >;
    /**
     * Transfer some assets from the local chain to the sovereign account of a destination chain and forward
     * a notification XCM.
     *
     * Fee payment on the destination side is made from the first asset listed in the `assets` vector.
     *
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     * from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     * an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
     * `dest` side.
     * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
     * fees.
     * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
     **/
    limitedReserveTransferAssets: AugmentedSubmittable<
      (
        dest:
          | XcmVersionedMultiLocation
          | { V0: any }
          | { V1: any }
          | string
          | Uint8Array,
        beneficiary:
          | XcmVersionedMultiLocation
          | { V0: any }
          | { V1: any }
          | string
          | Uint8Array,
        assets:
          | XcmVersionedMultiAssets
          | { V0: any }
          | { V1: any }
          | string
          | Uint8Array,
        feeAssetItem: u32 | AnyNumber | Uint8Array,
        weightLimit:
          | XcmV2WeightLimit
          | { Unlimited: any }
          | { Limited: any }
          | string
          | Uint8Array,
      ) => SubmittableExtrinsic<ApiType>,
      [
        XcmVersionedMultiLocation,
        XcmVersionedMultiLocation,
        XcmVersionedMultiAssets,
        u32,
        XcmV2WeightLimit,
      ]
    >;
    /**
     * Teleport some assets from the local chain to some destination chain.
     *
     * Fee payment on the destination side is made from the first asset listed in the `assets` vector.
     *
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     * from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     * an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
     * `dest` side. May not be empty.
     * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
     * fees.
     * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
     **/
    limitedTeleportAssets: AugmentedSubmittable<
      (
        dest:
          | XcmVersionedMultiLocation
          | { V0: any }
          | { V1: any }
          | string
          | Uint8Array,
        beneficiary:
          | XcmVersionedMultiLocation
          | { V0: any }
          | { V1: any }
          | string
          | Uint8Array,
        assets:
          | XcmVersionedMultiAssets
          | { V0: any }
          | { V1: any }
          | string
          | Uint8Array,
        feeAssetItem: u32 | AnyNumber | Uint8Array,
        weightLimit:
          | XcmV2WeightLimit
          | { Unlimited: any }
          | { Limited: any }
          | string
          | Uint8Array,
      ) => SubmittableExtrinsic<ApiType>,
      [
        XcmVersionedMultiLocation,
        XcmVersionedMultiLocation,
        XcmVersionedMultiAssets,
        u32,
        XcmV2WeightLimit,
      ]
    >;
    /**
     * Transfer some assets from the local chain to the sovereign account of a destination chain and forward
     * a notification XCM.
     *
     * Fee payment on the destination side is made from the first asset listed in the `assets` vector and
     * fee-weight is calculated locally and thus remote weights are assumed to be equal to
     * local weights.
     *
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     * from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     * an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
     * `dest` side.
     * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
     * fees.
     **/
    reserveTransferAssets: AugmentedSubmittable<
      (
        dest:
          | XcmVersionedMultiLocation
          | { V0: any }
          | { V1: any }
          | string
          | Uint8Array,
        beneficiary:
          | XcmVersionedMultiLocation
          | { V0: any }
          | { V1: any }
          | string
          | Uint8Array,
        assets:
          | XcmVersionedMultiAssets
          | { V0: any }
          | { V1: any }
          | string
          | Uint8Array,
        feeAssetItem: u32 | AnyNumber | Uint8Array,
      ) => SubmittableExtrinsic<ApiType>,
      [
        XcmVersionedMultiLocation,
        XcmVersionedMultiLocation,
        XcmVersionedMultiAssets,
        u32,
      ]
    >;
    send: AugmentedSubmittable<
      (
        dest:
          | XcmVersionedMultiLocation
          | { V0: any }
          | { V1: any }
          | string
          | Uint8Array,
        message:
          | XcmVersionedXcm
          | { V0: any }
          | { V1: any }
          | { V2: any }
          | string
          | Uint8Array,
      ) => SubmittableExtrinsic<ApiType>,
      [XcmVersionedMultiLocation, XcmVersionedXcm]
    >;
    /**
     * Teleport some assets from the local chain to some destination chain.
     *
     * Fee payment on the destination side is made from the first asset listed in the `assets` vector and
     * fee-weight is calculated locally and thus remote weights are assumed to be equal to
     * local weights.
     *
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     * from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     * an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
     * `dest` side. May not be empty.
     * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
     * fees.
     **/
    teleportAssets: AugmentedSubmittable<
      (
        dest:
          | XcmVersionedMultiLocation
          | { V0: any }
          | { V1: any }
          | string
          | Uint8Array,
        beneficiary:
          | XcmVersionedMultiLocation
          | { V0: any }
          | { V1: any }
          | string
          | Uint8Array,
        assets:
          | XcmVersionedMultiAssets
          | { V0: any }
          | { V1: any }
          | string
          | Uint8Array,
        feeAssetItem: u32 | AnyNumber | Uint8Array,
      ) => SubmittableExtrinsic<ApiType>,
      [
        XcmVersionedMultiLocation,
        XcmVersionedMultiLocation,
        XcmVersionedMultiAssets,
        u32,
      ]
    >;
    /**
     * Generic tx
     **/
    [key: string]: SubmittableExtrinsicFunction<ApiType>;
  };
}
