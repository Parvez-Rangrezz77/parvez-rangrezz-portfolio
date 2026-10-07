"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowDown, Terminal } from "lucide-react";
import { links } from "@/lib/site-config";
import { GithubIcon, LinkedinIcon } from "./ui/brand-icons";
import { HeroBackground } from "./ui/hero-background";
import { GlassOrbs } from "./ui/glass-orbs";

const stack = ["Python", "Java", "Generative AI", "LLMs", "AI Systems"];

const dynamicRoles = [
  "AI & Software Architecture",
  "Autonomous Agent Engineering",
  "Applied GenAI & LLM Pipelines",
  "Full-Stack Python & React",
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  // Cycling dynamic editorial subtitle
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const interval = window.setInterval(() => {
      setIsFading(true);
      window.setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % dynamicRoles.length);
        setIsFading(false);
      }, 250);
    }, 3200);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section id="top" className="relative isolate overflow-hidden pb-16 pt-32 sm:pt-36 lg:pb-24 lg:pt-44">
      {/* High-performance Interactive Particle & Ambient Canvas */}
      <HeroBackground />

      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-8 lg:grid-cols-12 lg:gap-8">
        {/* Left Column: Bold Typography, Peeking 3D Robot & Action Badges */}
        <div className="lg:col-span-6 xl:col-span-6">
          {/* Top Yellow Tape Badge with Live Radar Pulse */}
          <div className="mb-5 sm:mb-6 flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="tape-badge group cursor-default text-[11px] sm:text-xs transition-transform duration-200 hover:-rotate-1 hover:scale-[1.03]">
              <span className="relative mr-2 flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-obsidian opacity-80" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-obsidian" />
              </span>
              Available for Opportunities
            </span>
            <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.16em] sm:tracking-[0.2em] text-muted flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-yellow animate-pulse-soft" />
              {"// 2026 Edition · Active"}
            </span>
          </div>

          {/* Headline with Vertical Animated Guideline */}
          <div className="relative pl-6 sm:pl-10">
            {/* 3D AI Robot Assistant: Floats elegantly on top-right on mobile (zero text overlap), peeks on left rail on desktop */}
            <div
              className="group/robot absolute right-2 -top-10 sm:right-auto sm:left-0 sm:-top-5 z-20 select-none transition-transform duration-300 hover:scale-[1.03] w-[80px] sm:w-[160px] lg:w-[220px] translate-x-0 sm:-translate-x-[62%]"
              style={{
                filter:
                  "drop-shadow(0 15px 35px rgba(0,0,0,0.9)) drop-shadow(0 0 25px rgba(56,189,248,0.35))",
              }}
            >
              {/* Floating Jarvis Status Badge above robot */}
              <div 
                className="absolute -top-3.5 sm:-top-4 right-0 sm:right-auto sm:left-6 flex items-center gap-1 sm:gap-1.5 rounded-full border border-yellow/35 bg-[#08090E]/95 px-2 sm:px-2.5 py-0.5 font-mono text-[8.5px] sm:text-[9.5px] uppercase tracking-wider text-yellow shadow-lg shadow-yellow/15 backdrop-blur-md whitespace-nowrap"
                style={{ animation: "float 6s ease-in-out infinite" }}
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-yellow" />
                </span>
                JARVIS AI // ONLINE
              </div>

              {/* Robot Image */}
              <Image
                src="/images/robot-peeking.png"
                alt="JARVIS AI Assistant"
                width={240}
                height={240}
                priority
                className="h-auto w-full object-contain transition-all duration-300 group-hover/robot:drop-shadow-[0_0_25px_rgba(56,189,248,0.6)]"
              />
            </div>

            {/* Vertical dashed guideline with square node markers and continuous optical laser */}
            <div className="absolute bottom-1 left-0 top-2 flex flex-col items-center z-10">
              <span className="relative flex h-2 w-2 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-sm bg-yellow opacity-60" />
                <span className="relative h-2 w-2 bg-yellow shrink-0" />
              </span>
              <div className="relative w-px flex-1 border-l border-dashed border-olive/50 my-1 overflow-hidden">
                <span className="guideline-laser" />
              </div>
              <span className="relative flex h-2 w-2 items-center justify-center">
                <span
                  className="absolute inline-flex h-full w-full animate-ping rounded-sm bg-yellow opacity-60"
                  style={{ animationDelay: "1.4s" }}
                />
                <span className="relative h-2 w-2 bg-yellow shrink-0" />
              </span>
            </div>

            <h1 className="font-display uppercase font-bold leading-[0.92] sm:leading-[0.88] tracking-[-0.03em] select-none">
              {/* Off-white primary word */}
              <span className="block text-[clamp(2.4rem,7.5vw,5.8rem)] text-ink transition-transform duration-300 hover:translate-x-1">
                PARVEZ
              </span>
              {/* Vivid warm yellow highlight word with subtle glow */}
              <span className="block text-[clamp(2.4rem,7.5vw,5.8rem)] text-yellow transition-transform duration-300 hover:translate-x-1 hover:drop-shadow-[0_0_35px_rgba(245,213,0,0.45)]">
                RANGREZZ
              </span>
            </h1>

            {/* Bottom Dynamic Tape Badge / Marker with Animated Role Rotator */}
            <div className="mt-4 flex flex-wrap items-center gap-2 sm:gap-2.5">
              <span className="tape-badge bg-gradient-to-r from-sky-400 to-indigo-500 text-[#030712] min-w-[170px] sm:min-w-[200px] text-xs sm:text-sm transition-all duration-300 shadow-[0_2px_14px_-2px_rgba(56,189,248,0.4)]">
                <span
                  className={`inline-block transition-all duration-300 ${
                    isFading ? "opacity-0 -translate-y-1.5" : "opacity-100 translate-y-0"
                  }`}
                >
                  {dynamicRoles[roleIndex]}
                </span>
              </span>
              <span className="inline-flex items-center gap-1.5 rounded bg-white/[0.04] border border-white/[0.08] px-2 py-0.5 sm:px-2.5 font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-muted">
                <Terminal size={11} className="text-yellow" /> Full Stack & LLMs
              </span>
            </div>
          </div>

          {/* Technical Stack Labels with Staggered Hover Glow */}
          <ul className="mt-7 sm:mt-8 flex flex-wrap items-center gap-1.5 sm:gap-2 font-mono text-xs text-muted">
            {stack.map((s, i) => (
              <li key={s} className="flex items-center gap-1.5 sm:gap-2">
                {i > 0 && <span className="text-olive/70 font-bold">•</span>}
                <span className="rounded border border-white/[0.07] bg-[#0e131f]/80 px-2 sm:px-2.5 py-1 text-ink/90 transition-all duration-300 hover:border-yellow/40 hover:bg-yellow/[0.08] hover:text-yellow hover:-translate-y-0.5 hover:shadow-[0_4px_16px_-4px_rgba(56,189,248,0.3)] cursor-default text-[11px] sm:text-xs">
                  {s}
                </span>
              </li>
            ))}
          </ul>

          {/* Tagline / Mission Statement - Highly Attractive & Responsive */}
          <div className="group/tagline relative mt-7 max-w-xl">
            <div className="relative border-l-2 border-yellow/60 pl-4 py-0.5 transition-colors duration-300 group-hover/tagline:border-yellow">
              <p className="text-pretty font-sans text-sm leading-relaxed text-slate-300 sm:text-base md:text-lg lg:text-xl lg:leading-relaxed">
                Building{" "}
                <span className="font-semibold text-white drop-shadow-[0_0_16px_rgba(255,255,255,0.2)]">
                  intelligent systems
                </span>{" "}
                where{" "}
                <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-400 bg-clip-text font-semibold text-transparent">
                  software engineering
                </span>{" "}
                meets{" "}
                <span className="relative inline-block font-semibold text-yellow drop-shadow-[0_0_20px_rgba(56,189,248,0.45)]">
                  generative AI
                  <span className="absolute -bottom-0.5 left-0 h-[2px] w-full rounded-full bg-gradient-to-r from-yellow via-cyan-400 to-indigo-500 opacity-80" />
                </span>
                .
              </p>
            </div>
          </div>

          {/* High-Contrast Editorial Action Buttons with Shimmer & Spring Effects */}
          <div className="mt-8 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
            <a
              href="#projects"
              id="hero-cta-projects"
              className="btn-shimmer group inline-flex items-center justify-center gap-2.5 rounded-lg bg-gradient-to-r from-sky-400 to-cyan-400 px-5 py-3 font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-[#030712] shadow-lg shadow-black/40 transition-all duration-300 hover:from-sky-300 hover:to-cyan-300 hover:shadow-[0_4px_28px_rgba(56,189,248,0.45)] hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>View Flagship Project</span>
              <ArrowDown
                size={14}
                className="transition-transform duration-300 group-hover:translate-y-1 animate-bounce"
              />
            </a>
            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-cta-github"
                className="glass flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 sm:py-3 font-mono text-xs uppercase tracking-wider font-semibold text-ink transition-all duration-200 hover:border-yellow/30 hover:bg-white/[0.07] hover:-translate-y-0.5"
              >
                <GithubIcon size={15} /> GitHub
              </a>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-cta-linkedin"
                className="glass flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 sm:py-3 font-mono text-xs uppercase tracking-wider font-semibold text-ink transition-all duration-200 hover:border-yellow/30 hover:bg-white/[0.07] hover:-translate-y-0.5"
              >
                <LinkedinIcon size={14} /> LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: 3D Floating Glass AI Ecosystem Orbs Cluster */}
        <div className="lg:col-span-6 xl:col-span-6 flex items-center justify-center relative">
          <GlassOrbs />
        </div>
      </div>

    </section>
  );
}
