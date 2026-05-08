import type { ReactNode } from "react";
import { NerddevsLink, Section } from "./ui";

const SPECS: Array<[string, ReactNode]> = [
  ["ROLE", "Mobile Application Developer"],
  ["COMPANY", <NerddevsLink key="company" />],
  ["LOCATION", "Dhaka, Bangladesh"],
  ["EXPERIENCE", "3.5+ years"],
  ["FOCUS", "Mobile · Web · Deployment · Delivery"],
];

export function About() {
  return (
    <Section id="about" n="02" label="About">
      <div className="grid grid-cols-1 gap-16 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
        <div className="scroll-reveal font-mono text-sm">
          <ul className="divide-y divide-border">
            {SPECS.map(([k, v]) => (
              <li
                key={k}
                className="grid grid-cols-[110px_1fr] items-baseline gap-6 py-4"
              >
                <span className="text-[11px] uppercase tracking-widest text-muted">
                  {k}
                </span>
                <span className="text-foreground">{v}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="max-w-xl space-y-6 text-lg leading-relaxed text-muted">
          <p className="scroll-reveal">
            I&apos;m a Mobile Application Developer at <NerddevsLink />,
            building and shipping mobile applications end-to-end — with
            extensive experience publishing to the{" "}
            <span className="text-foreground">Google Play Store</span> and the{" "}
            <span className="text-foreground">App Store</span>, including
            end-to-end{" "}
            <span className="text-foreground">in-app subscription</span>{" "}
            rollouts.
          </p>
          <p className="scroll-reveal">
            Alongside mobile, I have a strong background in{" "}
            <span className="text-foreground">full-stack web development</span>{" "}
            — both{" "}
            <span className="font-medium" style={{ color: "#a78bfa" }}>
              frontend
            </span>{" "}
            and{" "}
            <span className="font-medium" style={{ color: "#34d399" }}>
              backend
            </span>{" "}
            — and in deploying apps to{" "}
            <span className="text-foreground">VPS servers</span>. The apps I
            ship don&apos;t stop at the device.
          </p>
          <p className="scroll-reveal">
            I&apos;m at my strongest gathering requirements from clients,
            turning them into a plan, and delivering against it. That seam —
            between what a client asks for and what actually ships — is where
            most projects are won or lost.
          </p>
          <div className="scroll-reveal relative mt-2 border-l-2 border-accent bg-accent-soft/40 py-5 pl-6 pr-5">
            <div className="mb-3 font-mono text-[11px] uppercase tracking-widest text-accent">
              [ Non-negotiable ]
            </div>
            <p className="text-foreground">
              One commitment runs through everything I take on: it has to align
              with{" "}
              <span className="font-semibold text-accent">Shariah</span>. I only
              work on projects that comply with Islamic principles, and decline
              anything that doesn&apos;t — that&apos;s been true of every
              product I&apos;ve shipped, and it always will be, in shaa Allah.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
