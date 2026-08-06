import Link from "next/link";
import { User } from "lucide-react";

import BRLLogo from "@/components/branding/BRLLogo";

export default function SiteHeader() {
  return (
    <header className="border-b border-white/10 bg-[#061a31] text-white">
      <div className="flex w-full items-center justify-between px-5 py-3">
        <BRLLogo
          link={true}
          size="medium"
          variant="horizontal"
        />

        <Link
          href="/login"
          className="flex items-center gap-2 rounded-lg border border-white/20 px-4 py-2 text-sm font-medium transition hover:bg-white/10"
        >
          <User className="h-4 w-4" />
          Login
        </Link>
      </div>
    </header>
  );
}