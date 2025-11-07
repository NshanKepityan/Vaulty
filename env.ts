const get = (k: string, fallback = "#") =>
  (process.env[k] ?? "").trim() || fallback;

export const ENV = {
  TAXSPLIT_URL: get("NEXT_PUBLIC_TAXSPLIT_URL"),
  DEXSCREENER_URL: get("NEXT_PUBLIC_DEXSCREENER_URL"),
  JUPITER_URL: get("NEXT_PUBLIC_JUPITER_URL"),
  MINT: get("NEXT_PUBLIC_MINT", "MintAddressHere")
};