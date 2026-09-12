const includedResources = [
  {
    title: "Teacher Guide",
    subtitle: "Step-by-step teaching helps",
    icon: "📗",
  },
  {
    title: "Student Handouts",
    subtitle: "Printable lessons and activities",
    icon: "📘",
  },
  {
    title: "PowerPoint",
    subtitle: "Ready-to-use presentations",
    icon: "🖥️",
  },
  {
    title: "Posters & Visuals",
    subtitle: "Engaging visuals for class",
    icon: "🖼️",
  },
  {
    title: "Activities",
    subtitle: "Games, worksheets and more",
    icon: "🧩",
  },
  {
    title: "Digital Lesson",
    subtitle: "Use online or in the app",
    icon: "💻",
  },
];

export default function CurriculumResources() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-[#fbfaf7] p-6 shadow-sm">
      <div className="mb-6 text-center">
        <h2 className="text-lg font-black uppercase tracking-[0.14em] text-[#061b3a]">
          Every Curriculum Includes
        </h2>

        <div className="mx-auto mt-3 h-1 w-8 rounded-full bg-amber-400" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
        {includedResources.map((resource) => (
          <div
            key={resource.title}
            className="flex gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
          >
            <div className="text-3xl">{resource.icon}</div>

            <div>
              <div className="font-bold text-[#061b3a]">
                {resource.title}
              </div>

              <div className="mt-1 text-xs leading-5 text-slate-500">
                {resource.subtitle}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}