# 🛍️ SmartPriceIndia

> **India's trusted product review and price comparison platform.**

Built with **Next.js 15**, **TypeScript**, **Tailwind CSS 4**, and **App Router**.

We cover the best products across **10 categories** — mobiles, fashion, home, groceries, books, music, gaming, pharmacy, toys and sports — with **honest reviews**, **price comparisons**, and **buying guides** for Indian shoppers.

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

## 🗂️ Categories

| # | Category | | # | Category |
|---|----------|---|---|----------|
| **1** | 📱 Mobiles & Electronics | | **6** | 🎵 Video & Music |
| **2** | 👗 Fashion & Beauty | | **7** | 🎮 Games & Live Shopping |
| **3** | 🛋️ Home & Furniture | | **8** | 💊 Pharmacy & Household |
| **4** | 🛒 Groceries & Pet Supplies | | **9** | 🧸 Toys & Kids |
| **5** | 📚 Books & Education | | **10** | 🏏 Sports & Fitness |

> 💰 **Price-based browsing:** Under ₹500 / ₹1,000 / ₹2,000 / ₹5,000 / ₹10,000 / ₹20,000

---

## ✨ Features

| Feature | Status |
|---------|:------:|
| **Home page** with hero, categories & product grids | ✅ |
| **10 category pages** | ✅ |
| **Price-based browsing** (6 budget tiers) | ✅ |
| **Review pages** with specs, pros & cons | ✅ |
| **Side-by-side comparison** | ✅ |
| **Search** functionality | ✅ |
| **Filters + sort** (rating, price, newest) | ✅ |
| **Dark mode** (system-aware + toggle) | ✅ |
| **Responsive** mobile design | ✅ |
| **SEO-optimised** meta tags | ✅ |
| **JSON-LD** structured data | ✅ |
| **XML sitemap** auto-generated | ✅ |
| **Contact form** (Formspree) | ✅ |
| **Newsletter signup** (Formspree) | ✅ |
| **Amazon affiliate** button on all products | ✅ |
| **Related products** on review pages | ✅ |
| **Legal pages** (About, Privacy, Disclaimer) | ✅ |
| **Custom 404** page | ✅ |

---

## 📁 Project Structure

```
src/
├── app/                          # Next.js App Router pages
│   ├── page.tsx                  # Home page
│   ├── layout.tsx                # Root layout (dark mode, SEO)
│   ├── latest/                   # All products listing
│   ├── under-500 … under-20000/  # Price-based pages
│   ├── category/[slug]/          # 10 category pages
│   ├── phones/[slug]/            # Individual product review
│   ├── compare/                  # Side-by-side comparison
│   ├── search/                   # Search results
│   ├── about, contact/           # Info + working contact form
│   ├── privacy-policy, disclaimer/
│   ├── sitemap.ts                # Auto XML sitemap
│   └── robots.ts                 # robots.txt
├── components/
│   ├── layout/                   # Navbar, Footer, ThemeToggle
│   ├── phones/                   # ProductCard, ProductGrid, Related
│   ├── home/                     # AdBanner, NewsletterBanner
│   └── ui/                       # Badge, SearchBar
├── lib/
│   ├── phones.ts                 # Product data + helpers
│   ├── utils.ts                  # formatPrice, cn, slugify
│   └── useCompare.ts             # Compare state
└── types/
    └── phone.ts                  # TypeScript interfaces
```

---

## 🛒 Adding Your Amazon Affiliate Tag

Once approved for **Amazon Associates**, add your tag to each product's `affiliateLink` in `src/lib/phones.ts`:

```ts
affiliateLink: "https://www.amazon.in/dp/YOUR_ASIN?tag=YOUR-AFFILIATE-TAG",
```

---

## ➕ Adding More Products

Add a new `p(...)` entry to the `phones` array in **`src/lib/phones.ts`** with the product name, price, image, Amazon link, specs, and category.

---

## 🌐 Deployment

Hosted on **Vercel** — auto-deploys on every push to `main`.

```bash
git add .
git commit -m "Your message"
git push
```

---

## 📦 Tech Stack

| Tool | Purpose |
|------|---------|
| **Next.js 15** | App Router, SSG, static generation |
| **TypeScript** | Fully typed throughout |
| **Tailwind CSS 4** | Utility-first styling + dark mode |
| **Lucide React** | Icon set |
| **clsx + tailwind-merge** | Conditional class merging |

---

## 📄 License

**MIT** — free to use and customise for your own affiliate website.

---

<div align="center">

**Made with ❤️ for Indian shoppers**

[Website](https://smartpriceindia.com) • [Instagram](https://instagram.com/smartpriceindia) • [YouTube](https://www.youtube.com/@SmartPriceIndiaOfficial)

</div>
