"use client";

import { ImportQueueItem } from "@/lib/importer";

type Props = {
  queue: ImportQueueItem[];
  selectedId?: string;
  onSelect?: (sermon: ImportQueueItem) => void;
};

export default function ImportQueue({
  queue,
  selectedId,
  onSelect,
}: Props) {
  return (
    <div className="rounded-xl border border-[#8b6a2b]/30 bg-[#101b2d] p-6">

      <h2 className="mb-5 text-xl font-bold text-amber-300">
        Import Queue ({queue.length})
      </h2>

      <div className="max-h-[650px] overflow-y-auto">

        <table className="w-full">

          <thead className="border-b border-[#8b6a2b]/30 text-left text-sm uppercase tracking-wide text-neutral-400">

            <tr>

              <th className="pb-3">Title</th>

              <th className="pb-3">Resources</th>

              <th className="pb-3">Metadata</th>

              <th className="pb-3">Status</th>

            </tr>

          </thead>

          <tbody>

            {queue.map((sermon) => (

              <QueueRow
                key={sermon.id}
                sermon={sermon}
                selected={selectedId === sermon.id}
                onClick={() => onSelect?.(sermon)}
              />

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

function QueueRow({
  sermon,
  selected,
  onClick,
}: {
  sermon: ImportQueueItem;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <tr
      onClick={onClick}
      className={`cursor-pointer border-b border-[#8b6a2b]/20 transition

      ${
        selected
          ? "bg-[#1b2d45]"
          : "hover:bg-[#16263b]"
      }`}
    >

      <td className="py-4 font-medium">

        {sermon.title}

      </td>

      <td>

        {sermon.resources.length}

      </td>

      <td className="text-neutral-400">

        Pending

      </td>

      <td>

        <span className="rounded-full bg-yellow-500/20 px-3 py-1 text-sm text-yellow-400">

          Waiting

        </span>

      </td>

    </tr>
  );
}