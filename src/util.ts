const capitalize = (str: string) =>
  str.slice(0, 1).toUpperCase() + str.slice(1);

export interface BNLike {
  toNumber(): number;
}

export const tokenFromAsset = ({ 0: u64 }: { 0: number | BNLike }) => {
  const bytes: number[] = [];
  let num = typeof u64 === "number" ? u64 : u64.toNumber();

  do {
    bytes.unshift(num % 256);
    num = Math.floor(num / 256);
  } while (num > 0);

  return capitalize(Buffer.from(bytes).toString("utf8"));
};

export const assetFromToken = (currency: string) => {
  const buf = Buffer.from(currency.toLowerCase());
  const size = buf.length;

  return {
    0: buf.reduce(
      (val, digit, i) => val + Math.pow(256, size - 1 - i) * digit,
      0,
    ),
  };
};
