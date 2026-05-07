import Link from "next/link";
import { POSTS, TYPE_META, postChipLabel } from "../blog/posts";
import type { PostMeta } from "../blog/posts";
import { Pill, Section, SectionHeading } from "./ui";

const HOMEPAGE_LIMIT = 4;

export function Blog() {
  const visible = POSTS.slice(0, HOMEPAGE_LIMIT);
  return (
    <Section id="blog" n="07" label="Writing">
      <div className="mb-16 flex items-end justify-between gap-8 flex-wrap">
        <SectionHeading>Notes on shipping.</SectionHeading>
        <span className="font-mono text-xs uppercase tracking-widest text-muted">
          {POSTS.length} posts
        </span>
      </div>

      <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {visible.map((post) => (
          <li key={post.slug} className="scroll-reveal">
            <BlogCard post={post} />
          </li>
        ))}
      </ul>

      <div className="mt-12 flex justify-center">
        <Link
          href="/blog"
          className="group inline-flex items-center gap-2 border border-border-strong bg-surface/70 px-6 py-3 font-mono text-xs uppercase tracking-widest text-foreground backdrop-blur transition-colors hover:border-accent hover:text-accent"
        >
          View all writing
          <span className="transition-transform group-hover:translate-x-0.5">→</span>
        </Link>
      </div>
    </Section>
  );
}

function BlogCard({ post }: { post: PostMeta }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="card-glow group relative flex h-full flex-col gap-5 overflow-hidden border border-border bg-surface/40 p-6 transition-colors hover:border-border-strong sm:p-8"
    >
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-widest text-muted">
        <span className="text-accent">{TYPE_META[post.type].label}</span>
        <span className="h-1 w-1 rounded-full bg-border-strong" />
        <FormattedDate iso={post.date} />
        <span className="h-1 w-1 rounded-full bg-border-strong" />
        <span>{post.readMinutes} min</span>
      </div>

      <h3 className="font-mono text-xl font-medium leading-snug tracking-tight text-foreground transition-colors group-hover:text-accent sm:text-2xl">
        {post.title}
      </h3>

      <p className="flex-1 text-sm leading-relaxed text-muted">{post.summary}</p>

      <div className="flex items-center justify-between pt-2">
        <Pill>{postChipLabel(post)}</Pill>
        <span className="font-mono text-xs uppercase tracking-widest text-muted transition-colors group-hover:text-accent">
          Read →
        </span>
      </div>
    </Link>
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
