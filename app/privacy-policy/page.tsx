import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { InsuranceTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { PolicyPage } from "@/components/sections/PolicyPage";

export const metadata: Metadata = { ...(rawData as InsuranceTemplateData).common.privacyBreadcrumb?.seo };

export default function PrivacyPolicyPage() {
  const templateData: InsuranceTemplateData = rawData;
  const sectionData = templateData?.categories?.Insurance?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.privacyBreadcrumb} ui={commonData.globalUI} />
      <PolicyPage data={sectionData.PolicyPages?.variants?.InsurancePolicyPages1?.privacy} />
    </main>
  );
}
