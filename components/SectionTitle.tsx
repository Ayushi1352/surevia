import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  children: ReactNode;
  text?: string;
  size?: "lg" | "md" | "sm";
  className?: string;
};

const sizes = {
  lg: "text-[30px] leading-[1.15] sm:text-[38px] lg:text-[34px] xl:text-[46px] xl:leading-[50px]",
  md: "text-[28px] leading-[1.18] sm:text-[34px] xl:text-[38px] xl:leading-[44px]",
  sm: "text-[24px] leading-[1.2] sm:text-[28px] xl:text-[30px] xl:leading-[38px]",
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
      className={`flex items-center gap-4 font-heading text-[15px] font-medium xl:text-[17px] ${light ? "text-white" : "text-primary"} ${className}`}
    >
      <span className={`h-[2px] w-9 shrink-0 ${light ? "bg-white" : "bg-primary"}`} />
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
      {text && <p className="mt-3 font-heading text-[15px] leading-[1.6] font-medium text-body xl:text-[16px]">{text}</p>}
    </div>
  );
}
