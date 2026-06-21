import Link from "next/link";
import { Zap } from "lucide-react";

const footerLinks = {
  "Shop by Price": [
    { label: "Under ₹500", href: "/under-500" },
    { label: "Under ₹1000", href: "/under-1000" },
    { label: "Under ₹2000", href: "/under-2000" },
    { label: "Under ₹5000", href: "/under-5000" },
  ],
  Categories: [
    { label: "Home & Kitchen", href: "/category/home-kitchen" },
    { label: "Tech Gadgets", href: "/category/tech-gadgets" },
    { label: "Smart Home", href: "/category/smart-home" },
    { label: "Kitchen Appliances", href: "/category/kitchen-appliances" },
    { label: "Home Organization", href: "/category/home-organization" },
    { label: "Car Accessories", href: "/category/car-accessories" },
    { label: "Lifestyle Gadgets", href: "/category/lifestyle-gadgets" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Disclaimer", href: "/disclaimer" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-gray-900 border-t border-slate-200 dark:border-gray-800 mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 font-bold text-lg mb-3">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-amber-500 rounded-lg flex items-center justify-center">
                <Zap size={16} className="text-white" />
              </div>
              <span className="text-slate-900 dark:text-white">
                SmartPrice<span className="text-orange-500">India</span>
              </span>
            </Link>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              India&apos;s trusted source for home, kitchen and tech gadget reviews. We help you find the best products for your budget.
            </p>
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-3">
              * As an Amazon Associate, we earn from qualifying purchases.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-3 text-sm">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-slate-500 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-slate-400 dark:text-slate-500">
            © {new Date().getFullYear()} SmartPriceIndia. All rights reserved.
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-500">
            Prices are indicative. Please verify on Amazon before buying.
          </p>
        </div>
      </div>
    </footer>
  );
}