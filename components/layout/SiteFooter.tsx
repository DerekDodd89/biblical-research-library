import Link from "next/link";
import { BookOpen, Mail } from "lucide-react";
import BRLLogo from "@/components/branding/BRLLogo";
import { BRAND } from "@/constants/brand";

const footerLinks = [
  { label: "Bible", href: BRAND.routes.bible },
  { label: "Context Circle", href: BRAND.routes.contextCircle },
  { label: "Research Library", href: BRAND.routes.library },
  { label: "Academy", href: BRAND.routes.academy },
  { label: "Church Curriculum", href: BRAND.routes.churchCurriculum },
  { label: "Doctrine Explorer", href: BRAND.routes.doctrine },
];

const resourceLinks = [
  { label: "Bible Atlas", href: BRAND.routes.atlas },
  { label: "Sermons & Outlines", href: BRAND.routes.sermons },
  { label: "My Workspace", href: BRAND.routes.workspace },
  { label: "Tools & Resources", href: BRAND.routes.tools },
  { label: "Start Here", href: BRAND.routes.startHere },
];

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-[1500px] gap-10 px-5 py-10 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <Link
            href={BRAND.routes.home}
            className="inline-flex items-center gap-3"
            aria-label={`${BRAND.name} home`}
          >
            <BRLLogo
              variant="mark"
              size="medium"
              link={false}
            />

            <div>
              <p className="font-serif text-xl font-bold text-white">
                {BRAND.name}
              </p>

              <p className="text-xs uppercase tracking-[0.16em] text-amber-300">
                {BRAND.motto}
              </p>
            </div>
          </Link>

          <p className="mt-5 max-w-xl text-sm leading-6 text-slate-400">
            A connected platform for reading Scripture, conducting contextual
            research, developing biblical studies, preparing teaching
            materials, and organizing lifelong learning.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href={BRAND.routes.bible}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2 text-sm font-semibold text-white transition hover:border-amber-300 hover:text-amber-300"
            >
              <BookOpen className="h-4 w-4" />
              Open Bible
            </Link>

            <a
              href="mailto:contact@biblicalresearchlibrary.com"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2 text-sm font-semibold text-white transition hover:border-amber-300 hover:text-amber-300"
            >
              <Mail className="h-4 w-4" />
              Contact
            </a>
          </div>
        </div>

        <div>
          <h2 className="font-serif text-lg font-bold text-white">
            BRL Modules
          </h2>

          <nav className="mt-4 flex flex-col gap-3 text-sm">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="transition hover:text-amber-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="font-serif text-lg font-bold text-white">
            Resources
          </h2>

          <nav className="mt-4 flex flex-col gap-3 text-sm">
            {resourceLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="transition hover:text-amber-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-2 px-5 py-4 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>
            © {currentYear} {BRAND.name}. All rights reserved.
          </p>

          <p>Study carefully. Handle the word of truth accurately.</p>
        </div>
      </div>
    </footer>
  );
}