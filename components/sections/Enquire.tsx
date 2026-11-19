import { EnquiryForm } from "@/components/sections/EnquiryForm";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Accent, Eyebrow } from "@/components/ui/SectionTitle";
import { lines } from "@/components/ui/text";
import type { EnquireData, EnquireProps, EnquiryFormData } from "@/types/templates.types";

const EnquireInfo = ({ data: enquire }: { data: EnquireData }) => {
  return (
    <Reveal effect="left" className="xl:pt-[0.5rem]">
      <Eyebrow>{enquire.eyebrow}</Eyebrow>
      <h2 className="mt-3 font-heading text-[1.75rem] leading-[1.18] font-extrabold tracking-[-0.01em] text-[var(--color-heading)] sm:text-[2.125rem] xl:text-[2.375rem] xl:leading-[2.75rem]">
        {lines(enquire.title).map((line, i) => (
          <span key={i} className="sm:block">
            {line}{" "}
          </span>
        ))}
        <Accent>{enquire.titleHighlight}</Accent>
      </h2>
      <p className="mt-3 max-w-[32.8125rem] font-heading text-[0.9375rem] leading-[1.6] font-medium text-[var(--color-text)] xl:text-[1rem]">
        {enquire.description}
      </p>
      <ul className="mt-8 space-y-6 xl:mt-[2.4375rem] xl:space-y-[1.9375rem]">
        {enquire.points.map((point) => (
          <li key={point.id} className="group flex items-center gap-5 xl:gap-[1.875rem]">
            <span className="grid size-[4.875rem] shrink-0 place-items-center rounded-full bg-[var(--color-bg-subtle)] text-[var(--color-primary)] transition-all duration-300 group-hover:scale-110 group-hover:bg-[var(--color-primary)] group-hover:text-[var(--color-white)] xl:size-[6.1875rem]">
              <Icon name={point.icon} className="size-[2.5rem] xl:size-[3.25rem]" />
            </span>
            <span>
              <span className="block font-heading text-[1.125rem] font-bold text-[var(--color-heading)] transition-colors duration-300 group-hover:text-[var(--color-primary)] xl:text-[1.34375rem]">{point.title}</span>
              <span className="mt-1 block font-heading text-[0.96875rem] leading-[1.5] font-medium text-[var(--color-text)] xl:mt-px xl:text-[1.20625rem] xl:leading-[1.71875rem]">
                {lines(point.description).map((line, i) => (
                  <span key={i} className="sm:block">
                    {line}{" "}
                  </span>
                ))}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </Reveal>
  );
};

const EnquireForm = ({ data: enquire, form }: { data: EnquireData; form?: EnquiryFormData }) => {
  return (
    <Reveal effect="right" className="rounded-[1rem] bg-[var(--color-bg-alt)] px-5 py-8 shadow-[0_0.375rem_1.5rem_var(--color-shadow-form)] sm:px-[1.9375rem] xl:px-[2.1875rem] xl:pt-[1.8125rem] xl:pb-[2.625rem]">
      <h2 className="font-heading text-[1.5rem] leading-[1.2] font-extrabold tracking-[-0.01em] text-[var(--color-heading)] sm:text-[1.75rem] xl:text-[1.875rem] xl:leading-[2.375rem]">
        {enquire.formTitle} <Accent>{enquire.formHighlight}</Accent>
      </h2>
      <p className="mt-2 mb-6 font-heading text-[0.9375rem] leading-[1.6] font-medium text-[var(--color-text)] xl:text-[1rem]">{enquire.formDescription}</p>
      <EnquiryForm data={form} layout="stack" />
    </Reveal>
  );
};

export const Enquire = ({ data, form }: EnquireProps) => {
  if (!data) return null;
  return (
    <section data-section-pad className="mx-auto w-full max-w-[90rem] px-5 sm:px-8 py-12 sm:py-14 xl:py-16 [[data-section-pad]+&]:pt-0 grid items-start gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-8 xl:grid-cols-[1fr_minmax(0,38.75rem)] xl:gap-[3.75rem] xl:pr-[3.75rem] xl:pl-[4.8125rem]">
      <EnquireInfo data={data} />
      <EnquireForm data={data} form={form} />
    </section>
  );
};
