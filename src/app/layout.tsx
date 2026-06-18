import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CompareDrawer from "@/components/compare/CompareDrawer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import GoogleAnalytics from "@/components/layout/GoogleAnalytics";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "SmartPriceIndia – Best Smartphone Reviews & Prices in India",
    template: "%s | SmartPriceIndia",
  },
  description:
    "Find the best smartphones in India. Expert reviews, price comparisons, and buying guides for phones under ₹10,000, ₹15,000, and ₹20,000.",
  keywords: [
    "best phones India 2024",
    "smartphone reviews India",
    "budget phones India",
    "phones under 10000",
    "phones under 15000",
    "phones under 20000",
    "5G phones India",
    "best camera phone India",
  ],
  authors: [{ name: "SmartPriceIndia Team" }],
  creator: "SmartPriceIndia",
  publisher: "SmartPriceIndia",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://smartpriceindia.in"
  ),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://smartpriceindia.in",
    siteName: "SmartPriceIndia",
    title: "SmartPriceIndia – Best Smartphone Reviews & Prices in India",
    description:
      "Expert smartphone reviews, price comparisons, and buying guides for Indian consumers.",
    images: [
      { url: "/og-image.png", width: 1200, height: 630, alt: "SmartPriceIndia" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SmartPriceIndia – Best Smartphone Reviews & Prices in India",
    description: "Expert smartphone reviews and buying guides for India.",
    images: ["/og-image.png"],
    creator: "@SmartPriceIN",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your Google Search Console verification token here
    // google: "your-verification-token",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        {/* Preconnect to speed up Google Fonts & AdSense */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Favicon — replace with real icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* AdSense — uncomment and replace with your publisher ID after approval */}
        {/* <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID}`}
          crossOrigin="anonymous"
        /> */}
      </head>
      <body className={`${inter.className} min-h-screen`}>
        {/* Dark mode initialisation — before paint to prevent flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{const t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}`,
          }}
        />

        {/* Accessibility: skip to main content */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <div id="main-content">
          {children}
        </div>

        {/* Global UI overlays */}
        <CompareDrawer />
        <ScrollToTop />

        {/* Analytics — only fires in production */}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
