import Image from "next/image";
import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionTitle, { Accent } from "./SectionTitle";
import Slider from "./Slider";
import data from "@/data";

const { testimonials } = data;

export default function Testimonials() {
  return (
    <section data-section-pad className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 xl:px-[60px] py-12 sm:py-14 xl:py-16 [[data-section-pad]+&]:pt-0">
      <Reveal>
        <Slider
          className="gap-[18px]"
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
              className="relative flex shrink-0 basis-full snap-start flex-col gap-5 group rounded-[12px] bg-white p-[22px] shadow-[0_4px_22px_color-mix(in_srgb,var(--color-plum)_8%,transparent)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_8px_30px_rgba(60,20,40,0.14)] sm:flex-row sm:gap-[23px] lg:basis-[calc((100%-18px)/2)] xl:min-h-[255px] xl:basis-[calc((100%-36px)/3)] xl:pt-[27px] xl:pb-[20px]"
            >
              <span
                aria-hidden="true"
                className="absolute top-[4px] right-[12px] font-heading text-[84px] leading-none font-extrabold text-rose transition-colors duration-300 group-hover:text-primary/25"
              >
                ”
              </span>
              <Image
                src={t.image}
                alt={t.name}
                width={308}
                height={366}
                className="h-[158px] w-[134px] shrink-0 rounded-[16px] object-cover lg:max-xl:h-auto lg:max-xl:min-h-[158px] lg:max-xl:self-stretch"
              />
              <div className="relative flex flex-1 flex-col pt-1">
                <p className="pr-3 text-[14.5px] leading-[20px] text-body xl:max-w-[218px] xl:pr-0 xl:text-[13.5px]">{t.quote}</p>
                <span className="mt-3 block h-[2px] w-[26px] bg-primary xl:mt-[11px]" />
                <div className="mt-3 flex flex-wrap items-center justify-between gap-2 xl:mt-[10px] xl:pr-[7px]">
                  <p className="text-[15.5px] font-semibold text-ink xl:text-[14.4px]">{t.name}</p>
                  <p className="flex gap-0 text-[#f9b202]" aria-label={data.site.labels.rating.replace("{rating}", String(t.rating))}>
                    {Array.from({ length: t.rating }, (_, i) => (
                      <Icon key={i} name="star-solid" className="size-[18px] transition-transform duration-300 group-hover:scale-110" />
                    ))}
                  </p>
                </div>
                <p className="text-[13px] leading-[18px] text-body">{t.city}</p>
              </div>
            </article>
          ))}
        </Slider>
      </Reveal>
    </section>
  );
}
