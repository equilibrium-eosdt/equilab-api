import { genshiro } from "@equilab/definitions";

export const chainType: "Gens" = "Gens";

export default (specName: string = "Genshiro") => {
  const typesBundle = {
    spec: {
      [specName]: { instances: genshiro.instances },
    },
  };

  return {
    typesBundle,

    rpc: {
      equilibriumCurveAmm: {
        getDy: {
          description:
            "Calculates the exchange outcome `dy` for a given `i`, `j` and `dx` values",
          params: [
            {
              name: "pool_id",
              type: "PoolId",
            },
            {
              name: "i",
              type: "PoolTokenIndex",
            },
            {
              name: "j",
              type: "PoolTokenIndex",
            },
            {
              name: "dx",
              type: "Balance",
            },
          ],
          type: "Balance",
        },
        getWithdrawOneCoin: {
          description:
            "Calculates the amount received when withdrawing a single coin",
          params: [
            {
              name: "pool_id",
              type: "PoolId",
            },
            {
              name: "token_amount",
              type: "Balance",
            },
            {
              name: "i",
              type: "PoolTokenIndex",
            },
          ],
          type: "Balance",
        },
      },
    },

    types: genshiro.types,
  };
};
