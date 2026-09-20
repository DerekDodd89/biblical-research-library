"use client";

import Image from "next/image";
import Link from "next/link";

import SermonSidebar from "./SermonSidebar";
import {
  getPublishedSermonSeries,
  getSermonsForSeries,
} from "@/lib/sermon-series";

/*
 * Sermon Series Artwork
 * Files located in:
 * public/images/series/
 */
const SERIES_IMAGES: Record<string, string> = {
  "Biblical Worship":
    "/images/series/01-Biblical-Worship.png",

  "Compassion: Love in Motion":
    "/images/series/02-Compassion.png",

  "Do You Know God?":
    "/images/series/03-Do%20You%20Know%20God.png",

  Hebrews:
    "/images/series/04-Hebrews.png",

  "Sitting at the Feet of Rabbi Jesus":
    "/images/series/05-Rabbi%20Jesus.png",
};

export default function SermonSeriesClient() {
  const series = getPublishedSermonSeries();

  const totalSermonsInSeries = series.reduce((total, item) => {
    return total + getSermonsForSeries(item).length;
  }, 0);

  return (
    <main className="min-h-screen bg-[#0B1526] text-white lg:flex lg:h-screen">
      
      {/* Responsive Sermon Navigation */}
      <SermonSidebar />

      {/* Main Page */}
      <div className="min-w-0 flex-1 lg:flex lg:flex-col lg:overflow-hidden">

        {/* Header */}

        <div className="border-b border-[#8b6a2b]/30 bg-[#0b1625] px-5 py-5 sm:px-6 lg:px-10 lg:py-8">
          <h1 className="text-3xl font-bold sm:text-4xl">
            Sermon Series
          </h1>

          <p className="mt-2 max-w-2xl text-sm text-neutral-400 sm:text-base">
            Browse sermon series currently registered in the BRL Library.
          </p>
        </div>

        {/* Statistics */}

        <div className="grid grid-cols-2 gap-3 border-b border-[#8b6a2b]/30 bg-[#09111d] px-4 py-4 sm:gap-5 sm:px-6 lg:px-10 lg:py-6">
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

        <div className="p-4 sm:p-6 lg:flex-1 lg:overflow-auto lg:p-8">
          {series.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 xl:gap-7">
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
                    image={SERIES_IMAGES[item.title]}
                  />
                );
              })}
            </div>
          ) : (
            <div className="rounded-2xl border border-[#8b6a2b]/30 bg-[#101b2d] p-8 text-center sm:p-10">
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
    <div className="min-w-0 rounded-xl border border-[#8b6a2b]/30 bg-[#101b2d] p-4 sm:p-5">
      <div className="text-xs text-neutral-500 sm:text-sm">
        {title}
      </div>

      <div className="mt-2 text-2xl font-bold text-amber-300 sm:text-3xl">
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
  image,
}: {
  title: string;
  speaker: string;
  sermons: number;
  slug: string;
  image?: string;
}) {
  const hasArtwork = Boolean(image);

  return (
    <div className="group relative aspect-[16/9] min-h-[220px] overflow-hidden rounded-2xl border border-[#8b6a2b]/30 bg-[#101b2d] transition hover:border-amber-400/50 sm:min-h-[240px] lg:min-h-[250px]">

      {/* Background Artwork */}

      {hasArtwork && (
        <Image
          src={image!}
          alt={`${title} sermon series`}
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
          className="object-cover transition duration-300 group-hover:scale-[1.015]"
        />
      )}

      {/* Light Overall Tint */}

      {hasArtwork && (
        <div className="absolute inset-0 bg-[#07111d]/10" />
      )}

      {/* Bottom Readability Gradient */}

      {hasArtwork && (
        <div className="absolute inset-x-0 bottom-0 h-[52%] bg-gradient-to-t from-[#07111d]/95 via-[#07111d]/50 to-transparent" />
      )}

      {/* Card Content */}

      <div className="relative z-10 flex h-full min-h-[220px] flex-col p-4 sm:min-h-[240px] sm:p-5 lg:min-h-[250px]">

        {/* Top Row */}

        <div className="flex items-start justify-between gap-3">
          {!hasArtwork && (
            <h2 className="max-w-[70%] text-xl font-bold sm:text-2xl">
              {title}
            </h2>
          )}

          <span className="ml-auto shrink-0 rounded-full border border-green-400/20 bg-green-950/80 px-3 py-1 text-xs text-green-300 shadow-lg backdrop-blur-sm sm:text-sm">
            Published
          </span>
        </div>

        {/* Bottom Information */}

        <div className="mt-auto">
          <div className="mb-3 space-y-1 text-xs sm:mb-4 sm:text-sm">
            <div className="drop-shadow-md">
              <span className="text-neutral-300">
                Speaker:
              </span>{" "}
              <span className="font-semibold text-white">
                {speaker}
              </span>
            </div>

            <div className="drop-shadow-md">
              <span className="text-neutral-300">
                Sermons:
              </span>{" "}
              <span className="font-semibold text-white">
                {sermons}
              </span>
            </div>
          </div>

          <Link
            href={`/sermons/series/${slug}`}
            className="inline-flex min-h-[42px] items-center rounded-lg bg-amber-500 px-4 py-2 text-sm font-semibold text-black shadow-lg transition hover:bg-amber-400 sm:text-base"
          >
            Open Series →
          </Link>
        </div>
      </div>
    </div>
  );
}