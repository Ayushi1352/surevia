import { Fragment } from "react";
import Icon from "./Icon";
import Reveal from "./Reveal";
import data from "@/data";

// Left inset of each stat after its divider, matching the uneven spacing of the design.
const insets = ["", "xl:pl-[55px]", "xl:pl-[44px]", "xl:pl-[43px]"];

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-plum">
      <span className="absolute -top-[150px] -left-[110px] size-[280px] animate-float rounded-full bg-white/[0.04]" />
      <span className="absolute -right-[80px] -bottom-[200px] size-[380px] animate-float rounded-full bg-white/[0.04]" />
      <ul className="wrap relative grid grid-cols-1 gap-y-8 py-10 sm:grid-cols-2 md:max-lg:max-w-[640px] lg:grid-cols-4 lg:gap-x-3 xl:h-[167px] xl:gap-x-0 xl:grid-cols-[304px_1px_332px_1px_336px_1px_1fr] xl:items-center xl:py-0 xl:pr-0 xl:pl-[86px]">
        {data.stats.map((stat, i) => (
          <Fragment key={stat.label}>
            {i > 0 && <li aria-hidden="true" className="hidden h-[82px] w-px bg-white/30 xl:block" />}
            <Reveal as="li" effect="zoom" delay={i * 120} className={`group flex items-center gap-5 lg:gap-3 xl:gap-[25px] ${insets[i] ?? ""}`}>
              <span className="relative grid size-[76px] shrink-0 place-items-center rounded-full bg-primary text-white transition-colors duration-300 group-hover:bg-white group-hover:text-primary lg:size-[64px] xl:size-[86px]">
                <span className="absolute -inset-[5px] -rotate-45 animate-spin-slow rounded-full border border-white/50 border-r-transparent border-b-transparent" />
                <Icon name={stat.icon} className="size-[44px] transition-transform duration-300 group-hover:scale-110 lg:size-[38px] xl:size-[54px]" strokeWidth={1.25} />
              </span>
              <span className="text-white">
                <span className="block text-[38px] leading-none font-bold lg:text-[32px] xl:text-[45px]">{stat.value}</span>
                <span className="mt-1.5 block text-[16px] whitespace-nowrap lg:text-[14.5px] xl:mt-[5px] xl:text-[17.2px]">{stat.label}</span>
              </span>
            </Reveal>
          </Fragment>
        ))}
      </ul>
    </section>
  );
}
