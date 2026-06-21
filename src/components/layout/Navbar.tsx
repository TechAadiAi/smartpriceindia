"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, FormEvent, useRef, useEffect } from "react";
import { Menu, X, Smartphone, Search } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Latest", href: "/latest" },
  { label: "Under ₹10K", href: "/under-10000" },
  { label: "Under ₹15K", href: "/under-15000" },
  { label: "Under ₹20K", href: "/under-20000" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchOpen && inputRef.current) {
      inputRef.current.focus();
    }
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
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-950 border-b border-slate-200 dark:border-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg flex-shrink-0">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Smartphone size={16} className="text-white" />
            </div>
            <span className="text-slate-900 dark:text-white">
              SmartPrice<span className="text-blue-600">India</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-gray-800"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setSearchOpen((v) => !v)}
              className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Open search"
            >
              {searchOpen ? <X size={18} /> : <Search size={18} />}
            </button>
            <ThemeToggle />
            <button
              className="md:hidden p-2 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {searchOpen && (
          <div className="pb-3 pt-1 border-t border-slate-100 dark:border-gray-800">
            <form onSubmit={handleSearch} className="flex gap-2">
              <div className="relative flex-1">
                <Search
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search phones e.g. Redmi, Samsung, 5G..."
                  className="w-full pl-9 pr-4 py-2.5 text-sm bg-slate-50 dark:bg-gray-800 border border-slate-300 dark:border-gray-600 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-colors"
              >
                Search
              </button>
            </form>
          </div>
        )}

        {menuOpen && (
          <div className="md:hidden py-3 border-t border-slate-200 dark:border-gray-800">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    "px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                    pathname === link.href
                      ? "bg-blue-50 dark:bg-blue-950 text-blue-600"
                      : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-gray-800"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}