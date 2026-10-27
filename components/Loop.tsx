"use client";

import { useEffect, useRef, type ReactNode } from "react";

// Endless decorative motion for the element passed as the only child. Tailwind classes can't declare
// keyframes, so these run through the Web Animations API; every step keeps the easing a CSS keyframe would.
const effects = {
  float: { duration: 5000, easing: "ease-in-out", frames: [{}, { transform: "translateY(-0.625rem)" }, {}] },
  nudge: { duration: 1600, easing: "ease-in-out", frames: [{}, { transform: "translateX(0.3125rem)" }, {}] },
  twinkle: { duration: 1800, easing: "ease-in-out", frames: [{}, { opacity: 0.25 }, {}] },
  ring: {
    duration: 2600,
    easing: "ease-in-out",
    frames: [
      { offset: 0, transform: "rotate(0)" },
      { offset: 0.1, transform: "rotate(-14deg)" },
      { offset: 0.2, transform: "rotate(14deg)" },
      { offset: 0.3, transform: "rotate(-14deg)" },
      { offset: 0.4, transform: "rotate(14deg)" },
      { offset: 0.5, transform: "rotate(-14deg)" },
      { offset: 0.6, transform: "rotate(0)" },
      { offset: 1, transform: "rotate(0)" },
    ],
  },
  // A ring in the element's text colour that spreads out and fades
  "pulse-ring": {
    duration: 2200,
    easing: "ease-out",
    frames: [
      { offset: 0, boxShadow: "0 0 0 0 color-mix(in srgb, currentColor 45%, transparent)" },
      { offset: 0.7, boxShadow: "0 0 0 0.75rem transparent" },
      { offset: 1, boxShadow: "0 0 0 0.75rem transparent" },
    ],
  },
} satisfies Record<string, { duration: number; easing: string; frames: Keyframe[] }>;

type Props = {
  effect: keyof typeof effects;
  // Milliseconds; a negative value starts partway through the cycle
  delay?: number;
  // Inside an <svg> the wrapper has to be an SVG element
  svg?: boolean;
  children: ReactNode;
};

export default function Loop({ effect, delay = 0, svg = false, children }: Props) {
  const ref = useRef<HTMLSpanElement & SVGGElement>(null);

  useEffect(() => {
    const el = ref.current?.firstElementChild;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const { duration, easing, frames } = effects[effect];
    const animation = el.animate(
      frames.map((f) => ({ easing, ...f })),
      { duration, delay, iterations: Infinity },
    );
    return () => animation.cancel();
  }, [effect, delay]);

  // `contents` keeps the wrapper out of layout, so the child sits exactly where it would without it.
  return svg ? <g ref={ref}>{children}</g> : <span ref={ref} className="contents">{children}</span>;
}
