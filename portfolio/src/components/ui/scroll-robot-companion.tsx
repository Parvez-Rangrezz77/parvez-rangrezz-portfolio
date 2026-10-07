"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

/**
 * ─────────────────────────────────────────────────────────────────────────────
 * 3D SCROLL-FOLLOWING COMPANION ROBOT (LEFT RAIL EDITION)
 *
 * Requirements:
 * - 100% ABSENT on the Hero page (hero page pe ho hi na).
 * - Starts strictly BELOW the Hero page at the Metrics section.
 * - Positioned strictly in the LEFT GUTTER / MARGIN on the cyber rail.
 * - Smoothly glides vertically along the left rail as the user scrolls.
 * - Does NOT block or float in the middle of page content / cards.
 * - Velocity-reactive banking tilt and ion thruster flare.
 * - Zero-G organic floating bob and anti-gravity ion glow.
 * - Futuristic cyber scroll rail showing scroll depth along the left margin.
 * - 60/120fps GPU LERP interpolation (translate3d + rotate).
 * - Click-to-top interaction + telemetry status badge.
 * - Fully responsive & respects prefers-reduced-motion.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export function ScrollRobotCompanion() {
  const robotRef = useRef<HTMLDivElement>(null);
  const railContainerRef = useRef<HTMLDivElement>(null);
  const railLaserRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const [isHovered, setIsHovered] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  // Position & Physics Refs
  const currentPos = useRef({ x: -9999, y: -9999, rot: 0 });
  const targetPos = useRef({ x: -9999, y: -9999, rot: 0 });
  const currentOpacity = useRef(0);
  const targetOpacity = useRef(0);
  const lastScrollY = useRef(0);
  const scrollVelocity = useRef(0);
  const isInitialized = useRef(false);
  const animFrameId = useRef<number>(0);
  const timeRef = useRef(0);

  useEffect(() => {
    // Responsive robot dimensions
    const getRobotDimensions = () => {
      const vw = window.innerWidth;
      if (vw >= 1536) return { width: 120, height: 200 };
      if (vw >= 1280) return { width: 105, height: 175 };
      if (vw >= 1024) return { width: 90, height: 150 };
      if (vw >= 768) return { width: 75, height: 125 };
      return { width: 60, height: 100 };
    };

    // Calculate left rail X position to sit cleanly in the left margin gutter
    const computeTrackX = (rW: number) => {
      const vw = window.innerWidth;
      const mainContainer =
        document.querySelector(".max-w-6xl") ||
        document.querySelector("main");

      let leftMargin = 0;
      if (mainContainer) {
        const rect = mainContainer.getBoundingClientRect();
        leftMargin = rect.left;
      } else {
        leftMargin = Math.max(0, (vw - 1152) / 2);
      }

      // If generous margin on wide screens (>= 1280px):
      // Center the robot right inside the left gutter marked by the user
      if (leftMargin > rW + 20) {
        const centered = (leftMargin - rW) / 2;
        return Math.max(16, Math.min(centered, leftMargin - rW - 12));
      }

      // If screen is medium (1024px-1279px or tighter):
      // Place safely on the left side
      if (leftMargin > 24) {
        return Math.max(8, Math.min(20, leftMargin - rW - 6));
      }

      return 12;
    };

    const updatePhysicsTargets = () => {
      const robotEl = robotRef.current;
      if (!robotEl) return;

      const { width: rW, height: rH } = getRobotDimensions();
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      const docHeight = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight,
        vh
      );

      // Measure velocity for banking tilt & inertia
      const deltaScroll = scrollY - lastScrollY.current;
      lastScrollY.current = scrollY;
      scrollVelocity.current = scrollVelocity.current * 0.78 + deltaScroll * 0.22;

      // ───────────────── Strict Mobile & Tablet Exclusion (< 1024px) ─────────────────
      // On mobile and tablet screens, no left margin exists for the rail.
      // Must be completely hidden with zero opacity and no display.
      if (window.innerWidth < 1024) {
        targetOpacity.current = 0;
        currentOpacity.current = 0;
        if (robotRef.current) {
          robotRef.current.style.display = "none";
          robotRef.current.style.visibility = "hidden";
          robotRef.current.style.opacity = "0";
        }
        if (railContainerRef.current) {
          railContainerRef.current.style.display = "none";
          railContainerRef.current.style.visibility = "hidden";
          railContainerRef.current.style.opacity = "0";
        }
        return;
      }

      // ───────────────── Strict Hero Page Exclusion ─────────────────
      // Companion robot MUST NOT exist on the Hero page at all.
      // It starts strictly once Hero section has scrolled away.
      const heroEl = document.getElementById("top") || document.querySelector("section");
      let heroBottom = 9999;
      if (heroEl) {
        heroBottom = heroEl.getBoundingClientRect().bottom;
      }

      // If heroBottom >= 60, the user is still on the Hero page!
      // In this state, targetOpacity is strictly 0 (completely absent).
      if (heroBottom >= 60) {
        targetOpacity.current = 0;
      } else if (heroBottom <= -20) {
        // Hero is completely scrolled past, full visibility below Hero
        targetOpacity.current = 1;
      } else {
        // Fast seamless fade across boundary (60px to -20px)
        targetOpacity.current = (60 - heroBottom) / 80;
      }

      // ───────────────── Flight Trajectory Below Hero ─────────────────
      // Flight progression begins below Hero (starting at Metrics)
      const heroDocHeight = heroEl ? (heroEl as HTMLElement).offsetHeight : vh;
      const flightStart = Math.max(0, heroDocHeight - 60);
      const flightEnd = Math.max(flightStart + 100, docHeight - vh);
      const flightRange = Math.max(1, flightEnd - flightStart);
      const rawProgress = (scrollY - flightStart) / flightRange;
      const flightProgress = Math.max(0, Math.min(1, rawProgress));

      // Calculate strictly-bound Left X coordinate
      const trackX = computeTrackX(rW);

      // Vertical altitude:
      // In Metrics (start point): floats at ~28% viewport height (level with cards/indicators as user marked)
      // At bottom of page: docks at ~vh - rH - 45px
      const startY = Math.max(160, Math.min(240, vh * 0.28));
      const maxY = Math.max(startY, vh - rH - 45);
      const travelSpan = maxY - startY;
      const baseY = startY + travelSpan * flightProgress;

      // Velocity push on altitude (slight downward dip on fast scroll)
      const velocityOffset = Math.max(-18, Math.min(18, scrollVelocity.current * 0.12));

      // Organic zero-G breathing float
      const floatBobY = reducedMotion ? 0 : Math.sin(timeRef.current * 2.2) * 5;
      const floatBobX = reducedMotion ? 0 : Math.cos(timeRef.current * 1.5) * 2;

      targetPos.current.x = trackX + floatBobX;
      targetPos.current.y = baseY + velocityOffset + floatBobY;

      // Velocity-reactive tilt (banks forward when scrolling down, flares up when scrolling up)
      if (!reducedMotion) {
        const velocityTilt = Math.max(-12, Math.min(12, scrollVelocity.current * 0.18));
        targetPos.current.rot = velocityTilt;
      } else {
        targetPos.current.rot = 0;
      }

      // First run snap
      if (!isInitialized.current) {
        currentPos.current.x = targetPos.current.x;
        currentPos.current.y = targetPos.current.y;
        currentPos.current.rot = targetPos.current.rot;
        currentOpacity.current = targetOpacity.current;
        isInitialized.current = true;
      }
    };

    const handleScroll = () => {
      updatePhysicsTargets();
    };

    const handleResize = () => {
      updatePhysicsTargets();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    updatePhysicsTargets();

    // 60/120fps Animation Loop with LERP interpolation
    const renderLoop = () => {
      timeRef.current += 0.025;

      updatePhysicsTargets();

      if (window.innerWidth < 1024) {
        if (robotRef.current) robotRef.current.style.display = "none";
        if (railContainerRef.current) railContainerRef.current.style.display = "none";
        animFrameId.current = requestAnimationFrame(renderLoop);
        return;
      }

      if (isInitialized.current && robotRef.current) {
        const { width: rW, height: rH } = getRobotDimensions();
        const lerpFactor = reducedMotion ? 1 : 0.085;

        // Position & Rotation LERP
        currentPos.current.x +=
          (targetPos.current.x - currentPos.current.x) * lerpFactor;
        currentPos.current.y +=
          (targetPos.current.y - currentPos.current.y) * lerpFactor;
        currentPos.current.rot +=
          (targetPos.current.rot - currentPos.current.rot) * lerpFactor;

        // Opacity LERP
        currentOpacity.current +=
          (targetOpacity.current - currentOpacity.current) * 0.14;

        const x = currentPos.current.x.toFixed(2);
        const y = currentPos.current.y.toFixed(2);
        const rot = currentPos.current.rot.toFixed(2);
        const op = Math.max(0, Math.min(1, currentOpacity.current));
        const isVisible = op > 0.005 && window.innerWidth >= 1024;

        // Apply to robot: strictly absent/hidden if on Hero or mobile
        robotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${rot}deg)`;
        robotRef.current.style.opacity = op.toFixed(3);
        robotRef.current.style.visibility = isVisible ? "visible" : "hidden";
        robotRef.current.style.display = isVisible ? "block" : "none";
        robotRef.current.style.pointerEvents = op > 0.4 ? "auto" : "none";

        // Keep the cyber rail line dead-centered behind the robot
        if (railContainerRef.current) {
          const railX = (currentPos.current.x + rW / 2).toFixed(1);
          railContainerRef.current.style.transform = `translate3d(${railX}px, 0, 0)`;
          railContainerRef.current.style.opacity = op.toFixed(3);
          railContainerRef.current.style.visibility = isVisible ? "visible" : "hidden";
          railContainerRef.current.style.display = isVisible ? "block" : "none";
        }

        // Update the active vertical laser trace on the left rail
        if (railLaserRef.current) {
          const laserHeight = Math.max(0, currentPos.current.y + rH * 0.45 - 96);
          railLaserRef.current.style.height = `${laserHeight.toFixed(1)}px`;
        }
      }

      // Periodically update percentage for telemetry pill
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      const docHeight = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight,
        vh
      );
      const maxScroll = Math.max(1, docHeight - vh);
      const pct = Math.round((scrollY / maxScroll) * 100);
      setScrollPercent(Math.min(100, Math.max(0, pct)));

      animFrameId.current = requestAnimationFrame(renderLoop);
    };

    animFrameId.current = requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animFrameId.current);
    };
  }, [reducedMotion]);

  return (
    <>
      {/* ───────────────── 1. Cyber Scroll Rail (Left Side Track) ───────────────── */}
      <div
        ref={railContainerRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-24 bottom-10 left-0 z-30 hidden lg:block select-none"
        style={{
          width: "2px",
          transform: "translate3d(-9999px, 0, 0)",
          opacity: 0,
          visibility: "hidden",
          display: "none",
        }}
      >
        {/* Ambient track glow guideline */}
        <div className="absolute inset-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-sky-500/20 to-transparent" />

        {/* Subtle dashed sci-fi laser guide */}
        <div
          className="absolute inset-0 w-px -translate-x-1/2 border-l border-dashed border-sky-400/25"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
          }}
        />

        {/* Active glowing trace laser matching current robot altitude */}
        <div
          ref={railLaserRef}
          className="absolute top-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-sky-400/0 via-sky-400/40 to-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.7)] transition-[height] duration-75 ease-out"
          style={{ height: "0px" }}
        />

        {/* Top & Bottom Cyber Node Dots */}
        <div className="absolute -top-1 left-0 -translate-x-1/2 flex h-2 w-2 items-center justify-center rounded-full border border-sky-400/40 bg-[#08090E]">
          <div className="h-1 w-1 rounded-full bg-sky-400" />
        </div>
        <div className="absolute -bottom-1 left-0 -translate-x-1/2 flex h-2 w-2 items-center justify-center rounded-full border border-sky-400/40 bg-[#08090E]">
          <div className="h-1 w-1 rounded-full bg-sky-400" />
        </div>
      </div>

      {/* ───────────────── 2. Hardware-Accelerated 3D Companion Robot ───────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-40 select-none overflow-hidden hidden lg:block"
      >
        <div
          ref={robotRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="pointer-events-auto absolute left-0 top-0 cursor-pointer will-change-transform transition-[filter] duration-300"
          style={{
            transform: "translate3d(-9999px, -9999px, 0)",
            opacity: 0,
            visibility: "hidden",
            display: "none",
          }}
          title="AI Companion — Click to return to top"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <div className="relative group/bot flex flex-col items-center">
            {/* Ambient Ion Thruster Aura */}
            <div
              className="pointer-events-none absolute -bottom-3 left-1/2 -translate-x-1/2 h-[30px] w-[85px] sm:w-[105px] rounded-full transition-all duration-300"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(56, 189, 248, 0.6) 0%, rgba(99, 102, 241, 0.3) 45%, transparent 75%)",
                filter: "blur(10px)",
                opacity: isHovered ? 1 : 0.75,
                transform: isHovered ? "scale(1.25)" : "scale(1)",
              }}
            />

            {/* 3D Cyber Companion Robot Graphic */}
            <Image
              src="/images/robot-companion.png"
              alt="3D Companion Robot"
              width={120}
              height={120}
              className="block h-auto w-[75px] md:w-[90px] lg:w-[105px] xl:w-[120px] object-contain transition-transform duration-300 ease-out group-hover/bot:scale-105"
              style={{
                filter: isHovered
                  ? "drop-shadow(0 20px 35px rgba(0,0,0,0.9)) drop-shadow(0 0 28px rgba(56,189,248,0.7))"
                  : "drop-shadow(0 15px 28px rgba(0,0,0,0.85)) drop-shadow(0 0 16px rgba(56,189,248,0.35))",
              }}
              loading="lazy"
              draggable={false}
            />

            {/* Cyber Telemetry Status Tag on Hover / Focus */}
            <div className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover/bot:opacity-100 transition-opacity duration-200">
              <span className="flex items-center gap-1.5 rounded-full border border-sky-400/35 bg-[#08090E]/95 px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-sky-300 shadow-lg shadow-sky-500/25 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-ping" />
                {scrollPercent}% {"//"} SCROLL TO TOP
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
