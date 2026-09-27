import Link from "next/link";

const levels = [
  {
    number: "01",
    label: "Level 1",
    title: "Know the Word",
    description:
      "Build a strong foundation in Scripture, biblical authority, hermeneutics, context, and biblical research.",
    courses: "~8 Courses",
    lessons: "~96 Lessons",
    timeframe: "Typical pace: 8–12 months",
    href: "/academy/level-1",
  },
  {
    number: "02",
    label: "Level 2",
    title: "Develop the Message",
    description:
      "Learn to move from sound exegesis to a clear proposition, organized lesson, sermon, and faithful application.",
    courses: "~8 Courses",
    lessons: "~96 Lessons",
    timeframe: "Typical pace: 8–12 months",
    href: "/academy/level-2",
  },
  {
    number: "03",
    label: "Level 3",
    title: "Preach & Teach the Word",
    description:
      "Develop practical competency in preaching, teaching, evangelism, ministry, leadership, and communicating Scripture.",
    courses: "~8 Courses",
    lessons: "~96 Lessons + Labs",
    timeframe: "Typical pace: 8–12 months",
    href: "/academy/level-3",
  },
];

export default function AcademyPath() {
  return (
    <section
      id="academy-path"
      className="border-y border-slate-200 bg-[#f7f5ef] py-16"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-amber-600">
            The BRL Academy Path
          </p>

          <h2 className="mt-3 font-serif text-3xl font-bold text-[#061b3a] md:text-4xl">
            From Studying the Word to Teaching the Word
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600">
            BRL Academy follows a three-level competency-based path. Students
            first learn to understand Scripture faithfully, then learn to
            organize its message, and finally develop the ability to preach and
            teach it effectively.
          </p>
        </div>

        {/* Level Cards */}
        <div className="relative mt-12 grid gap-6 lg:grid-cols-3">
          {levels.map((level, index) => (
            <div key={level.number} className="relative">
              {/* Desktop Arrow */}
              {index < levels.length - 1 && (
                <div className="absolute -right-5 top-1/2 z-20 hidden -translate-y-1/2 lg:flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-300 bg-[#f7f5ef] text-xl font-bold text-amber-600">
                    →
                  </div>
                </div>
              )}

              <Link
                href={level.href}
                className="group flex h-full min-h-[390px] flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-amber-300 hover:shadow-xl"
              >
                {/* Number */}
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#061b3a] text-lg font-black text-amber-300 shadow-sm transition group-hover:bg-[#0a2b58]">
                    {level.number}
                  </div>

                  <span className="rounded-full bg-amber-50 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-amber-700">
                    {level.label}
                  </span>
                </div>

                {/* Content */}
                <h3 className="mt-7 font-serif text-2xl font-bold text-[#061b3a]">
                  {level.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                  {level.description}
                </p>

                {/* Course Information */}
                <div className="mt-6 space-y-2 border-t border-slate-100 pt-5 text-sm text-slate-600">
                  <div className="flex justify-between">
                    <span>Courses</span>
                    <span className="font-bold text-[#061b3a]">
                      {level.courses}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span>Lessons</span>
                    <span className="font-bold text-[#061b3a]">
                      {level.lessons}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span>Pace</span>
                    <span className="font-bold text-[#061b3a]">
                      8–12 months
                    </span>
                  </div>
                </div>

                {/* Action */}
                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                  <span className="text-sm font-bold text-[#061b3a]">
                    Explore {level.label}
                  </span>

                  <span className="text-lg font-bold text-amber-600 transition group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Competency Statement */}
        <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-[#0a2b58]/15 bg-[#061b3a] px-7 py-6 text-center shadow-sm">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-amber-400">
            Advancement Standard
          </p>

          <p className="mx-auto mt-2 max-w-3xl text-sm leading-6 text-slate-200">
            Advancement is based on demonstrated competency and satisfactory
            completion of required coursework, studies, assignments, and
            practical assessments — not accumulated credit hours or seat time.
          </p>
        </div>
      </div>
    </section>
  );
}