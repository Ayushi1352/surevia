import { AboutVisual } from "@/components/sections/AboutVisual";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle, Accent } from "@/components/ui/SectionTitle";
import type { AboutUsData } from "@/types/templates.types";

export const AboutUs = ({ data: about }: { data?: AboutUsData }) => {
  if (!about) return null;
  return (
    <section data-section-pad className="mx-auto w-full max-w-[90rem] px-5 sm:px-8 py-12 sm:py-14 xl:py-16 [[data-section-pad]+&]:pt-0 grid items-center gap-10 lg:grid-cols-[1fr_1.08fr] xl:grid-cols-[1fr_44.75rem] xl:gap-0 xl:pr-[2.8125rem] xl:pl-[6.875rem]">
      <Reveal effect="left">
        <SectionTitle eyebrow={about.eyebrow}>
          {about.title} <br className="hidden sm:block" />
          <Accent>{about.titleHighlight}</Accent>
        </SectionTitle>
        <p className="mt-4 max-w-[33.625rem] font-heading text-[0.9375rem] leading-[1.6] font-medium text-[var(--color-text)] xl:text-[1rem]">
          {about.homeText}
        </p>

        <div className="mt-6 flex h-[5.625rem] w-full max-w-[25.875rem] items-center rounded-[0.875rem] bg-[var(--color-bg-alt)] px-6 xl:mt-[1.25rem] xl:h-[5.6875rem] xl:px-[2.125rem]">
          <span className="text-[3.25rem] leading-none font-bold tracking-[-0.02em] text-[var(--color-primary)] xl:text-[4.5625rem]">
            {about.experience.value}
          </span>
          <span className="mx-6 h-[3.125rem] w-[0.125rem] bg-[var(--color-primary-80)] xl:mr-[2.125rem] xl:ml-[1.5rem]" />
          <span className="font-heading text-[1.125rem] leading-[1.625rem] font-medium text-[var(--color-heading)] xl:text-[1.25rem]">
            {about.experience.label.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
          </span>
        </div>

        <ul className="mt-5 space-y-4 xl:mt-[0.9375rem] xl:space-y-[0.875rem]">
          {about.points.map((p) => (
            <li key={p.id} className="group flex items-center gap-5 xl:gap-[1.5rem]">
              <span className="grid size-[4rem] shrink-0 place-items-center rounded-full bg-[var(--color-primary)] text-[var(--color-white)] transition-all duration-300 group-hover:scale-110 group-hover:bg-[var(--color-bg-subtle)] group-hover:text-[var(--color-primary)] xl:size-[4.5rem]">
                <Icon name={p.icon} className="size-[2rem] transition-transform duration-300 group-hover:-rotate-6 xl:size-[2.375rem]" />
              </span>
              <span>
                <span className="block font-heading text-[1.0625rem] font-bold text-[var(--color-heading)] transition-colors duration-300 group-hover:text-[var(--color-primary)] xl:text-[1.13125rem]">{p.title}</span>
                <span className="mt-0.5 block max-w-[16.875rem] font-heading text-[0.90625rem] leading-[1.375rem] font-medium text-[var(--color-text)] xl:text-[0.9375rem]">
                  {p.description}
                </span>
              </span>
            </li>
          ))}
        </ul>

        <Button href={about.buttonUrl} label={about.buttonText} className="mt-6 xl:mt-[1rem] xl:h-[2.8125rem] xl:w-[11.25rem] xl:px-0 xl:text-[1rem]" />
      </Reveal>

      <AboutVisual data={about} />
    </section>
  );
};
