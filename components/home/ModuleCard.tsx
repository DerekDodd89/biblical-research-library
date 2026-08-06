import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ModuleCardData = {
  title: string;
  description: string;
  href: string;
  action: string;
  icon: LucideIcon;
  accent: string;
  image: string;
};

type ModuleCardProps = {
  module: ModuleCardData;
};

export default function ModuleCard({ module }: ModuleCardProps) {
  const Icon = module.icon;

  return (
    <Link
      href={module.href}
      className="group relative flex h-[330px] overflow-hidden rounded-2xl border border-slate-700 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
        style={{
          backgroundImage: `url("${module.image}")`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/22" />

      {/* Top Fade */}
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/70 via-black/25 to-transparent" />

      {/* Bottom Fade */}
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex h-full w-full flex-col justify-between p-5">

        {/* TOP */}
        <div>

          <div className={`flex items-center gap-3 ${module.accent}`}>
            <Icon className="h-8 w-8 shrink-0" />

            <h2 className="font-serif text-[2rem] font-bold leading-none text-white">
              {module.title}
            </h2>
          </div>

        </div>

        {/* BOTTOM */}
        <div>

          <p className="mb-4 text-base font-medium text-white drop-shadow">
            {module.description}
          </p>

          <span
            className={`flex items-center gap-2 text-sm font-semibold ${module.accent}`}
          >
            {module.action}

            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>

        </div>

      </div>
    </Link>
  );
}