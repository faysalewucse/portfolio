import { Timeline, type TimelineEntry } from "./Timeline";
import { NerddevsLink, Section, SectionHeading, ZaagLink } from "./ui";

const ENTRIES: TimelineEntry[] = [
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
      <Timeline entries={ENTRIES} />
    </Section>
  );
}
