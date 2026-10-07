import Image from "next/image";

type IconProps = { size?: number; className?: string };

export function GithubIcon({ size = 18, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.97 3.22 9.18 7.69 10.67.56.1.77-.24.77-.54v-1.9c-3.13.68-3.79-1.51-3.79-1.51-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.64 1.22 3.28.93.1-.73.39-1.22.71-1.5-2.5-.28-5.13-1.25-5.13-5.56 0-1.23.44-2.23 1.16-3.02-.12-.28-.5-1.43.11-2.98 0 0 .95-.3 3.1 1.15a10.7 10.7 0 0 1 5.64 0c2.15-1.46 3.1-1.15 3.1-1.15.61 1.55.23 2.7.11 2.98.72.79 1.16 1.79 1.16 3.02 0 4.32-2.64 5.28-5.15 5.55.4.35.76 1.03.76 2.08v3.08c0 .3.2.65.78.54a11.26 11.26 0 0 0 7.68-10.67C23.25 5.48 18.27.5 12 .5Z" />
    </svg>
  );
}

export function LinkedinIcon({ size = 18, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

/* ───────────────────── 1. DeepSeek ───────────────────── */
export function DeepSeekIcon({ size = 26, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M21.2 12.3c-.5-1.5-1.6-2.6-3-3.2-2.2-1-4.8-.3-6.2 1.7-1.7 2.3-4.4 3.4-7.1 3-1.5-.2-2.8-1.1-3.6-2.4-.4-.6-.9-1-1.5-1-1.1 0-2 1-1.8 2.2.3 3.2 2.2 6 5.2 7.1 3.5 1.3 7.3.4 10-2.1 1.7-1.6 4-2.2 6.3-1.7 1.1.2 1.8-.5 2-1.6.1-.7-.1-1.4-.3-2z"
        fill="url(#deepseek-gradient)"
      />
      <circle cx="16.5" cy="8.5" r="1.5" fill="#60A5FA" />
      <defs>
        <linearGradient id="deepseek-gradient" x1="0" y1="6" x2="24" y2="20" gradientUnits="userSpaceOnUse">
          <stop stopColor="#60A5FA" />
          <stop offset="0.5" stopColor="#3B82F6" />
          <stop offset="1" stopColor="#1D4ED8" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ───────────────────── 2. Kimi AI (Moonshot) ───────────────────── */
export function KimiAIIcon({ size = 26, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="6" fill="#0A0E1A" stroke="url(#kimi-border)" strokeWidth="1.2" />
      {/* Stylized Kimi "K" Starburst mark */}
      <path
        d="M8 6.5v11m0-5.5h2l4.5-5.5m-3.5 6.5l4.5 5.5"
        stroke="url(#kimi-gradient)"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="17.5" cy="6.5" r="1.2" fill="#38BDF8" />
      <defs>
        <linearGradient id="kimi-gradient" x1="8" y1="6.5" x2="17" y2="17.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38BDF8" />
          <stop offset="0.5" stopColor="#818CF8" />
          <stop offset="1" stopColor="#C084FC" />
        </linearGradient>
        <linearGradient id="kimi-border" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38BDF8" stopOpacity="0.6" />
          <stop offset="1" stopColor="#818CF8" stopOpacity="0.2" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ───────────────────── 3. Meta AI ───────────────────── */
export function MetaAIIcon({ size = 26, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle
        cx="12"
        cy="12"
        r="8.5"
        stroke="url(#meta-ai-ring)"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id="meta-ai-ring" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0064E0" />
          <stop offset="0.3" stopColor="#00A3FF" />
          <stop offset="0.65" stopColor="#7F22FE" />
          <stop offset="1" stopColor="#E0318F" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ───────────────────── 4. Antigravity CLI ───────────────────── */
export function AntigravityIcon({ size = 26, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 2.5L2.5 19.5h19L12 2.5z"
        stroke="url(#agy-stroke)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="13.5" r="3" fill="#38BDF8" />
      <circle cx="12" cy="13.5" r="5" stroke="#FACC15" strokeWidth="1" strokeDasharray="2 2" />
      <path d="M12 6.5v2m-5 7.5l1.5-1m7 0l-1.5-1" stroke="#FACC15" strokeWidth="1.5" strokeLinecap="round" />
      <defs>
        <linearGradient id="agy-stroke" x1="2.5" y1="2.5" x2="21.5" y2="19.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38BDF8" />
          <stop offset="0.5" stopColor="#818CF8" />
          <stop offset="1" stopColor="#FACC15" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ───────────────────── 5. Grok (xAI) ───────────────────── */
export function GrokIcon({ size = 26, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M4 20h3.8L18.8 4H15L4 20z" fill="#FFFFFF" />
      <path d="M8.2 4h3.8l8 16h-3.8L8.2 4z" fill="#94A3B8" />
    </svg>
  );
}

/* ───────────────────── 6. Grok Bot ───────────────────── */
export function GrokBotIcon({ size = 26, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3" y="5" width="18" height="14" rx="4" stroke="url(#grok-bot-grad)" strokeWidth="1.8" />
      {/* Eyes */}
      <circle cx="8.5" cy="12" r="1.8" fill="#38BDF8" />
      <circle cx="15.5" cy="12" r="1.8" fill="#38BDF8" />
      {/* Antenna */}
      <path d="M12 2v3" stroke="#FACC15" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="12" cy="1.5" r="1" fill="#FACC15" />
      {/* Smile/waveform */}
      <path d="M9.5 15.5c1.5 1 3.5 1 5 0" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
      <defs>
        <linearGradient id="grok-bot-grad" x1="3" y1="5" x2="21" y2="19" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38BDF8" />
          <stop offset="1" stopColor="#818CF8" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ───────────────────── 7. Google AI Studio ───────────────────── */
export function GoogleAIStudioIcon({ size = 26, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Google Gemini 4-Point Star Sparkle */}
      <path
        d="M12 2C12 7.523 7.523 12 2 12c5.523 0 10 4.477 10 10 0-5.523 4.477-10 10-10-5.523 0-10-4.477-10-10z"
        fill="url(#ai-studio-gemini)"
      />
      <circle cx="18" cy="6" r="2" fill="#38BDF8" opacity="0.8" />
      <defs>
        <linearGradient id="ai-studio-gemini" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4285F4" />
          <stop offset="0.4" stopColor="#9B72CB" />
          <stop offset="0.8" stopColor="#D96570" />
          <stop offset="1" stopColor="#F4B400" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ───────────────────── 8. Canva ───────────────────── */
export function CanvaIcon({ size = 26, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="10" fill="url(#canva-gradient)" />
      {/* Official Canva cursive 'C' */}
      <path
        d="M15.2 8.8c-.9-.8-2.1-1.1-3.5-.9-2 .4-3.5 1.9-4 3.9-.8 2.6.7 5.1 3.3 5.1 1.5 0 2.8-.7 3.5-1.7.3-.4.2-1-.2-1.2-.4-.2-.9-.1-1.2.2-.6.7-1.4 1-2.2.9-1.4-.1-2.4-1.4-2.2-3 .2-1.3 1.3-2.4 2.6-2.5 1.1-.1 1.9.3 2.4.8.3.3.9.3 1.2 0 .4-.4.4-.9.2-1.6z"
        fill="#FFFFFF"
      />
      <defs>
        <linearGradient id="canva-gradient" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00C4CC" />
          <stop offset="1" stopColor="#7D2AE8" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ───────────────────── 9. MiniMax ───────────────────── */
export function MiniMaxIcon({ size = 26, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="2.5" y="7.5" width="3.2" height="9" rx="1.6" fill="url(#minimax-gradient)" />
      <rect x="7.8" y="4" width="3.2" height="16" rx="1.6" fill="url(#minimax-gradient)" />
      <rect x="13.1" y="8" width="3.2" height="8" rx="1.6" fill="url(#minimax-gradient)" />
      <rect x="18.4" y="5" width="3.2" height="14" rx="1.6" fill="url(#minimax-gradient)" />
      <defs>
        <linearGradient id="minimax-gradient" x1="2" y1="4" x2="22" y2="20" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF6B35" />
          <stop offset="0.6" stopColor="#FF3366" />
          <stop offset="1" stopColor="#FF2E93" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ───────────────────── 10. Perplexity AI ───────────────────── */
export function PerplexityIcon({ size = 26, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path
        d="M12 2.5 5.5 8v8l6.5 5.5 6.5-5.5V8L12 2.5zm0 2.8 4.5 3.8v6.8L12 19.7l-4.5-3.8V9.1L12 5.3zm-1 3.2v7h2v-7h-2zm-3.5 2 1.4 1.4-2.5 2.5-1.4-1.4 2.5-2.5zm9 0 2.5 2.5-1.4 1.4-2.5-2.5 1.4-1.4z"
        fill="#22B8CD"
      />
    </svg>
  );
}

/* ───────────────────── 11. Claude ───────────────────── */
export function ClaudeIcon({ size = 26, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M13.6 2.6c-.4-.5-1.1-.6-1.6-.2L5.8 7.3c-.5.4-.7 1.1-.4 1.7l2.8 6.4c.3.7 1.1 1 1.7.7l6.2-2.8c.6-.3.9-1 .7-1.7l-2-6.5c-.1-.7-.6-1.2-1.2-1.5z"
        fill="#D97757"
      />
      <circle cx="12" cy="12" r="3" fill="#F5D500" opacity="0.8" />
    </svg>
  );
}

/* ───────────────────── 12. ChatGPT ───────────────────── */
export function ChatGPTIcon({ size = 26, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M22.28 9.82a5.98 5.98 0 0 0-.51-4.91 6.05 6.05 0 0 0-6.51-2.9A6.06 6.06 0 0 0 4.98 4.18a5.98 5.98 0 0 0-4 2.9 6.05 6.05 0 0 0 .75 7.1 5.98 5.98 0 0 0 .51 4.91 6.05 6.05 0 0 0 6.51 2.9A5.98 5.98 0 0 0 13.26 24a6.05 6.05 0 0 0 5.77-4.2 5.99 5.99 0 0 0 4-2.9 6.05 6.05 0 0 0-.75-7.08zm-9.02 12.61a4.48 4.48 0 0 1-2.88-1.04l.14-.08 4.78-2.76a.8.8 0 0 0 .4-.68v-6.74l2.02 1.17a.07.07 0 0 1 .04.05v5.59a4.5 4.5 0 0 1-4.5 4.49zm-9.66-4.13a4.47 4.47 0 0 1-.53-3.01l.14.08 4.78 2.76a.77.77 0 0 0 .78 0l5.85-3.37v2.33a.08.08 0 0 1-.04.06L9.74 19.95a4.5 4.5 0 0 1-6.14-1.65zm-1.26-9.5a4.49 4.49 0 0 1 2.34-1.98v5.52a.76.76 0 0 0 .39.68l5.81 3.35-2.02 1.17a.08.08 0 0 1-.07 0l-4.83-2.79a4.5 4.5 0 0 1-1.62-5.95zm15.05 2.12l-5.84-3.37 2.02-1.16a.08.08 0 0 1 .07 0l4.83 2.79a4.5 4.5 0 0 1-.69 8.1v-5.69a.77.77 0 0 0-.39-.67zm3.01-4.71a4.48 4.48 0 0 1 .54 3.01l-.14-.08-4.78-2.76a.77.77 0 0 0-.78 0L9.39 9.75V7.42a.08.08 0 0 1 .03-.06l4.84-2.8a4.5 4.5 0 0 1 6.15 1.65zM8.01 12.87l2.58-1.49 2.58 1.49v2.98l-2.58 1.49-2.58-1.49z"
        fill="#10A37F"
      />
    </svg>
  );
}

/* ───────────────────── 13. Claude Code ───────────────────── */
export function ClaudeCodeIcon({ size = 26, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="2.5" y="3.5" width="19" height="17" rx="4" fill="#140e0b" stroke="#D97757" strokeWidth="1.6" />
      <path d="M6.5 9l3 3-3 3" stroke="#D97757" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.5 15h6" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
      <circle cx="16.5" cy="8.5" r="1.5" fill="#D97757" />
    </svg>
  );
}

/* ───────────────────── 14. Codex ───────────────────── */
export function CodexIcon({ size = 26, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="2.5" y="3.5" width="19" height="17" rx="4" fill="#081014" stroke="#10A37F" strokeWidth="1.6" />
      <path
        d="M7.5 9l-3 3 3 3m9-6l3 3-3 3m-5 4l2.5-8"
        stroke="#38BDF8"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Universal Brand Logo resolver
 */
export function ToolBrandLogo({
  name,
  size = 28,
  className = "",
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const normalized = name.toLowerCase().trim();

  // Custom User Tools with Original High-Res Logos
  if (normalized.includes("deepseek")) {
    return (
      <Image
        src="/images/tools/deepseek.png"
        alt="DeepSeek"
        width={size + 8}
        height={size + 8}
        className={`h-full w-full rounded-xl object-contain shadow-md transition-transform duration-300 group-hover:scale-105 ${className}`}
      />
    );
  }
  if (normalized === "claude code" || normalized.includes("claude code")) {
    return (
      <div className="relative flex h-full w-full items-center justify-center">
        <Image
          src="/images/tools/claude.png"
          alt="Claude Code"
          width={size + 8}
          height={size + 8}
          className={`h-full w-full rounded-xl object-contain shadow-md transition-transform duration-300 group-hover:scale-105 ${className}`}
        />
        <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded bg-[#08090e] border border-yellow/60 text-[9px] font-mono font-bold text-yellow shadow-md">
          &gt;_
        </span>
      </div>
    );
  }
  if (normalized.includes("claude")) {
    return (
      <Image
        src="/images/tools/claude.png"
        alt="Claude"
        width={size + 8}
        height={size + 8}
        className={`h-full w-full rounded-xl object-contain shadow-md transition-transform duration-300 group-hover:scale-105 ${className}`}
      />
    );
  }
  if (normalized.includes("chatgpt")) {
    return (
      <div className="flex h-full w-full items-center justify-center rounded-xl bg-white p-1.5 shadow-md transition-transform duration-300 group-hover:scale-105">
        <Image
          src="/images/tools/chatgpt.png"
          alt="ChatGPT"
          width={size + 8}
          height={size + 8}
          className={`h-full w-full object-contain ${className}`}
        />
      </div>
    );
  }
  if (normalized.includes("codex")) return <CodexIcon size={size} className={className} />;
  if (normalized.includes("kimi")) return <KimiAIIcon size={size} className={className} />;
  if (normalized.includes("meta")) return <MetaAIIcon size={size} className={className} />;
  if (normalized.includes("antigravity")) return <AntigravityIcon size={size} className={className} />;
  if (normalized === "grok bot" || normalized.includes("grok bot"))
    return <GrokBotIcon size={size} className={className} />;
  if (normalized.includes("grok")) return <GrokIcon size={size} className={className} />;
  if (normalized.includes("ai studio") || normalized.includes("studio"))
    return <GoogleAIStudioIcon size={size} className={className} />;
  if (normalized.includes("canva")) return <CanvaIcon size={size} className={className} />;
  if (normalized.includes("minimax")) return <MiniMaxIcon size={size} className={className} />;
  if (normalized.includes("perplexity")) return <PerplexityIcon size={size} className={className} />;

  // General fallbacks
  const slug = normalized.replace(/\s+/g, "").replace(/[^a-z0-9]/g, "");
  return (
    <Image
      src={`https://cdn.simpleicons.org/${slug}/white`}
      alt={`${name} logo`}
      width={size}
      height={size}
      unoptimized
      className={`inline-block object-contain opacity-90 transition-opacity group-hover:opacity-100 ${className}`}
      onError={(e) => {
        (e.target as HTMLElement).style.display = "none";
      }}
    />
  );
}
