import type { CSSProperties, ReactNode } from "react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { StatusBadge } from "./ui";

const REVEAL = (delay: string): CSSProperties =>
  ({ "--reveal-delay": delay }) as CSSProperties;

export function Hero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-16 sm:px-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,var(--hero-glow),transparent_60%)]" />

      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center text-center">
        <div className="reveal mb-8" style={REVEAL("0.1s")}>
          <StatusBadge>Available for work</StatusBadge>
        </div>

        <h1
          className="reveal text-[48px] font-bold leading-[1.02] tracking-[-0.03em] text-foreground sm:text-[80px] md:text-[96px]"
          style={REVEAL("0.2s")}
        >
          Faysal Ahmed<span className="text-accent">.</span>
        </h1>

        <p
          className="reveal mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl"
          style={REVEAL("0.35s")}
        >
          Mobile &amp; full-stack engineer building web, mobile and admin
          products <span className="text-foreground">that ship.</span>
        </p>

        <div
          className="reveal mt-10 flex flex-wrap items-center justify-center gap-3"
          style={REVEAL("0.5s")}
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-85"
          >
            View work
            <span className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full border border-border-strong px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Get in touch
          </a>
        </div>

        <div
          className="reveal mt-8 flex items-center gap-3"
          style={REVEAL("0.65s")}
        >
          <IconLink href="https://github.com/faysalewucse" label="GitHub">
            <GithubIcon />
          </IconLink>
          <IconLink
            href="https://www.linkedin.com/in/faysal-ahmed-me"
            label="LinkedIn"
          >
            <LinkedinIcon />
          </IconLink>
        </div>
      </div>
    </section>
  );
}

function IconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-strong text-muted transition-colors hover:border-accent hover:text-accent"
    >
      {children}
    </a>
  );
}
