import { PlanFeatures } from "@/components/sections/PlanFeatures";
import { PlanOverview } from "@/components/sections/PlanOverview";
import { PlanSidebar } from "@/components/sections/PlanSidebar";
import { WhyPlan } from "@/components/sections/WhyPlan";
import type { EnquiryFormData, PlanDetailData, PlansData } from "@/types/templates.types";

// One common detail page for every plan: all plan links point here and it shows the first plan.
export const PlanDetail = ({ data, plans, form }: { data?: PlanDetailData; plans?: PlansData; form?: EnquiryFormData }) => {
  const plan = plans?.items[0];
  if (!data || !plans || !plan) return null;
  return (
    <section data-section-pad className="mx-auto w-full max-w-[90rem] px-5 sm:px-8 py-12 sm:py-14 xl:py-16 [[data-section-pad]+&]:pt-0 grid gap-10 xl:grid-cols-[1fr_23.5625rem] xl:gap-[1.6875rem] xl:px-[4.125rem]">
      <div className="min-w-0">
        <PlanOverview data={data} plan={plan} />
        <PlanFeatures data={data} title={plan.title} />
        <WhyPlan data={data} title={plan.title} />
      </div>
      <PlanSidebar data={data} plans={plans} form={form} plan={plan} />
    </section>
  );
};
