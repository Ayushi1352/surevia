import AboutVisual from "@/components/AboutVisual";
import Reveal from "@/components/Reveal";
import SectionTitle, { Accent } from "@/components/SectionTitle";
import data from "@/data";

const { about } = data;

export default function AboutIntro() {
  return (
    <section data-section-pad className="mx-auto w-full max-w-[90rem] px-5 sm:px-8 py-12 sm:py-14 xl:py-16 [[data-section-pad]+&]:pt-0 grid items-start gap-10 lg:grid-cols-[1fr_1.08fr] lg:max-xl:items-center lg:max-xl:gap-8 xl:grid-cols-[1fr_44.75rem] xl:gap-0 xl:pr-[2.8125rem] xl:pl-[6.875rem]">
      <Reveal effect="left" className="xl:pt-[2.0625rem]">
        <SectionTitle eyebrow={about.eyebrow}>
          {about.title} <br className="hidden sm:block" />
          <Accent>{about.highlight}</Accent>
        </SectionTitle>
        <div className="mt-4 max-w-[33.625rem] space-y-[0.875rem] font-heading text-[0.9375rem] leading-[1.6] font-medium text-body md:max-lg:max-w-none xl:text-[1rem]">
          {about.pageParagraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </Reveal>
      <AboutVisual className="md:max-lg:max-w-[33.75rem]" />
    </section>
  );
}
