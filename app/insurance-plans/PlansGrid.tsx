import PlanCard from "@/components/PlanCard";
import SectionTitle, { Accent } from "@/components/SectionTitle";
import data from "@/data";

const { plans } = data;

export default function PlansGrid() {
  return (
    <section className="wrap section-pad xl:px-[112px]">
      <SectionTitle eyebrow={plans.eyebrow} text={plans.text} className="[&_h2]:xl:mt-0 [&_h2]:xl:text-[36px] [&>p:first-child]:xl:gap-[17px] [&>p:first-child]:xl:text-[15.3px] [&>p:first-child>span]:xl:w-[40px] [&>p:last-child]:xl:mt-[5px] [&>p:last-child]:xl:text-[15.7px]">
        {plans.title} <Accent>{plans.highlight}</Accent>
      </SectionTitle>
      <div className="mt-8 grid gap-x-[21px] gap-y-[19px] sm:grid-cols-2 lg:grid-cols-3 xl:mt-[22px] xl:grid-cols-4">
        {plans.items.map((plan) => (
          <PlanCard
            key={plan.slug}
            href={`/insurance-plans/${plan.slug}`}
            title={plan.title}
            text={plan.text}
            lines={plan.lines}
            image={plan.image}
            icon={plan.icon}
            buttonLabel={plans.buttonLabel}
          />
        ))}
      </div>
    </section>
  );
}
