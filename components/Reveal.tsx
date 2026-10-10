"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type Props = {
  as?: "div" | "section" | "article" | "aside" | "ul" | "ol" | "li";
  effect?: "up" | "left" | "right" | "zoom";
  // Milliseconds; use it to stagger siblings
  delay?: number;
  className?: string;
  children: ReactNode;
};

// Fades its content in the first time it scrolls into view (styles live in globals.css).
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
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal reveal-${effect}${visible ? " is-visible" : ""}${className && ` ${className}`}`}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
