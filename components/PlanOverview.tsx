import Image from "next/image";
import Reveal from "@/components/Reveal";
import SectionTitle, { Accent } from "@/components/SectionTitle";
import data from "@/data";

const { planDetail } = data;

type Plan = (typeof data.plans.items)[number];

export default function PlanOverview({ plan }: { plan: Plan }) {
  return (
    <div className="grid items-start gap-8 md:grid-cols-[1fr_24.3125rem] md:gap-[2.5rem]">
      <Reveal effect="left" className="md:pt-[1.25rem]">
        <SectionTitle eyebrow={planDetail.overviewEyebrow} size="sm">
          {planDetail.overviewTitle} <Accent>{plan.title}?</Accent>
        </SectionTitle>
        <div className="mt-4 space-y-[0.875rem] text-[0.9375rem] leading-[1.65] text-body xl:mt-[1.0625rem] xl:space-y-[1.125rem] xl:text-[1.1375rem] xl:leading-[1.64375rem]">
          {plan.overview.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </Reveal>
      <Reveal effect="right" className="group relative aspect-[453/425] overflow-hidden rounded-[0.75rem]">
        <Image
          src={plan.detailImage ?? plan.image}
          alt={plan.title}
          fill
          priority
          sizes="(min-width: 768px) 389px, 100vw"
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
        />
      </Reveal>
    </div>
  );
}
