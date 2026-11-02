import { Button } from "@/components/ui/Button";
import { Loop } from "@/components/ui/Loop";
import { Accent } from "@/components/ui/SectionTitle";
import type { ThankYouPageData } from "@/types/templates.types";

// Burst marks around the tick: [x1, y1, x2, y2, faded]
const sparks: [number, number, number, number, boolean][] = [
  [52, 43, 64, 56, false],
  [28, 84, 44, 92, true],
  [16, 130, 34, 134, false],
  [308, 56, 320, 43, false],
  [328, 92, 344, 84, true],
  [338, 134, 356, 130, false],
];

export const ThankYou = ({ data: thankYou }: { data?: ThankYouPageData }) => {
  if (!thankYou) return null;
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
        {thankYou.description.map((l) => (
          <span key={l} className="md:block">
            {l}{" "}
          </span>
        ))}
      </p>
      <div className="mt-7 flex transition-[opacity,transform] duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] starting:translate-y-[1.75rem] starting:opacity-0 delay-560 flex-col items-center justify-center gap-4 sm:flex-row sm:gap-[1.0625rem] xl:mt-[1.5rem]">
        <Button
          href={thankYou.primaryButtonUrl}
          label={thankYou.primaryButtonText}
          className="h-[3.5rem] w-full max-w-[16.6875rem] font-semibold"
        />
        <Button
          href={thankYou.secondaryButtonUrl}
          label={thankYou.secondaryButtonText}
          variant="outline"
          className="h-[3.5rem] w-full max-w-[18.5rem] font-semibold"
        />
      </div>
    </div>
  );
};
