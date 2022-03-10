const hasProps = <T extends {}>(obj: T, ...props: Array<keyof T>) => {
  if (!obj) {
    return false;
  }

  const keys = Reflect.ownKeys(obj);
  // @ts-ignore
  return props.every((prop) => keys.includes(prop));
};

export interface ChainIdResponse {
  chainId: number;
}

export const isChainIdResponse = (raw: any): raw is ChainIdResponse =>
  hasProps(raw, "chainId");

export interface ExchangesResponse {
  id: number;
  currency: string;
  price: number;
  amount: number;
  blockNumber: number;
  exchangeDate: string;
}

export const isExchangesResponse = (raw: any): raw is ExchangesResponse[] => {
  if (!Array.isArray(raw)) {
    return false;
  } else if (!raw.length) {
    return true;
  }

  return hasProps(
    raw[0],
    "id",
    "currency",
    "price",
    "amount",
    "blockNumber",
    "exchangeDate",
  );
};
