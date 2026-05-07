"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

type ScrollState = {
  current: number;
  target: number;
  rafId: number;
};

export function SmoothScroll() {
  const pathname = usePathname();
  const stateRef = useRef<ScrollState>({ current: 0, target: 0, rafId: 0 });
  const initialMount = useRef(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if ("ontouchstart" in window) return;

    const state = stateRef.current;
    state.current = window.scrollY;
    state.target = window.scrollY;
    const EASING = 0.075;

    const maxScroll = () =>
      Math.max(0, document.documentElement.scrollHeight - window.innerHeight);

    const jumpTo = (y: number) =>
      window.scrollTo({ top: y, behavior: "instant" as ScrollBehavior });

    const tick = () => {
      state.current += (state.target - state.current) * EASING;
      if (Math.abs(state.target - state.current) < 0.4) {
        state.current = state.target;
        jumpTo(state.current);
        state.rafId = 0;
        return;
      }
      jumpTo(state.current);
      state.rafId = requestAnimationFrame(tick);
    };

    const onWheel = (e: WheelEvent) => {
      if (e.ctrlKey || e.metaKey) return;
      e.preventDefault();
      state.target = Math.max(0, Math.min(state.target + e.deltaY, maxScroll()));
      if (!state.rafId) state.rafId = requestAnimationFrame(tick);
    };

    const onScroll = () => {
      if (!state.rafId) {
        state.current = window.scrollY;
        state.target = window.scrollY;
      }
    };

    const onKey = () => {
      if (!state.rafId) {
        state.current = window.scrollY;
        state.target = window.scrollY;
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
      state.target = Math.max(0, Math.min(y, maxScroll()));
      history.pushState(null, "", hash);
      if (!state.rafId) state.rafId = requestAnimationFrame(tick);
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
      if (state.rafId) cancelAnimationFrame(state.rafId);
    };
  }, []);

  useEffect(() => {
    if (initialMount.current) {
      initialMount.current = false;
      return;
    }
    const state = stateRef.current;
    if (state.rafId) {
      cancelAnimationFrame(state.rafId);
      state.rafId = 0;
    }
    state.current = 0;
    state.target = 0;
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return null;
}
