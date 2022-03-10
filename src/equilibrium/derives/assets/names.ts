import { ApiInterfaceRx } from "@polkadot/api/types";
import { memo } from "@polkadot/api-derive/util";
import { Observable, of } from "rxjs";

type AssetsQuery = () => Observable<string[]>;

export const names = (instanceId: string, api: ApiInterfaceRx): AssetsQuery => {
  const instances = (
    api.registry.getModuleInstances(
      api.runtimeVersion.specName.toString(),
      "balances",
    ) ?? []
  ).filter((c) => c !== "Unknown");

  const fn = (): Observable<string[]> => of(instances);

  // @ts-ignore
  return memo(instanceId, fn);
};
