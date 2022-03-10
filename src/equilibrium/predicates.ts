import { Currency } from "./types";

/**
 * @deprecated assets are now dynamic; prefer string type for token instead
 */
export const isCurrency = (currency: string): currency is Currency => {
  // @ts-ignore
  if (global?._displayIsCurrencyDeprecation) {
    console.info("Deprecated", { stack: new Error().stack });
  }

  return (
    typeof currency === "string" && !["Unknown", "UNKNOWN"].includes(currency)
  );
};
