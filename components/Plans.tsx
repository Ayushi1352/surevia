import PlanCard from "./PlanCard";
import Reveal from "./Reveal";
import SectionTitle, { Accent } from "./SectionTitle";
import Slider from "./Slider";
import data from "@/data";

const { plans } = data;

export default function Plans() {
  return (
    <section data-section-pad className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 xl:px-[60px] py-12 sm:py-14 xl:py-16 [[data-section-pad]+&]:pt-0">
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
              key={plan.title}
              className="shrink-0 basis-[82%] snap-start sm:basis-[calc((100%-19px)/2)] lg:basis-[calc((100%-57px)/4)] xl:basis-[calc((100%-95px)/6)]"
            >
              <PlanCard
                variant="home"
                href={plan.href}
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
