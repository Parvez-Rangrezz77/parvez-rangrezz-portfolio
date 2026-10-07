"use client";

import { useCallback, useRef, type ElementType, type ReactNode } from "react";

type Props = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
  id?: string;
};

/**
 * Linear-style spotlight card. Updates CSS variables on pointer move
 * (no React re-render), the glow itself is pure CSS (see `.spotlight`).
 */
export function SpotlightCard({ as: Tag = "div", className = "", children, id }: Props) {
  const ref = useRef<HTMLElement>(null);
  const frame = useRef<number | null>(null);

  const onPointerMove = useCallback((e: React.PointerEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const { clientX, clientY } = e;
    if (frame.current) cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${clientX - rect.left}px`);
      el.style.setProperty("--my", `${clientY - rect.top}px`);
    });
  }, []);

  return (
    <Tag ref={ref} id={id} onPointerMove={onPointerMove} className={`spotlight ${className}`}>
      {children}
    </Tag>
  );
}
