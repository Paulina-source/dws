import { CATEGORIES, type Listing } from "@/lib/types";
import { formatPrice } from "@/lib/format";
import CategoryIcon from "./CategoryIcon";

export default function ListingCard({ listing }: { listing: Listing }) {
  const category = CATEGORIES.find((c) => c.id === listing.category);
  const unavailable = listing.status !== "available";

  return (
    <article className="overflow-hidden rounded-lg border border-line bg-surface">
      <div className="relative aspect-[4/3] bg-linear-to-br from-purple to-purple-2">
        <div
          className={`absolute inset-0 grid place-items-center text-gold ${
            unavailable ? "opacity-30" : "opacity-60"
          }`}
        >
          <CategoryIcon id={listing.category} className="h-16 w-16" />
        </div>

        <div
          className="absolute bottom-3 left-0 max-w-[92%] bg-gold py-2 pl-3 pr-4 font-display text-xl font-bold leading-none text-gold-ink"
          style={{ clipPath: "polygon(0 0,100% 0,calc(100% - 10px) 100%,0 100%)" }}
        >
          {formatPrice(listing)}
        </div>

        {unavailable ? (
          <span className="absolute right-2.5 top-2.5 rounded bg-white px-2.5 py-1.5 font-display text-sm font-semibold capitalize leading-none text-red-700">
            {listing.status}
          </span>
        ) : listing.featured ? (
          <span className="absolute right-2.5 top-2.5 rounded bg-purple px-2.5 py-1.5 font-display text-sm font-semibold leading-none text-white">
            Featured
          </span>
        ) : null}
      </div>

      <div className="flex flex-col gap-1 p-4">
        <div className="flex items-center gap-1.5 text-sm text-muted">
          <CategoryIcon id={listing.category} className="h-4 w-4" />
          {category?.label}
        </div>
        <h3 className="font-display text-2xl font-bold leading-tight">
          {listing.title}
        </h3>
        {listing.location && (
          <p className="text-sm text-muted">{listing.location}</p>
        )}
      </div>
    </article>
  );
}