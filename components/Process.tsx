import Button from "./Button";
import Icon from "./Icon";
import SectionTitle, { Accent } from "./SectionTitle";
import data from "@/data";

const { process } = data;

export default function Process() {
  return (
    <section className="wrap section-pad grid items-center gap-12 xl:grid-cols-[466px_1fr] xl:gap-0">
      <div>
        <SectionTitle eyebrow={process.eyebrow} className="[&_h2]:xl:text-[35.7px] [&_h2]:xl:leading-[42px] [&_h2]:xl:whitespace-nowrap [&>p:first-child]:xl:gap-[14px] [&>p:first-child]:xl:text-[15.5px] [&>p:first-child>span]:xl:w-[29px]">
          {process.title} <br className="hidden sm:block" />
          <Accent>{process.highlight}</Accent>
        </SectionTitle>
        <p className="mt-3 max-w-[440px] font-heading text-[15px] leading-[1.5] font-medium text-body xl:text-[16.2px] xl:leading-[24.5px]">
          {process.text}
        </p>
        <Button href={process.button.href} label={process.button.label} className="mt-6 xl:h-[48px] xl:w-[193px] xl:px-0 xl:text-[16.5px]" />
      </div>

      <ol className="grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-[24px]">
        {process.steps.map((step, i) => (
          <li key={step.title} className="relative pt-[62px]">
            <div className="h-full rounded-[12px] bg-white px-4 pt-[76px] pb-7 text-center shadow-card">
              <h3 className="font-heading text-[16px] font-bold text-ink xl:whitespace-nowrap">{step.title}</h3>
              <p className="mx-auto mt-2.5 max-w-[190px] text-[14px] leading-[20.5px] text-body">
                {step.text.map((l) => (
                  <span key={l} className="xl:block">
                    {l}{" "}
                  </span>
                ))}
              </p>
            </div>
            <span className="absolute top-0 left-1/2 grid size-[124px] -translate-x-1/2 place-items-center rounded-full border border-rose bg-white">
              <span className="grid size-[104px] place-items-center rounded-full bg-gradient-to-b from-blush to-rose text-primary">
                <Icon name={step.icon} className="size-[54px]" strokeWidth={1.35} />
              </span>
              <span className="absolute -bottom-[3px] left-1/2 grid size-[32px] -translate-x-1/2 place-items-center rounded-full bg-primary text-[13px] font-semibold text-white ring-2 ring-white">
                {String(i + 1).padStart(2, "0")}
              </span>
            </span>
            {i < process.steps.length - 1 && (
              <span className="absolute top-[52px] left-[calc(50%+74px)] hidden items-center text-primary lg:flex">
                <span className="w-[30px] border-t border-dashed border-primary/50" />
                <Icon name="arrow-right" className="-ml-1 size-[18px]" strokeWidth={2} />
              </span>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
