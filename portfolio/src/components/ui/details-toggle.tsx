"use client";

import { useId, useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

/** "View Details" toggle with a smooth grid-rows height animation. */
export function DetailsToggle({ children, label = "View Details" }: { children: ReactNode; label?: string }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  return (
    <div className="w-full">
      <button
        type="button"
        id="jarvis-details-toggle"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((o) => !o)}
        className="glass group inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium text-ink transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]"
      >
        {open ? "Hide Details" : label}
        <ChevronDown size={15} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <div
        id={id}
        className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="pt-6">{children}</div>
        </div>
      </div>
    </div>
  );
}
