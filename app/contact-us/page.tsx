import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { InsuranceTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = { ...(rawData as InsuranceTemplateData).common.contactBreadcrumb?.seo };

export default function ContactUsPage() {
  const templateData: InsuranceTemplateData = rawData;
  const sectionData = templateData?.categories?.Insurance?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.contactBreadcrumb} ui={commonData.globalUI} />
      <Contact data={sectionData.Contact?.variants?.InsuranceContact1} form={sectionData.EnquiryForm?.variants?.InsuranceEnquiryForm1} />
    </main>
  );
}
