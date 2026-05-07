import type { Metadata } from "next";
import Link from "next/link";
import { Pill } from "../components/ui";
import {
  type CategoryDef,
  type PostMeta,
  type TypeDef,
  TAXONOMY,
  postsByCategory,
  postsByType,
  postChipLabel,
} from "./posts";

export const metadata: Metadata = {
  title: "Writing — Faysal Ahmed",
  description:
    "Notes on shipping mobile apps and reflections on faith — two tracks, one author.",
};

export default function BlogIndexPage() {
  return (
    <div className="mx-auto w-full max-w-[1200px] px-6 py-24 sm:px-10 sm:py-32">
      <div className="mb-20 max-w-2xl">
        <span className="font-mono text-[11px] uppercase tracking-widest text-muted">
          [ Writing ]
        </span>
        <h1 className="mt-4 font-mono text-4xl font-medium leading-tight tracking-tight text-foreground sm:text-5xl">
          Two tracks.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          Practical playbooks from publishing mobile apps, alongside notes on
          faith and reflection. Two separate streams — pick what you came for.
        </p>
      </div>

      <div className="flex flex-col gap-28">
        {TAXONOMY.map((typeDef) => (
          <TypeSection key={typeDef.slug} typeDef={typeDef} />
        ))}
      </div>
    </div>
  );
}

function TypeSection({ typeDef }: { typeDef: TypeDef }) {
  const totalPosts = postsByType(typeDef.slug).length;

  return (
    <section>
      <div className="mb-12 flex flex-wrap items-end justify-between gap-4 border-b border-border pb-6">
        <div>
          <h2 className="font-mono text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            {typeDef.label}
          </h2>
          <p className="mt-2 font-mono text-[11px] uppercase tracking-widest text-muted">
            {typeDef.description}
          </p>
        </div>
        <span className="font-mono text-[11px] uppercase tracking-widest text-muted">
          {totalPosts} {totalPosts === 1 ? "post" : "posts"}
        </span>
      </div>

      {typeDef.categories.length === 0 ? (
        <ComingSoonCategories typeLabel={typeDef.label} />
      ) : (
        <div className="flex flex-col gap-16">
          {typeDef.categories.map((cat) => (
            <CategoryBlock
              key={cat.slug}
              type={typeDef.slug}
              category={cat}
            />
          ))}
        </div>
      )}
    </section>
  );
}

function CategoryBlock({
  type,
  category,
}: {
  type: TypeDef["slug"];
  category: CategoryDef;
}) {
  const posts = postsByCategory(type, category.slug);

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-baseline justify-between gap-3">
        <h3 className="font-mono text-xl font-medium tracking-tight text-foreground sm:text-2xl">
          {category.label}
        </h3>
        {category.description && (
          <span className="font-mono text-[11px] uppercase tracking-widest text-muted">
            {category.description}
          </span>
        )}
      </div>

      {posts.length > 0 ? (
        <ul className="flex flex-col divide-y divide-border border-y border-border">
          {posts
            .slice()
            .sort((a, b) => a.date.localeCompare(b.date))
            .map((post) => (
              <li key={post.slug}>
                <PostRow post={post} />
              </li>
            ))}
        </ul>
      ) : (
        <EmptyCategoryState />
      )}
    </div>
  );
}

function PostRow({ post }: { post: PostMeta }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group grid grid-cols-1 gap-3 py-7 transition-colors md:grid-cols-[160px_1fr_auto] md:items-baseline md:gap-8"
    >
      <span className="font-mono text-[11px] uppercase tracking-widest text-muted">
        <FormattedDate iso={post.date} />
      </span>

      <div>
        <h4 className="font-mono text-lg font-medium leading-snug tracking-tight text-foreground transition-colors group-hover:text-accent sm:text-xl">
          {post.title}
        </h4>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
          {post.summary}
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <Pill>{postChipLabel(post)}</Pill>
          <span className="font-mono text-[11px] uppercase tracking-widest text-muted">
            {post.readMinutes} min read
          </span>
        </div>
      </div>

      <span className="hidden font-mono text-xs uppercase tracking-widest text-muted transition-colors group-hover:text-accent md:inline">
        Read →
      </span>
    </Link>
  );
}

function EmptyCategoryState() {
  return (
    <div className="border border-dashed border-border bg-surface/30 px-6 py-8 font-mono text-[11px] uppercase tracking-widest text-muted">
      [ No posts yet ]
    </div>
  );
}

function ComingSoonCategories({ typeLabel }: { typeLabel: string }) {
  return (
    <div className="flex flex-col items-start gap-4 border border-dashed border-border bg-surface/30 p-10">
      <span className="font-mono text-[11px] uppercase tracking-widest text-muted">
        [ Categories pending ]
      </span>
      <p className="max-w-md text-sm leading-relaxed text-muted">
        The {typeLabel.toLowerCase()} track is being structured. Categories and
        first posts will land here soon — follow on{" "}
        <a
          href="https://github.com/faysalewucse"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent underline underline-offset-3"
        >
          GitHub
        </a>
        .
      </p>
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
