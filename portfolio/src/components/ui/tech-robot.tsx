"use client";

import React, { useEffect, useRef, useState, type MouseEvent } from "react";
import Image from "next/image";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

/**
 * ─────────────────────────────────────────────────────────────────────────────
 * INTERACTIVE 3D TECH STACK MASCOT ROBOT
 *
 * Features:
 * - Waving friendly 3D robot mascot (/images/robot-tech-mascot.png)
 * - Mouse parallax tilt (subtle head/body orientation towards cursor)
 * - Refractive cyan/indigo ion aura & ground shadow
 * - Floating zero-G idle hovering physics
 * - Interactive hover reactions & cyber telemetry status badge
 * - Respects prefers-reduced-motion
 * ─────────────────────────────────────────────────────────────────────────────
 */

export function TechRobot() {
  const containerRef = useRef<HTMLDivElement>(null);
  const targetOffset = useRef({ x: 0, y: 0 });
  const currentOffset = useRef({ x: 0, y: 0 });
  const animFrameId = useRef<number>(0);
  const [isHovered, setIsHovered] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  // Smooth mouse parallax loop
  useEffect(() => {
    if (reducedMotion) return;

    const render = () => {
      currentOffset.current.x +=
        (targetOffset.current.x - currentOffset.current.x) * 0.08;
      currentOffset.current.y +=
        (targetOffset.current.y - currentOffset.current.y) * 0.08;

      const el = containerRef.current;
      if (el) {
        el.style.setProperty("--bot-tx", currentOffset.current.x.toFixed(4));
        el.style.setProperty("--bot-ty", currentOffset.current.y.toFixed(4));
      }

      animFrameId.current = requestAnimationFrame(render);
    };

    animFrameId.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animFrameId.current);
    };
  }, [reducedMotion]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (reducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const nx = Math.max(-1, Math.min(1, (e.clientX - cx) / (rect.width / 2)));
    const ny = Math.max(-1, Math.min(1, (e.clientY - cy) / (rect.height / 2)));
    targetOffset.current = { x: nx, y: ny };
  };

  const handleMouseLeave = () => {
    targetOffset.current = { x: 0, y: 0 };
    setIsHovered(false);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="group/techbot relative flex flex-col items-center justify-center select-none py-2 cursor-pointer"
      style={
        {
          "--bot-tx": "0",
          "--bot-ty": "0",
        } as React.CSSProperties
      }
    >
      {/* ───────────────── Ambient Refractive Ion Aura ───────────────── */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-4 h-[55px] w-[160px] sm:w-[190px] rounded-full transition-all duration-500"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(56, 189, 248, 0.45) 0%, rgba(99, 102, 241, 0.25) 45%, transparent 75%)",
          filter: "blur(14px)",
          opacity: isHovered ? 1 : 0.7,
          transform: isHovered ? "scale(1.2)" : "scale(1)",
        }}
      />

      {/* ───────────────── 3D Waving Robot Graphic ───────────────── */}
      <div
        className="relative transition-transform duration-300 ease-out"
        style={{
          animation: reducedMotion ? "none" : "float 7s ease-in-out infinite",
          transform: reducedMotion
            ? undefined
            : `translate3d(calc(var(--bot-tx, 0) * 16px), calc(var(--bot-ty, 0) * 12px), 0) rotate(calc(var(--bot-tx, 0) * 4deg))`,
        }}
      >
        <Image
          src="/images/robot-tech-mascot.png"
          alt="AI Developer Mascot Robot"
          width={185}
          height={185}
          className="block h-auto w-[135px] sm:w-[165px] md:w-[185px] object-contain transition-all duration-300 ease-out group-hover/techbot:scale-105"
          style={{
            filter: isHovered
              ? "drop-shadow(0 20px 35px rgba(0,0,0,0.85)) drop-shadow(0 0 28px rgba(56,189,248,0.65))"
              : "drop-shadow(0 15px 25px rgba(0,0,0,0.75)) drop-shadow(0 0 16px rgba(56,189,248,0.3))",
          }}
          loading="lazy"
          draggable={false}
        />
      </div>

      {/* ───────────────── Cyber Status Pill Badge ───────────────── */}
      <div className="relative mt-2 flex items-center gap-2 rounded-full border border-sky-400/30 bg-[#08090E]/90 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-sky-300 shadow-xl backdrop-blur-md transition-all duration-300 group-hover/techbot:border-sky-400/60 group-hover/techbot:shadow-sky-500/20">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-400" />
        </span>
        <span className="font-semibold text-white">BOT</span>
        <span className="text-white/30">{"//"}</span>
        <span className="text-sky-300">TECH STACK ASSISTANT</span>
      </div>
    </div>
  );
}
