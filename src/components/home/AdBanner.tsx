import { cn } from "@/lib/utils";

interface AdBannerProps {
  slot?: string;
  className?: string;
  size?: "horizontal" | "rectangle" | "leaderboard";
}

const sizeClasses = {
  horizontal: "h-24 max-w-3xl",
  rectangle: "h-64 max-w-sm",
  leaderboard: "h-24 max-w-5xl",
};

export default function AdBanner({
  slot = "ad-slot-placeholder",
  className,
  size = "horizontal",
}: AdBannerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full flex items-center justify-center bg-slate-100 dark:bg-gray-800 border-2 border-dashed border-slate-300 dark:border-gray-700 rounded-lg",
        sizeClasses[size],
        className
      )}
      data-ad-slot={slot}
    >
      <div className="text-center">
        <p className="text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wide">
          Advertisement
        </p>
        <p className="text-xs text-slate-300 dark:text-slate-600 mt-0.5">
          {size === "leaderboard" ? "728×90" : size === "rectangle" ? "300×250" : "468×60"}
        </p>
      </div>
    </div>
  );
}
