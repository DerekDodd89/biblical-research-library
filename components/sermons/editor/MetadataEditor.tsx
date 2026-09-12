"use client";

export default function MetadataEditor() {
  return (
    <div className="grid grid-cols-2 gap-8">

      <Field label="Title" placeholder="The Direction of Worship" />

      <Field label="Subtitle" placeholder="Understanding Biblical Worship" />

      <Field label="Primary Scripture" placeholder="John 4:23-24" />

      <Field label="Series" placeholder="Worship Series" />

      <Field label="Speaker" placeholder="Derek Dodd" />

      <Field label="Audience" placeholder="General Assembly" />

      <Field label="Proposition" placeholder="What will this sermon prove?" />

      <Field label="Objective" placeholder="What should the audience do?" />

      <Field label="Estimated Length" placeholder="30 Minutes" />

      <Field label="Sermon Type" placeholder="Expository" />

    </div>
  );
}

function Field({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <div>

      <label className="mb-2 block text-sm font-semibold uppercase tracking-wide text-neutral-700">
        {label}
      </label>

      <input
        placeholder={placeholder}
        className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-black outline-none transition focus:border-amber-500"
      />

    </div>
  );
}