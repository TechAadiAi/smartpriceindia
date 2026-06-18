import { ReviewPageSkeleton } from "@/components/ui/Skeleton";
import Navbar from "@/components/layout/Navbar";

export default function Loading() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb skeleton */}
        <div className="flex gap-2 mb-6 animate-pulse">
          <div className="h-4 w-12 bg-slate-200 dark:bg-gray-700 rounded" />
          <div className="h-4 w-2 bg-slate-200 dark:bg-gray-700 rounded" />
          <div className="h-4 w-16 bg-slate-200 dark:bg-gray-700 rounded" />
          <div className="h-4 w-2 bg-slate-200 dark:bg-gray-700 rounded" />
          <div className="h-4 w-40 bg-slate-200 dark:bg-gray-700 rounded" />
        </div>
        <ReviewPageSkeleton />
      </div>
    </>
  );
}
