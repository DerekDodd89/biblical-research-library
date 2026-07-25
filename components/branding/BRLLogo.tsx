import Link from "next/link";
import { BookOpen } from "lucide-react";
import { BRAND } from "@/constants/brand";

type LogoVariant = "horizontal" | "stacked" | "mark";

type LogoSize = "small" | "medium" | "large";

type BRLLogoProps = {
  variant?: LogoVariant;
  size?: LogoSize;
  href?: string;
  link?: boolean;
  className?: string;
};

const sizeStyles: Record<
  LogoSize,
  {
    mark: string;
    icon: string;
    shortName: string;
    fullName: string;
    gap: string;
  }
> = {
  small: {
    mark: "h-10 w-10",
    icon: "h-6 w-6",
    shortName: "text-2xl",
    fullName: "text-[10px]",
    gap: "gap-2",
  },

  medium: {
    mark: "h-12 w-12",
    icon: "h-7 w-7",
    shortName: "text-3xl",
    fullName: "text-xs",
    gap: "gap-3",
  },

  large: {
    mark: "h-16 w-16",
    icon: "h-9 w-9",
    shortName: "text-4xl",
    fullName: "text-sm",
    gap: "gap-4",
  },
};

export default function BRLLogo({
  variant = "horizontal",
  size = "medium",
  href = BRAND.routes.home,
  link = true,
  className = "",
}: BRLLogoProps) {
  const styles = sizeStyles[size];

  const logo = (
    <div
      className={`inline-flex items-center text-white ${styles.gap} ${className}`}
      aria-label={BRAND.name}
    >
      <LogoMark
        markClassName={styles.mark}
        iconClassName={styles.icon}
      />

      {variant !== "mark" && (
        <div
          className={
            variant === "stacked"
              ? "flex flex-col items-center text-center"
              : "flex flex-col"
          }
        >
          <span
            className={`font-serif font-bold leading-none ${styles.shortName}`}
          >
            {BRAND.shortName}
          </span>

          <span
            className={`mt-1 font-medium uppercase tracking-wide text-slate-300 ${styles.fullName}`}
          >
            {BRAND.name}
          </span>
        </div>
      )}
    </div>
  );

  if (!link) {
    return logo;
  }

  return (
    <Link
      href={href}
      aria-label={`${BRAND.name} home`}
      className="inline-flex"
    >
      {logo}
    </Link>
  );
}

type LogoMarkProps = {
  markClassName: string;
  iconClassName: string;
};

function LogoMark({
  markClassName,
  iconClassName,
}: LogoMarkProps) {
  return (
    <span
      className={`relative flex shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/35 bg-white/5 ${markClassName}`}
      aria-hidden="true"
    >
      <span className="absolute h-[82%] w-[82%] rounded-full border border-amber-400/35" />
      <span className="absolute h-[62%] w-[62%] rounded-full border border-amber-400/30" />
      <span className="absolute h-[42%] w-[42%] rounded-full border border-amber-400/25" />

      <BookOpen
        className={`relative z-10 text-white ${iconClassName}`}
        strokeWidth={1.8}
      />
    </span>
  );
}