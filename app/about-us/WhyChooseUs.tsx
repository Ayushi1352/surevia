import Image from "next/image";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import SectionTitle, { Accent } from "@/components/SectionTitle";
import data from "@/data";

const { whyChooseUs: why } = data;

export default function WhyChooseUs() {
  return (
    <section className="mx-auto grid w-full max-w-[1440px] items-start gap-10 section-pad xl:grid-cols-[516px_1fr] xl:gap-[36px]">
      <Reveal effect="left" className="group relative mx-5 aspect-[604/841] max-h-[560px] overflow-hidden rounded-[12px] sm:mx-8 xl:mx-0 xl:max-h-none xl:rounded-none">
        <Image
          src={why.image}
          alt={why.imageAlt}
          fill
          sizes="(min-width: 1280px) 516px, 100vw"
          className="object-cover object-top transition-transform duration-1000 group-hover:scale-105"
        />
      </Reveal>

      <Reveal effect="right" className="px-5 sm:px-8 xl:px-0 xl:pt-[49px] xl:pr-[20px]">
        <SectionTitle
          eyebrow={why.eyebrow}
          size="lg"
          className="[&_h2]:xl:mt-[6px] [&_h2]:xl:text-[44.7px] [&_h2]:xl:leading-[52px] [&>p]:xl:gap-[11px] [&>p]:xl:text-[16px] [&>p>span]:xl:w-[52px]"
        >
          {why.title} <br className="hidden sm:block" />
          {why.titleLine2} <Accent>{why.highlight}</Accent>
        </SectionTitle>
        <p className="mt-3 max-w-[640px] text-[15px] leading-[1.5] text-body xl:mt-[8px] xl:text-[17.3px] xl:leading-[23px]">{why.text}</p>

        <ul className="mt-6 grid gap-x-[19px] gap-y-[17px] sm:grid-cols-2 lg:grid-cols-3 xl:mt-[30px]">
          {why.items.map((item) => (
            <li key={item.title.join(" ")} className="group rounded-[12px] bg-white px-[16px] pt-[13px] pb-[17px] shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(60,20,40,0.14)]">
              <div className="flex items-center gap-[14px]">
                <span className="grid size-[63px] shrink-0 place-items-center rounded-full bg-rose text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                  <Icon name={item.icon} className="size-[35px]" strokeWidth={1.5} />
                </span>
                <h3 className="text-[16.5px] leading-[24px] font-semibold text-ink transition-colors duration-300 group-hover:text-primary">
                  {item.title.map((l) => (
                    <span key={l} className="block">
                      {l}
                    </span>
                  ))}
                </h3>
              </div>
              <p className="mt-[6px] pl-px text-[14.7px] leading-[21px] text-body">
                {item.text.map((l) => (
                  <span key={l} className="xl:block">
                    {l}{" "}
                  </span>
                ))}
              </p>
            </li>
          ))}
        </ul>

        <Button href={why.button.href} label={why.button.label} className="mt-7 xl:mt-[20px] xl:h-[50px] xl:w-[212px] xl:px-0 xl:text-[15.8px]" />
      </Reveal>
    </section>
  );
}
