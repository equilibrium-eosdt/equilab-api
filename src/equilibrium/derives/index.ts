import type { ApiTypes, MethodResult } from "@polkadot/api/types";
import type { DeriveCustom } from "@polkadot/api-base/types";
import type { AnyFunction } from "@polkadot/types/types";
import { CURRENCIES } from "../constants";
import { names } from "./assets/names";
import { ltv } from "./ltv/ltv";
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
  // @ts-ignore
  ltv: { value: ltv },
};

for (const curr of [...CURRENCIES, "Unknown"]) {
  // @ts-ignore
  derives[curr] = { customAccount: createCustomAccount(curr) };
}

export interface ChainDerives<ApiType extends ApiTypes> {
  assets: DeriveSection<ApiType, { names: ReturnType<typeof names> }>;
  ltv: DeriveSection<ApiType, { value: ReturnType<typeof ltv> }>;
}

export default derives;
