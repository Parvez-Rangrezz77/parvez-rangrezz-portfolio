"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ToolBrandLogo } from "./ui/brand-icons";
import { SpotlightCard } from "./ui/spotlight-card";
import { Reveal } from "./ui/reveal";

export interface ToolItem {
  name: string;
  tag: string;
}

export const toolsList: ToolItem[] = [
  { name: "Claude Code", tag: "Agentic CLI" },
  { name: "Claude", tag: "Anthropic AI" },
  { name: "ChatGPT", tag: "Conversational AI" },
  { name: "Codex", tag: "Code Generation" },
  { name: "DeepSeek", tag: "Code & Reasoning" },
  { name: "Kimi AI", tag: "LLM & Reasoning" },
  { name: "Meta AI", tag: "Multi-Modal AI" },
  { name: "Antigravity CLI", tag: "Agentic Workflow" },
  { name: "Grok", tag: "Real-time AI" },
  { name: "Grok Bot", tag: "Autonomous Agent" },
  { name: "AI Studio", tag: "Gemini Developer" },
  { name: "Canva", tag: "Visual Architecture" },
  { name: "MiniMax", tag: "Generative Audio & AI" },
  { name: "Perplexity", tag: "Neural Research" },
];

export function ToolsUsed() {
  const [activeBlinkIndex, setActiveBlinkIndex] = useState(0);

  // Sequential blinking loop that illuminates each tool card one by one
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const interval = setInterval(() => {
      setActiveBlinkIndex((prev) => (prev + 1) % toolsList.length);
    }, 850);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="tools" className="relative py-24 md:py-32">
      {/* Background ambient radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[750px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow/5 blur-[160px]"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header Row: Left = Section Heading, Right = 3D Developer Figure in Globe Chair */}
        <div className="mb-12 flex flex-col items-start justify-between gap-8 md:mb-16 lg:flex-row lg:items-center">
          {/* Left Column: Heading & Narrative */}
          <Reveal className="max-w-2xl lg:max-w-3xl">
            {/* Editorial technical label */}
            <div className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-muted">
              <span className="flex items-center gap-1.5 font-bold text-yellow">
                <span className="inline-block h-1.5 w-1.5 bg-yellow" />
                [05]
              </span>
              <span className="h-px w-6 border-t border-dashed border-olive/60" />
              <span className="font-semibold text-ink/85">Workflow & Arsenal</span>
            </div>

            {/* Headline */}
            <h2 className="font-display text-4xl font-bold uppercase leading-[0.92] tracking-tight text-ink sm:text-5xl md:text-6xl lg:text-7xl">
              Tools I <span className="text-yellow">Use.</span>
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-2xl text-pretty font-sans text-base leading-relaxed text-muted md:text-lg">
              The intelligence platforms, generative models, and agentic CLI utilities that fuel my daily software development and AI engineering.
            </p>
          </Reveal>

          {/* Right Column: 3D Developer Figure in Globe Chair (Circled Area in Screenshot) */}
          <Reveal delay={60} className="self-center lg:self-auto shrink-0">
            <div className="group relative flex flex-col items-center justify-center">
              {/* Ambient Blue/Cyan Radial Refractive Glow */}
              <div
                aria-hidden
                className="pointer-events-none absolute h-[220px] w-[220px] sm:h-[260px] sm:w-[260px] rounded-full bg-gradient-to-tr from-blue-600/30 via-sky-500/25 to-indigo-500/20 blur-[50px] transition-transform duration-500 group-hover:scale-110"
              />

              {/* Floating 3D Developer Figure */}
              <div
                className="relative select-none transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                style={{
                  animation: "float 8s ease-in-out infinite",
                  filter:
                    "drop-shadow(0 20px 35px rgba(0, 0, 0, 0.9)) drop-shadow(0 0 24px rgba(56, 189, 248, 0.35))",
                }}
              >
                <Image
                  src="/images/tools-developer-figure.png"
                  alt="Developer working with AI tools and global workflows"
                  width={265}
                  height={265}
                  className="block h-auto w-[180px] sm:w-[220px] lg:w-[240px] xl:w-[265px] object-contain transition-transform duration-300 ease-out"
                  loading="lazy"
                  draggable={false}
                />

                {/* Technical Status Pill Badge */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <div className="flex items-center gap-1.5 rounded-full border border-sky-400/35 bg-[#08090E]/90 px-3 py-1 font-mono text-[9.5px] uppercase tracking-wider text-sky-300 shadow-xl backdrop-blur-md transition-all duration-300 group-hover:border-sky-400/60 group-hover:shadow-sky-500/25">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-sky-400" />
                    </span>
                    <span className="font-semibold text-white">GLOBAL WORKFLOW</span>
                    <span className="text-white/30">{"//"}</span>
                    <span className="text-sky-300">ACTIVE</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Clean, High-Tech Grid: Sequentially Blinking Brand Logos + Tool Names */}
        <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 sm:gap-4">
          {toolsList.map((tool, index) => {
            const isActive = activeBlinkIndex === index;
            return (
              <Reveal key={tool.name} delay={index * 30}>
                <SpotlightCard
                  className={`group relative flex flex-col items-center justify-center rounded-xl p-5 text-center transition-all duration-500 ${
                    isActive
                      ? "border-yellow/85 bg-[#10172c]/95 -translate-y-2 shadow-[0_0_35px_-4px_rgba(56,189,248,0.5)] ring-1 ring-yellow/50"
                      : "border-white/[0.08] bg-[#0c101d]/70 hover:-translate-y-1.5 hover:border-yellow/40 hover:bg-[#0e1424]/90 hover:shadow-[0_10px_35px_-8px_rgba(56,189,248,0.3)]"
                  }`}
                >
                  {/* Top-Right Glowing Radar Pulse Indicator */}
                  <div className="absolute top-2.5 right-2.5 flex h-2 w-2 items-center justify-center">
                    <span
                      className={`absolute inline-flex h-full w-full rounded-full bg-yellow transition-opacity duration-300 ${
                        isActive ? "animate-ping opacity-90" : "opacity-0"
                      }`}
                    />
                    <span
                      className={`relative inline-flex h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
                        isActive ? "bg-yellow shadow-[0_0_10px_#38bdf8]" : "bg-white/10"
                      }`}
                    />
                  </div>

                  {/* Logo Badge Container */}
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl border p-2.5 shadow-inner transition-all duration-500 ${
                      isActive
                        ? "border-yellow/70 bg-[#08090e] scale-110 shadow-[0_0_26px_rgba(56,189,248,0.45)] ring-1 ring-yellow/30"
                        : "border-white/[0.08] bg-[#08090e]/95 group-hover:scale-110 group-hover:border-yellow/30 group-hover:shadow-[0_0_20px_rgba(56,189,248,0.25)]"
                    }`}
                  >
                    <ToolBrandLogo name={tool.name} size={36} />
                  </div>

                  {/* Tool Name */}
                  <span
                    className={`mt-4 font-display text-sm sm:text-base font-bold uppercase tracking-wider transition-colors duration-300 ${
                      isActive
                        ? "text-yellow drop-shadow-[0_0_14px_rgba(56,189,248,0.45)]"
                        : "text-ink group-hover:text-yellow"
                    }`}
                  >
                    {tool.name}
                  </span>

                  {/* Minimal Subtle Tag */}
                  <span
                    className={`mt-1 font-mono text-[10px] uppercase tracking-wider transition-colors duration-300 ${
                      isActive ? "text-sky-300 font-semibold" : "text-muted/70 group-hover:text-sky-400"
                    }`}
                  >
                    {"//"} {tool.tag}
                  </span>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
