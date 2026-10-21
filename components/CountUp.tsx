"use client";

import { useEffect, useRef, useState } from "react";

const DURATION_MS = 2000;

// Splits "10K+", "98%" or "4.8/5" into the number that counts and the text around it.
function parse(value: string) {
  const match = value.match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return null;
  const [, prefix, number, suffix] = match;
  return { prefix, target: Number(number), decimals: number.split(".")[1]?.length ?? 0, suffix };
}

// Counts a stat up from zero the first time it scrolls into view.
export default function CountUp({ value, className = "" }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const parts = parse(value);
  // null until the count starts, so the server and scripts-off render show the real figure
  const [current, setCurrent] = useState<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !parts || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setCurrent(0);
    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / DURATION_MS, 1);
          // Ease out so the last digits settle instead of stopping dead
          setCurrent(parts.target * (1 - Math.pow(1 - t, 3)));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
    // The figure comes from static site data, so it never changes after mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {parts && current !== null ? `${parts.prefix}${current.toFixed(parts.decimals)}${parts.suffix}` : value}
    </span>
  );
}
