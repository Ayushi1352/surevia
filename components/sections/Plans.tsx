import { PlanCard } from "@/components/ui/PlanCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle, Accent } from "@/components/ui/SectionTitle";
import { Slider } from "@/components/ui/Slider";
import type { PlansData, PlansProps } from "@/types/templates.types";

/** Home page: the plans in a slider. */
const PlansSlider = ({ plans }: { plans: PlansData }) => {
  return (
    <Reveal>
      <Slider
        controls={plans}
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
            <PlanCard variant="home" plan={plan} buttonText={plans.buttonText} buttonIcon={plans.buttonIcon} />
          </div>
        ))}
      </Slider>
    </Reveal>
  );
};

/** Insurance Plans page: every plan in a grid. */
const PlansGrid = ({ plans }: { plans: PlansData }) => {
  return (
    <>
      <Reveal>
        <SectionTitle eyebrow={plans.eyebrow} text={plans.description}>
          {plans.title} <Accent>{plans.titleHighlight}</Accent>
        </SectionTitle>
      </Reveal>
      <div className="mt-8 grid gap-x-[1.3125rem] gap-y-[1.1875rem] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {plans.items.map((plan, i) => (
          <Reveal key={plan.id} delay={(i % 4) * 100}>
            <PlanCard plan={plan} buttonText={plans.buttonText} buttonIcon={plans.buttonIcon} />
          </Reveal>
        ))}
      </div>
    </>
  );
};

export const Plans = ({ data: plans, showAll = false }: PlansProps) => {
  if (!plans || !plans.items.length) return null;
  return (
    <section data-section-pad className="mx-auto w-full max-w-[90rem] px-5 sm:px-8 xl:px-[3.75rem] py-12 sm:py-14 xl:py-16 [[data-section-pad]+&]:pt-0">
      {showAll ? <PlansGrid plans={plans} /> : <PlansSlider plans={plans} />}
    </section>
  );
};
