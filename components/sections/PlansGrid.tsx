import { PlanCard } from "@/components/sections/PlanCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle, Accent } from "@/components/ui/SectionTitle";
import type { PlansData } from "@/types/templates.types";

export const PlansGrid = ({ data: plans }: { data?: PlansData }) => {
  if (!plans) return null;
  return (
    <section data-section-pad className="mx-auto w-full max-w-[90rem] px-5 sm:px-8 xl:px-[3.75rem] py-12 sm:py-14 xl:py-16 [[data-section-pad]+&]:pt-0">
      <Reveal>
        <SectionTitle eyebrow={plans.eyebrow} text={plans.description}>
          {plans.title} <Accent>{plans.titleHighlight}</Accent>
        </SectionTitle>
      </Reveal>
      <div className="mt-8 grid gap-x-[1.3125rem] gap-y-[1.1875rem] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {plans.items.map((plan, i) => (
          <Reveal key={plan.id} delay={(i % 4) * 100}>
            <PlanCard
              url={plan.url}
              title={plan.title}
              description={plan.description}
              lines={plan.lines}
              image={plan.image}
              imageAlt={plan.imageAlt}
              icon={plan.icon}
              buttonText={plans.buttonText}
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
};
