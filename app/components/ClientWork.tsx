"use client";

import Image from "next/image";
import { useState } from "react";
import { Pill, Section, SectionHeading } from "./ui";

const DIR = "/shokhersoft/projects/";

type Shot = { src: string; label: string };

type AgencyProject = {
  name: string;
  category: string;
  desc: string;
  logo: string;
  logoDark?: boolean;
  stack?: string[];
  links: Array<{ label: string; href: string }>;
  shots: Shot[]; // desktop screenshots (web + portal), 1400×846
  phone?: string; // mobile app home screen, 1080×2400
};

const shot = (file: string, label: string): Shot => ({ src: DIR + file, label });

const PROJECTS: AgencyProject[] = [
  {
    name: "Hanafi Fiqh",
    category: "Website & App",
    desc: "A platform for Hanafi fiqh rulings, prayer times and Islamic guidance — structured, searchable content on the web and in a companion Flutter app.",
    logo: "/shokhersoft/logos/hanafi-fiqh.png",
    stack: ["Flutter", "Next.js", "Firebase"],
    links: [
      { label: "Website", href: "https://hanafifiqh.net" },
      {
        label: "Play Store",
        href: "https://play.google.com/store/apps/details?id=com.hanafifiqh.app",
      },
    ],
    shots: [
      shot("hanafifiqh-1-home.jpg", "Home"),
      shot("hanafifiqh-2-questions.jpg", "Questions"),
      shot("hanafifiqh-3-articles.jpg", "Articles"),
    ],
    phone: DIR + "hanafifiqh-app-home.jpg",
  },
  {
    name: "Sondipon",
    category: "Bookstore · ERP",
    desc: "An online bookstore for finding and buying books, backed by an ERP portal with POS, inventory and sales reports — on web and mobile.",
    logo: "/shokhersoft/logos/sondipon.png",
    links: [{ label: "Website", href: "https://sondipon.com" }],
    shots: [
      shot("sondipon-web-1-home.jpg", "Store home"),
      shot("sondipon-web-2-popular.jpg", "Popular books"),
      shot("sondipon-web-3-book.jpg", "Book page"),
      shot("sondipon-1-dashboard.jpg", "ERP dashboard"),
      shot("sondipon-2-reports.jpg", "Reports"),
      shot("sondipon-3-pos-with-cart.jpg", "POS"),
    ],
    phone: DIR + "sondipon-app-home.jpg",
  },
  {
    name: "MediwholeBD",
    category: "Website, App & Pharmacy Portal",
    desc: "Wholesale medicine ordering across a Flutter app, a Next.js storefront and a separate portal where pharmacies manage orders and products.",
    logo: "/shokhersoft/logos/mediwholebd.png",
    stack: ["Flutter", "Next.js", "Express", "MongoDB"],
    links: [
      { label: "Website", href: "https://mediwholebd.com" },
      {
        label: "Play Store",
        href: "https://play.google.com/store/apps/details?id=com.devskafela.mediwhole",
      },
    ],
    shots: [
      shot("mediwhole-web-1-home.jpg", "Store home"),
      shot("mediwhole-web-2-featured.jpg", "Featured"),
      shot("mediwhole-web-3-product.jpg", "Product"),
      shot("mediwhole-1-dashboard.jpg", "Portal dashboard"),
      shot("mediwhole-2-orders.jpg", "Orders"),
      shot("mediwhole-3-products.jpg", "Products"),
    ],
    phone: DIR + "mediwhole-app-home.jpg",
  },
  {
    name: "Prophetic Healing",
    category: "Website, App & Admin Portal",
    desc: "Prophetic-medicine based diagnosis and healing services — a Flutter app, a Next.js website and an admin portal for blogs, audios and users.",
    logo: "/shokhersoft/logos/prophetic-healing.png",
    logoDark: true,
    stack: ["Flutter", "Next.js", "Express", "MongoDB"],
    links: [
      { label: "Website", href: "https://prophetichealingbd.com" },
      {
        label: "Play Store",
        href: "https://play.google.com/store/apps/details?id=com.devskafela.prophetichealingbd",
      },
    ],
    shots: [
      shot("prophetichealing-1-home.jpg", "Home"),
      shot("prophetichealing-2-services.jpg", "Services"),
      shot("prophetichealing-3-audios.jpg", "Audios"),
      shot("prophetichealing-portal-1-blogs.jpg", "Portal · Blogs"),
      shot("prophetichealing-portal-2-audios.jpg", "Portal · Audios"),
      shot("prophetichealing-portal-3-blog-editor.jpg", "Portal · Editor"),
    ],
    phone: DIR + "prophetichealing-app-home.jpg",
  },
  {
    name: "Ruqyah & Ayat",
    category: "App & Admin Portal",
    desc: "Ruqyah and Quranic audio for at-home spiritual healing. Flutter app with offline mode and push, plus an admin portal for ayat, audios and app versions.",
    logo: "/shokhersoft/logos/sunnahcure.png",
    stack: ["Flutter", "GetX", "Vite", "Express", "MongoDB", "Firebase"],
    links: [
      {
        label: "Play Store",
        href: "https://play.google.com/store/apps/details?id=com.sunnahcurebd.rukiyah_and_ayat",
      },
    ],
    shots: [
      shot("ruqyah-portal-1-ayat.jpg", "Ayat"),
      shot("ruqyah-portal-2-editor.jpg", "Editor"),
      shot("ruqyah-portal-3-audios.jpg", "Audios"),
    ],
    phone: DIR + "ruqyah-app-home.jpg",
  },
  {
    name: "Muhaasib",
    category: "Accounting Software",
    desc: "An in-house accounting product — bookkeeping, reports, loans and day-to-day business management made effortless.",
    logo: "/shokhersoft/logos/muhaasib.png",
    links: [{ label: "Website", href: "https://muhaasib.online" }],
    shots: [
      shot("muhasib-1-home.jpg", "Home"),
      shot("muhasib-2-reports.jpg", "Reports"),
      shot("muhasib-3-loans.jpg", "Loans"),
      shot("muhasib-extra-good-deeds.jpg", "Good deeds"),
    ],
    phone: DIR + "muhaasib-app-home.jpg",
  },
  {
    name: "SafwaMed",
    category: "Website, App & Admin Portal",
    desc: "A storefront and admin portal built to run SafwaMed's medical business — orders, products, POS and checkout in one place.",
    logo: "/shokhersoft/logos/safwamed.png",
    links: [{ label: "Website", href: "https://safwamedbd.com" }],
    shots: [
      shot("safwamed-web-1-home.jpg", "Store home"),
      shot("safwamed-web-2-products.jpg", "Products"),
      shot("safwamed-web-3-cart.jpg", "Cart"),
      shot("safwamed-1-dashboard.jpg", "Dashboard"),
      shot("safwamed-2-orders.jpg", "Orders"),
      shot("safwamed-3-products.jpg", "Inventory"),
      shot("safwamed-extra-pos.jpg", "POS"),
    ],
    phone: DIR + "safwamed-app-home.jpg",
  },
];

const SHOT_COUNT = PROJECTS.reduce(
  (sum, p) => sum + p.shots.length + (p.phone ? 1 : 0),
  0
);

export function ClientWork() {
  return (
    <Section id="client-work" n="" label="Client Work">
      <div className="mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <SectionHeading>Products I&apos;ve built for clients.</SectionHeading>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            Websites, mobile apps and admin portals I designed and shipped
            end-to-end for businesses across healthcare, retail, finance and
            education — built with my team at ShokherSoft.
          </p>
        </div>
        <span className="font-mono text-xs uppercase tracking-widest text-muted">
          {PROJECTS.length} projects · {SHOT_COUNT} screens
        </span>
      </div>

      <ul className="flex flex-col gap-10">
        {PROJECTS.map((p) => (
          <li key={p.name} className="scroll-reveal">
            <AgencyCard project={p} />
          </li>
        ))}
      </ul>
    </Section>
  );
}

function AgencyCard({ project }: { project: AgencyProject }) {
  const [active, setActive] = useState(0);
  const current = project.shots[active];

  return (
    <article className="overflow-hidden rounded-2xl border border-border bg-surface/60">
      <div className="flex flex-col gap-6 p-6 sm:p-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex items-start gap-4">
          <div
            className={`relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-border ${
              project.logoDark ? "bg-black" : "bg-white"
            }`}
          >
            <Image
              src={project.logo}
              alt=""
              fill
              sizes="56px"
              className="object-contain p-2"
            />
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
              {project.category}
            </p>
            <h3 className="mt-1 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              {project.name}
            </h3>
            <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted">
              {project.desc}
            </p>
            {project.stack && (
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((t) => (
                  <Pill key={t}>{t}</Pill>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex shrink-0 flex-wrap gap-2 lg:justify-end">
          {project.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-border-strong px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              {l.label} <span aria-hidden>↗</span>
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-border bg-background/40 p-4 sm:p-6">
        <div
          className={`grid items-end gap-4 sm:gap-6 ${
            project.phone ? "grid-cols-[minmax(0,1fr)_auto]" : ""
          }`}
        >
          <figure className="min-w-0">
            <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-[0_12px_40px_-12px_rgba(0,0,0,0.35)]">
              <div className="flex h-7 items-center gap-1.5 border-b border-border px-3">
                <span className="h-2 w-2 rounded-full bg-border-strong" />
                <span className="h-2 w-2 rounded-full bg-border-strong" />
                <span className="h-2 w-2 rounded-full bg-border-strong" />
                <span className="ml-3 truncate font-mono text-[10px] uppercase tracking-widest text-muted">
                  {current.label}
                </span>
              </div>
              <div className="relative aspect-[1400/846]">
                <Image
                  key={current.src}
                  src={current.src}
                  alt={`${project.name} — ${current.label}`}
                  fill
                  sizes="(max-width: 1024px) 80vw, 800px"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </figure>

          {project.phone && (
            <div className="w-[22vw] max-w-[150px] min-w-[72px] rounded-[1.1rem] border border-border-strong bg-black p-[4px] shadow-[0_12px_40px_-12px_rgba(0,0,0,0.5)]">
              <div className="relative aspect-[1080/2400] overflow-hidden rounded-[0.85rem]">
                <Image
                  src={project.phone}
                  alt={`${project.name} mobile app`}
                  fill
                  sizes="150px"
                  className="object-cover object-top"
                />
              </div>
            </div>
          )}
        </div>

        {project.shots.length > 1 && (
          <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
            {project.shots.map((s, i) => (
              <button
                key={s.src}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Show ${s.label}`}
                aria-pressed={i === active}
                className={`group/thumb shrink-0 text-left transition-opacity ${
                  i === active ? "opacity-100" : "opacity-60 hover:opacity-100"
                }`}
              >
                <div
                  className={`relative aspect-[1400/846] w-28 overflow-hidden rounded-md border sm:w-32 ${
                    i === active ? "border-accent" : "border-border"
                  }`}
                >
                  <Image
                    src={s.src}
                    alt=""
                    fill
                    sizes="128px"
                    className="object-cover object-top"
                  />
                </div>
                <span className="mt-1.5 block font-mono text-[10px] uppercase tracking-widest text-muted">
                  {s.label}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
