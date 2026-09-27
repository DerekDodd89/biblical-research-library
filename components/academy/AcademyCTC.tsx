import Link from "next/link";

export default function AcademyCTA() {
  return (
    <section className="bg-[#f7f5ef] py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-amber-300/60 bg-white shadow-lg">
          <div className="grid lg:grid-cols-[1fr_auto] lg:items-center">
            {/* Message */}
            <div className="p-8 md:p-10 lg:p-12">
              <p className="text-xs font-black uppercase tracking-[0.26em] text-amber-600">
                Ready to Begin?
              </p>

              <h2 className="mt-3 font-serif text-3xl font-bold text-[#061b3a] md:text-4xl">
                Begin with the Word.
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                Start with Level 1 and build the foundation necessary for
                faithful biblical study. Progress through the Academy as you
                demonstrate the knowledge and competency required for each
                level.
              </p>

              <div className="mt-7 flex flex-wrap gap-4">
                <Link
                  href="/academy/level-1"
                  className="rounded-lg bg-[#061b3a] px-7 py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-[#0a2b58]"
                >
                  Explore Level 1 →
                </Link>

                <Link
                  href="/academy/courses"
                  className="rounded-lg border border-[#061b3a]/20 bg-white px-7 py-3.5 text-sm font-bold text-[#061b3a] transition hover:border-amber-400 hover:bg-amber-50"
                >
                  Browse Courses
                </Link>
              </div>
            </div>

            {/* Program summary */}
            <div className="border-t border-slate-200 bg-[#061b3a] px-9 py-9 text-white lg:h-full lg:min-w-[300px] lg:border-l lg:border-t-0 lg:px-10 lg:py-12">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-400">
                BRL Academy
              </p>

              <div className="mt-5 space-y-4">
                <div>
                  <div className="font-serif text-2xl font-bold">3 Levels</div>
                  <div className="text-xs text-slate-400">
                    Progressive training
                  </div>
                </div>

                <div className="border-t border-white/10 pt-4">
                  <div className="font-serif text-2xl font-bold">
                    ~24 Courses
                  </div>
                  <div className="text-xs text-slate-400">
                    Comprehensive program
                  </div>
                </div>

                <div className="border-t border-white/10 pt-4">
                  <div className="font-serif text-2xl font-bold">
                    Competency Based
                  </div>
                  <div className="text-xs text-slate-400">
                    Progress through demonstrated ability
                  </div>
                </div>

                <div className="border-t border-white/10 pt-4">
                  <div className="font-serif text-2xl font-bold">
                    ~3 Year Path
                  </div>
                  <div className="text-xs text-slate-400">
                    Typical consistent pace
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}