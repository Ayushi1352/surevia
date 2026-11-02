import { EnquireForm } from "@/components/sections/EnquireForm";
import { EnquireInfo } from "@/components/sections/EnquireInfo";
import type { EnquirePageData, EnquiryFormData } from "@/types/templates.types";

export const Enquire = ({ data, form }: { data?: EnquirePageData; form?: EnquiryFormData }) => {
  if (!data) return null;
  return (
    <section data-section-pad className="mx-auto w-full max-w-[90rem] px-5 sm:px-8 py-12 sm:py-14 xl:py-16 [[data-section-pad]+&]:pt-0 grid items-start gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-8 xl:grid-cols-[1fr_minmax(0,38.75rem)] xl:gap-[3.75rem] xl:pr-[3.75rem] xl:pl-[4.8125rem]">
      <EnquireInfo data={data} />
      <EnquireForm data={data} form={form} />
    </section>
  );
};
