import MetadataEditor from "./MetadataEditor";
import IntroductionEditor from "./IntroductionEditor";
import PointEditor from "./PointEditor";
import ConclusionEditor from "./ConclusionEditor";

export default function SermonEditor() {
  return (
    <article className="mx-auto w-full max-w-5xl bg-white text-neutral-900">

      {/* Metadata */}

      <section
        id="metadata"
        className="border-b border-neutral-200 px-12 py-10"
      >
        <MetadataEditor />
      </section>

      {/* Introduction */}

      <section
        id="introduction"
        className="border-b border-neutral-200 px-12 py-10"
      >
        <IntroductionEditor />
      </section>

      {/* Proposition */}

      <section
        id="proposition"
        className="border-b border-neutral-200 px-12 py-10"
      >
        <h2 className="mb-6 text-3xl font-bold text-neutral-900">
          Proposition
        </h2>

        <textarea
          rows={4}
          placeholder="State the central proposition of the sermon..."
          className="w-full rounded-lg border border-neutral-300 p-4 outline-none focus:border-amber-500"
        />
      </section>

      {/* Major Point I */}

      <section
        id="point1"
        className="border-b border-neutral-200 px-12 py-12"
      >
        <div className="mb-8 flex items-center justify-between">

          <h2 className="text-3xl font-bold text-neutral-900">
            I. Major Point
          </h2>

          <button className="rounded-lg border border-neutral-300 px-4 py-2 text-sm hover:bg-neutral-100">
            Rename
          </button>

        </div>

        <PointEditor />
      </section>

      {/* Major Point II */}

      <section
        id="point2"
        className="border-b border-neutral-200 px-12 py-12"
      >
        <div className="mb-8 flex items-center justify-between">

          <h2 className="text-3xl font-bold text-neutral-900">
            II. Major Point
          </h2>

          <button className="rounded-lg border border-neutral-300 px-4 py-2 text-sm hover:bg-neutral-100">
            Rename
          </button>

        </div>

        <textarea
          rows={8}
          placeholder="Develop the second major point..."
          className="w-full rounded-lg border border-neutral-300 p-4 outline-none focus:border-amber-500"
        />
      </section>

      {/* Major Point III */}

      <section
        id="point3"
        className="border-b border-neutral-200 px-12 py-12"
      >
        <div className="mb-8 flex items-center justify-between">

          <h2 className="text-3xl font-bold text-neutral-900">
            III. Major Point
          </h2>

          <button className="rounded-lg border border-neutral-300 px-4 py-2 text-sm hover:bg-neutral-100">
            Rename
          </button>

        </div>

        <textarea
          rows={8}
          placeholder="Develop the third major point..."
          className="w-full rounded-lg border border-neutral-300 p-4 outline-none focus:border-amber-500"
        />
      </section>

      {/* Conclusion */}

      <section
        id="conclusion"
        className="border-b border-neutral-200 px-12 py-10"
      >
        <ConclusionEditor />
      </section>

      {/* Applications */}

      <section
        id="applications"
        className="border-b border-neutral-200 px-12 py-10"
      >
        <h2 className="mb-6 text-3xl font-bold text-neutral-900">
          Applications
        </h2>

        <textarea
          rows={6}
          placeholder="List practical applications..."
          className="w-full rounded-lg border border-neutral-300 p-4 outline-none focus:border-amber-500"
        />
      </section>

      {/* Illustrations */}

      <section
        id="illustrations"
        className="px-12 py-10"
      >
        <h2 className="mb-6 text-3xl font-bold text-neutral-900">
          Illustrations
        </h2>

        <textarea
          rows={6}
          placeholder="Illustrations, quotations, stories..."
          className="w-full rounded-lg border border-neutral-300 p-4 outline-none focus:border-amber-500"
        />
      </section>

    </article>
  );
}