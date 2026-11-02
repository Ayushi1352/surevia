import { ContactForm } from "@/components/sections/ContactForm";
import { ContactInfo } from "@/components/sections/ContactInfo";
import type { ContactData, EnquiryFormData } from "@/types/templates.types";

export const Contact = ({ data, form }: { data?: ContactData; form?: EnquiryFormData }) => {
  if (!data) return null;
  return (
    <section data-section-pad className="mx-auto w-full max-w-[90rem] px-5 sm:px-8 py-12 sm:py-14 xl:py-16 [[data-section-pad]+&]:pt-0 grid items-start gap-12 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1fr)] lg:gap-8 xl:grid-cols-[1fr_minmax(0,42.6875rem)] xl:gap-[3.75rem] xl:pr-[3.5rem] xl:pl-[5rem]">
      <ContactInfo data={data} />
      <ContactForm data={data} form={form} />
    </section>
  );
};
