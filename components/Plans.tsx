import PlanCard from "./PlanCard";
import SectionTitle, { Accent } from "./SectionTitle";
import Slider from "./Slider";
import data from "@/data";

const { plans } = data;

export default function Plans() {
  return (
    <section className="wrap section-pad xl:px-[63px]">
      <Slider
        className="gap-[19px] xl:mr-0! xl:pr-0!"
        header={
          <SectionTitle eyebrow={plans.eyebrow} text={plans.text} className="mb-6 xl:mb-[22px] [&_h2]:xl:text-[37.5px] [&>p:last-child]:xl:mt-[9px]">
            {plans.title} <Accent>{plans.highlight}</Accent>
          </SectionTitle>
        }
      >
        {plans.items.map((plan) => (
          <div
            key={plan.slug}
            className="shrink-0 basis-[82%] snap-start sm:basis-[calc((100%-19px)/2)] lg:basis-[calc((100%-38px)/3)] xl:basis-[251px]"
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
    </section>
  );
}
