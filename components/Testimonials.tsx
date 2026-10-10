import Image from "next/image";
import Icon from "./Icon";
import SectionTitle, { Accent } from "./SectionTitle";
import Slider from "./Slider";
import data from "@/data";

const { testimonials } = data;

export default function Testimonials() {
  return (
    <section className="wrap section-pad xl:px-[56px]">
      <Slider
        className="gap-[18px]"
        header={
          <SectionTitle eyebrow={testimonials.eyebrow} text={testimonials.text} className="mb-5 xl:mb-[10px] [&_h2]:xl:mt-[9px] [&>p:first-child]:xl:text-[15.5px] [&>p:last-child]:xl:mt-[6px]">
            {testimonials.title} <Accent>{testimonials.highlight}</Accent>
          </SectionTitle>
        }
      >
        {testimonials.items.map((t) => (
          <article
            key={t.name}
            className="relative flex shrink-0 basis-full snap-start flex-col gap-5 rounded-[12px] bg-white p-[22px] shadow-card sm:flex-row sm:gap-[23px] md:basis-[calc((100%-18px)/2)] xl:min-h-[255px] xl:basis-[calc((100%-36px)/3)] xl:pt-[27px] xl:pb-[20px]"
          >
            <span
              aria-hidden="true"
              className="absolute top-[4px] right-[12px] font-heading text-[84px] leading-none font-extrabold text-rose"
            >
              ”
            </span>
            <Image
              src={t.image}
              alt={t.name}
              width={308}
              height={366}
              className="h-[158px] w-[134px] shrink-0 rounded-[16px] object-cover"
            />
            <div className="relative flex flex-1 flex-col pt-1">
              <p className="pr-3 text-[14.5px] leading-[20px] text-body xl:max-w-[218px] xl:pr-0 xl:text-[13.5px]">{t.quote}</p>
              <span className="mt-3 block h-[2px] w-[26px] bg-primary xl:mt-[11px]" />
              <div className="mt-3 flex flex-wrap items-center justify-between gap-2 xl:mt-[10px] xl:pr-[7px]">
                <p className="text-[15.5px] font-semibold text-ink xl:text-[14.4px]">{t.name}</p>
                <p className="flex gap-0 text-[#f9b202]" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: t.rating }, (_, i) => (
                    <Icon key={i} name="star-solid" className="size-[18px]" />
                  ))}
                </p>
              </div>
              <p className="text-[13px] leading-[18px] text-body">{t.city}</p>
            </div>
          </article>
        ))}
      </Slider>
    </section>
  );
}
