import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ChevronRight, Bookmark } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllBlogPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.seoTitle,
    description: post.metaDescription,
    openGraph: {
      title: post.seoTitle,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.publishedAt,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    author: { "@type": "Organization", name: post.author },
    publisher: {
      "@type": "Organization",
      name: "SmartPriceIndia",
      url: "https://smartpriceindia.com",
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://smartpriceindia.com/blog/${post.slug}`,
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <PageLayout showTopAd={false}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <article className="max-w-3xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1 text-sm text-slate-400 dark:text-slate-500 mb-6">
          <Link href="/" className="hover:text-orange-600">
            Home
          </Link>
          <ChevronRight size={14} />
          <Link href="/blog" className="hover:text-orange-600">
            Blog
          </Link>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <div className="text-5xl mb-4">{post.coverEmoji}</div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 dark:text-slate-500">
            <span className="inline-flex items-center gap-1.5">
              <Calendar size={15} />
              {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock size={15} />
              {post.readTime}
            </span>
            <span>By {post.author}</span>
          </div>
        </div>

        {/* Content */}
        <div className="prose-content">
          {post.content.map((block, i) => {
            if (block.type === "h2")
              return (
                <h2
                  key={i}
                  className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-3"
                >
                  {block.text}
                </h2>
              );
            if (block.type === "h3")
              return (
                <h3
                  key={i}
                  className="text-xl font-semibold text-slate-800 dark:text-slate-100 mt-6 mb-2"
                >
                  {block.text}
                </h3>
              );
            if (block.type === "p")
              return (
                <p
                  key={i}
                  className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4"
                >
                  {block.text}
                </p>
              );
            if (block.type === "ul")
              return (
                <ul key={i} className="space-y-2 mb-4">
                  {block.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-slate-600 dark:text-slate-300 leading-relaxed"
                    >
                      <span className="text-orange-500 mt-1.5 text-xs">●</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              );
            if (block.type === "cta")
              return (
                <div
                  key={i}
                  className="my-8 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 p-6 sm:p-8 text-center"
                >
                  <p className="text-white text-lg font-semibold mb-4">
                    {block.text}
                  </p>
                  <Link
                    href={block.linkHref}
                    className="inline-flex items-center gap-2 bg-white text-orange-600 font-bold px-6 py-3 rounded-xl hover:bg-orange-50 transition-colors"
                  >
                    {block.linkText}
                    <ChevronRight size={18} />
                  </Link>
                </div>
              );
            return null;
          })}
        </div>

        {/* FAQs */}
        {post.faqs.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-5">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {post.faqs.map((faq, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-slate-200 dark:border-slate-800 p-5"
                >
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Internal links / explore */}
        <div className="mt-12 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <Bookmark size={18} className="text-orange-500" />
            Explore SmartPriceIndia
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            <Link
              href="/category/mobiles-electronics"
              className="flex items-center justify-between rounded-lg bg-slate-50 dark:bg-slate-800/60 px-4 py-3 text-slate-700 dark:text-slate-200 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
            >
              Mobiles &amp; Electronics <ChevronRight size={16} />
            </Link>
            <Link
              href="/category/fashion-beauty"
              className="flex items-center justify-between rounded-lg bg-slate-50 dark:bg-slate-800/60 px-4 py-3 text-slate-700 dark:text-slate-200 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
            >
              Fashion &amp; Beauty <ChevronRight size={16} />
            </Link>
            <Link
              href="/latest"
              className="flex items-center justify-between rounded-lg bg-slate-50 dark:bg-slate-800/60 px-4 py-3 text-slate-700 dark:text-slate-200 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
            >
              Latest Deals <ChevronRight size={16} />
            </Link>
            <Link
              href="/about"
              className="flex items-center justify-between rounded-lg bg-slate-50 dark:bg-slate-800/60 px-4 py-3 text-slate-700 dark:text-slate-200 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
            >
              About Us <ChevronRight size={16} />
            </Link>
          </div>
        </div>

        {/* Back to blog */}
        <div className="mt-10 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-orange-600 dark:text-orange-400 font-semibold hover:underline"
          >
            ← Back to all posts
          </Link>
        </div>
      </article>
    </PageLayout>
  );
}
