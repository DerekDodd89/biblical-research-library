import Link from "next/link";
import {
  BookOpenText,
  Search,
  SquarePen,
} from "lucide-react";

import ModuleNavigation from "@/components/layout/ModuleNavigation";

const sermonTools = [
  {
    title: "Search Sermon Library",
    description:
      "Search and browse published sermons by title, Scripture, topic, speaker, or series.",
    href: "/sermons/library",
    icon: Search,
  },
  {
    title: "Sermon Series",
    description:
      "Browse organized sermon series and connected preaching plans.",
    href: "/sermons/series",
    icon: BookOpenText,
  },
  {
    title: "Build a Sermon",
    description:
      "Create and develop a sermon using the BRL preaching framework.",
    href: "/sermons/builder",
    icon: SquarePen,
  },
];

export default function SermonsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-neutral-950 text-white">
      <div
        aria-hidden="true"
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-[0.16]"
        style={{
          backgroundImage: "url('/images/modules/08-sermons.png')",
        }}
      />

      <div
        aria-hidden="true"
        className="fixed inset-0 bg-neutral-950/10"
      />

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-8 py-8">
          <ModuleNavigation
            moduleName="Sermons & Outlines"
            fallbackHref="/"
            fallbackLabel="Go Back"
          />

          <header className="mx-auto max-w-3xl py-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-300">
              BRL 070.001
            </p>

            <h1 className="mt-4 text-5xl font-bold tracking-tight">
              Sermons &amp; Outlines
            </h1>

            <p className="mt-5 text-lg text-neutral-300">
              Search • Build • Organize • Preach
            </p>
          </header>

          <section
            aria-label="Sermons module tools"
            className="mx-auto grid max-w-7xl gap-8 pb-20 lg:grid-cols-3"
          >
            {sermonTools.map((tool) => {
              const Icon = tool.icon;

              return (
                <Link
                  key={tool.title}
                  href={tool.href}
                  className="group min-h-[320px] rounded-3xl border border-white/20 bg-black/35 p-10 backdrop-blur-[2px] transition-all duration-200 hover:-translate-y-1 hover:border-amber-300/70 hover:bg-black/45"
                >
                  <div className="flex h-full flex-col">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-amber-300/40 bg-amber-300/10">
                      <Icon className="h-9 w-9 text-amber-300" />
                    </div>

                    <h2 className="mt-8 text-3xl font-bold transition group-hover:text-amber-200">
                      {tool.title}
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-neutral-300">
                      {tool.description}
                    </p>

                    <div className="mt-auto pt-8 text-base font-semibold text-amber-300">
                      Open →
                    </div>
                  </div>
                </Link>
              );
            })}
          </section>
        </div>
      </div>
    </main>
  );
}