"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { Icon } from "@/components/ui/Icon";
import type { GlobalUIData } from "@/types/templates.types";

type Props = {
  header: ReactNode;
  children: ReactNode;
  ui?: GlobalUIData;
  className?: string;
  // Milliseconds between automatic slides; leave out to slide only on demand
  autoplay?: number;
};

// Pixels of slack when deciding whether the track already sits at either end
const EDGE_PX = 4;

// Scrolls one card in `dir`; stepping past either end wraps around, so the arrows always move something.
function step(el: HTMLDivElement | null, dir: number) {
  if (!el) return;
  const max = el.scrollWidth - el.clientWidth;
  if (dir > 0 && el.scrollLeft >= max - EDGE_PX) return el.scrollTo({ left: 0, behavior: "smooth" });
  if (dir < 0 && el.scrollLeft <= EDGE_PX) return el.scrollTo({ left: max, behavior: "smooth" });
  const card = el.firstElementChild as HTMLElement | null;
  const width = card ? card.offsetWidth + parseFloat(getComputedStyle(el).columnGap || "0") : el.clientWidth;
  el.scrollBy({ left: dir * width, behavior: "smooth" });
}

// Horizontal scroll-snap track with prev/next arrows beside the section header.
export const Slider = ({ header, children, ui, className = "", autoplay }: Props) => {
  const track = useRef<HTMLDivElement>(null);
  // Hovering or touching the slider holds autoplay so a card can be read
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!autoplay || paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => step(track.current, 1), autoplay);
    return () => clearInterval(id);
  }, [autoplay, paused]);

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="flex items-start justify-between gap-6">
        {header}
        <div className="mt-[2.125rem] hidden shrink-0 gap-[0.8125rem] sm:flex xl:mt-[2.125rem]">
          {[
            { icon: "FaArrowLeft", dir: -1, label: ui?.previousLabel },
            { icon: "FaArrowRight", dir: 1, label: ui?.nextLabel },
          ].map((b) => (
            <button
              key={b.icon}
              type="button"
              aria-label={b.label}
              onClick={() => step(track.current, b.dir)}
              className="grid size-[2.875rem] place-items-center rounded-full border border-[var(--color-primary-40)] bg-[var(--color-bg-alt)] text-[var(--color-primary)] transition-all duration-300 hover:scale-110 hover:bg-[var(--color-primary)] hover:text-[var(--color-white)] active:scale-95"
            >
              <Icon name={b.icon} className="size-[1.125rem]" />
            </button>
          ))}
        </div>
      </div>
      <div
        ref={track}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
        className={`[scrollbar-width:none] [&::-webkit-scrollbar]:hidden -mx-3 flex snap-x snap-mandatory scroll-px-3 overflow-x-auto scroll-smooth px-3 pt-2 pb-8 ${className}`}
      >
        {children}
      </div>
    </div>
  );
};
