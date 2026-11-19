import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Loop } from "@/components/ui/Loop";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle, Accent } from "@/components/ui/SectionTitle";
import { lines } from "@/components/ui/text";
import type { AboutUsData, AboutUsProps } from "@/types/templates.types";

// Every layer is placed in % of the frame so the composition scales as one piece.
const AboutVisual = ({ data: about, className = "" }: { data: AboutUsData; className?: string }) => {
  return (
    <Reveal effect="right" className={`relative mx-auto aspect-[840/790] w-full max-w-[44.8125rem] ${className}`}>
      <Loop effect="pulse-ring">
        <span className="absolute top-[12%] left-[12%] z-10 aspect-square w-[4.05%] rounded-full bg-[var(--color-primary)] text-[var(--color-primary)]" />
      </Loop>

      <div className="group absolute top-[3.7%] left-[3.2%] h-[84.9%] w-[91.5%] overflow-hidden rounded-[50%] shadow-[0_0.75rem_2.75rem_var(--color-shadow-soft)]">
        <Image
          src={about.mainImage}
          alt={about.mainImageAlt}
          fill
          sizes="(min-width: 1024px) 660px, 92vw"
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
        />
      </div>

      <Loop effect="float">
        <div className="absolute top-[46.96%] left-[33.1%] aspect-square w-[45.48%] rounded-full bg-[var(--color-white)] p-[0.71%]">
          <div className="relative size-full overflow-hidden rounded-full">
            <Image
              src={about.familyImage}
              alt={about.familyImageAlt}
              fill
              sizes="(min-width: 1024px) 330px, 45vw"
              className="object-cover"
            />
          </div>
        </div>
      </Loop>

      <Loop effect="float" delay={-2500}>
        <span className="absolute top-[65.7%] left-[23.45%] grid aspect-square w-[16.2%] place-items-center rounded-full bg-[var(--color-bg-subtle)] text-[var(--color-primary)]">
          <Icon name={about.badgeIcon} className="size-[52%]" />
        </span>
      </Loop>
    </Reveal>
  );
};

/** Home page: text, experience badge, points and button beside the photos. */
const AboutHome = ({ data: about }: { data: AboutUsData }) => {
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
            {lines(about.experience.label).map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </span>
        </div>

        <ul className="mt-5 space-y-4 xl:mt-[0.9375rem] xl:space-y-[0.875rem]">
          {about.points.map((point) => (
            <li key={point.id} className="group flex items-center gap-5 xl:gap-[1.5rem]">
              <span className="grid size-[4rem] shrink-0 place-items-center rounded-full bg-[var(--color-primary)] text-[var(--color-white)] transition-all duration-300 group-hover:scale-110 group-hover:bg-[var(--color-bg-subtle)] group-hover:text-[var(--color-primary)] xl:size-[4.5rem]">
                <Icon name={point.icon} className="size-[2rem] transition-transform duration-300 group-hover:-rotate-6 xl:size-[2.375rem]" />
              </span>
              <span>
                <span className="block font-heading text-[1.0625rem] font-bold text-[var(--color-heading)] transition-colors duration-300 group-hover:text-[var(--color-primary)] xl:text-[1.13125rem]">{point.title}</span>
                <span className="mt-0.5 block max-w-[16.875rem] font-heading text-[0.90625rem] leading-[1.375rem] font-medium text-[var(--color-text)] xl:text-[0.9375rem]">
                  {point.description}
                </span>
              </span>
            </li>
          ))}
        </ul>

        <Button href={about.buttonUrl} label={about.buttonText} icon={about.buttonIcon} className="mt-6 xl:mt-[1rem] xl:h-[2.8125rem] xl:w-[11.25rem] xl:px-0 xl:text-[1rem]" />
      </Reveal>

      <AboutVisual data={about} />
    </section>
  );
};

/** About Us page: the paragraphs beside the photos. */
const AboutPage = ({ data: about }: { data: AboutUsData }) => {
  return (
    <section data-section-pad className="mx-auto w-full max-w-[90rem] px-5 sm:px-8 py-12 sm:py-14 xl:py-16 [[data-section-pad]+&]:pt-0 grid items-start gap-10 lg:grid-cols-[1fr_1.08fr] lg:max-xl:items-center lg:max-xl:gap-8 xl:grid-cols-[1fr_44.75rem] xl:gap-0 xl:pr-[2.8125rem] xl:pl-[6.875rem]">
      <Reveal effect="left" className="xl:pt-[2.0625rem]">
        <SectionTitle eyebrow={about.eyebrow}>
          {about.title} <br className="hidden sm:block" />
          <Accent>{about.titleHighlight}</Accent>
        </SectionTitle>
        <div className="mt-4 max-w-[33.625rem] space-y-[0.875rem] font-heading text-[0.9375rem] leading-[1.6] font-medium text-[var(--color-text)] md:max-lg:max-w-none xl:text-[1rem]">
          {lines(about.pageDescription).map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </Reveal>
      <AboutVisual data={about} className="md:max-lg:max-w-[33.75rem]" />
    </section>
  );
};

export const AboutUs = ({ data, variant = "home" }: AboutUsProps) => {
  if (!data) return null;
  return variant === "page" ? <AboutPage data={data} /> : <AboutHome data={data} />;
};
