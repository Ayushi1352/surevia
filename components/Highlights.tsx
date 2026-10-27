import Icon from "./Icon";
import Reveal from "./Reveal";
import data from "@/data";

export default function Highlights() {
  return (
    <section data-section-pad className="mx-auto w-full max-w-[90rem] px-5 sm:px-8 py-12 sm:py-14 xl:py-16 [[data-section-pad]+&]:pt-0 xl:px-[4.5rem]">
      <ul className="grid grid-cols-2 gap-y-8 rounded-[1.125rem] bg-blush px-3 py-7 sm:grid-cols-3 xl:grid-cols-6 xl:px-0 xl:pt-[1.6875rem] xl:pb-[2.0625rem]">
        {data.highlights.map((item, i) => (
          <Reveal as="li" key={item.title} delay={i * 90} className="group relative px-2 text-center">
            {i > 0 && <span className="absolute top-[2.5rem] left-0 hidden h-[3.625rem] w-px bg-primary/15 xl:block" />}
            <span className="mx-auto grid size-[4rem] place-items-center rounded-full bg-rose text-primary transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_0.5rem_1.125rem_color-mix(in_srgb,var(--color-primary)_30%,transparent)] xl:size-[4.6875rem]">
              <Icon name={item.icon} className="size-[2.125rem] transition-transform duration-300 group-hover:scale-110 xl:size-[2.625rem]" strokeWidth={1.5} />
            </span>
            <p className="mt-3 text-[0.9375rem] leading-[1.3125rem] font-semibold text-ink transition-colors duration-300 group-hover:text-primary xl:mt-[0.1875rem] xl:text-[0.96875rem]">{item.title}</p>
            <p className="text-[0.875rem] leading-[1.3125rem] text-ink/80 xl:text-[0.9375rem]">{item.text}</p>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
