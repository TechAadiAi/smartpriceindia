\# SmartPriceIndia 🛍️



India's trusted product review and price comparison platform. Built with \*\*Next.js 15\*\*, \*\*TypeScript\*\*, \*\*Tailwind CSS 4\*\*, and \*\*App Router\*\*.



We cover the best products across \*\*10 categories\*\* — mobiles, fashion, home, groceries, books, music, gaming, pharmacy, toys and sports — with honest reviews, price comparisons, and buying guides for Indian shoppers.



\---



\## 🚀 Quick Start



```bash

\# 1. Install dependencies

npm install



\# 2. Start development server

npm run dev



\# 3. Open in browser

http://localhost:3000

```



\---



\## 📁 Project Structure



```

src/

├── app/                          # Next.js App Router pages

│   ├── page.tsx                  # Home page

│   ├── layout.tsx                # Root layout (dark mode, SEO)

│   ├── latest/page.tsx           # All products listing

│   ├── under-500/page.tsx        # Products under ₹500

│   ├── under-1000/page.tsx       # Products under ₹1,000

│   ├── under-2000/page.tsx       # Products under ₹2,000

│   ├── under-5000/page.tsx       # Products under ₹5,000

│   ├── under-10000/page.tsx      # Products under ₹10,000

│   ├── under-20000/page.tsx      # Products under ₹20,000

│   ├── category/\[slug]/page.tsx  # Category pages (10 categories)

│   ├── phones/\[slug]/page.tsx    # Individual product review

│   ├── compare/page.tsx          # Side-by-side comparison

│   ├── search/page.tsx           # Search results

│   ├── about/page.tsx

│   ├── contact/page.tsx          # Working contact form (Formspree)

│   ├── privacy-policy/page.tsx

│   ├── disclaimer/page.tsx

│   ├── not-found.tsx             # Custom 404

│   ├── sitemap.ts                # Auto XML sitemap

│   └── robots.ts                 # robots.txt

├── components/

│   ├── layout/                   # Navbar, Footer, ThemeToggle, PageLayout

│   ├── phones/                   # ProductCard, ProductGrid, Related, JsonLd

│   ├── compare/                  # CompareButton, CompareDrawer

│   ├── home/                     # AdBanner, NewsletterBanner

│   └── ui/                       # Badge, SearchBar

├── lib/

│   ├── phones.ts                 # Product data + helper functions

│   ├── utils.ts                  # formatPrice, cn, slugify, etc.

│   └── useCompare.ts             # Compare state

└── types/

&#x20;   └── phone.ts                  # TypeScript interfaces

```



\---



\## 🗂️ Categories



1\. Mobiles \& Electronics

2\. Fashion \& Beauty

3\. Home \& Furniture

4\. Groceries \& Pet Supplies

5\. Books \& Education

6\. Video \& Music

7\. Games \& Live Shopping

8\. Pharmacy \& Household

9\. Toys \& Kids

10\. Sports \& Fitness



Plus price-based browsing: Under ₹500 / ₹1,000 / ₹2,000 / ₹5,000 / ₹10,000 / ₹20,000.



\---



\## ✨ Features



| Feature | Status |

|---------|--------|

| Home page with hero, categories, product grids | ✅ |

| 10 category pages | ✅ |

| Price-based browsing (6 budget tiers) | ✅ |

| Individual review pages with specs, pros/cons | ✅ |

| Side-by-side product comparison | ✅ |

| Search functionality | ✅ |

| Category filters + sort (rating, price, newest) | ✅ |

| Dark mode (system-aware + toggle) | ✅ |

| Responsive mobile design | ✅ |

| SEO-optimised meta tags | ✅ |

| JSON-LD structured data | ✅ |

| XML sitemap auto-generated | ✅ |

| Working contact form (Formspree) | ✅ |

| Newsletter signup (Formspree) | ✅ |

| Amazon affiliate button on all products | ✅ |

| Related products on review pages | ✅ |

| About, Contact, Privacy Policy, Disclaimer pages | ✅ |

| Custom 404 page | ✅ |



\---



\## 🛒 Adding Amazon Affiliate Tag



Once approved for Amazon Associates, add your tag to each product's `affiliateLink` in `src/lib/phones.ts`:



```ts

affiliateLink: "https://www.amazon.in/dp/YOUR\_ASIN?tag=YOUR-AFFILIATE-TAG",

```



\---



\## ➕ Adding More Products



Add a new `p(...)` entry to the `phones` array in `src/lib/phones.ts` with the product name, price, image, Amazon link, specs, and category.



\---



\## 🌐 Deployment (Vercel)



Push to GitHub and import at \[vercel.com](https://vercel.com). Auto-deploys on every push to `main`.



\---



\## 📦 Tech Stack



\- \*\*Next.js 15\*\* — App Router, SSG, generateStaticParams

\- \*\*TypeScript\*\* — fully typed throughout

\- \*\*Tailwind CSS 4\*\* — utility-first styling, dark mode

\- \*\*Lucide React\*\* — icon set

\- \*\*clsx + tailwind-merge\*\* — conditional class merging



\---



\## 📄 License



MIT — free to use and customise for your own affiliate website.



