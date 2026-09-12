"use client";

import { useState } from "react";

import BibleNavigator from "./BibleNavigator";
import BibleReader from "./BibleReader";

export default function BibleLayout() {
  const [showNavigator, setShowNavigator] = useState(true);
  const [showWorkspace, setShowWorkspace] = useState(true);

  return (
    <section className="mx-auto max-w-7xl px-6 py-8">

      <div
        className="grid gap-6"
        style={{
          gridTemplateColumns: `
            ${showNavigator ? "320px" : "44px"}
            1fr
            ${showWorkspace ? "340px" : "44px"}
          `,
        }}
      >

        {/* ================= Navigator ================= */}

        {showNavigator ? (
          <div className="relative rounded-2xl border #8b6a2b bg-slate-900/50 shadow-2xl backdrop-blur-xl">

            <button
              onClick={() => setShowNavigator(false)}
              className="absolute -right-4 top-1/2 -translate-y-1/2 rounded-lg border border-amber-500 bg-[#08131f] px-2 py-4 text-amber-400 hover:bg-slate-800"
            >
              ◀
            </button>

            <BibleNavigator />

          </div>
        ) : (
          <button
            onClick={() => setShowNavigator(true)}
            className="rounded-xl border #8b6a2b bg-slate-900/50 text-xl text-amber-400 hover:bg-slate-800"
          >
            ▶
          </button>
        )}

        {/* ================= Reader ================= */}

        <div className="rounded-2xl border #8b6a2b bg-slate-900/50 shadow-2xl backdrop-blur-xl">

          <BibleReader />

        </div>

        {/* ================= Workspace ================= */}

        {showWorkspace ? (
          <aside className="relative rounded-2xl border #8b6a2b bg-slate-900/50 shadow-2xl backdrop-blur-xl">

            <button
              onClick={() => setShowWorkspace(false)}
              className="absolute -left-4 top-1/2 -translate-y-1/2 rounded-lg border border-amber-500 bg-[#08131f] px-2 py-4 text-amber-400 hover:bg-slate-800"
            >
              ▶
            </button>

            <div className="border-b #8b6a2b p-5">

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
        ) : (
          <button
            onClick={() => setShowWorkspace(true)}
            className="rounded-xl border #8b6a2b bg-slate-900/50 text-xl text-amber-400 hover:bg-slate-800"
          >
            ◀
          </button>
        )}

      </div>

    </section>
  );
}