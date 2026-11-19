import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Loop } from "@/components/ui/Loop";
import { Reveal } from "@/components/ui/Reveal";
import { Accent } from "@/components/ui/SectionTitle";
import { lines } from "@/components/ui/text";
import type { ThankYouData, ThankYouProps } from "@/types/templates.types";

// Burst marks around the tick: [x1, y1, x2, y2, faded]
const sparks: [number, number, number, number, boolean][] = [
  [52, 43, 64, 56, false],
  [28, 84, 44, 92, true],
  [16, 130, 34, 134, false],
  [308, 56, 320, 43, false],
  [328, 92, 344, 84, true],
  [338, 134, 356, 130, false],
];

const ThankYouMessage = ({ data: thankYou }: { data: ThankYouData }) => {
  return (
    <div className="text-center">
      <svg viewBox="0 0 372 186" aria-hidden="true" className="mx-auto h-auto w-[17.5rem] transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] starting:scale-50 starting:opacity-0 sm:w-[23.25rem]">
        {sparks.map(([x1, y1, x2, y2, faded], i) => (
          <Loop key={`${x1}-${y1}`} effect="twinkle" delay={i * 250} svg>
            <line
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              className={faded ? "stroke-[var(--color-bg-subtle)]" : "stroke-[var(--color-primary)]"}
              strokeWidth="5"
              strokeLinecap="round"
            />
          </Loop>
        ))}
        <circle cx="186" cy="93" r="93" className="fill-[var(--color-bg-subtle)]" />
        <circle cx="186" cy="93" r="69" className="fill-[var(--color-primary)]" />
        <path
          d="M156 95l21 21 39-42"
          fill="none"
          strokeWidth="11"
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength={1}
          strokeDasharray={1}
          className="stroke-[var(--color-white)] transition-[stroke-dashoffset] delay-500 duration-600 ease-out starting:[stroke-dashoffset:1]"
        />
      </svg>

      <h1 className="mt-3 transition-[opacity,transform] duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] starting:translate-y-[1.75rem] starting:opacity-0 delay-200 font-heading text-[3.375rem] leading-[1.1] font-extrabold tracking-[-0.02em] text-[var(--color-heading)] sm:text-[4.5rem] xl:mt-[0.125rem] xl:text-[4.7875rem]">
        {thankYou.title} <Accent>{thankYou.titleHighlight}</Accent>
      </h1>
      <p className="mt-3 transition-[opacity,transform] duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] starting:translate-y-[1.75rem] starting:opacity-0 delay-320 font-heading text-[1.125rem] font-bold text-[var(--color-heading)] sm:text-[1.375rem] xl:mt-[0.5rem] xl:text-[1.3625rem] xl:leading-[1.875rem]">{thankYou.subtitle}</p>
      <p className="mx-auto mt-3 transition-[opacity,transform] duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] starting:translate-y-[1.75rem] starting:opacity-0 delay-440 max-w-[48.75rem] text-[0.96875rem] leading-[1.5] text-[var(--color-text)] sm:text-[1.125rem] sm:leading-[1.625rem] xl:mt-[0.5rem] xl:text-[1.06875rem]">
        {lines(thankYou.description).map((line, i) => (
          <span key={i} className="md:block">
            {line}{" "}
          </span>
        ))}
      </p>
      <div className="mt-7 flex transition-[opacity,transform] duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] starting:translate-y-[1.75rem] starting:opacity-0 delay-560 flex-col items-center justify-center gap-4 sm:flex-row sm:gap-[1.0625rem] xl:mt-[1.5rem]">
        <Button
          href={thankYou.primaryButtonUrl}
          label={thankYou.primaryButtonText}
          icon={thankYou.primaryButtonIcon}
          className="h-[3.5rem] w-full max-w-[16.6875rem] font-semibold"
        />
        <Button
          href={thankYou.secondaryButtonUrl}
          label={thankYou.secondaryButtonText}
          icon={thankYou.secondaryButtonIcon}
          variant="outline"
          className="h-[3.5rem] w-full max-w-[18.5rem] font-semibold"
        />
      </div>
    </div>
  );
};

const ThankYouPoints = ({ data }: { data: ThankYouData }) => {
  return (
    <ul className="mt-10 grid gap-y-7 rounded-[1rem] bg-[var(--color-bg-alt)] px-6 py-8 sm:grid-cols-2 xl:mt-[2rem] xl:grid-cols-4 xl:px-0 xl:py-[2.3125rem]">
      {data.points.map((point, i) => (
        <Reveal
          as="li"
          key={point.id}
          delay={i * 110}
          className={`group flex items-center gap-5 xl:gap-[1.4375rem] xl:pl-[2.0625rem] ${i > 0 ? "xl:border-l xl:border-[var(--color-primary-10)]" : ""}`}
        >
          <span className="grid size-[4.375rem] shrink-0 place-items-center rounded-full bg-[var(--color-bg-subtle)] text-[var(--color-primary)] transition-all duration-300 group-hover:scale-110 group-hover:bg-[var(--color-primary)] group-hover:text-[var(--color-white)] xl:size-[4.75rem]">
            <Icon name={point.icon} className="size-[2.375rem] xl:size-[2.75rem]" />
          </span>
          <span>
            <span className="block font-heading text-[1.03125rem] font-bold text-[var(--color-heading)] xl:text-[0.95rem]">{point.title}</span>
            <span className="mt-1 block text-[0.9375rem] leading-[1.40625rem] text-[var(--color-text)] xl:text-[0.91875rem]">
              {lines(point.description).map((line, j) => (
                <span key={j} className="block">
                  {line}
                </span>
              ))}
            </span>
          </span>
        </Reveal>
      ))}
    </ul>
  );
};

export const ThankYou = ({ data }: ThankYouProps) => {
  if (!data) return null;
  return (
    <section data-section-pad className="mx-auto w-full max-w-[90rem] px-5 sm:px-8 py-12 sm:py-14 xl:py-16 [[data-section-pad]+&]:pt-0 xl:px-[5rem]">
      <ThankYouMessage data={data} />
      <ThankYouPoints data={data} />
    </section>
  );
};
