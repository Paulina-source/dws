import { createClient } from "@/lib/supabase/server";
import type { Listing } from "@/lib/types";
import ListingCard from "./ListingCard";

export default async function ListingsSection() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("listings")
    .select("*")
    .order("featured", { ascending: false })
    .order("created_at", { ascending: false });

  const listings = (data ?? []) as Listing[];

  return (
    <>
      <h2 className="mb-5 font-display text-3xl font-bold">
        Latest deals ({listings.length})
      </h2>

      {error ? (
        <p className="rounded border border-red-300 bg-red-50 p-4 text-red-800">
          Could not load listings: {error.message}
        </p>
      ) : listings.length === 0 ? (
        <p className="py-12 text-center text-muted">
          No deals posted yet. Please check back soon.
        </p>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {listings.map((l) => (
            <ListingCard key={l.id} listing={l} />
          ))}
        </div>
      )}
    </>
  );
}