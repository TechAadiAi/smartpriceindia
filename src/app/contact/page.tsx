"use client";

import { useState, FormEvent } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Mail, Instagram, Youtube, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("https://formspree.io/f/mqevzjgn", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) { setStatus("success"); form.reset(); }
      else { setStatus("error"); }
    } catch { setStatus("error"); }
  };

  return (
    <PageLayout showTopAd={false}>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-2">Contact Us</h1>
        <p className="text-slate-500 dark:text-slate-400 mb-8">Have a question or partnership inquiry? We&apos;d love to hear from you.</p>

        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          <a href="mailto:smartpriceindiaofficial@gmail.com" className="flex flex-col items-center gap-2 bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 hover:border-orange-300 rounded-xl p-5 text-center transition-colors">
            <div className="w-12 h-12 bg-orange-50 dark:bg-orange-950 rounded-full flex items-center justify-center mx-auto mb-1">
              <Mail size={22} className="text-orange-600" />
            </div>
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">Email</p>
            <p className="text-xs text-slate-900 dark:text-white break-all">smartpriceindiaofficial@gmail.com</p>
          </a>
          <a href="https://instagram.com/smartpriceindia" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 hover:border-pink-300 rounded-xl p-5 text-center transition-colors">
            <div className="w-12 h-12 bg-pink-50 dark:bg-pink-950 rounded-full flex items-center justify-center mx-auto mb-1">
              <Instagram size={22} className="text-pink-600" />
            </div>
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">Instagram</p>
            <p className="text-xs text-slate-900 dark:text-white">@smartpriceindia</p>
          </a>
          <a href="https://www.youtube.com/@SmartPriceIndiaOfficial" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 hover:border-red-300 rounded-xl p-5 text-center transition-colors">
            <div className="w-12 h-12 bg-red-50 dark:bg-red-950 rounded-full flex items-center justify-center mx-auto mb-1">
              <Youtube size={22} className="text-red-600" />
            </div>
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">YouTube</p>
            <p className="text-xs text-slate-900 dark:text-white">SmartPriceIndiaOfficial</p>
          </a>
        </div>

        <div className="bg-slate-50 dark:bg-gray-900 border border-slate-200 dark:border-gray-800 rounded-2xl p-6">
          {status === "success" ? (
            <div className="text-center py-8">
              <CheckCircle className="text-green-500 mx-auto mb-3" size={40} />
              <h2 className="font-bold text-slate-900 dark:text-white text-lg mb-1">Message Sent!</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">Thanks for reaching out. We&apos;ll reply within 24 hours.</p>
            </div>
          ) : (
            <>
              <h2 className="font-bold text-slate-900 dark:text-white mb-1">Send us a message</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">We typically reply within 24 hours.</p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">Your Name</label>
                    <input name="name" type="text" required placeholder="Your name" className="w-full px-4 py-2.5 bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">Email Address</label>
                    <input name="email" type="email" required placeholder="your@email.com" className="w-full px-4 py-2.5 bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">Message</label>
                  <textarea name="message" rows={5} required placeholder="Write your message here" className="w-full px-4 py-2.5 bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none" />
                </div>
                <button type="submit" disabled={status === "loading"} className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition-colors disabled:opacity-70">
                  {status === "loading" ? "Sending..." : "Send Message"}
                </button>
                {status === "error" && (
                  <p className="text-sm text-red-500 text-center">Something went wrong. Please email us directly at smartpriceindiaofficial@gmail.com</p>
                )}
              </form>
            </>
          )}
        </div>
      </div>
    </PageLayout>
  );
}