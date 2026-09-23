import Link from "next/link";

export default function AcademyHeader() {
  return (
    <header className="border-b border-amber-400/30 bg-[#061b3a] text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-amber-400 bg-white/10 text-2xl">
            🎓
          </div>

          <div>
            <div className="text-2xl font-bold tracking-tight">
              BRL <span className="font-medium">ACADEMY</span>
            </div>

            <div className="text-xs uppercase tracking-[0.18em] text-slate-300">
              Study. Master. Research.
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/academy"
            className="text-sm font-semibold text-amber-300"
          >
            Home
          </Link>

          <a
            href="#stages"
            className="text-sm font-medium text-slate-200 transition hover:text-white"
          >
            Academic Stages
          </a>

          <a
            href="#my-academy"
            className="text-sm font-medium text-slate-200 transition hover:text-white"
          >
            My Academy
          </a>

          <a
            href="#about"
            className="text-sm font-medium text-slate-200 transition hover:text-white"
          >
            About Academy
          </a>

          <button
            type="button"
            className="rounded-lg border border-slate-400 px-4 py-2 text-sm font-semibold transition hover:bg-white/10"
          >
            My Progress
          </button>
        </nav>
      </div>
    </header>
  );
}