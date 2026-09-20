"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Home,
  Search,
  FolderKanban,
  Star,
  CircleHelp,
  Settings,
  Menu,
  X,
} from "lucide-react";

export default function SermonSidebar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* =========================================================
          DESKTOP SIDEBAR
          ========================================================= */}

      <aside className="hidden h-full w-[240px] shrink-0 flex-col border-r border-[#8b6a2b]/30 bg-[#0B1526] lg:flex">
        {/* BRL Header / Home Button */}

        <Link
          href="/"
          className="block border-b border-[#8b6a2b]/30 transition hover:bg-white/5"
        >
          <div className="flex items-start gap-3 px-5 py-5">
            <Image
              src="/images/branding/brl-shield-color.png"
              alt="BRL"
              width={58}
              height={58}
              className="shrink-0"
            />

            <div>
              <h2 className="text-[13px] font-bold leading-tight tracking-wide text-white">
                BIBLICAL
              </h2>

              <h2 className="text-[13px] font-bold leading-tight tracking-wide text-white">
                RESEARCH LIBRARY
              </h2>

              <div className="mt-3 text-lg font-semibold text-amber-300">
                Sermons &amp; Outlines
              </div>
            </div>
          </div>
        </Link>

        {/* Navigation */}

        <nav className="flex-1 space-y-1 px-4 py-5">
          <SidebarItem href="/" icon={<Home size={18} />}>
            Home
          </SidebarItem>

          <SidebarItem
            href="/sermons"
            icon={<Search size={18} />}
          >
            Search Sermons
          </SidebarItem>

          <SidebarItem
            href="/sermons/series"
            icon={<FolderKanban size={18} />}
          >
            Sermon Series
          </SidebarItem>

          <SidebarItem
            href="/sermons/favorites"
            icon={<Star size={18} />}
          >
            My Favorites
          </SidebarItem>
        </nav>

        {/* Footer */}

        <div className="space-y-1 border-t border-[#8b6a2b]/30 px-4 py-5">
          <SidebarItem
            href="/help"
            icon={<CircleHelp size={18} />}
          >
            Help
          </SidebarItem>

          <SidebarItem
            href="/settings"
            icon={<Settings size={18} />}
          >
            Settings
          </SidebarItem>
        </div>

        {/* Engine Card */}

        <div className="border-t border-[#8b6a2b]/30 p-4">
          <div className="rounded-xl border border-[#8b6a2b]/40 bg-[#101b2d] p-4">
            <div className="text-sm font-semibold text-amber-300">
              BRL Sermon Engine
            </div>

            <div className="mt-1 text-sm text-neutral-300">
              Canonical Document Mode
            </div>

            <div className="mt-2 text-right text-xs text-neutral-500">
              v1.0
            </div>
          </div>
        </div>
      </aside>

      {/* =========================================================
          MOBILE HEADER
          ========================================================= */}

      <div className="border-b border-[#8b6a2b]/30 bg-[#0B1526] lg:hidden">
        <div className="flex items-center justify-between px-4 py-3">
          {/* BRL / Home */}

          <Link
            href="/"
            className="flex min-w-0 items-center gap-3"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Image
              src="/images/branding/brl-shield-color.png"
              alt="BRL"
              width={46}
              height={46}
              className="shrink-0"
            />

            <div className="min-w-0">
              <div className="text-[11px] font-bold leading-tight tracking-wide text-white">
                BIBLICAL RESEARCH LIBRARY
              </div>

              <div className="mt-1 text-sm font-semibold text-amber-300">
                Sermons &amp; Outlines
              </div>
            </div>
          </Link>

          {/* Menu Button */}

          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="ml-3 flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#8b6a2b]/40 bg-[#101b2d] text-amber-300 transition hover:bg-[#17243a]"
            aria-label={
              mobileMenuOpen
                ? "Close sermon navigation"
                : "Open sermon navigation"
            }
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}

        {mobileMenuOpen && (
          <div className="border-t border-[#8b6a2b]/30 bg-[#091321] px-3 py-3">
            <nav className="space-y-1">
              <MobileSidebarItem
                href="/"
                icon={<Home size={19} />}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </MobileSidebarItem>

              <MobileSidebarItem
                href="/sermons"
                icon={<Search size={19} />}
                onClick={() => setMobileMenuOpen(false)}
              >
                Search Sermons
              </MobileSidebarItem>

              <MobileSidebarItem
                href="/sermons/series"
                icon={<FolderKanban size={19} />}
                onClick={() => setMobileMenuOpen(false)}
              >
                Sermon Series
              </MobileSidebarItem>

              <MobileSidebarItem
                href="/sermons/favorites"
                icon={<Star size={19} />}
                onClick={() => setMobileMenuOpen(false)}
              >
                My Favorites
              </MobileSidebarItem>

              <div className="my-2 border-t border-[#8b6a2b]/30" />

              <MobileSidebarItem
                href="/help"
                icon={<CircleHelp size={19} />}
                onClick={() => setMobileMenuOpen(false)}
              >
                Help
              </MobileSidebarItem>

              <MobileSidebarItem
                href="/settings"
                icon={<Settings size={19} />}
                onClick={() => setMobileMenuOpen(false)}
              >
                Settings
              </MobileSidebarItem>
            </nav>
          </div>
        )}
      </div>
    </>
  );
}

function SidebarItem({
  href,
  icon,
  children,
}: {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 rounded-xl px-4 py-3 text-[15px] text-neutral-300 transition hover:bg-white/5 hover:text-white"
    >
      {icon}
      <span>{children}</span>
    </Link>
  );
}

function MobileSidebarItem({
  href,
  icon,
  children,
  onClick,
}: {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="flex min-h-[48px] items-center gap-3 rounded-xl px-4 py-3 text-base text-neutral-200 transition hover:bg-white/5 hover:text-white"
    >
      <span className="text-amber-300">
        {icon}
      </span>

      <span>{children}</span>
    </Link>
  );
}