"use client";

import { useRef, useState, type MouseEvent } from "react";
import { CountUp } from "./ui/count-up";
import { Reveal } from "./ui/reveal";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

interface MetricItem {
  id: string;
  number: number;
  suffix?: string;
  format?: boolean;
  from?: number;
  title: string;
  subLabel: string;
}

const metricData: MetricItem[] = [
  {
    id: "01",
    number: 20,
    suffix: "+",
    format: false,
    from: 0,
    title: "AI & DEVELOPMENT TOOLS",
    subLabel: "// WORKFLOW ECOSYSTEM",
  },
  {
    id: "02",
    number: 6316,
    suffix: "+",
    format: true,
    from: 0,
    title: "LINES OF CODE",
    subLabel: "// JARVIS AI ASSISTANT",
  },
  {
    id: "03",
    number: 2028,
    suffix: "",
    format: false,
    from: 1990,
    title: "TARGET GRADUATION",
    subLabel: "// SOFTWARE ENGINEERING FOUNDATION",
  },
];

// Refined digital engineering background particles (12 coordinates with depth levels)
const backgroundParticles = [
  { x: 14, y: 18, size: 2, color: "#38bdf8", depth: 0.9, opacity: 0.45 },
  { x: 84, y: 15, size: 1.5, color: "#475569", depth: 0.4, opacity: 0.35 },
  { x: 26, y: 42, size: 2, color: "#64748b", depth: 0.6, opacity: 0.3 },
  { x: 76, y: 38, size: 2.5, color: "#38bdf8", depth: 0.85, opacity: 0.5 },
  { x: 48, y: 8, size: 1.5, color: "#334155", depth: 0.3, opacity: 0.25 },
  { x: 90, y: 56, size: 2, color: "#38bdf8", depth: 0.7, opacity: 0.4 },
  { x: 8, y: 64, size: 1.5, color: "#475569", depth: 0.5, opacity: 0.3 },
  { x: 64, y: 78, size: 2, color: "#334155", depth: 0.45, opacity: 0.25 },
  { x: 34, y: 84, size: 1.5, color: "#475569", depth: 0.6, opacity: 0.35 },
  { x: 94, y: 88, size: 2, color: "#64748b", depth: 0.5, opacity: 0.3 },
  { x: 18, y: 92, size: 1.5, color: "#334155", depth: 0.3, opacity: 0.2 },
  { x: 52, y: 62, size: 2, color: "#38bdf8", depth: 0.75, opacity: 0.38 },
];

/**
 * Tactical 3D Metric Card with subtle physics, mouse glare, and tactile depth.
 */
function MetricCard3D({ item }: { item: MetricItem }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotX: 0, rotY: 0, glareX: 50, glareY: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (reducedMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    // Subtle 4-5deg max tilt for a restrained, tactile physical feel
    const rotX = (0.5 - y) * 8;
    const rotY = (x - 0.5) * 9;

    setTilt({
      rotX,
      rotY,
      glareX: x * 100,
      glareY: y * 100,
    });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ rotX: 0, rotY: 0, glareX: 50, glareY: 50 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative rounded-2xl transition-all duration-300 ease-out"
      style={{
        perspective: "1000px",
      }}
    >
      <div
        className="relative h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-[#0d131f] to-[#07090e] p-6 sm:p-7 transition-all duration-300 ease-out"
        style={{
          transform: reducedMotion
            ? "none"
            : isHovered
            ? `translateY(-6px) rotateX(${tilt.rotX}deg) rotateY(${tilt.rotY}deg) translateZ(8px)`
            : "translateY(0px) rotateX(0deg) rotateY(0deg) translateZ(0px)",
          boxShadow: isHovered
            ? "0 22px 42px -12px rgba(0, 0, 0, 0.85), 0 0 24px -4px rgba(56, 189, 248, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
            : "0 14px 34px -10px rgba(0, 0, 0, 0.75), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
          borderColor: isHovered ? "rgba(56, 189, 248, 0.32)" : "rgba(255, 255, 255, 0.08)",
        }}
      >
        {/* Subtle Glare Reflection Follower */}
        {!reducedMotion && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 transition-opacity duration-300"
            style={{
              opacity: isHovered ? 1 : 0,
              background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(56, 189, 248, 0.09) 0%, transparent 60%)`,
            }}
          />
        )}

        {/* Ambient Top Rim Highlight */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-yellow/40 transition-colors duration-300"
        />

        {/* Header: Label + Cyan Status Indicator */}
        <div className="mb-5 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
          <span className="font-semibold text-ink/80 transition-colors group-hover:text-ink">
            METRIC.[ {item.id} ]
          </span>
          <span className="h-1.5 w-1.5 rounded-sm bg-yellow shadow-[0_0_8px_rgba(56,189,248,0.7)]" />
        </div>

        {/* Main Number with Viewport CountUp */}
        <div className="font-display text-5xl font-bold leading-none tracking-tight text-white transition-transform duration-300 group-hover:translate-x-0.5 sm:text-5xl lg:text-6xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
          <CountUp
            value={item.number}
            suffix={item.suffix}
            format={item.format}
            from={item.from}
          />
        </div>

        {/* Title: Strong White Typography */}
        <div className="mt-4 font-display text-base font-bold uppercase tracking-wider text-ink transition-colors group-hover:text-white">
          {item.title}
        </div>

        {/* Sub-label: Technical Monospaced Cyan Accent */}
        <div className="mt-1.5 font-mono text-xs uppercase tracking-wider text-[#38bdf8] flex items-center gap-1.5">
          <span>{item.subLabel}</span>
        </div>
      </div>
    </div>
  );
}

export function Metrics() {
  const sectionRef = useRef<HTMLElement>(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  // Normalized mouse position tracker for parallax & 3D monogram tilt
  const handleSectionMouseMove = (e: MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const ny = (e.clientY - rect.top) / rect.height - 0.5; // -0.5 to 0.5
    setMouseOffset({ x: nx * 2, y: ny * 2 }); // -1 to 1
  };

  const handleSectionMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  return (
    <section
      id="metrics"
      ref={sectionRef}
      onMouseMove={handleSectionMouseMove}
      onMouseLeave={handleSectionMouseLeave}
      aria-label="Key metrics"
      className="relative isolate overflow-hidden px-5 sm:px-8 py-10 md:py-14"
    >
      {/* ───────────────── Background Depth & Ambient Schematics ───────────────── */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Soft Ambient Radial Cyan Aura */}
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[340px] w-[520px] rounded-full bg-sky-500/5 blur-[130px]" />

        {/* Extremely faint oversized geometric circular ring */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-700/15"
          style={{
            width: "min(680px, 90vw)",
            height: "min(680px, 90vw)",
            transform: `translate(-50%, -50%) translate3d(${mouseOffset.x * -6}px, ${mouseOffset.y * -6}px, 0)`,
            transition: "transform 0.4s ease-out",
          }}
        />

        {/* 10–15 Subtle Engineering Depth Particles */}
        {backgroundParticles.map((pt, i) => (
          <span
            key={`pt-${i}`}
            className="absolute rounded-full transition-transform duration-500 ease-out"
            style={{
              left: `${pt.x}%`,
              top: `${pt.y}%`,
              width: `${pt.size}px`,
              height: `${pt.size}px`,
              backgroundColor: pt.color,
              opacity: pt.opacity,
              boxShadow: pt.color === "#38bdf8" ? `0 0 6px ${pt.color}` : "none",
              transform: `translate3d(${mouseOffset.x * pt.depth * 14}px, ${mouseOffset.y * pt.depth * 14}px, 0)`,
            }}
          />
        ))}

        {/* Faint technical constellation telemetry line */}
        <svg className="absolute inset-0 h-full w-full opacity-10" aria-hidden>
          <line
            x1="14%"
            y1="18%"
            x2="26%"
            y2="42%"
            stroke="#38bdf8"
            strokeWidth="0.8"
            strokeDasharray="3 3"
          />
          <line
            x1="76%"
            y1="38%"
            x2="90%"
            y2="56%"
            stroke="#38bdf8"
            strokeWidth="0.8"
            strokeDasharray="3 3"
          />
        </svg>
      </div>

      <div className="mx-auto max-w-6xl">
        {/* ───────────────── 1. Scroll Down Exploration Indicator ───────────────── */}
        <div className="mb-10 sm:mb-12 flex flex-col items-center justify-center">
          <a
            href="#about"
            className="group flex flex-col items-center gap-2 text-muted transition-colors hover:text-yellow"
            aria-label="Scroll to explore profile and metrics"
          >
            <span className="font-mono text-[9.5px] uppercase tracking-[0.25em] text-muted transition-colors group-hover:text-yellow">
              {"// SCROLL TO EXPLORE"}
            </span>
            <div className="relative flex h-7 w-4 justify-center rounded-full border border-white/20 p-1 transition-colors group-hover:border-yellow/50">
              <span className="h-1.5 w-1 rounded-full bg-yellow animate-bounce" />
            </div>
          </a>
        </div>

        {/* ───────────────── 3. Tactical 3D Metric Cards ───────────────── */}
        <Reveal>
          <div className="grid gap-4 sm:grid-cols-3">
            {metricData.map((item) => (
              <MetricCard3D key={item.id} item={item} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
