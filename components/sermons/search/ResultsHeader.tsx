"use client";

import {
  ArrowUpDown,
  Search,
  Calendar,
  ChevronDown,
} from "lucide-react";

export default function ResultsHeader() {
  return (
    <table className="w-full border-collapse">

      <thead>

        {/* COLUMN HEADERS */}

        <tr className="border-b border-[#8b6a2b]/20 bg-[#16263b] text-xs uppercase tracking-wide text-neutral-400">

          <TH>★</TH>

          <TH>BRL #</TH>

          <TH sort>Title</TH>

          <TH sort>Speaker</TH>

          <TH sort>Series</TH>

          <TH sort>Primary Text</TH>

          <TH sort>Date</TH>

          <TH sort>Length</TH>

          <TH sort>Type</TH>

          <TH sort>Status</TH>

          <TH sort>Source</TH>

          <TH>Actions</TH>

        </tr>

        {/* FILTER ROW */}

        <tr className="border-b border-[#8b6a2b]/20 bg-[#101b2d]">

          <td></td>

          <FilterSelect />

          <FilterSearch />

          <FilterSelect />

          <FilterSelect />

          <FilterSearch />

          <FilterDate />

          <FilterSelect />

          <FilterSelect />

          <FilterSelect />

          <FilterSelect />

          <td></td>

        </tr>

      </thead>

    </table>
  );
}

function TH({
  children,
  sort = false,
}: {
  children: React.ReactNode;
  sort?: boolean;
}) {
  return (
    <th className="px-3 py-3 text-left whitespace-nowrap">

      <div className="flex items-center gap-1">

        {children}

        {sort && <ArrowUpDown size={12} />}

      </div>

    </th>
  );
}

function FilterSearch() {
  return (
    <td className="px-2 py-2">

      <div className="flex items-center rounded border border-[#8b6a2b]/30 bg-[#0B1526] px-2">

        <Search size={13} className="mr-2 text-neutral-500" />

        <input
          placeholder="Search..."
          className="h-8 w-full bg-transparent text-sm outline-none"
        />

      </div>

    </td>
  );
}

function FilterSelect() {
  return (
    <td className="px-2 py-2">

      <button className="flex h-8 w-full items-center justify-between rounded border border-[#8b6a2b]/30 bg-[#0B1526] px-2 text-sm">

        All

        <ChevronDown size={13} />

      </button>

    </td>
  );
}

function FilterDate() {
  return (
    <td className="px-2 py-2">

      <button className="flex h-8 w-full items-center justify-between rounded border border-[#8b6a2b]/30 bg-[#0B1526] px-2 text-sm">

        All

        <Calendar size={13} />

      </button>

    </td>
  );
}