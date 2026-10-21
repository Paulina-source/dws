import Image from "next/image";
import { Suspense } from "react";
import ListingsSection from "@/components/ListingsSection";

function ListingsSkeleton() {
  return (
    <>
      <div className="mb-5 h-9 w-48 animate-pulse rounded bg-line" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="aspect-[4/3] animate-pulse rounded-lg bg-line"
          />
        ))}
      </div>
    </>
  );
}

export default function Home() {
  return (
    <>
      <header className="border-b border-line bg-surface">
        <div className="mx-auto flex max-w-6xl items-center px-5 py-3">
          <Image
            src="/logo.jpg"
            alt="DWS DealsWithShark. Unleash Saving, Dive Into Deals"
            width={701}
            height={147}
            className="h-12 w-auto"
            priority
          />
        </div>
      </header>

      <section
        className="bg-purple px-5 pb-20 pt-12 text-white"
        style={{ clipPath: "polygon(0 0,100% 0,100% calc(100% - 28px),0 100%)" }}
      >
        <div className="mx-auto max-w-6xl">
          <h1 className="max-w-[14ch] font-display text-5xl font-bold leading-[0.95] sm:text-7xl">
            Unleash saving. Dive into deals.
          </h1>
          <p className="mt-4 max-w-[46ch] text-lg text-white/80">
            Car deals, apartment rentals, short-lets and land for sale.
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-5 pb-16 pt-2">
        <Suspense fallback={<ListingsSkeleton />}>
          <ListingsSection />
        </Suspense>
      </main>
    </>
  );
}