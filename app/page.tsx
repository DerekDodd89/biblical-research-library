import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  Church,
  CircleDot,
  Compass,
  GraduationCap,
  Library,
  Map,
  Mic2,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  User,
  Users,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type ModuleCard = {
  title: string;
  description: string;
  href: string;
  action: string;
  icon: LucideIcon;
  accent: string;
};

const modules: ModuleCard[] = [
  {
    title: "Bible",
    description:
      "Read Scripture and study with translations, cross-references, word tools, and contextual resources.",
    href: "/bible",
    action: "Open Bible",
    icon: BookOpen,
    accent: "text-blue-700",
  },
  {
    title: "Context Circle",
    description:
      "Work through Direct, Remote, and Total Context using BRL's signature guided study system.",
    href: "/context-circle",
    action: "Open Context Circle",
    icon: CircleDot,
    accent: "text-teal-700",
  },
  {
    title: "Research Library",
    description:
      "Explore BRLs, articles, outlines, historical studies, research archives, and reference material.",
    href: "/library",
    action: "Browse Library",
    icon: Library,
    accent: "text-violet-800",
  },
  {
    title: "Academy",
    description:
      "Follow courses, certifications, guided learning paths, assignments, and structured Bible studies.",
    href: "/academy",
    action: "Go to Academy",
    icon: GraduationCap,
    accent: "text-blue-800",
  },
  {
    title: "Church Curriculum",
    description:
      "Biblical curriculum for congregations, teachers, families, ministries, and every stage of growth.",
    href: "/church-curriculum",
    action: "View Curriculum",
    icon: Users,
    accent: "text-green-800",
  },
  {
    title: "Doctrine Explorer",
    description:
      "Study major biblical subjects through Scripture, context, hermeneutics, and organized BRL research.",
    href: "/doctrine",
    action: "Explore Doctrine",
    icon: Compass,
    accent: "text-amber-800",
  },
  {
    title: "Bible Atlas",
    description:
      "Explore maps, journeys, places, nations, timelines, and the historical setting of Scripture.",
    href: "/atlas",
    action: "Open Atlas",
    icon: Map,
    accent: "text-blue-700",
  },
  {
    title: "Sermons & Outlines",
    description:
      "Access sermons, class outlines, teaching resources, presentations, and preaching material.",
    href: "/sermons",
    action: "Browse Messages",
    icon: Mic2,
    accent: "text-purple-800",
  },
  {
    title: "My Workspace",
    description:
      "Save studies, organize notes, create collections, track progress, and manage personal research.",
    href: "/workspace",
    action: "Go to Workspace",
    icon: BriefcaseBusiness,
    accent: "text-purple-800",
  },
  {
    title: "Tools & Resources",
    description:
      "Access word studies, concordances, timelines, commentaries, worksheets, and supporting tools.",
    href: "/tools",
    action: "Explore Tools",
    icon: Wrench,
    accent: "text-orange-700",
  },
];

const userPaths = [
  { label: "New Christian", icon: User },
  { label: "Parent", icon: User },
  { label: "Teacher", icon: GraduationCap },
  { label: "Leader", icon: Church },
  { label: "Preacher", icon: Mic2 },
  { label: "Researcher", icon: Search },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <header className="border-b border-white/10 bg-[#061a31] text-white">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-6 px-5 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/30">
              <BookOpen className="h-7 w-7" />
            </div>

            <div>
              <div className="font-serif text-3xl font-bold leading-none">
                BRL
              </div>
              <div className="text-xs font-medium tracking-wide text-slate-300">
                BIBLICAL RESEARCH LIBRARY
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-medium lg:flex">
            <Link className="nav-link nav-link-active" href="/">
              Home
            </Link>
            <Link className="nav-link" href="/bible">
              Bible
            </Link>
            <Link className="nav-link" href="/library">
              Research
            </Link>
            <Link className="nav-link" href="/academy">
              Academy
            </Link>
            <Link className="nav-link" href="/church-curriculum">
              Church
            </Link>
            <Link className="nav-link" href="/tools">
              Tools
            </Link>
          </nav>

          <div className="hidden items-center gap-4 xl:flex">
            <label className="flex w-80 items-center gap-3 rounded-lg border border-white/10 bg-white/10 px-4 py-2.5">
              <Search className="h-4 w-4 text-slate-300" />
              <input
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-300"
                placeholder="Search Scripture, Topics, BRLs..."
                aria-label="Search BRL"
              />
            </label>

            <Link
              href="/login"
              className="flex items-center gap-2 rounded-lg border border-white/20 px-5 py-2.5 text-sm font-medium hover:bg-white/10"
            >
              <User className="h-4 w-4" />
              Login
            </Link>
          </div>
        </div>
      </header>

      <section className="hero-background text-white">
        <div className="mx-auto grid max-w-[1500px] gap-8 px-5 py-8 lg:grid-cols-[275px_1fr] lg:px-8">
          <aside className="start-here-panel">
            <div className="mb-3 flex items-center gap-3">
              <Star className="h-8 w-8 fill-current text-amber-400" />
              <h2 className="font-serif text-2xl font-bold text-amber-400">
                START HERE
              </h2>
            </div>

            <p className="mb-4 text-sm leading-6 text-slate-100">
              New to BRL? Let us guide you to the right tools and learning path
              for your needs.
            </p>

            <Link
              href="/start-here"
              className="mb-5 flex items-center justify-center gap-2 rounded-lg bg-amber-400 px-4 py-3 font-semibold text-slate-950 transition hover:bg-amber-300"
            >
              Get Started
              <ArrowRight className="h-5 w-5" />
            </Link>

            <div className="grid grid-cols-2 gap-x-3 gap-y-3 text-xs">
              {userPaths.map(({ label, icon: PathIcon }) => (
                <div key={label} className="flex items-center gap-2">
                  <PathIcon className="h-4 w-4 text-amber-400" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </aside>

          <div className="grid items-center gap-8 xl:grid-cols-[1fr_280px]">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">
                One Platform. Many Biblical Study Tools.
              </p>

              <h1 className="max-w-4xl font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Searching God&apos;s Word
              </h1>

              <p className="mt-2 font-serif text-2xl text-amber-300 sm:text-3xl">
                Through Context. For the Church. For His Glory.
              </p>

              <div className="mt-7 flex max-w-4xl overflow-hidden rounded-lg bg-white shadow-xl">
                <div className="flex flex-1 items-center gap-3 px-4">
                  <Search className="h-5 w-5 text-slate-500" />
                  <input
                    className="w-full py-4 text-slate-950 outline-none placeholder:text-slate-500"
                    placeholder="Search Scripture, Topics, People, Places, or BRLs..."
                    aria-label="Search Scripture, topics, people, places, or BRLs"
                  />
                </div>

                <select
                  className="hidden border-l border-slate-200 bg-white px-5 text-slate-800 outline-none sm:block"
                  aria-label="Search category"
                  defaultValue="all"
                >
                  <option value="all">All</option>
                  <option value="scripture">Scripture</option>
                  <option value="brls">BRLs</option>
                  <option value="topics">Topics</option>
                </select>

                <button
                  type="button"
                  className="bg-blue-700 px-6 font-semibold text-white transition hover:bg-blue-600"
                >
                  Search
                </button>
              </div>

              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-200">
                <span className="font-semibold text-white">Quick Links:</span>
                <Link href="/bible">John 3:16</Link>
                <Link href="/bible">Romans 8:28</Link>
                <Link href="/bible">Ephesians 2:8-9</Link>
                <Link href="/doctrine">Faith</Link>
                <Link href="/doctrine">Grace</Link>
                <Link href="/doctrine">Baptism</Link>
                <Link href="/church-curriculum">Church</Link>
              </div>
            </div>

            <blockquote className="rounded-xl border border-white/20 bg-slate-950/65 p-6 backdrop-blur-sm">
              <Sparkles className="mb-3 h-6 w-6 text-amber-300" />

              <p className="text-sm leading-7 text-slate-100">
                “All Scripture is breathed out by God and profitable for
                teaching, for reproof, for correction, and for training in
                righteousness.”
              </p>

              <footer className="mt-4 font-semibold text-amber-300">
                2 Timothy 3:16-17
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-5 py-7 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {modules.map((module) => {
            const Icon = module.icon;

            return (
              <Link
                href={module.href}
                key={module.title}
                className="module-card group"
              >
                <div className={`mb-4 flex items-center gap-3 ${module.accent}`}>
                  <Icon className="h-8 w-8" />
                  <h2 className="font-serif text-xl font-bold">
                    {module.title}
                  </h2>
                </div>

                <p className="mb-5 text-sm leading-6 text-slate-700">
                  {module.description}
                </p>

                <span className={`mt-auto flex items-center gap-2 text-sm font-semibold ${module.accent}`}>
                  {module.action}
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mx-auto grid max-w-[1500px] gap-4 px-5 pb-7 lg:grid-cols-4 lg:px-8">
        <article className="information-panel">
          <div className="panel-heading">
            <BookOpen className="h-5 w-5" />
            <h2>Featured BRL</h2>
          </div>

          <div className="rounded-lg bg-amber-50 p-4">
            <div className="text-xs font-semibold text-amber-800">
              BRL 110.001
            </div>
            <h3 className="mt-1 font-serif text-lg font-bold">
              Divine Authority
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              A foundational study of biblical authority, inspiration,
              sufficiency, and the revealed will of God.
            </p>
          </div>

          <Link href="/library" className="panel-link">
            Read now <ArrowRight className="h-4 w-4" />
          </Link>
        </article>

        <article className="information-panel">
          <div className="panel-heading">
            <CircleDot className="h-5 w-5" />
            <h2>Continue Reading</h2>
          </div>

          <div className="space-y-4 text-sm">
            <ProgressItem title="The Godhead" code="BRL 210.002" value={50} />
            <ProgressItem
              title="Baptism in the New Testament"
              code="BRL 410.003"
              value={75}
            />
            <ProgressItem
              title="God Established Worship"
              code="BRL 420.001"
              value={30}
            />
          </div>
        </article>

        <article className="information-panel">
          <div className="panel-heading">
            <Sparkles className="h-5 w-5" />
            <h2>Latest Studies</h2>
          </div>

          <div className="divide-y divide-slate-100 text-sm">
            <StudyItem title="Fellowship Halls" code="BRL 420.002" />
            <StudyItem title="God's Money" code="BRL 420.003" />
            <StudyItem title="Divine Authority" code="BRL 110.001" />
          </div>

          <Link href="/library" className="panel-link">
            View all studies <ArrowRight className="h-4 w-4" />
          </Link>
        </article>

        <article className="information-panel text-center">
          <div className="panel-heading justify-center">
            <Church className="h-5 w-5" />
            <h2>Today&apos;s Verse</h2>
          </div>

          <p className="mt-7 font-serif text-xl italic leading-8">
            “Your word is a lamp to my feet and a light to my path.”
          </p>

          <p className="mt-4 font-semibold text-blue-700">Psalm 119:105</p>

          <Link
            href="/bible"
            className="mt-6 inline-flex rounded-lg border border-slate-300 px-5 py-2 text-sm font-semibold hover:bg-slate-50"
          >
            Read in Context
          </Link>
        </article>
      </section>

      <footer className="bg-[#061a31] text-white">
        <div className="mx-auto grid max-w-[1500px] gap-5 px-5 py-6 text-center text-sm sm:grid-cols-2 lg:grid-cols-5 lg:px-8">
          <FooterValue icon={ShieldCheck} text="100% Bible Based" />
          <FooterValue icon={Compass} text="Sound Hermeneutics" />
          <FooterValue icon={Church} text="For the Church" />
          <FooterValue icon={Users} text="Available to All" />
          <FooterValue icon={Sparkles} text="Glory to God Alone" />
        </div>
      </footer>
    </main>
  );
}

function ProgressItem({
  title,
  code,
  value,
}: {
  title: string;
  code: string;
  value: number;
}) {
  return (
    <div>
      <div className="flex justify-between gap-3">
        <div>
          <div className="font-semibold">{title}</div>
          <div className="text-xs text-slate-500">{code}</div>
        </div>
        <div className="text-xs font-semibold text-slate-600">{value}%</div>
      </div>

      <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-blue-700"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

function StudyItem({ title, code }: { title: string; code: string }) {
  return (
    <div className="py-3">
      <div className="font-semibold">{title}</div>
      <div className="text-xs text-slate-500">{code}</div>
    </div>
  );
}

function FooterValue({
  icon: Icon,
  text,
}: {
  icon: LucideIcon;
  text: string;
}) {
  return (
    <div className="flex items-center justify-center gap-3">
      <Icon className="h-5 w-5 text-amber-300" />
      <span>{text}</span>
    </div>
  );
}