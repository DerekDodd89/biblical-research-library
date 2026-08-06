"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";

import ModuleNavigation from "@/components/layout/ModuleNavigation";
import { getPublishedSermons } from "@/lib/sermons";

export default function SermonLibraryPage() {
  const sermons = getPublishedSermons();
  const [query, setQuery] = useState("");

  const filteredSermons = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return sermons;
    }

    return sermons.filter((sermon) => {
      const searchableContent = [
        sermon.id,
        sermon.title,
        sermon.subtitle,
        sermon.series,
        sermon.speaker,
        sermon.primaryText,
        sermon.proposition,
        sermon.audience,
        ...sermon.topics,
      ]
        .join(" ")
        .toLowerCase();

      return searchableContent.includes(normalizedQuery);
    });
  }, [query, sermons]);

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
            currentPage="Search Sermon Library"
            fallbackHref="/sermons"
            fallbackLabel="Go Back"
          />

          <header className="mx-auto max-w-4xl py-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-300">
              Sermon Library
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Search Sermon Library
            </h1>

            <p className="mt-5 text-lg text-neutral-300">
              Search every published sermon by title, Scripture, topic,
              speaker, series, or BRL number.
            </p>
          </header>

          <section className="mx-auto max-w-6xl pb-20">
            <div className="relative">
              <Search
                aria-hidden="true"
                className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400"
              />

              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by title, Scripture, topic, speaker, series, or BRL number..."
                className="w-full rounded-2xl border border-white/20 bg-black/45 py-5 pl-14 pr-5 text-base text-white outline-none backdrop-blur-sm placeholder:text-neutral-400 focus:border-amber-300/70"
              />
            </div>

            <div className="mt-6 flex items-center justify-between gap-4">
              <p className="text-sm text-neutral-300">
                {filteredSermons.length} sermon
                {filteredSermons.length === 1 ? "" : "s"} found
              </p>

              {query ? (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="text-sm font-semibold text-amber-300 hover:text-amber-200"
                >
                  Clear search
                </button>
              ) : null}
            </div>

            <div className="mt-8 space-y-5">
              {filteredSermons.map((sermon) => (
                <Link
                  key={sermon.id}
                  href={`/sermons/${sermon.slug}`}
                  className="group block rounded-2xl border border-white/20 bg-black/40 p-6 backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-amber-300/70 hover:bg-black/50"
                >
                  <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-xs font-semibold text-amber-200">
                          {sermon.id}
                        </span>

                        <span className="text-sm text-neutral-400">
                          {sermon.estimatedMinutes} minutes
                        </span>
                      </div>

                      <h2 className="mt-4 text-2xl font-bold transition group-hover:text-amber-200">
                        {sermon.title}
                      </h2>

                      <p className="mt-1 text-neutral-300">
                        {sermon.subtitle}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-x-8 gap-y-2 text-sm text-neutral-300">
                        <p>
                          <span className="text-neutral-500">
                            Primary Text:
                          </span>{" "}
                          {sermon.primaryText}
                        </p>

                        <p>
                          <span className="text-neutral-500">Series:</span>{" "}
                          {sermon.series}
                        </p>

                        <p>
                          <span className="text-neutral-500">Speaker:</span>{" "}
                          {sermon.speaker}
                        </p>
                      </div>
                    </div>

                    <span className="font-semibold text-amber-300">
                      Open Sermon →
                    </span>
                  </div>
                </Link>
              ))}

              {filteredSermons.length === 0 ? (
                <div className="rounded-2xl border border-white/20 bg-black/40 p-8 text-center backdrop-blur-sm">
                  <h2 className="text-xl font-semibold">No sermons found</h2>

                  <p className="mt-2 text-neutral-300">
                    Try another title, Scripture, topic, speaker, series, or BRL
                    number.
                  </p>
                </div>
              ) : null}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}