import Link from "next/link";
import { ArrowRight, TrendingUp, Shield, Zap, Tag, Star } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PhoneCard from "@/components/phones/PhoneCard";
import AdBanner from "@/components/home/AdBanner";
import NewsletterBanner from "@/components/home/NewsletterBanner";
import {
  getFeaturedPhones,
  getLatestPhones,
  getTrendingProducts,
  getTopDeals,
  budgetCategories,
  productCategories,
  getPhonesByCategory,
} from "@/lib/phones";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SmartPriceIndia – Best Product Reviews & Price Comparisons in India",
  description:
    "Discover the best products across mobiles, fashion, home, groceries and more in India. Expert reviews, price comparisons, and buying guides for every budget. Updated daily.",
};

export default function HomePage() {
  const featured = getFeaturedPhones();
  const latest = getLatestPhones(6);
  const trending = getTrendingProducts(4);
  const deals = getTopDeals(4);
  const under500 = getPhonesByCategory("under-500").slice(0, 3);

  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ── */}
        <section className="relative bg-gradient-to-br from-orange-50 via-white to-amber-50 dark:from-gray-950 dark:via-gray-950 dark:to-gray-900 overflow-hidden">
          {/* Floating animated product emojis */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
            <span className="hero-float hero-float-1 absolute text-4xl md:text-5xl opacity-20">📱</span>
            <span className="hero-float hero-float-2 absolute text-4xl md:text-5xl opacity-20">🛍️</span>
            <span className="hero-float hero-float-3 absolute text-4xl md:text-5xl opacity-20">🎧</span>
            <span className="hero-float hero-float-4 absolute text-4xl md:text-5xl opacity-20">👟</span>
            <span className="hero-float hero-float-5 absolute text-4xl md:text-5xl opacity-20">⌚</span>
            <span className="hero-float hero-float-6 absolute text-4xl md:text-5xl opacity-20">🎮</span>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
            <div className="hero-reveal hero-reveal-1 inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-950 text-orange-700 dark:text-orange-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              <TrendingUp size={12} />
              India&apos;s Trusted Product Review Platform
            </div>
            <h1 className="hero-reveal hero-reveal-2 text-4xl md:text-6xl font-extrabold leading-tight mb-4 text-slate-900 dark:text-white">
              Find the <span className="hero-gradient-text">Best Products</span>
              <span className="block">at the Best Prices</span>
            </h1>
            <p className="hero-reveal hero-reveal-3 text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto mb-8">
              Honest reviews and buying guides across every category — handpicked for Indian shoppers.
            </p>

            {/* Search bar */}
            <form action="/search" method="get" className="hero-reveal hero-reveal-4 max-w-xl mx-auto flex gap-2 mb-8">
              <input
                name="q"
                type="text"
                placeholder="Search air fryer, smart watch, robot vacuum..."
                className="flex-1 px-5 py-3.5 bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-sm"
              />
              <button type="submit" className="px-6 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-colors shadow-sm">
                Search
              </button>
            </form>

            <div className="hero-reveal hero-reveal-5 flex flex-wrap gap-3 justify-center">
              <Link href="/category/mobiles-electronics" className="inline-flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity">
                Explore Products <ArrowRight size={16} />
              </Link>
              <Link href="/under-500" className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 text-slate-700 dark:text-white font-semibold px-6 py-3 rounded-xl border border-slate-200 dark:border-gray-700 hover:bg-slate-50 dark:hover:bg-gray-700 transition-colors">
                Deals Under ₹500
              </Link>
            </div>
          </div>
        </section>

        {/* ── Featured Categories ── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Featured Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {productCategories.map((cat) => (
              <Link key={cat.slug} href={`/category/${cat.slug}`} className="group flex flex-col items-center gap-3 bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 hover:border-orange-300 dark:hover:border-orange-800 rounded-xl p-4 transition-all hover:shadow-md text-center">
                <div className={`w-12 h-12 bg-gradient-to-br ${cat.color} rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}>
                  {cat.icon}
                </div>
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 leading-tight">{cat.label}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Top Ad ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <AdBanner size="leaderboard" slot="home-top" />
        </div>

        {/* ── Trending Products ── */}
        {trending.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <TrendingUp className="text-orange-500" size={24} />
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Trending Products</h2>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {trending.map((p) => <PhoneCard key={p.id} phone={p} />)}
            </div>
          </section>
        )}

        {/* ── Shop by Price ── */}
        <section className="bg-slate-50 dark:bg-gray-900 border-y border-slate-200 dark:border-gray-800 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Shop by Budget</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {budgetCategories.map((cat) => (
                <Link key={cat.slug} href={`/${cat.slug}`} className="group flex flex-col items-center gap-2 bg-white dark:bg-gray-950 border border-slate-200 dark:border-gray-800 hover:border-orange-300 dark:hover:border-orange-800 rounded-xl p-4 transition-all hover:shadow-md text-center">
                  <span className="text-2xl group-hover:scale-110 transition-transform">{cat.icon}</span>
                  <span className="text-sm font-bold text-slate-900 dark:text-white">{cat.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Top Deals ── */}
        {deals.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Tag className="text-red-500" size={24} />
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Top Deals Today</h2>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {deals.map((p) => <PhoneCard key={p.id} phone={p} />)}
            </div>
          </section>
        )}

        {/* ── Mid Ad ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <AdBanner size="leaderboard" slot="home-mid" />
        </div>

        {/* ── Latest Reviews ── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Latest Reviews</h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Freshly reviewed products</p>
            </div>
            <Link href="/latest" className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-600 dark:text-orange-400 hover:underline">
              View all <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {latest.map((p) => <PhoneCard key={p.id} phone={p} />)}
          </div>
        </section>

        {/* ── Best Under 500 ── */}
        {under500.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Best Under ₹500</h2>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Maximum value for minimum spend</p>
              </div>
              <Link href="/under-500" className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-600 dark:text-orange-400 hover:underline">
                See all <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {under500.map((p) => <PhoneCard key={p.id} phone={p} />)}
            </div>
          </section>
        )}

        {/* ── Why Trust Us ── */}
        <section className="bg-slate-50 dark:bg-gray-900 border-y border-slate-200 dark:border-gray-800 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white text-center mb-10">Why Trust SmartPriceIndia?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                { icon: <Shield className="text-orange-500" size={28} />, title: "Unbiased Reviews", desc: "We test products independently. No paid reviews — ever." },
                { icon: <TrendingUp className="text-orange-500" size={28} />, title: "Daily Price Updates", desc: "Prices checked daily so you always see the latest deals." },
                { icon: <Zap className="text-orange-500" size={28} />, title: "India-Focused", desc: "Our guides are built for Indian shoppers and budgets." },
              ].map((item) => (
                <div key={item.title} className="text-center">
                  <div className="w-14 h-14 bg-orange-50 dark:bg-orange-950 rounded-2xl flex items-center justify-center mx-auto mb-4">{item.icon}</div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Newsletter ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <NewsletterBanner />
        </div>

        {/* ── FAQ ── */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "Are these reviews genuine?", a: "Yes. We research and test products independently. We never accept payment to influence our reviews." },
              { q: "Do you earn commission?", a: "As an Amazon Associate, we earn from qualifying purchases at no extra cost to you. This keeps the site free." },
              { q: "How often are prices updated?", a: "We check prices regularly, but always verify the final price on Amazon before buying as prices change frequently." },
              { q: "Which categories do you cover?", a: "Mobiles & Electronics, Fashion & Beauty, Home & Furniture, Groceries & Pet Supplies, Books & Education, Video & Music, Games & Live Shopping, Pharmacy & Household, Toys & Kids, and Sports & Fitness." },
            ].map((faq, i) => (
              <details key={i} className="group bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 rounded-xl p-5">
                <summary className="flex items-center justify-between cursor-pointer font-semibold text-slate-900 dark:text-white list-none">
                  {faq.q}
                  <ArrowRight className="group-open:rotate-90 transition-transform text-orange-500" size={16} />
                </summary>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-3 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ── Bottom Ad ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <AdBanner size="leaderboard" slot="home-bottom" />
        </div>
      </main>
      <Footer />
    </>
  );
}
