import Image from "next/image";
import type { CSSProperties } from "react";
import { CaseStudyButton, type CaseStudyData } from "./CaseStudyButton";
import { Pill, Section, SectionHeading } from "./ui";

type Project = {
  n: string;
  name: string;
  tag: string;
  year: string;
  hook: string;
  stack: string[];
  links: Array<{ label: string; href: string }>;
  icon?: string;
  iconPad?: boolean;
  images?: { dark: string; light: string; alt: string };
  caseStudy?: CaseStudyData;
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
        hook: "In-house AI chat product. Contributed to development, in-app purchase + review flows, and end-to-end Play Store release management.",
        stack: ["Flutter", "Dart", "In-App Purchase", "Play Store"],
        icon: "/icons/ai-mate-app-icon.png",
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
        hook: "Mobile companion for the NerdCRM platform. Android is a native Flutter client; iOS ships as a WebView wrapper for parity without the double build.",
        stack: ["Flutter", "WebView (iOS)", "Play Store", "App Store"],
        icon: "/icons/nerd-crm-app-icon.png",
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
        hook: "Habit tracker for the App Store. Clean UX, daily streak tracking, and responsive layouts tuned for iPhone and iPad.",
        stack: ["Flutter", "Dart", "App Store"],
        icon: "/icons/daily-habitz-app-icon.png",
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
        hook: "Private Trading Corporation of Bangladesh dealer app — beneficiary management, QR-code-driven JSON intake, and product submission. Served 18,000+ customers in its first two months.",
        stack: ["Flutter", "Dart", "QR / JSON", "Gov. Delivery"],
        links: [],
      },
      {
        n: "02",
        name: "Zenresto — Restaurant POS",
        tag: "POS · Bluetooth",
        year: "2024",
        hook: "Restaurant management platform with admin + user panels, full POS flow, and Bluetooth invoice printing. Owned the catering data layer — the most complex JSON binding in the system — and built reusable widgets across tablet + mobile.",
        stack: ["Flutter", "GetX", "Bluetooth POS", "Tablet + Mobile"],
        links: [],
        caseStudy: {
          summary:
            "Restaurant management platform spanning admin and user panels with a full **POS** flow on tablet and mobile. Closed-source — not on any store — so the highlights below stand in for a public listing.",
          highlights: [
            "Owned the **Catering section** — the most complex piece of the system. Rendered orders from deeply nested JSON and serialized edits back as JSON, where the bind-on-edit path was the trickiest part.",
            "Shipped Bluetooth **POS** invoice printing end-to-end, including learning Flutter's Bluetooth/wireless device compatibility model from scratch.",
            "Built a library of reusable widgets shared across tablet and mobile layouts so feature work didn't re-fork the UI for each form factor.",
            "Implemented client-side invoice calculation with the full **POS** workflow.",
            "**GetX** state management throughout; also fixed a range of cross-cutting issues across the existing codebase.",
            "Currently extending the Admin panel to run fully on mobile so food-cart-sized shops can operate the system from a phone.",
          ],
        },
      },
      {
        n: "03",
        name: "The Kabab King",
        tag: "Food & Beverage",
        year: "2024",
        hook: "Mobile ordering and loyalty experience for a quick-service restaurant brand. [ brief placeholder — tell me the highlight you want lead-line'd ]",
        stack: ["Flutter", "GetX", "Firebase"],
        links: [],
      },
      {
        n: "04",
        name: "Palooi — Ecommerce",
        tag: "Ecommerce · Mobile",
        year: "2023",
        hook: "Consumer ecommerce app with full authentication, OTP-verified profile updates, image upload, and a pixel-perfect UI built on component-first architecture.",
        stack: ["Flutter", "GetX", "Auth + OTP", "Firebase"],
        links: [],
        caseStudy: {
          summary:
            "Consumer ecommerce mobile app. Not currently published to a public store, so the highlights below stand in for a listing.",
          highlights: [
            "Full user authentication and the complete consumer-facing journey — browse, account, checkout.",
            "Profile updates with OTP verification and image upload.",
            "**GetX** state management, with clear separation between data, view-models, and UI.",
            "Pixel-perfect UI implementation against the spec.",
            "Production-grade, component-based architecture with clean coding conventions throughout.",
          ],
        },
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
        hook: "Full-stack Islamic companion app. Flutter client plus an Express + MongoDB backend and a Vite-powered admin panel where the team manages content and app versions. Firebase push, offline mode, dark / light themes.",
        stack: [
          "Flutter",
          "GetX",
          "Vite (Admin)",
          "Express",
          "MongoDB",
          "Firebase",
        ],
        icon: "/icons/ruqyah-app-icon.png",
        links: [
          {
            label: "Play Store ↗",
            href: "https://play.google.com/store/apps/details?id=com.sunnahcurebd.rukiyah_and_ayat",
          },
        ],
        images: {
          dark: "/images/ruqyah-ayat.png",
          light: "/images/ruqyah-ayat.png",
          alt: "Ruqyah & Ayat product screenshot",
        },
      },
      {
        n: "02",
        name: "Prophetic Healing",
        tag: "Full-Stack · App + Web + Portal",
        year: "2024",
        hook: "Islamic healing & wellness product. Flutter mobile client plus a Next.js consumer website and an admin portal for managing content and users — end-to-end ownership across three surfaces.",
        stack: ["Flutter", "Next.js", "Express", "MongoDB"],
        icon: "/icons/prophetic-app-icon.png",
        iconPad: true,
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
        images: {
          dark: "/images/prophetic-healing.png",
          light: "/images/prophetic-healing.png",
          alt: "Prophetic Healing product screenshot",
        },
      },
      {
        n: "03",
        name: "Hanafi Fiqh",
        tag: "Full-Stack · App + Web",
        year: "2024",
        hook: "Reference app for Hanafi jurisprudence with a companion website at hanafifiqh.net. Structured, searchable content tuned for fast navigation — both surfaces built end-to-end.",
        stack: ["Flutter", "Next.js", "Firebase"],
        icon: "/icons/hf-app-icon.png",
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
        images: {
          dark: "/images/hf-dark.png",
          light: "/images/hf-light.png",
          alt: "Hanafi Fiqh website screenshot",
        },
      },
      {
        n: "04",
        name: "MediWhole",
        tag: "Full-Stack · App + Web + Pharmacy Portal",
        year: "2024",
        hook: "Healthcare product spanning a Flutter mobile app, a Next.js consumer website, and a separate portal for pharmacies to manage their data. Designed for daily, high-frequency use.",
        stack: ["Flutter", "Next.js", "Express", "MongoDB"],
        icon: "/icons/mediwhole-app-icon.png",
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
        images: {
          dark: "/images/mediwhole.png",
          light: "/images/mediwhole.png",
          alt: "MediWhole product screenshot",
        },
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
        {group.projects.map((p, i) => (
          <li key={p.n} className="scroll-reveal">
            <ProjectCard project={p} index={i} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const hasImage = Boolean(project.images);
  const imageRight = index % 2 === 0;
  return (
    <article className="card-glow group relative overflow-hidden border border-border bg-surface/40 p-8 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-border-strong sm:p-10">
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

      <div
        className={
          hasImage
            ? "relative grid gap-8 md:grid-cols-2 md:items-center md:gap-12"
            : "relative"
        }
      >
        <div
          className={`flex flex-col gap-6 ${
            hasImage && !imageRight ? "md:order-2" : ""
          }`}
        >
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

          <div className="flex items-center gap-4">
            {project.icon && (
              <Image
                src={project.icon}
                alt={`${project.name} app icon`}
                width={64}
                height={64}
                className={`h-14 w-14 shrink-0 rounded-[22%] border border-border bg-surface object-cover shadow-[0_4px_14px_rgba(0,0,0,0.25)] transition-transform duration-500 ease-out group-hover:-translate-y-0.5 sm:h-16 sm:w-16 ${
                  project.iconPad ? "p-2" : ""
                }`}
              />
            )}
            <h3 className="font-mono text-3xl font-medium leading-tight tracking-tight text-foreground sm:text-4xl">
              {project.name}
            </h3>
          </div>

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
            {project.caseStudy && (
              <CaseStudyButton
                data={project.caseStudy}
                projectName={project.name}
                projectTag={project.tag}
              />
            )}
          </div>
        </div>

        {project.images && (
          <ProjectImage
            images={project.images}
            className={!imageRight ? "md:order-1" : ""}
          />
        )}
      </div>
    </article>
  );
}

function ProjectImage({
  images,
  className = "",
}: {
  images: NonNullable<Project["images"]>;
  className?: string;
}) {
  return (
    <div
      className={`relative -mx-8 overflow-hidden bg-surface shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-transform duration-700 ease-out group-hover:-translate-y-1 sm:-mx-10 md:mx-0 md:rounded-md md:border md:border-border-strong ${className}`}
      style={{ aspectRatio: "1720 / 890" }}
    >
      <Image
        src={images.dark}
        alt={images.alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
        className="shot-on-light object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />
      <Image
        src={images.light}
        alt={images.alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
        className="shot-on-dark object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
    </div>
  );
}
