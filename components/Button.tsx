import Link from "next/link";
import Icon from "./Icon";

type Props = {
  href: string;
  label: string;
  variant?: "primary" | "white" | "outline";
  className?: string;
};

const styles = {
  primary: "bg-primary text-white hover:bg-primary-dark",
  white: "bg-white text-primary hover:bg-rose",
  outline: "border-[1.5px] border-primary bg-white text-primary hover:bg-rose",
};

export default function Button({ href, label, variant = "primary", className = "" }: Props) {
  return (
    <Link
      href={href}
      className={`inline-flex h-[46px] items-center justify-center gap-3.5 rounded-full px-[30px] text-[15px] font-medium whitespace-nowrap transition-colors ${styles[variant]} ${className}`}
    >
      {label}
      <Icon name="arrow-right" className="size-[18px]" strokeWidth={2} />
    </Link>
  );
}
