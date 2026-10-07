"use client";

import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

/**
 * ─────────────────────────────────────────────────────────────
 * 3D MONOGRAM "P" — Precision Engineered Matte Graphite & Cyan
 * 
 * Renders an architectural 3D monogram of the letter "P" with:
 * - 16 stacked extrusion slices for genuine physical 3D volume
 * - Matte dark graphite / brushed titanium material
 * - Thin illuminated cyan-blue rim light
 * - Ambient ground occlusion & cyan reflection
 * - Elliptical orbital ring with slow continuous revolution
 * - Smooth cursor tracking with damping & subtle floating motion
 * - Full prefers-reduced-motion support
 * ─────────────────────────────────────────────────────────────
 */

// Architectural geometric path for the letter "P" (100x120 viewBox)
// Compound path with fillRule="evenodd" to create solid stem & carved bowl counter
const MONOGRAM_PATH =
  "M 20 16 C 20 13.8 21.8 12 24 12 L 58 12 C 74 12 86 23.5 86 38 C 86 52.5 74 64 58 64 L 37 64 L 37 104 C 37 106.2 35.2 108 33 108 L 24 108 C 21.8 108 20 106.2 20 104 Z M 37 25 L 56 25 C 66 25 73 30.8 73 38 C 73 45.2 66 51 56 51 L 37 51 Z";

// Total extrusion depth slices
const SLICE_COUNT = 16;
const SLICE_DEPTH = 1.35; // px per slice along Z

interface Monogram3DProps {
  mouseOffset: { x: number; y: number };
}

export function Monogram3D({ mouseOffset }: Monogram3DProps) {
  const reducedMotion = usePrefersReducedMotion();
  const animRef = useRef<number>(0);
  const bodyRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const shadowRef = useRef<HTMLDivElement>(null);

  // Smooth interpolated rotation
  const rotRef = useRef({ x: 0, y: 0, floatY: 0 });

  // Idle floating and continuous slow rotation loop
  useEffect(() => {
    if (reducedMotion) {
      if (bodyRef.current) bodyRef.current.style.transform = "";
      if (shadowRef.current) shadowRef.current.style.transform = "";
      if (ringRef.current) ringRef.current.style.transform = "translateZ(-2px) rotateX(74deg) rotateY(10deg)";
      return;
    }

    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = (now - start) / 1000;

      // Interpolate mouse tilt with smooth damping (lerp)
      const targetX = -mouseOffset.y * 13;
      const targetY = mouseOffset.x * 16;
      const targetFloat = Math.sin(elapsed * 1.3) * 6;

      rotRef.current.x += (targetX - rotRef.current.x) * 0.08;
      rotRef.current.y += (targetY - rotRef.current.y) * 0.08;
      rotRef.current.floatY += (targetFloat - rotRef.current.floatY) * 0.08;

      const ambientYaw = Math.cos(elapsed * 0.7) * 3;
      const currentRotX = rotRef.current.x;
      const currentRotY = rotRef.current.y + ambientYaw;
      const currentFloatY = rotRef.current.floatY;

      if (bodyRef.current) {
        bodyRef.current.style.transform = `translateY(${currentFloatY}px) rotateX(${currentRotX}deg) rotateY(${currentRotY}deg)`;
      }
      if (shadowRef.current) {
        shadowRef.current.style.transform = `translateY(${currentFloatY * 0.4}px) scale(${1 - currentFloatY * 0.02})`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translateZ(-2px) rotateX(74deg) rotateY(10deg) rotateZ(${elapsed * 12}deg)`;
      }

      animRef.current = requestAnimationFrame(tick);
    };

    animRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animRef.current);
  }, [mouseOffset, reducedMotion]);

  return (
    <div className="relative mx-auto flex h-[190px] w-[260px] sm:h-[220px] sm:w-[300px] items-center justify-center select-none">
      {/* 3D Perspective Canvas Container */}
      <div
        className="relative flex items-center justify-center"
        style={{
          perspective: "1100px",
          perspectiveOrigin: "50% 50%",
        }}
      >
        {/* Subtle Elliptical Orbital Ring (Tilted in 3D around the monogram) */}
        <div
          ref={ringRef}
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: "240px",
            height: "120px",
            transform: "translateZ(-2px) rotateX(74deg) rotateY(10deg)",
            transformStyle: "preserve-3d",
            transition: reducedMotion ? "none" : "transform 0.1s linear",
          }}
          aria-hidden
        >
          <svg viewBox="0 0 240 120" className="h-full w-full overflow-visible">
            <defs>
              {/* Subtle orbital highlight gradient: mostly dark slate with crisp cyan flare */}
              <linearGradient id="orbitalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1e293b" stopOpacity="0.4" />
                <stop offset="35%" stopColor="#38bdf8" stopOpacity="0.85" />
                <stop offset="65%" stopColor="#1e293b" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#0f172a" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            {/* The single refined orbital ring */}
            <ellipse
              cx="120"
              cy="60"
              rx="115"
              ry="55"
              fill="none"
              stroke="url(#orbitalGrad)"
              strokeWidth="1.1"
              strokeDasharray="4 2 240 2"
            />
            {/* Subtle orbital traveling beacon dot */}
            <circle
              cx="235"
              cy="60"
              r="2"
              fill="#38bdf8"
              className="drop-shadow-[0_0_6px_#38bdf8]"
            />
          </svg>
        </div>

        {/* Ambient Floor Shadow & Cyan Reflection */}
        <div
          ref={shadowRef}
          className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 rounded-full"
          style={{
            width: "130px",
            height: "28px",
            background:
              "radial-gradient(ellipse at center, rgba(0,0,0,0.85) 0%, rgba(56,189,248,0.12) 40%, transparent 75%)",
            filter: "blur(10px)",
          }}
          aria-hidden
        />

        {/* 3D Physical Monogram Body with Stacked Extrusion */}
        <div
          ref={bodyRef}
          className="relative h-[130px] w-[110px] sm:h-[150px] sm:w-[125px]"
          style={{
            transformStyle: "preserve-3d",
            willChange: "transform",
          }}
          role="img"
          aria-label="3D Monogram of letter P representing Parvez"
        >
          {/* Back Extrusion Slices (rendered from back to front along Z) */}
          {Array.from({ length: SLICE_COUNT }).map((_, index) => {
            const z = -((SLICE_COUNT - 1 - index) * SLICE_DEPTH);
            const isBack = index === 0;
            const darkTone = 10 + Math.round((index / SLICE_COUNT) * 14);

            return (
              <div
                key={`slice-${index}`}
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  transform: `translateZ(${z}px)`,
                  transformStyle: "preserve-3d",
                }}
              >
                <svg viewBox="0 0 100 120" className="h-full w-full">
                  <path
                    d={MONOGRAM_PATH}
                    fillRule="evenodd"
                    fill={isBack ? "#05070a" : `rgb(${darkTone}, ${darkTone + 3}, ${darkTone + 8})`}
                    stroke={index % 2 === 0 ? "rgba(56, 189, 248, 0.16)" : "rgba(30, 41, 59, 0.5)"}
                    strokeWidth="0.8"
                  />
                </svg>
              </div>
            );
          })}

          {/* Front Face (Matte Graphite with Illuminated Cyan Edge & Metallic Chamfer) */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              transform: `translateZ(${SLICE_DEPTH * 1.5}px)`,
              transformStyle: "preserve-3d",
              filter: "drop-shadow(0 0 16px rgba(56, 189, 248, 0.22))",
            }}
          >
            <svg viewBox="0 0 100 120" className="h-full w-full">
              <defs>
                {/* Brushed dark graphite surface gradient */}
                <linearGradient id="pSurfaceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#222a36" />
                  <stop offset="40%" stopColor="#151b24" />
                  <stop offset="85%" stopColor="#0b0e14" />
                  <stop offset="100%" stopColor="#07090e" />
                </linearGradient>

                {/* Electric Cyan Rim Highlight (hits the key light on the top & left) */}
                <linearGradient id="pRimGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.95" />
                  <stop offset="30%" stopColor="#38bdf8" stopOpacity="0.7" />
                  <stop offset="70%" stopColor="#1e293b" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#0f172a" stopOpacity="0.4" />
                </linearGradient>

                {/* Subtle metallic specular diagonal bar */}
                <linearGradient id="pMetallicSheen" x1="20%" y1="0%" x2="80%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.12" />
                  <stop offset="35%" stopColor="#ffffff" stopOpacity="0.04" />
                  <stop offset="65%" stopColor="#000000" stopOpacity="0" />
                  <stop offset="100%" stopColor="#000000" stopOpacity="0.3" />
                </linearGradient>
              </defs>

              {/* Main Face Fill */}
              <path
                d={MONOGRAM_PATH}
                fillRule="evenodd"
                fill="url(#pSurfaceGrad)"
              />

              {/* Subtle Metallic Diagonal Sheen Overlay */}
              <path
                d={MONOGRAM_PATH}
                fillRule="evenodd"
                fill="url(#pMetallicSheen)"
              />

              {/* Thin Crisp Illuminated Cyan Perimeter Edge */}
              <path
                d={MONOGRAM_PATH}
                fillRule="evenodd"
                fill="none"
                stroke="url(#pRimGrad)"
                strokeWidth="1.35"
              />

              {/* Faint Inner Glow Stroke */}
              <path
                d={MONOGRAM_PATH}
                fillRule="evenodd"
                fill="none"
                stroke="#38bdf8"
                strokeWidth="0.6"
                strokeOpacity="0.4"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
