import Link from "next/link";
import foundationsCourse from "@/lib/curriculum/foundations";

type SectionPageProps = {
  params: Promise<{
    category: string;
    section: string;
  }>;
};

export default async function SectionPage({
  params,
}: SectionPageProps) {
  const { category, section } = await params;

  if (category !== "foundations") {
    return <SectionNotFound />;
  }

  const sectionNumber = Number(section.replace("section-", ""));

  const sectionData = foundationsCourse.sections.find(
    (item) => item.number === sectionNumber
  );

  if (!sectionData) {
    return <SectionNotFound />;
  }

  return (
    <main className="min-h-screen bg-[#f4f1e9] text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="text-xl font-black tracking-wide text-[#061b3a]"
          >
            BRL
          </Link>

          <nav className="flex items-center gap-6 text-sm font-semibold text-[#061b3a]">
            <Link
              href="/"
              className="transition hover:text-amber-600"
            >
              Home
            </Link>

            <Link
              href="/curriculum"
              className="border-b-2 border-amber-400 pb-1"
            >
              Curriculum
            </Link>
          </nav>
        </div>
      </header>

      {/* Section Hero */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-[#faf7ef]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${foundationsCourse.background}')`,
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#faf7ef]/95 via-[#faf7ef]/70 to-[#faf7ef]/25" />
        <div className="absolute inset-0 bg-white/10" />

        <div className="relative mx-auto max-w-7xl px-6 py-8">
          <div className="mb-6 text-sm font-medium text-slate-600">
            <Link
              href="/"
              className="transition hover:text-[#061b3a]"
            >
              Home
            </Link>

            <span className="mx-2">›</span>

            <Link
              href="/curriculum"
              className="transition hover:text-[#061b3a]"
            >
              Curriculum
            </Link>

            <span className="mx-2">›</span>

            <Link
              href="/curriculum/foundations"
              className="transition hover:text-[#061b3a]"
            >
              Foundations
            </Link>

            <span className="mx-2">›</span>

            <span className="font-semibold text-[#061b3a]">
              Section {sectionData.number}
            </span>
          </div>

          <div className="flex max-w-4xl items-center gap-6">
            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl bg-[#061b3a] text-3xl font-black text-amber-300 shadow-lg">
              {String(sectionData.number).padStart(2, "0")}
            </div>

            <div>
              <div className="text-sm font-black uppercase tracking-[0.16em] text-amber-700">
                Foundations • Section{" "}
                {String(sectionData.number).padStart(2, "0")}
              </div>

              <h1 className="mt-2 text-3xl font-black tracking-tight text-[#061b3a] md:text-4xl">
                {sectionData.title}
              </h1>

              <div className="mt-3 h-1 w-12 rounded-full bg-amber-400" />

              <p className="mt-4 max-w-2xl text-base font-medium leading-7 text-slate-700">
                {sectionData.description}
              </p>

              <div className="mt-3 text-sm font-bold text-[#061b3a]">
                {sectionData.lessons.length} Lessons
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-8 lg:grid-cols-[1fr_340px]">
        <section>
          <div className="mb-5">
            <h2 className="text-2xl font-black uppercase tracking-[0.08em] text-[#061b3a]">
              Lessons
            </h2>

            <div className="mt-2 h-1 w-10 rounded-full bg-amber-400" />

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Select a lesson to view the available teaching materials and
              resources.
            </p>
          </div>

          <div className="space-y-3">
            {sectionData.lessons.map((lesson) => (
              <Link
                key={lesson.number}
                href={`/curriculum/foundations/section-${sectionData.number}/lesson-${lesson.number}`}
                className="group grid items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-amber-300 hover:shadow-md sm:grid-cols-[56px_1fr_auto]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#061b3a] text-sm font-black text-amber-300">
                  {String(lesson.number).padStart(2, "0")}
                </div>

                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
                    Lesson {lesson.number}
                  </div>

                  <h3 className="mt-1 text-lg font-black text-[#061b3a]">
                    {lesson.title}
                  </h3>
                </div>

                <div className="text-2xl text-[#061b3a] transition group-hover:translate-x-1">
                  ›
                </div>
              </Link>
            ))}
          </div>

          <Link
            href="/curriculum/foundations"
            className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#061b3a] transition hover:text-amber-600"
          >
            ← Back to Foundations
          </Link>
        </section>

        <ClassOptions />
      </div>
    </main>
  );
}

function ClassOptions() {
  const ageGroups = [
    "Preschool",
    "Kindergarten–2nd Grade",
    "3rd–5th Grade",
    "Middle School",
    "High School",
    "Adult",
  ];

  return (
    <aside className="self-start rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:sticky lg:top-6">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#061b3a] text-xl text-white">
          ⚙
        </div>

        <div>
          <h2 className="font-black uppercase tracking-[0.06em] text-[#061b3a]">
            Class Options
          </h2>

          <div className="mt-1 h-0.5 w-8 bg-amber-400" />
        </div>
      </div>

      <p className="mt-5 text-sm leading-6 text-slate-600">
        Select one or more age groups for the class materials you need.
      </p>

      <div className="mt-6">
        <h3 className="text-sm font-black uppercase text-[#061b3a]">
          Age Groups
        </h3>

        <div className="mt-3 space-y-3 text-sm text-slate-700">
          {ageGroups.map((age) => (
            <label
              key={age}
              className="flex cursor-pointer items-center gap-3"
            >
              <input
                type="checkbox"
                className="h-4 w-4 accent-amber-500"
              />

              <span>{age}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="my-6 border-t border-slate-200" />

      <label className="block">
        <span className="text-sm font-black uppercase text-[#061b3a]">
          Class Length
        </span>

        <select className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 outline-none focus:border-amber-400">
          <option>Any Length</option>
          <option>Short Study</option>
          <option>Quarter — 10–13 Weeks</option>
          <option>Semester</option>
          <option>Full Year</option>
          <option>Multi-Year</option>
        </select>
      </label>

      <label className="mt-5 block">
        <span className="text-sm font-black uppercase text-[#061b3a]">
          Meeting Schedule
        </span>

        <select className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 outline-none focus:border-amber-400">
          <option>Weekly</option>
          <option>Twice Weekly</option>
          <option>Monthly</option>
          <option>Custom</option>
        </select>
      </label>

      <label className="mt-5 block">
        <span className="text-sm font-black uppercase text-[#061b3a]">
          Class Size
        </span>

        <select className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 outline-none focus:border-amber-400">
          <option>Any Size</option>
          <option>1–5</option>
          <option>6–10</option>
          <option>10–20</option>
          <option>20–40</option>
          <option>40+</option>
        </select>
      </label>

      <button
        type="button"
        className="mt-6 w-full rounded-xl bg-amber-400 px-5 py-3 font-black uppercase tracking-wide text-[#061b3a] shadow-sm transition hover:bg-amber-300"
      >
        Apply to Lessons
      </button>

      <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50 p-4 text-xs leading-5 text-slate-600">
        The biblical lesson theme remains the same across age groups. Teaching
        methods, activities, and applications are adapted for the selected
        audience.
      </div>
    </aside>
  );
}

function SectionNotFound() {
  return (
    <main className="min-h-screen bg-[#f4f1e9]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <h1 className="text-3xl font-black text-[#061b3a]">
          Curriculum Section Not Found
        </h1>

        <Link
          href="/curriculum"
          className="mt-6 inline-block font-bold text-amber-600"
        >
          ← Return to Curriculum
        </Link>
      </div>
    </main>
  );
}