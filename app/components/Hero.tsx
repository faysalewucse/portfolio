import type { CSSProperties, ReactNode } from "react";
import { CircuitTraces } from "./CircuitTraces";
import { GithubIcon, LinkedinIcon } from "./icons";
import { StatusBadge } from "./ui";

const REVEAL = (delay: string): CSSProperties =>
  ({ "--reveal-delay": delay } as CSSProperties);

export function Hero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col overflow-hidden">
      <CircuitTraces className="pointer-events-none absolute inset-0 h-full w-full opacity-70 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_85%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_30%,rgba(0,212,255,0.06),transparent_60%)]" />

      <div className="relative z-10 flex flex-1 items-center">
        <div className="mx-auto w-full max-w-[1200px] px-6 sm:px-10">
          <div className="reveal mb-8 inline-block" style={REVEAL("0.1s")}>
            <StatusBadge>Available for work</StatusBadge>
          </div>

          <h1
            className="reveal font-mono text-[44px] font-medium leading-[1.05] tracking-tight text-foreground sm:text-[72px] md:text-[88px]"
            style={REVEAL("0.2s")}
          >
            Faysal Ahmed<span className="text-accent">.</span>
          </h1>

          <p
            className="reveal mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl"
            style={REVEAL("0.35s")}
          >
            Mobile &amp; full-stack engineer.{" "}
            <span className="text-foreground">Building apps that ship.</span>
          </p>

          <div
            className="reveal mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-widest text-muted"
            style={REVEAL("0.5s")}
          >
            <span>
              <span className="text-foreground">3.5+</span> yrs
            </span>
            <Dot />
            <span>
              <span className="text-foreground">Nerddevs Limited</span>
            </span>
            <Dot />
            <span>Demra, Dhaka</span>
          </div>

          <div
            className="reveal mt-14 flex flex-wrap items-center gap-4"
            style={REVEAL("0.65s")}
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 border border-border-strong bg-black/30 px-5 py-3 font-mono text-xs uppercase tracking-widest text-foreground backdrop-blur transition-colors hover:border-accent hover:text-accent"
            >
              View work
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href="mailto:faysal.ewucse@gmail.com"
              className="font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-foreground"
            >
              faysal.ewucse@gmail.com
            </a>
            <span className="ml-1 h-4 w-px bg-border-strong" aria-hidden />
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
      </div>

      <div
        className="reveal relative z-10 mx-auto flex w-full max-w-[1200px] items-end justify-between px-6 pb-10 font-mono text-[11px] uppercase tracking-widest text-muted sm:px-10"
        style={REVEAL("0.85s")}
      >
        <span className="flex items-center gap-2">
          <span className="inline-block h-px w-8 bg-border-strong" />
          Scroll
        </span>
        <span>[ 01 / 07 ] hero</span>
      </div>
    </section>
  );
}

function Dot() {
  return <span className="h-1 w-1 rounded-full bg-border-strong" />;
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
      className="group inline-flex h-10 w-10 items-center justify-center border border-border-strong bg-black/30 text-muted backdrop-blur transition-colors hover:border-accent hover:text-accent"
    >
      {children}
    </a>
  );
}
