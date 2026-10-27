import Image from "next/image";
import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionTitle, { Accent } from "./SectionTitle";
import Slider from "./Slider";
import data from "@/data";

const { testimonials } = data;

export default function Testimonials() {
  return (
    <section data-section-pad className="mx-auto w-full max-w-[90rem] px-5 sm:px-8 xl:px-[3.75rem] py-12 sm:py-14 xl:py-16 [[data-section-pad]+&]:pt-0">
      <Reveal>
        <Slider
          className="gap-[1.125rem]"
          autoplay={5000}
          header={
            <SectionTitle eyebrow={testimonials.eyebrow} text={testimonials.text} className="mb-6">
              {testimonials.title} <Accent>{testimonials.highlight}</Accent>
            </SectionTitle>
          }
        >
          {testimonials.items.map((t) => (
            <article
              key={t.name}
              className="relative flex shrink-0 basis-full snap-start flex-col gap-5 group rounded-[0.75rem] bg-white p-[1.375rem] shadow-[0_0.25rem_1.375rem_color-mix(in_srgb,var(--color-plum)_8%,transparent)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_0.5rem_1.875rem_rgba(60,20,40,0.14)] sm:flex-row sm:gap-[1.4375rem] lg:basis-[calc((100%-1.125rem)/2)] xl:min-h-[15.9375rem] xl:basis-[calc((100%-2.25rem)/3)] xl:pt-[1.6875rem] xl:pb-[1.25rem]"
            >
              <span
                aria-hidden="true"
                className="absolute top-[0.25rem] right-[0.75rem] font-heading text-[5.25rem] leading-none font-extrabold text-rose transition-colors duration-300 group-hover:text-primary/25"
              >
                ”
              </span>
              <Image
                src={t.image}
                alt={t.name}
                width={308}
                height={366}
                className="h-[9.875rem] w-[8.375rem] shrink-0 rounded-[1rem] object-cover lg:max-xl:h-auto lg:max-xl:min-h-[9.875rem] lg:max-xl:self-stretch"
              />
              <div className="relative flex flex-1 flex-col pt-1">
                <p className="pr-3 text-[0.90625rem] leading-[1.25rem] text-body xl:max-w-[13.625rem] xl:pr-0 xl:text-[0.84375rem]">{t.quote}</p>
                <span className="mt-3 block h-[0.125rem] w-[1.625rem] bg-primary xl:mt-[0.6875rem]" />
                <div className="mt-3 flex flex-wrap items-center justify-between gap-2 xl:mt-[0.625rem] xl:pr-[0.4375rem]">
                  <p className="text-[0.96875rem] font-semibold text-ink xl:text-[0.9rem]">{t.name}</p>
                  <p className="flex gap-0 text-[#f9b202]" aria-label={data.site.labels.rating.replace("{rating}", String(t.rating))}>
                    {Array.from({ length: t.rating }, (_, i) => (
                      <Icon key={i} name="star-solid" className="size-[1.125rem] transition-transform duration-300 group-hover:scale-110" />
                    ))}
                  </p>
                </div>
                <p className="text-[0.8125rem] leading-[1.125rem] text-body">{t.city}</p>
              </div>
            </article>
          ))}
        </Slider>
      </Reveal>
    </section>
  );
}
