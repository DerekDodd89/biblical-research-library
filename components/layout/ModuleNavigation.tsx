import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

type ModuleNavigationProps = {
  moduleName: string;
  currentPage?: string;
  fallbackHref?: string;
  fallbackLabel?: string;
};

export default function ModuleNavigation({
  moduleName,
  currentPage,
  fallbackHref = "/",
  fallbackLabel = "Go Back",
}: ModuleNavigationProps) {
  return (
    <nav
      aria-label="Page navigation"
      className="mb-10 flex flex-wrap items-center justify-between gap-4"
    >
      <div className="flex flex-wrap items-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-neutral-200 transition hover:border-amber-300/50 hover:text-amber-200"
        >
          <Home className="h-4 w-4" />
          BRL Home
        </Link>

        <Link
          href={fallbackHref}
          className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-neutral-200 transition hover:border-amber-300/50 hover:text-amber-200"
        >
          <ArrowLeft className="h-4 w-4" />
          {fallbackLabel}
        </Link>
      </div>

      <div className="text-right">
        <p className="text-sm font-semibold text-amber-200">
          {moduleName}
        </p>

        {currentPage ? (
          <p className="mt-1 text-sm text-neutral-400">
            {currentPage}
          </p>
        ) : null}
      </div>
    </nav>
  );
}