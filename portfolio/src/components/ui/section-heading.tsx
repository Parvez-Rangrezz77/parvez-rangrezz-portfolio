import type { ReactNode } from "react";
import { Reveal } from "./reveal";

type Props = {
  index: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
};

export function SectionHeading({ index, eyebrow, title, description, align = "left" }: Props) {
  const center = align === "center";
  return (
    <Reveal className={`mb-12 md:mb-16 ${center ? "mx-auto max-w-3xl text-center" : "max-w-4xl"}`}>
      {/* Editorial technical label + tape marker */}
      <div
        className={`mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-muted ${
          center ? "justify-center" : ""
        }`}
      >
        <span className="flex items-center gap-1.5 font-bold text-yellow">
          <span className="inline-block h-1.5 w-1.5 bg-yellow" />
          [{index}]
        </span>
        <span className="h-px w-6 border-t border-dashed border-olive/60" />
        <span className="font-semibold text-ink/85">{eyebrow}</span>
      </div>

      {/* Bold, condensed, oversized, tightly spaced uppercase heading */}
      <h2 className="font-display text-4xl font-bold uppercase leading-[0.92] tracking-tight text-ink sm:text-5xl md:text-6xl lg:text-7xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 max-w-2xl text-pretty font-sans text-base leading-relaxed text-muted md:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  );
}
