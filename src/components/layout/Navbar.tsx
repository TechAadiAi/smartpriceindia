"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, FormEvent, useRef, useEffect } from "react";
import { Menu, X, Zap, Search, ChevronDown } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { cn } from "@/lib/utils";

const priceLinks = [
  { label: "Under ₹500", href: "/under-500" },
  { label: "Under ₹1000", href: "/under-1000" },
  { label: "Under ₹2000", href: "/under-2000" },
  { label: "Under ₹5000", href: "/under-5000" },
  { label: "Under ₹10000", href: "/under-10000" },
  { label: "Under ₹20000", href: "/under-20000" },
];

const categoryLinks = [
  { label: "Home & Kitchen", href: "/category/home-kitchen" },
  { label: "Tech Gadgets", href: "/category/tech-gadgets" },
  { label: "Smart Home", href: "/category/smart-home" },
  { label: "Kitchen Appliances", href: "/category/kitchen-appliances" },
  { label: "Home Organization", href: "/category/home-organization" },
  { label: "Car Accessories", href: "/category/car-accessories" },
  { label: "Lifestyle Gadgets", href: "/category/lifestyle-gadgets" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [catOpen, setCatOpen] = useState(false);
  const [priceOpen, setPriceOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchOpen && inputRef.current) inputRef.current.focus();
  }, [searchOpen]);

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    if (q) {
      router.push(`/search?q=${encodeURIComponent(q)}`);
      setSearchOpen(false);
      setQuery("");
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-950/90 backdrop-blur-md border-b border-slate-200 dark:border-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-lg flex-shrink-0">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-amber-500 rounded-lg flex items-center justify-center">
              <Zap size={16} className="text-white" />
            </div>
            <span className="text-slate-900 dark:text-white">
              SmartPrice<span className="text-orange-500">India</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link href="/" className={cn("px-3 py-2 rounded-lg text-sm font-medium transition-colors", pathname === "/" ? "bg-orange-50 dark:bg-orange-950 text-orange-600 dark:text-orange-400" : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-gray-800")}>
              Home
            </Link>

            {/* Categories dropdown */}
            <div className="relative" onMouseEnter={() => setCatOpen(true)} onMouseLeave={() => setCatOpen(false)}>
              <button className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-gray-800 transition-colors">
                Categories <ChevronDown size={14} />
              </button>
              {catOpen && (
                <div className="absolute left-0 top-full w-56 bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-700 rounded-xl shadow-lg overflow-hidden py-1">
                  {categoryLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="block px-4 py-2.5 text-sm text-slate-700 dark:text-slate-300 hover:bg-orange-50 dark:hover:bg-orange-950 hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Price dropdown */}
            <div className="relative" onMouseEnter={() => setPriceOpen(true)} onMouseLeave={() => setPriceOpen(false)}>
              <button className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-gray-800 transition-colors">
                By Price <ChevronDown size={14} />
              </button>
              {priceOpen && (
                <div className="absolute left-0 top-full w-48 bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-700 rounded-xl shadow-lg overflow-hidden py-1">
                  {priceLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="block px-4 py-2.5 text-sm text-slate-700 dark:text-slate-300 hover:bg-orange-50 dark:hover:bg-orange-950 hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/latest" className={cn("px-3 py-2 rounded-lg text-sm font-medium transition-colors", pathname === "/latest" ? "bg-orange-50 dark:bg-orange-950 text-orange-600 dark:text-orange-400" : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-gray-800")}>
              Latest
            </Link>
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-1">
            <button onClick={() => setSearchOpen((v) => !v)} className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-gray-800 transition-colors" aria-label="Search">
              {searchOpen ? <X size={18} /> : <Search size={18} />}
            </button>
            <ThemeToggle />
            <button className="lg:hidden p-2 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-gray-800 transition-colors" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div className="pb-3 pt-1 border-t border-slate-100 dark:border-gray-800">
            <form onSubmit={handleSearch} className="flex gap-2">
              <div className="relative flex-1">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                <input ref={inputRef} type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search products e.g. air fryer, smart watch..." className="w-full pl-9 pr-4 py-2.5 text-sm bg-slate-50 dark:bg-gray-800 border border-slate-300 dark:border-gray-600 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500" />
              </div>
              <button type="submit" className="px-4 py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-xl transition-colors">Search</button>
            </form>
          </div>
        )}

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden py-3 border-t border-slate-200 dark:border-gray-800 max-h-[70vh] overflow-y-auto">
            <Link href="/" onClick={() => setMenuOpen(false)} className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-gray-800">Home</Link>
            <p className="px-3 pt-3 pb-1 text-xs font-bold text-slate-400 uppercase">Categories</p>
            {categoryLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="block px-3 py-2 rounded-lg text-sm text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-gray-800">{link.label}</Link>
            ))}
            <p className="px-3 pt-3 pb-1 text-xs font-bold text-slate-400 uppercase">By Price</p>
            {priceLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="block px-3 py-2 rounded-lg text-sm text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-gray-800">{link.label}</Link>
            ))}
            <Link href="/latest" onClick={() => setMenuOpen(false)} className="block px-3 py-2 mt-2 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-gray-800">Latest</Link>
          </div>
        )}
      </div>
    </header>
  );
}
