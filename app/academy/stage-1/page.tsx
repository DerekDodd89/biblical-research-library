import Link from "next/link";
import AcademyHeader from "@/components/academy/AcademyHeader";
import StageProgress from "@/components/academy/StageProgress";

const courses = [
  {
    number: "01",
    code: "BRL-ACA-101.001",
    title: "Introduction to Biblical Study",
    description:
      "Establishing the purpose, discipline, and foundations of serious Bible study.",
    lessons: 0,
    status: "available",
  },
  {
    number: "02",
    code: "BRL-ACA-101.002",
    title: "Biblical Authority",
    description:
      "Developing a foundational understanding of Scripture, authority, and biblical truth.",
    lessons: 0,
    status: "available",
  },
  {
    number: "03",
    code: "BRL-ACA-101.003",
    title: "Principles of Biblical Interpretation",
    description:
      "Learning foundational principles for accurately understanding and applying Scripture.",
    lessons: 0,
    status: "available",
  },
];

export default function StageOnePage() {
  return (
    <main className="min-h-screen bg-[#f4f1e9] text-slate-900">
      <AcademyHeader />

      {/* Stage Hero */}
      <section className="relative overflow-hidden border-b border-slate-200">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/modules/05-curriculum.png')",
          }}
        />

        <div className="absolute inset-0 bg-white/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f8f4ea]/95 via-[#f8f4ea]/85 to-[#f8f4ea]/55" />

        <div className="relative mx-auto max-w-7xl px-6 py-8">
          {/* Breadcrumbs */}
          <div className="mb-5 flex items-center gap-2 text-xs text-slate-500">
            <Link href="/" className="hover:text-[#061b3a]">
              Home
            </Link>

            <span>›</span>

            <Link href="/academy" className="hover:text-[#061b3a]">
              Academy
            </Link>

            <span>›</span>

            <span className="font-bold text-[#061b3a]">
              Stage 1
            </span>
          </div>

          <div className="flex items-center gap-5">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-[#061b3a] text-2xl font-black text-amber-300 shadow-md">
              01
            </div>

            <div>
              <div className="text-xs font-black uppercase tracking-[0.2em] text-amber-600">
                BRL Academy · Stage 1
              </div>

              <h1 className="mt-1 text-4xl font-black tracking-tight text-[#061b3a]">
                Biblical Foundations
              </h1>

              <div className="mt-2 h-1 w-12 rounded-full bg-amber-400" />

              <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
                Establish the biblical, interpretive, and research foundations
                necessary for increasingly advanced study throughout BRL Academy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Stage Content */}
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-8 lg:grid-cols-[1fr_320px]">
        <section>
          <div>
            <div className="text-xs font-black uppercase tracking-[0.16em] text-amber-600">
              Stage 1
            </div>

            <h2 className="mt-1 text-2xl font-black uppercase tracking-[0.08em] text-[#061b3a]">
              Biblical Foundations Courses
            </h2>

            <div className="mt-3 h-1 w-10 rounded-full bg-amber-400" />

            <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-500">
              Complete the required Stage 1 courses to establish the foundation
              for continued study within BRL Academy.
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-4">
            {courses.map((course) => (
              <Link
                key={course.code}
                href={`/academy/stage-1/course-${course.number}`}
                className="group flex items-center gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-[2px] hover:border-amber-300 hover:shadow-md"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#061b3a] font-black text-amber-300">
                  {course.number}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="text-[10px] font-black uppercase tracking-[0.18em] text-amber-600">
                    {course.code}
                  </div>

                  <h3 className="mt-1 text-lg font-black text-[#061b3a]">
                    {course.title}
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    {course.description}
                  </p>
                </div>

                <div className="hidden shrink-0 items-center gap-4 border-l border-slate-200 pl-5 md:flex">
                  <div className="text-right">
                    <div className="text-xs font-bold uppercase tracking-wide text-[#061b3a]">
                      Not Started
                    </div>

                    <div className="mt-1 text-xs text-slate-400">
                      {course.lessons > 0
                        ? `${course.lessons} lessons`
                        : "Lessons pending"}
                    </div>
                  </div>

                  <span className="text-xl font-bold text-[#061b3a] transition group-hover:translate-x-1">
                    ›
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <div>
          <StageProgress />
        </div>
      </div>
    </main>
  );
}