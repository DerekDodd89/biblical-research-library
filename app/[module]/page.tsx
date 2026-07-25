import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
  CircleDot,
  Construction,
} from "lucide-react";

const moduleNames: Record<string, string> = {
  bible: "Bible",
  "context-circle": "Context Circle",
  library: "Research Library",
  academy: "BRL Academy",
  "church-curriculum": "Church Curriculum",
  doctrine: "Doctrine Explorer",
  atlas: "Bible Atlas",
  sermons: "Sermons & Outlines",
  workspace: "My Workspace",
  tools: "Tools & Resources",
  "start-here": "Start Here",
  login: "Login",
};

export default async function ModulePage({
  params,
}: {
  params: Promise<{ module: string }>;
}) {
  const { module } = await params;
  const title = moduleNames[module] ?? "BRL Module";

  return (
    <main className="min-h-screen bg-slate-50">
      <header className="bg-[#061a31] text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
          <Link href="/" className="flex items-center gap-3">
            <BookOpen className="h-8 w-8" />

            <div>
              <div className="font-serif text-2xl font-bold">BRL</div>
              <div className="text-xs text-slate-300">
                BIBLICAL RESEARCH LIBRARY
              </div>
            </div>
          </Link>

          <Link
            href="/"
            className="flex items-center gap-2 rounded-lg border border-white/20 px-4 py-2 text-sm hover:bg-white/10"
          >
            <ArrowLeft className="h-4 w-4" />
            Home
          </Link>
        </div>
      </header>

      <section className="mx-auto flex max-w-4xl flex-col items-center px-5 py-24 text-center">
        <div className="mb-7 flex h-24 w-24 items-center justify-center rounded-full bg-blue-100 text-blue-800">
          {module === "context-circle" ? (
            <CircleDot className="h-12 w-12" />
          ) : (
            <Construction className="h-12 w-12" />
          )}
        </div>

        <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
          BRL Ecosystem Module
        </p>

        <h1 className="font-serif text-4xl font-bold text-slate-950 sm:text-5xl">
          {title}
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          This module now has a permanent place within the Biblical Research
          Library ecosystem. It will be connected as its application,
          curriculum, research archive, and Supabase resources are developed.
        </p>

        {module === "context-circle" && (
          <div className="mt-8 rounded-xl border border-teal-200 bg-teal-50 p-5 text-left text-teal-950">
            The Context Circle application is already under development. This
            website route will eventually connect directly to that existing
            application.
          </div>
        )}

        <Link
          href="/"
          className="mt-10 flex items-center gap-2 rounded-lg bg-blue-800 px-6 py-3 font-semibold text-white hover:bg-blue-700"
        >
          <ArrowLeft className="h-5 w-5" />
          Return to BRL Home
        </Link>
      </section>
    </main>
  );
}