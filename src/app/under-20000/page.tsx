import { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import PhoneGrid from "@/components/phones/PhoneGrid";
import AdBanner from "@/components/home/AdBanner";
import { getPhonesByCategory } from "@/lib/phones";

export const metadata: Metadata = {
  title: "Best Phones Under ₹20,000 in India 2024",
  description:
    "Near-premium smartphones under ₹20,000. AMOLED displays, flagship chips, and fast charging at a fraction of the cost.",
};

export default function Under20000Page() {
  const phones = getPhonesByCategory("under-20000");

  return (
    <PageLayout>
      <nav className="text-sm text-slate-500 dark:text-slate-400 mb-6">
        <span>Home</span>
        <span className="mx-2">/</span>
        <span className="text-slate-900 dark:text-white font-medium">Under ₹20,000</span>
      </nav>

      <div className="bg-gradient-to-r from-indigo-600 to-violet-600 rounded-2xl p-6 md:p-8 mb-8 text-white">
        <p className="text-indigo-200 text-sm font-semibold uppercase tracking-wide mb-1">
          Flagship Killers
        </p>
        <h1 className="text-2xl md:text-3xl font-extrabold mb-2">
          Best Phones Under ₹20,000
        </h1>
        <p className="text-indigo-100 text-sm max-w-xl">
          Near-premium experience without the flagship price tag. AMOLED screens,
          fast charging, and powerful chipsets under ₹20,000.
        </p>
      </div>

      <div className="flex justify-center mb-8">
        <AdBanner size="rectangle" slot="under20k-rect" />
      </div>

      <PhoneGrid phones={phones} showFilters />
    </PageLayout>
  );
}
