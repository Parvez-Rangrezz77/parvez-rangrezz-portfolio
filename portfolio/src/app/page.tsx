import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Metrics } from "@/components/metrics";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Build } from "@/components/build";
import { TechStack } from "@/components/tech-stack";
import { ToolsUsed } from "@/components/tools-used";
import { Experience } from "@/components/experience";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { ScrollRobotCompanion } from "@/components/ui/scroll-robot-companion";

export default function Home() {
  return (
    <>
      <ScrollRobotCompanion />
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-obsidian"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <Metrics />
        <About />
        <Projects />
        <Build />
        <TechStack />
        <ToolsUsed />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
