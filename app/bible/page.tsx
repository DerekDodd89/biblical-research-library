"use client";

import Link from "next/link";

import BibleBackground from "./BibleBackground";
import BibleLayout from "./components/BibleLayout";

export default function BiblePage() {
  return (
    <>
      <BibleBackground />

      <main className="min-h-screen bg-[#08131f] text-white">

        {/* ========================================================= */}
        {/* Header */}
        {/* ========================================================= */}

        <header className="relative h-[150px] overflow-hidden border-b #8b6a2b">

          {/* Header Background */}

          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('/images/modules/01-bible-header.png')",
            }}
          />

          {/* Overlay */}

          <div className="absolute inset-0 bg-[#08131f]/35" />

          {/* Fade */}

          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#08131f]" />

          {/* Header Content */}

          <div className="relative mx-auto flex h-full max-w-7xl items-center px-8">

            <Link
              href="/"
              className="transition hover:scale-105"
              title="Return to BRL Home"
            >
              <img
                src="/images/branding/brl-shield-color.png"
                alt="Biblical Research Library"
                className="h-20 w-auto"
              />
            </Link>

            <div className="ml-5">

              <p className="text-xs uppercase tracking-[0.35em] text-amber-400">
                BRL 010.001
              </p>

              <h1 className="mt-1 text-4xl font-bold">
                Bible Module
              </h1>

              <p className="mt-1 text-lg text-slate-200">
                The Bible at the Center. Context in Every Direction.
              </p>

            </div>

          </div>

        </header>

        {/* ========================================================= */}
        {/* Workspace */}
        {/* ========================================================= */}

        <BibleLayout />

      </main>
    </>
  );
}