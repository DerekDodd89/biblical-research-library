"use client";

import { useState } from "react";

import useMobile from "@/hooks/useMobile";

import BibleNavigator from "./BibleNavigator";
import BibleReader from "./BibleReader";
import BibleDrawer from "./BibleDrawer";

export default function BibleLayout() {
  const isMobile = useMobile();

  const [drawerOpen, setDrawerOpen] = useState(false);

  /* ==========================================================
     MOBILE
  ========================================================== */

  if (isMobile) {
    return (
      <>
        <BibleDrawer
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        />

        <section className="mx-auto max-w-7xl px-3 py-4">

          {/* Mobile Toolbar */}

          <div className="mb-3 flex items-center justify-between">

            <button
              onClick={() => setDrawerOpen(true)}
              className="rounded-xl border border-amber-500 bg-slate-900 px-4 py-2 text-xl text-amber-400"
            >
              ☰
            </button>

            <span className="text-sm uppercase tracking-[0.3em] text-amber-400">
              Bible Module
            </span>

          </div>

          {/* Reader */}

          <div className="rounded-2xl border border-white/10 bg-slate-900/50 shadow-2xl">

            <BibleReader />

          </div>

        </section>
      </>
    );
  }

  /* ==========================================================
     DESKTOP
  ========================================================== */

  return (
    <section className="mx-auto max-w-7xl px-6 py-8">

      <div className="grid grid-cols-[320px_1fr_340px] gap-6">

        <div className="rounded-2xl border border-white/10 bg-slate-900/50 shadow-2xl">
          <BibleNavigator />
        </div>

        <div className="rounded-2xl border border-white/10 bg-slate-900/50 shadow-2xl">
          <BibleReader />
        </div>

        <aside className="rounded-2xl border border-white/10 bg-slate-900/50 shadow-2xl">

          <div className="border-b border-white/10 p-5">

            <h2 className="text-xl font-semibold">
              Study Workspace
            </h2>

          </div>

          <div className="space-y-6 p-5">

            <div>

              <h3 className="font-semibold text-amber-400">
                Notes
              </h3>

              <p className="mt-2 text-slate-400">
                Select a verse to begin taking notes.
              </p>

            </div>

            <div>

              <h3 className="font-semibold text-amber-400">
                Bookmarks
              </h3>

              <p className="mt-2 text-slate-400">
                No bookmarks yet.
              </p>

            </div>

            <div>

              <h3 className="font-semibold text-amber-400">
                Highlights
              </h3>

              <p className="mt-2 text-slate-400">
                No highlights yet.
              </p>

            </div>

          </div>

        </aside>

      </div>

    </section>
  );
}