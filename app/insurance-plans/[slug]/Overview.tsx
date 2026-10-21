import Image from "next/image";
import Reveal from "@/components/Reveal";
import SectionTitle, { Accent } from "@/components/SectionTitle";
import data from "@/data";

const { planDetail } = data;

type Plan = (typeof data.plans.items)[number];

export default function Overview({ plan }: { plan: Plan }) {
  return (
    <div className="grid items-start gap-8 md:grid-cols-[1fr_389px] md:gap-[40px]">
      <Reveal effect="left" className="md:pt-[20px]">
        <SectionTitle eyebrow={planDetail.overviewEyebrow} size="sm">
          {planDetail.overviewTitle} <Accent>{plan.title}?</Accent>
        </SectionTitle>
        <div className="mt-4 space-y-[14px] text-[15px] leading-[1.65] text-body xl:mt-[17px] xl:space-y-[18px] xl:text-[18.2px] xl:leading-[26.3px]">
          {plan.overview.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </Reveal>
      <Reveal effect="right" className="group relative aspect-[453/425] overflow-hidden rounded-[12px]">
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
