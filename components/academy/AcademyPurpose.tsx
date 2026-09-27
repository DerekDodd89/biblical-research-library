export default function AcademyPurpose() {
  const principles = [
    {
      number: "01",
      title: "Study Faithfully",
      description:
        "Learn why Scripture is authoritative and develop a disciplined method for discovering what the biblical text actually teaches.",
    },
    {
      number: "02",
      title: "Understand Clearly",
      description:
        "Build biblical knowledge through context, sound hermeneutics, careful research, and the whole counsel of Scripture.",
    },
    {
      number: "03",
      title: "Prepare Carefully",
      description:
        "Learn to move from exegesis to proposition, outline, application, Bible lesson, and sermon without losing the meaning of the text.",
    },
    {
      number: "04",
      title: "Communicate Faithfully",
      description:
        "Develop the practical ability to teach, preach, evangelize, and communicate God's Word clearly to real people.",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-amber-600">
            Why BRL Academy?
          </p>

          <h2 className="mt-3 font-serif text-3xl font-bold text-[#061b3a] md:text-4xl">
            Learn the Word. Learn to Share the Word.
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600">
            BRL Academy is a structured Bible training program designed to take
            the student beyond simply completing lessons. The goal is to
            develop the knowledge, study habits, judgment, and practical skills
            necessary to faithfully handle and communicate Scripture.
          </p>
        </div>

        {/* Core Purpose */}
        <div className="mt-12 grid overflow-hidden rounded-3xl border border-slate-200 bg-[#f8f6f0] shadow-sm lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left */}
          <div className="flex flex-col justify-center bg-[#061b3a] p-8 text-white md:p-10">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-amber-400">
              The Academy Difference
            </p>

            <h3 className="mt-4 font-serif text-3xl font-bold leading-tight">
              Not just what to believe.
              <br />
              Learn how to study,
              <br />
              prepare, and teach.
            </h3>

            <p className="mt-5 max-w-lg text-sm leading-7 text-slate-300">
              BRL Academy begins with biblical authority and hermeneutics,
              develops the student&apos;s ability to understand Scripture, and
              progressively trains the student to organize and communicate
              biblical truth.
            </p>

            <div className="mt-7 border-l-2 border-amber-400 pl-4">
              <p className="font-serif text-lg italic leading-7 text-amber-100">
                “Be diligent to present yourself approved to God... rightly
                dividing the word of truth.”
              </p>

              <p className="mt-2 text-xs font-bold uppercase tracking-[0.15em] text-amber-400">
                2 Timothy 2:15
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="grid gap-px bg-slate-200 sm:grid-cols-2">
            {principles.map((principle) => (
              <div
                key={principle.number}
                className="bg-white p-7 transition hover:bg-amber-50/40"
              >
                <div className="text-xs font-black tracking-[0.18em] text-amber-600">
                  {principle.number}
                </div>

                <h3 className="mt-3 font-serif text-xl font-bold text-[#061b3a]">
                  {principle.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Curriculum vs Academy vs Sermons */}
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">
              Curriculum
            </p>

            <h3 className="mt-2 font-serif text-xl font-bold text-[#061b3a]">
              What to Teach
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Organized biblical teaching material for churches, classes,
              teachers, families, and students.
            </p>
          </div>

          <div className="rounded-2xl border-2 border-amber-400 bg-amber-50/40 p-6 shadow-sm">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-amber-700">
              BRL Academy
            </p>

            <h3 className="mt-2 font-serif text-xl font-bold text-[#061b3a]">
              How to Prepare &amp; Teach
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Develop the student who studies the text, understands its
              message, prepares it faithfully, and communicates it clearly.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">
              Sermon Module
            </p>

            <h3 className="mt-2 font-serif text-xl font-bold text-[#061b3a]">
              Tools to Build &amp; Organize
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              The working environment for organizing, developing, storing, and
              using sermons and preaching resources.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}