import type { ReactNode } from "react";

export function Section({
  id,
  n,
  label,
  className = "",
  children,
}: {
  id: string;
  n: string;
  label: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`section border-t border-border ${className}`}>
      <div className="section-inner">
        <SectionLabel n={n} label={label} />
        {children}
      </div>
    </section>
  );
}

export const TOTAL_SECTIONS = "08";

export function SectionLabel({ n, label }: { n: string; label: string }) {
  return (
    <div className="section-label">
      <span>[ {n} / {TOTAL_SECTIONS} ]</span>
      <span>{label}</span>
    </div>
  );
}

export function SectionHeading({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`font-mono text-3xl font-medium leading-tight tracking-tight text-foreground sm:text-4xl ${className}`}
    >
      {children}
    </h2>
  );
}

export function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-border px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-muted">
      {children}
    </span>
  );
}

export function StatusBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-muted backdrop-blur">
      <span className="status-dot inline-block h-1.5 w-1.5 rounded-full bg-accent" />
      {children}
    </span>
  );
}

export function NerddevsLink() {
  return (
    <a
      href="https://nerddevs.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium transition-opacity hover:opacity-80 hover:underline"
      style={{ color: "#F5811E" }}
    >
      Nerddevs Limited
    </a>
  );
}

export function ZaagLink({ children }: { children?: ReactNode }) {
  return (
    <a
      href="https://zaagsys.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium transition-opacity hover:opacity-80 hover:underline"
      style={{ color: "#3B82F6" }}
    >
      {children ?? "Zaag Systems Ltd."}
    </a>
  );
}

export function LegendDot({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2">
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
      {children}
    </span>
  );
}
