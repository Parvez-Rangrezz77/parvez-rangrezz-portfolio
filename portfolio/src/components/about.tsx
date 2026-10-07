import Image from "next/image";
import { CodeXml, Sparkles, Workflow } from "lucide-react";
import { Reveal } from "./ui/reveal";

const principles = [
  {
    icon: CodeXml,
    index: "01",
    title: "Software Engineering",
    text: "Practical applications and backend workflows built with Python and Java.",
  },
  {
    icon: Sparkles,
    index: "02",
    title: "Applied AI",
    text: "LLMs, Generative AI, voice interfaces, and AI-powered application workflows.",
  },
  {
    icon: Workflow,
    index: "03",
    title: "Intelligent Automation",
    text: "Desktop automation, task orchestration, file operations, and Python-based workflows.",
  },
];

export function About() {
  return (
    <section id="about" className="relative px-5 py-24 sm:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Heading, Philosophy & Narrative */}
          <Reveal className="lg:col-span-7">
            {/* Editorial technical label */}
            <div className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-muted">
              <span className="flex items-center gap-1.5 font-bold text-yellow">
                <span className="inline-block h-1.5 w-1.5 bg-yellow" />
                [01]
              </span>
              <span className="h-px w-6 border-t border-dashed border-olive/60" />
              <span className="font-semibold text-ink/85">Profile & Philosophy</span>
            </div>

            {/* Headline */}
            <h2 className="font-display text-4xl font-bold uppercase leading-[0.92] tracking-tight text-ink sm:text-5xl md:text-6xl lg:text-7xl">
              Engineering <span className="text-yellow">practical intelligence</span>, not surface demos.
            </h2>

            {/* Narrative */}
            <div className="mt-8 space-y-6">
              <p className="text-pretty font-sans text-xl leading-relaxed text-ink/90 md:text-2xl md:leading-[1.5]">
                I am an AI-focused software developer building practical applications with{" "}
                <span className="font-semibold text-yellow">Python, Java, Generative AI, LLMs,</span> and intelligent automation.
              </p>
              <p className="text-pretty font-sans text-base leading-relaxed text-muted md:text-lg">
                I focus on turning AI capabilities into useful software — combining programming, APIs, automation, and problem-solving to build applications that solve real-world tasks.
              </p>
              <div className="pt-2 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-muted">
                <span className="h-2 w-2 bg-yellow" />
                <span>Building Practical Software // Applied AI</span>
              </div>
            </div>
          </Reveal>

          {/* Right Column: 3D AI Avatar in circled area + Principles Cards */}
          <div className="space-y-4 lg:col-span-5">
            {/* 3D Iridescent Neural Avatar (User Circled Area) */}
            <Reveal delay={70} className="relative flex justify-center pb-2 lg:justify-center">
              <div className="group relative flex items-center justify-center">
                {/* Refractive Iridescent Aura matching the head's inner colors */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute h-[230px] w-[230px] rounded-full bg-gradient-to-tr from-sky-500/25 via-indigo-500/20 to-fuchsia-500/20 blur-[50px] transition-transform duration-500 group-hover:scale-110"
                />

                {/* Floating 3D Glossy Humanoid Figure */}
                <div
                  className="relative max-w-[190px] sm:max-w-[220px] select-none transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  style={{
                    animation: "float 8s ease-in-out infinite",
                    filter:
                      "drop-shadow(0 20px 35px rgba(0, 0, 0, 0.9)) drop-shadow(0 0 24px rgba(56, 189, 248, 0.3))",
                  }}
                >
                  <Image
                    src="/images/practical-intelligence.png"
                    alt="Applied Intelligence Neural Core"
                    width={220}
                    height={220}
                    loading="lazy"
                    className="h-auto w-full object-contain"
                  />

                  {/* Refined Technical Status Pill */}
                  <div className="absolute -bottom-2 right-1 flex items-center gap-1.5 rounded-full border border-white/10 bg-[#08090E]/90 px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-sky-300 shadow-xl backdrop-blur-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse-soft" />
                    <span>NEURAL ARCHITECTURE</span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Principles Cards */}
            <div className="space-y-3">
              {principles.map((p, i) => {
                const Icon = p.icon;
                return (
                  <Reveal key={p.title} delay={120 + i * 80}>
                    <div className="glass group flex gap-4 rounded-xl p-5 transition-all duration-300 hover:border-yellow/30 hover:bg-[#18231E]/60">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-white/[0.08] bg-black/30 text-yellow transition-colors group-hover:border-yellow/40">
                        <Icon size={17} />
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h3 className="font-display text-base font-bold uppercase tracking-wider text-ink group-hover:text-yellow transition-colors">
                            {p.title}
                          </h3>
                          <span className="font-mono text-[10px] text-muted/70 tracking-widest font-semibold">
                            [ {p.index} ]
                          </span>
                        </div>
                        <p className="mt-1 text-sm leading-relaxed text-muted">{p.text}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
