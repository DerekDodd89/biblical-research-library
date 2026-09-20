"use client";

import { useMemo, useState } from "react";

import SermonSidebar from "./SermonSidebar";
import LibraryHeader from "./LibraryHeader";
import SearchResultsPanel from "./SearchResultsPanel";

import { getPublishedSermons } from "@/lib/sermons";

export default function SermonLibraryClient() {
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
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return searchableContent.includes(normalizedQuery);
    });
  }, [query, sermons]);

  return (
    <main className="relative min-h-screen bg-[#08111d] text-white lg:h-screen lg:overflow-hidden">

      {/* John 1 Codex Background */}

      <div
        aria-hidden="true"
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/images/modules/11-Johns-Codex.png')",
        }}
      />

      {/* Dark Overlay */}

      <div
        aria-hidden="true"
        className="fixed inset-0 bg-black/55"
      />

      {/* =========================================================
          SERMON LIBRARY
          Mobile: stacked vertically
          Desktop: sidebar + content
          ========================================================= */}

      <div className="relative z-10 min-h-screen lg:flex lg:h-full">

        {/* Responsive Sermon Navigation */}

        <SermonSidebar />

        {/* Main Search Library */}

        <section className="min-w-0 flex-1 lg:flex lg:flex-col lg:overflow-hidden">

          {/* Library Header */}

          <LibraryHeader sermons={sermons} />

          {/* Search Results */}

          <div className="min-w-0 pb-6 lg:flex-1 lg:overflow-auto">

            <SearchResultsPanel
              sermons={filteredSermons}
              query={query}
              onQueryChange={setQuery}
            />

          </div>

        </section>

      </div>

    </main>
  );
}