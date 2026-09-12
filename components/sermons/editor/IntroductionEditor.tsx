"use client";

export default function IntroductionEditor() {
  return (
    <div className="space-y-8">

      <div>

        <label className="mb-2 block text-sm font-semibold uppercase tracking-wide text-neutral-700">
          Opening Illustration
        </label>

        <textarea
          rows={5}
          placeholder="Story, question, current event, illustration..."
          className="w-full rounded-lg border border-neutral-300 p-4 text-black outline-none focus:border-amber-500"
        />

      </div>

      <div>

        <label className="mb-2 block text-sm font-semibold uppercase tracking-wide text-neutral-700">
          Audience Connection
        </label>

        <textarea
          rows={4}
          placeholder="How does this connect with the audience?"
          className="w-full rounded-lg border border-neutral-300 p-4 text-black outline-none focus:border-amber-500"
        />

      </div>

      <div>

        <label className="mb-2 block text-sm font-semibold uppercase tracking-wide text-neutral-700">
          Introduce the Text
        </label>

        <textarea
          rows={4}
          placeholder="Historical background, occasion, context..."
          className="w-full rounded-lg border border-neutral-300 p-4 text-black outline-none focus:border-amber-500"
        />

      </div>

      <div>

        <label className="mb-2 block text-sm font-semibold uppercase tracking-wide text-neutral-700">
          Transition to Proposition
        </label>

        <textarea
          rows={3}
          placeholder="Lead naturally into the proposition..."
          className="w-full rounded-lg border border-neutral-300 p-4 text-black outline-none focus:border-amber-500"
        />

      </div>

    </div>
  );
}