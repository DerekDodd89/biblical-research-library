export default function CurriculumHero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/modules/05-curriculum.png')",
        }}
      />

      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 py-8 md:py-10">
        <div className="max-w-2xl">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.22em] text-amber-400">
            BRL Curriculum
          </p>

          <h1 className="font-serif text-4xl font-bold leading-[1.05] text-white md:text-5xl">
            Biblical Curriculum
            <br />
            Built for the Local Church
          </h1>

          <p className="mt-4 max-w-xl text-lg leading-7 text-slate-100">
            Practical, Christ-centered curriculum for every age and every stage
            of life.
          </p>
        </div>
      </div>
    </section>
  );
}