import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, ShoppingCart, TrendingUp, Shield, Zap } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PhoneCard from "@/components/phones/PhoneCard";
import AdBanner from "@/components/home/AdBanner";
import NewsletterBanner from "@/components/home/NewsletterBanner";
import Badge from "@/components/ui/Badge";
import {
  getFeaturedPhones,
  getLatestPhones,
  budgetCategories,
  getPhonesByCategory,
} from "@/lib/phones";
import { formatPrice } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Smartphones in India 2024 – Reviews, Prices & Comparisons",
  description:
    "Discover the best smartphones in India. Expert reviews, price comparisons, and buying guides for every budget. Updated daily.",
};

export default function HomePage() {
  const featuredPhones = getFeaturedPhones();
  const latestPhones = getLatestPhones(6);
  const under10k = getPhonesByCategory("under-10000").slice(0, 3);

  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ── */}
        <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-800/50 text-blue-200 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
                  <TrendingUp size={12} />
                  Updated for 2024 — India&apos;s Best Picks
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                  Find Your Perfect
                  <span className="block text-blue-400">Smartphone</span>
                  at the Best Price
                </h1>
                <p className="text-blue-200 text-lg leading-relaxed mb-8">
                  Honest reviews, real comparisons, and expert buying guides — tailored
                  for Indian consumers. From budget phones to flagship killers.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/latest"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
                  >
                    Explore Latest Phones <ArrowRight size={16} />
                  </Link>
                  <Link
                    href="/under-10000"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl transition-colors border border-white/20"
                  >
                    Best Under ₹10,000
                  </Link>
                </div>
              </div>

              {/* Hero Featured Phone */}
              {featuredPhones[0] && (
                <div className="hidden md:block">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <Badge label={featuredPhones[0].badge ?? "Editor's Pick"} />
                        <p className="text-blue-300 text-sm mt-2">{featuredPhones[0].brand}</p>
                        <h2 className="text-xl font-bold text-white">{featuredPhones[0].name}</h2>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-extrabold text-white">
                          {formatPrice(featuredPhones[0].price)}
                        </p>
                        {featuredPhones[0].originalPrice && (
                          <p className="text-blue-300 text-sm line-through">
                            {formatPrice(featuredPhones[0].originalPrice)}
                          </p>
                        )}
                      </div>
                    </div>
                    <Image
                      src={featuredPhones[0].image}
                      alt={featuredPhones[0].name}
                      width={200}
                      height={200}
                      className="mx-auto my-4 object-contain"
                    />
                    <div className="flex items-center gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star
                          key={s}
                          size={14}
                          className={
                            s <= Math.floor(featuredPhones[0].rating)
                              ? "fill-amber-400 text-amber-400"
                              : "fill-white/20 text-white/20"
                          }
                        />
                      ))}
                      <span className="text-blue-200 text-sm ml-1">
                        {featuredPhones[0].rating} · {featuredPhones[0].reviewCount.toLocaleString("en-IN")} reviews
                      </span>
                    </div>
                    <a
                      href={featuredPhones[0].affiliateLink}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-semibold py-2.5 rounded-xl transition-colors"
                    >
                      <ShoppingCart size={16} />
                      Buy on Amazon
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ── Top Ad Banner ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <AdBanner size="leaderboard" slot="home-top" />
        </div>

        {/* ── Budget Categories ── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            Shop by Budget
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {budgetCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/${cat.slug}`}
                className="group flex items-center gap-4 bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-800 rounded-xl p-5 transition-all hover:shadow-md"
              >
                <span className="text-3xl">{cat.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-slate-900 dark:text-white">{cat.label}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 truncate">
                    {cat.description}
                  </p>
                </div>
                <ArrowRight
                  size={16}
                  className="text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 flex-shrink-0 transition-colors"
                />
              </Link>
            ))}
          </div>
        </section>

        {/* ── Latest Phones ── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Latest Smartphones
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                Freshly reviewed and updated for 2024
              </p>
            </div>
            <Link
              href="/latest"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
            >
              View all <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {latestPhones.map((phone) => (
              <PhoneCard key={phone.id} phone={phone} />
            ))}
          </div>
        </section>

        {/* ── Mid Ad Banner ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <AdBanner size="leaderboard" slot="home-mid" />
        </div>

        {/* ── Best Under 10K ── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Best Phones Under ₹10,000
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                Maximum value for minimum spend
              </p>
            </div>
            <Link
              href="/under-10000"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
            >
              See all <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {under10k.map((phone) => (
              <PhoneCard key={phone.id} phone={phone} />
            ))}
          </div>
        </section>

        {/* ── Why Trust Us ── */}
        <section className="bg-slate-50 dark:bg-gray-900 border-y border-slate-200 dark:border-gray-800 py-16 mt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white text-center mb-10">
              Why Trust SmartPriceIndia?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                {
                  icon: <Shield className="text-blue-600" size={28} />,
                  title: "Unbiased Reviews",
                  desc: "We test every phone independently. No paid reviews — ever.",
                },
                {
                  icon: <TrendingUp className="text-blue-600" size={28} />,
                  title: "Daily Price Updates",
                  desc: "Prices are checked daily so you always see the latest deals.",
                },
                {
                  icon: <Zap className="text-blue-600" size={28} />,
                  title: "India-Focused",
                  desc: "Our guides are built for Indian users, networks, and budgets.",
                },
              ].map((item) => (
                <div key={item.title} className="text-center">
                  <div className="w-14 h-14 bg-blue-50 dark:bg-blue-950 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Newsletter ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <NewsletterBanner />
        </div>

        {/* ── Bottom Ad Banner ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <AdBanner size="leaderboard" slot="home-bottom" />
        </div>
      </main>
      <Footer />
    </>
  );
}
