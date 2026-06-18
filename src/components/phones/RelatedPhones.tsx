import Link from "next/link";
import Image from "next/image";
import { Star, ArrowRight } from "lucide-react";
import { Phone } from "@/types/phone";
import { formatPrice } from "@/lib/utils";
import Badge from "@/components/ui/Badge";

interface RelatedPhonesProps {
  currentPhone: Phone;
  allPhones: Phone[];
}

export default function RelatedPhones({ currentPhone, allPhones }: RelatedPhonesProps) {
  // Score each phone by relevance: same brand, overlapping category, similar price
  const scored = allPhones
    .filter((p) => p.id !== currentPhone.id)
    .map((p) => {
      let score = 0;
      if (p.brand === currentPhone.brand) score += 3;
      const sharedCategories = p.category.filter((c) =>
        currentPhone.category.includes(c)
      );
      score += sharedCategories.length * 2;
      const priceDiff = Math.abs(p.price - currentPhone.price);
      if (priceDiff < 3000) score += 3;
      else if (priceDiff < 6000) score += 1;
      return { phone: p, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 4)
    .map((s) => s.phone);

  if (scored.length === 0) return null;

  return (
    <section className="mt-12">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          You Might Also Like
        </h2>
        <Link
          href="/latest"
          className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
        >
          View all <ArrowRight size={14} />
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {scored.map((phone) => (
          <Link
            key={phone.id}
            href={`/phones/${phone.slug}`}
            className="group bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 rounded-xl p-4 hover:border-blue-200 dark:hover:border-blue-900 hover:shadow-md transition-all"
          >
            {/* Image */}
            <div className="bg-slate-50 dark:bg-gray-800 rounded-lg p-3 mb-3 flex items-center justify-center h-28">
              <Image
                src={phone.image}
                alt={phone.name}
                width={90}
                height={90}
                className="object-contain group-hover:scale-105 transition-transform duration-200"
              />
            </div>

            {/* Badge */}
            {phone.badge && (
              <div className="mb-1.5">
                <Badge label={phone.badge} />
              </div>
            )}

            {/* Name */}
            <p className="text-xs text-blue-600 dark:text-blue-400 font-medium mb-0.5">
              {phone.brand}
            </p>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white leading-tight line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {phone.name}
            </h3>

            {/* Rating */}
            <div className="flex items-center gap-1 mt-1.5">
              <Star size={11} className="fill-amber-400 text-amber-400" />
              <span className="text-xs text-slate-500 dark:text-slate-400">
                {phone.rating}
              </span>
            </div>

            {/* Price */}
            <p className="text-sm font-bold text-slate-900 dark:text-white mt-2">
              {formatPrice(phone.price)}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
