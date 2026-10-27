import Button from "./Button";
import Icon from "./Icon";
import Loop from "./Loop";
import Reveal from "./Reveal";
import SectionTitle, { Accent } from "./SectionTitle";
import data from "@/data";

const { process } = data;

export default function Process() {
  return (
    <section data-section-pad className="mx-auto w-full max-w-[90rem] px-5 sm:px-8 xl:px-[3.75rem] py-12 sm:py-14 xl:py-16 [[data-section-pad]+&]:pt-0 grid items-center gap-12 xl:grid-cols-[27.5rem_1fr] xl:gap-[1.5rem]">
      <Reveal effect="left">
        <SectionTitle eyebrow={process.eyebrow} text={process.text}>
          {process.title} <br className="hidden sm:block" />
          <Accent>{process.highlight}</Accent>
        </SectionTitle>
        <Button href={process.button.href} label={process.button.label} className="mt-6 xl:h-[3rem] xl:w-[12.0625rem] xl:px-0 xl:text-[1.03125rem]" />
      </Reveal>

      <ol className="grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-[1.5rem]">
        {process.steps.map((step, i) => (
          <Reveal as="li" key={step.title} delay={i * 130} className="group relative pt-[3.875rem]">
            <div className="h-full rounded-[0.75rem] bg-white px-4 pt-[4.75rem] pb-7 text-center shadow-[0_0.25rem_1.375rem_color-mix(in_srgb,var(--color-plum)_8%,transparent)] transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-[0_0.5rem_1.875rem_rgba(60,20,40,0.14)]">
              <h3 className="font-heading text-[1rem] font-bold text-ink transition-colors duration-300 group-hover:text-primary">{step.title}</h3>
              <p className="mx-auto mt-2.5 max-w-[11.875rem] text-[0.875rem] leading-[1.28125rem] text-body">
                {step.text.map((l) => (
                  <span key={l} className="xl:block">
                    {l}{" "}
                  </span>
                ))}
              </p>
            </div>
            <span className="absolute top-0 left-1/2 grid size-[7.75rem] -translate-x-1/2 place-items-center rounded-full border border-rose bg-white transition-colors duration-300 group-hover:border-primary/40">
              <span className="grid size-[6.5rem] place-items-center rounded-full bg-gradient-to-b from-blush to-rose text-primary transition-all duration-300 group-hover:from-primary group-hover:to-plum group-hover:text-white">
                <Icon name={step.icon} className="size-[3.375rem] transition-transform duration-300 group-hover:scale-110" strokeWidth={1.35} />
              </span>
              <span className="absolute -bottom-[0.1875rem] left-1/2 grid size-[2rem] -translate-x-1/2 place-items-center rounded-full bg-primary text-[0.8125rem] font-semibold text-white ring-2 ring-white">
                {String(i + 1).padStart(2, "0")}
              </span>
            </span>
            {i < process.steps.length - 1 && (
              <span className="absolute top-[3.25rem] left-[calc(50%+4.625rem)] hidden items-center text-primary lg:flex">
                <span className="w-[1.875rem] border-t border-dashed border-primary/50" />
                <Loop effect="nudge">
                  <Icon name="arrow-right" className="-ml-1 size-[1.125rem]" strokeWidth={2} />
                </Loop>
              </span>
            )}
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
