import Link from "next/link";
import { Search, Sparkles } from "lucide-react";
import { BRAND } from "@/constants/brand";
import StartHereCard from "@/components/home/StartHereCard";

export default function HeroSection() {
  return (
    <section className="hero-background text-white">
      <div className="relative z-10 mx-auto grid max-w-[1500px] gap-5 px-5 py-5 lg:grid-cols-[240px_1fr] lg:px-8">
        <StartHereCard />

        <div className="grid items-center gap-5 xl:grid-cols-[1fr_245px]">
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">
              {BRAND.platformStatement}
            </p>

            <h1 className="font-serif text-4xl font-bold leading-tight sm:text-5xl">
              {BRAND.headline}
            </h1>

            <p className="mt-1 font-serif text-xl text-amber-300 sm:text-2xl">
              {BRAND.motto}
            </p>

            <div className="mt-4 flex max-w-4xl overflow-hidden rounded-lg bg-white shadow-xl">
              <div className="flex flex-1 items-center gap-3 px-4">
                <Search className="h-5 w-5 text-slate-500" />

                <input
                  className="w-full py-3 text-slate-950 outline-none placeholder:text-slate-500"
                  placeholder="Search Scripture, Topics, People, Places, Greek, Hebrew, or BRLs..."
                  aria-label="Search Scripture, topics, people, places, Greek, Hebrew, or BRLs"
                />
              </div>

              <select
                className="hidden border-l border-slate-200 bg-white px-5 text-slate-800 outline-none sm:block"
                aria-label="Search category"
                defaultValue="all"
              >
                <option value="all">All</option>
                <option value="scripture">Scripture</option>
                <option value="brls">BRLs</option>
                <option value="topics">Topics</option>
                <option value="greek">Greek</option>
                <option value="hebrew">Hebrew</option>
              </select>

              <button
                type="button"
                className="bg-blue-700 px-6 font-semibold text-white transition hover:bg-blue-600"
              >
                Search
              </button>
            </div>

            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-200">
              <span className="font-semibold text-white">Quick Links:</span>

              <Link href={BRAND.routes.bible}>John 3:16</Link>
              <Link href={BRAND.routes.bible}>Romans 8:28</Link>
              <Link href={BRAND.routes.bible}>Ephesians 2:8-9</Link>
              <Link href={BRAND.routes.doctrine}>Faith</Link>
              <Link href={BRAND.routes.doctrine}>Grace</Link>
              <Link href={BRAND.routes.doctrine}>Baptism</Link>
              <Link href={BRAND.routes.churchCurriculum}>Church</Link>
            </div>
          </div>

          <blockquote className="rounded-xl border border-white/20 bg-slate-950/65 p-5 backdrop-blur-sm">
            <Sparkles className="mb-2 h-5 w-5 text-amber-300" />

            <p className="text-sm leading-6 text-slate-100">
              “All Scripture is breathed out by God and profitable for teaching,
              for reproof, for correction, and for training in righteousness.”
            </p>

            <footer className="mt-3 text-sm font-semibold text-amber-300">
              2 Timothy 3:16-17
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}