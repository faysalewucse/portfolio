import type { CSSProperties, ReactNode } from "react";
import { LegendDot, Pill, Section, SectionHeading } from "./ui";

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

const DEPLOY_TARGETS = [
  "Google Play Store",
  "Apple App Store",
  "In-app Subscriptions",
  "VPS (Ubuntu) + domain setup",
];

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

      <div className="scroll-reveal relative w-full overflow-hidden rounded-sm border border-border bg-surface/30">
        <svg
          viewBox="0 0 1400 740"
          xmlns="http://www.w3.org/2000/svg"
          className="block h-auto w-full"
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
                stroke="rgba(255,255,255,0.08)"
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
            return (
              <g key={n.id}>
                {isRoot && (
                  <circle cx={n.x} cy={n.y} r={20} fill="none" stroke="var(--accent-soft)" strokeWidth={0.75} />
                )}
                <circle
                  cx={n.x}
                  cy={n.y}
                  r={isRoot ? 11 : 8}
                  fill="var(--bg)"
                  stroke={isRoot ? "var(--accent)" : "rgba(255,255,255,0.9)"}
                  strokeWidth={isRoot ? 1.5 : 1.25}
                />
                <circle cx={n.x} cy={n.y} r={isRoot ? 3.5 : 2.75} fill="var(--accent)" />
                <text
                  x={n.x + (isRoot ? 20 : 16)}
                  y={n.y + 5}
                  fill={isRoot ? "var(--text)" : "rgba(232,232,232,0.9)"}
                  fontFamily="var(--font-geist-mono), ui-monospace, monospace"
                  fontSize={isRoot ? 18 : 15}
                  letterSpacing={0.8}
                >
                  {n.label}
                </text>
                {isRoot && (
                  <text
                    x={n.x + 20}
                    y={n.y + 24}
                    fill="rgba(136,136,136,0.9)"
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

      <div className="scroll-reveal mt-10 grid grid-cols-1 gap-6 border-t border-border pt-10 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <MetaLabel>Ships to</MetaLabel>
          <ul className="mt-3 space-y-1 font-mono text-sm text-foreground">
            {DEPLOY_TARGETS.map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-accent" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <StatBlock k="Mobile" v="Flutter / Dart — migrated from native Java" />
        <StatBlock k="Web" v="React → Vite → Next.js" />
        <StatBlock k="Backend" v="Node.js + Express · Postgres · MongoDB · Firebase · MVC" />
      </div>

      <div className="scroll-reveal mt-10 grid grid-cols-2 gap-6 border-t border-border pt-10 md:grid-cols-4">
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
    <div className="font-mono text-[11px] uppercase tracking-widest text-muted">
      {children}
    </div>
  );
}

function StatBlock({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <MetaLabel>{k}</MetaLabel>
      <p className="mt-3 text-sm leading-relaxed text-foreground">{v}</p>
    </div>
  );
}

function PillGroup({ k, items }: { k: string; items: string[] }) {
  return (
    <div>
      <MetaLabel>{k}</MetaLabel>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-border px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-foreground"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
