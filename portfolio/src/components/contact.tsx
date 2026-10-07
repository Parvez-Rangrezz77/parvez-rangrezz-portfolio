"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Check, Copy, Mail } from "lucide-react";
import { links } from "@/lib/site-config";
import { Reveal } from "./ui/reveal";
import { GithubIcon, LinkedinIcon } from "./ui/brand-icons";

const socials = [
  { label: "GitHub", handle: "Code & Repositories", href: links.github, icon: GithubIcon, id: "contact-github" },
  { label: "LinkedIn", handle: "Professional Network", href: links.linkedin, icon: LinkedinIcon, id: "contact-linkedin" },
];

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(links.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${links.email}`;
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden px-5 pt-24 pb-0 sm:px-8 sm:pt-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#38BDF8]/10 blur-[140px]" />
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_20%,transparent_70%)]" />
      </div>

      {/* Companion Robot End Anchor (Docking zone circled in Screenshot 2) */}
      <div
        id="companion-end-anchor"
        className="pointer-events-none absolute left-6 sm:left-10 md:left-16 lg:left-20 xl:left-28 top-[48%] -translate-y-1/2 h-[180px] w-[140px] sm:w-[160px] z-20"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <div className="mb-5 flex items-center justify-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-muted">
            <span className="flex items-center gap-1.5 font-bold text-yellow">
              <span className="h-1.5 w-1.5 bg-yellow" />
              [ 07 ]
            </span>
            <span className="h-px w-6 border-t border-dashed border-[#818CF8]/40" />
            <span className="font-semibold text-ink/80">Get in Touch</span>
          </div>
          
          <h2 className="font-display text-4xl font-bold uppercase leading-[0.92] tracking-tight text-ink sm:text-5xl md:text-6xl lg:text-7xl">
            Have an idea worth <span className="text-yellow">building?</span>
          </h2>
          
          <p className="mx-auto mt-6 max-w-xl text-pretty font-sans text-base leading-relaxed text-muted md:text-lg">
            Open to engineering internships, technical collaborations, and ambitious projects in applied AI, autonomous systems, and modern software development.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={`mailto:${links.email}`}
              id="contact-email-cta"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-yellow px-6 py-3.5 font-display text-sm font-bold uppercase tracking-wider text-obsidian shadow-lg shadow-yellow/20 transition-all duration-200 hover:bg-[#7DD3FC] hover:shadow-[0_4px_24px_rgba(56,189,248,0.4)] sm:w-auto"
            >
              <Mail size={16} /> Send Direct Email
              <ArrowUpRight size={15} className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            
            <button
              type="button"
              id="contact-copy-email"
              onClick={copyEmail}
              aria-live="polite"
              className="glass inline-flex w-full items-center justify-center gap-2.5 rounded-lg px-5 py-3.5 font-mono text-xs font-semibold uppercase tracking-wider text-muted transition-all duration-200 hover:border-yellow/40 hover:text-yellow sm:w-auto cursor-pointer"
            >
              <span className="max-w-[16rem] truncate">{links.email}</span>
              {copied ? <Check size={15} className="text-yellow" /> : <Copy size={15} />}
              <span className="sr-only">{copied ? "Email copied" : "Copy email address"}</span>
            </button>
          </div>
        </Reveal>

        <Reveal delay={180}>
          <ul className="mx-auto mt-14 grid max-w-2xl gap-3 sm:grid-cols-2">
            {socials.map((s) => {
              const Icon = s.icon;
              return (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={s.id}
                    className="glass group flex items-center gap-3 rounded-xl p-4 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-yellow/40 hover:bg-[#0e131f]/70"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-white/[0.08] bg-black/40 text-yellow">
                      <Icon size={17} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-display text-base font-bold uppercase tracking-wider text-ink group-hover:text-yellow transition-colors">
                        {s.label}
                      </span>
                      <span className="block truncate font-mono text-[11px] text-muted">{s.handle}</span>
                    </span>
                    <ArrowUpRight size={15} className="text-muted transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-yellow" />
                  </a>
                </li>
              );
            })}
          </ul>
        </Reveal>

        {/* Relaxing 3D AI Robot lounging directly on the footer boundary */}
        <Reveal delay={240}>
          <div className="relative mt-12 sm:mt-16 mb-[-1px] flex flex-col items-center justify-center">
            {/* Ambient ground radiation glow */}
            <div className="pointer-events-none absolute -bottom-2 h-24 w-80 sm:w-[480px] rounded-full bg-gradient-to-r from-yellow/15 via-[#6366F1]/20 to-yellow/15 blur-2xl" />

            {/* Clickable interactive resting robot container */}
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group/robot-chilling relative z-10 select-none cursor-pointer translate-y-[6px] transition-transform duration-300 hover:scale-[1.03] bg-transparent border-0 p-0 text-left outline-none focus-visible:ring-2 focus-visible:ring-yellow/60 rounded-xl"
              title="Click to scroll back to top"
              aria-label="Scroll back to top"
            >
              {/* Floating Holographic Status & Speech Bubble */}
              <div
                className="absolute -top-9 sm:-top-11 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full border border-yellow/35 bg-[#08090E]/95 px-3.5 py-1 font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-yellow shadow-xl shadow-yellow/15 backdrop-blur-md transition-all duration-300 group-hover/robot-chilling:border-yellow group-hover/robot-chilling:shadow-yellow/30 group-hover/robot-chilling:-translate-y-1 whitespace-nowrap"
                style={{ animation: "float 6s ease-in-out infinite" }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-yellow" />
                </span>
                <span>SYSTEM STATUS // ALL TASKS COMPLETE 👋</span>
                <span className="hidden sm:inline text-muted text-[10px]">· Click to top ↑</span>
              </div>

              {/* Robot Image */}
              <Image
                src="/images/robot-chilling.png"
                alt="Parvez AI Assistant lounging on footer boundary"
                width={420}
                height={280}
                loading="lazy"
                className="relative block h-auto w-[280px] sm:w-[360px] md:w-[420px] object-contain transition-all duration-300 group-hover/robot-chilling:drop-shadow-[0_0_35px_rgba(56,189,248,0.55)]"
                style={{
                  filter: "drop-shadow(0 15px 30px rgba(0,0,0,0.85)) drop-shadow(0 0 20px rgba(56,189,248,0.25))",
                }}
              />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
