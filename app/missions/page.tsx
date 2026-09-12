import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  CircleDot,
  Library,
  Map,
  Users,
  GraduationCap,
  Globe2,
  ArrowRight,
  Heart,
} from "lucide-react";

export default function MissionsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* MISSIONS HEADER / HERO */}
      <section className="relative isolate overflow-hidden border-b #8b6a2b">

        {/* Missions background */}
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/modules/10-missions.png')",
          }}
        />

        {/* Neutral readability treatment */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/75 via-black/35 to-black/10" />

        {/* MODULE NAVIGATION */}
        <div className="border-b border-white/15 bg-black/20 backdrop-blur-[2px]">
          <div className="mx-auto flex h-[88px] max-w-7xl items-center justify-between px-6 lg:px-8">

            {/* Module identity / home */}
            <Link
              href="/missions"
              className="group flex items-center gap-3"
            >
              <div className="h-12 w-12 overflow-hidden rounded-xl">
                <Image
                  src="/images/icons/missions-icon.png"
                  alt="BRL Missions"
                  width={48}
                  height={48}
                  priority
                  className="h-full w-full rounded-xl object-cover"
                />
              </div>

              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold tracking-tight text-white">
                    BRL
                  </span>

                  <span className="text-2xl font-light tracking-tight text-white">
                    MISSIONS
                  </span>
                </div>

                <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-300">
                  Take the Gospel Into the World
                </p>
              </div>
            </Link>

            {/* Desktop navigation */}
            <nav className="hidden items-center gap-8 md:flex">
              <Link
                href="/missions"
                className="text-sm font-semibold text-amber-300 transition hover:text-amber-200"
              >
                Home
              </Link>

              <Link
                href="#mission-field"
                className="text-sm font-medium text-white transition hover:text-amber-300"
              >
                All Courses
              </Link>

              <Link
                href="#about"
                className="text-sm font-medium text-white transition hover:text-amber-300"
              >
                About Missions
              </Link>

              <Link
                href="#help"
                className="text-sm font-medium text-white transition hover:text-amber-300"
              >
                Help
              </Link>

              <Link
                href="#favorites"
                className="flex items-center gap-2 rounded-lg border border-white/40 bg-black/20 px-4 py-2.5 text-sm font-medium text-white transition hover:border-amber-300 hover:text-amber-300"
              >
                <Heart className="h-4 w-4" />
                My Favorites
              </Link>
            </nav>
          </div>
        </div>

        {/* HERO CONTENT */}
        <div className="mx-auto flex min-h-[245px] max-w-7xl items-center px-6 py-7 lg:px-8">
          <div className="max-w-xl">

            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">
              BRL Missions
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Take the Gospel
              <br />
              Into the World.
            </h1>

            <p className="mt-4 max-w-lg text-base leading-7 text-slate-100">
              A field companion designed to help Christians clearly and
              confidently teach the simple gospel of Jesus Christ using
              established biblical material.
            </p>

          </div>
        </div>
      </section>

      {/* MISSION FIELD */}
      <section
        id="mission-field"
        className="mx-auto max-w-7xl px-6 py-10 lg:px-8"
      >
        <div className="mb-7">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
            Mission Field
          </p>

          <h2 className="mt-2 text-3xl font-semibold">
            Where do you want to begin?
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          <MissionCard
            icon={<BookOpen className="h-7 w-7" />}
            title="Teach the Gospel"
            description="Use established, step-by-step Bible studies to lead someone through the gospel."
            href="#"
          />

          <MissionCard
            icon={<Users className="h-7 w-7" />}
            title="My Studies"
            description="Continue an active personal Bible study and keep track of where you left off."
            href="#"
          />

          <MissionCard
            icon={<GraduationCap className="h-7 w-7" />}
            title="Prepare to Teach"
            description="Learn the lesson before teaching it and review common questions and supporting passages."
            href="#"
          />

          <MissionCard
            icon={<Globe2 className="h-7 w-7" />}
            title="Mission Field"
            description="Resources for evangelism, mission work, congregational efforts, and overseas teaching."
            href="#"
          />

          <MissionCard
            icon={<Map className="h-7 w-7" />}
            title="Study Paths"
            description="Choose an established teaching path based on what the student needs to understand."
            href="#"
          />

          <MissionCard
            icon={<CircleDot className="h-7 w-7" />}
            title="Quick Gospel Study"
            description="Open a simple guided study designed for immediate one-on-one evangelism."
            href="#"
          />

        </div>
      </section>

      {/* BRL ECOSYSTEM */}
      <section className="border-t #8b6a2b bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">

          <div className="mb-7">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
              BRL Ecosystem
            </p>

            <h2 className="mt-2 text-3xl font-semibold">
              Go deeper when you need it.
            </h2>

            <p className="mt-3 max-w-3xl text-slate-400">
              Missions keeps the teaching simple while the full BRL ecosystem
              remains available behind the lesson.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">

            <EcosystemLink
              icon={<BookOpen className="h-6 w-6" />}
              title="Bible"
              description="Read the biblical text."
              href="/bible"
            />

            <EcosystemLink
              icon={<CircleDot className="h-6 w-6" />}
              title="Context Circle"
              description="Examine the context of a passage."
              href="/context-circle"
            />

            <EcosystemLink
              icon={<Library className="h-6 w-6" />}
              title="Research Library"
              description="Open deeper established research."
              href="/library"
            />

          </div>
        </div>
      </section>
    </main>
  );
}

function MissionCard({
  icon,
  title,
  description,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-slate-700 bg-slate-900/60 p-6 transition hover:border-amber-400/50 hover:bg-slate-900"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-amber-400/30 bg-amber-400/5 text-amber-300">
        {icon}
      </div>

      <h3 className="mt-5 text-xl font-semibold text-white">
        {title}
      </h3>

      <p className="mt-2 min-h-[72px] text-sm leading-6 text-slate-400">
        {description}
      </p>

      <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-amber-300">
        Open
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}

function EcosystemLink({
  icon,
  title,
  description,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-4 rounded-xl border border-slate-700 bg-slate-900/50 p-5 transition hover:border-amber-400/40 hover:bg-slate-900"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-amber-400/30 text-amber-300">
        {icon}
      </div>

      <div className="flex-1">
        <h3 className="font-semibold text-white">
          {title}
        </h3>

        <p className="mt-1 text-sm text-slate-400">
          {description}
        </p>
      </div>

      <ArrowRight className="h-4 w-4 text-amber-300 transition-transform group-hover:translate-x-1" />
    </Link>
  );
}