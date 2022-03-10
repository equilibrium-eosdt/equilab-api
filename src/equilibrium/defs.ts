import { equilibrium } from "@equilab/definitions";

export const chainType: "Eq" = "Eq";

export default (specName: string = "Equilibrium") => {
  const typesBundle: any = {
    spec: {
      [specName]: { instances: equilibrium.instances },
    },
  };

  return {
    typesBundle,
    types: equilibrium.types,
  };
};
