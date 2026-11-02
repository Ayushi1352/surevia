import { PlanCard } from "@/components/sections/PlanCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle, Accent } from "@/components/ui/SectionTitle";
import { Slider } from "@/components/ui/Slider";
import type { GlobalUIData, PlansData } from "@/types/templates.types";

export const Plans = ({ data: plans, ui }: { data?: PlansData; ui?: GlobalUIData }) => {
  if (!plans) return null;
  return (
    <section data-section-pad className="mx-auto w-full max-w-[90rem] px-5 sm:px-8 xl:px-[3.75rem] py-12 sm:py-14 xl:py-16 [[data-section-pad]+&]:pt-0">
      <Reveal>
        <Slider
          ui={ui}
          className="gap-[1.1875rem]"
          header={
            <SectionTitle eyebrow={plans.eyebrow} text={plans.description} className="mb-6">
              {plans.title} <Accent>{plans.titleHighlight}</Accent>
            </SectionTitle>
          }
        >
          {plans.items.map((plan) => (
            <div
              key={plan.id}
              className="shrink-0 basis-[82%] snap-start sm:basis-[calc((100%-1.1875rem)/2)] lg:basis-[calc((100%-3.5625rem)/4)] xl:basis-[calc((100%-5.9375rem)/6)]"
            >
              <PlanCard
                variant="home"
                url={plan.url}
                title={plan.title}
                description={plan.description}
                lines={plan.homeText}
                image={plan.homeImage}
                imageAlt={plan.imageAlt}
                icon={plan.homeIcon}
                buttonText={plans.buttonText}
              />
            </div>
          ))}
        </Slider>
      </Reveal>
    </section>
  );
};
