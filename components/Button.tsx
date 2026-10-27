import Link from "next/link";
import Icon from "./Icon";

type Props = {
  href: string;
  label: string;
  variant?: "primary" | "white" | "outline";
  className?: string;
};

const styles = {
  primary: "border-primary bg-primary text-white hover:bg-white hover:text-primary",
  white: "border-white bg-white text-primary hover:bg-primary hover:text-white",
  outline: "border-primary bg-white text-primary hover:bg-primary hover:text-white",
};

export default function Button({ href, label, variant = "primary", className = "" }: Props) {
  return (
    <Link
      href={href}
      className={`group inline-flex h-[2.875rem] items-center justify-center gap-3.5 rounded-full border-[0.09375rem] px-[1.875rem] text-[0.9375rem] font-medium whitespace-nowrap transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0.5rem_1.25rem_color-mix(in_srgb,var(--color-plum)_22%,transparent)] ${styles[variant]} ${className}`}
    >
      {label}
      <Icon name="arrow-right" className="size-[1.125rem] transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} />
    </Link>
  );
}
