import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";

type Props = {
  url: string;
  title: string;
  description: string;
  lines?: string[];
  image: string;
  imageAlt: string;
  icon: string;
  buttonText: string;
  variant?: "home" | "grid";
};

export const PlanCard = ({ url, title, description, lines, image, imageAlt, icon, buttonText, variant = "grid" }: Props) => {
  const home = variant === "home";
  return (
    <Link
      href={url}
      className="group flex h-full flex-col overflow-hidden rounded-[0.75rem] bg-[var(--color-white)] shadow-[0_0.25rem_1.375rem_color-mix(in_srgb,var(--color-primary-dark)_8%,transparent)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_0.5rem_1.875rem_var(--color-shadow-strong)]"
    >
      <div className={`relative ${home ? "aspect-[292/199]" : "aspect-[288/130]"}`}>
        {/* Own clip box so the hover zoom does not spill past the photo while the badge still overhangs */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(min-width: 1280px) 300px, (min-width: 640px) 45vw, 90vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        <span
          className={`absolute bottom-0 z-10 grid place-items-center rounded-full bg-[var(--color-bg-subtle)] text-[var(--color-primary)] ring-[0.1875rem] ring-[var(--color-white)] transition-colors duration-300 group-hover:bg-[var(--color-primary)] group-hover:text-[var(--color-white)] size-[3.625rem] ${home ? "left-[1.25rem] translate-y-[55%]" : "left-[1.4375rem] translate-y-1/2"}`}
        >
          <Icon name={icon} className="size-[2rem] transition-transform duration-300 group-hover:scale-110" />
        </span>
      </div>
      <div className={`flex flex-1 flex-col ${home ? "px-[1.25rem] pt-[2.75rem] pb-[1.375rem]" : "px-[1.6875rem] pt-[1.625rem] pb-[0.625rem]"}`}>
        <h3 className={`font-heading font-bold text-[var(--color-heading)] ${home ? "text-[1.03125rem] leading-[1.5rem]" : "text-[1rem] leading-[1.5rem]"}`}>{title}</h3>
        <p
          className={`text-[var(--color-text)] ${home ? "mt-[0.1875rem] flex-1 text-[0.875rem] leading-[1.25rem]" : "mt-[0.25rem] font-heading text-[0.8875rem] leading-[1.125rem] font-medium"}`}
        >
          {lines
            ? lines.map((l) => (
                <span key={l} className={home ? "w1440:block" : "xl:block"}>
                  {l}{" "}
                </span>
              ))
            : description}
        </p>
        <span
          className={`inline-flex items-center gap-2.5 font-semibold text-[var(--color-primary)] ${home ? "mt-[0.875rem] text-[0.9375rem]" : "mt-[0.5rem] font-heading text-[0.88125rem] font-bold"}`}
        >
          {buttonText}
          <span className="grid size-[1.8125rem] place-items-center rounded-full bg-[var(--color-bg-subtle)] transition-colors group-hover:bg-[var(--color-primary)] group-hover:text-[var(--color-white)]">
            <Icon name="FaArrowRight" className="size-[0.9375rem] transition-transform duration-300 group-hover:translate-x-0.5" />
          </span>
        </span>
      </div>
    </Link>
  );
};
