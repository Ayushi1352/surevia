import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { InsuranceTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { PlanDetail } from "@/components/sections/PlanDetail";

// One common detail page for every plan: all plan links point here and it shows the detailPlanId plan.
const plans = (rawData as InsuranceTemplateData).categories.Insurance.sections.Plans?.variants?.InsurancePlans1;
const plan = plans?.items.find((item) => item.id === plans.detailPlanId);

export const metadata: Metadata = { title: plan?.title, description: plan?.description };

export default function PlanDetailPage() {
  const templateData: InsuranceTemplateData = rawData;
  const sectionData = templateData?.categories?.Insurance?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.planDetailBreadcrumb} ui={commonData.globalUI} />
      <PlanDetail data={sectionData.PlanDetail?.variants?.InsurancePlanDetail1} plans={sectionData.Plans?.variants?.InsurancePlans1} form={sectionData.EnquiryForm?.variants?.InsuranceEnquiryForm1} />
    </main>
  );
}
