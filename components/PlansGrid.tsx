import PlanCard from "@/components/PlanCard";
import Reveal from "@/components/Reveal";
import SectionTitle, { Accent } from "@/components/SectionTitle";
import data from "@/data";

const { plans } = data;

export default function PlansGrid() {
  return (
    <section data-section-pad className="mx-auto w-full max-w-[90rem] px-5 sm:px-8 xl:px-[3.75rem] py-12 sm:py-14 xl:py-16 [[data-section-pad]+&]:pt-0">
      <Reveal>
        <SectionTitle eyebrow={plans.eyebrow} text={plans.text}>
          {plans.title} <Accent>{plans.highlight}</Accent>
        </SectionTitle>
      </Reveal>
      <div className="mt-8 grid gap-x-[1.3125rem] gap-y-[1.1875rem] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {plans.items.map((plan, i) => (
          <Reveal key={plan.title} delay={(i % 4) * 100}>
            <PlanCard
              href={plan.href}
              title={plan.title}
              text={plan.text}
              lines={plan.lines}
              image={plan.image}
              icon={plan.icon}
              buttonLabel={plans.buttonLabel}
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
