import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { getAllBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog – Buying Guides, Reviews & Deals | SmartPriceIndia",
  description:
    "Read the latest buying guides, honest product reviews, comparisons, and money-saving tips from SmartPriceIndia. Shop smarter across mobiles, electronics, fashion, and beauty.",
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <PageLayout showTopAd={false}>
      <div className="max-w-4xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-3">
            The SmartPriceIndia Blog
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Buying guides, honest reviews, comparisons, and the best deals — all
            written to help you shop smarter and save money.
          </p>
        </div>

        <div className="grid gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 hover:shadow-lg hover:border-orange-300 dark:hover:border-orange-700 transition-all"
            >
              <div className="flex items-start gap-5">
                <div className="hidden sm:flex shrink-0 w-16 h-16 rounded-xl bg-orange-50 dark:bg-orange-950/40 items-center justify-center text-3xl">
                  {post.coverEmoji}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 text-xs text-slate-400 dark:text-slate-500 mb-2">
                    <span className="inline-flex items-center gap-1">
                      <Calendar size={13} />
                      {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock size={13} />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-3">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-orange-600 dark:text-orange-400">
                    Read more
                    <ArrowRight
                      size={15}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
