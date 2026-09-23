import Link from "next/link";

const stages = [
  {
    number: "01",
    title: "Biblical Foundations",
    subtitle: "Establish the foundation for serious biblical study",
    href: "/academy/stage-1",
  },
  {
    number: "02",
    title: "Stage Two",
    subtitle: "Continue developing biblical knowledge and study skills",
    href: "/academy/stage-2",
  },
  {
    number: "03",
    title: "Stage Three",
    subtitle: "Advance into deeper biblical study and application",
    href: "/academy/stage-3",
  },
  {
    number: "04",
    title: "Stage Four",
    subtitle: "Develop advanced study and ministry competencies",
    href: "/academy/stage-4",
  },
  {
    number: "05",
    title: "Biblical Research",
    subtitle: "Demonstrate advanced independent biblical research",
    href: "/academy/stage-5",
  },
];

export default function AcademyStages() {
  return (
    <section
      id="stages"
      className="rounded-3xl border border-slate-200 bg-[#fbfaf7] p-6 shadow-sm"
    >
      <div className="mb-6 text-center">
        <h2 className="text-xl font-black uppercase tracking-[0.14em] text-[#061b3a]">
          Academic Stages
        </h2>

        <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-slate-500">
          Progress through five stages of increasingly advanced biblical study.
        </p>

        <div className="mx-auto mt-3 h-1 w-8 rounded-full bg-amber-400" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {stages.map((stage) => (
          <Link
            key={stage.number}
            href={stage.href}
            className="group flex min-h-[210px] flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm transition hover:-translate-y-1 hover:border-amber-300 hover:shadow-lg"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#061b3a] text-xl font-black text-amber-300 shadow-sm transition group-hover:bg-[#0a2b58]">
              {stage.number}
            </div>

            <div className="mt-3 text-[10px] font-black uppercase tracking-[0.18em] text-amber-600">
              Stage {Number(stage.number)}
            </div>

            <h3 className="mt-1 text-base font-bold text-[#061b3a]">
              {stage.title}
            </h3>

            <p className="mt-2 text-xs leading-5 text-slate-500">
              {stage.subtitle}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}