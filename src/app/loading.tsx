import { PhoneGridSkeleton } from "@/components/ui/Skeleton";
import Navbar from "@/components/layout/Navbar";

export default function Loading() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page header skeleton */}
        <div className="mb-8 space-y-2 animate-pulse">
          <div className="h-8 w-72 bg-slate-200 dark:bg-gray-700 rounded-lg" />
          <div className="h-4 w-48 bg-slate-100 dark:bg-gray-800 rounded-lg" />
        </div>
        {/* Filter bar skeleton */}
        <div className="flex gap-2 mb-6 animate-pulse">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-8 w-20 bg-slate-200 dark:bg-gray-700 rounded-full" />
          ))}
        </div>
        <PhoneGridSkeleton count={6} />
      </div>
    </>
  );
}
