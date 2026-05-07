import type { ComponentType } from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { GithubIcon, LinkedinIcon } from "./icons";
import { Section } from "./ui";

const LINKS: Array<{
  label: string;
  href: string;
  Icon: ComponentType<{ size?: number; className?: string }>;
}> = [
  { label: "email", href: "mailto:faysal.ewucse@gmail.com", Icon: FaRegEnvelope },
  { label: "github", href: "https://github.com/faysalewucse", Icon: GithubIcon },
  {
    label: "linkedin",
    href: "https://www.linkedin.com/in/faysal-ahmed-me",
    Icon: LinkedinIcon,
  },
];

const STATUS: Array<[string, string]> = [
  ["Availability", "Open"],
  ["Response", "< 24h"],
  ["Timezone", "GMT+6 · Dhaka"],
  ["Engagement", "Contract · Remote"],
];

export function Contact() {
  return (
    <Section id="contact" n="07" label="Contact">
      <div className="grid grid-cols-1 gap-16 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <div className="scroll-reveal">
          <h2 className="font-mono text-4xl font-medium leading-[1.05] tracking-tight text-foreground sm:text-6xl">
            Let&apos;s build
            <br />
            something<span className="text-accent">.</span>
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
            Open to remote contract work and staff-level product builds. If
            you&apos;re shipping something that has to hold up under real use,
            I&apos;m probably a good fit.
          </p>

          <ul className="mt-12 flex flex-col divide-y divide-border border-y border-border">
            {LINKS.map((l) => {
              const external = l.href.startsWith("http");
              const { Icon } = l;
              return (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="group flex items-center justify-between py-5 font-mono text-sm uppercase tracking-widest text-muted transition-colors hover:text-accent"
                  >
                    <span className="inline-flex items-center gap-3">
                      <Icon size={18} className="text-accent" />
                      {l.label}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <span className="h-px w-8 bg-border-strong transition-all group-hover:w-16 group-hover:bg-accent" />
                      <span>→</span>
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <aside className="scroll-reveal flex flex-col gap-6 self-start border border-border bg-surface/40 p-8 font-mono text-sm">
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-muted">
            <span className="status-dot inline-block h-1.5 w-1.5 rounded-full bg-accent" />
            Status
          </div>
          {STATUS.map(([k, v]) => (
            <StatRow key={k} k={k} v={v} />
          ))}
        </aside>
      </div>

      <footer className="mt-40 border-t border-border">
        <div className="section-inner flex flex-wrap items-center justify-between gap-6 py-8 font-mono text-[11px] uppercase tracking-widest text-muted">
          <span>© 2026 Faysal Ahmed</span>

          <div className="flex items-center gap-5">
            <a
              href="mailto:faysal.ewucse@gmail.com"
              className="transition-colors hover:text-accent"
            >
              faysal.ewucse@gmail.com
            </a>
            <span aria-hidden className="h-3 w-px bg-border-strong" />
            <a
              href="https://github.com/faysalewucse"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted transition-colors hover:text-accent"
            >
              <GithubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/faysal-ahmed-me"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted transition-colors hover:text-accent"
            >
              <LinkedinIcon />
            </a>
          </div>
        </div>
      </footer>
    </Section>
  );
}

function StatRow({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-baseline justify-between gap-6 border-t border-border pt-4 first:border-t-0 first:pt-0">
      <span className="text-[11px] uppercase tracking-widest text-muted">{k}</span>
      <span className="text-foreground">{v}</span>
    </div>
  );
}
