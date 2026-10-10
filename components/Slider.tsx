"use client";

import { useRef, type ReactNode } from "react";
import Icon from "./Icon";

type Props = {
  header: ReactNode;
  children: ReactNode;
  className?: string;
};

// Horizontal scroll-snap track with prev/next arrows beside the section header.
export default function Slider({ header, children, className = "" }: Props) {
  const track = useRef<HTMLDivElement>(null);

  const move = (dir: number) => {
    const el = track.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    const step = card ? card.offsetWidth + parseFloat(getComputedStyle(el).columnGap || "0") : el.clientWidth;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <div>
      <div className="flex items-start justify-between gap-6">
        {header}
        <div className="mt-[34px] hidden shrink-0 gap-[13px] sm:flex xl:mt-[34px]">
          {[
            { icon: "arrow-left", dir: -1, label: "Previous" },
            { icon: "arrow-right", dir: 1, label: "Next" },
          ].map((b) => (
            <button
              key={b.label}
              type="button"
              aria-label={b.label}
              onClick={() => move(b.dir)}
              className="grid size-[46px] place-items-center rounded-full border border-primary/40 bg-blush text-primary transition-colors hover:bg-primary hover:text-white"
            >
              <Icon name={b.icon} className="size-[18px]" strokeWidth={2} />
            </button>
          ))}
        </div>
      </div>
      <div
        ref={track}
        className={`no-scrollbar -mx-3 flex snap-x snap-mandatory scroll-px-3 overflow-x-auto scroll-smooth px-3 pt-2 pb-8 ${className}`}
      >
        {children}
      </div>
    </div>
  );
}
