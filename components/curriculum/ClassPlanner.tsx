const planningItems = [
  {
    title: "Next Quarter",
    subtitle: "Find material for your next quarter",
    icon: "🗓️",
  },
  {
    title: "Next Year",
    subtitle: "Plan your entire year of classes",
    icon: "📅",
  },
  {
    title: "Wednesday Night",
    subtitle: "Midweek Bible class resources",
    icon: "🕒",
  },
  {
    title: "Youth Class",
    subtitle: "Engaging material for teens",
    icon: "👥",
  },
  {
    title: "Adult Class",
    subtitle: "In-depth studies for adults",
    icon: "👤",
  },
  {
    title: "Whole Church",
    subtitle: "All age ministries together",
    icon: "👨‍👩‍👧‍👦",
  },
];

export default function ClassPlanner() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-[#fbfaf7] p-6 shadow-sm">
      <div className="mb-6 text-center">
        <h2 className="text-lg font-black uppercase tracking-[0.14em] text-[#061b3a]">
          Plan Your Next Class
        </h2>

        <div className="mx-auto mt-3 h-1 w-8 rounded-full bg-amber-400" />
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-6">
        {planningItems.map((item) => (
          <PlannerCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}

function PlannerCard({
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
      className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-4 text-left shadow-sm transition hover:border-amber-300 hover:shadow-md"
    >
      <div className="text-3xl">{icon}</div>

      <div>
        <div className="font-bold text-[#061b3a]">{title}</div>

        <div className="mt-1 text-xs leading-5 text-slate-500">
          {subtitle}
        </div>
      </div>
    </button>
  );
}