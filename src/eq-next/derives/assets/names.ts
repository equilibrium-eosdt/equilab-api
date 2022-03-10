import { ApiInterfaceRx } from "@polkadot/api/types";
import { memo } from "@polkadot/api-derive/util";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { currencyFromU64 } from "../../util";

type AssetNamesQuery = () => Observable<string[]>;

export const names = (
  instanceId: string,
  api: ApiInterfaceRx,
): AssetNamesQuery =>
  // @ts-ignore
  memo(
    instanceId,
    (): Observable<string[]> =>
      // @ts-ignore
      api.query.eqAssets.assets().pipe(
        // @ts-ignore
        map((raw): string[] =>
          raw.unwrap().map((asset) => currencyFromU64(asset.id[0])),
        ),
      ),
  );
