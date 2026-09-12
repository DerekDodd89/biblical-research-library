"use client";

import Link from "next/link";

import SermonSidebar from "./SermonSidebar";
import { getPublishedSermonSeries, getSermonsForSeries } from "@/lib/sermon-series";

export default function SermonSeriesClient() {
  const series = getPublishedSermonSeries();

  const totalSermonsInSeries = series.reduce((total, item) => {
    return total + getSermonsForSeries(item).length;
  }, 0);

  return (
    <main className="flex h-screen bg-[#0B1526] text-white">
      <SermonSidebar />

      <div className="flex flex-1 flex-col overflow-hidden">

        {/* Header */}

        <div className="border-b border-[#8b6a2b]/30 bg-[#0b1625] px-10 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold">
                Sermon Series
              </h1>

              <p className="mt-2 text-neutral-400">
                Browse sermon series currently registered in the BRL Library.
              </p>
            </div>
          </div>
        </div>

        {/* Statistics */}

        <div className="grid grid-cols-2 gap-5 border-b border-[#8b6a2b]/30 bg-[#09111d] px-10 py-6">
          <Stat
            title="Series"
            value={series.length.toString()}
          />

          <Stat
            title="Sermons in Series"
            value={totalSermonsInSeries.toString()}
          />
        </div>

        {/* Cards */}

        <div className="flex-1 overflow-auto p-8">
          {series.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 xl:grid-cols-3">
              {series.map((item) => {
                const sermons = getSermonsForSeries(item);

                const speaker =
                  sermons.length > 0
                    ? sermons[0].speaker
                    : "Not assigned";

                return (
                  <SeriesCard
                    key={item.id}
                    title={item.title}
                    speaker={speaker}
                    sermons={sermons.length}
                    slug={item.slug}
                  />
                );
              })}
            </div>
          ) : (
            <div className="rounded-2xl border border-[#8b6a2b]/30 bg-[#101b2d] p-10 text-center">
              <h2 className="text-2xl font-bold">
                No Sermon Series Found
              </h2>

              <p className="mt-3 text-neutral-400">
                No published sermon series are currently registered.
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

function Stat({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-[#8b6a2b]/30 bg-[#101b2d] p-5">
      <div className="text-sm text-neutral-500">
        {title}
      </div>

      <div className="mt-2 text-3xl font-bold text-amber-300">
        {value}
      </div>
    </div>
  );
}

function SeriesCard({
  title,
  speaker,
  sermons,
  slug,
}: {
  title: string;
  speaker: string;
  sermons: number;
  slug: string;
}) {
  return (
    <div className="rounded-2xl border border-[#8b6a2b]/30 bg-[#101b2d] p-6 transition hover:border-amber-400/40 hover:bg-[#15243a]">
      <div className="flex items-start justify-between gap-4">
        <h2 className="text-2xl font-bold">
          {title}
        </h2>

        <span className="rounded-full bg-green-500/15 px-3 py-1 text-sm text-green-300">
          Published
        </span>
      </div>

      <div className="mt-6 space-y-2 text-sm">
        <div>
          <span className="text-neutral-500">
            Speaker:
          </span>{" "}
          {speaker}
        </div>

        <div>
          <span className="text-neutral-500">
            Sermons:
          </span>{" "}
          {sermons}
        </div>
      </div>

      <div className="mt-8">
        <Link
          href={`/sermons/series/${slug}`}
          className="inline-flex rounded-lg bg-amber-500 px-4 py-2 font-semibold text-black transition hover:bg-amber-400"
        >
          Open Series →
        </Link>
      </div>
    </div>
  );
}