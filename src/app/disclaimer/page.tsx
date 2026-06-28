import { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";

export const metadata: Metadata = {
  title: "Disclaimer – SmartPriceIndia",
  description: "SmartPriceIndia Disclaimer — affiliate disclosure, pricing accuracy, and editorial independence.",
};

export default function DisclaimerPage() {
  return (
    <PageLayout showTopAd={false} showBottomAd={false}>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-2">
          Disclaimer
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-8">
          Last updated: 28 June 2026
        </p>

        <div className="space-y-6 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          {[
            {
              title: "Affiliate Links",
              content: `SmartPriceIndia participates in the Amazon Associates Programme. Some links on this website are affiliate links — if you click them and make a purchase, we earn a small commission at no additional cost to you. This income helps us keep the site free and our reviews independent. We only recommend products we genuinely believe offer good value.`,
            },
            {
              title: "Pricing Accuracy",
              content: `Product prices change frequently. While we strive to update prices regularly, the prices shown on this site may not reflect the current price on Amazon or other retailers. Product prices and availability are accurate as of the date/time indicated and are subject to change. Any price and availability information displayed on Amazon at the time of purchase will apply. Always verify the final price on the retailer's website before making a purchase decision. SmartPriceIndia is not responsible for any pricing discrepancies.`,
            },
            {
              title: "Editorial Independence",
              content: `Our reviews and recommendations are independent. We do not accept payment from brands or manufacturers to influence our reviews. Brands may send us review units, but this does not affect our editorial judgement. We clearly disclose when a product has been provided for review.`,
            },
            {
              title: "No Warranty",
              content: `All content on SmartPriceIndia is provided "as is" for general informational purposes. We make no warranties about the completeness, reliability, or accuracy of this information. Any action you take based on information found on this website is strictly at your own risk.`,
            },
            {
              title: "External Links",
              content: `This website may contain links to external websites. SmartPriceIndia has no control over the content of those sites and accepts no responsibility for them or for any loss or damage that may arise from your use of them.`,
            },
            {
              title: "Product Availability",
              content: `Product availability and specifications are subject to change without notice. Some products listed on our site may be discontinued or out of stock. We recommend verifying availability on Amazon or the manufacturer's website before purchasing.`,
            },
          ].map((section) => (
            <div key={section.title} className="bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 rounded-xl p-5">
              <h2 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                {section.title}
              </h2>
              <p>{section.content}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-900 rounded-xl">
          <p className="text-xs text-yellow-800 dark:text-yellow-300 font-medium">
            <strong>Amazon Associates Disclosure:</strong> SmartPriceIndia.com is a participant in
            the Amazon Associates Programme, an affiliate advertising programme designed to
            provide a means for sites to earn advertising fees by advertising and linking to
            Amazon.in. — as an Amazon Associate we earn from qualifying purchases.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
