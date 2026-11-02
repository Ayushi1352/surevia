import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { InsuranceTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { PlansGrid } from "@/components/sections/PlansGrid";

const templateData: InsuranceTemplateData = rawData;
const sectionData = templateData.categories.Insurance.sections;
const commonData = templateData.common;

export const metadata: Metadata = { title: commonData.plansBreadcrumb?.title };

export default function InsurancePlansPage() {
  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.plansBreadcrumb} ui={commonData.globalUI} />
      <PlansGrid data={sectionData.Plans?.variants?.InsurancePlans1} />
    </main>
  );
}
