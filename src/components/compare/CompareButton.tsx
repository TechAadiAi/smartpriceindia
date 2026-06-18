"use client";

import { GitCompare, Check } from "lucide-react";
import { useCompare } from "@/lib/useCompare";
import { cn } from "@/lib/utils";

interface CompareButtonProps {
  phoneId: string;
  variant?: "card" | "full";
}

export default function CompareButton({
  phoneId,
  variant = "card",
}: CompareButtonProps) {
  const { toggle, isSelected, count, max } = useCompare();
  const selected = isSelected(phoneId);
  const disabled = !selected && count >= max;

  if (variant === "full") {
    return (
      <button
        onClick={() => toggle(phoneId)}
        disabled={disabled}
        title={disabled ? `Max ${max} phones can be compared` : undefined}
        className={cn(
          "flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold border transition-colors",
          selected
            ? "bg-blue-600 border-blue-600 text-white"
            : disabled
            ? "bg-slate-100 dark:bg-gray-800 border-slate-200 dark:border-gray-700 text-slate-400 cursor-not-allowed"
            : "bg-white dark:bg-gray-900 border-slate-200 dark:border-gray-700 text-slate-700 dark:text-slate-300 hover:border-blue-400 dark:hover:border-blue-600"
        )}
      >
        {selected ? <Check size={15} /> : <GitCompare size={15} />}
        {selected ? "Added to Compare" : "Add to Compare"}
      </button>
    );
  }

  // Card variant — small icon button
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        toggle(phoneId);
      }}
      disabled={disabled}
      title={
        selected
          ? "Remove from compare"
          : disabled
          ? `Max ${max} phones`
          : "Add to compare"
      }
      className={cn(
        "absolute bottom-3 right-3 z-10 p-1.5 rounded-lg border text-xs transition-colors",
        selected
          ? "bg-blue-600 border-blue-600 text-white"
          : disabled
          ? "bg-slate-100 dark:bg-gray-800 border-slate-200 dark:border-gray-700 text-slate-300 cursor-not-allowed"
          : "bg-white dark:bg-gray-800 border-slate-200 dark:border-gray-700 text-slate-500 hover:border-blue-400 hover:text-blue-600"
      )}
    >
      {selected ? <Check size={13} /> : <GitCompare size={13} />}
    </button>
  );
}
