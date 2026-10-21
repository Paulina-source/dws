import type { CategoryId } from "@/lib/types";

const PATHS: Record<CategoryId, React.ReactNode> = {
  cars: (
    <>
      <path d="M5 16l1.5-5.2A2 2 0 0 1 8.4 9.4h7.2a2 2 0 0 1 1.9 1.4L19 16" />
      <path d="M3.5 16h17v3h-3v-1.5h-11V19h-3z" />
    </>
  ),
  apartments: (
    <>
      <path d="M5 20V5l9-2v17" />
      <path d="M14 9h5v11" />
      <path d="M8 8h3M8 12h3M8 16h3" />
      <path d="M3 20h18" />
    </>
  ),
  shortlets: (
    <>
      <path d="M3 18V7" />
      <path d="M3 14h18v4" />
      <path d="M21 14v-2a3 3 0 0 0-3-3h-7v5" />
      <circle cx="7" cy="11" r="1.6" />
    </>
  ),
  land: (
    <>
      <path d="M3 19l5-9 4 6 3-4 6 7z" />
      <path d="M3 19h18" />
    </>
  ),
  other: (
    <>
      <path d="M3 12V4h8l10 10-8 8z" />
      <circle cx="7.5" cy="8.5" r="1.3" />
    </>
  ),
};

export default function CategoryIcon({
  id,
  className,
}: {
  id: CategoryId;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {PATHS[id]}
    </svg>
  );
}