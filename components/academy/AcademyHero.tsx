import Link from "next/link";

export default function AcademyHero() {
  return (
    <section
      className="relative overflow-hidden border-b border-amber-500/20 bg-[#061b35] bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/academy/academy-background.png')",
      }}
    >
      {/* Overlay keeps text readable over the Academy artwork */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#04162d]/95 via-[#061b35]/80 to-[#061b35]/25" />

      <div className="relative mx-auto flex min-h-[460px] max-w-7xl items-center px-6 py-16 lg:px-8">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.32em] text-amber-400">
            Biblical Research Library • Academy
          </p>

          {/* Main Heading */}
          <h1 className="font-serif text-5xl font-bold leading-[1.05] text-white drop-shadow-lg md:text-6xl lg:text-7xl">
            Know the Word.
            <br />
            <span className="text-amber-400">Develop the Message.</span>
            <br />
            Preach &amp; Teach the Word.
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
            A comprehensive, competency-based training path designed to equip
            faithful students of Scripture to understand God&apos;s Word,
            communicate it clearly, and serve effectively.
          </p>

          {/* Three-level summary */}
          <div className="mt-7 flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold text-slate-200">
            <span>
              <span className="mr-2 text-amber-400">01</span>
              Know the Word
            </span>

            <span>
              <span className="mr-2 text-amber-400">02</span>
              Develop the Message
            </span>

            <span>
              <span className="mr-2 text-amber-400">03</span>
              Preach &amp; Teach
            </span>
          </div>

          {/* Actions */}
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/academy/level-1"
              className="rounded-lg bg-amber-500 px-7 py-3.5 text-sm font-bold text-[#061b35] shadow-lg transition hover:bg-amber-400"
            >
              Begin the Journey →
            </Link>

            <Link
              href="/academy/courses"
              className="rounded-lg border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              Explore the Program
            </Link>
          </div>

          {/* Competency note */}
          <div className="mt-8 max-w-2xl border-l-2 border-amber-400 pl-4">
            <p className="text-sm leading-6 text-slate-300">
              Progress is based on demonstrated competency and completion —
              not credit hours or seat time.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-70" />
    </section>
  );
}