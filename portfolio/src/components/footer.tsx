import { ArrowUp } from "lucide-react";
import { links, navItems } from "@/lib/site-config";
import { GithubIcon, LinkedinIcon } from "./ui/brand-icons";
import { BrandLogo } from "./ui/brand-logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative px-5 pb-10 pt-16 sm:px-8 border-t border-white/[0.08] bg-[#08090e]">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <a href="#top" className="group inline-flex items-center gap-2.5" aria-label="Back to top">
            <BrandLogo size="md" />
          </a>
          <p className="mt-4 max-w-sm font-sans text-sm leading-relaxed text-muted">
            AI-focused software developer building intelligent systems, autonomous automation workflows, and high-performance software.
          </p>
          <div className="mt-4 font-mono text-[11px] uppercase tracking-wider text-[#818CF8]">
            {"// Jaipur, Rajasthan, India"}
          </div>
        </div>

        <nav aria-label="Footer" className="md:col-span-4">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Index {"//"} Navigation</div>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5">
            {navItems.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="font-mono text-xs uppercase tracking-wider text-muted transition-colors hover:text-yellow">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-3">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">External // Network</div>
          <div className="mt-4 flex gap-2">
            {[
              { href: links.github, icon: GithubIcon, label: "GitHub" },
              { href: links.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-lg border border-white/[0.08] bg-[#0e131f]/70 text-muted transition-all duration-200 hover:border-yellow/40 hover:text-yellow"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-6xl flex-col-reverse items-start justify-between gap-4 border-t border-white/[0.06] pt-6 font-mono text-xs text-muted sm:flex-row sm:items-center">
        <p>© {year} Parvez Rangrezz. Built with Next.js, TypeScript & Bold Editorial Systems.</p>
        <a
          href="#top"
          id="footer-back-to-top"
          className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted transition-colors hover:text-yellow"
        >
          Back to top
          <span className="grid h-7 w-7 place-items-center rounded border border-white/[0.08] transition-colors group-hover:border-yellow/40 group-hover:text-yellow">
            <ArrowUp size={13} className="transition-transform duration-200 group-hover:-translate-y-0.5" />
          </span>
        </a>
      </div>
    </footer>
  );
}
