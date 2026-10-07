"use client";

import { useEffect } from "react";
import { AlertTriangle, RotateCcw } from "lucide-react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error boundary triggered:", error);
  }, [error]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-20 text-center bg-obsidian text-ink">
      <div
        aria-hidden
        className="pointer-events-none absolute h-[320px] w-[320px] rounded-full bg-gradient-to-tr from-rose-500/20 via-amber-500/15 to-transparent blur-[80px]"
      />

      <div className="relative z-10 max-w-md">
        <div className="inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-500/10 px-3.5 py-1 font-mono text-[11px] uppercase tracking-wider text-rose-300 mb-6">
          <AlertTriangle size={13} />
          <span>SYSTEM FAULT // EXCEPTION CAPTURED</span>
        </div>

        <h1 className="font-display text-5xl font-bold uppercase tracking-tight sm:text-6xl text-ink">
          Subsystem <span className="text-rose-400">Crash.</span>
        </h1>

        <p className="mt-4 font-sans text-sm text-muted leading-relaxed">
          An unexpected anomaly occurred during render execution. The state has been isolated to prevent systemic corruption.
        </p>

        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => reset()}
            className="inline-flex items-center gap-2 rounded-xl border border-rose-400/40 bg-rose-500/10 px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-rose-300 transition-all duration-300 hover:bg-rose-500 hover:text-white hover:shadow-[0_0_25px_rgba(244,63,94,0.4)] cursor-pointer"
          >
            <RotateCcw size={14} />
            <span>Reboot Neural Subsystem</span>
          </button>
        </div>
      </div>
    </main>
  );
}
