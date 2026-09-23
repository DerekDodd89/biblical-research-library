const academyItems = [
  {
    icon: "▶",
    title: "Continue Studying",
    subtitle: "Pick up exactly where you left off",
  },
  {
    icon: "✓",
    title: "My Progress",
    subtitle: "Track stages, courses, lessons, and completion",
  },
  {
    icon: "▤",
    title: "Course Catalog",
    subtitle: "Explore the complete BRL Academy course catalog",
  },
  {
    icon: "★",
    title: "Academic Standards",
    subtitle: "Review mastery, grading, and advancement requirements",
  },
];

export default function AcademyDashboard() {
  return (
    <section
      id="my-academy"
      className="rounded-3xl border border-slate-200 bg-[#fbfaf7] p-6 shadow-sm"
    >
      <div className="mb-6 text-center">
        <h2 className="text-xl font-black uppercase tracking-[0.14em] text-[#061b3a]">
          My Academy
        </h2>

        <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-slate-500">
          Continue your studies, monitor your progress, or explore the Academy.
        </p>

        <div className="mx-auto mt-3 h-1 w-8 rounded-full bg-amber-400" />
      </div>

      <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {academyItems.map((item) => (
          <button
            key={item.title}
            type="button"
            className="group flex min-h-[175px] flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm transition hover:-translate-y-1 hover:border-amber-300 hover:shadow-lg"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#061b3a] text-xl font-black text-amber-300 transition group-hover:bg-[#0a2b58]">
              {item.icon}
            </div>

            <h3 className="mt-4 font-bold text-[#061b3a]">{item.title}</h3>

            <p className="mt-2 text-xs leading-5 text-slate-500">
              {item.subtitle}
            </p>
          </button>
        ))}
      </div>
    </section>
  );
}