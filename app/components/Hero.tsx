import type { CSSProperties, ReactNode } from "react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { ThemeToggle } from "./ThemeToggle";
import { StatusBadge } from "./ui";

const REVEAL = (delay: string): CSSProperties =>
  ({ "--reveal-delay": delay }) as CSSProperties;

const MENU: Array<{ label: string; href: string; primary?: boolean }> = [
  { label: "Work", href: "#projects", primary: true },
  { label: "About", href: "#about" },
  { label: "Writing", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const CV_URL =
  "https://drive.google.com/file/d/1Wtk6J8Aer9rtDZB10UWaOrfCU7qbfHf9/view?usp=sharing";

export function Hero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-6 py-20 sm:px-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,var(--hero-glow),transparent_60%)]" />

      <div className="absolute right-6 top-6 z-20 sm:right-10">
        <ThemeToggle />
      </div>

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

        <nav
          aria-label="Sections"
          className="reveal mt-10 flex max-w-2xl flex-wrap items-center justify-center gap-2.5"
          style={REVEAL("0.5s")}
        >
          {MENU.map((m) =>
            m.primary ? (
              <a
                key={m.href}
                href={m.href}
                className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-opacity hover:opacity-85"
              >
                {m.label} <span aria-hidden>→</span>
              </a>
            ) : (
              <a
                key={m.href}
                href={m.href}
                className="inline-flex items-center rounded-full border border-border-strong bg-surface/50 px-5 py-2.5 text-sm font-medium text-foreground backdrop-blur transition-colors hover:border-accent hover:text-accent"
              >
                {m.label}
              </a>
            )
          )}
          <a
            href={CV_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-accent px-5 py-2.5 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-background"
          >
            Download CV <span aria-hidden>↓</span>
          </a>
        </nav>

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
