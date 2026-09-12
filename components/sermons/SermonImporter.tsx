"use client";

import { useState } from "react";

import ImportToolbar from "./ImportToolbar";
import ImportQueue from "./ImportQueue";
import MetadataPreview from "./MetadataPreview";

import { ImportQueueItem } from "@/lib/importer";

import {
  Upload,
  FileText,
  FileImage,
  FileArchive,
  FileAudio,
} from "lucide-react";

export default function SermonImporter() {

  const [queue, setQueue] = useState<ImportQueueItem[]>([]);
  const [selected, setSelected] = useState<ImportQueueItem | null>(null);

  return (
    <main className="min-h-screen bg-[#0B1526] text-white">

      {/* Header */}

      <div className="border-b border-[#8b6a2b]/30 px-10 py-6">

        <h1 className="text-4xl font-bold">
          Import Sermons
        </h1>

        <p className="mt-2 text-neutral-400">
          Convert legacy sermons into complete BRL Canonical Sermons.
        </p>

      </div>

      <div className="mx-auto max-w-7xl p-8">

        <ImportToolbar
          onQueueLoaded={(items) => {
            setQueue(items);

            if (items.length > 0) {
              setSelected(items[0]);
            } else {
              setSelected(null);
            }
          }}
        />

        <div className="mt-8 grid grid-cols-3 gap-8">

          {/* LEFT COLUMN */}

          <div className="space-y-6">

            <Section title="Import Source">

              <div className="rounded-xl border-2 border-dashed border-[#8b6a2b]/30 p-10 text-center">

                <Upload className="mx-auto mb-4 h-10 w-10 text-amber-300" />

                <p className="text-lg font-semibold">
                  Drag & Drop Sermons Here
                </p>

                <p className="mt-2 text-sm text-neutral-500">
                  Word • PowerPoint • PDF • Audio
                </p>

              </div>

            </Section>

            <Section title="Detected Resources">

              <Resource
                icon={<FileText size={18} />}
                text="Word Documents"
              />

              <Resource
                icon={<FileImage size={18} />}
                text="PowerPoint Files"
              />

              <Resource
                icon={<FileArchive size={18} />}
                text="PDF Files"
              />

              <Resource
                icon={<FileAudio size={18} />}
                text="Audio Files"
              />

            </Section>

          </div>

          {/* CENTER COLUMN */}

          <div className="space-y-6">

            <ImportQueue
              queue={queue}
              selectedId={selected?.id}
              onSelect={setSelected}
              />

           <MetadataPreview
            />

          </div>

          {/* RIGHT COLUMN */}

          <div className="space-y-6">

            <Section title="Progress">

              <div className="rounded-lg bg-[#0B1526] p-5">

                <p className="text-neutral-400">
                  {queue.length} sermon(s) ready for import.
                </p>

              </div>

            </Section>

          </div>

        </div>

      </div>

    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-[#8b6a2b]/30 bg-[#101b2d] p-6">

      <h2 className="mb-5 text-xl font-bold text-amber-300">
        {title}
      </h2>

      <div className="space-y-4">
        {children}
      </div>

    </div>
  );
}

function Resource({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-center gap-3">

      {icon}

      <input
        type="checkbox"
        defaultChecked
      />

      <span>{text}</span>

    </div>
  );
}