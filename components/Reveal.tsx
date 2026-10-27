"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  as?: "div" | "section" | "article" | "aside" | "ul" | "ol" | "li";
  effect?: "up" | "left" | "right" | "zoom";
  // Milliseconds; use it to stagger siblings
  delay?: number;
  className?: string;
  children: ReactNode;
};

// Where each effect starts from. The keyframes animate `transform`, so they never fight the
// translate/scale utilities used for hover states.
const from = {
  up: "translateY(2.25rem)",
  left: "translateX(-3.5rem)",
  right: "translateX(3.5rem)",
  zoom: "scale(0.9)",
};

// Fades its content in the first time it scrolls into view.
export default function Reveal({ as = "div", effect = "up", delay = 0, className = "", children }: Props) {
  const Tag = as as "div";
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setVisible(true);
        observer.disconnect();
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        el.animate([{ opacity: 0, transform: from[effect] }, {}], {
          duration: 800,
          delay,
          easing: "cubic-bezier(0.22, 1, 0.36, 1)",
          fill: "backwards",
        });
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [effect, delay]);

  // Hidden until it scrolls into view; shown straight away without scripts or with reduced motion.
  return (
    <Tag
      ref={ref}
      className={[visible ? "" : "opacity-0 motion-reduce:opacity-100 noscript:opacity-100", className].filter(Boolean).join(" ")}
    >
      {children}
    </Tag>
  );
}
