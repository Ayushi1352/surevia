import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { InsuranceTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { PolicyPage } from "@/components/sections/PolicyPage";

export const metadata: Metadata = { ...(rawData as InsuranceTemplateData).common.faqsBreadcrumb?.seo };

export default function FAQPage() {
  const templateData: InsuranceTemplateData = rawData;
  const sectionData = templateData?.categories?.Insurance?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;
  const faq = sectionData.Faq?.variants?.InsuranceFaq1;

  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.faqsBreadcrumb} ui={commonData.globalUI} />
      <PolicyPage data={faq} accordionIcon={faq?.accordionIcon} />
    </main>
  );
}
