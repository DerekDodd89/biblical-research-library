export default function BuilderInspector() {
  return (
    <aside className="w-72 border-l border-white/10 bg-black/30">
      <div className="border-b border-white/10 p-5">
        <h2 className="text-lg font-bold text-amber-300">
          Information
        </h2>
      </div>

      <div className="space-y-6 p-5">

        <Info label="Title" value="—" />

        <Info label="Primary Scripture" value="—" />

        <Info label="Series" value="—" />

        <Info label="Author" value="Derek Dodd" />

        <Info label="Status" value="New Draft" />

      </div>
    </aside>
  );
}

function Info({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <p className="text-xs uppercase tracking-wider text-neutral-500">
        {label}
      </p>

      <p className="mt-2 text-white">
        {value}
      </p>
    </div>
  );
}