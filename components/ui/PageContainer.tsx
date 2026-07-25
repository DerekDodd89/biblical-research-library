import type { ReactNode } from "react";

type PageContainerProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "main";
};

export default function PageContainer({
  children,
  className = "",
  as: Component = "div",
}: PageContainerProps) {
  return (
    <Component
      className={`mx-auto w-full max-w-[1500px] px-5 lg:px-8 ${className}`}
    >
      {children}
    </Component>
  );
}