import type { ReactNode } from "react";

export type TimelineEntry = {
  period: string;
  role: string;
  org: ReactNode;
  notes: ReactNode[];
};

export function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
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
        {entries.map((e, i) => {
          const leftSide = i % 2 === 1;
          return (
            <li
              key={`${e.period}-${e.role}-${i}`}
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
  );
}

function EntryCard({
  entry,
  className = "",
}: {
  entry: TimelineEntry;
  className?: string;
}) {
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
