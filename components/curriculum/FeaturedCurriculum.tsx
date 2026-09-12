const featuredCourses = [
  {
    title: "The Life of Jesus",
    audience: "Ages 8–12",
    lessons: "13 Lessons",
    length: "Quarterly",
    description:
      "A chronological study of the life and ministry of our Lord.",
  },
  {
    title: "Standing Strong",
    audience: "Ages 13–18",
    lessons: "12 Lessons",
    length: "Quarterly",
    description:
      "Equipping teens to stand firm in a confusing world.",
  },
  {
    title: "Biblical Foundations",
    audience: "Adult",
    lessons: "24 Lessons",
    length: "Year-Long",
    description:
      "Key doctrines every Christian should know and understand.",
  },
  {
    title: "The Church of Christ",
    audience: "All Ages",
    lessons: "20 Lessons",
    length: "Half-Year",
    description:
      "What the Bible teaches about Christ's church.",
  },
  {
    title: "Old Testament Survey",
    audience: "All Ages",
    lessons: "26 Lessons",
    length: "Year-Long",
    description:
      "A survey of the major books and themes of the Old Testament.",
  },
  {
    title: "Christian Living",
    audience: "Adult",
    lessons: "20 Lessons",
    length: "Half-Year",
    description:
      "Practical lessons for daily Christian growth and discipleship.",
  },
];

export default function FeaturedCurriculum() {
  return (
    <section
      id="all-courses"
      className="rounded-3xl border border-slate-200 bg-[#fbfaf7] p-6 shadow-sm"
    >
      <div className="mb-6 text-center">
        <h2 className="text-lg font-black uppercase tracking-[0.14em] text-[#061b3a]">
          Featured Curriculum
        </h2>

        <div className="mx-auto mt-3 h-1 w-8 rounded-full bg-amber-400" />
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {featuredCourses.map((course) => (
          <article
            key={course.title}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex h-48 items-end bg-gradient-to-br from-[#0b315f] via-[#365779] to-[#a67c3e] p-5 text-white">
              <div>
                <div className="mb-3 inline-flex rounded-full bg-black/30 px-3 py-1 text-xs font-bold uppercase tracking-wide">
                  {course.audience}
                </div>

                <h3 className="text-2xl font-black leading-tight">
                  {course.title}
                </h3>
              </div>
            </div>

            <div className="p-5">
              <div className="text-sm font-bold text-[#061b3a]">
                {course.lessons}
              </div>

              <div className="mt-1 text-sm text-amber-700">
                {course.length}
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-600">
                {course.description}
              </p>

              <div className="mt-5 flex gap-2 border-t border-slate-100 pt-4 text-lg">
                <span title="Teacher Guide">📄</span>
                <span title="PowerPoint">🖥️</span>
                <span title="Activities">🧩</span>
                <span title="Student Material">📖</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <button
          type="button"
          className="rounded-lg bg-[#061b3a] px-8 py-3 font-semibold text-white shadow-sm transition hover:bg-[#0a2b58]"
        >
          View All Courses
        </button>
      </div>
    </section>
  );
}