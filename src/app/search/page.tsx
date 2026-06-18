import { Metadata } from "next";
import { Suspense } from "react";
import PageLayout from "@/components/layout/PageLayout";
import PhoneGrid from "@/components/phones/PhoneGrid";
import SearchBar from "@/components/ui/SearchBar";
import { searchPhones, phones } from "@/lib/phones";

export const metadata: Metadata = {
  title: "Search Smartphones – SmartPriceIndia",
  description: "Search for smartphones by name or brand. Find reviews and prices instantly.",
  robots: { index: false, follow: true },
};

interface Props {
  searchParams: Promise<{ q?: string }>;
}

function SearchResults({ query }: { query: string }) {
  const results = query ? searchPhones(query) : phones;

  return (
    <div className="mt-8">
      {query ? (
        <p className="text-slate-500 dark:text-slate-400 mb-6">
          {results.length > 0
            ? `Found ${results.length} result${results.length > 1 ? "s" : ""} for "${query}"`
            : `No results found for "${query}"`}
        </p>
      ) : (
        <p className="text-slate-500 dark:text-slate-400 mb-6">
          Showing all phones. Use the search box above to narrow down.
        </p>
      )}

      {results.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-5xl mb-4">🔍</p>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
            No phones found
          </h2>
          <p className="text-slate-500 dark:text-slate-400">
            Try searching for a different brand or model name.
          </p>
        </div>
      ) : (
        <PhoneGrid phones={results} showFilters={false} />
      )}
    </div>
  );
}

export default async function SearchPage({ searchParams }: Props) {
  const { q } = await searchParams;
  const query = q?.trim() ?? "";

  return (
    <PageLayout>
      <div className="max-w-2xl mx-auto mb-2">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
          Search Smartphones
        </h1>
        <SearchBar
          defaultValue={query}
          placeholder="Search by name, brand, or feature…"
          size="lg"
        />
      </div>

      <Suspense fallback={<p className="text-center py-12 text-slate-500">Searching…</p>}>
        <SearchResults query={query} />
      </Suspense>
    </PageLayout>
  );
}
