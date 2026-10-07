import type { Metadata, Viewport } from "next";
import { Oswald, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Parvez Rangrezz — AI-Focused Software Developer",
  description:
    "Parvez Rangrezz builds intelligent applications with Python, Java, Generative AI and LLMs. Creator of the JARVIS AI Assistant and autonomous AI systems.",
  keywords: [
    "Parvez Rangrezz",
    "AI Developer",
    "Software Developer",
    "Generative AI",
    "LLM",
    "Python",
    "JARVIS AI Assistant",
  ],
  authors: [{ name: "Parvez Rangrezz" }],
  openGraph: {
    title: "Parvez Rangrezz — AI-Focused Software Developer",
    description:
      "Building intelligent applications by combining software development, AI, automation and modern engineering workflows.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B1110",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Parvez Rangrezz",
  jobTitle: "AI-Focused Software Developer",
  url: "https://parvez.dev",
  knowsAbout: [
    "Artificial Intelligence",
    "Large Language Models",
    "Generative AI",
    "Python",
    "Java",
    "Autonomous Agents",
    "Full-Stack Development",
  ],
  sameAs: [
    "https://github.com/parvezrangrezz",
    "https://www.linkedin.com/in/parvez-rangrezz",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${inter.variable} ${ibmPlexMono.variable} antialiased`}
    >
      <body className="noise min-h-screen bg-obsidian font-sans text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
