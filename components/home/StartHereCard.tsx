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
    <aside className="start-here-panel">
      <div className="mb-2 flex items-center gap-2">
        <Star className="h-7 w-7 fill-current text-amber-400" />

        <h2 className="font-serif text-xl font-bold text-amber-400">
          START HERE
        </h2>
      </div>

      <p className="mb-3 text-sm leading-5 text-slate-100">
        New to BRL? Let us guide you to the right tools and learning path.
      </p>

      <Link
        href={BRAND.routes.startHere}
        className="mb-4 flex items-center justify-center gap-2 rounded-lg bg-amber-400 px-4 py-2.5 font-semibold text-slate-950 transition hover:bg-amber-300"
      >
        Get Started
        <ArrowRight className="h-4 w-4" />
      </Link>

      <div className="grid grid-cols-2 gap-x-3 gap-y-2 text-xs">
        {userPaths.map(({ label, icon: PathIcon }) => (
          <div key={label} className="flex items-center gap-2">
            <PathIcon className="h-3.5 w-3.5 text-amber-400" />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </aside>
  );
}