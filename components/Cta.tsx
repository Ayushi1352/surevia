import Image from "next/image";
import Button from "./Button";
import Loop from "./Loop";
import Reveal from "./Reveal";
import data from "@/data";

const { cta } = data;

export default function Cta() {
  return (
    <section className="relative overflow-hidden bg-plum">
      {/* The photo already carries the maroon tint; it is pinned to the 1440 frame so it lines up with the text */}
      <div className="absolute inset-y-0 left-1/2 w-full max-w-[90rem] -translate-x-1/2">
        <div className="absolute inset-y-0 right-0 w-full opacity-30 lg:w-[58.5%] lg:opacity-100 lg:[mask-image:linear-gradient(to_right,transparent,#000_9%,#000_90%,transparent)]">
          <Image src={cta.image} alt="" fill sizes="(min-width: 1024px) 843px, 100vw" quality={90} className="object-cover object-left" />
        </div>
      </div>
      <Loop effect="float">
        <span className="absolute -top-[15rem] left-[8%] hidden h-[20.625rem] w-[38.75rem] rounded-[50%] bg-primary/35 lg:block" />
      </Loop>
      <Loop effect="float" delay={-2500}>
        <span className="absolute -bottom-[13.125rem] -left-[7.5rem] size-[23.75rem] rounded-full bg-primary/35" />
      </Loop>

      {/* Button sits under the text, in the section's bottom-left corner */}
      <div className="mx-auto w-full max-w-[90rem] px-5 sm:px-8 relative flex min-h-[20rem] flex-col items-start justify-center gap-8 py-12 xl:min-h-[23.3125rem] xl:gap-[1.75rem] xl:py-[3rem] xl:pr-[3.5rem] xl:pl-[3.875rem]">
        <Reveal effect="left">
          <p className="flex items-center gap-4 font-heading text-[1rem] font-medium text-white xl:gap-[1.0625rem] xl:text-[1.29375rem]">
            <span className="h-[0.125rem] w-[2.0625rem] shrink-0 bg-white" />
            {cta.eyebrow}
          </p>
          <h2 className="mt-3 font-heading text-[2.375rem] leading-[1.1] font-extrabold text-white sm:text-[3rem] xl:mt-[0.5rem] xl:text-[3.51875rem] xl:leading-[3.8125rem]">
            {cta.title[0]}
            <br />
            <span className="text-[#ffe3ee]">{cta.title[1]}</span>
          </h2>
          <p className="mt-4 max-w-[36.875rem] xl:max-w-[36.25rem] font-heading text-[1.0625rem] font-medium leading-[1.45] text-white xl:mt-[0.625rem] xl:text-[1.3875rem] xl:leading-[1.875rem] xl:tracking-[0.02em]">
            {cta.text}
          </p>
        </Reveal>
        <Reveal effect="left" delay={150}>
          <Button
            href={cta.button.href}
            label={cta.button.label}
            variant="white"
            className="font-semibold xl:h-[3.75rem] xl:w-[13.5625rem] xl:px-0 xl:text-[1.09375rem]"
          />
        </Reveal>
      </div>
    </section>
  );
}
