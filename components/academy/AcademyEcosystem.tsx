import Link from "next/link";

const tools = [
  {
    number: "01",
    title: "Bible",
    question: "Read the Word",
    description:
      "Begin with the biblical text itself. Read, compare, observe, and establish the passage that will be studied.",
    href: "/bible",
  },
  {
    number: "02",
    title: "Context Circle",
    question: "Study the Word",
    description:
      "Learn and practice disciplined interpretation through Direct Context, Remote Context, Total Context, and biblical authority.",
    href: "/context-circle",
  },
  {
    number: "03",
    title: "Research Library",
    question: "Research the Word",
    description:
      "Consult deeper BRL studies, historical material, language resources, doctrinal research, and supporting documentation.",
    href: "/library",
  },
  {
    number: "04",
    title: "BRL Academy",
    question: "Learn to Communicate",
    description:
      "Bring study and research together through guided instruction, assignments, competency assessments, and practical training.",
    href: "/academy",
    featured: true,
  },
  {
    number: "05",
    title: "Sermon Module",
    question: "Prepare the Message",
    description:
      "Turn faithful exegesis into organized sermons, teaching outlines, listener resources, and practical preaching material.",
    href: "/sermons",
  },
];

export default function AcademyEcosystem() {
  return (
    <section className="bg-[#061b3a] py-16 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-amber-400">
            Built on the BRL Ecosystem
          </p>

          <h2 className="mt-3 font-serif text-3xl font-bold md:text-4xl">
            Learn by Actually Doing the Work
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-300">
            Academy instruction connects directly with the tools of the
            Biblical Research Library. Students do not simply learn about
            biblical study and preaching — they practice the complete process.
          </p>
        </div>

        {/* Workflow */}
        <div className="mt-12 grid gap-4 lg:grid-cols-5">
          {tools.map((tool, index) => (
            <div key={tool.number} className="relative">
              {/* Workflow arrow */}
              {index < tools.length - 1 && (
                <div className="absolute -right-4 top-12 z-20 hidden h-8 w-8 items-center justify-center rounded-full border border-amber-400/40 bg-[#061b3a] font-bold text-amber-400 lg:flex">
                  →
                </div>
              )}

              <Link
                href={tool.href}
                className={`group flex h-full min-h-[270px] flex-col rounded-2xl border p-6 transition duration-200 hover:-translate-y-1 ${
                  tool.featured
                    ? "border-amber-400 bg-amber-400 text-[#061b3a] shadow-xl"
                    : "border-white/15 bg-white/5 hover:border-amber-400/60 hover:bg-white/10"
                }`}
              >
                <div
                  className={`text-xs font-black tracking-[0.2em] ${
                    tool.featured ? "text-[#061b3a]/60" : "text-amber-400"
                  }`}
                >
                  {tool.number}
                </div>

                <p
                  className={`mt-5 text-[10px] font-black uppercase tracking-[0.18em] ${
                    tool.featured ? "text-[#061b3a]/70" : "text-slate-400"
                  }`}
                >
                  {tool.question}
                </p>

                <h3 className="mt-2 font-serif text-xl font-bold">
                  {tool.title}
                </h3>

                <p
                  className={`mt-4 flex-1 text-sm leading-6 ${
                    tool.featured ? "text-[#061b3a]/80" : "text-slate-300"
                  }`}
                >
                  {tool.description}
                </p>

                <div
                  className={`mt-5 border-t pt-4 text-xs font-bold ${
                    tool.featured
                      ? "border-[#061b3a]/20"
                      : "border-white/10 text-amber-300"
                  }`}
                >
                  Open {tool.title} →
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Example student workflow */}
        <div className="mx-auto mt-10 max-w-5xl rounded-2xl border border-white/10 bg-white/5 px-7 py-6">
          <div className="grid gap-5 md:grid-cols-[180px_1fr] md:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-400">
                Example Assignment
              </p>

              <p className="mt-2 font-serif text-xl font-bold">
                Study → Sermon
              </p>
            </div>

            <p className="text-sm leading-7 text-slate-300">
              A student may receive an assigned passage in Academy, read it in
              the Bible Module, complete its Context Circle, consult approved
              research, develop the message through Academy instruction, and
              finally prepare the sermon in the Sermon Module.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}