// Blog posts data + helper functions

export interface BlogPost {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  category: string;
  readTime: string;
  coverEmoji: string;
  // content is an array of blocks for easy rendering
  content: BlogBlock[];
  faqs: { q: string; a: string }[];
}

export type BlogBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "cta"; text: string; linkText: string; linkHref: string };

export const blogPosts: BlogPost[] = [
  {
    slug: "welcome-to-smartpriceindia",
    title: "Welcome to SmartPriceIndia – Your Smart Shopping Guide for the Best Deals in India",
    seoTitle: "Welcome to SmartPriceIndia – Smart Shopping Guide for Best Deals in India",
    metaDescription:
      "Discover SmartPriceIndia, your trusted guide for honest product reviews, price comparisons, buying guides and the best deals in India. Start shopping smarter today.",
    excerpt:
      "SmartPriceIndia helps you discover the best products, compare prices, and make smarter shopping decisions. Here's everything you need to know about how we help you save money.",
    author: "SmartPriceIndia Team",
    publishedAt: "2026-07-01",
    updatedAt: "2026-07-01",
    category: "Announcements",
    readTime: "8 min read",
    coverEmoji: "🛍️",
    content: [
      {
        type: "p",
        text: "Shopping online in India has never been bigger. Every day, millions of people open their phones to buy everything from smartphones and headphones to clothes, shoes, and beauty products. But with thousands of options, hundreds of brands, and prices that change every hour, one question always stays in our mind: \"Am I really getting the best deal?\"",
      },
      {
        type: "p",
        text: "That is exactly why we created SmartPriceIndia. We are your smart shopping companion — a website built to help everyday Indian shoppers find the right products at the right price, without the confusion. In this post, we will introduce you to SmartPriceIndia, explain why we started, and show you how we can help you save money on every purchase.",
      },
      { type: "h2", text: "What is SmartPriceIndia?" },
      {
        type: "p",
        text: "SmartPriceIndia is a product review and price comparison website made especially for Indian shoppers. Think of us as a trusted friend who has already done all the research for you. Instead of spending hours reading confusing specifications and endless reviews, you can visit SmartPriceIndia and quickly find honest recommendations, clear comparisons, and the best current deals.",
      },
      {
        type: "p",
        text: "We are not a shop. We do not sell anything ourselves. Instead, we carefully study products available on trusted platforms like Amazon India, compare them, test the details, and then recommend the ones that offer the best value for your money. When you find something you like, we send you directly to the retailer to complete your purchase safely.",
      },
      { type: "h2", text: "Why We Created SmartPriceIndia" },
      {
        type: "p",
        text: "The idea for SmartPriceIndia came from a very common problem. Every one of us has faced that moment of doubt before buying something online. Is this phone actually good, or is it just marketing? Is this the lowest price, or will it drop next week? Are these reviews real, or are they paid?",
      },
      {
        type: "p",
        text: "We felt that Indian shoppers deserved a simpler, more honest way to shop. A place where recommendations are based on real value and not on which brand pays the most. A place that speaks in plain, simple language instead of technical jargon. That belief is the foundation of SmartPriceIndia.",
      },
      { type: "h2", text: "How SmartPriceIndia Helps You Save Money" },
      {
        type: "p",
        text: "Saving money is not only about finding the cheapest product. It is about finding the best value — the right product, at a fair price, that will last and truly meet your needs. Here is how we help you do exactly that.",
      },
      { type: "h3", text: "1. Buying Guides" },
      {
        type: "p",
        text: "Our buying guides walk you through everything you need to know before making a purchase. Whether you are buying your first smartphone or upgrading your wardrobe, our guides explain what features matter, what to avoid, and how to pick the best option for your budget.",
      },
      { type: "h3", text: "2. Product Comparisons" },
      {
        type: "p",
        text: "Stuck between two products? Our side-by-side comparisons make the choice easy. We compare price, features, quality, and value so you can instantly see which product is the better pick for you.",
      },
      { type: "h3", text: "3. Honest Reviews" },
      {
        type: "p",
        text: "Every review on SmartPriceIndia is written to help you, not to sell to you. We highlight both the good points and the drawbacks of each product, so you always get the full picture before you spend your hard-earned money.",
      },
      { type: "h3", text: "4. Latest Deals" },
      {
        type: "p",
        text: "Prices online change constantly. We keep an eye on the best offers and discounts so you do not have to. Our deal recommendations help you buy at the right time and grab genuine savings.",
      },
      { type: "h3", text: "5. Trusted Recommendations" },
      {
        type: "p",
        text: "As an Amazon Associate, we recommend products available on Amazon India. When you buy through our links, you pay the same price, but we may earn a small commission that helps us keep the website running and independent. This means we can keep giving you honest advice for free.",
      },
      { type: "h2", text: "Our First Focus: Two Powerful Categories" },
      {
        type: "p",
        text: "To make sure every recommendation is truly high quality, we are starting with two of the most popular shopping categories in India:",
      },
      {
        type: "ul",
        items: [
          "Mobiles & Electronics — smartphones, headphones, smartwatches, gaming gear, and everyday tech that keeps you connected.",
          "Fashion & Beauty — clothing, footwear, grooming, and beauty products that help you look and feel your best.",
        ],
      },
      {
        type: "p",
        text: "These two categories cover the things Indians shop for most often. By focusing here first, we can give you deeper research, better comparisons, and more reliable recommendations instead of spreading ourselves too thin.",
      },
      { type: "h2", text: "What's Coming Next" },
      {
        type: "p",
        text: "SmartPriceIndia is just getting started. Over the coming months, we will expand into many more categories, including Home & Furniture, Groceries & Pet Supplies, Books & Education, Games, Toys & Kids, Sports & Fitness, and more. Our goal is simple: to become your one-stop guide for smart shopping across everything you buy online.",
      },
      { type: "h2", text: "Start Shopping Smarter Today" },
      {
        type: "p",
        text: "Smart shopping is not about spending less — it is about spending wisely. With SmartPriceIndia by your side, you no longer have to guess whether you are making the right choice. We do the research so you can shop with confidence, save money, and enjoy every purchase.",
      },
      {
        type: "cta",
        text: "Ready to shop smarter? Explore our handpicked products and best deals now.",
        linkText: "Browse Products",
        linkHref: "/category/mobiles-electronics",
      },
    ],
    faqs: [
      {
        q: "Is SmartPriceIndia free to use?",
        a: "Yes, SmartPriceIndia is completely free. You can read all our reviews, buying guides, and comparisons without paying anything.",
      },
      {
        q: "Does SmartPriceIndia sell products directly?",
        a: "No. We are a review and comparison website. We recommend products and send you to trusted retailers like Amazon India to complete your purchase safely.",
      },
      {
        q: "How does SmartPriceIndia make money?",
        a: "We are part of the Amazon Associates program. When you buy through our links, you pay the same price, but we may earn a small commission that helps us keep the site running and independent.",
      },
      {
        q: "Which categories does SmartPriceIndia cover?",
        a: "We are currently focused on Mobiles & Electronics and Fashion & Beauty. We plan to expand into many more categories such as home, groceries, books, toys, and sports soon.",
      },
      {
        q: "Are the reviews on SmartPriceIndia honest?",
        a: "Absolutely. Our reviews are written to help you make the best decision. We mention both the strengths and the weaknesses of every product so you get the full picture.",
      },
    ],
  },
];

export function getAllBlogPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
