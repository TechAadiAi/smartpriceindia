"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  defaultValue?: string;
  placeholder?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function SearchBar({
  defaultValue = "",
  placeholder = "Search phones, brands…",
  className,
  size = "md",
}: SearchBarProps) {
  const [query, setQuery] = useState(defaultValue);
  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    if (q) router.push(`/search?q=${encodeURIComponent(q)}`);
  };

  return (
    <form onSubmit={handleSubmit} className={cn("relative", className)}>
      <Search
        size={size === "lg" ? 20 : 16}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
      />
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className={cn(
          "w-full bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all",
          size === "lg" && "pl-12 pr-10 py-4 text-base",
          size === "md" && "pl-10 pr-8 py-2.5 text-sm",
          size === "sm" && "pl-9 pr-7 py-1.5 text-sm"
        )}
      />
      {query && (
        <button
          type="button"
          onClick={() => setQuery("")}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
          aria-label="Clear search"
        >
          <X size={14} />
        </button>
      )}
    </form>
  );
}
