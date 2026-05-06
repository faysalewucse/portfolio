import type { Metadata } from "next";
import Link from "next/link";
import { Pill } from "../components/ui";
import { POSTS } from "./posts";

export const metadata: Metadata = {
  title: "Writing — Faysal Ahmed",
  description: "Notes on shipping mobile apps — Play Store, App Store, signing, review.",
};

export default function BlogIndexPage() {
  return (
    <div className="mx-auto w-full max-w-[1200px] px-6 py-24 sm:px-10 sm:py-32">
      <div className="mb-16 max-w-2xl">
        <span className="font-mono text-[11px] uppercase tracking-widest text-muted">
          [ Writing ]
        </span>
        <h1 className="mt-4 font-mono text-4xl font-medium leading-tight tracking-tight text-foreground sm:text-5xl">
          Notes on shipping.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          Practical playbooks from publishing apps across Play Store and App
          Store — the steps, the gotchas, the policies that catch people on
          their first submission.
        </p>
      </div>

      <ul className="flex flex-col divide-y divide-border border-y border-border">
        {POSTS.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group grid grid-cols-1 gap-3 py-8 transition-colors md:grid-cols-[160px_1fr_auto] md:items-baseline md:gap-8"
            >
              <span className="font-mono text-[11px] uppercase tracking-widest text-muted">
                <FormattedDate iso={post.date} />
              </span>

              <div>
                <h2 className="font-mono text-xl font-medium leading-snug tracking-tight text-foreground transition-colors group-hover:text-accent sm:text-2xl">
                  {post.title}
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                  {post.summary}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <Pill>{post.category}</Pill>
                  <span className="font-mono text-[11px] uppercase tracking-widest text-muted">
                    {post.readMinutes} min read
                  </span>
                </div>
              </div>

              <span className="hidden font-mono text-xs uppercase tracking-widest text-muted transition-colors group-hover:text-accent md:inline">
                Read →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FormattedDate({ iso }: { iso: string }) {
  const d = new Date(iso);
  const month = d.toLocaleString("en-US", { month: "short", timeZone: "UTC" });
  return (
    <span>
      {month} {d.getUTCDate()}, {d.getUTCFullYear()}
    </span>
  );
}
