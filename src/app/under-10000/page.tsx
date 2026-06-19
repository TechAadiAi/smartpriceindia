import { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import PhoneGrid from "@/components/phones/PhoneGrid";
import AdBanner from "@/components/home/AdBanner";
import { getPhonesByCategory } from "@/lib/phones";

export const metadata: Metadata = {
  title: "Best Phones Under ₹10,000 in India 2024",
  description:
    "Top budget smartphones under ₹10,000 in India. Compare specs, ratings and buy from Amazon at the best price.",
};

export default function Under10000Page() {
  const phones = getPhonesByCategory("under-10000");

  return (
    <PageLayout>
      <nav className="text-sm text-slate-500 dark:text-slate-400 mb-6">
        <span>Home</span>
        <span className="mx-2">/</span>
        <span className="text-slate-900 dark:text-white font-medium">Under ₹10,000</span>
      </nav>

      {/* Hero banner for this category */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-6 md:p-8 mb-8 text-white">
        <p className="text-purple-200 text-sm font-semibold uppercase tracking-wide mb-1">
          Budget Picks
        </p>
        <h1 className="text-2xl md:text-3xl font-extrabold mb-2">
          Best Phones Under ₹10,000
        </h1>
        <p className="text-purple-100 text-sm max-w-xl">
          You don&apos;t need to spend a fortune to get a great smartphone. These
          picks offer the best value, battery life, and performance under ₹10,000.
        </p>
      </div>

      {/* Inline rectangle ad */}
      <div className="flex justify-center mb-8">
        <AdBanner size="rectangle" slot="under10k-rect" />
      </div>

      <PhoneGrid
        phones={phones}
        showFilters
      />
    </PageLayout>
  );
}
