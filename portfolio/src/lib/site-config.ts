/**
 * ─────────────────────────────────────────────────────────────
 *  SITE CONFIG — single source of truth for links & content.
 *  Replace every value marked `TODO` with the real details.
 * ─────────────────────────────────────────────────────────────
 */

export const links = {
  // Profile and project URLs
  github: "https://github.com/Parvez-Rangrezz77",
  linkedin: "https://www.linkedin.com/in/parvez-rangrezz-749291376",
  jarvisRepo: "https://github.com/Parvez-Rangrezz77/jarvis",
  email: "parvez.rangrezz77@gmail.com",
  phone: "6376352309",
  location: "Bhilwara, Rajasthan, India",
  resume: "/Parvez_Rangrezz_Resume.pdf",
} as const;

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "What I Build", href: "#build" },
  { label: "Tech Stack", href: "#stack" },
  { label: "Tools", href: "#tools" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;

export const metrics = [
  {
    value: 20,
    suffix: "+",
    label: "AI & Development Tools",
    context: "Workflow Ecosystem",
    format: false,
  },
  {
    value: 6316,
    suffix: "+",
    label: "Lines of Code",
    context: "JARVIS AI Assistant",
    format: true,
  },
  {
    value: 2028,
    suffix: "",
    label: "Target Graduation",
    context: "Software Engineering Foundation",
    format: false,
  },
] as const;

/**
 * Repositories shown in "Build in Public".
 * `stars` / `forks` are placeholders — set real numbers or leave `null`
 * to show an em-dash.
 */
export const repos = [
  {
    name: "jarvis-ai-assistant",
    description:
      "Desktop personal AI assistant — voice processing, task automation and OS-level workflow orchestration.",
    language: "Python",
    languageColor: "#3572A5",
    stars: null as number | null,
    forks: null as number | null,
    url: links.jarvisRepo,
    featured: true,
    commit: "feat(core): add intent router + tool registry",
  },
  {
    name: "ai-workflow-automation",
    description:
      "Python-based agentic workflows and automated scripting pipelines for daily developer tasks.",
    language: "Python",
    languageColor: "#3572A5",
    stars: null as number | null,
    forks: null as number | null,
    url: links.github,
    featured: false,
    commit: "feat(pipeline): add async task scheduler",
  },
  {
    name: "automation-scripts",
    description:
      "Collection of Python utilities that remove repetitive manual work from daily workflows.",
    language: "Python",
    languageColor: "#3572A5",
    stars: null as number | null,
    forks: null as number | null,
    url: links.github,
    featured: false,
    commit: "chore: refactor file-watcher pipeline",
  },
] as const;

/**
 * Certifications — verified credentials & professional achievements.
 */
export type Certification = {
  name: string;
  issuer: string;
  year: string;
  type?: string;
  recipient?: string;
  credentialId?: string;
  authority?: string;
  organization?: string;
  description?: string;
  verifyUrl?: string;
  skills?: string[];
  format?: string;
};

export const certifications: Certification[] = [
  {
    name: "Claude Code 101",
    issuer: "Claude Academy",
    type: "Verified Badge & Certification",
    year: "Completed",
    format: "Official Certification",
    recipient: "Parvez Rangrezz",
    credentialId: "30ea0ca3a7f78370caa709ff67e7d16e",
    verifyUrl: "https://academy.claude.com/verify/30ea0ca3a7f78370caa709ff67e7d16e",
    organization: "Anthropic · Claude Academy",
    description:
      "Demonstrated proficiency in agentic coding workflows, autonomous CLI task execution, codebase navigation, and AI pair-programming with Claude Code.",
    skills: [
      "Claude Code CLI",
      "Agentic Coding",
      "AI-Assisted Engineering",
      "Context & Prompt Optimization",
      "Terminal Automation",
    ],
  },
  {
    name: "Workshop on Generative AI (GEN-AI)",
    issuer: "Robotwallah",
    type: "Certificate of Participation",
    year: "Sept 2025",
    format: "Workshop",
    recipient: "Parvez Rangrezz",
    authority: "Mr. Vikas Singh · Founder & CEO, Robotwallah",
    organization: "Bharat Genius Search Pvt. Ltd.",
    description:
      "Proudly presented for successfully participating in the dedicated hands-on Generative AI (GEN-AI) workshop staged on 27th September 2025.",
    skills: [
      "Generative AI & LLMs",
      "Prompt Engineering",
      "AI Workflows & Systems",
      "Applied Automation",
    ],
  },
  {
    name: "3-Days Employability Enhancement Workshop",
    issuer: "MyAnatomy",
    type: "Certificate of Appreciation",
    year: "Completed",
    format: "In-Person",
    recipient: "Parvez Rangrezz",
    organization: "MyAnatomy Training & Career Development",
    description:
      "Awarded for attending in person and showing active cooperation, participation and learning throughout the intensive 3-days workshop covering Gemini AI, cybersecurity, and code optimization.",
    skills: [
      "Full Stack Development with Gemini AI",
      "Cybersecurity & Code Security",
      "Industry Code Optimization",
      "Tech Interview Strategies",
    ],
  },
  {
    name: "Working with Computers and Devices",
    issuer: "LinkedIn Learning",
    type: "Certificate of Completion",
    year: "Completed",
    recipient: "Parvej Rangrezz S/O Mubarik Hussain",
    credentialId: "AQmhjKlsa qsw3EsdeXdsvbghnjhF",
    verifyUrl: "https://www.linkedin.com/learning/certificates/",
    authority: "Dan Brodsky · Head of Content Strategy, Learning",
    organization: "LinkedIn Learning, 1000 W Maude Ave, Sunnyvale, CA 94085",
    description:
      "By continuing to learn, you have expanded your perspective, sharpened your skills, and made yourself even more in demand.",
    skills: [
      "Computer Fundamentals",
      "Operating Systems",
      "Hardware & Peripherals",
      "Device Troubleshooting",
      "Digital Literacy",
    ],
  },
];

/** Tech stack — grouped for the "Tech Stack" section. Edit freely. */
export const techStack = [
  {
    group: "Programming",
    note: "Core programming",
    items: ["Python", "Java", "SQL", "C", "HTML / CSS", "Data Structures"],
  },
  {
    group: "AI & Intelligence",
    note: "Applied AI systems",
    items: [
      "Generative AI",
      "LLMs",
      "Prompt Engineering",
      "AI Application Development",
      "AI Workflows",
    ],
  },
  {
    group: "Development",
    note: "Backend & APIs",
    items: ["FastAPI", "REST APIs", "Git", "GitHub", "VS Code"],
  },
  {
    group: "Automation & Tools",
    note: "Daily workflow",
    items: [
      "Python Scripting",
      "OS Automation",
      "API Integration",
      "Git",
      "GitHub",
      "AI Tools",
    ],
  },
  {
    group: "AI Systems",
    note: "Autonomous & agentic architecture",
    items: ["AI Agents", "Agent Workflows", "Function Calling", "Multimodal AI"],
  },
] as const;

/** Experience / education timeline. */
export const experience = [
  {
    role: "AI Systems Developer",
    org: "Autonomous Agent & AI Labs",
    type: "Applied GenAI & Automation",
    period: "2024 — Present",
    current: true,
    points: [
      "Architected autonomous agentic workflows and local LLM pipeline integrations.",
      "Designed multi-modal voice processing, reasoning synthesis, and real-time response engines.",
      "Built custom automation tooling for desktop OS control and developer productivity.",
    ],
  },
  {
    role: "Lead Developer",
    org: "JARVIS AI Assistant",
    type: "Personal R&D",
    period: "2024 — Present",
    current: true,
    points: [
      "Engineered a 6,316+ line Python desktop assistant from scratch with modular architecture.",
      "Built modules for voice recognition, AI responses, automation and OS control.",
      "Implemented intelligent command dispatching, hotkey triggers, and conversational memory.",
    ],
  },
  {
    role: "Bachelor of Computer Applications",
    org: "B.C.A. Program",
    type: "Education",
    period: "Expected 2028",
    current: false,
    points: [
      "Foundations in programming, data structures, DBMS and software engineering.",
      "Applying theoretical computer science foundations directly to real-world AI software architecture.",
    ],
  },
] as const;
