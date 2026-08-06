import Link from "next/link";
import { BookOpenText } from "lucide-react";

import ModuleNavigation from "@/components/layout/ModuleNavigation";
import {
  getPublishedSermonSeries,
  getSermonsForSeries,
} from "@/lib/sermon-series";

export default function SermonSeriesPage() {
  const seriesCollection = getPublishedSermonSeries();

  return (
    <main className="relative min-h-screen overflow-hidden bg-neutral-950 text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 bg-cover bg-center bg-no-repeat opacity-[0.16]"
        style={{
          backgroundImage: "url('/images/modules/08-sermons.png')",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 bg-neutral-950/10"
      />

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-8 py-8">
          <ModuleNavigation
            moduleName="Sermons & Outlines"
            currentPage="Sermon Series"
            fallbackHref="/sermons"
            fallbackLabel="Go Back"
          />

          <header className="mx-auto max-w-4xl py-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-300">
              Series Library
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Sermon Series
            </h1>

            <p className="mt-5 text-lg text-neutral-300">
              Browse sermons organized into connected preaching series.
            </p>
          </header>

          <section className="mx-auto grid max-w-6xl gap-8 pb-20 md:grid-cols-2">
            {seriesCollection.map((series) => {
              const sermons = getSermonsForSeries(series);

              return (
                <Link
                  key={series.id}
                  href={`/sermons/series/${series.slug}`}
                  className="group min-h-[300px] rounded-3xl border border-white/20 bg-black/40 p-8 backdrop-blur-sm transition hover:-translate-y-1 hover:border-amber-300/70 hover:bg-black/50"
                >
                  <div className="flex h-full flex-col">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-amber-300/40 bg-amber-300/10">
                      <BookOpenText className="h-9 w-9 text-amber-300" />
                    </div>

                    <p className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
                      {series.id}
                    </p>

                    <h2 className="mt-3 text-3xl font-bold transition group-hover:text-amber-200">
                      {series.title}
                    </h2>

                    <p className="mt-4 leading-7 text-neutral-300">
                      {series.description}
                    </p>

                    <div className="mt-auto flex items-center justify-between gap-4 pt-8">
                      <span className="text-sm text-neutral-300">
                        {sermons.length} sermon
                        {sermons.length === 1 ? "" : "s"}
                      </span>

                      <span className="font-semibold text-amber-300">
                        Open Series →
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </section>
        </div>
      </div>
    </main>
  );
}