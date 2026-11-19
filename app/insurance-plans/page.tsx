import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { InsuranceTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { Plans } from "@/components/sections/Plans";

export const metadata: Metadata = { ...(rawData as InsuranceTemplateData).common.plansBreadcrumb?.seo };

export default function InsurancePlansPage() {
  const templateData: InsuranceTemplateData = rawData;
  const sectionData = templateData?.categories?.Insurance?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.plansBreadcrumb} ui={commonData.globalUI} />
      <Plans data={sectionData.Plans?.variants?.InsurancePlans1} showAll />
    </main>
  );
}
