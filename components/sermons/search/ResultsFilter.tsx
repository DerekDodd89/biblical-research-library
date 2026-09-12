"use client";

import { Search, Calendar, ChevronDown } from "lucide-react";

export default function ResultsFilter() {
  return (
    <div className="grid grid-cols-12 gap-2 border-b border-[#8b6a2b]/20 bg-[#101b2d] px-3 py-3">

      {/* Favorite */}

      <Empty />

      {/* BRL */}

      <DropDown />

      {/* Title */}

      <SearchBox />

      {/* Speaker */}

      <DropDown />

      {/* Series */}

      <DropDown />

      {/* Primary Text */}

      <SearchBox />

      {/* Date */}

      <DateBox />

      {/* Length */}

      <DropDown />

      {/* Type */}

      <DropDown />

      {/* Status */}

      <DropDown />

      {/* Source */}

      <DropDown />

      {/* Actions */}

      <Empty />

    </div>
  );
}

function Empty() {
  return <div />;
}

function DropDown() {
  return (
    <button className="flex h-9 items-center justify-between rounded-md border border-[#8b6a2b]/30 bg-[#0B1526] px-3 text-sm hover:bg-[#18273b]">

      <span>All</span>

      <ChevronDown size={15} />

    </button>
  );
}

function SearchBox() {
  return (
    <div className="flex h-9 items-center rounded-md border border-[#8b6a2b]/30 bg-[#0B1526] px-3">

      <Search
        size={14}
        className="mr-2 text-neutral-500"
      />

      <input
        placeholder="Search..."
        className="w-full bg-transparent text-sm outline-none placeholder:text-neutral-500"
      />

    </div>
  );
}

function DateBox() {
  return (
    <button className="flex h-9 items-center justify-between rounded-md border border-[#8b6a2b]/30 bg-[#0B1526] px-3 text-sm hover:bg-[#18273b]">

      <span>All</span>

      <Calendar size={15} />

    </button>
  );
}