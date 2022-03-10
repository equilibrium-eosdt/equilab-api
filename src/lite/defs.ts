const AccountInfo = JSON.stringify({
  nonce: "u32",
  consumer: "u32",
  providers: "u32",
  sufficients: "u32",
  data: {
    free: "u128",
    reserved: "u128",
    miscFrozen: "u128",
    feeFrozen: "u128",
  },
});

const AssetInstanceV1 = JSON.stringify({
  _enum: {
    Undefined: null,
    Index: "Compact<u128>",
    Array4: "[u8; 4]",
    Array8: "[u8; 8]",
    Array16: "[u8; 16]",
    Array32: "[u8; 32]",
    Blob: "Data",
  },
});

const FungibilityV1 = JSON.stringify({
  _enum: {
    Fungible: "Compact<u128>",
    NonFungible: "AssetInstanceV1",
  },
});

const FrameSystemEventRecord = JSON.stringify({
  phase: {
    _enum: {
      ApplyExtrinsic: "u32",
      Finalization: null,
      Initialization: null,
    },
  },
  event: {
    data: "Vec<Data>",
    index: "[u8; 8]",
    method: "Bytes",
    section: "Bytes",
  },
  topics: "Vec<H256>",
});

const JunctionV1 = JSON.stringify({
  _enum: {
    Parachain: "Compact<u32>",
    AccountId32: {
      network: "NetworkId",
      id: "AccountId",
    },
    AccountIndex64: "Data",
    AccountKey20: "Data",
    PalletInstance: "u8",
    GeneralIndex: "Compact<u128>",
    GeneralKey: "Data",
    OnlyChild: null,
    Plurality: "Data",
  },
});

const JunctionsV1 = JSON.stringify({
  _enum: {
    Here: null,
    X1: "JunctionV1",
    X2: "Data",
    X3: "Data",
    X4: "Data",
    X5: "Data",
    X6: "Data",
    X7: "Data",
    X8: "Data",
  },
});

const MultiAssetV0 = "Data";

const MultiAssetV1 = JSON.stringify({
  id: "XcmAssetId",
  fun: "FungibilityV1",
});

const MultiAssetsV1 = "Vec<MultiAssetV1>";
const MultiAssetsV2 = "MultiAssetsV1";

const MultiLocationV0 = "Data";

const MultiLocationV1 = JSON.stringify({
  parents: "u8",
  interior: "JunctionsV1",
});

const MultiLocationV2 = "MultiLocationV1";
const MultiLocation = "MultiLocationV2";

const NetworkId = JSON.stringify({
  _enum: {
    Any: null,
    Named: "Data",
    Polkadot: null,
    Kusama: null,
  },
});

const XcmAssetId = JSON.stringify({
  _enum: {
    Concrete: "MultiLocation",
    Abstract: "Data",
  },
});

const XcmVersionedMultiAssets = JSON.stringify({
  _enum: {
    V0: "Vec<MultiAssetV0>",
    V1: "MultiAssetsV1",
    V2: "MultiAssetsV2",
  },
});

const XcmVersionedMultiLocation = JSON.stringify({
  _enum: {
    V0: "MultiLocationV0",
    V1: "MultiLocationV1",
    V2: "MultiLocationV2",
  },
});

export default {
  AccountInfo,
  AssetInstanceV1,
  FrameSystemEventRecord,
  FungibilityV1,
  JunctionV1,
  JunctionsV1,
  MultiAssetV0,
  MultiAssetV1,
  MultiAssetsV1,
  MultiAssetsV2,
  MultiLocation,
  MultiLocationV0,
  MultiLocationV1,
  MultiLocationV2,
  NetworkId,
  XcmAssetId,
  XcmVersionedMultiAssets,
  XcmVersionedMultiLocation,
};
