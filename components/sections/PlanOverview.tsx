import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle, Accent } from "@/components/ui/SectionTitle";
import type { PlanDetailData, PlanItem } from "@/types/templates.types";

export const PlanOverview = ({ data: planDetail, plan }: { data?: PlanDetailData; plan: PlanItem }) => {
  if (!planDetail) return null;
  return (
    <div className="grid items-start gap-8 md:grid-cols-[1fr_24.3125rem] md:gap-[2.5rem]">
      <Reveal effect="left" className="md:pt-[1.25rem]">
        <SectionTitle eyebrow={planDetail.overviewEyebrow} size="sm">
          {planDetail.overviewTitle} <Accent>{plan.title}{planDetail.overviewTitleSuffix}</Accent>
        </SectionTitle>
        <div className="mt-4 space-y-[0.875rem] text-[0.9375rem] leading-[1.65] text-[var(--color-text)] xl:mt-[1.0625rem] xl:space-y-[1.125rem] xl:text-[1.1375rem] xl:leading-[1.64375rem]">
          {plan.overview.map((p) => (
            <p key={p}>{p}</p>
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
