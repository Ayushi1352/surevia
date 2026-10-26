import { Fragment } from "react";
import CountUp from "./CountUp";
import Icon from "./Icon";
import Loop from "./Loop";
import Reveal from "./Reveal";
import data from "@/data";

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-plum">
      <Loop effect="float">
        <span className="absolute -top-[150px] -left-[110px] size-[280px] rounded-full bg-white/[0.04]" />
      </Loop>
      <Loop effect="float">
        <span className="absolute -right-[80px] -bottom-[200px] size-[380px] rounded-full bg-white/[0.04]" />
      </Loop>
      {/* Equal columns so the last stat gets the same room as the others at every width */}
      <ul className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 xl:px-[60px] relative grid grid-cols-1 gap-y-8 py-10 sm:grid-cols-2 md:max-lg:max-w-[640px] lg:grid-cols-4 lg:gap-x-3 xl:h-[167px] xl:grid-cols-[1fr_1px_1fr_1px_1fr_1px_1fr] xl:items-center xl:gap-x-0 xl:py-0">
        {data.stats.map((stat, i) => (
          <Fragment key={stat.label}>
            {i > 0 && <li aria-hidden="true" className="hidden h-[82px] w-px bg-white/30 xl:block" />}
            <Reveal as="li" effect="zoom" delay={i * 120} className="group flex items-center gap-5 lg:gap-3 xl:justify-center xl:gap-[22px]">
              <span className="relative grid size-[76px] shrink-0 place-items-center rounded-full bg-primary text-white transition-colors duration-300 group-hover:bg-white group-hover:text-primary lg:size-[64px] xl:size-[80px]">
                <span className="absolute -inset-[5px] -rotate-45 animate-spin [animation-duration:9s] rounded-full border border-white/50 border-r-transparent border-b-transparent" />
                <Icon name={stat.icon} className="size-[44px] transition-transform duration-300 group-hover:scale-110 lg:size-[38px] xl:size-[48px]" strokeWidth={1.25} />
              </span>
              <span className="text-white">
                <CountUp value={stat.value} className="block text-[38px] leading-none font-bold whitespace-nowrap lg:text-[32px] xl:text-[42px]" />
                <span className="mt-1.5 block text-[16px] whitespace-nowrap lg:text-[14.5px] xl:mt-[5px] xl:text-[16.5px]">{stat.label}</span>
              </span>
            </Reveal>
          </Fragment>
        ))}
      </ul>
    </section>
  );
}
