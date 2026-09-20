"use client";

import Link from "next/link";
import {
  ChevronDown,
  ChevronUp,
  Filter,
  Search,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";

type Sermon = ReturnType<
  typeof import("@/lib/sermons").getPublishedSermons
>[number];

type SearchResultsPanelProps = {
  sermons: Sermon[];
  query: string;
  onQueryChange: (value: string) => void;
};

type SortKey =
  | "id"
  | "title"
  | "speaker"
  | "series"
  | "primaryText"
  | "length"
  | "status";

type SortDirection = "asc" | "desc";

type FilterKey =
  | "speaker"
  | "series"
  | "primaryText"
  | "length"
  | "status";

type Filters = Record<FilterKey, string>;

const EMPTY_FILTERS: Filters = {
  speaker: "",
  series: "",
  primaryText: "",
  length: "",
  status: "",
};

function uniqueValues(values: string[]) {
  return [...new Set(values.filter(Boolean))].sort((a, b) =>
    a.localeCompare(b, undefined, {
      numeric: true,
      sensitivity: "base",
    })
  );
}

function lengthLabel(minutes?: number) {
  return minutes ? `${minutes} min` : "Not recorded";
}

function compareText(a: string, b: string) {
  return a.localeCompare(b, undefined, {
    numeric: true,
    sensitivity: "base",
  });
}

export default function SearchResultsPanel({
  sermons,
  query,
  onQueryChange,
}: SearchResultsPanelProps) {
  const [sortKey, setSortKey] = useState<SortKey>("id");
  const [sortDirection, setSortDirection] =
    useState<SortDirection>("asc");

  const [filters, setFilters] =
    useState<Filters>(EMPTY_FILTERS);

  const filterOptions = useMemo(
    () => ({
      speaker: uniqueValues(
        sermons.map((sermon) => sermon.speaker || "")
      ),

      series: uniqueValues(
        sermons.map((sermon) => sermon.series || "")
      ),

      primaryText: uniqueValues(
        sermons.map((sermon) => sermon.primaryText || "")
      ),

      length: uniqueValues(
        sermons.map((sermon) =>
          lengthLabel(sermon.estimatedMinutes)
        )
      ),

      status: uniqueValues(
        sermons.map((sermon) => sermon.status || "")
      ),
    }),
    [sermons]
  );

  const displayedSermons = useMemo(() => {
    const filtered = sermons.filter((sermon) => {
      if (
        filters.speaker &&
        sermon.speaker !== filters.speaker
      ) {
        return false;
      }

      if (
        filters.series &&
        sermon.series !== filters.series
      ) {
        return false;
      }

      if (
        filters.primaryText &&
        sermon.primaryText !== filters.primaryText
      ) {
        return false;
      }

      if (
        filters.length &&
        lengthLabel(sermon.estimatedMinutes) !==
          filters.length
      ) {
        return false;
      }

      if (
        filters.status &&
        sermon.status !== filters.status
      ) {
        return false;
      }

      return true;
    });

    return [...filtered].sort((a, b) => {
      let result = 0;

      switch (sortKey) {
        case "id":
          result = compareText(a.id, b.id);
          break;

        case "title":
          result = compareText(a.title, b.title);
          break;

        case "speaker":
          result = compareText(
            a.speaker || "",
            b.speaker || ""
          );
          break;

        case "series":
          result = compareText(
            a.series || "",
            b.series || ""
          );
          break;

        case "primaryText":
          result = compareText(
            a.primaryText || "",
            b.primaryText || ""
          );
          break;

        case "length":
          result =
            (a.estimatedMinutes ?? 9999) -
            (b.estimatedMinutes ?? 9999);
          break;

        case "status":
          result = compareText(
            a.status || "",
            b.status || ""
          );
          break;
      }

      return sortDirection === "asc" ? result : -result;
    });
  }, [sermons, filters, sortKey, sortDirection]);

  const hasColumnFilters = Object.values(filters).some(
    Boolean
  );

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDirection((current) =>
        current === "asc" ? "desc" : "asc"
      );
      return;
    }

    setSortKey(key);
    setSortDirection("asc");
  };

  const setFilter = (
    key: FilterKey,
    value: string
  ) => {
    setFilters((current) => ({
      ...current,
      [key]: value,
    }));
  };

  const clearFilters = () => {
    setFilters(EMPTY_FILTERS);
  };

  const SortIcon = ({ column }: { column: SortKey }) => {
    if (sortKey !== column) {
      return (
        <ChevronDown
          aria-hidden="true"
          className="h-3.5 w-3.5 opacity-40"
        />
      );
    }

    return sortDirection === "asc" ? (
      <ChevronUp
        aria-hidden="true"
        className="h-3.5 w-3.5 text-amber-300"
      />
    ) : (
      <ChevronDown
        aria-hidden="true"
        className="h-3.5 w-3.5 text-amber-300"
      />
    );
  };

  const SortHeader = ({
    column,
    children,
  }: {
    column: SortKey;
    children: React.ReactNode;
  }) => (
    <button
      type="button"
      onClick={() => handleSort(column)}
      className="flex w-full items-center gap-1.5 text-left transition hover:text-amber-300"
      title={`Sort by ${String(children)}`}
    >
      <span>{children}</span>
      <SortIcon column={column} />
    </button>
  );

  const FilterSelect = ({
    filterKey,
    label,
    options,
  }: {
    filterKey: FilterKey;
    label: string;
    options: string[];
  }) => (
    <div className="relative mt-2">
      <Filter
        aria-hidden="true"
        className={`pointer-events-none absolute left-2 top-1/2 h-3 w-3 -translate-y-1/2 ${
          filters[filterKey]
            ? "text-amber-300"
            : "text-neutral-500"
        }`}
      />

      <select
        aria-label={`Filter ${label}`}
        value={filters[filterKey]}
        onChange={(event) =>
          setFilter(filterKey, event.target.value)
        }
        className={`w-full min-w-[110px] appearance-none rounded border bg-black/45 py-1.5 pl-7 pr-6 text-[11px] font-medium normal-case tracking-normal outline-none transition ${
          filters[filterKey]
            ? "border-amber-400/60 text-amber-200"
            : "border-[#8b6a2b]/30 text-neutral-400"
        } focus:border-amber-400`}
      >
        <option value="">All</option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <ChevronDown
        aria-hidden="true"
        className="pointer-events-none absolute right-2 top-1/2 h-3 w-3 -translate-y-1/2 text-neutral-500"
      />
    </div>
  );

  return (
    <section className="overflow-hidden rounded-xl border border-[#8b6a2b]/40 bg-black/35 backdrop-blur-[2px]">
      <div className="border-b border-[#8b6a2b]/30 px-6 py-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-1xl font-bold text-amber-300">
            SEARCH RESULTS ({displayedSermons.length})
          </h2>

          <div className="flex items-center gap-4">
            {hasColumnFilters ? (
              <button
                type="button"
                onClick={clearFilters}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-300 transition hover:text-amber-200"
              >
                <X className="h-4 w-4" />
                Clear Filters
              </button>
            ) : null}

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
            className="w-full rounded-lg border border-[#8b6a2b]/50 bg-black/45 py-3 pl-12 pr-4 text-sm text-white backdrop-blur-sm outline-none placeholder:text-neutral-400 focus:border-amber-400/70"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-[#8b6a2b]/40 bg-black/50 align-top text-xs font-semibold uppercase tracking-wide text-neutral-300 backdrop-blur-sm">
              <th className="min-w-[165px] px-4 py-3 text-left">
                <SortHeader column="id">
                  BRL #
                </SortHeader>
              </th>

              <th className="min-w-[260px] px-4 py-3 text-left">
                <SortHeader column="title">
                  Title
                </SortHeader>
              </th>

              <th className="min-w-[170px] px-4 py-3 text-left">
                <SortHeader column="speaker">
                  Speaker
                </SortHeader>

                <FilterSelect
                  filterKey="speaker"
                  label="Speaker"
                  options={filterOptions.speaker}
                />
              </th>

              <th className="min-w-[210px] px-4 py-3 text-left">
                <SortHeader column="series">
                  Series
                </SortHeader>

                <FilterSelect
                  filterKey="series"
                  label="Series"
                  options={filterOptions.series}
                />
              </th>

              <th className="min-w-[180px] px-4 py-3 text-left">
                <SortHeader column="primaryText">
                  Primary Text
                </SortHeader>

                <FilterSelect
                  filterKey="primaryText"
                  label="Primary Text"
                  options={filterOptions.primaryText}
                />
              </th>

              <th className="min-w-[145px] px-4 py-3 text-left">
                <SortHeader column="length">
                  Length
                </SortHeader>

                <FilterSelect
                  filterKey="length"
                  label="Length"
                  options={filterOptions.length}
                />
              </th>

              <th className="min-w-[145px] px-4 py-3 text-left">
                <SortHeader column="status">
                  Status
                </SortHeader>

                <FilterSelect
                  filterKey="status"
                  label="Status"
                  options={filterOptions.status}
                />
              </th>

              <th className="px-4 py-3 text-center">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {displayedSermons.map((sermon) => (
              <tr
                key={sermon.id}
                className="border-b border-[#8b6a2b]/20 bg-black/15 transition hover:bg-black/35"
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
                  {lengthLabel(
                    sermon.estimatedMinutes
                  )}
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

        {displayedSermons.length === 0 ? (
          <div className="px-8 py-16 text-center">
            <h3 className="text-xl font-semibold text-white">
              No sermons found
            </h3>

            <p className="mt-2 text-neutral-400">
              No published BRL sermons match the
              current search and filters.
            </p>
          </div>
        ) : null}
      </div>
    </section>
  );
}