type ModuleHeroProps = {
  moduleNumber: string;
  title: string;
  tagline: string;
  image: string;
};

export default function ModuleHero({
  moduleNumber,
  title,
  tagline,
  image,
}: ModuleHeroProps) {
  return (
    <section
      className="relative isolate min-h-[320px] overflow-hidden"
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-black/65" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/45 to-neutral-950" />

      <div className="relative z-10 mx-auto flex min-h-[320px] max-w-6xl items-center justify-center px-6 py-12 text-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
            {moduleNumber}
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            {title}
          </h1>

          <p className="mt-5 text-base font-medium tracking-[0.15em] text-neutral-200 sm:text-lg">
            {tagline}
          </p>
        </div>
      </div>
    </section>
  );
}