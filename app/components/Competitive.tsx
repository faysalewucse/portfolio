import type { ComponentType, SVGProps } from "react";
import { SiCodeforces, SiHackerrank, SiLeetcode } from "react-icons/si";
import { Section, SectionHeading } from "./ui";

type Platform = {
  id: string;
  name: string;
  count: string;
  countLabel: string;
  href: string;
  handle: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

function BeecrowdIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 1.5 1.5 7.5v9L12 22.5l10.5-6v-9L12 1.5Zm0 2.31 8.49 4.85L12 13.51 3.51 8.66 12 3.81ZM3 10.21l8.25 4.71v6.7L3 16.85v-6.64Zm18 0v6.64l-8.25 4.77v-6.7L21 10.21Z" />
      <path d="m9.6 9.4 4.8 2.75v3.55l-4.8-2.75V9.4Z" />
    </svg>
  );
}

const PLATFORMS: Platform[] = [
  {
    id: "beecrowd",
    name: "BeeCrowd",
    count: "140",
    countLabel: "problems",
    href: "https://judge.beecrowd.com/en/profile/310687",
    handle: "/310687",
    Icon: BeecrowdIcon,
  },
  {
    id: "codeforces",
    name: "Codeforces",
    count: "70+",
    countLabel: "problems",
    href: "https://codeforces.com/profile/faysalewucse",
    handle: "/faysalewucse",
    Icon: SiCodeforces,
  },
  {
    id: "leetcode",
    name: "LeetCode",
    count: "40+",
    countLabel: "problems",
    href: "https://leetcode.com/Faysal_Ahmad/",
    handle: "/Faysal_Ahmad",
    Icon: SiLeetcode,
  },
  {
    id: "hackerrank",
    name: "HackerRank",
    count: "Active",
    countLabel: "profile",
    href: "https://www.hackerrank.com/profile/faysal_ewucse",
    handle: "/faysal_ewucse",
    Icon: SiHackerrank,
  },
];

export function Competitive() {
  return (
    <Section id="competitive" n="05" label="Competitive Programming">
      <div className="mb-16 flex items-end justify-between gap-8 flex-wrap">
        <SectionHeading>Algorithms, daily.</SectionHeading>
        <span className="font-mono text-xs uppercase tracking-widest text-muted">
          300+ problems · 4 judges
        </span>
      </div>

      <p className="mb-12 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
        Solving competitive problems keeps the algorithmic muscle warm. Active
        across four online judges with 300+ problems shipped to date.
      </p>

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {PLATFORMS.map((p) => (
          <li key={p.id} className="scroll-reveal">
            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex h-full flex-col gap-5 overflow-hidden border border-border bg-surface/40 p-6 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-border-strong"
            >
              <div className="flex items-start justify-between gap-4">
                <p.Icon className="h-9 w-9 text-foreground transition-colors group-hover:text-accent" />
                <span className="font-mono text-[11px] uppercase tracking-widest text-muted transition-colors group-hover:text-accent">
                  Visit ↗
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-mono text-3xl font-medium leading-none tracking-tight text-foreground sm:text-4xl">
                  {p.count}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-widest text-muted">
                  {p.countLabel}
                </span>
              </div>

              <div className="mt-auto flex flex-col gap-1 border-t border-border pt-4">
                <span className="font-mono text-sm text-foreground">
                  {p.name}
                </span>
                <span className="truncate font-mono text-[11px] uppercase tracking-widest text-muted">
                  {p.handle}
                </span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
