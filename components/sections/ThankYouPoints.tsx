import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import type { ThankYouPageData } from "@/types/templates.types";

export const ThankYouPoints = ({ data }: { data?: ThankYouPageData }) => {
  if (!data) return null;
  return (
    <ul className="mt-10 grid gap-y-7 rounded-[1rem] bg-[var(--color-bg-alt)] px-6 py-8 sm:grid-cols-2 xl:mt-[2rem] xl:grid-cols-4 xl:px-0 xl:py-[2.3125rem]">
      {data.points.map((p, i) => (
        <Reveal
          as="li"
          key={p.id}
          delay={i * 110}
          className={`group flex items-center gap-5 xl:gap-[1.4375rem] xl:pl-[2.0625rem] ${i > 0 ? "xl:border-l xl:border-[var(--color-primary-10)]" : ""}`}
        >
          <span className="grid size-[4.375rem] shrink-0 place-items-center rounded-full bg-[var(--color-bg-subtle)] text-[var(--color-primary)] transition-all duration-300 group-hover:scale-110 group-hover:bg-[var(--color-primary)] group-hover:text-[var(--color-white)] xl:size-[4.75rem]">
            <Icon name={p.icon} className="size-[2.375rem] xl:size-[2.75rem]" />
          </span>
          <span>
            <span className="block font-heading text-[1.03125rem] font-bold text-[var(--color-heading)] xl:text-[0.95rem]">{p.title}</span>
            <span className="mt-1 block text-[0.9375rem] leading-[1.40625rem] text-[var(--color-text)] xl:text-[0.91875rem]">
              {p.description.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </span>
          </span>
        </Reveal>
      ))}
    </ul>
  );
};
