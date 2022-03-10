import type { ApiTypes, MethodResult } from "@polkadot/api/types";
import type { DeriveCustom } from "@polkadot/api-base/types";
import type { AnyFunction } from "@polkadot/types/types";
import { equilibriumNext } from "@equilab/definitions";
import { names } from "./assets/names";
import { createCustomAccount } from "./custom-account";

type DeriveSection<
  ApiType extends ApiTypes,
  Section extends Record<string, AnyFunction>
> = {
  [MethodName in keyof Section]: MethodResult<ApiType, Section[MethodName]>;
};

const derives: DeriveCustom = {
  // @ts-ignore
  assets: { names },
};

for (const curr of equilibriumNext.instances.balances) {
  // @ts-ignore
  derives[curr] = { customAccount: createCustomAccount(curr) };
}

export interface ChainDerives<ApiType extends ApiTypes> {
  assets: DeriveSection<
    ApiType,
    {
      names: ReturnType<typeof names>;
    }
  >;
}

export default derives;
