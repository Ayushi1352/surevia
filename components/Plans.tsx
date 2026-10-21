import PlanCard from "./PlanCard";
import Reveal from "./Reveal";
import SectionTitle, { Accent } from "./SectionTitle";
import Slider from "./Slider";
import data from "@/data";

const { plans } = data;

export default function Plans() {
  return (
    <section className="wrap section-pad">
      <Reveal>
        <Slider
          className="gap-[19px]"
          header={
            <SectionTitle eyebrow={plans.eyebrow} text={plans.text} className="mb-6">
              {plans.title} <Accent>{plans.highlight}</Accent>
            </SectionTitle>
          }
        >
          {plans.items.map((plan) => (
            <div
              key={plan.slug}
              className="shrink-0 basis-[82%] snap-start sm:basis-[calc((100%-19px)/2)] lg:basis-[calc((100%-57px)/4)] xl:basis-[calc((100%-95px)/6)]"
            >
              <PlanCard
                variant="home"
                href={`/insurance-plans/${plan.slug}`}
                title={plan.title}
                text={plan.text}
                lines={plan.homeText}
                image={plan.homeImage}
                icon={plan.homeIcon}
                buttonLabel={plans.buttonLabel}
              />
            </div>
          ))}
        </Slider>
      </Reveal>
    </section>
  );
}
