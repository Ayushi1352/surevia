import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { InsuranceTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { PolicyPage } from "@/components/sections/PolicyPage";

const templateData: InsuranceTemplateData = rawData;
const sectionData = templateData.categories.Insurance.sections;
const commonData = templateData.common;

export const metadata: Metadata = { title: commonData.cookieBreadcrumb?.title };

export default function CookiePolicyPage() {
  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.cookieBreadcrumb} ui={commonData.globalUI} />
      <PolicyPage data={sectionData.PolicyPages?.variants?.InsurancePolicyPages1?.cookies} />
    </main>
  );
}
