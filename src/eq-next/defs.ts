import { equilibriumNext } from "@equilab/definitions";

export const chainType: "EqNext" = "EqNext";

export default (specName: string = "Equilibrium") => {
  const typesBundle = {
    spec: {
      [specName]: { instances: equilibriumNext.instances },
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

    types: equilibriumNext.types,
  };
};
