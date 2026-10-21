export const CATEGORIES = [
  { id: "cars", label: "Cars" },
  { id: "apartments", label: "Apartments" },
  { id: "shortlets", label: "Short-lets" },
  { id: "land", label: "Land" },
  { id: "other", label: "Other deals" },
] as const;

export type CategoryId = (typeof CATEGORIES)[number]["id"];
export type ListingStatus = "available" | "sold" | "rented" | "booked";

export type Listing = {
  id: string;
  category: CategoryId;
  title: string;
  description: string;
  price: number | null;
  price_unit: "" | "/ night" | "/ month" | "/ year";
  location: string;
  status: ListingStatus;
  featured: boolean;
  facts: [string, string][];
  images: string[];
  created_at: string;
  updated_at: string;
};