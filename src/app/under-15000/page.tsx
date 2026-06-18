import { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import PhoneGrid from "@/components/phones/PhoneGrid";
import AdBanner from "@/components/home/AdBanner";
import { getPhonesByCategory } from "@/lib/phones";

export const metadata: Metadata = {
  title: "Best Phones Under ₹15,000 in India 2024",
  description:
    "Top smartphones under ₹15,000 in India. 5G phones, great cameras, and long battery life — all under budget.",
};

export default function Under15000Page() {
  const phones = getPhonesByCategory("under-15000");

  return (
    <PageLayout>
      <nav className="text-sm text-slate-500 dark:text-slate-400 mb-6">
        <span>Home</span>
        <span className="mx-2">/</span>
        <span className="text-slate-900 dark:text-white font-medium">Under ₹15,000</span>
      </nav>

      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-6 md:p-8 mb-8 text-white">
        <p className="text-blue-200 text-sm font-semibold uppercase tracking-wide mb-1">
          Mid-Range Value
        </p>
        <h1 className="text-2xl md:text-3xl font-extrabold mb-2">
          Best Phones Under ₹15,000
        </h1>
        <p className="text-blue-100 text-sm max-w-xl">
          The sweet spot for Indian buyers. Get 5G connectivity, sharp cameras,
          and solid performance without going over ₹15,000.
        </p>
      </div>

      <div className="flex justify-center mb-8">
        <AdBanner size="rectangle" slot="under15k-rect" />
      </div>

      <PhoneGrid phones={phones} showFilters />
    </PageLayout>
  );
}
