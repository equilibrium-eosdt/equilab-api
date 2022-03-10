import type { DeriveApi } from "@polkadot/api-derive/types";
import { memo } from "@polkadot/api-derive/util";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { currencyFromU64 } from "../../util";

type AssetNamesQuery = () => Observable<string[]>;

export const names = (
  instanceId: string,
  api: DeriveApi,
): AssetNamesQuery =>
  memo(
    instanceId,
    (): Observable<string[]> =>
      api.query.eqAssets.assets().pipe(
        map((raw): string[] =>
          raw.unwrap().map((asset) => currencyFromU64(asset.id[0].toNumber())),
        ),
      ),
  );
