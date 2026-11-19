import { Fragment } from "react";
import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle, Accent } from "@/components/ui/SectionTitle";
import { lines } from "@/components/ui/text";
import type { WhyChooseUsProps } from "@/types/templates.types";

export const WhyChooseUs = ({ data: why }: WhyChooseUsProps) => {
  if (!why) return null;
  return (
    <section data-section-pad className="mx-auto grid w-full max-w-[90rem] items-start gap-10 py-12 sm:py-14 xl:py-16 [[data-section-pad]+&]:pt-0 lg:grid-cols-[22.5rem_1fr] lg:gap-8 lg:max-xl:items-stretch xl:grid-cols-[32.25rem_1fr] xl:gap-[2.25rem]">
      <Reveal effect="left" className="group relative mx-5 aspect-[604/841] max-h-[35rem] overflow-hidden rounded-[0.75rem] sm:mx-8 md:max-lg:mx-auto md:max-lg:max-h-none md:max-lg:w-full md:max-lg:max-w-[30rem] lg:mx-0 lg:max-h-none lg:max-xl:aspect-auto lg:max-xl:rounded-l-none xl:rounded-none">
        <Image
          src={why.image}
          alt={why.imageAlt}
          fill
          sizes="(min-width: 1280px) 516px, (min-width: 1024px) 360px, 100vw"
          className="object-cover object-top transition-transform duration-1000 group-hover:scale-105"
        />
      </Reveal>

      <Reveal effect="right" className="px-5 sm:px-8 lg:pl-0 xl:px-0 xl:pt-[3.0625rem] xl:pr-[1.25rem]">
        <SectionTitle eyebrow={why.eyebrow} text={why.description} className="max-w-[40rem]">
          {lines(why.title).map((line, i) => (
            <Fragment key={i}>
              {i > 0 && <br className="hidden sm:block" />}
              {line}{" "}
            </Fragment>
          ))}
          <Accent>{why.titleHighlight}</Accent>
        </SectionTitle>

        <ul className="mt-6 grid gap-x-[1.1875rem] gap-y-[1.0625rem] sm:grid-cols-2 xl:mt-[1.875rem] xl:grid-cols-3">
          {why.items.map((item) => (
            <li key={item.id} className="group rounded-[0.75rem] bg-[var(--color-white)] px-[1rem] pt-[0.8125rem] pb-[1.0625rem] shadow-[0_0.25rem_1.375rem_color-mix(in_srgb,var(--color-primary-dark)_8%,transparent)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0.5rem_1.875rem_var(--color-shadow-strong)]">
              <div className="flex items-center gap-[0.875rem]">
                <span className="grid size-[3.9375rem] shrink-0 place-items-center rounded-full bg-[var(--color-bg-subtle)] text-[var(--color-primary)] transition-all duration-300 group-hover:scale-110 group-hover:bg-[var(--color-primary)] group-hover:text-[var(--color-white)]">
                  <Icon name={item.icon} className="size-[2.1875rem]" />
                </span>
                <h3 className="font-sans text-[1.03125rem] leading-[1.5rem] font-semibold text-[var(--color-heading)] transition-colors duration-300 group-hover:text-[var(--color-primary)]">
                  {lines(item.title).map((line, i) => (
                    <span key={i} className="block">
                      {line}
                    </span>
                  ))}
                </h3>
              </div>
              <p className="mt-[0.375rem] pl-px text-[0.91875rem] leading-[1.3125rem] text-[var(--color-text)]">
                {lines(item.description).map((line, i) => (
                  <span key={i} className="xl:block">
                    {line}{" "}
                  </span>
                ))}
              </p>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
};
