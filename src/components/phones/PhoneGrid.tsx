"use client";

import { useState, useMemo } from "react";
import { SlidersHorizontal, ArrowUpDown } from "lucide-react";
import { Phone, PhoneCategory } from "@/types/phone";
import PhoneCard from "./PhoneCard";
import { cn } from "@/lib/utils";

type SortOption = "price-asc" | "price-desc" | "rating" | "newest";
type FilterTag = PhoneCategory | "all";

interface PhoneGridProps {
  phones: Phone[];
  showFilters?: boolean;
  title?: string;
  subtitle?: string;
}

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "rating", label: "Top Rated" },
  { value: "price-asc", label: "Price: Low → High" },
  { value: "price-desc", label: "Price: High → Low" },
  { value: "newest", label: "Newest First" },
];

const FILTER_TAGS: { value: FilterTag; label: string }[] = [
  { value: "all", label: "All" },
  { value: "mobiles-electronics", label: "Mobiles & Electronics" },
  { value: "fashion-beauty", label: "Fashion & Beauty" },
  { value: "home-furniture", label: "Home & Furniture" },
  { value: "groceries-pets", label: "Groceries & Pets" },
  { value: "books-education", label: "Books & Education" },
  { value: "video-music", label: "Video & Music" },
  { value: "games-live", label: "Games & Live" },
  { value: "pharmacy-household", label: "Pharmacy & Household" },
  { value: "toys-kids", label: "Toys & Kids" },
  { value: "sports-fitness", label: "Sports & Fitness" },
];

export default function PhoneGrid({
  phones,
  showFilters = true,
  title,
  subtitle,
}: PhoneGridProps) {
  const [sort, setSort] = useState<SortOption>("rating");
  const [activeTag, setActiveTag] = useState<FilterTag>("all");
  const [showSortMenu, setShowSortMenu] = useState(false);

  const filtered = useMemo(() => {
    let result = [...phones];

    if (activeTag !== "all") {
      result = result.filter((p) =>
        p.category.includes(activeTag as PhoneCategory)
      );
    }

    result.sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      if (sort === "rating") return b.rating - a.rating;
      if (sort === "newest")
        return (
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        );
      return 0;
    });

    return result;
  }, [phones, sort, activeTag]);

  const currentSortLabel =
    SORT_OPTIONS.find((o) => o.value === sort)?.label ?? "Sort";

  return (
    <div>
      {(title || subtitle) && (
        <div className="mb-6">
          {title && (
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
              {title}
            </h1>
          )}
          {subtitle && (
            <p className="text-slate-500 dark:text-slate-400 mt-1">{subtitle}</p>
          )}
        </div>
      )}

      {showFilters && (
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          {/* Category pills - only show tags that have products on this page */}
          <div className="flex items-center gap-2 flex-wrap flex-1">
            <SlidersHorizontal size={14} className="text-slate-400 flex-shrink-0" />
            {FILTER_TAGS.filter((tag) => tag.value === "all" || phones.some((p) => p.category.includes(tag.value as string))).map((tag) => (
              <button
                key={tag.value}
                onClick={() => setActiveTag(tag.value)}
                className={cn(
                  "px-3 py-1.5 rounded-full text-xs font-semibold transition-colors",
                  activeTag === tag.value
                    ? "bg-orange-500 text-white"
                    : "bg-slate-100 dark:bg-gray-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-gray-700"
                )}
              >
                {tag.label}
              </button>
            ))}
          </div>

          {/* Sort dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowSortMenu(!showSortMenu)}
              className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-700 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-gray-800 transition-colors"
            >
              <ArrowUpDown size={14} />
              {currentSortLabel}
            </button>
            {showSortMenu && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setShowSortMenu(false)}
                />
                <div className="absolute right-0 top-full mt-1 z-20 w-48 bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-700 rounded-xl shadow-lg overflow-hidden">
                  {SORT_OPTIONS.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => {
                        setSort(opt.value);
                        setShowSortMenu(false);
                      }}
                      className={cn(
                        "w-full text-left px-4 py-2.5 text-sm transition-colors",
                        sort === opt.value
                          ? "bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 font-semibold"
                          : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-gray-800"
                      )}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Results count */}
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
        Showing <span className="font-semibold text-slate-700 dark:text-slate-200">{filtered.length}</span> products
      </p>

      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-4xl mb-3">📱</p>
          <p className="text-slate-500 dark:text-slate-400">
            No products match this filter. Try selecting a different category.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((phone) => (
            <PhoneCard key={phone.id} phone={phone} />
          ))}
        </div>
      )}
    </div>
  );
}