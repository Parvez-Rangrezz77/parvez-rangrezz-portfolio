import Image from "next/image";
import { ArrowUpRight, Star, Mic, Terminal, Cpu, Workflow, MonitorCog, Zap } from "lucide-react";
import { links } from "@/lib/site-config";
import { SpotlightCard } from "./ui/spotlight-card";
import { Reveal } from "./ui/reveal";
import { DetailsToggle } from "./ui/details-toggle";
import { GithubIcon } from "./ui/brand-icons";

/* Deterministic waveform heights (no Math.random → no hydration mismatch) */
const bars = Array.from({ length: 36 }, (_, i) => 0.35 + 0.65 * Math.abs(Math.sin(i * 0.55) * Math.cos(i * 0.23)));

const jarvisModules = [
  { icon: Mic, name: "voice.recognition", desc: "Speech-to-text capture & wake handling" },
  { icon: Cpu, name: "ai.responses", desc: "AI-driven reasoning & natural replies" },
  { icon: Workflow, name: "automation.tasks", desc: "Scripted multi-step task execution" },
  { icon: MonitorCog, name: "os.control", desc: "Apps, files & system-level commands" },
];

function Tags({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((t) => (
        <li key={t} className="chip">
          {t}
        </li>
      ))}
    </ul>
  );
}

function ProjectIndex({ category }: { category: string }) {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
      <span className="tape-badge text-[10px] py-0.5">FLAGSHIP SYSTEM</span>
      <span className="h-px w-5 border-t border-dashed border-olive/60" />
      <span className="text-ink/80">{category}</span>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative px-5 py-28 sm:px-8 md:py-36">
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-40 -z-10 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[#18231E]/50 blur-[130px]" />
      <div className="mx-auto max-w-6xl">
        {/* Header Row: Left = Section Heading, Right = Human + AI Collaboration Visual */}
        <div className="mb-12 flex flex-col items-start justify-between gap-8 md:mb-16 lg:flex-row lg:items-center">
          {/* Left Column: Heading & Narrative */}
          <Reveal className="max-w-2xl lg:max-w-3xl">
            {/* Editorial technical label */}
            <div className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-muted">
              <span className="flex items-center gap-1.5 font-bold text-yellow">
                <span className="inline-block h-1.5 w-1.5 bg-yellow" />
                [02]
              </span>
              <span className="h-px w-6 border-t border-dashed border-olive/60" />
              <span className="font-semibold text-ink/85">Featured Project</span>
            </div>

            {/* Headline */}
            <h2 className="font-display text-4xl font-bold uppercase leading-[0.92] tracking-tight text-ink sm:text-5xl md:text-6xl lg:text-7xl">
              Proof of work, <span className="text-yellow">shipped and measurable.</span>
            </h2>

            {/* Narrative */}
            <p className="mt-5 max-w-2xl text-pretty font-sans text-base leading-relaxed text-muted md:text-lg">
              Flagship AI systems engineering — combining real-time voice processing, intelligent task automation, and desktop workflow orchestration.
            </p>
          </Reveal>

          {/* Right Column: Human + AI Collaboration Showcase (User-Circled Area) */}
          <Reveal delay={60} className="self-center lg:self-auto shrink-0">
            <div className="group relative flex flex-col items-center justify-center">
              {/* Refractive Ambient Emerald / Cyan Aura */}
              <div
                aria-hidden
                className="pointer-events-none absolute h-[240px] w-[240px] sm:h-[280px] sm:w-[280px] rounded-full bg-gradient-to-tr from-emerald-500/25 via-teal-500/20 to-sky-500/20 blur-[55px] transition-transform duration-500 group-hover:scale-110"
              />

              {/* Poster Card Container */}
              <div
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0A0E18]/80 p-2 shadow-2xl backdrop-blur-md transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:border-emerald-400/30 group-hover:shadow-[0_20px_45px_-10px_rgba(16,185,129,0.25)]"
                style={{
                  filter: "drop-shadow(0 20px 35px rgba(0, 0, 0, 0.85))",
                }}
              >
                <div className="relative overflow-hidden rounded-xl">
                  <Image
                    src="/images/human-ai-collaboration.png"
                    alt="The Power of Human + AI Collaboration"
                    width={350}
                    height={450}
                    className="block h-auto w-[240px] sm:w-[280px] md:w-[320px] lg:w-[330px] xl:w-[350px] object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    loading="lazy"
                    draggable={false}
                  />

                  {/* Subtle Inner Gradient Overlay for seamless dark integration */}
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10" />
                </div>

                {/* Technical Status Pill */}
                <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <div className="flex items-center gap-1.5 rounded-full border border-emerald-400/35 bg-[#08090E]/95 px-3 py-1 font-mono text-[9.5px] uppercase tracking-wider text-emerald-300 shadow-xl backdrop-blur-md transition-all duration-300 group-hover:border-emerald-400/60 group-hover:shadow-emerald-500/25">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    </span>
                    <span className="font-semibold text-white">HUMAN + AI</span>
                    <span className="text-white/30">{"//"}</span>
                    <span className="text-emerald-300">COLLABORATION</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="grid gap-4 lg:grid-cols-12">
          {/* ───────────── JARVIS FLAGSHIP CARD ───────────── */}
          <Reveal className="lg:col-span-12">
            <SpotlightCard as="article" id="project-jarvis" className="p-5 sm:p-8 lg:p-10">
              <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
                <div className="flex flex-col">
                  <ProjectIndex category="AI Application • Automation • Python Core" />
                  
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-lg border border-yellow/30 bg-yellow/10 text-yellow">
                      <Zap size={20} />
                    </span>
                    <h3 className="font-display text-3xl font-bold uppercase tracking-tight text-ink sm:text-4xl">
                      JARVIS AI Assistant
                    </h3>
                  </div>

                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded border border-yellow/30 bg-yellow/10 px-2.5 py-1 font-mono text-xs font-semibold text-yellow">
                      <Star size={12} className="fill-yellow text-yellow" /> 6,316+ Lines of Code
                    </span>
                    <span className="rounded border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 font-mono text-xs uppercase tracking-wider text-muted">
                      Production Ready
                    </span>
                  </div>

                  <p className="mt-5 text-pretty font-sans leading-relaxed text-muted">
                    A robust desktop personal AI assistant developed in Python that combines real-time voice
                    processing, intelligent task automation, and AI-driven capabilities to orchestrate daily developer
                    and operating system workflows.
                  </p>

                  <div className="mt-6">
                    <Tags items={["Python", "Voice Interaction", "Task Automation", "Desktop Control", "AI Systems"]} />
                  </div>

                  <div className="mt-8 flex flex-wrap items-start gap-3">
                    <a
                      href={links.jarvisRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      id="jarvis-repo-link"
                      className="group order-2 inline-flex items-center gap-2 rounded-lg bg-yellow px-5 py-2.5 font-display text-xs font-bold uppercase tracking-wider text-obsidian shadow-sm transition-all duration-200 hover:bg-[#E5C700] hover:shadow-[0_2px_15px_rgba(245,213,0,0.3)]"
                    >
                      <GithubIcon size={15} /> GitHub Repository
                      <ArrowUpRight size={15} className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                    
                    <div className="order-1 sm:order-3 sm:basis-full">
                      <DetailsToggle>
                        <div className="grid gap-3 sm:grid-cols-2">
                          {jarvisModules.map((m) => {
                            const Icon = m.icon;
                            return (
                              <div key={m.name} className="rounded-lg border border-white/[0.06] bg-[#18231E]/40 p-4">
                                <div className="flex items-center gap-2 font-mono text-xs font-semibold text-ink">
                                  <Icon size={13} className="text-yellow" /> {m.name}
                                </div>
                                <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{m.desc}</p>
                              </div>
                            );
                          })}
                        </div>
                      </DetailsToggle>
                    </div>
                  </div>
                </div>

                {/* Right Visual Console */}
                <div className="relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-[#08090e] p-5 sm:p-6 shadow-xl">
                  {/* Subtle corner light */}
                  <div aria-hidden className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#6366f1]/20 blur-[80px]" />
                  
                  <div className="relative flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-muted border-b border-white/[0.06] pb-3">
                    <span className="flex items-center gap-1.5 font-semibold text-ink">
                      <Terminal size={12} className="text-yellow" /> JARVIS.SESSION
                    </span>
                    <span className="flex items-center gap-1.5 text-yellow font-bold">
                      <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-yellow" /> LISTENING
                    </span>
                  </div>

                  {/* Holographic JARVIS Arc Reactor & Audio Waveform Section */}
                  <div className="relative my-6 flex flex-col items-center justify-center">
                    {/* Glowing Circular HUD Frame & Rotating Arc Reactor Core */}
                    <div className="relative flex items-center justify-center h-44 w-44 sm:h-52 sm:w-52">
                      {/* Ambient Energy Glow */}
                      <div className="absolute inset-0 rounded-full bg-amber-500/10 blur-2xl animate-pulse-soft" />
                      
                      {/* Outer Counter-Rotating Dashed HUD Ring */}
                      <div 
                        className="absolute inset-0 rounded-full border border-dashed border-amber-500/30 pointer-events-none"
                        style={{ animation: "spin-reverse 28s linear infinite" }}
                      />
                      
                      {/* Inner Thin Tech Ring with Cardinal Markers */}
                      <div 
                        className="absolute inset-3 rounded-full border border-amber-400/20 pointer-events-none"
                        style={{ animation: "spin-slow 35s linear infinite" }}
                      />

                      {/* Rotating Holographic JARVIS Core Image */}
                      <Image
                        src="/images/jarvis-core-clean.png"
                        alt="JARVIS Holographic Neural Core"
                        width={240}
                        height={240}
                        className="relative z-10 h-full w-full object-contain pointer-events-none select-none transition-transform duration-700 hover:scale-105"
                        style={{
                          animation: "spin-slow 22s linear infinite",
                          filter: "drop-shadow(0 0 25px rgba(245, 158, 11, 0.5))",
                        }}
                        loading="lazy"
                      />

                      {/* Central Live HUD Status Label */}
                      <div className="absolute -bottom-2.5 z-20 flex items-center gap-1.5 rounded-full border border-amber-500/35 bg-[#08090e]/95 px-2.5 py-0.5 font-mono text-[8.5px] uppercase tracking-widest text-amber-400 shadow-md shadow-black/90 backdrop-blur-md">
                        <span className="h-1 w-1 rounded-full bg-amber-400 animate-ping" />
                        ARC CORE // 4.8 GHz
                      </div>
                    </div>

                    {/* Compact Waveform under the Core */}
                    <div className="relative mt-5 flex h-6 items-center justify-center gap-[2.5px]" aria-hidden>
                      {bars.slice(0, 26).map((h, i) => (
                        <span
                          key={i}
                          className="w-[2.5px] origin-center animate-wave rounded-full bg-gradient-to-t from-yellow via-sky-400 to-[#6366f1]"
                          style={{
                            height: `${Math.max(20, h * 100)}%`,
                            animationDelay: `${(i % 12) * 0.09}s`,
                            animationDuration: `${1 + (i % 5) * 0.18}s`,
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Terminal Transcript */}
                  <div className="relative space-y-2 rounded-lg border border-white/[0.05] bg-black/40 p-3.5 font-mono text-[11.5px] leading-relaxed">
                    <p className="text-muted">
                      <span className="text-yellow font-bold">you ›</span> open my project and start focus mode
                    </p>
                    <p className="text-ink">
                      <span className="text-yellow font-bold">jarvis ›</span> Opening workspace, launching editor and muting notifications.
                    </p>
                    <p className="text-muted text-[11px]">
                      ✓ vscode.open · ✓ dnd.enable · ✓ playlist.focus
                      <span className="ml-1 inline-block h-3 w-1.5 translate-y-0.5 animate-blink bg-yellow" />
                    </p>
                  </div>

                  <div className="relative mt-6 grid grid-cols-3 gap-2 border-t border-white/[0.06] pt-4">
                    {[
                      ["6,316+", "LINES OF CODE"],
                      ["Python", "CORE ENGINE"],
                      ["Desktop", "RUNTIME OS"],
                    ].map(([v, l]) => (
                      <div key={l}>
                        <div className="font-display text-xl font-bold uppercase text-ink">{v}</div>
                        <div className="font-mono text-[9px] uppercase tracking-wider text-muted">{l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
