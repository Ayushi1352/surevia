import Image from "next/image";
import Button from "./Button";
import Reveal from "./Reveal";
import data from "@/data";

const { cta } = data;

export default function Cta() {
  return (
    <section className="relative overflow-hidden bg-plum">
      {/* The photo already carries the maroon tint; it is pinned to the 1440 frame so it lines up with the text */}
      <div className="absolute inset-y-0 left-1/2 w-full max-w-[1440px] -translate-x-1/2">
        <div className="absolute inset-y-0 right-0 w-full opacity-30 lg:w-[58.5%] lg:opacity-100 lg:[mask-image:linear-gradient(to_right,transparent,#000_9%,#000_90%,transparent)]">
          <Image src={cta.image} alt="" fill sizes="(min-width: 1024px) 843px, 100vw" quality={90} className="object-cover object-left" />
        </div>
      </div>
      <span className="absolute -top-[240px] left-[8%] hidden h-[330px] w-[620px] animate-float rounded-[50%] bg-[#8f1545]/35 lg:block" />
      <span className="absolute -bottom-[210px] -left-[120px] size-[380px] animate-float rounded-full [animation-delay:-2.5s] bg-[#8f1545]/35" />

      {/* Button sits under the text, in the section's bottom-left corner */}
      <div className="wrap relative flex min-h-[320px] flex-col items-start justify-center gap-8 py-12 xl:min-h-[373px] xl:gap-[28px] xl:py-[48px] xl:pr-[56px] xl:pl-[62px]">
        <Reveal effect="left">
          <p className="flex items-center gap-4 font-heading text-[16px] font-medium text-white xl:gap-[17px] xl:text-[20.7px]">
            <span className="h-[2px] w-[33px] shrink-0 bg-white" />
            {cta.eyebrow}
          </p>
          <h2 className="mt-3 font-heading text-[38px] leading-[1.1] font-extrabold text-white sm:text-[48px] xl:mt-[8px] xl:text-[56.3px] xl:leading-[61px]">
            {cta.title[0]}
            <br />
            <span className="text-[#ffe3ee]">{cta.title[1]}</span>
          </h2>
          <p className="mt-4 max-w-[590px] xl:max-w-[580px] font-heading text-[17px] font-medium leading-[1.45] text-white xl:mt-[10px] xl:text-[22.2px] xl:leading-[30px] xl:tracking-[0.02em]">
            {cta.text}
          </p>
        </Reveal>
        <Reveal effect="left" delay={150}>
          <Button
            href={cta.button.href}
            label={cta.button.label}
            variant="white"
            className="font-semibold xl:h-[60px] xl:w-[217px] xl:px-0 xl:text-[17.5px]"
          />
        </Reveal>
      </div>
    </section>
  );
}
