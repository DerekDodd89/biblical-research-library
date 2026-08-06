import Link from "next/link";
import BRLLogo from "@/components/branding/BRLLogo";
import { BRAND } from "@/constants/brand";

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-[#081D33] text-white">
      <div className="mx-auto flex h-20 max-w-[1500px] items-center justify-between px-6 lg:px-8">

        {/* Left */}
        <Link
          href={BRAND.routes.home}
          className="flex items-center gap-3"
        >
          <BRLLogo
            variant="mark"
            size="small"
            link={false}
          />

          <div className="leading-tight">
            <div className="font-serif text-lg font-bold">
              {BRAND.shortName}
            </div>

            <div className="text-[10px] uppercase tracking-[0.18em] text-amber-300">
              {BRAND.motto}
            </div>
          </div>
        </Link>

        {/* Center */}

        <div className="hidden text-sm text-slate-300 lg:block">
          © {currentYear} {BRAND.name}
        </div>

        {/* Right */}

        <div className="flex items-center gap-6 text-sm">

          <Link
            href={BRAND.routes.library}
            className="transition hover:text-amber-300"
          >
            Library
          </Link>

          <Link
            href={BRAND.routes.academy}
            className="transition hover:text-amber-300"
          >
            Academy
          </Link>

          <Link
            href={BRAND.routes.workspace}
            className="transition hover:text-amber-300"
          >
            Workspace
          </Link>

        </div>

      </div>
    </footer>
  );
}