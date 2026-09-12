"use client";

import MetadataEditor from "./editor/MetadataEditor";
import IntroductionEditor from "./editor/IntroductionEditor";
import PointEditor from "./editor/PointEditor";

export default function SermonDocument() {
  return (
    <div className="rounded-xl bg-white shadow-2xl">

      {/* Toolbar */}

      <div className="flex items-center justify-between border-b px-8 py-5">

        <div>

          <h2 className="text-2xl font-bold text-black">
            Canonical Sermon
          </h2>

          <p className="text-neutral-500">
            Write first. Generate resources later.
          </p>

        </div>

        <div className="flex gap-3">

          <button className="rounded-lg border px-4 py-2">
            Save
          </button>

          <button className="rounded-lg border px-4 py-2">
            Preview
          </button>

          <button className="rounded-lg bg-amber-500 px-5 py-2 font-semibold">
            Generate
          </button>

        </div>

      </div>

      {/* Document */}

      <div className="space-y-24 p-12">

        <section>

          <h1 className="mb-8 text-5xl font-bold text-black">
            Metadata
          </h1>

          <MetadataEditor />

        </section>

        <section>

          <h1 className="mb-8 text-5xl font-bold text-black">
            Introduction
          </h1>

          <IntroductionEditor />

        </section>

        <section>

          <h1 className="mb-8 text-5xl font-bold text-black">
            Proposition
          </h1>

          <textarea
            rows={4}
            placeholder="State the proposition of the sermon..."
            className="w-full rounded-lg border border-neutral-300 p-5 text-black outline-none focus:border-amber-500"
          />

        </section>

        <section>

          <h1 className="mb-8 text-5xl font-bold text-black">
            Major Point I
          </h1>
          <PointEditor />

        </section>

      </div>

    </div>
  );
}