import Link from "next/link";
import { ArrowRight, BookMarked, Clock3, Quote } from "lucide-react";
import { BRAND } from "@/constants/brand";

export default function InformationPanels() {
  return (
    <section className="bg-white px-5 py-10 lg:px-8">
      <div className="mx-auto grid max-w-[1500px] gap-6 lg:grid-cols-3">
        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <BookMarked className="mb-4 h-8 w-8 text-blue-700" />

          <h3 className="font-serif text-2xl font-bold text-slate-900">
            Featured BRL Study
          </h3>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            Continue exploring the growing Biblical Research Library through
            carefully organized studies, exegesis, historical research, and
            contextual analysis.
          </p>

          <Link
            href={BRAND.routes.library}
            className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-700 hover:text-blue-900"
          >
            Browse BRLs
            <ArrowRight className="h-4 w-4" />
          </Link>
        </article>

        <article className="rounded-xl border border-slate-200 bg-slate-900 p-6 text-white shadow-sm">
          <Quote className="mb-4 h-8 w-8 text-amber-400" />

          <h3 className="font-serif text-2xl font-bold">
            Scripture of the Day
          </h3>

          <p className="mt-4 italic leading-7 text-slate-200">
            "Your word is a lamp to my feet and a light to my path."
          </p>

          <p className="mt-3 font-semibold text-amber-300">
            Psalm 119:105
          </p>
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <Clock3 className="mb-4 h-8 w-8 text-green-700" />

          <h3 className="font-serif text-2xl font-bold text-slate-900">
            Continue Learning
          </h3>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            Resume Academy courses, saved studies, reading plans, and personal
            research exactly where you left off.
          </p>

          <Link
            href={BRAND.routes.workspace}
            className="mt-6 inline-flex items-center gap-2 font-semibold text-green-700 hover:text-green-900"
          >
            Open Workspace
            <ArrowRight className="h-4 w-4" />
          </Link>
        </article>
      </div>
    </section>
  );
}