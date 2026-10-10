import { Fragment } from "react";
import Icon from "./Icon";
import data from "@/data";

// Left inset of each stat after its divider, matching the uneven spacing of the design.
const insets = ["", "xl:pl-[55px]", "xl:pl-[44px]", "xl:pl-[43px]"];

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-plum">
      <span className="absolute -top-[150px] -left-[110px] size-[280px] rounded-full bg-white/[0.04]" />
      <span className="absolute -right-[80px] -bottom-[200px] size-[380px] rounded-full bg-white/[0.04]" />
      <ul className="wrap relative grid grid-cols-1 gap-y-8 py-10 sm:grid-cols-2 xl:h-[167px] xl:grid-cols-[304px_1px_332px_1px_336px_1px_1fr] xl:items-center xl:py-0 xl:pr-0 xl:pl-[86px]">
        {data.stats.map((stat, i) => (
          <Fragment key={stat.label}>
            {i > 0 && <li aria-hidden="true" className="hidden h-[82px] w-px bg-white/30 xl:block" />}
            <li className={`flex items-center gap-5 xl:gap-[25px] ${insets[i] ?? ""}`}>
              <span className="relative grid size-[76px] shrink-0 place-items-center rounded-full bg-primary text-white xl:size-[86px]">
                <span className="absolute -inset-[5px] -rotate-45 rounded-full border border-white/50 border-r-transparent border-b-transparent" />
                <Icon name={stat.icon} className="size-[44px] xl:size-[54px]" strokeWidth={1.25} />
              </span>
              <span className="text-white">
                <span className="block text-[38px] leading-none font-bold xl:text-[45px]">{stat.value}</span>
                <span className="mt-1.5 block text-[16px] whitespace-nowrap xl:mt-[5px] xl:text-[17.2px]">{stat.label}</span>
              </span>
            </li>
          </Fragment>
        ))}
      </ul>
    </section>
  );
}
