"use client";

export default function MetadataPreview() {
  return (
    <div className="rounded-xl border border-[#8b6a2b]/30 bg-[#101b2d] p-6">

      <h2 className="mb-5 text-xl font-bold text-amber-300">
        Metadata Preview
      </h2>

      <div className="grid grid-cols-2 gap-5">

        <Field label="BRL Number" value="(Auto Generated)" />

        <Field label="Title" value="Direction of Worship" />

        <Field label="Speaker" value="Derek Dodd" />

        <Field label="Series" value="Worship" />

        <Field label="Primary Scripture" value="John 4:23-24" />

        <Field label="Sermon Type" value="Expository" />

        <Field label="Audience" value="General" />

        <Field label="Duration" value="30 Minutes" />

        <Field label="Source" value="Legacy Import" />

        <Field label="Status" value="Draft" />

      </div>

    </div>
  );
}

function Field({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>

      <div className="mb-1 text-xs uppercase tracking-[0.18em] text-neutral-500">
        {label}
      </div>

      <div className="rounded-lg border border-[#8b6a2b]/30 bg-[#0B1526] px-4 py-3 text-white">
        {value}
      </div>

    </div>
  );
}