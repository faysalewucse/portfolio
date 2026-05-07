import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

const LINKS: Array<{ label: string; href: string }> = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Work", href: "#projects" },
  { label: "CP", href: "#competitive" },
  { label: "Experience", href: "#experience" },
  { label: "Writing", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/70 backdrop-blur">
      <div className="mx-auto flex w-full max-w-300 items-center justify-between gap-6 px-6 py-4 font-mono text-xs uppercase tracking-widest sm:px-10">
        <Link
          href="/"
          aria-label="Faysal Ahmed — home"
          className="shrink-0 text-muted transition-colors hover:text-accent"
        >
          <span className="text-foreground">FA</span> / portfolio
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-muted transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <span className="hidden text-muted sm:inline">v2026.04</span>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
