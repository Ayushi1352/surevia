import { Fragment } from "react";
import { CountUp } from "@/components/ui/CountUp";
import { Icon } from "@/components/ui/Icon";
import { Loop } from "@/components/ui/Loop";
import { Reveal } from "@/components/ui/Reveal";
import type { StatsData } from "@/types/templates.types";

export const Stats = ({ data }: { data?: StatsData }) => {
  if (!data) return null;
  return (
    <section className="relative overflow-hidden bg-[var(--color-primary-dark)]">
      <Loop effect="float">
        <span className="absolute -top-[9.375rem] -left-[6.875rem] size-[17.5rem] rounded-full bg-[var(--color-white-4)]" />
      </Loop>
      <Loop effect="float">
        <span className="absolute -right-[5rem] -bottom-[12.5rem] size-[23.75rem] rounded-full bg-[var(--color-white-4)]" />
      </Loop>
      {/* Equal columns so the last stat gets the same room as the others at every width */}
      <ul className="mx-auto w-full max-w-[90rem] px-5 sm:px-8 xl:px-[3.75rem] relative grid grid-cols-1 gap-y-8 py-10 sm:grid-cols-2 md:max-lg:max-w-[40rem] lg:grid-cols-4 lg:gap-x-3 xl:h-[10.4375rem] xl:grid-cols-[1fr_0.0625rem_1fr_0.0625rem_1fr_0.0625rem_1fr] xl:items-center xl:gap-x-0 xl:py-0">
        {data.items.map((stat, i) => (
          <Fragment key={stat.id}>
            {i > 0 && <li aria-hidden="true" className="hidden h-[5.125rem] w-px bg-[var(--color-white-30)] xl:block" />}
            <Reveal as="li" effect="zoom" delay={i * 120} className="group flex items-center gap-5 lg:gap-3 xl:justify-center xl:gap-[1.375rem]">
              <span className="relative grid size-[4.75rem] shrink-0 place-items-center rounded-full bg-[var(--color-primary)] text-[var(--color-white)] transition-colors duration-300 group-hover:bg-[var(--color-white)] group-hover:text-[var(--color-primary)] lg:size-[4rem] xl:size-[5rem]">
                <span className="absolute -inset-[0.3125rem] -rotate-45 animate-spin [animation-duration:9s] rounded-full border border-[var(--color-white-50)] border-r-transparent border-b-transparent" />
                <Icon name={stat.icon} className="size-[2.75rem] transition-transform duration-300 group-hover:scale-110 lg:size-[2.375rem] xl:size-[3rem]" />
              </span>
              <span className="text-[var(--color-white)]">
                <CountUp value={stat.value} className="block text-[2.375rem] leading-none font-bold whitespace-nowrap lg:text-[2rem] xl:text-[2.625rem]" />
                <span className="mt-1.5 block text-[1rem] whitespace-nowrap lg:text-[0.90625rem] xl:mt-[0.3125rem] xl:text-[1.03125rem]">{stat.label}</span>
              </span>
            </Reveal>
          </Fragment>
        ))}
      </ul>
    </section>
  );
};
