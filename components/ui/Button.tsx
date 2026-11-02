import Link from "next/link";
import { Icon } from "@/components/ui/Icon";

type Props = {
  href: string;
  label: string;
  variant?: "primary" | "white" | "outline";
  className?: string;
};

const styles = {
  primary: "border-[var(--color-primary)] bg-[var(--color-primary)] text-[var(--color-white)] hover:bg-[var(--color-white)] hover:text-[var(--color-primary)]",
  white: "border-[var(--color-white)] bg-[var(--color-white)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-white)]",
  outline: "border-[var(--color-primary)] bg-[var(--color-white)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-white)]",
};

export const Button = ({ href, label, variant = "primary", className = "" }: Props) => {
  return (
    <Link
      href={href}
      className={`group inline-flex h-[2.875rem] items-center justify-center gap-3.5 rounded-full border-[0.09375rem] px-[1.875rem] text-[0.9375rem] font-medium whitespace-nowrap transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0.5rem_1.25rem_color-mix(in_srgb,var(--color-primary-dark)_22%,transparent)] ${styles[variant]} ${className}`}
    >
      {label}
      <Icon name="FaArrowRight" className="size-[1.125rem] transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
};
