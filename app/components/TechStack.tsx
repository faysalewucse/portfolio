import type { CSSProperties, ReactNode } from "react";
import type { IconType } from "react-icons";
import { FaApple, FaJava, FaRegCreditCard } from "react-icons/fa";
import {
  SiAndroid,
  SiAntdesign,
  SiBitbucket,
  SiDart,
  SiExpress,
  SiFirebase,
  SiFlutter,
  SiGithubactions,
  SiGoogleplay,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiUbuntu,
  SiVite,
} from "react-icons/si";
import { LegendDot, Pill, Section, SectionHeading } from "./ui";

const NODE_ICON: Record<string, IconType> = {
  java: FaJava,
  js: SiJavascript,
  dart: SiDart,
  flutter: SiFlutter,
  react: SiReact,
  vite: SiVite,
  next: SiNextdotjs,
  node: SiNodedotjs,
  express: SiExpress,
  firebase: SiFirebase,
  pg: SiPostgresql,
  mongo: SiMongodb,
  ubuntu: SiUbuntu,
};

type Group = "root" | "mobile" | "web" | "backend" | "data" | "infra";
type Node = { id: string; label: string; x: number; y: number; group: Group };
type Pt = { x: number; y: number };

const NODES: Node[] = [
  { id: "java", label: "Java", x: 220, y: 120, group: "root" },
  { id: "js", label: "JavaScript", x: 1040, y: 120, group: "root" },

  { id: "dart", label: "Dart", x: 220, y: 300, group: "mobile" },
  { id: "flutter", label: "Flutter", x: 220, y: 470, group: "mobile" },

  { id: "react", label: "React", x: 810, y: 280, group: "web" },
  { id: "vite", label: "Vite", x: 810, y: 410, group: "web" },
  { id: "next", label: "Next.js", x: 810, y: 540, group: "web" },

  { id: "node", label: "Node.js", x: 1230, y: 280, group: "backend" },
  { id: "express", label: "Express", x: 1230, y: 440, group: "backend" },

  { id: "firebase", label: "Firebase", x: 380, y: 650, group: "data" },
  { id: "pg", label: "PostgreSQL", x: 620, y: 670, group: "data" },
  { id: "mongo", label: "MongoDB", x: 860, y: 670, group: "data" },
  { id: "ubuntu", label: "Ubuntu · VPS", x: 1080, y: 660, group: "infra" },
];

const NODE_MAP = new Map(NODES.map((n) => [n.id, n]));

type Edge = {
  a: string;
  b: string;
  curve?: { dx?: number; dy?: number };
  animated?: { dur: string; delay: string };
};

const EDGES: Edge[] = [
  { a: "java", b: "dart", animated: { dur: "5s", delay: "0s" } },
  { a: "dart", b: "flutter", animated: { dur: "4.5s", delay: "1s" } },
  { a: "js", b: "react", curve: { dx: -100, dy: 60 }, animated: { dur: "6s", delay: "0.3s" } },
  { a: "react", b: "vite", animated: { dur: "3.5s", delay: "1.4s" } },
  { a: "vite", b: "next", animated: { dur: "3.5s", delay: "2s" } },
  { a: "js", b: "node", curve: { dx: 80, dy: 40 }, animated: { dur: "6s", delay: "0.6s" } },
  { a: "node", b: "express", animated: { dur: "4s", delay: "1.6s" } },

  { a: "flutter", b: "firebase", curve: { dx: 40, dy: 40 } },
  { a: "flutter", b: "express", curve: { dx: 220, dy: -140 } },
  { a: "next", b: "express", curve: { dx: 100, dy: -40 } },
  { a: "express", b: "pg", curve: { dx: 140, dy: 60 } },
  { a: "express", b: "mongo", curve: { dx: 60, dy: 40 } },
  { a: "express", b: "ubuntu", curve: { dx: -20, dy: 40 } },
  { a: "next", b: "ubuntu", curve: { dx: 40, dy: 60 } },
];

function nodeById(id: string): Node {
  const n = NODE_MAP.get(id);
  if (!n) throw new Error(`unknown node: ${id}`);
  return n;
}

function pathD(A: Pt, B: Pt, curve?: { dx?: number; dy?: number }): string {
  if (!curve) return `M ${A.x} ${A.y} L ${B.x} ${B.y}`;
  const mx = (A.x + B.x) / 2 + (curve.dx ?? 0);
  const my = (A.y + B.y) / 2 + (curve.dy ?? 0);
  return `M ${A.x} ${A.y} Q ${mx} ${my} ${B.x} ${B.y}`;
}

const DEPLOY_TARGETS: Array<{ label: string; icon: IconType }> = [
  { label: "Google Play Store", icon: SiGoogleplay },
  { label: "Apple App Store", icon: FaApple },
  { label: "In-app Subscriptions", icon: FaRegCreditCard },
  { label: "VPS (Ubuntu) + domain setup", icon: SiUbuntu },
];

const PILL_ICONS: Record<string, IconType> = {
  "RTK Query": SiRedux,
  "Tailwind CSS": SiTailwindcss,
  "Ant Design": SiAntdesign,
  "GitHub Actions": SiGithubactions,
  "Bitbucket Pipeline": SiBitbucket,
  "Java (Android)": SiAndroid,
};

export function TechStack() {
  return (
    <Section id="stack" n="03" label="Tech Stack">
      <div className="scroll-reveal mb-16 flex items-end justify-between gap-8 flex-wrap">
        <div className="max-w-2xl">
          <SectionHeading>Two roots, one tree.</SectionHeading>
          <p className="mt-6 text-muted">
            I started in <span className="text-foreground">Java</span> building
            native Android apps, then picked up{" "}
            <span className="text-foreground">JavaScript</span> for the web.
            Every tool below branches out of one of those two roots.
          </p>
        </div>

        <div className="flex flex-wrap gap-6 font-mono text-[11px] uppercase tracking-widest text-muted">
          <LegendDot>Root</LegendDot>
          <LegendDot>Mobile</LegendDot>
          <LegendDot>Web</LegendDot>
          <LegendDot>Backend</LegendDot>
          <LegendDot>Data · Infra</LegendDot>
        </div>
      </div>

      <div className="scroll-reveal relative w-full overflow-x-auto rounded-sm border border-border bg-surface/30">
        <svg
          viewBox="0 0 1400 740"
          xmlns="http://www.w3.org/2000/svg"
          className="block h-auto w-full min-w-[1100px] md:min-w-0"
          aria-label="Tech stack graph rooted in Java and JavaScript"
        >
          {EDGES.map((e, i) => {
            const A = nodeById(e.a);
            const B = nodeById(e.b);
            return (
              <path
                key={`eb-${i}`}
                d={pathD(A, B, e.curve)}
                fill="none"
                stroke="var(--trace-base-stroke)"
                strokeWidth={1}
              />
            );
          })}

          {EDGES.map((e, i) => {
            if (!e.animated) return null;
            const A = nodeById(e.a);
            const B = nodeById(e.b);
            return (
              <path
                key={`ef-${i}`}
                className="trace-flow"
                d={pathD(A, B, e.curve)}
                pathLength={1000}
                style={{ "--dur": e.animated.dur, "--delay": e.animated.delay } as CSSProperties}
              />
            );
          })}

          {NODES.map((n) => {
            const isRoot = n.group === "root";
            const Icon = NODE_ICON[n.id];
            const r = isRoot ? 26 : 20;
            const iconSize = isRoot ? 30 : 24;
            return (
              <g key={n.id}>
                {isRoot && (
                  <circle
                    cx={n.x}
                    cy={n.y}
                    r={r + 12}
                    fill="none"
                    stroke="var(--accent-soft)"
                    strokeWidth={0.75}
                  />
                )}
                <circle
                  cx={n.x}
                  cy={n.y}
                  r={r}
                  fill="var(--bg)"
                  stroke={isRoot ? "var(--accent)" : "var(--node-stroke-strong)"}
                  strokeWidth={isRoot ? 1.5 : 1.25}
                />
                {Icon && (
                  <foreignObject
                    x={n.x - iconSize / 2}
                    y={n.y - iconSize / 2}
                    width={iconSize}
                    height={iconSize}
                  >
                    <div
                      style={{
                        width: iconSize,
                        height: iconSize,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: isRoot ? "var(--accent)" : "var(--text)",
                      }}
                    >
                      <Icon size={iconSize - 4} />
                    </div>
                  </foreignObject>
                )}
                <text
                  x={n.x}
                  y={n.y + r + 22}
                  textAnchor="middle"
                  fill="var(--text)"
                  fontFamily="var(--font-geist-mono), ui-monospace, monospace"
                  fontSize={isRoot ? 17 : 14}
                  fontWeight={isRoot ? 500 : 400}
                  letterSpacing={0.6}
                >
                  {n.label}
                </text>
                {isRoot && (
                  <text
                    x={n.x}
                    y={n.y + r + 40}
                    textAnchor="middle"
                    fill="var(--muted)"
                    fontFamily="var(--font-geist-mono), ui-monospace, monospace"
                    fontSize={10}
                    letterSpacing={2}
                  >
                    [ ROOT ]
                  </text>
                )}
              </g>
            );
          })}
        </svg>
      </div>

      <div className="scroll-reveal mt-14 grid grid-cols-1 gap-10 border-t border-border pt-14 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <MetaLabel>Ships to</MetaLabel>
          <ul className="mt-5 space-y-3 font-mono text-base text-foreground">
            {DEPLOY_TARGETS.map((t) => {
              const Icon = t.icon;
              return (
                <li key={t.label} className="flex items-center gap-3">
                  <Icon
                    size={18}
                    className="shrink-0 text-accent"
                    aria-hidden
                  />
                  {t.label}
                </li>
              );
            })}
          </ul>
        </div>

        <StatBlock k="Mobile" v="Flutter / Dart — migrated from native Java" />
        <StatBlock k="Web" v="React → Vite → Next.js" />
        <StatBlock k="Backend" v="Node.js + Express · Postgres · MongoDB · Firebase · MVC" />
      </div>

      <div className="scroll-reveal mt-14 grid grid-cols-1 gap-10 border-t border-border pt-14 sm:grid-cols-2 md:grid-cols-4">
        <PillGroup k="State" items={["GetX", "Bloc", "Zustand", "RTK Query"]} />
        <PillGroup k="UI" items={["Tailwind CSS", "Shadcn", "Ant Design"]} />
        <PillGroup k="CI / CD" items={["GitHub Actions", "Bitbucket Pipeline"]} />
        <PillGroup k="Native" items={["Java (Android)", "OOP"]} />
      </div>
    </Section>
  );
}

function MetaLabel({ children }: { children: ReactNode }) {
  return (
    <div className="font-mono text-sm uppercase tracking-widest text-muted">
      {children}
    </div>
  );
}

function StatBlock({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <MetaLabel>{k}</MetaLabel>
      <p className="mt-5 text-base leading-relaxed text-foreground sm:text-lg">
        {v}
      </p>
    </div>
  );
}

function PillGroup({ k, items }: { k: string; items: string[] }) {
  return (
    <div>
      <MetaLabel>{k}</MetaLabel>
      <div className="mt-5 flex flex-wrap gap-2">
        {items.map((item) => {
          const Icon = PILL_ICONS[item];
          return (
            <span
              key={item}
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-foreground sm:text-sm"
            >
              {Icon && (
                <Icon
                  size={14}
                  className="shrink-0 text-accent"
                  aria-hidden
                />
              )}
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}
