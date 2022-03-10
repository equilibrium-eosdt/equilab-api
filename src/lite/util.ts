import { blake2AsHex } from "@polkadot/util-crypto";

export const blake2Concat = (input: Uint8Array) => {
  const inputHash = blake2AsHex(input, 128);

  const inputHex = [...input]
    .map((x) => x.toString(16).padStart(2, "0"))
    .join("");

  return `${inputHash}${inputHex}`;
};
