"use client";

type BrandLogoProps = {
  size?: "sm" | "md" | "lg";
  showSubtitle?: boolean;
  className?: string;
};

export function BrandLogo({ size = "md", showSubtitle = true, className = "" }: BrandLogoProps) {
  const iconSize = size === "sm" ? 18 : size === "lg" ? 24 : 20;
  const boxSize = size === "sm" ? "h-8 w-8" : size === "lg" ? "h-10 w-10" : "h-9 w-9";
  const textSize = size === "sm" ? "text-xs" : size === "lg" ? "text-base" : "text-sm";

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Editorial Geometric Emblem with PR Monogram */}
      <div
        className={`relative grid ${boxSize} shrink-0 place-items-center rounded-lg border border-yellow/30 bg-[#0e131f]/90 shadow-[inset_0_1px_0_rgba(56,189,248,0.2)] transition-all duration-300 group-hover:border-yellow/60 group-hover:shadow-[0_0_20px_-3px_rgba(56,189,248,0.4)]`}
      >
        <svg
          width={iconSize}
          height={iconSize}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300 group-hover:scale-105"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="pr-brand-yellow" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="60%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#6366F1" />
            </linearGradient>
            <linearGradient id="pr-glow-fill" x1="16" y1="3" x2="16" y2="29" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#0E131F" stopOpacity="0.05" />
            </linearGradient>
          </defs>

          {/* Hexagonal Tech Frame */}
          <path
            d="M16 3L27 9.5V22.5L16 29L5 22.5V9.5L16 3Z"
            stroke="url(#pr-brand-yellow)"
            strokeWidth="1.5"
            strokeOpacity="0.6"
            fill="url(#pr-glow-fill)"
          />

          {/* Stylized P & R Monogram in Vivid Cyan */}
          {/* Main vertical spine */}
          <path
            d="M11 9.5V22.5"
            stroke="#F8FAFC"
            strokeWidth="2.4"
            strokeLinecap="round"
          />

          {/* P Loop */}
          <path
            d="M11 9.5H16.5C18.7 9.5 20.5 11.2 20.5 13.3C20.5 15.4 18.7 17.1 16.5 17.1H11"
            stroke="#38BDF8"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* R Diagonal Kick */}
          <path
            d="M15.5 17.1L21 22.5"
            stroke="#38BDF8"
            strokeWidth="2.4"
            strokeLinecap="round"
          />

          {/* AI core node */}
          <circle cx="16" cy="13.3" r="1.75" fill="#38BDF8" />
        </svg>
      </div>

      {/* Brand Name Typography */}
      <div className="flex flex-col leading-none">
        <div className={`flex items-baseline gap-0.5 font-mono ${textSize} font-bold tracking-tight text-ink transition-colors group-hover:text-white`}>
          <span>parvez</span>
          <span className="text-yellow">.dev</span>
        </div>
        {showSubtitle && (
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] font-medium text-muted mt-0.5">
            AI Developer
          </span>
        )}
      </div>
    </div>
  );
}
