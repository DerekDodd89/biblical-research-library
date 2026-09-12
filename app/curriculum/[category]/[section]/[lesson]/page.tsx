import Link from "next/link";
import foundationsCourse from "@/lib/curriculum/foundations";

type LessonPageProps = {
  params: Promise<{
    category: string;
    section: string;
    lesson: string;
  }>;
};

export default async function LessonPage({
  params,
}: LessonPageProps) {
  const { category, section, lesson } = await params;

  if (category !== "foundations") {
    return <LessonNotFound />;
  }

  const sectionNumber = Number(section.replace("section-", ""));
  const lessonNumber = Number(lesson.replace("lesson-", ""));

  const sectionData = foundationsCourse.sections.find(
    (item) => item.number === sectionNumber
  );

  if (!sectionData) {
    return <LessonNotFound />;
  }

  const lessonData = sectionData.lessons.find(
    (item) => item.number === lessonNumber
  );

  if (!lessonData) {
    return <LessonNotFound />;
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

      {/* Lesson Hero */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-[#faf7ef]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${foundationsCourse.background}')`,
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#faf7ef]/95 via-[#faf7ef]/72 to-[#faf7ef]/30" />
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

            <Link
              href={`/curriculum/foundations/section-${sectionData.number}`}
              className="transition hover:text-[#061b3a]"
            >
              Section {sectionData.number}
            </Link>

            <span className="mx-2">›</span>

            <span className="font-semibold text-[#061b3a]">
              Lesson {lessonData.number}
            </span>
          </div>

          <div className="flex max-w-4xl items-center gap-6">
            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl bg-[#061b3a] text-3xl font-black text-amber-300 shadow-lg">
              {String(lessonData.number).padStart(2, "0")}
            </div>

            <div>
              <div className="text-sm font-black uppercase tracking-[0.16em] text-amber-700">
                Foundations • Section {String(sectionData.number).padStart(2, "0")}
              </div>

              <h1 className="mt-2 text-3xl font-black tracking-tight text-[#061b3a] md:text-4xl">
                {lessonData.title}
              </h1>

              <div className="mt-3 h-1 w-12 rounded-full bg-amber-400" />

              <p className="mt-4 max-w-2xl text-base font-medium leading-7 text-slate-700">
                {sectionData.title}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Layout */}
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-8 lg:grid-cols-[1fr_340px]">
        <section className="space-y-6">
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-xs font-black uppercase tracking-[0.14em] text-amber-600">
              Lesson Overview
            </div>

            <h2 className="mt-2 text-2xl font-black text-[#061b3a]">
              {lessonData.title}
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              This lesson is part of Section {sectionData.number}:{" "}
              {sectionData.title}. The final teaching content for this lesson
              will be loaded from the BRL Foundations curriculum as the lesson
              package is developed.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-[#fbfaf7] p-6 shadow-sm">
            <div className="mb-5">
              <h2 className="text-xl font-black uppercase tracking-[0.08em] text-[#061b3a]">
                Lesson Resources
              </h2>

              <div className="mt-2 h-1 w-10 rounded-full bg-amber-400" />
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <ResourceCard
                icon="📘"
                title="Teacher Guide"
                description="Teaching notes, objectives, Scripture, and lesson flow."
              />

              <ResourceCard
                icon="📄"
                title="Student Material"
                description="Age-appropriate handouts, worksheets, and lesson material."
              />

              <ResourceCard
                icon="🖥️"
                title="Presentation"
                description="Ready-to-use classroom presentation material."
              />

              <ResourceCard
                icon="🖼️"
                title="Visuals"
                description="Posters, charts, illustrations, and teaching aids."
              />

              <ResourceCard
                icon="🧩"
                title="Activities"
                description="Interactive activities and reinforcement exercises."
              />

              <ResourceCard
                icon="💻"
                title="Digital Lesson"
                description="Interactive BRL lesson experience for supported devices."
              />
            </div>
          </section>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link
              href={`/curriculum/foundations/section-${sectionData.number}`}
              className="text-sm font-bold text-[#061b3a] transition hover:text-amber-600"
            >
              ← Back to Section {sectionData.number}
            </Link>

            {lessonData.number < sectionData.lessons.length && (
              <Link
                href={`/curriculum/foundations/section-${sectionData.number}/lesson-${lessonData.number + 1}`}
                className="rounded-xl bg-[#061b3a] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0a2b58]"
              >
                Next Lesson →
              </Link>
            )}
          </div>
        </section>

        <LessonOptions />
      </div>
    </main>
  );
}

function ResourceCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <button
      type="button"
      className="group rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-amber-300 hover:shadow-md"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#061b3a] text-2xl text-white">
        {icon}
      </div>

      <h3 className="mt-4 font-black text-[#061b3a]">
        {title}
      </h3>

      <p className="mt-2 text-xs leading-5 text-slate-500">
        {description}
      </p>
    </button>
  );
}

function LessonOptions() {
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
            Lesson Options
          </h2>

          <div className="mt-1 h-0.5 w-8 bg-amber-400" />
        </div>
      </div>

      <p className="mt-5 text-sm leading-6 text-slate-600">
        Select the age groups you need. The biblical lesson remains the same
        while teaching methods and resources adapt to the audience.
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

      <button
        type="button"
        className="mt-6 w-full rounded-xl bg-amber-400 px-5 py-3 font-black uppercase tracking-wide text-[#061b3a] shadow-sm transition hover:bg-amber-300"
      >
        Apply to Lesson
      </button>

      <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50 p-4 text-xs leading-5 text-slate-600">
        When the lesson packages are complete, the selected age groups will
        determine which teacher, student, activity, and digital resources are
        shown.
      </div>
    </aside>
  );
}

function LessonNotFound() {
  return (
    <main className="min-h-screen bg-[#f4f1e9]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <h1 className="text-3xl font-black text-[#061b3a]">
          Curriculum Lesson Not Found
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