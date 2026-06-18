import { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";

export const metadata: Metadata = {
  title: "Privacy Policy – SmartPriceIndia",
  description: "SmartPriceIndia Privacy Policy — how we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "1 March 2024";

  return (
    <PageLayout showTopAd={false} showBottomAd={false}>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-8">
          Last updated: {lastUpdated}
        </p>

        <div className="space-y-6 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          {[
            {
              title: "1. Information We Collect",
              content: `We collect information you voluntarily provide when you contact us via our contact form, including your name and email address. We also collect non-personal information through cookies and analytics tools (such as Google Analytics) about how visitors use our website.`,
            },
            {
              title: "2. How We Use Your Information",
              content: `We use the information we collect to respond to your inquiries, improve our website content, analyse website traffic, and comply with legal obligations. We do not sell or rent your personal information to any third party.`,
            },
            {
              title: "3. Cookies",
              content: `SmartPriceIndia uses cookies to enhance your browsing experience. These include analytics cookies (Google Analytics) and advertising cookies (Google AdSense, if active). You can disable cookies through your browser settings; however, some parts of the site may not function properly without them.`,
            },
            {
              title: "4. Google AdSense & Advertising",
              content: `We may use Google AdSense to display advertisements. Google may use cookies to serve ads based on your prior visits to our website or other websites. You can opt out of personalised advertising by visiting Google's Ads Settings or www.aboutads.info.`,
            },
            {
              title: "5. Amazon Associates",
              content: `SmartPriceIndia is a participant in the Amazon Associates Programme, an affiliate advertising programme designed to provide a means for sites to earn advertising fees by linking to Amazon.in. When you click affiliate links and make a purchase, we may earn a commission at no extra cost to you.`,
            },
            {
              title: "6. Third-Party Links",
              content: `Our website contains links to third-party websites (including Amazon). We are not responsible for the privacy practices of those sites and recommend you read their privacy policies before making a purchase.`,
            },
            {
              title: "7. Data Security",
              content: `We take reasonable measures to protect your information from unauthorised access. However, no website or internet transmission is completely secure, and we cannot guarantee absolute security.`,
            },
            {
              title: "8. Children's Privacy",
              content: `SmartPriceIndia is not directed at children under 13. We do not knowingly collect personal information from children. If you believe your child has provided us with personal data, please contact us and we will promptly delete it.`,
            },
            {
              title: "9. Changes to This Policy",
              content: `We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page with a revised "Last updated" date. Continued use of our website after changes constitutes acceptance of the updated policy.`,
            },
            {
              title: "10. Contact",
              content: `If you have questions about this Privacy Policy, please contact us at hello@smartpriceindia.in.`,
            },
          ].map((section) => (
            <div key={section.title}>
              <h2 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                {section.title}
              </h2>
              <p>{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
