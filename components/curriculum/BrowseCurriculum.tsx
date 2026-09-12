const browseItems = [
  {
    title: "By Age",
    subtitle: "Find curriculum designed for the age group you teach",
    icon: "👥",
  },
  {
    title: "Class Planning",
    subtitle: "Build a class around your group, schedule, and needs",
    icon: "🗓️",
  },
  {
    title: "Featured Courses",
    subtitle: "Explore highlighted and recommended curriculum",
    icon: "⭐",
  },
  {
    title: "All Curriculum",
    subtitle: "Browse the complete BRL curriculum collection",
    icon: "▦",
  },
];

export default function BrowseCurriculum() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-[#fbfaf7] p-6 shadow-sm">
      <div className="mb-6 text-center">
        <h2 className="text-xl font-black uppercase tracking-[0.14em] text-[#061b3a]">
          Browse Curriculum
        </h2>

        <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-slate-500">
          Already know who you are teaching or how you want to plan your class?
          Start here.
        </p>

        <div className="mx-auto mt-3 h-1 w-8 rounded-full bg-amber-400" />
      </div>

      <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {browseItems.map((item) => (
          <BrowseCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}

function BrowseCard({
  icon,
  title,
  subtitle,
}: {
  icon: string;
  title: string;
  subtitle: string;
}) {
  return (
    <button
      type="button"
      className="group flex min-h-[180px] flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:border-amber-300 hover:shadow-lg"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#061b3a] text-3xl text-white shadow-sm transition group-hover:bg-[#0a2b58]">
        {icon}
      </div>

      <h3 className="mt-4 text-base font-bold text-[#061b3a]">
        {title}
      </h3>

      <p className="mt-2 text-xs leading-5 text-slate-500">
        {subtitle}
      </p>
    </button>
  );
}