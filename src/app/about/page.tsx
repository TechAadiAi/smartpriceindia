import { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import { Shield, Users, Star, Zap, Youtube, Instagram, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us – SmartPriceIndia",
  description:
    "Learn about SmartPriceIndia — India's trusted source for independent product reviews, price comparisons, and buying guides.",
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
          make informed product buying decisions — without the jargon, bias, or
          confusion.
        </p>

        <div className="grid sm:grid-cols-2 gap-5 mb-10">
          {[
            {
              icon: <Shield className="text-blue-600" size={22} />,
              title: "Independent Reviews",
              desc: "No sponsored content. Every product is evaluated on its own merits.",
            },
            {
              icon: <Users className="text-blue-600" size={22} />,
              title: "For Indian Buyers",
              desc: "Pricing, network bands, and service availability — all India-specific.",
            },
            {
              icon: <Star className="text-blue-600" size={22} />,
              title: "Expert Team",
              desc: "Our reviewers have 10+ years of combined experience in consumer tech.",
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
            help everyday Indians find the right product at the right price. With hundreds
            of product launches every year, it can be overwhelming to know where to start.
          </p>
          <p>
            Our editorial team researches, tests, and compares products across all categories
            and budget segments — from everyday essentials under ₹500 to premium picks under
            ₹20,000 — and presents our findings in plain, jargon-free language.
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

          <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-6">
            Connect With Us
          </h2>
          <p>
            Follow us for the latest deals, reviews, and buying guides. We&apos;d love to hear
            from you!
          </p>
          <div className="flex flex-wrap gap-3 not-prose">
            <a
              href="https://www.youtube.com/@SmartPriceIndiaOfficial"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400 font-semibold px-4 py-2.5 rounded-xl border border-red-100 dark:border-red-900 hover:bg-red-100 dark:hover:bg-red-950 transition-colors text-sm"
            >
              <Youtube size={18} /> YouTube
            </a>
            <a
              href="https://instagram.com/smartpriceindia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-pink-50 dark:bg-pink-950/30 text-pink-600 dark:text-pink-400 font-semibold px-4 py-2.5 rounded-xl border border-pink-100 dark:border-pink-900 hover:bg-pink-100 dark:hover:bg-pink-950 transition-colors text-sm"
            >
              <Instagram size={18} /> Instagram
            </a>
            <a
              href="mailto:smartpriceindiaofficial@gmail.com"
              className="inline-flex items-center gap-2 bg-orange-50 dark:bg-orange-950/30 text-orange-600 dark:text-orange-400 font-semibold px-4 py-2.5 rounded-xl border border-orange-100 dark:border-orange-900 hover:bg-orange-100 dark:hover:bg-orange-950 transition-colors text-sm"
            >
              <Mail size={18} /> Email Us
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
