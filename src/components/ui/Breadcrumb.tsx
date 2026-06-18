import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const all = [{ label: "Home", href: "/" }, ...items];

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center gap-1.5 flex-wrap">
        {all.map((item, i) => {
          const isLast = i === all.length - 1;
          return (
            <li key={i} className="flex items-center gap-1.5">
              {i === 0 && (
                <Home size={13} className="text-slate-400 flex-shrink-0" />
              )}
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className="text-sm text-slate-900 dark:text-white font-medium truncate max-w-[180px]"
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              )}
              {!isLast && (
                <ChevronRight
                  size={13}
                  className="text-slate-300 dark:text-gray-600 flex-shrink-0"
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
