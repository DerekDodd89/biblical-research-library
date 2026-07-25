import Link from "next/link";
import { Search, User } from "lucide-react";
import BRLLogo from "@/components/branding/BRLLogo";
import { BRAND } from "@/constants/brand";

const navigationItems = [
  { label: "Home", href: BRAND.routes.home },
  { label: "Bible", href: BRAND.routes.bible },
  { label: "Research", href: BRAND.routes.library },
  { label: "Academy", href: BRAND.routes.academy },
  { label: "Church", href: BRAND.routes.churchCurriculum },
  { label: "Tools", href: BRAND.routes.tools },
] as const;

export default function SiteHeader() {
  return (
    <header className="border-b border-white/10 bg-[#061a31] text-white">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-6 px-5 py-3 lg:px-8">
        <BRLLogo variant="horizontal" size="medium" />

        <nav
          className="hidden items-center gap-7 text-sm font-medium lg:flex"
          aria-label="Primary navigation"
        >
          {navigationItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={index === 0 ? "nav-link nav-link-active" : "nav-link"}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 xl:flex">
          <label className="flex w-80 items-center gap-3 rounded-lg border border-white/10 bg-white/10 px-4 py-2.5">
            <Search className="h-4 w-4 text-slate-300" />

            <input
              className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-300"
              placeholder="Search Scripture, Topics, BRLs..."
              aria-label="Search Biblical Research Library"
            />
          </label>

          <Link
            href={BRAND.routes.login}
            className="flex items-center gap-2 rounded-lg border border-white/20 px-5 py-2.5 text-sm font-medium transition hover:bg-white/10"
          >
            <User className="h-4 w-4" />
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}