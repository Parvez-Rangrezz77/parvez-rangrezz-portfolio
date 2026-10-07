"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { navItems, links } from "@/lib/site-config";
import { GithubIcon, LinkedinIcon } from "./ui/brand-icons";
import { BrandLogo } from "./ui/brand-logo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  // Shrink / frost on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active-section tracking
  useEffect(() => {
    const ids = navItems.map((n) => n.href.slice(1));
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  // Lock scroll + Esc to close drawer
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
        <nav
          aria-label="Primary"
          className={`mx-auto flex h-14 max-w-6xl items-center justify-between rounded-xl px-3 pl-4 transition-all duration-300 sm:px-4 ${
            scrolled
              ? "border border-white/[0.08] bg-[#0B1110]/85 shadow-[0_12px_40px_-15px_rgba(0,0,0,0.9)] backdrop-blur-xl"
              : "border border-transparent bg-transparent"
          }`}
        >
          {/* Logo */}
          <a href="#top" id="nav-logo" className="group" aria-label="Parvez Rangrezz — home">
            <BrandLogo size="md" />
          </a>

          {/* Desktop links with editorial typography */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const isActive = active === item.href;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    id={`nav-${item.href.slice(1)}`}
                    className={`relative rounded-md px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors duration-200 ${
                      isActive ? "text-yellow font-bold" : "text-muted hover:text-ink"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute inset-x-3 -bottom-px h-[2px] bg-yellow transition-opacity duration-300 ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2.5">
            <a
              href="#contact"
              id="nav-cta"
              className="group hidden items-center gap-2 rounded-lg bg-yellow px-4 py-2 font-display text-xs font-bold uppercase tracking-wider text-obsidian shadow-sm transition-all duration-200 hover:bg-[#E5C700] hover:shadow-[0_2px_15px_rgba(245,213,0,0.25)] sm:inline-flex"
            >
              <span>Let&apos;s Talk</span>
              <ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
            <button
              type="button"
              id="nav-menu-toggle"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-drawer"
              onClick={() => setOpen(true)}
              className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-ink transition-colors hover:border-yellow/40 lg:hidden"
            >
              <Menu size={17} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[70] lg:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          role="button"
          tabIndex={0}
          aria-label="Close navigation overlay"
          onClick={() => setOpen(false)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " " || e.key === "Escape") {
              setOpen(false);
            }
          }}
          className={`absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity duration-400 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <aside
          id="mobile-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className={`absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col border-l border-white/[0.08] bg-[#0B1110] p-6 backdrop-blur-2xl transition-transform duration-400 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
            <BrandLogo size="sm" showSubtitle={false} />
            <button
              type="button"
              id="nav-menu-close"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-ink hover:border-yellow/40"
            >
              <X size={17} />
            </button>
          </div>

          <ul className="mt-6 flex flex-col">
            {navItems.map((item, i) => (
              <li
                key={item.href}
                className={`transition-all duration-400 ${open ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"}`}
                style={{ transitionDelay: open ? `${80 + i * 40}ms` : "0ms" }}
              >
                <a
                  href={item.href}
                  tabIndex={open ? 0 : -1}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-white/[0.06] py-3.5 font-display text-lg uppercase tracking-tight text-ink hover:text-yellow"
                >
                  <span>{item.label}</span>
                  <span className="font-mono text-xs text-yellow">[ 0{i + 1} ]</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-auto space-y-3 pt-6">
            <a
              href="#contact"
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-lg bg-yellow py-3 font-display text-sm font-bold uppercase tracking-wider text-obsidian"
            >
              Let&apos;s Talk <ArrowRight size={15} />
            </a>
            <div className="grid grid-cols-2 gap-3">
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={open ? 0 : -1}
                className="glass flex items-center justify-center gap-2 rounded-lg py-2.5 font-mono text-xs uppercase tracking-wider text-ink hover:border-yellow/30"
              >
                <GithubIcon size={15} /> GitHub
              </a>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={open ? 0 : -1}
                className="glass flex items-center justify-center gap-2 rounded-lg py-2.5 font-mono text-xs uppercase tracking-wider text-ink hover:border-yellow/30"
              >
                <LinkedinIcon size={14} /> LinkedIn
              </a>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
