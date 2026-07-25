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
};

type ModuleCardProps = {
  module: ModuleCardData;
};

export default function ModuleCard({ module }: ModuleCardProps) {
  const Icon = module.icon;

  return (
    <Link href={module.href} className="module-card group">
      <div className={`mb-4 flex items-center gap-3 ${module.accent}`}>
        <Icon className="h-8 w-8" />

        <h2 className="font-serif text-xl font-bold">
          {module.title}
        </h2>
      </div>

      <p className="mb-5 text-sm leading-6 text-slate-700">
        {module.description}
      </p>

      <span
        className={`mt-auto flex items-center gap-2 text-sm font-semibold ${module.accent}`}
      >
        {module.action}

        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </span>
    </Link>
  );
}