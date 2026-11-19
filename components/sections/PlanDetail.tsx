import Image from "next/image";
import Link from "next/link";
import { EnquiryForm } from "@/components/sections/EnquiryForm";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle, Accent } from "@/components/ui/SectionTitle";
import { fill, lines } from "@/components/ui/text";
import type { EnquiryFormData, PlanDetailData, PlanDetailProps, PlanItem, PlansData } from "@/types/templates.types";

const PlanOverview = ({ data: planDetail, plan }: { data: PlanDetailData; plan: PlanItem }) => {
  return (
    <div className="grid items-start gap-8 md:grid-cols-[1fr_24.3125rem] md:gap-[2.5rem]">
      <Reveal effect="left" className="md:pt-[1.25rem]">
        <SectionTitle eyebrow={planDetail.overviewEyebrow} size="sm">
          {planDetail.overviewTitle} <Accent>{plan.title}{planDetail.overviewTitleSuffix}</Accent>
        </SectionTitle>
        <div className="mt-4 space-y-[0.875rem] text-[0.9375rem] leading-[1.65] text-[var(--color-text)] xl:mt-[1.0625rem] xl:space-y-[1.125rem] xl:text-[1.1375rem] xl:leading-[1.64375rem]">
          {lines(plan.overview).map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </Reveal>
      <Reveal effect="right" className="group relative aspect-[453/425] overflow-hidden rounded-[0.75rem]">
        <Image
          src={plan.detailImage ?? plan.image}
          alt={plan.imageAlt}
          fill
          priority
          sizes="(min-width: 768px) 389px, 100vw"
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
        />
      </Reveal>
    </div>
  );
};

const PlanFeatures = ({ data: planDetail, title }: { data: PlanDetailData; title: string }) => {
  return (
    <Reveal className="mt-8 rounded-[1rem] bg-[var(--color-bg-alt)] px-5 py-7 xl:mt-[1.875rem] xl:px-[1.625rem] xl:pt-[1.4375rem] xl:pb-[1.75rem]">
      <SectionTitle eyebrow={planDetail.featuresEyebrow} size="sm">
        {planDetail.featuresTitle}{" "}
        <Accent>
          {title} {planDetail.featuresSuffix}
        </Accent>
      </SectionTitle>
      <ul className="mt-6 grid grid-cols-1 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 xl:-mx-[1.625rem] xl:mt-[1.25rem]">
        {planDetail.features.map((feature, i) => (
          <li key={feature.id} className={`group px-2 text-center ${i > 0 ? "lg:border-l lg:border-[var(--color-primary-10)]" : ""}`}>
            <span className="mx-auto grid size-[5.75rem] place-items-center rounded-full bg-[var(--color-bg-subtle)] text-[var(--color-primary)] transition-all duration-300 group-hover:scale-110 group-hover:bg-[var(--color-primary)] group-hover:text-[var(--color-white)]">
              <Icon name={feature.icon} className="size-[3rem]" />
            </span>
            <h3 className="mt-5 font-sans text-[0.96875rem] font-semibold text-[var(--color-heading)] transition-colors duration-300 group-hover:text-[var(--color-primary)] xl:mt-[0.8125rem] xl:text-[1.01875rem]">{feature.title}</h3>
            <p className="mt-2 text-[0.96875rem] leading-[1.625rem] text-[var(--color-text-muted)] xl:text-[1.06875rem]">
              {lines(feature.description).map((line, j) => (
                <span key={j} className="block">
                  {line}
                </span>
              ))}
            </p>
          </li>
        ))}
      </ul>
    </Reveal>
  );
};

const WhyPlan = ({ data: planDetail, title }: { data: PlanDetailData; title: string }) => {
  return (
    <div className="mt-10 xl:mt-[3.25rem]">
      <Reveal>
        <SectionTitle eyebrow={planDetail.whyEyebrow} size="sm">
          {planDetail.whyTitle}{" "}
          <Accent>
            {title} {planDetail.whySuffix}
          </Accent>
        </SectionTitle>
      </Reveal>
      <ul className="mt-6 grid gap-x-[1.75rem] gap-y-[1.5rem] md:grid-cols-2 xl:mt-[1.875rem]">
        {planDetail.why.map((item, i) => (
          <Reveal
            as="li"
            key={item.id}
            delay={(i % 2) * 120}
            className="group flex items-center gap-[1.625rem] rounded-[0.75rem] bg-[var(--color-white)] px-[1.5rem] py-[1.1875rem] shadow-[0_0.25rem_1.375rem_color-mix(in_srgb,var(--color-primary-dark)_8%,transparent)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0.5rem_1.875rem_var(--color-shadow-strong)]"
          >
            <span className="grid size-[4.75rem] shrink-0 place-items-center rounded-full bg-[var(--color-bg-subtle)] text-[var(--color-primary)] transition-all duration-300 group-hover:scale-110 group-hover:bg-[var(--color-primary)] group-hover:text-[var(--color-white)] xl:size-[5.625rem]">
              <Icon name={item.icon} className="size-[2.375rem] xl:size-[2.875rem]" />
            </span>
            <span>
              <span className="block font-heading text-[1.0625rem] font-bold text-[var(--color-heading)] xl:text-[1.2125rem]">{item.title}</span>
              <span className="mt-1.5 block max-w-[18.125rem] text-[0.9375rem] leading-[1.55] text-[var(--color-text-muted)] xl:text-[1.11875rem] xl:leading-[1.625rem]">
                {item.description}
              </span>
            </span>
          </Reveal>
        ))}
      </ul>
    </div>
  );
};

const PlanSidebar = ({ data: planDetail, plans, form, plan }: { data: PlanDetailData; plans: PlansData; form?: EnquiryFormData; plan: PlanItem }) => {
  const related = plans.relatedPlanIds.flatMap((id) => plans.items.filter((item) => item.id === id));

  return (
    <Reveal as="aside" effect="right" className="grid content-start gap-[1.625rem] md:grid-cols-2 xl:grid-cols-1">
      <div className="rounded-[1rem] bg-[var(--color-bg-alt)] px-[1.5625rem] pt-[1.5rem] pb-[1.625rem]">
        <h2 className="font-heading text-[1.625rem] leading-tight font-extrabold text-[var(--color-primary)] xl:text-[1.875rem]">
          {planDetail.formTitle}
        </h2>
        <p className="mt-2 mb-[1.25rem] max-w-[18.75rem] text-[0.9375rem] leading-[1.625rem] text-[var(--color-text-muted)] xl:text-[1.0875rem]">
          {fill(planDetail.formDescription, { plan: plan.title.toLowerCase() })}
        </p>
        <EnquiryForm data={form} layout="compact" />
      </div>

      <div className="overflow-hidden rounded-[1rem] bg-[var(--color-white)] shadow-[0_0.25rem_1.375rem_color-mix(in_srgb,var(--color-primary-dark)_8%,transparent)]">
        <h2 className="bg-[var(--color-surface)] px-[1.375rem] py-[1.1875rem] font-heading text-[1.25rem] font-bold text-[var(--color-heading)] xl:text-[1.375rem]">
          {planDetail.relatedTitle}
        </h2>
        <ul className="px-[1.25rem] pb-[0.5rem]">
          {related.map((item) => (
            <li key={item.id} className="border-b border-[var(--color-border)] last:border-0">
              <Link href={item.url} className="group flex items-center gap-[0.9375rem] py-[1.25rem]">
                <Image
                  src={item.thumb ?? item.image}
                  alt={item.imageAlt}
                  width={188}
                  height={186}
                  className="size-[5.125rem] shrink-0 rounded-[0.5rem] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="flex-1">
                  <span className="block font-heading text-[1rem] font-bold text-[var(--color-heading)] transition-colors duration-300 group-hover:text-[var(--color-primary)]">{item.title}</span>
                  <span className="mt-1.5 block text-[0.925rem] leading-[1.5rem] text-[var(--color-text-muted)]">
                    {lines(item.relatedText).map((line, i) => (
                      <span key={i} className="block whitespace-nowrap">
                        {line}
                      </span>
                    ))}
                  </span>
                </span>
                <span className="grid size-[2.375rem] shrink-0 place-items-center rounded-full bg-[var(--color-bg-subtle)] text-[var(--color-primary)] transition-colors group-hover:bg-[var(--color-primary)] group-hover:text-[var(--color-white)]">
                  <Icon name={planDetail.relatedIcon} className="size-[1.0625rem] transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
};

// One common detail page for every plan: all plan links point here and it shows the detailPlanId plan.
export const PlanDetail = ({ data, plans, form }: PlanDetailProps) => {
  const plan = plans?.items.find((item) => item.id === plans.detailPlanId);
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
