import { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import { Shield, Users, Star, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us – SmartPriceIndia",
  description:
    "Learn about SmartPriceIndia — India's trusted source for independent smartphone reviews, price comparisons, and buying guides.",
};

export default function AboutPage() {
  return (
    <PageLayout showTopAd={false}>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-4">
          About SmartPriceIndia
        </h1>
        <p className="text-lg text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
          We are a team of tech enthusiasts dedicated to helping Indian consumers
          make informed smartphone buying decisions — without the jargon, bias, or
          confusion.
        </p>

        <div className="grid sm:grid-cols-2 gap-5 mb-10">
          {[
            {
              icon: <Shield className="text-blue-600" size={22} />,
              title: "Independent Reviews",
              desc: "No sponsored content. Every phone is evaluated on its own merits.",
            },
            {
              icon: <Users className="text-blue-600" size={22} />,
              title: "For Indian Buyers",
              desc: "Pricing, network bands, and service availability — all India-specific.",
            },
            {
              icon: <Star className="text-blue-600" size={22} />,
              title: "Expert Team",
              desc: "Our reviewers have 10+ years of combined experience in mobile tech.",
            },
            {
              icon: <Zap className="text-blue-600" size={22} />,
              title: "Daily Updates",
              desc: "Prices and availability are updated daily to reflect the latest deals.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 rounded-xl p-5 flex gap-4"
            >
              <div className="w-10 h-10 bg-blue-50 dark:bg-blue-950 rounded-lg flex items-center justify-center flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 space-y-4 text-sm leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">Our Mission</h2>
          <p>
            SmartPriceIndia was founded with a single mission: to cut through the noise and
            help everyday Indians find the right smartphone at the right price. With hundreds
            of phone launches every year, it can be overwhelming to know where to start.
          </p>
          <p>
            Our editorial team researches, tests, and compares phones across all budget
            segments — from ultra-budget devices under ₹8,000 to flagship killers under
            ₹25,000 — and presents our findings in plain, jargon-free language.
          </p>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-6">
            Affiliate Disclosure
          </h2>
          <p>
            SmartPriceIndia participates in the Amazon Associates program. When you click
            our &quot;Buy on Amazon&quot; buttons and make a purchase, we may earn a small commission
            at no additional cost to you. This helps us keep the site running and the reviews
            independent.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
