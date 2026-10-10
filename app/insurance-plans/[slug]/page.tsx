import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Banner from "@/components/Banner";
import { pageTitle } from "@/lib/pages";
import data from "@/data";
import Features from "./Features";
import Overview from "./Overview";
import Sidebar from "./Sidebar";
import WhyPlan from "./WhyPlan";

const { plans, planDetail } = data;

export function generateStaticParams() {
  return plans.items.map((plan) => ({ slug: plan.slug }));
}

export async function generateMetadata({ params }: PageProps<"/insurance-plans/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  return { title: plans.items.find((p) => p.slug === slug)?.title ?? planDetail.bannerTitle };
}

export default async function PlanDetailPage({ params }: PageProps<"/insurance-plans/[slug]">) {
  const { slug } = await params;
  const plan = plans.items.find((p) => p.slug === slug);
  if (!plan) notFound();

  return (
    <>
      <Banner
        title={plan.title}
        breadcrumbs={[
          { label: pageTitle("/"), href: "/" },
          { label: pageTitle("/insurance-plans"), href: "/insurance-plans" },
        ]}
      />
      <section className="wrap section-pad grid gap-10 xl:grid-cols-[1fr_377px] xl:gap-[27px] xl:px-[66px]">
        <div className="min-w-0">
          <Overview plan={plan} />
          <Features title={plan.title} />
          <WhyPlan title={plan.title} />
        </div>
        <Sidebar plan={plan} />
      </section>
    </>
  );
}
