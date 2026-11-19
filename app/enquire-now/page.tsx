import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { InsuranceTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { Enquire } from "@/components/sections/Enquire";

export const metadata: Metadata = { ...(rawData as InsuranceTemplateData).common.enquireBreadcrumb?.seo };

export default function EnquireNowPage() {
  const templateData: InsuranceTemplateData = rawData;
  const sectionData = templateData?.categories?.Insurance?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.enquireBreadcrumb} ui={commonData.globalUI} />
      <Enquire data={sectionData.Enquire?.variants?.InsuranceEnquire1} form={sectionData.EnquiryForm?.variants?.InsuranceEnquiryForm1} />
    </main>
  );
}
