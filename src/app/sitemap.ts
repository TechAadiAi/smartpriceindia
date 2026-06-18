import { MetadataRoute } from "next";
import { phones } from "@/lib/phones";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://smartpriceindia.in";
  const now = new Date();

  const staticPages = [
    { url: base, priority: 1.0 },
    { url: `${base}/latest`, priority: 0.9 },
    { url: `${base}/under-10000`, priority: 0.9 },
    { url: `${base}/under-15000`, priority: 0.9 },
    { url: `${base}/under-20000`, priority: 0.9 },
    { url: `${base}/about`, priority: 0.5 },
    { url: `${base}/contact`, priority: 0.5 },
    { url: `${base}/privacy-policy`, priority: 0.3 },
    { url: `${base}/disclaimer`, priority: 0.3 },
  ].map(({ url, priority }) => ({
    url,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority,
  }));

  const phonePages = phones.map((phone) => ({
    url: `${base}/phones/${phone.slug}`,
    lastModified: new Date(phone.updatedAt),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...phonePages];
}
