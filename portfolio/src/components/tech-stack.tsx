import { techStack } from "@/lib/site-config";
import { SpotlightCard } from "./ui/spotlight-card";
import { SectionHeading } from "./ui/section-heading";
import { Reveal } from "./ui/reveal";
import { TechRobot } from "./ui/tech-robot";

const allItems = techStack.flatMap((g) => g.items);

function MarqueeRow({ items, reverse = false }: { items: readonly string[]; reverse?: boolean }) {
  // duplicated once so translateX(-50%) loops seamlessly
  const loop = [...items, ...items];
  return (
    <div className="flex w-max animate-marquee gap-3 hover:[animation-play-state:paused]" style={reverse ? { animationDirection: "reverse" } : undefined}>
      {loop.map((t, i) => (
        <span
          key={`${t}-${i}`}
          aria-hidden={i >= items.length}
          className="glass flex items-center gap-2.5 rounded-lg px-3.5 py-2 font-mono text-xs uppercase tracking-wider text-muted transition-colors hover:border-yellow/30 hover:text-ink"
        >
          <span className="h-1.5 w-1.5 bg-yellow" />
          {t}
        </span>
      ))}
    </div>
  );
}

export function TechStack() {
  const half = Math.ceil(allItems.length / 2);
  return (
    <section id="stack" className="relative pt-4 pb-28 md:pt-6 md:pb-36">
      <div aria-hidden className="pointer-events-none absolute right-0 top-1/3 -z-10 h-[500px] w-[600px] rounded-full bg-[#18231E]/40 blur-[130px]" />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Interactive 3D Waving Tech Stack Mascot */}
        <Reveal className="mb-4 flex justify-center">
          <TechRobot />
        </Reveal>

        <SectionHeading
          index="04"
          eyebrow="Core Competencies"
          title={
            <>
              Tools I reach for <span className="text-yellow">every day.</span>
            </>
          }
          description="A pragmatic engineering stack chosen for shipping — strong backend foundations, agentic AI frameworks, and modern interfaces."
        />
      </div>

      {/* dual marquee */}
      <Reveal className="relative mb-16 space-y-3 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        <MarqueeRow items={allItems.slice(0, half)} />
        <MarqueeRow items={allItems.slice(half)} reverse />
      </Reveal>

      {/* grouped grid */}
      <div className="mx-auto grid max-w-6xl gap-4 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-3">
        {techStack.map((g, i) => (
          <Reveal key={g.group} delay={i * 70} className={i === 0 ? "lg:row-span-2" : ""}>
            <SpotlightCard className="flex h-full flex-col p-6">
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                <span className="font-semibold text-ink/80">STACK.[ 0{i + 1} ]</span>
                <span className="text-[#818CF8] font-medium">{g.items.length} TECHNOLOGIES</span>
              </div>
              <h3 className="mt-5 font-display text-xl font-bold uppercase tracking-tight text-ink">
                {g.group}
              </h3>
              <p className="mt-1 font-mono text-xs text-[#818CF8]">{"//"} {g.note}</p>
              <ul className={`mt-6 flex flex-wrap gap-2 ${i === 0 ? "lg:flex-col lg:items-start" : ""}`}>
                {g.items.map((t) => (
                  <li key={t} className="chip">
                    {t}
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
