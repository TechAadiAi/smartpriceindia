import { cn } from "@/lib/utils";

const badgeStyles: Record<string, string> = {
  "Best Seller": "bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-400",
  "Editor's Pick": "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-400",
  "New": "bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-400",
  "Budget King": "bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-400",
  "Value Pick": "bg-teal-100 text-teal-700 dark:bg-teal-950 dark:text-teal-400",
  "Trending": "bg-pink-100 text-pink-700 dark:bg-pink-950 dark:text-pink-400",
  "Top Deal": "bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-400",
};

interface BadgeProps {
  label: string;
  className?: string;
}

export default function Badge({ label, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-0.5 rounded-md text-xs font-semibold",
        badgeStyles[label] ?? "bg-slate-100 text-slate-600 dark:bg-gray-800 dark:text-slate-300",
        className
      )}
    >
      {label}
    </span>
  );
}
