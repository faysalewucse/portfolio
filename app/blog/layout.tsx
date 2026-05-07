import Link from "next/link";
import type { ReactNode } from "react";
import { ThemeToggle } from "../components/ThemeToggle";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <header className="border-b border-border">
        <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between gap-4 px-6 py-6 font-mono text-xs uppercase tracking-widest text-muted sm:px-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 transition-colors hover:text-accent"
          >
            <span>←</span>
            <span>Faysal Ahmed</span>
          </Link>
          <div className="flex items-center gap-4">
            <span>Writing</span>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="flex flex-1 flex-col">{children}</main>

      <footer className="border-t border-border">
        <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-6 py-8 font-mono text-[11px] uppercase tracking-widest text-muted sm:px-10">
          <Link href="/" className="transition-colors hover:text-accent">
            ← Back to portfolio
          </Link>
          <span>© 2026 Faysal Ahmed</span>
        </div>
      </footer>
    </div>
  );
}
