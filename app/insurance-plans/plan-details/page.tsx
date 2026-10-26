import type { Metadata } from "next";
import Banner from "@/components/Banner";
import PlanFeatures from "@/components/PlanFeatures";
import PlanOverview from "@/components/PlanOverview";
import PlanSidebar from "@/components/PlanSidebar";
import WhyPlan from "@/components/WhyPlan";
import { pageTitle } from "@/lib/pages";
import data from "@/data";

// One common detail page for every plan: all plan links point here and it shows the first plan.
// The banner and breadcrumb carry the common page title from site.json, not the plan title.
const plan = data.plans.items[0];
const { bannerTitle } = data.planDetail;

export const metadata: Metadata = { title: bannerTitle };

export default function PlanDetailPage() {
  return (
    <>
      <Banner
        title={bannerTitle}
        breadcrumbs={[
          { label: pageTitle("/"), href: "/" },
          { label: pageTitle("/insurance-plans"), href: "/insurance-plans" },
        ]}
      />
      <section data-section-pad className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 py-12 sm:py-14 xl:py-16 [[data-section-pad]+&]:pt-0 grid gap-10 xl:grid-cols-[1fr_377px] xl:gap-[27px] xl:px-[66px]">
        <div className="min-w-0">
          <PlanOverview plan={plan} />
          <PlanFeatures title={plan.title} />
          <WhyPlan title={plan.title} />
        </div>
        <PlanSidebar plan={plan} />
      </section>
    </>
  );
}
