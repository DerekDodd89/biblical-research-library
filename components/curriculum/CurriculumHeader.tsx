import Link from "next/link";

export default function CurriculumHeader() {
  return (
    <header className="border-b border-amber-400/30 bg-[#061b3a] text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-amber-400 bg-white/10 text-2xl">
            📖
          </div>

          <div>
            <div className="text-2xl font-bold tracking-tight">
              BRL <span className="font-medium">CURRICULUM</span>
            </div>

            <div className="text-xs uppercase tracking-[0.18em] text-slate-300">
              Biblical. Practical. Purposeful.
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/curriculum"
            className="text-sm font-semibold text-amber-300"
          >
            Home
          </Link>

          <a
            className="text-sm font-medium text-slate-200 transition hover:text-white"
            href="#all-courses"
          >
            All Courses
          </a>

          <a
            className="text-sm font-medium text-slate-200 transition hover:text-white"
            href="#about"
          >
            About Curriculum
          </a>

          <a
            className="text-sm font-medium text-slate-200 transition hover:text-white"
            href="#help"
          >
            Help
          </a>

          <button
            type="button"
            className="rounded-lg border border-slate-400 px-4 py-2 text-sm font-semibold transition hover:bg-white/10"
          >
            ♡ My Favorites
          </button>
        </nav>
      </div>
    </header>
  );
}