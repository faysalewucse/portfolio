import type { CSSProperties } from "react";
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
  SiGetx,
  SiGithubactions,
  SiGoogleplay,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRedux,
  SiShadcnui,
  SiTailwindcss,
  SiUbuntu,
  SiVite,
} from "react-icons/si";
import { LegendDot, Section, SectionHeading } from "./ui";

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
  {
    a: "js",
    b: "react",
    curve: { dx: -100, dy: 60 },
    animated: { dur: "6s", delay: "0.3s" },
  },
  { a: "react", b: "vite", animated: { dur: "3.5s", delay: "1.4s" } },
  { a: "vite", b: "next", animated: { dur: "3.5s", delay: "2s" } },
  {
    a: "js",
    b: "node",
    curve: { dx: 80, dy: 40 },
    animated: { dur: "6s", delay: "0.6s" },
  },
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

type Item = { label: string; icon?: IconType };

const SHIPS_TO: Item[] = [
  { label: "Google Play Store", icon: SiGoogleplay },
  { label: "Apple App Store", icon: FaApple },
  { label: "In-app Subscriptions", icon: FaRegCreditCard },
  { label: "VPS (Ubuntu) + domain", icon: SiUbuntu },
];

const MOBILE: Item[] = [
  { label: "Java (Android)", icon: SiAndroid },
  { label: "Dart", icon: SiDart },
  { label: "Flutter", icon: SiFlutter },
];

const WEB: Item[] = [
  { label: "React", icon: SiReact },
  { label: "Vite", icon: SiVite },
  { label: "Next.js", icon: SiNextdotjs },
];

const BACKEND: Item[] = [
  { label: "Node.js", icon: SiNodedotjs },
  { label: "Express", icon: SiExpress },
  { label: "PostgreSQL", icon: SiPostgresql },
  { label: "MongoDB", icon: SiMongodb },
  { label: "Firebase", icon: SiFirebase },
];

const STATE: Item[] = [
  { label: "GetX", icon: SiGetx },
  { label: "Bloc" },
  { label: "Zustand" },
  { label: "RTK Query", icon: SiRedux },
];

const UI: Item[] = [
  { label: "Tailwind CSS", icon: SiTailwindcss },
  { label: "Shadcn", icon: SiShadcnui },
  { label: "Ant Design", icon: SiAntdesign },
];

const CICD: Item[] = [
  { label: "GitHub Actions", icon: SiGithubactions },
  { label: "Bitbucket Pipeline", icon: SiBitbucket },
];

const NATIVE: Item[] = [
  { label: "Java (Android)", icon: SiAndroid },
  { label: "OOP" },
];

type Card = { k: string; tagline: string; items: Item[] };

const FLOW_CARDS: Card[] = [
  { k: "Ships to", tagline: "Where the code lands.", items: SHIPS_TO },
  { k: "Mobile", tagline: "Migrated from native Java.", items: MOBILE },
  { k: "Web", tagline: "React → Vite → Next.js.", items: WEB },
  { k: "Backend", tagline: "Node + Express, SQL & document.", items: BACKEND },
];

const TOOL_CARDS: Card[] = [
  { k: "State", tagline: "Patterns I reach for.", items: STATE },
  { k: "UI", tagline: "Component & utility layers.", items: UI },
  { k: "CI / CD", tagline: "Automated pipelines.", items: CICD },
  { k: "Native", tagline: "Where I started.", items: NATIVE },
];

function monogram(label: string) {
  const cleaned = label.replace(/[^a-zA-Z]/g, "");
  return cleaned.slice(0, 2).toUpperCase();
}

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
          className="block h-auto w-full min-w-275 md:min-w-0"
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
                style={
                  {
                    "--dur": e.animated.dur,
                    "--delay": e.animated.delay,
                  } as CSSProperties
                }
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
                  stroke={
                    isRoot ? "var(--accent)" : "var(--node-stroke-strong)"
                  }
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

      <div className="scroll-reveal mt-16 border-t border-border pt-14">
        <div className="mb-8 flex items-end justify-between gap-4 flex-wrap">
          <div className="font-mono text-[11px] uppercase tracking-widest text-muted">
            [ Stack flow ]
          </div>
          <div className="font-mono text-[11px] uppercase tracking-widest text-muted">
            {FLOW_CARDS.length} surfaces
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FLOW_CARDS.map((c) => (
            <StackCard key={c.k} card={c} />
          ))}
        </div>
      </div>

      <div className="scroll-reveal mt-12">
        <div className="mb-8 flex items-end justify-between gap-4 flex-wrap">
          <div className="font-mono text-[11px] uppercase tracking-widest text-muted">
            [ Toolbox ]
          </div>
          <div className="font-mono text-[11px] uppercase tracking-widest text-muted">
            {TOOL_CARDS.length} categories
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TOOL_CARDS.map((c) => (
            <StackCard key={c.k} card={c} />
          ))}
        </div>
      </div>
    </Section>
  );
}

function StackCard({ card }: { card: Card }) {
  return (
    <div className="group relative flex h-full flex-col gap-5 overflow-hidden border border-border bg-surface/40 p-6 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-border-strong">
      <div className="flex flex-col gap-2 border-b border-border pb-4">
        <div className="font-mono text-xs uppercase tracking-widest text-accent">
          {card.k}
        </div>
        <div className="font-mono text-[11px] uppercase tracking-widest text-muted">
          {card.tagline}
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {card.items.map((item) => (
          <Chip key={item.label} item={item} />
        ))}
      </div>
    </div>
  );
}

function Chip({ item }: { item: Item }) {
  const Icon = item.icon;
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 font-mono text-xs text-foreground transition-colors hover:border-border-strong">
      <span
        aria-hidden
        className="inline-flex h-4 w-4 shrink-0 items-center justify-center text-accent"
      >
        {Icon ? (
          <Icon size={14} />
        ) : (
          <span className="inline-flex h-3.5 w-3.5 items-center justify-center rounded-sm border border-border-strong text-[8px] font-medium leading-none tracking-tight text-accent">
            {monogram(item.label)}
          </span>
        )}
      </span>
      {item.label}
    </span>
  );
}
