import Image from "next/image";
import { ArrowUpRight, Bot, Brain, Cog, GitCommitHorizontal, GitFork, Star, Wrench } from "lucide-react";
import { links, repos } from "@/lib/site-config";
import { SpotlightCard } from "./ui/spotlight-card";
import { Reveal } from "./ui/reveal";
import { GithubIcon } from "./ui/brand-icons";

const capabilities = [
  {
    icon: Bot,
    tag: "ai.apps",
    title: "AI Applications",
    text: "Practical AI software powered by LLMs, APIs and voice interfaces.",
    points: ["JARVIS AI", "LLM Integration", "Voice Interaction"],
  },
  {
    icon: Cog,
    tag: "automation",
    title: "Automation",
    text: "Python-based systems that automate repetitive desktop and workflow tasks.",
    points: ["OS Automation", "Task Automation", "File Control"],
  },
  {
    icon: Brain,
    tag: "ai.agents",
    title: "AI Agents",
    text: "Tool-using AI systems designed to handle multi-step tasks and workflows.",
    points: ["Agents", "Function Calling", "Tool Integration"],
  },
  {
    icon: Wrench,
    tag: "dev.tools",
    title: "Developer Tools",
    text: "Developer-focused utilities and software built to solve real workflow problems.",
    points: ["Python", "APIs", "Git/GitHub"],
  },
];

function formatCount(n: number | null) {
  return n === null ? "—" : n.toLocaleString("en-US");
}

export function Build() {
  return (
    <section id="build" className="relative px-5 pt-28 pb-10 sm:px-8 md:pt-36 md:pb-14">
      <div className="mx-auto max-w-6xl">
        {/* Section Header with Robot on Mouse in the Red-Circled Area */}
        <div className="mb-12 grid items-end gap-8 md:mb-16 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Technical Label, Large Heading & Description */}
          <Reveal className="lg:col-span-7">
            {/* Editorial technical label */}
            <div className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-muted">
              <span className="flex items-center gap-1.5 font-bold text-yellow">
                <span className="inline-block h-1.5 w-1.5 bg-yellow" />
                [03]
              </span>
              <span className="h-px w-6 border-t border-dashed border-olive/60" />
              <span className="font-semibold text-ink/85">What I Build</span>
            </div>

            {/* Oversized editorial uppercase heading */}
            <h2 className="font-display text-4xl font-bold uppercase leading-[0.92] tracking-tight text-ink sm:text-5xl md:text-6xl lg:text-7xl">
              Four disciplines, <span className="text-yellow">one engineering mindset.</span>
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-2xl text-pretty font-sans text-base leading-relaxed text-muted md:text-lg">
              I work where software engineering, applied AI and autonomous automation overlap — and ship each as a robust, working product.
            </p>
          </Reveal>

          {/* Right Column: 3D Autonomous Robot on Mouse (Exact User-Circled Area) */}
          <Reveal delay={80} className="relative flex justify-center lg:col-span-5 lg:justify-end">
            <div className="group relative flex items-center justify-center">
              {/* Ambient radial glow matching mouse lavender/cyan lighting */}
              <div
                aria-hidden
                className="pointer-events-none absolute h-[230px] w-[230px] rounded-full bg-gradient-to-tr from-sky-500/20 via-indigo-500/18 to-purple-500/15 blur-[55px] transition-transform duration-500 group-hover:scale-110"
              />

              {/* Floating 3D Robot Figure Sitting on Computer Mouse */}
              <div
                className="relative max-w-[190px] sm:max-w-[220px] lg:max-w-[240px] select-none transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                style={{
                  animation: "float 8s ease-in-out infinite",
                  filter:
                    "drop-shadow(0 22px 35px rgba(0, 0, 0, 0.85)) drop-shadow(0 0 25px rgba(56, 189, 248, 0.28))",
                }}
              >
                <Image
                  src="/images/robot-autonomous-mouse.png"
                  alt="Autonomous Software Robot — Desktop & OS Automation"
                  width={240}
                  height={240}
                  className="h-auto w-full object-contain"
                  loading="lazy"
                />

                {/* Floating Technical Status Badge */}
                <div className="absolute -bottom-2 right-1 flex items-center gap-1.5 rounded-full border border-white/10 bg-[#08090E]/90 px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-sky-300 shadow-xl backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse-soft" />
                  <span>AUTONOMOUS RPA // ACTIVE</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* capability grid */}
        <div className="grid gap-4 sm:grid-cols-2">
          {capabilities.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.title} delay={i * 80}>
                <SpotlightCard as="article" id={`build-${c.tag.replace(".", "-")}`} className="group h-full p-6 sm:p-8">
                  <div className="flex items-start justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-lg border border-white/[0.08] bg-[#0B1110] text-yellow transition-all duration-300 group-hover:border-yellow/40 group-hover:shadow-[0_0_24px_-4px_rgba(245,213,0,0.3)]">
                      <Icon size={20} />
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                      {`[ 0${i + 1} // ${c.tag} ]`}
                    </span>
                  </div>
                  <h3 className="mt-7 font-display text-2xl font-bold uppercase tracking-tight text-ink group-hover:text-yellow transition-colors">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-pretty font-sans leading-relaxed text-muted">{c.text}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {c.points.map((p) => (
                      <li key={p} className="chip">
                        {p}
                      </li>
                    ))}
                  </ul>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>

        {/* build in public */}
        <Reveal className="mt-20">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4 border-b border-white/[0.08] pb-4">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted">
                <span className="h-1.5 w-1.5 bg-yellow" /> Build in Public
              </div>
              <h3 className="mt-2 font-display text-3xl font-bold uppercase tracking-tight text-ink">
                Open Source Repositories
              </h3>
            </div>
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              id="build-github-profile"
              className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider font-semibold text-muted transition-colors hover:text-yellow"
            >
              <GithubIcon size={14} /> View all on GitHub
              <ArrowUpRight size={14} className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-3">
          {repos.map((r, i) => (
            <Reveal key={r.name} delay={i * 80}>
              <a
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                id={`repo-${r.name}`}
                className="block h-full"
              >
                <SpotlightCard className="group flex h-full flex-col p-5">
                  <div className="flex items-center justify-between">
                    <span className="flex min-w-0 items-center gap-2 font-mono text-xs font-semibold text-ink">
                      <GithubIcon size={14} className="shrink-0 text-muted" />
                      <span className="truncate">{r.name}</span>
                    </span>
                    {r.featured && (
                      <span className="tape-badge text-[9px] py-0.5 px-1.5">
                        FEATURED
                      </span>
                    )}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{r.description}</p>

                  <div className="mt-5 flex items-start gap-2 rounded border border-white/[0.06] bg-black/40 px-3 py-2 font-mono text-[11px] text-muted">
                    <GitCommitHorizontal size={13} className="mt-px shrink-0 text-yellow" />
                    <span className="line-clamp-1">{r.commit}</span>
                  </div>

                  <div className="mt-auto flex items-center gap-4 pt-5 font-mono text-xs text-muted">
                    <span className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full" style={{ backgroundColor: r.languageColor }} />
                      {r.language}
                    </span>
                    <span className="flex items-center gap-1">
                      <Star size={12} className="text-yellow" /> {formatCount(r.stars)}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork size={12} /> {formatCount(r.forks)}
                    </span>
                    <ArrowUpRight
                      size={14}
                      className="ml-auto text-muted transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-yellow"
                    />
                  </div>
                </SpotlightCard>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
