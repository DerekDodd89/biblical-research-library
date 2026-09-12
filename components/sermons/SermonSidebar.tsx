"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Home,
  Search,
  FolderKanban,
  PencilLine,
  Download,
  Star,
  CircleHelp,
  Settings,
} from "lucide-react";

export default function SermonSidebar() {
  return (
    <aside className="flex h-full w-[240px] flex-col border-r border-[#8b6a2b]/30 bg-[#0B1526]">

      {/* BRL Header (Home Button) */}

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
          active
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
          href="/sermons/builder"
          icon={<PencilLine size={18} />}
        >
          Build a Sermon
        </SidebarItem>

        <SidebarItem
          href="/sermons/import"
          icon={<Download size={18} />}
        >
          Import Sermons
        </SidebarItem>

        <SidebarItem
          href="/sermons/favorites"
          icon={<Star size={18} />}
        >
          My Favorites
        </SidebarItem>

      </nav>

      {/* Footer */}

      <div className="border-t border-[#8b6a2b]/30 px-4 py-5 space-y-1">

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
  );
}

function SidebarItem({
  href,
  icon,
  children,
  active = false,
}: {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 rounded-xl px-4 py-3 text-[15px] transition ${
        active
          ? "bg-[#7c6122]/35 text-amber-300"
          : "text-neutral-300 hover:bg-white/5 hover:text-white"
      }`}
    >
      {icon}
      <span>{children}</span>
    </Link>
  );
}