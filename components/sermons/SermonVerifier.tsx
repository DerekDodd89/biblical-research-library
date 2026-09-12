export default function SermonVerifier() {
  return (
    <div className="flex h-full flex-col">

      {/* Header */}

      <div className="border-b #8b6a2b px-5 py-4">

        <h2 className="text-lg font-bold text-amber-300">
          Context Verification
        </h2>

        <p className="mt-1 text-sm text-neutral-400">
          Hermeneutical Assistant
        </p>

      </div>

      {/* Verification */}

      <div className="flex-1 overflow-y-auto space-y-5 p-5">

        <Card
          title="Primary Text"
          value="Acts 2:38"
          color="text-white"
        />

        <Card
          title="Direct Context (DC)"
          value="Pending Verification"
          color="text-yellow-400"
        />

        <Card
          title="Remote Context (RC)"
          value="Pending Verification"
          color="text-yellow-400"
        />

        <Card
          title="Total Context (TC)"
          value="Pending Verification"
          color="text-yellow-400"
        />

        <Card
          title="Command • Example • Inference"
          value="Not Evaluated"
          color="text-neutral-300"
        />

        <Card
          title="Logical Flow"
          value="Waiting for sermon outline..."
          color="text-neutral-300"
        />

        <Card
          title="Warnings"
          value="No warnings detected."
          color="text-emerald-400"
        />

      </div>

      {/* Footer */}

      <div className="border-t #8b6a2b p-4">

        <button className="w-full rounded-lg border border-amber-400/30 py-2 text-sm font-medium text-amber-300 transition hover:bg-amber-400/10">
          Open Context Circle
        </button>

      </div>

    </div>
  );
}

function Card({
  title,
  value,
  color,
}: {
  title: string;
  value: string;
  color: string;
}) {
  return (
    <div className="rounded-xl border #8b6a2b bg-[#101c2b] p-4">

      <p className="text-xs uppercase tracking-wider text-neutral-500">
        {title}
      </p>

      <p className={`mt-3 text-sm font-medium ${color}`}>
        {value}
      </p>

    </div>
  );
}