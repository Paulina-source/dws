import type { Listing } from "./types";

export const CURRENCY = "GH₵";

export function formatPrice(l: Pick<Listing, "price" | "price_unit">) {
  if (l.price === null) return "Contact for price";
  const unit = l.price_unit ? ` ${l.price_unit}` : "";
  return `${CURRENCY} ${Number(l.price).toLocaleString("en-US")}${unit}`;
}