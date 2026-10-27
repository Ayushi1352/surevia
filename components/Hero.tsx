"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type TouchEvent } from "react";
import Icon from "./Icon";
import data from "@/data";

const { slides } = data.hero;
const { labels } = data.site;

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
      className="relative flex h-[min(32.5rem,calc(100svh-4.5rem))] min-h-[27.5rem] items-center overflow-hidden bg-[#2b2b2e] sm:h-[min(36.25rem,calc(100svh-4.5rem))] md:h-[min(36.25rem,calc(100svh-8.4375rem))] xl:h-[min(39.8125rem,calc(100svh-9.5625rem))]">
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
            className={`object-cover object-[50%_34%] transition-[opacity,scale] ${i === index ? "scale-100 opacity-100 ease-out [transition-duration:840ms,7s] starting:scale-110 starting:opacity-0" : "scale-110 opacity-0 [transition-duration:700ms,0s] [transition-delay:0s,700ms]"}`}
          />
        ))}
      </div>
      {/* Below lg the text runs across the whole photo, so the overlay stays dark to the right edge */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1c1b1f]/90 via-[#1c1b1f]/75 to-[#1c1b1f]/50 lg:from-[#1c1b1f]/85 lg:via-[#1c1b1f]/45 lg:to-[#1c1b1f]/10" />

      <div key={index} className="mx-auto w-full max-w-[90rem] px-5 sm:px-8 relative pt-14 pb-24 lg:py-16 xl:px-[3.5625rem] xl:pt-[4.25rem] xl:pb-[3.125rem]">
        <p className="flex transition-[opacity,translate] duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] starting:translate-y-[1.75rem] starting:opacity-0 items-center gap-4 font-heading text-[1rem] font-medium text-white xl:gap-[1.0625rem] xl:text-[1.23125rem]">
          <span className="h-[0.125rem] w-12 shrink-0 bg-primary" />
          {slide.eyebrow}
        </p>
        <h1 className="mt-5 transition-[opacity,translate] duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] starting:translate-y-[1.75rem] starting:opacity-0 delay-120 font-heading text-[2.25rem] leading-[1.15] font-bold text-white sm:text-[3rem] xl:mt-[1.625rem] xl:text-[3.90625rem] xl:leading-[4.1875rem]">
          {slide.title.map((l) => (
            <span key={l} className="lg:block">
              {l}{" "}
            </span>
          ))}
        </h1>
        <p className="mt-5 transition-[opacity,translate] duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] starting:translate-y-[1.75rem] starting:opacity-0 delay-240 max-w-[40rem] xl:max-w-[39.5rem] font-heading text-[1.0625rem] font-medium leading-[1.4] text-white/80 sm:text-[1.25rem] xl:mt-[1.1875rem] xl:text-[1.55rem] xl:leading-[1.96875rem]">
          {slide.text}
        </p>
      </div>

      <div className="absolute bottom-6 left-5 flex gap-2.5 sm:left-8 lg:bottom-8 xl:left-[3.5625rem]">
        {slides.map((s, i) => (
          <button
            key={s.image}
            type="button"
            aria-label={labels.goToSlide.replace("{n}", String(i + 1))}
            aria-current={i === index}
            onClick={() => setIndex(i)}
            className={`h-[0.375rem] rounded-full transition-all duration-300 ${i === index ? "w-8 bg-primary" : "w-[0.375rem] bg-white/60 hover:bg-white"}`}
          />
        ))}
      </div>

      <div className="absolute right-8 top-1/2 hidden translate-y-[-8%] flex-col gap-[0.9375rem] lg:flex xl:top-[calc(50%-2.0625rem)] xl:translate-y-0 xl:right-[2.5rem]">
        {[
          { icon: "arrow-left", step: -1, label: labels.previousSlide },
          { icon: "arrow-right", step: 1, label: labels.nextSlide },
        ].map((b) => (
          <button
            key={b.label}
            type="button"
            aria-label={b.label}
            onClick={() => go(b.step)}
            className="grid size-[3rem] place-items-center rounded-full border border-white/80 text-white transition-all duration-300 hover:scale-110 hover:border-primary hover:bg-primary active:scale-95 xl:size-[4rem]"
          >
            <Icon name={b.icon} className="size-5 xl:size-6" strokeWidth={2} />
          </button>
        ))}
      </div>
    </section>
  );
}
