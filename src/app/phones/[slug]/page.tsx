import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Star, Check, X, ShoppingCart, ChevronRight, Cpu, Battery, Camera, Monitor } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import AdBanner from "@/components/home/AdBanner";
import Badge from "@/components/ui/Badge";
import PhoneJsonLd from "@/components/phones/PhoneJsonLd";
import RelatedPhones from "@/components/phones/RelatedPhones";
import CompareButton from "@/components/compare/CompareButton";
import CompareDrawer from "@/components/compare/CompareDrawer";
import { getPhoneBySlug, phones } from "@/lib/phones";
import { formatPrice, getDiscountPercent } from "@/lib/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return phones.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const phone = getPhoneBySlug(slug);
  if (!phone) return {};
  return {
    title: `${phone.name} Review, Price & Features in India`,
    description: phone.shortDescription,
    openGraph: {
      title: `${phone.name} Review | SmartPriceIndia`,
      description: phone.shortDescription,
      images: [phone.image],
    },
  };
}

const specIcons: Record<string, React.ReactNode> = {
  Material: <Monitor size={15} />,
  Power: <Cpu size={15} />,
  Battery: <Battery size={15} />,
  Capacity: <Camera size={15} />,
};

export default async function PhoneReviewPage({ params }: Props) {
  const { slug } = await params;
  const phone = getPhoneBySlug(slug);
  if (!phone) notFound();

  const discount = phone.originalPrice
    ? getDiscountPercent(phone.originalPrice, phone.price)
    : null;

  const specEntries = Object.entries(phone.specs);
  const pageUrl = `https://smartpriceindia.com/phones/${phone.slug}`;

  return (
    <>
      <PhoneJsonLd phone={phone} url={pageUrl} />
      <PageLayout>
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400 mb-6 flex-wrap">
          <Link href="/" className="hover:text-orange-600 dark:hover:text-orange-400">Home</Link>
          <ChevronRight size={14} />
          <Link href="/latest" className="hover:text-orange-600 dark:hover:text-orange-400">Phones</Link>
          <ChevronRight size={14} />
          <span className="text-slate-900 dark:text-white font-medium truncate max-w-[200px]">{phone.name}</span>
        </nav>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* ── Left: Image + Buy box ── */}
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-slate-50 dark:bg-gray-900 border border-slate-200 dark:border-gray-800 rounded-2xl p-8 flex items-center justify-center">
              <Image
                src={phone.image}
                alt={phone.name}
                width={240}
                height={240}
                className="object-contain"
                priority
              />
            </div>

            {/* Buy Box */}
            <div className="bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 rounded-2xl p-5 space-y-4">
              <div>
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="text-3xl font-extrabold text-slate-900 dark:text-white">
                    {formatPrice(phone.price)}
                  </span>
                  {phone.originalPrice && (
                    <span className="text-slate-400 line-through text-lg">
                      {formatPrice(phone.originalPrice)}
                    </span>
                  )}
                </div>
                {discount && (
                  <p className="text-green-600 dark:text-green-400 text-sm font-semibold mt-0.5">
                    You save {discount}% ({formatPrice(phone.originalPrice! - phone.price)})
                  </p>
                )}
              </div>

              <div className="flex items-center gap-2 text-sm">
                <span className={`inline-block w-2 h-2 rounded-full ${phone.isAvailable ? "bg-green-500" : "bg-red-500"}`} />
                <span className={phone.isAvailable ? "text-green-600 dark:text-green-400" : "text-red-600"}>
                  {phone.isAvailable ? "In Stock on Amazon" : "Currently Unavailable"}
                </span>
              </div>

              <a
                href={phone.affiliateLink}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl transition-colors text-base"
              >
                <ShoppingCart size={18} />
                Buy on Amazon
              </a>

              {/* Compare button */}
              <CompareButton phoneId={phone.id} variant="full" />

              <p className="text-xs text-center text-slate-400 dark:text-slate-500">
                * Price may vary. Verify on Amazon before purchasing.
              </p>

              <AdBanner size="rectangle" slot={`review-${phone.slug}`} className="w-full h-32" />
            </div>
          </div>

          {/* ── Right: Review content ── */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <span className="text-orange-600 dark:text-orange-400 font-semibold">{phone.brand}</span>
                {phone.badge && <Badge label={phone.badge} />}
              </div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                {phone.name}
              </h1>
              <p className="text-slate-500 dark:text-slate-400 mt-1 text-sm">
                Review updated:{" "}
                {new Date(phone.updatedAt).toLocaleDateString("en-IN", {
                  year: "numeric", month: "long", day: "numeric",
                })}
              </p>

              <div className="flex items-center gap-3 mt-3">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      size={18}
                      className={
                        s <= Math.floor(phone.rating)
                          ? "fill-amber-400 text-amber-400"
                          : "fill-slate-200 text-slate-200 dark:fill-gray-700 dark:text-gray-700"
                      }
                    />
                  ))}
                </div>
                <span className="font-bold text-slate-900 dark:text-white">{phone.rating}/5</span>
                <span className="text-slate-500 dark:text-slate-400 text-sm">
                  ({phone.reviewCount.toLocaleString("en-IN")} user ratings)
                </span>
              </div>
            </div>

            <div className="bg-orange-50 dark:bg-orange-950/30 border border-orange-100 dark:border-orange-900 rounded-xl p-5">
              <h2 className="font-bold text-slate-900 dark:text-white mb-2">Our Verdict</h2>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{phone.fullDescription}</p>
            </div>

            {/* Pros & Cons */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-green-50 dark:bg-green-950/20 border border-green-100 dark:border-green-900 rounded-xl p-5">
                <h3 className="font-bold text-green-700 dark:text-green-400 mb-3 flex items-center gap-2">
                  <Check size={16} /> Pros
                </h3>
                <ul className="space-y-2">
                  {phone.pros.map((pro, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                      <Check size={14} className="text-green-500 flex-shrink-0 mt-0.5" />
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-50 dark:bg-red-950/20 border border-red-100 dark:border-red-900 rounded-xl p-5">
                <h3 className="font-bold text-red-600 dark:text-red-400 mb-3 flex items-center gap-2">
                  <X size={16} /> Cons
                </h3>
                <ul className="space-y-2">
                  {phone.cons.map((con, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                      <X size={14} className="text-red-500 flex-shrink-0 mt-0.5" />
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Specs Table */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Specifications</h2>
              <div className="bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 rounded-xl overflow-hidden">
                {specEntries.map(([key, value], i) => (
                  <div
                    key={key}
                    className={`flex items-start gap-4 px-5 py-3.5 ${
                      i % 2 === 0 ? "bg-slate-50 dark:bg-gray-800/50" : "bg-white dark:bg-gray-900"
                    }`}
                  >
                    <div className="flex items-center gap-2 w-32 flex-shrink-0">
                      <span className="text-slate-400 dark:text-slate-500">{specIcons[key] ?? null}</span>
                      <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 capitalize">{key}</span>
                    </div>
                    <span className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-950/30 dark:to-orange-900/20 border border-orange-200 dark:border-orange-900 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-bold text-slate-900 dark:text-white">Ready to buy the {phone.name}?</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm">Get it at {formatPrice(phone.price)} on Amazon India.</p>
              </div>
              <a
                href={phone.affiliateLink}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="flex-shrink-0 flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl transition-colors"
              >
                <ShoppingCart size={16} />
                Buy on Amazon
              </a>
            </div>
          </div>
        </div>

        {/* Related phones */}
        <RelatedPhones currentPhone={phone} allPhones={phones} />
      </PageLayout>

      {/* Sticky compare drawer */}
      <CompareDrawer />
    </>
  );
}
