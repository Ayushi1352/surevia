import { EnquiryForm } from "@/components/sections/EnquiryForm";
import { Reveal } from "@/components/ui/Reveal";
import { Accent } from "@/components/ui/SectionTitle";
import type { EnquirePageData, EnquiryFormData } from "@/types/templates.types";

export const EnquireForm = ({ data: enquire, form }: { data?: EnquirePageData; form?: EnquiryFormData }) => {
  if (!enquire) return null;
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
