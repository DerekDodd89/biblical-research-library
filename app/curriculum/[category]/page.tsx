import Link from "next/link";
import foundationsCourse from "@/lib/curriculum/foundations";

type CategoryPageProps = {
  params: Promise<{
    category: string;
  }>;
};

type SimpleCategory = {
  title: string;
  description: string;
  icon: string;
  background: string;
};

const otherCategories: Record<string, SimpleCategory> = {
  "books-of-the-bible": {
    title: "Books of the Bible",
    description:
      "Study the message, context, structure, and teaching of the books of Scripture.",
    icon: "📖",
    background: "/images/curriculum/foundations-background.png",
  },

  "biblical-ministry": {
    title: "Biblical Ministry",
    description:
      "Biblical instruction for serving, teaching, leading, and working in the local church.",
    icon: "👥",
    background: "/images/curriculum/foundations-background.png",
  },

  church: {
    title: "The Church",
    description:
      "Study God's design, purpose, worship, organization, and work of the church.",
    icon: "⛪",
    background: "/images/curriculum/foundations-background.png",
  },

  family: {
    title: "Family",
    description:
      "Biblical teaching for marriage, parenting, family relationships, and the Christian home.",
    icon: "👨‍👩‍👧",
    background: "/images/curriculum/foundations-background.png",
  },

  apologetics: {
    title: "Apologetics",
    description:
      "Build confidence in the evidence for God, Scripture, creation, and the Christian faith.",
    icon: "🛡️",
    background: "/images/curriculum/foundations-background.png",
  },

  "christian-living": {
    title: "Christian Living",
    description:
      "Practical biblical instruction for faithful Christian life, character, and spiritual growth.",
    icon: "♥",
    background: "/images/curriculum/foundations-background.png",
  },
};

export default async function CategoryPage({
  params,
}: CategoryPageProps) {
  const { category } = await params;

  if (category === "foundations") {
    return <FoundationsPage />;
  }

  const data = otherCategories[category];

  if (!data) {
    return (
      <main className="min-h-screen bg-[#f4f1e9]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h1 className="text-3xl font-bold text-[#061b3a]">
            Curriculum Category Not Found
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

  return <ComingSoonCategory data={data} />;
}

function FoundationsPage() {
  const course = foundationsCourse;

  return (
    <main className="min-h-screen bg-[#f4f1e9] text-slate-900">
      <CategoryHeader />

      <CategoryHero
        title={course.title}
        description={course.description}
        icon={course.icon}
        background={course.background}
        stats={`${course.totalLessons} Lessons • ${course.sections.length} Sections • ${course.ageRange}`}
      />

      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-8 lg:grid-cols-[1fr_340px]">
        <section>
          <div className="mb-5">
            <h2 className="text-2xl font-black uppercase tracking-[0.08em] text-[#061b3a]">
              Foundations Course
            </h2>

            <div className="mt-2 h-1 w-10 rounded-full bg-amber-400" />

            <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
              Explore the complete Foundations curriculum. Each section contains
              ten lessons built around one major area of biblical study.
            </p>
          </div>

          <div className="space-y-4">
            {course.sections.map((section) => (
              <SectionCard
                key={section.number}
                section={section}
              />
            ))}
          </div>
        </section>

        <ClassOptions />
      </div>
    </main>
  );
}

function SectionCard({
  section,
}: {
  section: (typeof foundationsCourse.sections)[number];
}) {
  return (
    <Link
      href={`/curriculum/foundations/section-${section.number}`}
      className="group grid items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-amber-300 hover:shadow-md md:grid-cols-[72px_1fr_auto]"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#061b3a] text-xl font-black text-amber-300">
        {String(section.number).padStart(2, "0")}
      </div>

      <div>
        <div className="text-xs font-black uppercase tracking-[0.12em] text-amber-600">
          Section {String(section.number).padStart(2, "0")}
        </div>

        <h3 className="mt-1 text-xl font-black text-[#061b3a]">
          {section.title}
        </h3>

        <p className="mt-1 text-sm leading-6 text-slate-600">
          {section.description}
        </p>
      </div>

      <div className="flex items-center gap-5 md:border-l md:border-slate-200 md:pl-6">
        <div className="text-sm font-bold uppercase tracking-wide text-slate-600">
          📖 {section.lessons.length} Lessons
        </div>

        <div className="text-2xl text-[#061b3a] transition group-hover:translate-x-1">
          ›
        </div>
      </div>
    </Link>
  );
}

function CategoryHeader() {
  return (
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
  );
}

function CategoryHero({
  title,
  description,
  icon,
  background,
  stats,
}: {
  title: string;
  description: string;
  icon: string;
  background: string;
  stats?: string;
}) {
  return (
    <section className="relative min-h-[230px] overflow-hidden border-b border-slate-200 bg-[#faf7ef]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${background}')`,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#faf7ef]/90 via-[#faf7ef]/45 to-transparent" />

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

          <span className="font-semibold text-[#061b3a]">
            {title}
          </span>
        </div>

        <div className="flex max-w-4xl items-center gap-6">
          <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl bg-[#061b3a] text-4xl shadow-lg">
            {icon}
          </div>

          <div>
            <h1 className="text-4xl font-black tracking-tight text-[#061b3a] md:text-5xl">
              {title}
            </h1>

            <div className="mt-3 h-1 w-12 rounded-full bg-amber-400" />

            <p className="mt-4 max-w-2xl text-base font-medium leading-7 text-slate-700 md:text-lg">
              {description}
            </p>

            {stats && (
              <div className="mt-3 text-sm font-bold text-[#061b3a]">
                {stats}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
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
        Select the groups you teach and adjust the schedule to help tailor the
        Foundations curriculum for your class.
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
        Apply to Course
      </button>

      <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50 p-4 text-xs leading-5 text-slate-600">
        The biblical lesson themes remain consistent across age groups. Teaching
        methods, activities, and applications are adapted for the selected
        audience.
      </div>
    </aside>
  );
}

function ComingSoonCategory({
  data,
}: {
  data: SimpleCategory;
}) {
  return (
    <main className="min-h-screen bg-[#f4f1e9] text-slate-900">
      <CategoryHeader />

      <CategoryHero
        title={data.title}
        description={data.description}
        icon={data.icon}
        background={data.background}
      />

      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-8 py-16 text-center">
          <div className="text-5xl">{data.icon}</div>

          <h2 className="mt-5 text-2xl font-black text-[#061b3a]">
            Curriculum Coming Soon
          </h2>

          <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-slate-500">
            This curriculum category is ready for its course material to be
            added to the BRL Curriculum system.
          </p>
        </div>
      </div>
    </main>
  );
}