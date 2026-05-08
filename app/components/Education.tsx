import { Timeline, type TimelineEntry } from "./Timeline";
import { NerddevsLink, Section, SectionHeading } from "./ui";

const ENTRIES: TimelineEntry[] = [
  {
    period: "Jan 2025 — Present",
    role: "Islamic Studies",
    org: "Islamic Online Madrasah (IOM) · Batch 2513",
    notes: [
      <>
        Pursued in parallel with the day job at <NerddevsLink />.
      </>,
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

export function Education() {
  return (
    <Section id="education" n="07" label="Education">
      <div className="mb-16 flex items-end justify-between gap-8 flex-wrap">
        <SectionHeading>Where I learned.</SectionHeading>
        <span className="font-mono text-xs uppercase tracking-widest text-muted">
          {ENTRIES.length} stops
        </span>
      </div>
      <Timeline entries={ENTRIES} />
    </Section>
  );
}
