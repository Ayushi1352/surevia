import Image from "next/image";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import SectionTitle, { Accent } from "@/components/SectionTitle";
import data from "@/data";

const { whyChooseUs: why } = data;

export default function WhyChooseUs() {
  return (
    <section className="mx-auto grid w-full max-w-[1440px] items-start gap-10 section-pad lg:grid-cols-[360px_1fr] lg:gap-8 lg:max-xl:items-stretch xl:grid-cols-[516px_1fr] xl:gap-[36px]">
      <Reveal effect="left" className="group relative mx-5 aspect-[604/841] max-h-[560px] overflow-hidden rounded-[12px] sm:mx-8 md:max-lg:mx-auto md:max-lg:max-h-none md:max-lg:w-full md:max-lg:max-w-[480px] lg:mx-0 lg:max-h-none lg:max-xl:aspect-auto lg:max-xl:rounded-l-none xl:rounded-none">
        <Image
          src={why.image}
          alt={why.imageAlt}
          fill
          sizes="(min-width: 1280px) 516px, (min-width: 1024px) 360px, 100vw"
          className="object-cover object-top transition-transform duration-1000 group-hover:scale-105"
        />
      </Reveal>

      <Reveal effect="right" className="px-5 sm:px-8 lg:pl-0 xl:px-0 xl:pt-[49px] xl:pr-[20px]">
        <SectionTitle eyebrow={why.eyebrow} text={why.text} className="max-w-[640px]">
          {why.title} <br className="hidden sm:block" />
          {why.titleLine2} <Accent>{why.highlight}</Accent>
        </SectionTitle>

        <ul className="mt-6 grid gap-x-[19px] gap-y-[17px] sm:grid-cols-2 xl:mt-[30px] xl:grid-cols-3">
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
      </Reveal>
    </section>
  );
}
