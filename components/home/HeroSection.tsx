import Link from "next/link";
import { Search, Quote } from "lucide-react";

import StartHereCard from "@/components/home/StartHereCard";
import { BRAND } from "@/constants/brand";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-slate-300 bg-black text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/hero/sea-of-galilee-papyri.jpg')",
        }}
        aria-hidden="true"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/25" aria-hidden="true" />

      <div
        className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/5 to-black/25"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid max-w-[1500px] gap-4 px-5 py-3 lg:grid-cols-[208px_1fr] lg:px-8">

        {/* Start Here */}
        <StartHereCard />

        {/* Main Hero */}
        <div className="grid items-center gap-4 xl:grid-cols-[1fr_230px]">

          {/* Left */}
          <div>

            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-amber-300">
              {BRAND.platformStatement}
            </p>

            <h1 className="mt-1 font-serif text-3xl font-bold leading-none sm:text-4xl">
              {BRAND.headline}
            </h1>

            <p className="mt-1 font-serif text-lg leading-tight text-amber-300">
              {BRAND.motto}
            </p>

            {/* Search */}
            <div className="mt-3 flex max-w-4xl overflow-hidden rounded-lg border border-white/20 bg-white shadow-lg">

              <div className="flex flex-1 items-center gap-2 px-3">
                <Search className="h-4 w-4 shrink-0 text-slate-500" />

                <input
                  className="w-full py-2 text-sm text-slate-950 outline-none placeholder:text-slate-500"
                  placeholder="Search Scripture, Topics, People, Places, Greek, Hebrew, or BRLs..."
                  aria-label="Search Biblical Research Library"
                />
              </div>

              <select
                className="hidden border-l border-slate-200 bg-white px-4 text-sm text-slate-800 outline-none sm:block"
                defaultValue="all"
              >
                <option value="all">All</option>
                <option value="scripture">Scripture</option>
                <option value="brls">BRLs</option>
                <option value="topics">Topics</option>
                <option value="greek">Greek</option>
                <option value="hebrew">Hebrew</option>
              </select>

              <button className="bg-blue-700 px-5 text-sm font-semibold text-white transition hover:bg-blue-600">
                Search
              </button>

            </div>

            {/* Quick Links */}
            <div className="mt-1.5 flex flex-wrap gap-x-3 gap-y-1 text-[10px] text-slate-200">

              <span className="font-semibold text-white">
                Quick Links:
              </span>

              <Link href={BRAND.routes.bible} className="hover:text-amber-300">
                John 3:16
              </Link>

              <Link href={BRAND.routes.bible} className="hover:text-amber-300">
                Romans 8:28
              </Link>

              <Link href={BRAND.routes.bible} className="hover:text-amber-300">
                Ephesians 2:8-9
              </Link>

              <Link href={BRAND.routes.doctrine} className="hover:text-amber-300">
                Faith
              </Link>

              <Link href={BRAND.routes.doctrine} className="hover:text-amber-300">
                Grace
              </Link>

              <Link href={BRAND.routes.doctrine} className="hover:text-amber-300">
                Baptism
              </Link>

              <Link
                href={BRAND.routes.churchCurriculum}
                className="hover:text-amber-300"
              >
                Church
              </Link>

            </div>

          </div>

          {/* Scripture of the Day */}
          <article className="hidden rounded-xl border border-white/15 bg-black/55 p-4 shadow-xl backdrop-blur-sm xl:block">

            <Quote className="mb-3 h-5 w-5 text-amber-300" />

            <h3 className="font-serif text-lg font-bold text-white">
              Scripture of the Day
            </h3>

            <p className="mt-3 text-sm italic leading-6 text-slate-200">
              "Your word is a lamp to my feet and a light to my path."
            </p>

            <p className="mt-4 text-sm font-semibold text-amber-300">
              Psalm 119:105
            </p>

          </article>

        </div>

      </div>
    </section>
  );
}