import AboutVisual from "./AboutVisual";
import Button from "./Button";
import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionTitle, { Accent } from "./SectionTitle";
import data from "@/data";

const { about } = data;

export default function About() {
  return (
    <section data-section-pad className="mx-auto w-full max-w-[90rem] px-5 sm:px-8 py-12 sm:py-14 xl:py-16 [[data-section-pad]+&]:pt-0 grid items-center gap-10 lg:grid-cols-[1fr_1.08fr] xl:grid-cols-[1fr_44.75rem] xl:gap-0 xl:pr-[2.8125rem] xl:pl-[6.875rem]">
      <Reveal effect="left">
        <SectionTitle eyebrow={about.eyebrow}>
          {about.title} <br className="hidden sm:block" />
          <Accent>{about.highlight}</Accent>
        </SectionTitle>
        <p className="mt-4 max-w-[33.625rem] font-heading text-[0.9375rem] leading-[1.6] font-medium text-body xl:text-[1rem]">
          {about.homeText}
        </p>

        <div className="mt-6 flex h-[5.625rem] w-full max-w-[25.875rem] items-center rounded-[0.875rem] bg-blush px-6 xl:mt-[1.25rem] xl:h-[5.6875rem] xl:px-[2.125rem]">
          <span className="text-[3.25rem] leading-none font-bold tracking-[-0.02em] text-primary xl:text-[4.5625rem]">
            {about.experience.value}
          </span>
          <span className="mx-6 h-[3.125rem] w-[0.125rem] bg-primary/80 xl:mr-[2.125rem] xl:ml-[1.5rem]" />
          <span className="font-heading text-[1.125rem] leading-[1.625rem] font-medium text-ink xl:text-[1.25rem]">
            {about.experience.label.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
          </span>
        </div>

        <ul className="mt-5 space-y-4 xl:mt-[0.9375rem] xl:space-y-[0.875rem]">
          {about.points.map((p) => (
            <li key={p.title} className="group flex items-center gap-5 xl:gap-[1.5rem]">
              <span className="grid size-[4rem] shrink-0 place-items-center rounded-full bg-primary text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-rose group-hover:text-primary xl:size-[4.5rem]">
                <Icon name={p.icon} className="size-[2rem] transition-transform duration-300 group-hover:-rotate-6 xl:size-[2.375rem]" strokeWidth={1.5} />
              </span>
              <span>
                <span className="block font-heading text-[1.0625rem] font-bold text-ink transition-colors duration-300 group-hover:text-primary xl:text-[1.13125rem]">{p.title}</span>
                <span className="mt-0.5 block max-w-[16.875rem] font-heading text-[0.90625rem] leading-[1.375rem] font-medium text-body xl:text-[0.9375rem]">
                  {p.text}
                </span>
              </span>
            </li>
          ))}
        </ul>

        <Button href={about.button.href} label={about.button.label} className="mt-6 xl:mt-[1rem] xl:h-[2.8125rem] xl:w-[11.25rem] xl:px-0 xl:text-[1rem]" />
      </Reveal>

      <AboutVisual />
    </section>
  );
}
