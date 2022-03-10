import type { ApiBase, ApiTypes, RpcMethodResult } from "@polkadot/api/types";
import type { Balance } from "@polkadot/types/interfaces/runtime";
import type { Observable } from "rxjs";

export default <T extends ApiTypes>(api: ApiBase<T>) => {
  const getDy: RpcMethodResult<
    T,
    (poolId: number, i: number, j: number, dx: string) => Observable<Balance>
  > =
    // @ts-ignore
    api.rpc.equilibriumCurveAmm?.getDy;

  const getWithdrawOneCoin: RpcMethodResult<
    T,
    (poolId: number, amount: string, i: number) => Observable<Balance>
    // @ts-ignore
  > = api.rpc.equilibriumCurveAmm?.getWithdrawOneCoin;

  return {
    getDy,
    getWithdrawOneCoin,
  };
};
