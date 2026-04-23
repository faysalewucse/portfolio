import { Section } from "./ui";

const SPECS: Array<[string, string]> = [
  ["ROLE", "Mobile Application Developer"],
  ["COMPANY", "Nerddevs Limited"],
  ["LOCATION", "Demra, Dhaka"],
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
            I&apos;m a Mobile Application Developer at Nerddevs Limited, building
            and deploying mobile applications end-to-end — with extensive
            experience publishing to the{" "}
            <span className="text-foreground">Google Play Store</span> and the{" "}
            <span className="text-foreground">App Store</span>.
          </p>
          <p className="scroll-reveal">
            Alongside mobile, I have a strong background in{" "}
            <span className="text-foreground">full-stack web development</span>{" "}
            — both frontend and backend — and in deploying apps to{" "}
            <span className="text-foreground">VPS servers</span>. The apps I
            ship don&apos;t stop at the device.
          </p>
          <p className="scroll-reveal">
            I&apos;m at my best gathering software requirements from clients,
            translating them into actionable plans, and delivering high-quality
            solutions. That part — the boundary between what a client wants and
            what ships — is where most projects win or lose.
          </p>
        </div>
      </div>
    </Section>
  );
}
