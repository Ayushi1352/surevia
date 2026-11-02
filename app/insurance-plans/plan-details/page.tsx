import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { InsuranceTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { PlanDetail } from "@/components/sections/PlanDetail";

const templateData: InsuranceTemplateData = rawData;
const sectionData = templateData.categories.Insurance.sections;
const commonData = templateData.common;

export const metadata: Metadata = { title: commonData.planDetailBreadcrumb?.title };

export default function PlanDetailPage() {
  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.planDetailBreadcrumb} ui={commonData.globalUI} />
      <PlanDetail data={sectionData.PlanDetail?.variants?.InsurancePlanDetail1} plans={sectionData.Plans?.variants?.InsurancePlans1} form={sectionData.EnquiryForm?.variants?.InsuranceEnquiryForm1} />
    </main>
  );
}
