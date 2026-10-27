import Image from "next/image";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import SectionTitle, { Accent } from "@/components/SectionTitle";
import data from "@/data";

const { whyChooseUs: why } = data;

export default function WhyChooseUs() {
  return (
    <section data-section-pad className="mx-auto grid w-full max-w-[90rem] items-start gap-10 py-12 sm:py-14 xl:py-16 [[data-section-pad]+&]:pt-0 lg:grid-cols-[22.5rem_1fr] lg:gap-8 lg:max-xl:items-stretch xl:grid-cols-[32.25rem_1fr] xl:gap-[2.25rem]">
      <Reveal effect="left" className="group relative mx-5 aspect-[604/841] max-h-[35rem] overflow-hidden rounded-[0.75rem] sm:mx-8 md:max-lg:mx-auto md:max-lg:max-h-none md:max-lg:w-full md:max-lg:max-w-[30rem] lg:mx-0 lg:max-h-none lg:max-xl:aspect-auto lg:max-xl:rounded-l-none xl:rounded-none">
        <Image
          src={why.image}
          alt={why.imageAlt}
          fill
          sizes="(min-width: 1280px) 516px, (min-width: 1024px) 360px, 100vw"
          className="object-cover object-top transition-transform duration-1000 group-hover:scale-105"
        />
      </Reveal>

      <Reveal effect="right" className="px-5 sm:px-8 lg:pl-0 xl:px-0 xl:pt-[3.0625rem] xl:pr-[1.25rem]">
        <SectionTitle eyebrow={why.eyebrow} text={why.text} className="max-w-[40rem]">
          {why.title} <br className="hidden sm:block" />
          {why.titleLine2} <Accent>{why.highlight}</Accent>
        </SectionTitle>

        <ul className="mt-6 grid gap-x-[1.1875rem] gap-y-[1.0625rem] sm:grid-cols-2 xl:mt-[1.875rem] xl:grid-cols-3">
          {why.items.map((item) => (
            <li key={item.title.join(" ")} className="group rounded-[0.75rem] bg-white px-[1rem] pt-[0.8125rem] pb-[1.0625rem] shadow-[0_0.25rem_1.375rem_color-mix(in_srgb,var(--color-plum)_8%,transparent)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0.5rem_1.875rem_rgba(60,20,40,0.14)]">
              <div className="flex items-center gap-[0.875rem]">
                <span className="grid size-[3.9375rem] shrink-0 place-items-center rounded-full bg-rose text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                  <Icon name={item.icon} className="size-[2.1875rem]" strokeWidth={1.5} />
                </span>
                <h3 className="text-[1.03125rem] leading-[1.5rem] font-semibold text-ink transition-colors duration-300 group-hover:text-primary">
                  {item.title.map((l) => (
                    <span key={l} className="block">
                      {l}
                    </span>
                  ))}
                </h3>
              </div>
              <p className="mt-[0.375rem] pl-px text-[0.91875rem] leading-[1.3125rem] text-body">
                {item.text.map((l) => (
                  <span key={l} className="xl:block">
                    {l}{" "}
                  </span>
                ))}
              </p>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
