import Link from "next/link";
import { ArrowLeft, Terminal } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-20 text-center bg-obsidian text-ink">
      {/* Ambient background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute h-[320px] w-[320px] rounded-full bg-gradient-to-tr from-sky-500/20 via-indigo-500/20 to-transparent blur-[80px]"
      />

      <div className="relative z-10 max-w-md">
        <div className="inline-flex items-center gap-2 rounded-full border border-yellow/30 bg-yellow/10 px-3.5 py-1 font-mono text-[11px] uppercase tracking-wider text-yellow mb-6">
          <Terminal size={13} />
          <span>ERROR 404 // ROUTE NOT FOUND</span>
        </div>

        <h1 className="font-display text-6xl font-bold uppercase tracking-tight sm:text-7xl">
          Lost in <span className="text-yellow">Cyberspace.</span>
        </h1>

        <p className="mt-4 font-sans text-sm text-muted leading-relaxed">
          The requested coordinate does not exist in the neural registry or has been relocated to another subsystem.
        </p>

        <div className="mt-8 flex justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border border-yellow/40 bg-yellow/10 px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-yellow transition-all duration-300 hover:bg-yellow hover:text-[#08090e] hover:shadow-[0_0_25px_rgba(56,189,248,0.4)]"
          >
            <ArrowLeft size={14} />
            <span>Return to Mission Control</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
