import { cn } from "@/lib/utils";

// ── Base shimmer pulse ─────────────────────────────────
function Shimmer({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "bg-slate-200 dark:bg-gray-700 rounded-lg animate-pulse",
        className
      )}
    />
  );
}

// ── Single phone card skeleton ─────────────────────────
export function PhoneCardSkeleton() {
  return (
    <div className="bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 rounded-xl overflow-hidden">
      {/* Image area */}
      <div className="bg-slate-50 dark:bg-gray-800 p-4 h-48 flex items-center justify-center">
        <Shimmer className="w-32 h-32 rounded-xl" />
      </div>
      {/* Content */}
      <div className="p-4 space-y-3">
        <Shimmer className="h-3 w-16" />
        <Shimmer className="h-4 w-full" />
        <Shimmer className="h-4 w-3/4" />
        <div className="flex gap-1 mt-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <Shimmer key={i} className="w-3 h-3 rounded-sm" />
          ))}
          <Shimmer className="h-3 w-20 ml-1" />
        </div>
        <Shimmer className="h-6 w-28 mt-1" />
        <Shimmer className="h-9 w-full rounded-lg mt-2" />
      </div>
    </div>
  );
}

// ── Grid of card skeletons ──────────────────────────────
export function PhoneGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {Array.from({ length: count }).map((_, i) => (
        <PhoneCardSkeleton key={i} />
      ))}
    </div>
  );
}

// ── Review page skeleton ────────────────────────────────
export function ReviewPageSkeleton() {
  return (
    <div className="grid lg:grid-cols-3 gap-8">
      {/* Left */}
      <div className="space-y-4">
        <div className="bg-slate-50 dark:bg-gray-900 border border-slate-200 dark:border-gray-800 rounded-2xl p-8 flex items-center justify-center h-72">
          <Shimmer className="w-48 h-48 rounded-xl" />
        </div>
        <div className="border border-slate-200 dark:border-gray-800 rounded-2xl p-5 space-y-4">
          <Shimmer className="h-8 w-36" />
          <Shimmer className="h-4 w-28" />
          <Shimmer className="h-12 w-full rounded-xl" />
          <Shimmer className="h-10 w-full rounded-xl" />
        </div>
      </div>
      {/* Right */}
      <div className="lg:col-span-2 space-y-6">
        <div className="space-y-2">
          <Shimmer className="h-4 w-24" />
          <Shimmer className="h-8 w-full" />
          <Shimmer className="h-8 w-3/4" />
          <Shimmer className="h-4 w-48" />
        </div>
        <div className="space-y-2">
          {[...Array(4)].map((_, i) => (
            <Shimmer key={i} className="h-4 w-full" />
          ))}
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <Shimmer className="h-40 rounded-xl" />
          <Shimmer className="h-40 rounded-xl" />
        </div>
        <Shimmer className="h-64 w-full rounded-xl" />
      </div>
    </div>
  );
}

// ── Hero section skeleton ───────────────────────────────
export function HeroSkeleton() {
  return (
    <div className="bg-gradient-to-br from-blue-950 to-indigo-950 py-24">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4">
          <Shimmer className="h-4 w-48 bg-blue-800" />
          <Shimmer className="h-12 w-full bg-blue-800" />
          <Shimmer className="h-12 w-3/4 bg-blue-800" />
          <Shimmer className="h-5 w-full bg-blue-900" />
          <Shimmer className="h-5 w-5/6 bg-blue-900" />
          <div className="flex gap-3 pt-2">
            <Shimmer className="h-12 w-44 rounded-xl bg-blue-700" />
            <Shimmer className="h-12 w-40 rounded-xl bg-blue-800" />
          </div>
        </div>
        <Shimmer className="hidden md:block h-72 rounded-2xl bg-blue-900" />
      </div>
    </div>
  );
}
