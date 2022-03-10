import type { ApiTypes, MethodResult } from "@polkadot/api/types";
import type { DeriveCustom } from "@polkadot/api-base/types";
import type { AnyFunction } from "@polkadot/types/types";
import { genshiro } from "@equilab/definitions";
import { names } from "./assets/names";
import { createCustomAccount } from "./custom-account";
import { bestPrice } from "./dex/best-price";
import { orders } from "./dex/orders";

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
  dex: { bestPrice, orders },
};

for (const curr of genshiro.instances.balances) {
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

  dex: DeriveSection<
    ApiType,
    {
      bestPrice: ReturnType<typeof bestPrice>;
      orders: ReturnType<typeof orders>;
    }
  >;
}

export default derives;
