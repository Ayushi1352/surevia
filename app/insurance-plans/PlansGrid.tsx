import PlanCard from "@/components/PlanCard";
import Reveal from "@/components/Reveal";
import SectionTitle, { Accent } from "@/components/SectionTitle";
import data from "@/data";

const { plans } = data;

export default function PlansGrid() {
  return (
    <section className="wrap section-pad">
      <Reveal>
        <SectionTitle eyebrow={plans.eyebrow} text={plans.text}>
          {plans.title} <Accent>{plans.highlight}</Accent>
        </SectionTitle>
      </Reveal>
      <div className="mt-8 grid gap-x-[21px] gap-y-[19px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {plans.items.map((plan, i) => (
          <Reveal key={plan.slug} delay={(i % 4) * 100}>
            <PlanCard
              href={`/insurance-plans/${plan.slug}`}
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
