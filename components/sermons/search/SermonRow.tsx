"use client";

import {
  Eye,
  Download,
  MoreHorizontal,
  Star,
} from "lucide-react";

type Props = {
  favorite?: boolean;
  id: string;
  title: string;
  speaker: string;
  series: string;
  scripture: string;
  date: string;
  length: string;
  type: string;
  status: string;
  source: string;
};

export default function SermonRow({
  favorite = false,
  id,
  title,
  speaker,
  series,
  scripture,
  date,
  length,
  type,
  status,
  source,
}: Props) {
  return (
    <tr className="border-b border-[#8b6a2b]/20 hover:bg-[#15243a] transition">

      {/* Favorite */}

      <td className="px-4 py-4 text-center">

        <Star
          size={17}
          className={favorite ? "fill-amber-400 text-amber-400" : "text-neutral-500"}
        />

      </td>

      {/* BRL */}

      <td className="px-4 py-4 font-semibold text-amber-300 whitespace-nowrap">
        {id}
      </td>

      {/* TITLE */}

      <td className="px-4 py-4 min-w-[260px]">

        <div className="font-semibold text-white">

          {title}

        </div>

        <div className="mt-2 flex gap-2">

          {source === "Legacy Import" && (

            <span className="rounded bg-purple-700/20 px-2 py-1 text-[11px] text-purple-300">

              Legacy

            </span>

          )}

          <span className="rounded bg-green-700/20 px-2 py-1 text-[11px] text-green-300">

            Canonical Complete

          </span>

        </div>

      </td>

      {/* SPEAKER */}

      <td className="px-4 py-4 whitespace-nowrap">

        {speaker}

      </td>

      {/* SERIES */}

      <td className="px-4 py-4 whitespace-nowrap">

        {series}

      </td>

      {/* SCRIPTURE */}

      <td className="px-4 py-4 whitespace-nowrap">

        {scripture}

      </td>

      {/* DATE */}

      <td className="px-4 py-4 whitespace-nowrap">

        {date}

      </td>

      {/* LENGTH */}

      <td className="px-4 py-4 whitespace-nowrap">

        {length}

      </td>

      {/* TYPE */}

      <td className="px-4 py-4 whitespace-nowrap">

        {type}

      </td>

      {/* STATUS */}

      <td className="px-4 py-4 whitespace-nowrap">

        <div className="flex items-center gap-2">

          <div className="h-2 w-2 rounded-full bg-green-500" />

          Published

        </div>

      </td>

      {/* SOURCE */}

      <td className="px-4 py-4 whitespace-nowrap">

        {source}

      </td>

      {/* ACTIONS */}

      <td className="px-4 py-4">

        <div className="flex gap-2">

          <button className="rounded border border-[#8b6a2b]/30 p-2 hover:bg-[#1b2d47]">

            <Eye size={15} />

          </button>

          <button className="rounded border border-[#8b6a2b]/30 p-2 hover:bg-[#1b2d47]">

            <Download size={15} />

          </button>

          <button className="rounded border border-[#8b6a2b]/30 p-2 hover:bg-[#1b2d47]">

            <MoreHorizontal size={15} />

          </button>

        </div>

      </td>

    </tr>
  );
}