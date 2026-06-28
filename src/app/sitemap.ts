import { MetadataRoute } from "next";
import { phones, productCategories } from "@/lib/phones";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://smartpriceindia.com";
  const now = new Date();

  const staticPages = [
    { url: base, priority: 1.0 },
    { url: `${base}/latest`, priority: 0.9 },
    { url: `${base}/under-500`, priority: 0.9 },
    { url: `${base}/under-1000`, priority: 0.9 },
    { url: `${base}/under-2000`, priority: 0.9 },
    { url: `${base}/under-5000`, priority: 0.9 },
    { url: `${base}/under-10000`, priority: 0.9 },
    { url: `${base}/under-20000`, priority: 0.9 },
    { url: `${base}/about`, priority: 0.5 },
    { url: `${base}/contact`, priority: 0.5 },
    { url: `${base}/privacy-policy`, priority: 0.3 },
    { url: `${base}/disclaimer`, priority: 0.3 },
  ].map(({ url, priority }) => ({ url, lastModified: now, changeFrequency: "weekly" as const, priority }));

  const categoryPages = productCategories.map((c) => ({
    url: `${base}/category/${c.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const productPages = phones.map((p) => ({
    url: `${base}/phones/${p.slug}`,
    lastModified: new Date(p.updatedAt),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...categoryPages, ...productPages];
}
