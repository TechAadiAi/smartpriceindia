"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";

const ROTATING_WORDS = [
  "Mobiles",
  "Fashion",
  "Gadgets",
  "Home Decor",
  "Groceries",
  "Toys & Games",
];

const TYPE_TARGET = "Best Products";

function useCountUp(target: number, start: boolean, duration = 1500) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const startTime = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      // ease-out
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start, duration]);
  return value;
}

export default function HeroAnimated() {
  // Typewriter
  const [typed, setTyped] = useState("");
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setTyped(TYPE_TARGET.slice(0, i));
      if (i >= TYPE_TARGET.length) clearInterval(timer);
    }, 90);
    return () => clearInterval(timer);
  }, []);

  // Rotating words
  const [wordIndex, setWordIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 2200);
    return () => clearInterval(timer);
  }, []);

  // Counters — start when component mounts
  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setStartCount(true);
  }, []);
  const products = useCountUp(30, startCount);
  const categories = useCountUp(10, startCount);
  const honest = useCountUp(100, startCount);

  return (
    <section className="relative bg-gradient-to-br from-orange-50 via-white to-amber-50 dark:from-gray-950 dark:via-gray-950 dark:to-gray-900 overflow-hidden">
      {/* Floating animated product emojis */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <span className="hero-float hero-float-1 absolute text-4xl md:text-5xl opacity-20">📱</span>
        <span className="hero-float hero-float-2 absolute text-4xl md:text-5xl opacity-20">🛍️</span>
        <span className="hero-float hero-float-3 absolute text-4xl md:text-5xl opacity-20">🎧</span>
        <span className="hero-float hero-float-4 absolute text-4xl md:text-5xl opacity-20">👟</span>
        <span className="hero-float hero-float-5 absolute text-4xl md:text-5xl opacity-20">⌚</span>
        <span className="hero-float hero-float-6 absolute text-4xl md:text-5xl opacity-20">🎮</span>
      </div>

      <div ref={sectionRef} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
        <div className="hero-reveal hero-reveal-1 inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-950 text-orange-700 dark:text-orange-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
          <TrendingUp size={12} />
          India&apos;s Trusted Product Review Platform
        </div>

        {/* Typewriter headline */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-3 text-slate-900 dark:text-white min-h-[1.2em]">
          Find the{" "}
          <span className="hero-gradient-text">{typed}</span>
          <span className="type-caret">|</span>
        </h1>

        {/* Rotating category words */}
        <div className="text-2xl md:text-3xl font-bold mb-4 text-slate-700 dark:text-slate-300 h-10 flex items-center justify-center gap-2">
          <span>Best deals in</span>
          <span key={wordIndex} className="word-rotate text-orange-500">
            {ROTATING_WORDS[wordIndex]}
          </span>
        </div>

        <p className="hero-reveal hero-reveal-3 text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto mb-8">
          Honest reviews and buying guides across every category — handpicked for Indian shoppers.
        </p>

        {/* Search bar */}
        <form action="/search" method="get" className="hero-reveal hero-reveal-4 max-w-xl mx-auto flex gap-2 mb-8">
          <input
            name="q"
            type="text"
            placeholder="Search air fryer, smart watch, robot vacuum..."
            className="flex-1 px-5 py-3.5 bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-sm"
          />
          <button type="submit" className="px-6 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-colors shadow-sm">
            Search
          </button>
        </form>

        {/* Animated counters */}
        <div className="hero-reveal hero-reveal-4 flex flex-wrap justify-center gap-6 sm:gap-10 mb-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-extrabold text-orange-500">{products}+</div>
            <div className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-medium">Products</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-extrabold text-orange-500">{categories}</div>
            <div className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-medium">Categories</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-extrabold text-orange-500">{honest}%</div>
            <div className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-medium">Honest Reviews</div>
          </div>
        </div>

        <div className="hero-reveal hero-reveal-5 flex flex-wrap gap-3 justify-center">
          <Link href="/category/mobiles-electronics" className="hero-shine inline-flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity">
            Explore Products <ArrowRight size={16} />
          </Link>
          <Link href="/under-500" className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 text-slate-700 dark:text-white font-semibold px-6 py-3 rounded-xl border border-slate-200 dark:border-gray-700 hover:bg-slate-50 dark:hover:bg-gray-700 transition-colors">
            Deals Under ₹500
          </Link>
        </div>
      </div>
    </section>
  );
}
