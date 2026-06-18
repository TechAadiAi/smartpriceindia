# SmartPriceIndia 📱

India's trusted smartphone review and price comparison website. Built with **Next.js 15**, **TypeScript**, **Tailwind CSS 4**, and **App Router**.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
http://localhost:3000
```

---

## 📁 Project Structure

```
src/
├── app/                          # Next.js App Router pages
│   ├── page.tsx                  # Home page
│   ├── layout.tsx                # Root layout (dark mode, SEO, AdSense)
│   ├── latest/page.tsx           # All phones listing
│   ├── under-10000/page.tsx      # Budget phones ≤ ₹10,000
│   ├── under-15000/page.tsx      # Mid-range phones ≤ ₹15,000
│   ├── under-20000/page.tsx      # Near-premium phones ≤ ₹20,000
│   ├── phones/[slug]/page.tsx    # Individual phone review
│   ├── compare/page.tsx          # Side-by-side comparison
│   ├── search/page.tsx           # Search results
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── privacy-policy/page.tsx
│   ├── disclaimer/page.tsx
│   ├── not-found.tsx             # Custom 404
│   ├── sitemap.ts                # Auto XML sitemap
│   └── robots.ts                 # robots.txt
├── components/
│   ├── layout/                   # Navbar, Footer, ThemeToggle, PageLayout
│   ├── phones/                   # PhoneCard, PhoneGrid, RelatedPhones, PhoneJsonLd
│   ├── compare/                  # CompareButton, CompareDrawer
│   ├── home/                     # AdBanner
│   └── ui/                       # Badge, SearchBar
├── lib/
│   ├── phones.ts                 # Static phone data + helper functions
│   ├── utils.ts                  # formatPrice, cn, slugify, etc.
│   └── useCompare.ts             # Compare state (localStorage)
└── types/
    └── phone.ts                  # TypeScript interfaces
```

---

## ✨ Features

| Feature | Status |
|---------|--------|
| Home page with hero, budget categories, phone grids | ✅ |
| Latest smartphones page | ✅ |
| Budget category pages (₹10K / ₹15K / ₹20K) | ✅ |
| Individual review pages with specs, pros/cons | ✅ |
| Side-by-side phone comparison | ✅ |
| Search functionality | ✅ |
| Category filters + sort (rating, price, newest) | ✅ |
| Dark mode (system-aware + toggle) | ✅ |
| Responsive mobile design | ✅ |
| SEO-optimised meta tags | ✅ |
| JSON-LD structured data (Product + Review schema) | ✅ |
| XML sitemap auto-generated | ✅ |
| AdSense-ready ad banner placeholders | ✅ |
| Amazon affiliate button on all pages | ✅ |
| Related phones on review pages | ✅ |
| About, Contact, Privacy Policy, Disclaimer pages | ✅ |
| Custom 404 page | ✅ |

---

## 🛒 Adding Amazon Affiliate Links

In `src/lib/phones.ts`, update each phone's `affiliateLink`:

```ts
affiliateLink: "https://www.amazon.in/dp/YOUR_ASIN?tag=YOUR-AFFILIATE-TAG",
```

---

## 📢 Enabling Google AdSense

1. Get approved at [adsense.google.com](https://adsense.google.com)
2. In `src/app/layout.tsx`, uncomment and update:
   ```html
   <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossOrigin="anonymous"></script>
   ```
3. Replace `AdBanner` placeholder components with real `<ins class="adsbygoogle">` tags

---

## ➕ Adding More Phones

Add to the `phones` array in `src/lib/phones.ts`:

```ts
{
  id: "7",
  slug: "samsung-galaxy-a55-5g",
  name: "Samsung Galaxy A55 5G",
  brand: "Samsung",
  price: 34999,
  // ... rest of fields
}
```

---

## 🌐 Deployment (Vercel)

```bash
npm i -g vercel
vercel
```

Or push to GitHub and import at [vercel.com](https://vercel.com).

---

## 📦 Tech Stack

- **Next.js 15** — App Router, SSG, generateStaticParams
- **TypeScript** — fully typed throughout
- **Tailwind CSS 4** — utility-first styling, dark mode via `class`
- **Lucide React** — icon set
- **clsx + tailwind-merge** — conditional class merging

---

## 📄 License

MIT — free to use and customise for your own affiliate website.
