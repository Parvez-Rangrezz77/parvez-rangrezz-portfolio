"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  value: number;
  suffix?: string;
  format?: boolean;
  duration?: number;
  /** Start counting from this value (e.g. 2000 for a year). */
  from?: number;
  className?: string;
};

const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

/**
 * Viewport-triggered count-up. Uses tabular numerals + an invisible
 * sizer with the final value so the width never changes (CLS = 0).
 */
export function CountUp({ value, suffix = "", format = true, duration = 2200, from = 0, className = "" }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [current, setCurrent] = useState(from);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        if (reduce) {
          setCurrent(value);
          return;
        }
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          setCurrent(Math.round(from + (value - from) * easeOutExpo(t)));
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, duration, from]);

  const fmt = (n: number) => (format ? n.toLocaleString("en-US") : String(n));

  return (
    <span ref={ref} className={`relative inline-block tabular-nums ${className}`}>
      {/* sizer reserves final width */}
      <span aria-hidden className="invisible">
        {fmt(value)}
        {suffix}
      </span>
      <span aria-hidden className="absolute inset-0">
        {fmt(current)}
        {suffix}
      </span>
      <span className="sr-only">
        {fmt(value)}
        {suffix}
      </span>
    </span>
  );
}
