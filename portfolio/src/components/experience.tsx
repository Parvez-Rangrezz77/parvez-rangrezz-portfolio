"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  Award,
  BadgeCheck,
  Bot,
  Briefcase,
  Check,
  Copy,
  Download,
  ExternalLink,
  Eye,
  FileText,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Terminal,
  X,
} from "lucide-react";
import { certifications, experience, links, type Certification } from "@/lib/site-config";
import { SpotlightCard } from "./ui/spotlight-card";
import { SectionHeading } from "./ui/section-heading";
import { Reveal } from "./ui/reveal";
import { GithubIcon, LinkedinIcon } from "./ui/brand-icons";

function CertificateCard({ c }: { c: Certification }) {
  const [copied, setCopied] = useState(false);
  const isLinkedIn = c.issuer.toLowerCase().includes("linkedin");
  const isClaude = c.issuer.toLowerCase().includes("claude");
  const isRobotwallah =
    c.issuer.toLowerCase().includes("robot") || c.name.toLowerCase().includes("gen-ai");

  const IconComponent = isLinkedIn ? LinkedinIcon : isClaude ? Terminal : isRobotwallah ? Bot : Award;

  const handleCopy = () => {
    if (!c.credentialId) return;
    navigator.clipboard.writeText(c.credentialId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <li className="group relative rounded-xl border border-white/[0.08] bg-[#0B1110] p-5 transition-all duration-200 hover:border-yellow/40 hover:bg-[#18231E]/40">
      {/* Header with Issuer & Verified Badge */}
      <div className="flex items-center justify-between gap-3 border-b border-white/[0.06] pb-3.5">
        <div className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-lg border border-yellow/30 bg-yellow/10 text-yellow">
            <IconComponent size={15} />
          </span>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display text-sm font-bold uppercase tracking-wider text-ink">{c.issuer}</span>
              {c.format && (
                <span className="rounded border border-white/10 bg-white/[0.04] px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-muted">
                  {c.format}
                </span>
              )}
            </div>
            {c.type && (
              <div className="font-mono text-[10px] uppercase tracking-wider text-[#818CF8]">
                {c.type}
              </div>
            )}
          </div>
        </div>

        <div className="inline-flex items-center gap-1.5 rounded border border-yellow/30 bg-yellow/10 px-2 py-0.5 font-mono text-[11px] font-semibold text-yellow">
          <BadgeCheck size={13} />
          <span>VERIFIED</span>
        </div>
      </div>

      {/* Course Title */}
      <div className="mt-3.5">
        <h4 className="font-display text-base font-bold uppercase tracking-tight text-ink group-hover:text-yellow transition-colors">
          {c.name}
        </h4>
        {c.recipient && (
          <p className="mt-1 font-mono text-[11px] text-muted">
            ISSUED TO: <span className="font-semibold text-ink/90">{c.recipient}</span>
          </p>
        )}
      </div>

      {/* Commendation Quote / Description */}
      {c.description && (
        <div className="relative mt-3 rounded border-l-2 border-yellow bg-black/30 py-2 pl-3 pr-2.5 text-xs italic leading-relaxed text-muted">
          &ldquo;{c.description}&rdquo;
        </div>
      )}

      {/* Signer & Organization */}
      {(c.authority || c.organization) && (
        <div className="mt-3 space-y-1 font-mono text-[11px] text-muted">
          {c.authority && (
            <div>
              SIGNER: <span className="text-ink/80">{c.authority}</span>
            </div>
          )}
          {c.organization && (
            <div className="truncate">
              ORG: <span className="text-ink/80">{c.organization}</span>
            </div>
          )}
        </div>
      )}

      {/* Certificate ID with Copy */}
      {c.credentialId && (
        <div className="mt-3.5 flex items-center justify-between gap-2 rounded border border-white/[0.06] bg-black/50 px-3 py-2">
          <div className="min-w-0">
            <span className="block font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
              CERTIFICATE ID
            </span>
            <span className="block font-mono text-xs text-ink/90 select-all truncate">
              {c.credentialId}
            </span>
          </div>
          <button
            type="button"
            onClick={handleCopy}
            aria-label="Copy Certificate ID"
            className="inline-flex shrink-0 items-center gap-1 rounded border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[11px] text-muted transition-colors hover:border-yellow/40 hover:text-yellow cursor-pointer"
          >
            {copied ? (
              <>
                <Check size={12} className="text-yellow" />
                <span className="text-yellow">COPIED</span>
              </>
            ) : (
              <>
                <Copy size={12} />
                <span>COPY</span>
              </>
            )}
          </button>
        </div>
      )}

      {/* Skills */}
      {c.skills && c.skills.length > 0 && (
        <div className="mt-3.5">
          <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-wider text-muted">
            SKILLS VALIDATED
          </span>
          <ul className="flex flex-wrap gap-1.5">
            {c.skills.map((s) => (
              <li key={s} className="chip text-[11px]">
                {s}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Footer / Verify button or Status */}
      {c.verifyUrl ? (
        <div className="mt-4 flex items-center justify-between border-t border-white/[0.06] pt-3">
          <span className="font-mono text-[11px] text-muted">{c.issuer} {"//"} VERIFIED</span>
          <a
            href={c.verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Verify ${c.name} on ${c.issuer}`}
            className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-yellow transition-colors hover:text-ink"
          >
            <span>VERIFY CREDENTIAL</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      ) : (
        <div className="mt-4 flex items-center justify-between border-t border-white/[0.06] pt-3 font-mono text-[11px] text-muted">
          <span>{c.issuer} {"//"} VERIFIED</span>
          <span className="text-ink/80">{c.year}</span>
        </div>
      )}
    </li>
  );
}

export function Experience() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [resumeTab, setResumeTab] = useState<"document" | "details">("document");
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2000);
  };

  useEffect(() => {
    if (!isModalOpen && !isResumeOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
        setIsResumeOpen(false);
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen, isResumeOpen]);

  return (
    <section id="experience" className="relative px-5 py-28 sm:px-8 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="06"
          eyebrow="Background & Credentials"
          title={
            <>
              Learning by <span className="text-yellow">shipping.</span>
            </>
          }
          description="Autonomous engineering initiatives with working codebases and AI systems, backed by a formal computer applications degree."
        />

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          {/* timeline */}
          <ol className="relative lg:col-span-7">
            <span aria-hidden className="absolute bottom-2 left-[19px] top-2 w-px border-l border-dashed border-olive/50" />
            {experience.map((e, i) => {
              const Icon = e.type === "Education" ? GraduationCap : Briefcase;
              return (
                <Reveal as="li" key={e.role} delay={i * 90} className="relative pb-10 pl-14 last:pb-0">
                  <span className="absolute left-0 top-0 grid h-10 w-10 place-items-center rounded-lg border border-white/[0.1] bg-[#0B1110] text-yellow">
                    <Icon size={16} />
                    {e.current && (
                      <span className="absolute -right-1 -top-1 h-2.5 w-2.5 bg-yellow" />
                    )}
                  </span>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                    <span className={e.current ? "text-yellow font-bold" : ""}>{e.period}</span>
                    <span className="h-px w-5 border-t border-dashed border-olive/60" />
                    <span className="text-ink/80">{e.type}</span>
                  </div>
                  <h3 className="mt-2 font-display text-xl font-bold uppercase tracking-tight text-ink">{e.role}</h3>
                  <p className="font-mono text-xs text-[#818CF8]">{e.org}</p>
                  <ul className="mt-4 space-y-2">
                    {e.points.map((p) => (
                      <li key={p} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-yellow" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              );
            })}
          </ol>

          {/* certifications & resume sidebar */}
          <Reveal className="lg:col-span-5" delay={120}>
            <div id="credentials" className="scroll-mt-28 space-y-6">
              {/* Credentials SpotlightCard */}
              <SpotlightCard id="certifications" className="p-6 sm:p-7">
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="grid h-9 w-9 place-items-center rounded-lg border border-yellow/30 bg-yellow/10 text-yellow">
                      <Award size={17} />
                    </span>
                    <h3 className="font-display text-lg font-bold uppercase tracking-wider text-ink">
                      Credentials
                    </h3>
                  </div>
                  <span className="tape-badge text-[10px] py-0.5 px-2">
                    {certifications.length.toString().padStart(2, "0")} VERIFIED
                  </span>
                </div>

                <p className="mt-4 font-sans text-sm leading-relaxed text-muted">
                  Authenticated industry credentials in Agentic AI, Gen-AI engineering, Full-Stack development and computer systems.
                </p>

                {/* Quick brand badges preview */}
                <div className="mt-4 flex flex-wrap gap-1.5 font-mono text-[11px]">
                  <span className="rounded border border-white/[0.08] bg-[#0e131f]/70 px-2 py-0.5 text-muted">
                    Claude Academy
                  </span>
                  <span className="rounded border border-white/[0.08] bg-[#0e131f]/70 px-2 py-0.5 text-muted">
                    Robotwallah
                  </span>
                  <span className="rounded border border-white/[0.08] bg-[#0e131f]/70 px-2 py-0.5 text-muted">
                    MyAnatomy
                  </span>
                  <span className="rounded border border-white/[0.08] bg-[#0e131f]/70 px-2 py-0.5 text-muted">
                    LinkedIn Learning
                  </span>
                </div>

                {/* Latest highlight snippet */}
                <div className="mt-5 rounded-lg border border-white/[0.08] bg-[#08090e] p-4">
                  <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-muted">
                    <span>LATEST CREDENTIAL</span>
                    <span className="flex items-center gap-1 text-yellow font-semibold">
                      <BadgeCheck size={12} /> AUTHENTICATED
                    </span>
                  </div>
                  <div className="mt-1.5 font-display text-base font-bold uppercase tracking-tight text-ink truncate">
                    Claude Code 101
                  </div>
                  <div className="font-mono text-xs text-[#818CF8]">
                    Anthropic · Claude Academy
                  </div>
                </div>

                {/* Open Modal CTA Button */}
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="mt-6 w-full group inline-flex items-center justify-center gap-2 rounded-lg bg-yellow py-3 px-4 font-display text-xs font-bold uppercase tracking-wider text-obsidian shadow-sm transition-all duration-200 hover:bg-[#E5C700] hover:shadow-[0_2px_15px_rgba(245,213,0,0.3)] cursor-pointer"
                >
                  <ShieldCheck size={16} />
                  <span>View All Credentials ({certifications.length.toString().padStart(2, "0")})</span>
                  <ArrowUpRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </SpotlightCard>

              {/* Resume Card (Located in the requested red box zone) */}
              <SpotlightCard id="resume-card" className="p-6 sm:p-7 group relative overflow-hidden transition-all duration-300 hover:border-yellow/50">
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="grid h-9 w-9 place-items-center rounded-lg border border-yellow/30 bg-yellow/10 text-yellow shadow-[0_0_15px_rgba(56,189,248,0.2)]">
                      <FileText size={17} />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold uppercase tracking-wider text-ink group-hover:text-yellow transition-colors">
                        Curriculum Vitae
                      </h3>
                      <p className="font-mono text-[10px] uppercase tracking-wider text-muted">
                        Official Resume // 2026
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-emerald-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-soft" />
                    ATS READY
                  </span>
                </div>

                <p className="mt-4 font-sans text-sm leading-relaxed text-muted">
                  Official CV summarizing autonomous AI architecture (JARVIS), LLM agent workflows, Python backend systems, and BCA foundations.
                </p>

                {/* Clickable Interactive Document Snapshot */}
                <div
                  onClick={() => setIsResumeOpen(true)}
                  className="group/preview mt-4 relative overflow-hidden rounded-lg border border-white/[0.08] bg-[#08090e] p-3 transition-all duration-300 hover:border-yellow/40 hover:shadow-[0_8px_30px_rgba(0,0,0,0.8)] cursor-pointer"
                  role="button"
                  tabIndex={0}
                  aria-label="Click to preview full resume"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") setIsResumeOpen(true);
                  }}
                >
                  <div className="flex items-center gap-3.5">
                    {/* Thumbnail Document View */}
                    <div className="relative h-16 w-12 shrink-0 overflow-hidden rounded border border-white/10 bg-white/5 shadow-md">
                      <Image
                        src="/images/resume-preview.png"
                        alt="Parvez Rangrezz Resume Preview"
                        width={48}
                        height={64}
                        className="h-full w-full object-cover object-top transition-transform duration-300 group-hover/preview:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#08090e] via-transparent to-transparent opacity-60" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-display text-sm font-bold uppercase tracking-tight text-ink group-hover/preview:text-yellow transition-colors truncate">
                          Parvez Rangrezz — CV
                        </span>
                        <span className="font-mono text-[9px] text-[#818CF8] uppercase">1-Page PDF</span>
                      </div>
                      <p className="font-mono text-[11px] text-muted truncate mt-0.5">
                        BCA (2025–2028) · Mewar University
                      </p>
                      <div className="mt-1 flex items-center gap-1.5 font-mono text-[10px] text-yellow">
                        <Eye size={12} />
                        <span>Click to expand full document</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick highlights tags */}
                <div className="mt-4 flex flex-wrap gap-1.5 font-mono text-[11px]">
                  <span className="rounded border border-white/[0.08] bg-[#0e131f]/70 px-2 py-0.5 text-muted">
                    JARVIS AI Engine
                  </span>
                  <span className="rounded border border-white/[0.08] bg-[#0e131f]/70 px-2 py-0.5 text-muted">
                    Gemini Live WebSockets
                  </span>
                  <span className="rounded border border-white/[0.08] bg-[#0e131f]/70 px-2 py-0.5 text-muted">
                    React 19 / Python
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="mt-5 flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() => setIsResumeOpen(true)}
                    className="flex-1 group/btn inline-flex items-center justify-center gap-2 rounded-lg bg-yellow py-2.5 px-4 font-display text-xs font-bold uppercase tracking-wider text-obsidian shadow-sm transition-all duration-200 hover:bg-[#E5C700] hover:shadow-[0_2px_15px_rgba(245,213,0,0.3)] cursor-pointer"
                  >
                    <Eye size={15} />
                    <span>Open Full Resume</span>
                    <ArrowUpRight size={14} className="transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>

                  <a
                    href="/Parvez_Rangrezz_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download="Parvez_Rangrezz_Resume.pdf"
                    className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] py-2.5 px-3.5 font-display text-xs font-bold uppercase tracking-wider text-ink transition-all duration-200 hover:border-yellow/40 hover:text-yellow hover:bg-yellow/[0.06]"
                    title="Download PDF"
                    aria-label="Download Resume PDF"
                  >
                    <Download size={14} />
                    <span>PDF</span>
                  </a>
                </div>
              </SpotlightCard>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Credentials Modal / Popup */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Verified Credentials Modal"
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
        >
          {/* Backdrop */}
          <div
            role="button"
            tabIndex={0}
            aria-label="Close credentials modal backdrop"
            onClick={() => setIsModalOpen(false)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " " || e.key === "Escape") {
                setIsModalOpen(false);
              }
            }}
            className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity duration-300"
          />

          {/* Modal Container */}
          <div className="relative z-10 flex max-h-[88vh] w-full max-w-2xl flex-col rounded-xl border border-white/[0.12] bg-[#0B1110] shadow-2xl shadow-black">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-white/[0.08] px-6 py-4 bg-[#18231E]/50">
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg border border-yellow/30 bg-yellow/10 text-yellow">
                  <ShieldCheck size={18} />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold uppercase tracking-wider text-ink">
                    Verified Credentials
                  </h3>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-muted">
                    {certifications.length} Authenticated Certificates
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                aria-label="Close credentials modal"
                className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-muted transition-colors hover:border-yellow/40 hover:text-yellow cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="overflow-y-auto p-5 sm:p-6 space-y-4">
              <ul className="space-y-4">
                {certifications.map((c) => (
                  <CertificateCard key={c.name} c={c} />
                ))}
              </ul>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between border-t border-white/[0.08] bg-[#18231E]/30 px-6 py-3.5">
              <span className="font-mono text-xs text-muted">
                {"// Authenticity verified by issuing organizations"}
              </span>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="rounded border border-white/10 bg-white/[0.04] px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-muted transition-colors hover:border-yellow/40 hover:text-yellow cursor-pointer"
              >
                Close (Esc)
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Resume Modal / Viewer */}
      {isResumeOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Official Resume Modal"
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5"
        >
          {/* Backdrop */}
          <div
            role="button"
            tabIndex={0}
            aria-label="Close resume modal backdrop"
            onClick={() => setIsResumeOpen(false)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " " || e.key === "Escape") {
                setIsResumeOpen(false);
              }
            }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md transition-opacity duration-300"
          />

          {/* Modal Container */}
          <div className="relative z-10 flex max-h-[92vh] w-full max-w-4xl flex-col rounded-xl border border-white/[0.12] bg-[#0B1110] shadow-2xl shadow-black overflow-hidden">
            {/* Modal Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] px-5 py-3.5 sm:px-6 sm:py-4 bg-[#18231E]/60">
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg border border-yellow/30 bg-yellow/10 text-yellow shadow-[0_0_12px_rgba(56,189,248,0.25)]">
                  <FileText size={18} />
                </span>
                <div>
                  <h3 className="font-display text-base sm:text-lg font-bold uppercase tracking-wider text-ink flex items-center gap-2">
                    <span>Parvez Rangrezz</span>
                    <span className="rounded border border-emerald-400/30 bg-emerald-400/10 px-1.5 py-0.2 font-mono text-[9px] font-semibold text-emerald-300">
                      CV // 2026
                    </span>
                  </h3>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-muted">
                    BCA Student · Software & Web Developer · AI Enthusiast
                  </p>
                </div>
              </div>

              {/* Header Right Actions */}
              <div className="flex items-center gap-2">
                {/* View Switcher Pills */}
                <div className="flex rounded-lg border border-white/10 bg-black/40 p-0.5 font-mono text-xs">
                  <button
                    type="button"
                    onClick={() => setResumeTab("document")}
                    className={`rounded-md px-2.5 py-1 text-[11px] font-medium transition-colors ${
                      resumeTab === "document"
                        ? "bg-yellow text-obsidian font-bold shadow-sm"
                        : "text-muted hover:text-ink"
                    }`}
                  >
                    Document
                  </button>
                  <button
                    type="button"
                    onClick={() => setResumeTab("details")}
                    className={`rounded-md px-2.5 py-1 text-[11px] font-medium transition-colors ${
                      resumeTab === "details"
                        ? "bg-yellow text-obsidian font-bold shadow-sm"
                        : "text-muted hover:text-ink"
                    }`}
                  >
                    ATS Text
                  </button>
                </div>

                <a
                  href="/Parvez_Rangrezz_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-xs font-semibold text-ink transition-colors hover:border-yellow/40 hover:text-yellow"
                  title="Open PDF in new tab"
                >
                  <ExternalLink size={13} />
                  <span>Open PDF</span>
                </a>

                <a
                  href="/Parvez_Rangrezz_Resume.pdf"
                  download="Parvez_Rangrezz_Resume.pdf"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-yellow/30 bg-yellow/10 px-3 py-1.5 font-mono text-xs font-semibold text-yellow transition-colors hover:bg-yellow hover:text-obsidian"
                  title="Download PDF"
                >
                  <Download size={13} />
                  <span className="hidden sm:inline">Download</span>
                </a>

                <button
                  type="button"
                  onClick={() => setIsResumeOpen(false)}
                  aria-label="Close resume modal"
                  className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-muted transition-colors hover:border-yellow/40 hover:text-yellow cursor-pointer"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Modal Scrollable Body */}
            <div className="overflow-y-auto p-4 sm:p-6 max-h-[75vh]">
              {resumeTab === "document" ? (
                /* High-Res Document Preview */
                <div className="flex flex-col items-center">
                  <div className="relative w-full max-w-2xl overflow-hidden rounded-xl border border-white/15 bg-white shadow-2xl">
                    <Image
                      src="/images/resume-preview.png"
                      alt="Parvez Rangrezz Full Resume Document"
                      width={850}
                      height={1200}
                      className="h-auto w-full object-contain"
                      priority
                    />
                  </div>
                </div>
              ) : (
                /* Structured Interactive ATS View */
                <div className="space-y-6 max-w-3xl mx-auto">
                  {/* Personal Contact Bar */}
                  <div className="rounded-xl border border-white/[0.08] bg-[#08090e] p-5">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <h4 className="font-display text-xl font-bold uppercase tracking-tight text-ink">
                          PARVEZ RANGREZZ
                        </h4>
                        <p className="font-mono text-xs text-yellow mt-0.5">
                          BCA Student · Software & Web Developer · AI & Automation Enthusiast
                        </p>
                        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-muted">
                          <span className="flex items-center gap-1.5">
                            <MapPin size={13} className="text-muted" /> Bhilwara, Rajasthan, India
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Phone size={13} className="text-muted" /> 6376352309
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Mail size={13} className="text-muted" /> parvez.rangrezz77@gmail.com
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => copyToClipboard("parvez.rangrezz77@gmail.com", "email")}
                          className="inline-flex items-center gap-1.5 rounded border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[11px] text-ink hover:border-yellow/40 hover:text-yellow transition-colors cursor-pointer"
                        >
                          {copiedField === "email" ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                          <span>{copiedField === "email" ? "Copied" : "Copy Email"}</span>
                        </button>
                        <a
                          href={links.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="grid h-8 w-8 place-items-center rounded border border-white/10 bg-white/[0.04] text-muted hover:border-yellow/40 hover:text-yellow transition-colors"
                        >
                          <LinkedinIcon size={14} />
                        </a>
                        <a
                          href={links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="grid h-8 w-8 place-items-center rounded border border-white/10 bg-white/[0.04] text-muted hover:border-yellow/40 hover:text-yellow transition-colors"
                        >
                          <GithubIcon size={14} />
                        </a>
                      </div>
                    </div>

                    <p className="mt-4 border-t border-white/[0.06] pt-3.5 font-sans text-sm leading-relaxed text-muted">
                      AI-focused Software Developer with a strong foundation in C, Java, Python, and Web Technologies, with hands-on experience building AI-powered applications and automation workflows using modern LLMs. Skilled in LLM API Integration (Gemini/OpenAI), Prompt Engineering, AI-driven content systems, and automation scripting, with a focus on practical problem-solving and rapid AI-assisted development.
                    </p>
                  </div>

                  {/* Education */}
                  <div className="rounded-xl border border-white/[0.08] bg-[#08090e] p-5">
                    <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-yellow mb-3">
                      <GraduationCap size={15} />
                      <span className="font-bold">Education</span>
                    </div>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h5 className="font-display text-base font-bold uppercase text-ink">
                        Bachelor of Computer Applications (BCA)
                      </h5>
                      <span className="rounded border border-yellow/30 bg-yellow/10 px-2 py-0.5 font-mono text-xs font-semibold text-yellow">
                        2025 – 2028
                      </span>
                    </div>
                    <p className="font-mono text-xs text-[#818CF8] mt-0.5">
                      Mewar University, Rajasthan
                    </p>
                    <p className="mt-2 text-xs text-muted leading-relaxed">
                      <strong className="text-ink font-mono text-[11px]">Relevant Coursework:</strong> DBMS · SQL · C Programming · Java · HTML · CSS · Python · Cloud Computing · Operating Systems · Data Structures & Algorithms · Software Engineering
                    </p>
                  </div>

                  {/* Technical & Professional Skills */}
                  <div className="rounded-xl border border-white/[0.08] bg-[#08090e] p-5 space-y-3.5">
                    <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-yellow">
                      <Terminal size={15} />
                      <span className="font-bold">Technical & Professional Skills</span>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <div>
                        <span className="block font-mono text-[10px] uppercase text-muted mb-1.5">Programming Languages</span>
                        <div className="flex flex-wrap gap-1.5">
                          {["C", "Java", "Python", "JavaScript (JS)", "SQL"].map((s) => (
                            <span key={s} className="chip text-[11px]">{s}</span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <span className="block font-mono text-[10px] uppercase text-muted mb-1.5">Web Development</span>
                        <div className="flex flex-wrap gap-1.5">
                          {["React", "TypeScript", "JavaScript ES6+", "Tailwind CSS", "HTML5/CSS3"].map((s) => (
                            <span key={s} className="chip text-[11px]">{s}</span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <span className="block font-mono text-[10px] uppercase text-muted mb-1.5">Frontier LLMs & Reasoning</span>
                        <div className="flex flex-wrap gap-1.5">
                          {["Claude", "Gemini", "ChatGPT", "DeepSeek", "Kimi AI", "MiniMax", "Meta Llama"].map((s) => (
                            <span key={s} className="chip text-[11px]">{s}</span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <span className="block font-mono text-[10px] uppercase text-muted mb-1.5">AI Agents & Coding Tools</span>
                        <div className="flex flex-wrap gap-1.5">
                          {["Claude Code", "Antigravity", "Manus AI", "Google AI Studio", "Codex", "Prompt Engg"].map((s) => (
                            <span key={s} className="chip text-[11px]">{s}</span>
                          ))}
                        </div>
                      </div>

                      <div className="sm:col-span-2">
                        <span className="block font-mono text-[10px] uppercase text-muted mb-1.5">Dev Tools & Ecosystem</span>
                        <div className="flex flex-wrap gap-1.5">
                          {["Git / GitHub", "VS Code", "Perplexity AI", "ElevenLabs", "LLM APIs", "WebSockets", "MySQL", "DBMS", "OOP Concepts"].map((s) => (
                            <span key={s} className="chip text-[11px]">{s}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Featured Technical Projects */}
                  <div className="rounded-xl border border-white/[0.08] bg-[#08090e] p-5 space-y-4">
                    <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-yellow">
                      <Bot size={15} />
                      <span className="font-bold">Featured Technical Projects</span>
                    </div>

                    {/* Project 1 */}
                    <div className="rounded-lg border border-white/[0.06] bg-[#0e131f]/60 p-4">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h6 className="font-display text-base font-bold uppercase text-ink">
                          JARVIS — Autonomous Multimodal AI Desktop Assistant
                        </h6>
                        <span className="font-mono text-[10px] text-[#818CF8]">
                          React 19 · Electron · TypeScript · Gemini Live API · Python
                        </span>
                      </div>
                      <p className="mt-1 font-mono text-xs text-yellow">
                        Autonomous voice & vision desktop assistant powered by Gemini Live WebSocket API
                      </p>
                      <ul className="mt-3 space-y-1.5 text-xs text-muted">
                        <li className="flex gap-2">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-yellow" />
                          <span>Architected an autonomous AI desktop assistant using React 19, TypeScript, Electron, and Tailwind CSS, featuring low-latency bidirectional voice interaction with natural Hinglish/English support.</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-yellow" />
                          <span>Integrated Gemini Multimodal Live API via WebSockets for real-time streaming audio and engineered Screen Vision Sentinel for live screen capture analysis and contextual assistance.</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-yellow" />
                          <span>Developed System Control & Memory engines using Python and Electron IPC to execute desktop commands, app automation, and persistent multi-session memory.</span>
                        </li>
                      </ul>
                    </div>

                    {/* Project 2 */}
                    <div className="rounded-lg border border-white/[0.06] bg-[#0e131f]/60 p-4">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h6 className="font-display text-base font-bold uppercase text-ink">
                          AI Viral SEO & Trend Agent — YouTube Shorts Engine
                        </h6>
                        <span className="font-mono text-[10px] text-[#818CF8]">
                          Python · Flask · Multimodal AI · Web Scraping · REST API
                        </span>
                      </div>
                      <p className="mt-1 font-mono text-xs text-yellow">
                        Automated content intelligence pipeline analyzing media & real-time trends for maximum reach
                      </p>
                      <ul className="mt-3 space-y-1.5 text-xs text-muted">
                        <li className="flex gap-2">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-yellow" />
                          <span>Built an automated content intelligence engine that ingests video/image assets, extracts visual context, and cross-references them with real-time scraped social trends.</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-yellow" />
                          <span>Integrated Multimodal Vision & LLM APIs to automatically generate high-retention video hooks, viral titles, optimized descriptions, and relevant hashtag clusters.</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-yellow" />
                          <span>Engineered a modular Flask REST backend featuring asynchronous processing, dynamic tone/language customization (Hinglish/English), and automated metadata pipelines.</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Core Work Philosophy */}
                  <div className="rounded-xl border border-yellow/20 bg-yellow/[0.03] p-4 font-mono text-xs text-yellow/90 flex items-start gap-2.5">
                    <Sparkles size={16} className="text-yellow shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-yellow font-bold uppercase tracking-wide">Core Work Philosophy:</strong> Adept at rapidly dissecting project requirements and leveraging frontier AI tools to accelerate delivery, while maintaining strict standards for quality, precision, and contextual accuracy.
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.08] bg-[#18231E]/30 px-5 py-3.5 sm:px-6">
              <span className="font-mono text-xs text-muted">
                {"// Official verified document · Parvez Rangrezz CV (2026)"}
              </span>
              <div className="flex items-center gap-2">
                <a
                  href="/Parvez_Rangrezz_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded border border-white/10 bg-white/[0.04] px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider text-muted transition-colors hover:border-yellow/40 hover:text-yellow"
                >
                  Open In New Tab ↗
                </a>
                <button
                  type="button"
                  onClick={() => setIsResumeOpen(false)}
                  className="rounded border border-white/10 bg-white/[0.04] px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-muted transition-colors hover:border-yellow/40 hover:text-yellow cursor-pointer"
                >
                  Close (Esc)
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
