import Link from "next/link";
import { notFound } from "next/navigation";

import ModuleNavigation from "@/components/layout/ModuleNavigation";
import {
  getSermonSeriesBySlug,
  getSermonsForSeries,
} from "@/lib/sermon-series";

type SermonSeriesDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function SermonSeriesDetailPage({
  params,
}: SermonSeriesDetailPageProps) {
  const { slug } = await params;
  const series = getSermonSeriesBySlug(slug);

  if (!series) {
    notFound();
  }

  const sermons = getSermonsForSeries(series);

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
            currentPage={series.title}
            fallbackHref="/sermons/series"
            fallbackLabel="Go Back"
          />

          <header className="mx-auto max-w-4xl py-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-300">
              {series.id}
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              {series.title}
            </h1>

            <p className="mt-5 text-lg leading-8 text-neutral-300">
              {series.description}
            </p>

            <p className="mt-4 text-sm text-neutral-400">
              {sermons.length} sermon
              {sermons.length === 1 ? "" : "s"} in this series
            </p>
          </header>

          <section className="mx-auto max-w-6xl space-y-6 pb-20">
            {sermons.map((sermon, index) => (
              <Link
                key={sermon.id}
                href={`/sermons/${sermon.slug}`}
                className="group block rounded-2xl border border-white/20 bg-black/40 p-7 backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-amber-300/70 hover:bg-black/50"
              >
                <div className="grid gap-6 lg:grid-cols-[auto_1fr_auto] lg:items-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-amber-300/40 bg-amber-300/10 text-xl font-bold text-amber-200">
                    {index + 1}
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
                      {sermon.id}
                    </p>

                    <h2 className="mt-2 text-2xl font-bold transition group-hover:text-amber-200">
                      {sermon.title}
                    </h2>

                    <p className="mt-1 text-neutral-300">
                      {sermon.subtitle}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-x-8 gap-y-2 text-sm text-neutral-300">
                      <p>{sermon.primaryText}</p>
                      <p>{sermon.estimatedMinutes} minutes</p>
                    </div>
                  </div>

                  <span className="font-semibold text-amber-300">
                    Open Sermon →
                  </span>
                </div>
              </Link>
            ))}

            {sermons.length === 0 ? (
              <div className="rounded-2xl border border-white/20 bg-black/40 p-8 text-center backdrop-blur-sm">
                <h2 className="text-xl font-semibold">
                  No sermons assigned
                </h2>

                <p className="mt-2 text-neutral-300">
                  This series does not currently contain any sermons.
                </p>
              </div>
            ) : null}
          </section>
        </div>
      </div>
    </main>
  );
}