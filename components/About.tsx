import AboutVisual from "./AboutVisual";
import Button from "./Button";
import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionTitle, { Accent } from "./SectionTitle";
import data from "@/data";

const { about } = data;

export default function About() {
  return (
    <section className="wrap section-pad grid items-center gap-10 lg:grid-cols-[1fr_1.08fr] xl:grid-cols-[1fr_716px] xl:gap-0 xl:pr-[45px] xl:pl-[110px]">
      <Reveal effect="left">
        <SectionTitle eyebrow={about.eyebrow} size="lg">
          {about.title} <br className="hidden sm:block" />
          <Accent>{about.highlight}</Accent>
        </SectionTitle>
        <p className="mt-5 max-w-[538px] font-heading text-[15px] leading-[1.5] font-medium text-body xl:mt-[16px] xl:text-[16.9px] xl:leading-[24px]">
          {about.homeText}
        </p>

        <div className="mt-6 flex h-[90px] w-full max-w-[414px] items-center rounded-[14px] bg-blush px-6 xl:mt-[20px] xl:h-[91px] xl:px-[34px]">
          <span className="text-[52px] leading-none font-bold tracking-[-0.02em] text-primary xl:text-[73px]">
            {about.experience.value}
          </span>
          <span className="mx-6 h-[50px] w-[2px] bg-primary/80 xl:mr-[34px] xl:ml-[24px]" />
          <span className="font-heading text-[18px] leading-[26px] font-medium text-ink xl:text-[20px]">
            {about.experience.label.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
          </span>
        </div>

        <ul className="mt-5 space-y-4 xl:mt-[15px] xl:space-y-[14px]">
          {about.points.map((p) => (
            <li key={p.title} className="group flex items-center gap-5 xl:gap-[24px]">
              <span className="grid size-[64px] shrink-0 place-items-center rounded-full bg-primary text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-rose group-hover:text-primary xl:size-[72px]">
                <Icon name={p.icon} className="size-[32px] transition-transform duration-300 group-hover:-rotate-6 xl:size-[38px]" strokeWidth={1.5} />
              </span>
              <span>
                <span className="block font-heading text-[17px] font-bold text-ink transition-colors duration-300 group-hover:text-primary xl:text-[18.1px]">{p.title}</span>
                <span className="mt-0.5 block max-w-[270px] font-heading text-[14.5px] leading-[22px] font-medium text-body xl:text-[15px]">
                  {p.text}
                </span>
              </span>
            </li>
          ))}
        </ul>

        <Button href={about.button.href} label={about.button.label} className="mt-6 xl:mt-[16px] xl:h-[45px] xl:w-[180px] xl:px-0 xl:text-[16px]" />
      </Reveal>

      <AboutVisual />
    </section>
  );
}
