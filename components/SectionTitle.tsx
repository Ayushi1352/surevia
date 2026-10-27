import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  children: ReactNode;
  text?: string;
  size?: "lg" | "md" | "sm";
  className?: string;
};

const sizes = {
  lg: "text-[1.875rem] leading-[1.15] sm:text-[2.375rem] lg:text-[2.125rem] xl:text-[2.875rem] xl:leading-[3.125rem]",
  md: "text-[1.75rem] leading-[1.18] sm:text-[2.125rem] xl:text-[2.375rem] xl:leading-[2.75rem]",
  sm: "text-[1.5rem] leading-[1.2] sm:text-[1.75rem] xl:text-[1.875rem] xl:leading-[2.375rem]",
};

export function Eyebrow({
  children,
  light = false,
  className = "",
}: {
  children: ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <p
      className={`flex items-center gap-4 font-heading text-[0.9375rem] font-medium xl:text-[1.0625rem] ${light ? "text-white" : "text-primary"} ${className}`}
    >
      <span className={`h-[0.125rem] w-9 shrink-0 ${light ? "bg-white" : "bg-primary"}`} />
      {children}
    </p>
  );
}

export function Accent({ children }: { children: ReactNode }) {
  return <span className="text-primary">{children}</span>;
}

export default function SectionTitle({ eyebrow, children, text, size = "md", className = "" }: Props) {
  return (
    <div className={className}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className={`mt-3 font-heading font-extrabold tracking-[-0.01em] text-ink ${sizes[size]}`}>{children}</h2>
      {text && <p className="mt-3 font-heading text-[0.9375rem] leading-[1.6] font-medium text-body xl:text-[1rem]">{text}</p>}
    </div>
  );
}
