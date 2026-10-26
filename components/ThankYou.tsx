import Button from "@/components/Button";
import Loop from "@/components/Loop";
import { Accent } from "@/components/SectionTitle";
import data from "@/data";

const { thankYou } = data;

// Burst marks around the tick: [x1, y1, x2, y2, faded]
const sparks: [number, number, number, number, boolean][] = [
  [52, 43, 64, 56, false],
  [28, 84, 44, 92, true],
  [16, 130, 34, 134, false],
  [308, 56, 320, 43, false],
  [328, 92, 344, 84, true],
  [338, 134, 356, 130, false],
];

export default function ThankYou() {
  return (
    <div className="text-center">
      <svg viewBox="0 0 372 186" aria-hidden="true" className="mx-auto h-auto w-[280px] transition-[opacity,scale] duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] starting:scale-50 starting:opacity-0 sm:w-[372px]">
        {sparks.map(([x1, y1, x2, y2, faded], i) => (
          <Loop key={`${x1}-${y1}`} effect="twinkle" delay={i * 250} svg>
            <line
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              className={faded ? "stroke-rose" : "stroke-primary"}
              strokeWidth="5"
              strokeLinecap="round"
            />
          </Loop>
        ))}
        <circle cx="186" cy="93" r="93" className="fill-rose" />
        <circle cx="186" cy="93" r="69" className="fill-primary" />
        <path
          d="M156 95l21 21 39-42"
          fill="none"
          stroke="#fff"
          strokeWidth="11"
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength={1}
          strokeDasharray={1}
          className="transition-[stroke-dashoffset] delay-500 duration-600 ease-out starting:[stroke-dashoffset:1]"
        />
      </svg>

      <h1 className="mt-3 transition-[opacity,translate] duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] starting:translate-y-[28px] starting:opacity-0 delay-200 font-heading text-[54px] leading-[1.1] font-extrabold tracking-[-0.02em] text-ink sm:text-[72px] xl:mt-[2px] xl:text-[76.6px]">
        {thankYou.title} <Accent>{thankYou.highlight}</Accent>
      </h1>
      <p className="mt-3 transition-[opacity,translate] duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] starting:translate-y-[28px] starting:opacity-0 delay-320 font-heading text-[18px] font-bold text-ink sm:text-[22px] xl:mt-[8px] xl:text-[21.8px] xl:leading-[30px]">{thankYou.subtitle}</p>
      <p className="mx-auto mt-3 transition-[opacity,translate] duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] starting:translate-y-[28px] starting:opacity-0 delay-440 max-w-[780px] text-[15.5px] leading-[1.5] text-body sm:text-[18px] sm:leading-[26px] xl:mt-[8px] xl:text-[17.1px]">
        {thankYou.text.map((l) => (
          <span key={l} className="md:block">
            {l}{" "}
          </span>
        ))}
      </p>
      <div className="mt-7 flex transition-[opacity,translate] duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] starting:translate-y-[28px] starting:opacity-0 delay-560 flex-col items-center justify-center gap-4 sm:flex-row sm:gap-[17px] xl:mt-[24px]">
        <Button
          href={thankYou.primaryButton.href}
          label={thankYou.primaryButton.label}
          className="h-[56px] w-full max-w-[267px] font-semibold"
        />
        <Button
          href={thankYou.secondaryButton.href}
          label={thankYou.secondaryButton.label}
          variant="outline"
          className="h-[56px] w-full max-w-[296px] font-semibold"
        />
      </div>
    </div>
  );
}
