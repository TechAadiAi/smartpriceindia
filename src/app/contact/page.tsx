import { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import { Mail, Youtube, Instagram } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us – SmartPriceIndia",
  description: "Get in touch with the SmartPriceIndia team.",
};

export default function ContactPage() {
  return (
    <PageLayout showTopAd={false}>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-2">
          Contact Us
        </h1>
        <p className="text-slate-500 dark:text-slate-400 mb-8">
          Have a question or partnership inquiry? We&apos;d love to hear from you.
        </p>

        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          
            href="mailto:smartpriceindiaofficial@gmail.com"
            className="flex flex-col items-center gap-2 bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 hover:border-blue-300 rounded-xl p-5 text-center transition-colors group"
          >
            <div className="w-10 h-10 bg-blue-50 dark:bg-blue-950 rounded-full flex items-center justify-center text-blue-600">
              <Mail size={20} />
            </div>
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">Email</p>
            <p className="text-sm font-medium text-slate-900 dark:text-white break-all">smartpriceindiaofficial@gmail.com</p>
          </a>

          
            href="https://instagram.com/smartpriceindia"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 hover:border-blue-300 rounded-xl p-5 text-center transition-colors group"
          >
            <div className="w-10 h-10 bg-blue-50 dark:bg-blue-950 rounded-full flex items-center justify-center text-blue-600">
              <Instagram size={20} />
            </div>
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">Instagram</p>
            <p className="text-sm font-medium text-slate-900 dark:text-white">@smartpriceindia</p>
          </a>

          
            href="https://www.youtube.com/@SmartPriceIndiaOfficial"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 hover:border-blue-300 rounded-xl p-5 text-center transition-colors group"
          >
            <div className="w-10 h-10 bg-blue-50 dark:bg-blue-950 rounded-full flex items-center justify-center text-blue-600">
              <Youtube size={20} />
            </div>
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">YouTube</p>
            <p className="text-sm font-medium text-slate-900 dark:text-white">SmartPriceIndia</p>
          </a>
        </div>

        <div className="bg-slate-50 dark:bg-gray-900 border border-slate-200 dark:border-gray-800 rounded-2xl p-6">
          <h2 className="font-bold text-slate-900 dark:text-white mb-1">Send us a message</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
            We typically reply within 24 hours.
          </p>
          <div className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">Your Name</label>
                <input
                  type="text"
                  placeholder="Rahul Sharma"
                  className="w-full px-4 py-2.5 bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">Email Address</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-2.5 bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">Message</label>
              <textarea
                rows={5}
                placeholder="Write your message here…"
                className="w-full px-4 py-2.5 bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
            </div>
            <button
              type="button"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-colors"
            >
              Send Message
            </button>
            <p className="text-xs text-center text-slate-400">
              Or email us at{" "}
              <a href="mailto:smartpriceindiaofficial@gmail.com" className="text-blue-600 hover:underline">
                smartpriceindiaofficial@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}