import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-[70vh] flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <p className="text-7xl mb-4">📱</p>
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-2">
            404
          </h1>
          <h2 className="text-xl font-semibold text-slate-700 dark:text-slate-300 mb-3">
            Page Not Found
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
            Try searching for a product instead.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>
            <Link
              href="/search"
              className="inline-flex items-center justify-center gap-2 bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-700 text-slate-700 dark:text-slate-300 font-semibold px-6 py-3 rounded-xl hover:bg-slate-50 dark:hover:bg-gray-800 transition-colors"
            >
              <Search size={16} />
              Search Products
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
