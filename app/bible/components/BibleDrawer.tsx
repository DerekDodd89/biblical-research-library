"use client";

import BibleNavigator from "./BibleNavigator";

interface BibleDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function BibleDrawer({
  open,
  onClose,
}: BibleDrawerProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60">

      <aside className="absolute left-0 top-0 h-full w-[90%] max-w-md overflow-y-auto bg-[#08131f] shadow-2xl">

        {/* ================================================= */}
        {/* Header */}
        {/* ================================================= */}

        <div className="sticky top-0 border-b border-white/10 bg-[#08131f] p-5">

          <div className="flex items-center justify-between">

            <h2 className="text-xl font-bold text-white">
              Bible Module
            </h2>

            <button
              onClick={onClose}
              className="text-2xl text-amber-400"
            >
              ✕
            </button>

          </div>

        </div>

        {/* ================================================= */}
        {/* Bible Navigator */}
        {/* ================================================= */}

        <section className="border-b border-white/10">

          <div className="px-5 pt-5">

            <h3 className="mb-4 text-lg font-semibold text-amber-400">
              Bible Navigator
            </h3>

          </div>

          <BibleNavigator
            onNavigate={onClose}
        />

        </section>

        {/* ================================================= */}
        {/* Study Workspace */}
        {/* ================================================= */}

        <section className="border-b border-white/10 p-5">

          <h3 className="mb-4 text-lg font-semibold text-amber-400">
            Study Workspace
          </h3>

          <ul className="space-y-3 text-slate-300">

            <li>📝 Notes</li>

            <li>🔖 Bookmarks</li>

            <li>🖍 Highlights</li>

          </ul>

        </section>

        {/* ================================================= */}
        {/* Context Circle */}
        {/* ================================================= */}

        <section className="border-b border-white/10 p-5">

          <h3 className="mb-4 text-lg font-semibold text-amber-400">
            Context Circle
          </h3>

          <p className="text-slate-400">
            Coming Soon
          </p>

        </section>

        {/* ================================================= */}
        {/* Research Library */}
        {/* ================================================= */}

        <section className="border-b border-white/10 p-5">

          <h3 className="mb-4 text-lg font-semibold text-amber-400">
            Research Library
          </h3>

          <p className="text-slate-400">
            Coming Soon
          </p>

        </section>

        {/* ================================================= */}
        {/* Settings */}
        {/* ================================================= */}

        <section className="p-5">

          <h3 className="mb-4 text-lg font-semibold text-amber-400">
            Reader Settings
          </h3>

          <ul className="space-y-3 text-slate-300">

            <li>Translation</li>

            <li>Font Size</li>

            <li>Theme</li>

            <li>Verse Layout</li>

          </ul>

        </section>

      </aside>

    </div>
  );
}