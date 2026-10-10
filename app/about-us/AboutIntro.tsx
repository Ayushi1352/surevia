import AboutVisual from "@/components/AboutVisual";
import Reveal from "@/components/Reveal";
import SectionTitle, { Accent } from "@/components/SectionTitle";
import data from "@/data";

const { about } = data;

export default function AboutIntro() {
  return (
    <section className="wrap section-pad grid items-start gap-10 lg:grid-cols-[1fr_1.08fr] lg:max-xl:items-center lg:max-xl:gap-8 xl:grid-cols-[1fr_716px] xl:gap-0 xl:pr-[45px] xl:pl-[110px]">
      <Reveal effect="left" className="xl:pt-[33px]">
        <SectionTitle eyebrow={about.eyebrow} size="lg">
          {about.title} <br className="hidden sm:block" />
          <Accent>{about.highlight}</Accent>
        </SectionTitle>
        <div className="mt-5 max-w-[538px] space-y-[17px] md:max-lg:max-w-none font-heading text-[15px] leading-[1.5] font-medium text-body xl:mt-[16px] xl:text-[16.9px] xl:leading-[24px]">
          {about.pageParagraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </Reveal>
      <AboutVisual className="md:max-lg:max-w-[540px]" />
    </section>
  );
}
