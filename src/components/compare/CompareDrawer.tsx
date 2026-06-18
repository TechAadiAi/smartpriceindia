"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, GitCompare } from "lucide-react";
import { useCompare } from "@/lib/useCompare";
import { phones } from "@/lib/phones";
import { formatPrice } from "@/lib/utils";

export default function CompareDrawer() {
  const { ids, clear, toggle, count } = useCompare();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted || count === 0) return null;

  const selected = ids
    .map((id) => phones.find((p) => p.id === id))
    .filter(Boolean);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-t border-slate-200 dark:border-gray-700 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-4 flex-wrap sm:flex-nowrap">
        {/* Label */}
        <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300 flex-shrink-0">
          <GitCompare size={16} className="text-blue-600" />
          Compare ({count}/2)
        </div>

        {/* Selected phones */}
        <div className="flex items-center gap-3 flex-1 min-w-0">
          {selected.map((phone) =>
            phone ? (
              <div
                key={phone.id}
                className="flex items-center gap-2 bg-slate-50 dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-lg px-3 py-1.5 min-w-0"
              >
                <Image
                  src={phone.image}
                  alt={phone.name}
                  width={28}
                  height={28}
                  className="object-contain flex-shrink-0"
                />
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-slate-900 dark:text-white truncate max-w-[120px]">
                    {phone.name}
                  </p>
                  <p className="text-xs text-slate-500">{formatPrice(phone.price)}</p>
                </div>
                <button
                  onClick={() => toggle(phone.id)}
                  className="ml-1 text-slate-400 hover:text-red-500 flex-shrink-0"
                  aria-label={`Remove ${phone.name}`}
                >
                  <X size={13} />
                </button>
              </div>
            ) : null
          )}

          {/* Empty slot */}
          {count < 2 && (
            <div className="flex items-center justify-center w-36 h-10 border-2 border-dashed border-slate-300 dark:border-gray-600 rounded-lg text-xs text-slate-400 dark:text-slate-500">
              + Add one more
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 flex-shrink-0 ml-auto">
          <button
            onClick={clear}
            className="text-xs text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 underline"
          >
            Clear
          </button>
          {count === 2 ? (
            <Link
              href={`/compare?ids=${ids.join(",")}`}
              className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors"
            >
              <GitCompare size={14} />
              Compare Now
            </Link>
          ) : (
            <button
              disabled
              className="inline-flex items-center gap-1.5 bg-slate-200 dark:bg-gray-700 text-slate-400 text-sm font-semibold px-4 py-2 rounded-xl cursor-not-allowed"
            >
              <GitCompare size={14} />
              Select 2 Phones
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
