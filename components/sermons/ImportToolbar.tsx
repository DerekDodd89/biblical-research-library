"use client";

import { useState } from "react";
import { ImportQueueItem } from "@/lib/importer";

type Props = {
  onQueueLoaded: (queue: ImportQueueItem[]) => void;
};

export default function ImportToolbar({
  onQueueLoaded,
}: Props) {
  const [folder, setFolder] = useState("");

  async function scanLibrary() {

    console.log("Folder State:", folder);

    if (!folder.trim()) {
      alert("Please enter a folder path.");
      return;
    }

    try {

      const response = await fetch("/api/sermons/import", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          folder,
        }),
      });

      const data = await response.json();

      console.log("API Response:", data);

      if (!response.ok || !data.success) {
        alert(data.error ?? "Import failed.");
        return;
      }

      if (!Array.isArray(data.queue)) {
        console.error("Queue is not an array.", data.queue);
        alert("Importer returned an invalid queue.");
        return;
      }

      console.log("QUEUE RETURNED:", data.queue);
      console.log("QUEUE LENGTH:", data.queue.length);

      onQueueLoaded(data.queue);

      console.log("Queue Loaded:", data.queue.length);

    } catch (error) {

      console.error(error);

      alert("Unable to communicate with importer.");

    }
  }

  return (
    <div className="rounded-xl border border-[#8b6a2b]/30 bg-[#101b2d] p-6">

      <h2 className="mb-5 text-xl font-bold text-amber-300">
        Choose Sermon Library
      </h2>

      <div className="flex gap-4">

        <input
          type="text"
          autoComplete="off"
          value={folder}
          onChange={(e) => {
            console.log("Typing:", e.target.value);
            setFolder(e.target.value);
          }}
          placeholder="C:\\Users\\Derek\\Documents\\Josh Sermons\\sermons"
          className="flex-1 rounded-lg border border-[#8b6a2b]/30 bg-[#0B1526] px-4 py-3 text-white outline-none placeholder:text-neutral-500 focus:border-amber-400"
        />

        <button
          onClick={scanLibrary}
          className="rounded-lg bg-amber-500 px-6 py-3 font-semibold text-black transition hover:bg-amber-400"
        >
          Scan Folder
        </button>

      </div>

    </div>
  );
}