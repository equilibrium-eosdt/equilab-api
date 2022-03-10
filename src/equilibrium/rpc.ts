import type {
  ApiBase,
  ApiTypes /*, RpcMethodResult */,
} from "@polkadot/api/types";

// import type { Balance } from "@polkadot/types/interfaces/runtime";
// import type { Observable } from "rxjs";

export default <T extends ApiTypes>(api: ApiBase<T>) => {
  return {};
};
