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
    <main className="flex h-screen overflow-hidden bg-[#08111d] text-white">
      <SermonSidebar />

      <section className="flex flex-1 flex-col overflow-hidden">
        <LibraryHeader sermons={sermons} />

        <div className="flex-1 overflow-auto px-0 pb-6 pt-0">
          <SearchResultsPanel
            sermons={filteredSermons}
            query={query}
            onQueryChange={setQuery}
          />
        </div>
      </section>
    </main>
  );
}