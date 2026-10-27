import PlanCard from "./PlanCard";
import Reveal from "./Reveal";
import SectionTitle, { Accent } from "./SectionTitle";
import Slider from "./Slider";
import data from "@/data";

const { plans } = data;

export default function Plans() {
  return (
    <section data-section-pad className="mx-auto w-full max-w-[90rem] px-5 sm:px-8 xl:px-[3.75rem] py-12 sm:py-14 xl:py-16 [[data-section-pad]+&]:pt-0">
      <Reveal>
        <Slider
          className="gap-[1.1875rem]"
          header={
            <SectionTitle eyebrow={plans.eyebrow} text={plans.text} className="mb-6">
              {plans.title} <Accent>{plans.highlight}</Accent>
            </SectionTitle>
          }
        >
          {plans.items.map((plan) => (
            <div
              key={plan.title}
              className="shrink-0 basis-[82%] snap-start sm:basis-[calc((100%-1.1875rem)/2)] lg:basis-[calc((100%-3.5625rem)/4)] xl:basis-[calc((100%-5.9375rem)/6)]"
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
