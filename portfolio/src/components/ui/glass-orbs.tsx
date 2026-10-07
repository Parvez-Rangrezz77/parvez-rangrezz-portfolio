"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";

interface OrbData {
  id: string;
  name: string;
  sublabel?: string;
  category: string;
  size: number;
  iconSize?: number;
  x: number;
  y: number;
  floatClass: string;
  glowColor: string;
  accentColor: string;
  iconFile: string;
  depth: number;
  scatterX: number;
  scatterY: number;
  scatterRotate: number;
  scatterScale: number;
}

export function GlassOrbs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeOrb, setActiveOrb] = useState<string | null>(null);

  // High-performance lerped mouse tracker — runs 100% on GPU via CSS custom properties
  // ZERO React re-renders on mousemove!
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const mouseTarget = { x: 0, y: 0 };
    const mouseCurrent = { x: 0, y: 0 };
    let animId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const x = (e.clientX - centerX) / (rect.width / 2);
      const y = (e.clientY - centerY) / (rect.height / 2);
      mouseTarget.x = Math.max(-1, Math.min(1, x));
      mouseTarget.y = Math.max(-1, Math.min(1, y));
    };

    const handleMouseLeave = () => {
      mouseTarget.x = 0;
      mouseTarget.y = 0;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    el.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    // Smooth 60fps lerp loop updating CSS variables directly
    const updatePhysics = () => {
      const lerp = 0.08;
      mouseCurrent.x += (mouseTarget.x - mouseCurrent.x) * lerp;
      mouseCurrent.y += (mouseTarget.y - mouseCurrent.y) * lerp;

      el.style.setProperty("--mx", mouseCurrent.x.toFixed(4));
      el.style.setProperty("--my", mouseCurrent.y.toFixed(4));

      animId = requestAnimationFrame(updatePhysics);
    };

    animId = requestAnimationFrame(updatePhysics);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animId);
    };
  }, []);

  // High-performance scroll dispersal tracker — updates CSS property directly
  // ZERO React re-renders on scroll!
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY || window.pageYOffset || 0;
          const maxScroll = 420;
          const p = Math.min(1, Math.max(0, scrollY / maxScroll));
          el.style.setProperty("--sp", p.toFixed(3));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // AI & Developer Ecosystem Nodes with Official Brand Icons & Optimized Dispersal Trajectories
  const orbs: OrbData[] = useMemo(
    () => [
      // 1. Centerpiece: Microsoft Copilot
      {
        id: "copilot",
        name: "Copilot",
        sublabel: "Microsoft",
        category: "Code & OS AI",
        size: 94,
        iconSize: 32,
        x: 49,
        y: 49,
        floatClass: "animate-orb-float-1",
        glowColor: "rgba(56, 189, 248, 0.45)",
        accentColor: "#38BDF8",
        iconFile: "copilot.svg",
        depth: 0.1,
        scatterX: -30,
        scatterY: -450,
        scatterRotate: -15,
        scatterScale: 0.55,
      },
      // 2. Google Gemini
      {
        id: "gemini",
        name: "Google Gemini",
        category: "Multimodal AI",
        size: 86,
        iconSize: 32,
        x: 67,
        y: 47,
        floatClass: "animate-orb-float-2",
        glowColor: "rgba(129, 140, 248, 0.45)",
        accentColor: "#818CF8",
        iconFile: "gemini.svg",
        depth: 0.11,
        scatterX: 380,
        scatterY: -160,
        scatterRotate: 30,
        scatterScale: 0.6,
      },
      // 3. Antigravity IDE
      {
        id: "antigravity",
        name: "Antigravity",
        sublabel: "Google IDE",
        category: "Agentic IDE",
        size: 82,
        iconSize: 28,
        x: 35,
        y: 50,
        floatClass: "animate-orb-float-3",
        glowColor: "rgba(56, 189, 248, 0.4)",
        accentColor: "#38BDF8",
        iconFile: "antigravity.svg",
        depth: 0.1,
        scatterX: -380,
        scatterY: 80,
        scatterRotate: -35,
        scatterScale: 0.6,
      },
      // 4. Anthropic Claude
      {
        id: "claude",
        name: "Anthropic Claude",
        category: "Reasoning LLM",
        size: 80,
        iconSize: 28,
        x: 43,
        y: 29,
        floatClass: "animate-orb-float-4",
        glowColor: "rgba(249, 115, 22, 0.4)",
        accentColor: "#FB923C",
        iconFile: "claude.svg",
        depth: 0.08,
        scatterX: -220,
        scatterY: -390,
        scatterRotate: -45,
        scatterScale: 0.5,
      },
      // 5. Meta AI
      {
        id: "meta",
        name: "Meta AI",
        category: "Llama 3.3",
        size: 78,
        iconSize: 28,
        x: 58,
        y: 33,
        floatClass: "animate-orb-float-1",
        glowColor: "rgba(168, 85, 247, 0.4)",
        accentColor: "#A855F7",
        iconFile: "meta.svg",
        depth: 0.09,
        scatterX: 280,
        scatterY: -370,
        scatterRotate: 40,
        scatterScale: 0.5,
      },
      // 6. DeepSeek
      {
        id: "deepseek",
        name: "DeepSeek",
        category: "Reasoning V3",
        size: 80,
        iconSize: 32,
        x: 74,
        y: 22,
        floatClass: "animate-orb-float-3",
        glowColor: "rgba(59, 130, 246, 0.45)",
        accentColor: "#60A5FA",
        iconFile: "deepseek.svg",
        depth: 0.07,
        scatterX: 460,
        scatterY: -340,
        scatterRotate: 45,
        scatterScale: 0.4,
      },
      // 7. OpenAI Codex
      {
        id: "codex",
        name: "OpenAI Codex",
        category: "Code Synthesis",
        size: 72,
        iconSize: 26,
        x: 36,
        y: 19,
        floatClass: "animate-orb-float-2",
        glowColor: "rgba(16, 185, 129, 0.35)",
        accentColor: "#34D399",
        iconFile: "codex.svg",
        depth: 0.08,
        scatterX: -400,
        scatterY: -350,
        scatterRotate: -40,
        scatterScale: 0.4,
      },
      // 8. ChatGPT
      {
        id: "chatgpt",
        name: "ChatGPT",
        category: "GPT-4o",
        size: 78,
        iconSize: 30,
        x: 21,
        y: 23,
        floatClass: "animate-orb-float-4",
        glowColor: "rgba(16, 185, 129, 0.45)",
        accentColor: "#10B981",
        iconFile: "chatgpt.svg",
        depth: 0.06,
        scatterX: -490,
        scatterY: -280,
        scatterRotate: -55,
        scatterScale: 0.4,
      },
      // 9. OpenAI
      {
        id: "openai",
        name: "OpenAI",
        sublabel: "API & Models",
        category: "Foundation AI",
        size: 74,
        iconSize: 28,
        x: 15,
        y: 48,
        floatClass: "animate-orb-float-1",
        glowColor: "rgba(45, 212, 191, 0.35)",
        accentColor: "#2DD4BF",
        iconFile: "openai.svg",
        depth: 0.05,
        scatterX: -540,
        scatterY: -60,
        scatterRotate: -30,
        scatterScale: 0.5,
      },
      // 10. Kimi AI
      {
        id: "kimi",
        name: "Kimi AI",
        category: "Moonshot AI",
        size: 74,
        iconSize: 28,
        x: 29,
        y: 39,
        floatClass: "animate-orb-float-3",
        glowColor: "rgba(96, 165, 250, 0.4)",
        accentColor: "#60A5FA",
        iconFile: "kimi.svg",
        depth: 0.08,
        scatterX: -350,
        scatterY: -230,
        scatterRotate: -25,
        scatterScale: 0.55,
      },
      // 11. GitHub
      {
        id: "github",
        name: "GitHub",
        category: "Version Control",
        size: 78,
        iconSize: 28,
        x: 57,
        y: 68,
        floatClass: "animate-orb-float-2",
        glowColor: "rgba(255, 255, 255, 0.3)",
        accentColor: "#F8FAFC",
        iconFile: "github.svg",
        depth: 0.1,
        scatterX: 300,
        scatterY: 390,
        scatterRotate: 35,
        scatterScale: 0.5,
      },
      // 12. Git
      {
        id: "git",
        name: "Git",
        category: "Source Flow",
        size: 74,
        iconSize: 28,
        x: 43,
        y: 71,
        floatClass: "animate-orb-float-4",
        glowColor: "rgba(249, 115, 22, 0.4)",
        accentColor: "#F97316",
        iconFile: "git.svg",
        depth: 0.08,
        scatterX: -280,
        scatterY: 410,
        scatterRotate: -30,
        scatterScale: 0.5,
      },
      // 13. Grok Bot
      {
        id: "grok",
        name: "Grok Bot",
        sublabel: "xAI",
        category: "Real-time AI",
        size: 76,
        iconSize: 28,
        x: 84,
        y: 43,
        floatClass: "animate-orb-float-2",
        glowColor: "rgba(255, 255, 255, 0.3)",
        accentColor: "#FFFFFF",
        iconFile: "grok.svg",
        depth: 0.07,
        scatterX: 530,
        scatterY: -40,
        scatterRotate: 45,
        scatterScale: 0.45,
      },
      // 14. ElevenLabs
      {
        id: "elevenlabs",
        name: "ElevenLabs",
        category: "Voice Synthesis",
        size: 76,
        iconSize: 28,
        x: 81,
        y: 69,
        floatClass: "animate-orb-float-3",
        glowColor: "rgba(168, 85, 247, 0.4)",
        accentColor: "#C084FC",
        iconFile: "elevenlabs.svg",
        depth: 0.09,
        scatterX: 470,
        scatterY: 350,
        scatterRotate: 50,
        scatterScale: 0.4,
      },
      // 15. Canva
      {
        id: "canva",
        name: "Canva",
        category: "Visual Design",
        size: 74,
        iconSize: 28,
        x: 67,
        y: 77,
        floatClass: "animate-orb-float-1",
        glowColor: "rgba(14, 165, 233, 0.4)",
        accentColor: "#38BDF8",
        iconFile: "canva.svg",
        depth: 0.1,
        scatterX: 350,
        scatterY: 430,
        scatterRotate: 30,
        scatterScale: 0.5,
      },
      // 16. NotebookLM
      {
        id: "notebooklm",
        name: "NotebookLM",
        category: "Document AI",
        size: 74,
        iconSize: 28,
        x: 25,
        y: 65,
        floatClass: "animate-orb-float-4",
        glowColor: "rgba(56, 189, 248, 0.4)",
        accentColor: "#38BDF8",
        iconFile: "notebooklm.svg",
        depth: 0.07,
        scatterX: -450,
        scatterY: 330,
        scatterRotate: -45,
        scatterScale: 0.45,
      },
      // 17. Google AI Studio
      {
        id: "aistudio",
        name: "AI Studio",
        sublabel: "Google AI",
        category: "Prompt & LLM API",
        size: 78,
        iconSize: 32,
        x: 74,
        y: 58,
        floatClass: "animate-orb-float-1",
        glowColor: "rgba(66, 133, 244, 0.45)",
        accentColor: "#4285F4",
        iconFile: "aistudio.svg",
        depth: 0.08,
        scatterX: 430,
        scatterY: 200,
        scatterRotate: 25,
        scatterScale: 0.55,
      },
      // 18. Flow Labs
      {
        id: "flowlabs",
        name: "Flow Labs",
        sublabel: "Workflow",
        category: "Pipelines",
        size: 68,
        iconSize: 26,
        x: 34,
        y: 81,
        floatClass: "animate-orb-float-2",
        glowColor: "rgba(59, 130, 246, 0.35)",
        accentColor: "#60A5FA",
        iconFile: "flowlabs.svg",
        depth: 0.06,
        scatterX: -190,
        scatterY: 450,
        scatterRotate: -20,
        scatterScale: 0.4,
      },
    ],
    []
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[340px] sm:h-[460px] lg:h-[540px] max-w-full sm:max-w-[480px] lg:max-w-none mx-auto select-none overflow-hidden lg:overflow-visible [--scatter-factor:0.25] sm:[--scatter-factor:0.6] lg:[--scatter-factor:1]"
      style={{
        // Default CSS fallback variables
        "--mx": "0",
        "--my": "0",
        "--sp": "0",
      } as React.CSSProperties}
    >
      <div className="relative w-full h-full scale-[0.7] sm:scale-[0.88] lg:scale-100 origin-center transition-transform duration-300">
        {/* Ambient background glow center — lightweight radial gradient */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[340px] rounded-full bg-gradient-to-tr from-[#38BDF8]/10 via-[#6366F1]/12 to-[#A855F7]/10 blur-[80px]"
          style={{
            opacity: "calc(max(0, 0.75 * (1 - var(--sp, 0) * 1.25)))",
            transform: "translate(-50%, -50%) scale(calc(1 + var(--sp, 0) * 0.3))",
          }}
          aria-hidden
        />

        {/* Interactive Orbs Cluster with High-Performance GPU Compositing */}
        {orbs.map((orb) => {
          const isHovered = activeOrb === orb.id;

          return (
            <div
              key={orb.id}
              onMouseEnter={() => setActiveOrb(orb.id)}
              onMouseLeave={() => setActiveOrb(null)}
              className="absolute will-change-transform"
              style={{
                left: `${orb.x}%`,
                top: `${orb.y}%`,
                width: orb.size,
                height: orb.size,
                transform: `translate(-50%, -50%) translate3d(
                  calc(var(--mx, 0) * ${orb.depth * 55}px + (${orb.scatterX}px * var(--scatter-factor, 1)) * var(--sp, 0)),
                  calc(var(--my, 0) * ${orb.depth * 55}px + (${orb.scatterY}px * var(--scatter-factor, 1)) * var(--sp, 0)),
                  0
                ) rotate(calc(${orb.scatterRotate}deg * var(--sp, 0))) scale(calc(1 - var(--sp, 0) * ${1 - orb.scatterScale}))`,
                opacity: "calc(max(0, 1 - var(--sp, 0) * 1.35))",
                zIndex: isHovered ? 40 : orb.size > 85 ? 25 : 20,
                cursor: "pointer",
              }}
            >
              {/* Zero-G Gentle Floating Animation Wrapper */}
              <div className={`w-full h-full ${orb.floatClass}`}>
                {/* High-Performance 3D Glass Sphere Body (No expensive runtime backdrop-blur!) */}
                <div
                  className="relative w-full h-full rounded-full flex flex-col items-center justify-center transition-transform duration-200 ease-out"
                  style={{
                    background:
                      "radial-gradient(circle at 35% 28%, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0.06) 45%, rgba(10, 14, 23, 0.94) 85%)",
                    border: isHovered
                      ? `1.5px solid ${orb.accentColor}`
                      : "1px solid rgba(255, 255, 255, 0.18)",
                    boxShadow: isHovered
                      ? `0 12px 28px -4px rgba(0,0,0,0.8), 0 0 22px ${orb.glowColor}`
                      : `0 6px 18px -4px rgba(0,0,0,0.6), 0 0 10px ${orb.glowColor}`,
                    transform: isHovered ? "scale(1.15)" : "scale(1)",
                  }}
                >
                  {/* Curved Top Specular Glass Reflection */}
                  <div
                    className="pointer-events-none absolute rounded-full"
                    style={{
                      top: "8%",
                      left: "20%",
                      width: "60%",
                      height: "30%",
                      background:
                        "linear-gradient(to bottom, rgba(255, 255, 255, 0.6) 0%, transparent 100%)",
                      opacity: isHovered ? 0.9 : 0.65,
                    }}
                    aria-hidden
                  />

                  {/* Inside Content: Real Official Brand Icon & Label */}
                  <div className="relative z-10 flex flex-col items-center justify-center text-center px-1">
                    <Image
                      src={`/icons/${orb.iconFile}`}
                      alt={orb.name}
                      width={orb.iconSize || 28}
                      height={orb.iconSize || 28}
                      className="object-contain drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]"
                      loading="lazy"
                    />
                    <span
                      className="mt-1 block font-sans text-[9px] sm:text-[10px] font-semibold text-white leading-none truncate max-w-[70px]"
                      style={{ letterSpacing: "-0.01em" }}
                    >
                      {orb.name}
                    </span>
                    {orb.sublabel && (
                      <span className="block font-mono text-[7px] uppercase tracking-wider text-muted/80 leading-none mt-0.5">
                        {orb.sublabel}
                      </span>
                    )}
                  </div>

                  {/* Floating Tooltip Pill on Hover */}
                  {isHovered && (
                    <div
                      className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/20 bg-[#08090E]/95 px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-sky-300 shadow-xl z-50 flex items-center gap-1.5 animate-fade-in"
                      style={{
                        boxShadow: `0 4px 14px ${orb.glowColor}`,
                      }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: orb.accentColor }}
                      />
                      <span>{orb.category}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Subtle live indicator badge at the bottom of the ecosystem */}
      <div
        className="absolute bottom-1 sm:bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-1.5 sm:gap-2 rounded-full border border-white/10 bg-[#08090E]/90 px-2.5 sm:px-3.5 py-1 z-30 shadow-lg backdrop-blur-md"
        style={{
          opacity: "calc(max(0, 1 - var(--sp, 0) * 1.8))",
          transform: "translate(-50%, calc(var(--sp, 0) * 20px))",
        }}
      >
        <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-sky-400" />
        </span>
        <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.16em] sm:tracking-[0.2em] text-white/80 whitespace-nowrap">
          AI ECOSYSTEM // 18 ACTIVE NODES
        </span>
      </div>
    </div>
  );
}
