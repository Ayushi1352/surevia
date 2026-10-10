"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Icon from "./Icon";
import data from "@/data";

const { slides } = data.hero;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const slide = slides[index];
  const go = (step: number) => setIndex((i) => (i + step + slides.length) % slides.length);

  return (
    // Height is capped to the viewport minus the sticky header so the whole banner shows without scrolling
    <section className="relative flex h-[min(520px,calc(100svh-72px))] min-h-[440px] items-center overflow-hidden bg-[#2b2b2e] sm:h-[min(580px,calc(100svh-72px))] md:h-[min(580px,calc(100svh-135px))] xl:h-[min(637px,calc(100svh-153px))]">
      {/* Photo is inset from the left so the family lands right of the headline, as in the design */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[79.7%] lg:[mask-image:linear-gradient(to_right,transparent,#000_20%)]">
        <Image
          key={slide.image}
          src={slide.image}
          alt=""
          fill
          preload
          quality={90}
          sizes="(min-width: 1024px) 80vw, 100vw"
          className="object-cover object-[50%_34%]"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#1c1b1f]/85 via-[#1c1b1f]/45 to-[#1c1b1f]/10" />

      <div className="wrap relative pt-14 pb-24 lg:py-16 xl:px-[57px] xl:pt-[68px] xl:pb-[50px]">
        <p className="flex items-center gap-4 font-display text-[16px] text-white xl:gap-[17px] xl:text-[19.7px]">
          <span className="h-[2px] w-12 shrink-0 bg-primary" />
          {slide.eyebrow}
        </p>
        <h1 className="mt-5 font-display text-[36px] leading-[1.15] font-semibold text-white sm:text-[48px] xl:mt-[26px] xl:text-[62.5px] xl:leading-[67px]">
          {slide.title.map((l) => (
            <span key={l} className="lg:block">
              {l}{" "}
            </span>
          ))}
        </h1>
        <p className="mt-5 max-w-[640px] xl:max-w-[632px] font-display text-[17px] leading-[1.4] text-white/80 sm:text-[20px] xl:mt-[19px] xl:text-[24.8px] xl:leading-[31.5px]">
          {slide.text}
        </p>
        <div className="mt-8 flex flex-wrap gap-4 xl:mt-[30px] xl:gap-[20px]">
          <Link
            href={slide.primaryButton.href}
            className="inline-flex h-[54px] items-center justify-center gap-3 rounded-[6px] bg-plum px-7 font-display text-[16px] font-medium text-white transition-colors hover:bg-primary xl:h-[61px] xl:w-[213px] xl:px-0 xl:text-[19px]"
          >
            {slide.primaryButton.label}
            <Icon name="arrow-right" className="size-5" strokeWidth={2} />
          </Link>
          <Link
            href={slide.secondaryButton.href}
            className="inline-flex h-[54px] items-center justify-center gap-3 rounded-[6px] border border-white/20 bg-white/20 px-7 font-display text-[16px] font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/30 xl:h-[61px] xl:w-[217px] xl:px-0 xl:text-[19px]"
          >
            {slide.secondaryButton.label}
            <Icon name="arrow-right" className="size-5" strokeWidth={2} />
          </Link>
        </div>
      </div>

      <div className="absolute right-5 bottom-5 flex gap-3 sm:right-8 lg:top-1/2 lg:bottom-auto lg:translate-y-[-8%] lg:flex-col lg:gap-[15px] xl:top-[calc(50%-33px)] xl:translate-y-0 xl:right-[40px]">
        {[
          { icon: "arrow-left", step: -1, label: "Previous slide" },
          { icon: "arrow-right", step: 1, label: "Next slide" },
        ].map((b) => (
          <button
            key={b.label}
            type="button"
            aria-label={b.label}
            onClick={() => go(b.step)}
            className="grid size-[48px] place-items-center rounded-full border border-white/80 text-white transition-colors hover:bg-white hover:text-ink xl:size-[64px]"
          >
            <Icon name={b.icon} className="size-5 xl:size-6" strokeWidth={2} />
          </button>
        ))}
      </div>
    </section>
  );
}
