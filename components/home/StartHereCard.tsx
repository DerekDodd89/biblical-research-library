import Link from "next/link";
import {
  ArrowRight,
  Church,
  GraduationCap,
  Mic2,
  Search,
  Star,
  User,
} from "lucide-react";

import { BRAND } from "@/constants/brand";

const userPaths = [
  { label: "New Christian", icon: User },
  { label: "Parent", icon: User },
  { label: "Teacher", icon: GraduationCap },
  { label: "Leader", icon: Church },
  { label: "Preacher", icon: Mic2 },
  { label: "Researcher", icon: Search },
] as const;

export default function StartHereCard() {
  return (
    <aside className="rounded-xl border border-amber-400/80 bg-slate-950/55 p-3 shadow-lg backdrop-blur-sm">
      <div className="flex items-center gap-2">
        <Star className="h-5 w-5 fill-current text-amber-400" />

        <h2 className="font-serif text-lg font-bold text-amber-400">
          START HERE
        </h2>
      </div>

      <p className="mt-1 text-xs leading-4 text-slate-100">
        New to BRL? Find the right tools and learning path.
      </p>

      <Link
        href={BRAND.routes.startHere}
        className="mt-2 flex items-center justify-center gap-2 rounded-md bg-amber-400 px-3 py-2 text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
      >
        Get Started
        <ArrowRight className="h-4 w-4" />
      </Link>

      <div className="mt-2 grid grid-cols-2 gap-x-3 gap-y-1 text-[10px] leading-4 text-slate-100">
        {userPaths.map(({ label, icon: PathIcon }) => (
          <div key={label} className="flex items-center gap-1.5">
            <PathIcon className="h-3 w-3 shrink-0 text-amber-400" />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </aside>
  );
}