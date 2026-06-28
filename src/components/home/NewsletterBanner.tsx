"use client";

import { useState } from "react";
import { Bell, ArrowRight, CheckCircle } from "lucide-react";

export default function NewsletterBanner() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");

    try {
      const res = await fetch("https://formspree.io/f/mqevzjgn", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email, _subject: "New newsletter signup - SmartPriceIndia" }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border border-green-200 dark:border-green-900 rounded-2xl p-8 text-center">
        <CheckCircle className="text-green-500 mx-auto mb-3" size={36} />
        <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-1">
          You&apos;re in!
        </h3>
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          We&apos;ll alert you when prices drop or new phones launch.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-orange-500 to-amber-600 rounded-2xl p-8 text-white">
      <div className="max-w-2xl mx-auto text-center">
        <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Bell size={22} />
        </div>
        <h2 className="text-2xl font-extrabold mb-2">
          Get Price Drop Alerts
        </h2>
        <p className="text-orange-50 mb-6 text-sm leading-relaxed">
          Be the first to know when your favourite products go on sale. We send
          weekly deal digests — no spam, unsubscribe any time.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className="flex-1 px-4 py-3 rounded-xl bg-white/15 border border-white/30 placeholder-blue-200 text-white focus:outline-none focus:ring-2 focus:ring-white/50 text-sm"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex items-center justify-center gap-2 bg-white text-orange-600 hover:bg-orange-50 font-bold px-6 py-3 rounded-xl transition-colors text-sm disabled:opacity-70 flex-shrink-0"
          >
            {status === "loading" ? (
              "Subscribing…"
            ) : (
              <>
                Subscribe <ArrowRight size={15} />
              </>
            )}
          </button>
        </form>

        {status === "error" && (
          <p className="text-red-300 text-xs mt-3">
            Something went wrong. Please try again or email us directly.
          </p>
        )}

        <p className="text-orange-100 text-xs mt-4">
          📧 Join 12,000+ smart Indian shoppers. No spam ever.
        </p>
      </div>
    </div>
  );
}
