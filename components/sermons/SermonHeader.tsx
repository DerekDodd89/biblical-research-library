export default function SermonHeader() {
  return (
    <header className="border-b #8b6a2b bg-[#0B1526]">

      <div className="flex items-center justify-between px-8 py-5">

        <div>

          <h1 className="text-3xl font-bold tracking-tight text-white">
            BRL Sermon Engine
          </h1>

          <p className="mt-1 text-sm text-neutral-400">
            Build • Organize • Communicate God's Word
          </p>

        </div>

        <div className="flex items-center gap-8 text-sm">

          <div>
            <p className="text-neutral-500">Status</p>
            <p className="font-semibold text-amber-300">Draft</p>
          </div>

          <div>
            <p className="text-neutral-500">Autosave</p>
            <p className="font-semibold text-emerald-400">
              Active
            </p>
          </div>

        </div>

      </div>

      <div className="grid grid-cols-4 gap-8 border-t #8b6a2b px-8 py-3">

        <div>

          <p className="text-xs uppercase tracking-wider text-neutral-500">
            Title
          </p>

          <p className="mt-1 font-medium">
            Untitled Sermon
          </p>

        </div>

        <div>

          <p className="text-xs uppercase tracking-wider text-neutral-500">
            Primary Text
          </p>

          <p className="mt-1 font-medium">
            —
          </p>

        </div>

        <div>

          <p className="text-xs uppercase tracking-wider text-neutral-500">
            Proposition
          </p>

          <p className="mt-1 font-medium">
            —
          </p>

        </div>

        <div>

          <p className="text-xs uppercase tracking-wider text-neutral-500">
            Outline Version
          </p>

          <p className="mt-1 font-medium">
            Standard
          </p>

        </div>

      </div>

    </header>
  );
}