"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log to an error reporting service in production
    console.error("Page error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950 px-4">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 bg-red-100 dark:bg-red-950 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="text-red-600 dark:text-red-400" size={28} />
        </div>
        <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-2">
          Something went wrong
        </h1>
        <p className="text-slate-500 dark:text-slate-400 mb-2 leading-relaxed">
          An unexpected error occurred while loading this page. This has been
          logged and we&apos;ll look into it.
        </p>
        {error.digest && (
          <p className="text-xs text-slate-400 dark:text-slate-500 font-mono mb-6">
            Error ID: {error.digest}
          </p>
        )}
        <div className="flex gap-3 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-xl transition-colors"
          >
            <RefreshCw size={15} />
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-slate-100 dark:bg-gray-800 hover:bg-slate-200 dark:hover:bg-gray-700 text-slate-700 dark:text-slate-300 font-semibold px-5 py-2.5 rounded-xl transition-colors"
          >
            <Home size={15} />
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
