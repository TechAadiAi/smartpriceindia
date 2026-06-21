import Link from "next/link";
import Image from "next/image";
import { Star, ShoppingCart } from "lucide-react";
import { Phone } from "@/types/phone";
import { formatPrice, getDiscountPercent } from "@/lib/utils";
import Badge from "@/components/ui/Badge";
import CompareButton from "@/components/compare/CompareButton";

interface PhoneCardProps {
  phone: Phone;
}

export default function PhoneCard({ phone }: PhoneCardProps) {
  const discount = phone.originalPrice
    ? getDiscountPercent(phone.originalPrice, phone.price)
    : null;

  return (
    <div className="group bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 rounded-xl overflow-hidden hover:shadow-lg hover:border-orange-200 dark:hover:border-orange-900 transition-all duration-200">
      {/* Image */}
      <Link href={`/phones/${phone.slug}`}>
        <div className="relative bg-slate-50 dark:bg-gray-800 p-4 flex items-center justify-center h-48 overflow-hidden">
          {phone.badge && (
            <div className="absolute top-3 left-3 z-10">
              <Badge label={phone.badge} />
            </div>
          )}
          {discount && (
            <div className="absolute top-3 right-3 z-10 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-md">
              -{discount}%
            </div>
          )}
          <Image
            src={phone.image}
            alt={phone.name}
            width={160}
            height={160}
            className="object-contain group-hover:scale-105 transition-transform duration-300"
          />
          {/* Compare button overlaid on card image */}
          <CompareButton phoneId={phone.id} variant="card" />
        </div>
      </Link>

      {/* Info */}
      <div className="p-4">
        <p className="text-xs text-orange-600 dark:text-orange-400 font-medium mb-1">
          {phone.brand}
        </p>
        <Link href={`/phones/${phone.slug}`}>
          <h3 className="font-semibold text-slate-900 dark:text-white text-sm leading-tight hover:text-orange-600 dark:hover:text-orange-400 transition-colors line-clamp-2">
            {phone.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mt-2">
          <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={12}
                className={
                  star <= Math.floor(phone.rating)
                    ? "fill-amber-400 text-amber-400"
                    : "fill-slate-200 text-slate-200 dark:fill-gray-700 dark:text-gray-700"
                }
              />
            ))}
          </div>
          <span className="text-xs text-slate-500 dark:text-slate-400">
            {phone.rating} ({phone.reviewCount.toLocaleString("en-IN")})
          </span>
        </div>

        {/* Price */}
        <div className="mt-3 flex items-baseline gap-2">
          <span className="text-lg font-bold text-slate-900 dark:text-white">
            {formatPrice(phone.price)}
          </span>
          {phone.originalPrice && (
            <span className="text-sm text-slate-400 line-through">
              {formatPrice(phone.originalPrice)}
            </span>
          )}
        </div>

        {/* CTA */}
        <a
          href={phone.affiliateLink}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="mt-3 w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-colors"
        >
          <ShoppingCart size={14} />
          Buy on Amazon
        </a>
      </div>
    </div>
  );
}
