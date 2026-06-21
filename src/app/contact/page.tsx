import { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import { Mail, Instagram, Youtube } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us – SmartPriceIndia",
  description: "Get in touch with SmartPriceIndia.",
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

          <div className="bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 rounded-xl p-5 text-center">
            <div className="w-12 h-12 bg-blue-50 dark:bg-blue-950 rounded-full flex items-center justify-center mx-auto mb-3">
              <Mail size={22} className="text-blue-600" />
            </div>
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">Email</p>
            <p className="text-xs text-slate-900 dark:text-white break-all mb-3">smartpriceindiaofficial@gmail.com</p>
            
              href="mailto:smartpriceindiaofficial@gmail.com"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              Send Email
            </a>
          </div>

          <div className="bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 rounded-xl p-5 text-center">
            <div className="w-12 h-12 bg-pink-50 dark:bg-pink-950 rounded-full flex items-center justify-center mx-auto mb-3">
              <Instagram size={22} className="text-pink-600" />
            </div>
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">Instagram</p>
            <p className="text-xs text-slate-900 dark:text-white mb-3">@smartpriceindia</p>
            
              href="https://instagram.com/smartpriceindia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-pink-600 hover:bg-pink-700 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              Follow Us
            </a>
          </div>

          <div className="bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 rounded-xl p-5 text-center">
            <div className="w-12 h-12 bg-red-50 dark:bg-red-950 rounded-full flex items-center justify-center mx-auto mb-3">
              <Youtube size={22} className="text-red-600" />
            </div>
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">YouTube</p>
            <p className="text-xs text-slate-900 dark:text-white mb-3">SmartPriceIndiaOfficial</p>
            
              href="https://www.youtube.com/@SmartPriceIndiaOfficial"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-600 hover:bg-red-700 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              Subscribe
            </a>
          </div>

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
                  placeholder="Your name"
                  className="w-full px-4 py-2.5 bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">Email Address</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-2.5 bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">Message</label>
              <textarea
                rows={5}
                placeholder="Write your message here"
                className="w-full px-4 py-2.5 bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
            </div>
            <button
              type="button"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-colors"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}