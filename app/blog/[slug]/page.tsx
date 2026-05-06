import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Pill } from "../../components/ui";
import { POSTS, PostBody, postBySlug } from "../posts";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const meta = postBySlug(slug);
  if (!meta) return {};
  return {
    title: `${meta.title} — Faysal Ahmed`,
    description: meta.summary,
    openGraph: {
      title: meta.title,
      description: meta.summary,
      type: "article",
      publishedTime: meta.date,
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const meta = postBySlug(slug);
  if (!meta) notFound();

  const idx = POSTS.findIndex((p) => p.slug === slug);
  const prev = idx > 0 ? POSTS[idx - 1] : null;
  const next = idx < POSTS.length - 1 ? POSTS[idx + 1] : null;

  return (
    <article className="mx-auto w-full max-w-[1200px] px-6 py-16 sm:px-10 sm:py-24">
      <div className="mb-10 font-mono text-xs uppercase tracking-widest text-muted">
        <Link href="/blog" className="transition-colors hover:text-accent">
          ← All posts
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-16">
        <div className="min-w-0">
          <header>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[11px] uppercase tracking-widest text-muted">
              <FormattedDate iso={meta.date} />
              <Dot />
              <span>{meta.readMinutes} min read</span>
              <Dot />
              <Pill>{meta.category}</Pill>
            </div>

            <h1 className="mt-8 max-w-3xl font-mono text-4xl font-medium leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl">
              {meta.title}
            </h1>

            <span
              aria-hidden
              className="mt-10 block h-px w-16 bg-accent"
              style={{ boxShadow: "0 0 8px var(--accent)" }}
            />

            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
              {meta.summary}
            </p>
          </header>

          <div className="prose mt-16">
            <PostBody slug={slug} />
          </div>

          <nav className="mt-24 grid gap-6 border-t border-border pt-12 sm:grid-cols-2">
            {prev ? (
              <PostNavCard direction="prev" post={prev} />
            ) : (
              <span className="sm:order-1" />
            )}
            {next ? (
              <PostNavCard direction="next" post={next} />
            ) : (
              <span className="sm:order-2" />
            )}
          </nav>
        </div>

        <MoreWritingSidebar currentSlug={slug} />
      </div>
    </article>
  );
}

function MoreWritingSidebar({ currentSlug }: { currentSlug: string }) {
  return (
    <aside className="lg:sticky lg:top-24 lg:self-start">
      <div className="border border-border bg-surface/40 p-6">
        <div className="mb-6 flex items-center justify-between">
          <span className="font-mono text-[11px] uppercase tracking-widest text-muted">
            More writing
          </span>
          <Link
            href="/blog"
            className="font-mono text-[11px] uppercase tracking-widest text-muted transition-colors hover:text-accent"
          >
            All →
          </Link>
        </div>
        <ul className="flex flex-col divide-y divide-border">
          {POSTS.map((post, i) => {
            const isCurrent = post.slug === currentSlug;
            const n = String(i + 1).padStart(2, "0");
            const inner = (
              <>
                <span className="font-mono text-[11px] uppercase tracking-widest text-muted">
                  {n} · {post.category}
                </span>
                <span
                  className={`mt-2 block font-mono text-sm leading-snug tracking-tight transition-colors ${
                    isCurrent
                      ? "text-accent"
                      : "text-foreground group-hover:text-accent"
                  }`}
                >
                  {post.title}
                </span>
                <span className="mt-2 block font-mono text-[11px] uppercase tracking-widest text-muted">
                  {post.readMinutes} min read
                </span>
              </>
            );
            return (
              <li key={post.slug} className="py-4 first:pt-0 last:pb-0">
                {isCurrent ? (
                  <div aria-current="page" className="block">
                    {inner}
                  </div>
                ) : (
                  <Link href={`/blog/${post.slug}`} className="group block">
                    {inner}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}

function PostNavCard({
  direction,
  post,
}: {
  direction: "prev" | "next";
  post: { slug: string; title: string };
}) {
  const isNext = direction === "next";
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`group flex flex-col gap-2 border border-border bg-surface/40 p-6 transition-colors hover:border-accent ${
        isNext ? "sm:order-2 sm:items-end sm:text-right" : "sm:order-1"
      }`}
    >
      <span className="font-mono text-[11px] uppercase tracking-widest text-muted transition-colors group-hover:text-accent">
        {isNext ? "Next →" : "← Previous"}
      </span>
      <span className="font-mono text-base font-medium leading-snug tracking-tight text-foreground transition-colors group-hover:text-accent sm:text-lg">
        {post.title}
      </span>
    </Link>
  );
}

function Dot() {
  return <span className="h-1 w-1 rounded-full bg-border-strong" />;
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
