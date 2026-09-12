import Link from "next/link";

const categories = [
  {
    title: "Foundations",
    subtitle: "Build a strong biblical foundation",
    icon: "✝",
    href: "/curriculum/foundations",
  },
  {
    title: "Books of the Bible",
    subtitle: "Study Scripture book by book",
    icon: "📖",
    href: "/curriculum/books-of-the-bible",
  },
  {
    title: "Biblical Ministry",
    subtitle: "Serve and lead biblically",
    icon: "👥",
    href: "/curriculum/biblical-ministry",
  },
  {
    title: "The Church",
    subtitle: "God's design for His church",
    icon: "⛪",
    href: "/curriculum/church",
  },
  {
    title: "Family",
    subtitle: "Biblical teaching for the home",
    icon: "👨‍👩‍👧",
    href: "/curriculum/family",
  },
  {
    title: "Apologetics",
    subtitle: "Know and defend the faith",
    icon: "🛡️",
    href: "/curriculum/apologetics",
  },
  {
    title: "Christian Living",
    subtitle: "Living faithfully in Christ",
    icon: "♥",
    href: "/curriculum/christian-living",
  },
];

export default function CurriculumCategories() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-[#fbfaf7] p-6 shadow-sm">
      <div className="mb-6 text-center">
        <h2 className="text-xl font-black uppercase tracking-[0.14em] text-[#061b3a]">
          Curriculum Categories
        </h2>

        <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-slate-500">
          Choose a biblical area of study to explore available curriculum.
        </p>

        <div className="mx-auto mt-3 h-1 w-8 rounded-full bg-amber-400" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
        {categories.map((category) => (
          <Link
            key={category.title}
            href={category.href}
            className="group flex min-h-[190px] flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm transition hover:-translate-y-1 hover:border-amber-300 hover:shadow-lg"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#061b3a] text-3xl text-white shadow-sm transition group-hover:bg-[#0a2b58]">
              {category.icon}
            </div>

            <h3 className="mt-4 text-base font-bold text-[#061b3a]">
              {category.title}
            </h3>

            <p className="mt-2 text-xs leading-5 text-slate-500">
              {category.subtitle}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}