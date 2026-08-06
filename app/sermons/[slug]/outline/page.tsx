import { notFound } from "next/navigation";

import ModuleNavigation from "@/components/layout/ModuleNavigation";
import { getSermonBySlug } from "@/lib/sermons";

type SermonOutlinePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function SermonOutlinePage({
  params,
}: SermonOutlinePageProps) {
  const { slug } = await params;
  const sermon = getSermonBySlug(slug);

  if (!sermon) {
    notFound();
  }

  return (
    <main className="relative min-h-screen bg-neutral-950 text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 bg-cover bg-center bg-no-repeat opacity-[0.12]"
        style={{
          backgroundImage: "url('/images/modules/08-sermons.png')",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 bg-neutral-950/20"
      />

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <ModuleNavigation
            moduleName="Sermons & Outlines"
            currentPage="Study Online"
            fallbackHref={`/sermons/${sermon.slug}`}
            fallbackLabel="Go Back"
          />

          <article className="mx-auto max-w-4xl pb-20">
            <header className="border-b border-white/15 pb-8">
              <span className="inline-flex rounded-full border border-amber-300/40 bg-amber-300/10 px-3 py-1 text-xs font-semibold text-amber-200">
                {sermon.id}
              </span>

              <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                {sermon.title}
              </h1>

              <p className="mt-2 text-xl text-neutral-300">
                {sermon.subtitle}
              </p>

              <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm text-neutral-300">
                <p>
                  <span className="text-neutral-500">Primary Text:</span>{" "}
                  <strong className="text-amber-200">
                    {sermon.primaryText}
                  </strong>
                </p>

                <p>
                  <span className="text-neutral-500">Speaker:</span>{" "}
                  {sermon.speaker}
                </p>

                <p>
                  <span className="text-neutral-500">Length:</span>{" "}
                  {sermon.estimatedMinutes} minutes
                </p>
              </div>
            </header>

            <section className="mt-8 rounded-2xl border border-white/15 bg-black/45 p-6 backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">
                Proposition
              </p>

              <p className="mt-4 text-lg leading-8 text-neutral-200">
                {sermon.proposition}
              </p>
            </section>

            <section className="mt-10">
              <h2 className="text-3xl font-bold">
                Introduction
              </h2>

              <div className="mt-5 space-y-4 rounded-2xl border border-white/15 bg-black/45 p-6 backdrop-blur-sm">
                {sermon.introduction.map((line, index) => (
                  <p
                    key={`${index}-${line}`}
                    className="leading-7 text-neutral-300"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </section>

            <section className="mt-12">
              <h2 className="text-3xl font-bold">
                Sermon Outline
              </h2>

              <div className="mt-8 space-y-10">
                {sermon.sections.map((section) => (
                  <section
                    key={section.heading}
                    className="rounded-2xl border border-white/15 bg-black/45 p-6 backdrop-blur-sm"
                  >
                    <h3 className="text-2xl font-bold text-amber-200">
                      {section.heading}
                    </h3>

                    <div className="mt-6 space-y-5">
                      {section.points.map((point) => (
                        <div
                          key={point.heading}
                          className="border-l-2 border-amber-300/40 pl-5"
                        >
                          <h4 className="text-xl font-semibold text-white">
                            {point.heading}
                          </h4>

                          <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-amber-200">
                            {point.scripture}
                          </p>

                          <p className="mt-3 leading-7 text-neutral-300">
                            {point.summary}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-7 rounded-xl border border-amber-300/20 bg-amber-300/5 p-5">
                      <h4 className="font-semibold text-amber-200">
                        Application
                      </h4>

                      <div className="mt-3 space-y-2">
                        {section.application.map((line, index) => (
                          <p
                            key={`${index}-${line}`}
                            className="leading-7 text-neutral-300"
                          >
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  </section>
                ))}
              </div>
            </section>

            <section className="mt-12">
              <h2 className="text-3xl font-bold">
                Conclusion
              </h2>

              <div className="mt-5 space-y-4 rounded-2xl border border-white/15 bg-black/45 p-6 backdrop-blur-sm">
                {sermon.conclusion.map((line, index) => (
                  <p
                    key={`${index}-${line}`}
                    className="leading-7 text-neutral-300"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </section>
          </article>
        </div>
      </div>
    </main>
  );
}