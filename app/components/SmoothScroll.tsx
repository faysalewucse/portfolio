"use client";

import { useEffect } from "react";

export function SmoothScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if ("ontouchstart" in window) return;

    let current = window.scrollY;
    let target = window.scrollY;
    let rafId = 0;
    const EASING = 0.075;

    const maxScroll = () =>
      Math.max(0, document.documentElement.scrollHeight - window.innerHeight);

    const jumpTo = (y: number) =>
      window.scrollTo({ top: y, behavior: "instant" as ScrollBehavior });

    const tick = () => {
      current += (target - current) * EASING;
      if (Math.abs(target - current) < 0.4) {
        current = target;
        jumpTo(current);
        rafId = 0;
        return;
      }
      jumpTo(current);
      rafId = requestAnimationFrame(tick);
    };

    const onWheel = (e: WheelEvent) => {
      if (e.ctrlKey || e.metaKey) return;
      e.preventDefault();
      target = Math.max(0, Math.min(target + e.deltaY, maxScroll()));
      if (!rafId) rafId = requestAnimationFrame(tick);
    };

    const onScroll = () => {
      if (!rafId) {
        current = window.scrollY;
        target = window.scrollY;
      }
    };

    const onKey = () => {
      if (!rafId) {
        current = window.scrollY;
        target = window.scrollY;
      }
    };

    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
      const anchor = (e.target as HTMLElement | null)?.closest?.(
        'a[href^="#"]',
      ) as HTMLAnchorElement | null;
      if (!anchor) return;
      const hash = anchor.getAttribute("href");
      if (!hash || hash === "#") return;
      const el = document.getElementById(hash.slice(1));
      if (!el) return;
      e.preventDefault();
      const offset = 80;
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      target = Math.max(0, Math.min(y, maxScroll()));
      history.pushState(null, "", hash);
      if (!rafId) rafId = requestAnimationFrame(tick);
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKey, { passive: true });
    document.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return null;
}
