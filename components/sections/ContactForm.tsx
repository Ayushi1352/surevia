import { EnquiryForm } from "@/components/sections/EnquiryForm";
import { Reveal } from "@/components/ui/Reveal";
import { Accent } from "@/components/ui/SectionTitle";
import type { ContactData, EnquiryFormData } from "@/types/templates.types";

export const ContactForm = ({ data: contact, form }: { data?: ContactData; form?: EnquiryFormData }) => {
  if (!contact) return null;
  return (
    <Reveal effect="right" className="rounded-[1rem] bg-[var(--color-bg-alt)] px-5 py-8 sm:px-[2.75rem] lg:px-[1.75rem] xl:px-[2.6875rem] xl:pt-[2.75rem] xl:pb-[2.875rem]">
      <h2 className="font-heading text-[1.5rem] leading-[1.2] font-extrabold tracking-[-0.01em] text-[var(--color-heading)] sm:text-[1.75rem] xl:text-[1.875rem] xl:leading-[2.375rem]">
        {contact.formTitle} <Accent>{contact.formHighlight}</Accent>
      </h2>
      <p className="mt-2 mb-6 font-heading text-[0.9375rem] leading-[1.6] font-medium text-[var(--color-text)] xl:text-[1rem]">{contact.formDescription}</p>
      <EnquiryForm data={form} layout="grid" />
    </Reveal>
  );
};
