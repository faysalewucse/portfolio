import type { ReactNode } from "react";
import { NerddevsLink, Section, SectionHeading, ZaagLink } from "./ui";

type Entry = {
  period: string;
  role: string;
  org: ReactNode;
  notes: string[];
};

const ENTRIES: Entry[] = [
  {
    period: "Jan 2025 — Present",
    role: "Mobile Application Developer",
    org: <NerddevsLink />,
    notes: [
      "Contributing to in-house AI products on the mobile side.",
      "Play Store & App Store deployments, in-app purchases, in-app review flows.",
    ],
  },
  {
    period: "Sept 2023 — Dec 2024",
    role: "Jr. Mobile Application Developer",
    org: <ZaagLink />,
    notes: [
      "Flutter apps across international, local, and Government projects.",
      "Shipped: TCB Dealer (Gov), Zenresto POS, Ruqyah & Ayat, Palooi, Period Pulse.",
    ],
  },
  {
    period: "Aug 2023 — Apr 2024",
    role: "Full-Stack Developer",
    org: (
      <>
        ArtifConnect · concurrent with <ZaagLink>Zaag</ZaagLink>
      </>
    ),
    notes: [
      "Built full-stack web features across frontend and backend.",
      "Worked in parallel with the Zaag mobile role — evenings / weekends.",
    ],
  },
  {
    period: "2019 — Jul 2023",
    role: "BSc in Computer Science & Engineering",
    org: "East West University",
    notes: ["CGPA 3.10."],
  },
  {
    period: "Jan — Oct 2018",
    role: "Math Teacher",
    org: "Al Hera Ideal School",
    notes: ["Bridging year between HSC and university."],
  },
  {
    period: "2017",
    role: "Higher Secondary Certificate (HSC)",
    org: "Dr. Mahabubur Rahman Mollah College",
    notes: ["GPA 5.00."],
  },
  {
    period: "2015",
    role: "Secondary School Certificate (SSC)",
    org: "Shamsul Haque Khan School and College",
    notes: ["GPA 5.00."],
  },
];

export function Experience() {
  return (
    <Section id="experience" n="06" label="Experience">
      <div className="mb-16 flex items-end justify-between gap-8 flex-wrap">
        <SectionHeading>A line you can trace.</SectionHeading>
        <span className="font-mono text-xs uppercase tracking-widest text-muted">
          {ENTRIES.length} stops
        </span>
      </div>

      <div className="relative">
        <svg
          aria-hidden
          className="pointer-events-none absolute left-4 top-0 h-full w-8 md:left-1/2 md:-translate-x-1/2"
          viewBox="0 0 8 1000"
          preserveAspectRatio="none"
        >
          <line
            x1="4"
            y1="0"
            x2="4"
            y2="1000"
            stroke="var(--trace-base-stroke)"
            strokeWidth={1}
            vectorEffect="non-scaling-stroke"
          />
          <line
            className="trace-vertical"
            x1="4"
            y1="0"
            x2="4"
            y2="1000"
            pathLength={1000}
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        <ul className="flex flex-col gap-16 md:gap-24">
          {ENTRIES.map((e, i) => {
            const leftSide = i % 2 === 1;
            return (
              <li
                key={`${e.period}-${e.role}`}
                className="scroll-reveal relative grid grid-cols-[40px_1fr] gap-6 md:grid-cols-2 md:gap-16"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute left-4 top-2 h-2 w-2 -translate-x-1/2 rounded-full border border-accent bg-background md:left-1/2"
                  style={{ boxShadow: "0 0 8px var(--accent)" }}
                />
                <EntryCard
                  entry={e}
                  className={
                    leftSide
                      ? "col-start-2 md:col-start-1 md:text-right"
                      : "col-start-2"
                  }
                />
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}

function EntryCard({ entry, className = "" }: { entry: Entry; className?: string }) {
  const rightAligned = className.includes("md:text-right");
  return (
    <div className={className}>
      <div
        className={`flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-muted ${
          rightAligned ? "md:justify-end" : ""
        }`}
      >
        <span className="text-accent">●</span>
        <span>{entry.period}</span>
      </div>
      <h3 className="mt-3 font-mono text-xl font-medium leading-snug tracking-tight text-foreground sm:text-2xl">
        {entry.role}
      </h3>
      <div className="mt-1 text-sm text-muted">{entry.org}</div>
      <ul className="mt-4 space-y-2 text-muted">
        {entry.notes.map((note, i) => (
          <li key={i} className="text-sm leading-relaxed">
            {note}
          </li>
        ))}
      </ul>
    </div>
  );
}
