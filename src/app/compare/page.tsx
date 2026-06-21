import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Star, Check, X, ShoppingCart, ChevronLeft } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import Badge from "@/components/ui/Badge";
import { phones as allPhones } from "@/lib/phones";
import { formatPrice } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Compare Smartphones – SmartPriceIndia",
  description: "Compare smartphones side by side. Specs, prices, pros & cons at a glance.",
  robots: { index: false, follow: true },
};

interface Props {
  searchParams: Promise<{ ids?: string }>;
}

type WinnerKey = "left" | "right" | "tie";

function winner(a: number, b: number, higherIsBetter = true): WinnerKey {
  if (a === b) return "tie";
  return (a > b) === higherIsBetter ? "left" : "right";
}

function CellHighlight({
  side,
  win,
  children,
}: {
  side: "left" | "right";
  win: WinnerKey;
  children: React.ReactNode;
}) {
  const isWinner = win === side;
  return (
    <td
      className={`px-4 py-3 text-center text-sm ${
        isWinner
          ? "bg-green-50 dark:bg-green-950/20 font-semibold text-green-700 dark:text-green-400"
          : "text-slate-700 dark:text-slate-300"
      }`}
    >
      {children}
      {isWinner && (
        <span className="ml-1 text-green-500 text-xs">✓</span>
      )}
    </td>
  );
}

export default async function ComparePage({ searchParams }: Props) {
  const { ids } = await searchParams;
  const idList = ids?.split(",").map((s) => s.trim()) ?? [];

  if (idList.length !== 2) notFound();

  const [phoneA, phoneB] = idList.map((id) =>
    allPhones.find((p) => p.id === id)
  );

  if (!phoneA || !phoneB) notFound();

  const priceWin = winner(phoneA.price, phoneB.price, false); // lower is better
  const ratingWin = winner(phoneA.rating, phoneB.rating);

  const allKeys = Array.from(
    new Set([...Object.keys(phoneA.specs), ...Object.keys(phoneB.specs)])
  );
  const specRows: { label: string; a: string; b: string }[] = allKeys.map((k) => ({
    label: k.charAt(0).toUpperCase() + k.slice(1),
    a: phoneA.specs[k] ?? "—",
    b: phoneB.specs[k] ?? "—",
  }));

  return (
    <PageLayout>
      {/* Back */}
      <Link
        href="/latest"
        className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-orange-600 dark:hover:text-orange-400 mb-6 transition-colors"
      >
        <ChevronLeft size={15} /> Back to phones
      </Link>

      <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mb-8 text-center">
        {phoneA.name}{" "}
        <span className="text-slate-400 dark:text-slate-500 font-light">vs</span>{" "}
        {phoneB.name}
      </h1>

      {/* ── Hero cards ── */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        {[phoneA, phoneB].map((phone, idx) => (
          <div
            key={phone.id}
            className={`bg-white dark:bg-gray-900 border rounded-2xl p-5 text-center ${
              idx === 0
                ? "border-orange-300 dark:border-orange-700"
                : "border-slate-200 dark:border-gray-800"
            }`}
          >
            {phone.badge && (
              <div className="flex justify-center mb-2">
                <Badge label={phone.badge} />
              </div>
            )}
            <Image
              src={phone.image}
              alt={phone.name}
              width={140}
              height={140}
              className="mx-auto object-contain mb-4"
            />
            <p className="text-xs text-orange-600 dark:text-orange-400 font-medium">
              {phone.brand}
            </p>
            <h2 className="text-sm md:text-base font-bold text-slate-900 dark:text-white leading-tight mt-0.5">
              {phone.name}
            </h2>

            {/* Rating */}
            <div className="flex items-center justify-center gap-1 mt-2">
              <Star size={13} className="fill-amber-400 text-amber-400" />
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                {phone.rating}
              </span>
              <span className="text-xs text-slate-400">
                ({phone.reviewCount.toLocaleString("en-IN")})
              </span>
            </div>

            {/* Price */}
            <div className="mt-3">
              <p
                className={`text-xl font-extrabold ${
                  priceWin === (idx === 0 ? "left" : "right")
                    ? "text-green-600 dark:text-green-400"
                    : "text-slate-900 dark:text-white"
                }`}
              >
                {formatPrice(phone.price)}
              </p>
              {phone.originalPrice && (
                <p className="text-xs text-slate-400 line-through">
                  {formatPrice(phone.originalPrice)}
                </p>
              )}
            </div>

            <a
              href={phone.affiliateLink}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="mt-4 w-full flex items-center justify-center gap-1.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold py-2.5 rounded-xl transition-colors"
            >
              <ShoppingCart size={14} />
              Buy on Amazon
            </a>
          </div>
        ))}
      </div>

      {/* ── Specs comparison table ── */}
      <div className="bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 rounded-2xl overflow-hidden mb-8">
        <div className="grid grid-cols-3 bg-slate-50 dark:bg-gray-800 border-b border-slate-200 dark:border-gray-700">
          <div className="px-4 py-3 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
            Spec
          </div>
          <div className="px-4 py-3 text-xs font-bold text-orange-600 dark:text-orange-400 uppercase tracking-wide text-center truncate">
            {phoneA.name}
          </div>
          <div className="px-4 py-3 text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide text-center truncate">
            {phoneB.name}
          </div>
        </div>

        {/* Price row */}
        <table className="w-full">
          <tbody>
            <tr className="border-b border-slate-100 dark:border-gray-800 bg-slate-50/50 dark:bg-gray-800/30">
              <td className="px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-400 w-1/3">
                Price
              </td>
              <CellHighlight side="left" win={priceWin}>
                {formatPrice(phoneA.price)}
              </CellHighlight>
              <CellHighlight side="right" win={priceWin}>
                {formatPrice(phoneB.price)}
              </CellHighlight>
            </tr>

            {/* Rating row */}
            <tr className="border-b border-slate-100 dark:border-gray-800">
              <td className="px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-400">
                Rating
              </td>
              <CellHighlight side="left" win={ratingWin}>
                ⭐ {phoneA.rating}
              </CellHighlight>
              <CellHighlight side="right" win={ratingWin}>
                ⭐ {phoneB.rating}
              </CellHighlight>
            </tr>

            {/* Spec rows */}
            {specRows.map((row, i) => (
              <tr
                key={row.label}
                className={`border-b border-slate-100 dark:border-gray-800 ${
                  i % 2 === 0 ? "bg-slate-50/50 dark:bg-gray-800/30" : ""
                }`}
              >
                <td className="px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-400">
                  {row.label}
                </td>
                <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300 text-center">
                  {row.a}
                </td>
                <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300 text-center">
                  {row.b}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ── Pros & Cons side by side ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {[phoneA, phoneB].map((phone) => (
          <div key={phone.id}>
            <h3 className="font-bold text-slate-900 dark:text-white mb-3">
              {phone.name} — Pros & Cons
            </h3>
            <div className="space-y-2">
              {phone.pros.map((pro, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <Check size={14} className="text-green-500 flex-shrink-0 mt-0.5" />
                  {pro}
                </div>
              ))}
              {phone.cons.map((con, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <X size={14} className="text-red-500 flex-shrink-0 mt-0.5" />
                  {con}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ── Verdict ── */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border border-blue-100 dark:border-blue-900 rounded-2xl p-6">
        <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2">
          Our Verdict
        </h3>
        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
          {priceWin === "left"
            ? `The ${phoneA.name} is the more affordable option`
            : `The ${phoneB.name} is the more affordable option`}
          {ratingWin === "left"
            ? `, while the ${phoneA.name} scores higher in user ratings.`
            : ratingWin === "right"
            ? `, while the ${phoneB.name} scores higher in user ratings.`
            : `, and both phones are rated equally by users.`}{" "}
          Both are strong contenders — your choice depends on whether you prioritise
          price or performance.
        </p>
        <div className="flex gap-3 mt-4 flex-wrap">
          {[phoneA, phoneB].map((phone) => (
            <Link
              key={phone.id}
              href={`/phones/${phone.slug}`}
              className="text-sm font-semibold text-orange-600 dark:text-orange-400 hover:underline"
            >
              Read full {phone.name} review →
            </Link>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
