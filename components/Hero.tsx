"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type TouchEvent } from "react";
import Icon from "./Icon";
import data from "@/data";

const { slides } = data.hero;

const AUTOPLAY_MS = 5000;
const SWIPE_PX = 40;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const slide = slides[index];
  const touchX = useRef<number | null>(null);
  const go = (step: number) => setIndex((i) => (i + step + slides.length) % slides.length);

  // Restarts after every slide change, so a manual change gets a full interval before the next auto-advance.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setTimeout(() => setIndex((i) => (i + 1) % slides.length), AUTOPLAY_MS);
    return () => clearTimeout(id);
  }, [index]);

  // Touch screens have no arrows; a horizontal swipe changes the slide instead.
  const onTouchStart = (e: TouchEvent) => {
    touchX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: TouchEvent) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    touchX.current = null;
    if (Math.abs(dx) > SWIPE_PX) go(dx < 0 ? 1 : -1);
  };

  return (
    // Height is capped to the viewport minus the sticky header so the whole banner shows without scrolling
    <section
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      className="relative flex h-[min(520px,calc(100svh-72px))] min-h-[440px] items-center overflow-hidden bg-[#2b2b2e] sm:h-[min(580px,calc(100svh-72px))] md:h-[min(580px,calc(100svh-135px))] xl:h-[min(637px,calc(100svh-153px))]">
      {/* Photo is inset from the left so the family lands right of the headline, as in the design */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[79.7%] lg:[mask-image:linear-gradient(to_right,transparent,#000_20%)]">
        {slides.map((s, i) => (
          <Image
            key={s.image}
            src={s.image}
            alt=""
            fill
            preload={i === 0}
            quality={90}
            sizes="(min-width: 1024px) 80vw, 100vw"
            className={`object-cover object-[50%_34%] transition-opacity duration-700 ${i === index ? "animate-zoom-out opacity-100" : "opacity-0"}`}
          />
        ))}
      </div>
      {/* Below lg the text runs across the whole photo, so the overlay stays dark to the right edge */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1c1b1f]/90 via-[#1c1b1f]/75 to-[#1c1b1f]/50 lg:from-[#1c1b1f]/85 lg:via-[#1c1b1f]/45 lg:to-[#1c1b1f]/10" />

      <div key={index} className="wrap relative pt-14 pb-24 lg:py-16 xl:px-[57px] xl:pt-[68px] xl:pb-[50px]">
        <p className="flex animate-fade-up items-center gap-4 font-display text-[16px] text-white xl:gap-[17px] xl:text-[19.7px]">
          <span className="h-[2px] w-12 shrink-0 bg-primary" />
          {slide.eyebrow}
        </p>
        <h1 className="mt-5 animate-fade-up font-display [animation-delay:120ms] text-[36px] leading-[1.15] font-semibold text-white sm:text-[48px] xl:mt-[26px] xl:text-[62.5px] xl:leading-[67px]">
          {slide.title.map((l) => (
            <span key={l} className="lg:block">
              {l}{" "}
            </span>
          ))}
        </h1>
        <p className="mt-5 animate-fade-up [animation-delay:240ms] max-w-[640px] xl:max-w-[632px] font-display text-[17px] leading-[1.4] text-white/80 sm:text-[20px] xl:mt-[19px] xl:text-[24.8px] xl:leading-[31.5px]">
          {slide.text}
        </p>
        <div className="mt-8 flex animate-fade-up flex-wrap gap-4 [animation-delay:360ms] xl:mt-[30px] xl:gap-[20px]">
          <Link
            href={slide.primaryButton.href}
            className="group inline-flex h-[54px] items-center justify-center gap-3 rounded-[6px] bg-plum px-7 font-display text-[16px] font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:shadow-[0_10px_24px_rgba(143,21,69,0.45)] xl:h-[61px] xl:w-[213px] xl:px-0 xl:text-[19px]"
          >
            {slide.primaryButton.label}
            <Icon name="arrow-right" className="size-5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} />
          </Link>
          <Link
            href={slide.secondaryButton.href}
            className="group inline-flex h-[54px] items-center justify-center gap-3 rounded-[6px] border border-white/20 bg-white/20 px-7 font-display text-[16px] font-medium text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-plum xl:h-[61px] xl:w-[217px] xl:px-0 xl:text-[19px]"
          >
            {slide.secondaryButton.label}
            <Icon name="arrow-right" className="size-5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} />
          </Link>
        </div>
      </div>

      <div className="absolute bottom-6 left-5 flex gap-2.5 sm:left-8 lg:bottom-8 xl:left-[57px]">
        {slides.map((s, i) => (
          <button
            key={s.image}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            onClick={() => setIndex(i)}
            className={`h-[6px] rounded-full transition-all duration-300 ${i === index ? "w-8 bg-primary" : "w-[6px] bg-white/60 hover:bg-white"}`}
          />
        ))}
      </div>

      <div className="absolute right-8 top-1/2 hidden translate-y-[-8%] flex-col gap-[15px] lg:flex xl:top-[calc(50%-33px)] xl:translate-y-0 xl:right-[40px]">
        {[
          { icon: "arrow-left", step: -1, label: "Previous slide" },
          { icon: "arrow-right", step: 1, label: "Next slide" },
        ].map((b) => (
          <button
            key={b.label}
            type="button"
            aria-label={b.label}
            onClick={() => go(b.step)}
            className="grid size-[48px] place-items-center rounded-full border border-white/80 text-white transition-all duration-300 hover:scale-110 hover:border-primary hover:bg-primary active:scale-95 xl:size-[64px]"
          >
            <Icon name={b.icon} className="size-5 xl:size-6" strokeWidth={2} />
          </button>
        ))}
      </div>
    </section>
  );
}
