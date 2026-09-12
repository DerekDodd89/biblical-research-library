"use client";

import Link from "next/link";
import { Search } from "lucide-react";

type Sermon = ReturnType<
  typeof import("@/lib/sermons").getPublishedSermons
>[number];

type SearchResultsPanelProps = {
  sermons: Sermon[];
  query: string;
  onQueryChange: (value: string) => void;
};

export default function SearchResultsPanel({
  sermons,
  query,
  onQueryChange,
}: SearchResultsPanelProps) {
  return (
    <section className="overflow-hidden rounded-xl border border-[#8b6a2b]/30 bg-[#101b2d]">
      <div className="border-b border-[#8b6a2b]/30 px-6 py-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-2xl font-bold text-amber-300">
            SEARCH RESULTS ({sermons.length})
          </h2>

          {query ? (
            <button
              type="button"
              onClick={() => onQueryChange("")}
              className="text-sm font-semibold text-amber-300 transition hover:text-amber-200"
            >
              Clear Search
            </button>
          ) : null}
        </div>

        <div className="relative mt-4">
          <Search
            aria-hidden="true"
            className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-500"
          />

          <input
            type="search"
            value={query}
            onChange={(event) =>
              onQueryChange(event.target.value)
            }
            placeholder="Search title, Scripture, speaker, series, topic, or BRL number..."
            className="w-full rounded-lg border border-[#8b6a2b]/30 bg-[#0B1526] py-3 pl-12 pr-4 text-sm text-white outline-none placeholder:text-neutral-500 focus:border-amber-400/70"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-[#8b6a2b]/30 bg-[#16263b] text-xs font-semibold uppercase tracking-wide text-neutral-400">
              <th className="px-4 py-3 text-left">
                BRL #
              </th>

              <th className="px-4 py-3 text-left">
                Title
              </th>

              <th className="px-4 py-3 text-left">
                Speaker
              </th>

              <th className="px-4 py-3 text-left">
                Series
              </th>

              <th className="px-4 py-3 text-left">
                Primary Text
              </th>

              <th className="px-4 py-3 text-left">
                Length
              </th>

              <th className="px-4 py-3 text-left">
                Status
              </th>

              <th className="px-4 py-3 text-center">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {sermons.map((sermon) => (
              <tr
                key={sermon.id}
                className="border-b border-[#8b6a2b]/20 transition hover:bg-[#15243a]"
              >
                <td className="whitespace-nowrap px-4 py-4 font-semibold text-amber-300">
                  {sermon.id}
                </td>

                <td className="min-w-64 px-4 py-4">
                  <Link
                    href={`/sermons/${sermon.slug}`}
                    className="font-semibold text-white transition hover:text-amber-300"
                  >
                    {sermon.title}
                  </Link>

                  {sermon.subtitle ? (
                    <div className="mt-1 text-sm text-neutral-400">
                      {sermon.subtitle}
                    </div>
                  ) : null}
                </td>

                <td className="whitespace-nowrap px-4 py-4 text-neutral-300">
                  {sermon.speaker}
                </td>

                <td className="px-4 py-4 text-neutral-300">
                  {sermon.series}
                </td>

                <td className="whitespace-nowrap px-4 py-4 text-neutral-300">
                  {sermon.primaryText}
                </td>

                <td className="whitespace-nowrap px-4 py-4 text-neutral-300">
                  {sermon.estimatedMinutes} min
                </td>

                <td className="px-4 py-4">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-500" />

                    <span className="capitalize text-neutral-300">
                      {sermon.status}
                    </span>
                  </div>
                </td>

                <td className="px-4 py-4 text-center">
                  <Link
                    href={`/sermons/${sermon.slug}`}
                    className="inline-flex rounded-md border border-amber-400/40 bg-amber-400/10 px-4 py-2 text-sm font-semibold text-amber-300 transition hover:border-amber-400 hover:bg-amber-400/20"
                  >
                    Open →
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {sermons.length === 0 ? (
          <div className="px-8 py-16 text-center">
            <h3 className="text-xl font-semibold text-white">
              No sermons found
            </h3>

            <p className="mt-2 text-neutral-400">
              No published BRL sermons match this search.
            </p>
          </div>
        ) : null}
      </div>
    </section>
  );
}