import type { CSSProperties } from "react";
import { Pill, Section, SectionHeading } from "./ui";

type Project = {
  n: string;
  name: string;
  tag: string;
  year: string;
  hook: string;
  stack: string[];
  links: Array<{ label: string; href: string }>;
};

type Group = {
  id: string;
  company: string;
  subtitle: string;
  period: string;
  projects: Project[];
};

const GROUPS: Group[] = [
  {
    id: "nerddevs",
    company: "Nerddevs Limited",
    subtitle: "AI · consumer · internal",
    period: "Jan 2025 — Present",
    projects: [
      {
        n: "01",
        name: "AI Mate — GPT Chat",
        tag: "AI · Play Store",
        year: "2025",
        hook:
          "In-house AI chat product. Contributed to development, in-app purchase + review flows, and end-to-end Play Store release management.",
        stack: ["Flutter", "Dart", "In-App Purchase", "Play Store"],
        links: [
          {
            label: "Play Store ↗",
            href: "https://play.google.com/store/apps/details?id=com.aimate.app",
          },
        ],
      },
      {
        n: "02",
        name: "NerdCRM",
        tag: "Internal · Cross-Platform",
        year: "2025",
        hook:
          "Mobile companion for the NerdCRM platform. Android is a native Flutter client; iOS ships as a WebView wrapper for parity without the double build.",
        stack: ["Flutter", "WebView (iOS)", "Play Store", "App Store"],
        links: [
          {
            label: "Play Store ↗",
            href: "https://play.google.com/store/apps/details?id=com.nerddevs.nerdcrm",
          },
          {
            label: "App Store ↗",
            href: "https://apps.apple.com/au/app/nerdcrm/id6759237885",
          },
        ],
      },
      {
        n: "03",
        name: "Daily Habitz",
        tag: "Productivity · App Store",
        year: "2025",
        hook:
          "Habit tracker for the App Store. Clean UX, daily streak tracking, and responsive layouts tuned for iPhone and iPad.",
        stack: ["Flutter", "Dart", "App Store"],
        links: [
          {
            label: "App Store ↗",
            href: "https://apps.apple.com/us/app/dailyhabitz/id6751629717",
          },
        ],
      },
    ],
  },
  {
    id: "zaag",
    company: "Zaag Systems Ltd.",
    subtitle: "International · local · government",
    period: "Sept 2023 — Dec 2024",
    projects: [
      {
        n: "01",
        name: "TCB Dealer App",
        tag: "Government · Enterprise",
        year: "2024",
        hook:
          "Private Trading Corporation of Bangladesh dealer app — beneficiary management, QR-code-driven JSON intake, and product submission. Served 18,000+ customers in its first two months.",
        stack: ["Flutter", "Dart", "QR / JSON", "Gov. Delivery"],
        links: [{ label: "Case study", href: "#" }],
      },
      {
        n: "02",
        name: "Zenresto — Restaurant POS",
        tag: "POS · Bluetooth",
        year: "2024",
        hook:
          "Restaurant management platform with admin + user panels, full POS flow, and Bluetooth invoice printing. Owned the catering data layer — the most complex JSON binding in the system — and built reusable widgets across tablet + mobile.",
        stack: ["Flutter", "GetX", "Bluetooth POS", "Tablet + Mobile"],
        links: [{ label: "Case study", href: "#" }],
      },
      {
        n: "03",
        name: "The Kabab King",
        tag: "Food & Beverage",
        year: "2024",
        hook:
          "Mobile ordering and loyalty experience for a quick-service restaurant brand. [ brief placeholder — tell me the highlight you want lead-line'd ]",
        stack: ["Flutter", "GetX", "Firebase"],
        links: [{ label: "Case study", href: "#" }],
      },
      {
        n: "04",
        name: "Palooi — Ecommerce",
        tag: "Ecommerce · Play Store",
        year: "2023",
        hook:
          "Consumer ecommerce app with full authentication, OTP-verified profile updates, image upload, and a pixel-perfect UI built on component-first architecture.",
        stack: ["Flutter", "GetX", "Auth + OTP", "Firebase"],
        links: [{ label: "Play Store ↗", href: "#" }],
      },
    ],
  },
  {
    id: "personal",
    company: "Personal / Side",
    subtitle: "Self-shipped · Play Store",
    period: "Ongoing",
    projects: [
      {
        n: "01",
        name: "Ruqyah & Ayat",
        tag: "Full-Stack · App + Admin",
        year: "2023 – 24",
        hook:
          "Full-stack Islamic companion app. Flutter client plus an Express + MongoDB backend and a Vite-powered admin panel where the team manages content and app versions. Firebase push, offline mode, dark / light themes.",
        stack: ["Flutter", "GetX", "Vite (Admin)", "Express", "MongoDB", "Firebase"],
        links: [
          {
            label: "Play Store ↗",
            href: "https://play.google.com/store/apps/details?id=com.sunnahcurebd.rukiyah_and_ayat",
          },
        ],
      },
      {
        n: "02",
        name: "Prophetic Healing",
        tag: "Full-Stack · App + Web + Portal",
        year: "2024",
        hook:
          "Islamic healing & wellness product. Flutter mobile client plus a Next.js consumer website and an admin portal for managing content and users — end-to-end ownership across three surfaces.",
        stack: ["Flutter", "Next.js", "Express", "MongoDB"],
        links: [
          {
            label: "Play Store ↗",
            href: "https://play.google.com/store/apps/details?id=com.devskafela.prophetichealingbd",
          },
          {
            label: "Website ↗",
            href: "https://propheticheaLingbd.com",
          },
        ],
      },
      {
        n: "03",
        name: "Hanafi Fiqh",
        tag: "Full-Stack · App + Web",
        year: "2024",
        hook:
          "Reference app for Hanafi jurisprudence with a companion website at hanafifiqh.net. Structured, searchable content tuned for fast navigation — both surfaces built end-to-end.",
        stack: ["Flutter", "Next.js", "Firebase"],
        links: [
          {
            label: "Play Store ↗",
            href: "https://play.google.com/store/apps/details?id=com.hanafifiqh.app",
          },
          {
            label: "Website ↗",
            href: "https://hanafifiqh.net",
          },
        ],
      },
      {
        n: "04",
        name: "MediWhole",
        tag: "Full-Stack · App + Web + Pharmacy Portal",
        year: "2024",
        hook:
          "Healthcare product spanning a Flutter mobile app, a Next.js consumer website, and a separate portal for pharmacies to manage their data. Designed for daily, high-frequency use.",
        stack: ["Flutter", "Next.js", "Express", "MongoDB"],
        links: [
          {
            label: "Play Store ↗",
            href: "https://play.google.com/store/apps/details?id=com.devskafela.mediwhole",
          },
          {
            label: "Website ↗",
            href: "https://mediwholebd.com",
          },
        ],
      },
    ],
  },
];

const TOTAL = GROUPS.reduce((sum, g) => sum + g.projects.length, 0);

export function Projects() {
  return (
    <Section id="projects" n="04" label="Selected Work">
      <div className="mb-16 flex items-end justify-between gap-8 flex-wrap">
        <SectionHeading>Things I&apos;ve shipped.</SectionHeading>
        <span className="font-mono text-xs uppercase tracking-widest text-muted">
          {TOTAL} projects · {GROUPS.length} orgs
        </span>
      </div>

      <div className="flex flex-col gap-24">
        {GROUPS.map((g) => (
          <ProjectGroup key={g.id} group={g} />
        ))}
      </div>
    </Section>
  );
}

function ProjectGroup({ group }: { group: Group }) {
  return (
    <div>
      <div className="scroll-reveal mb-10 flex flex-wrap items-end justify-between gap-4 border-b border-border pb-6">
        <div>
          <h3 className="font-mono text-xl font-medium tracking-tight text-foreground sm:text-2xl">
            {group.company}
          </h3>
          <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-muted">
            {group.subtitle}
          </p>
        </div>
        <span className="font-mono text-[11px] uppercase tracking-widest text-muted">
          {group.period} · {group.projects.length} projects
        </span>
      </div>

      <ul className="flex flex-col gap-6">
        {group.projects.map((p) => (
          <li key={p.n} className="scroll-reveal">
            <ProjectCard project={p} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card-glow group relative overflow-hidden border border-border bg-surface/40 p-8 transition-colors hover:border-border-strong sm:p-10">
      <svg
        aria-hidden
        className="card-trace pointer-events-none absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <rect
          className="trace-flow"
          x="0.5"
          y="0.5"
          width="99"
          height="99"
          fill="none"
          pathLength={1000}
          vectorEffect="non-scaling-stroke"
          style={{ "--dur": "4s" } as CSSProperties}
        />
      </svg>

      <div className="relative flex flex-col gap-6">
        <div className="flex items-start justify-between gap-6">
          <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-widest text-muted">
            <span className="text-accent">{project.n}</span>
            <span className="h-px w-6 bg-border-strong" />
            <span>{project.tag}</span>
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-muted">
            {project.year}
          </span>
        </div>

        <h3 className="font-mono text-3xl font-medium leading-tight tracking-tight text-foreground sm:text-4xl">
          {project.name}
        </h3>

        <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {project.hook}
        </p>

        <div className="flex flex-wrap items-center gap-2 pt-2">
          {project.stack.map((tech) => (
            <Pill key={tech}>{tech}</Pill>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-4 font-mono text-xs uppercase tracking-widest">
          {project.links.map((l) => {
            const external = l.href.startsWith("http");
            return (
              <a
                key={l.label}
                href={l.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="group/link inline-flex items-center gap-2 text-muted transition-colors hover:text-accent"
              >
                <span className="h-px w-6 bg-border-strong transition-all group-hover/link:w-10 group-hover/link:bg-accent" />
                {l.label}
              </a>
            );
          })}
        </div>
      </div>
    </article>
  );
}
