"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function ScrollRevealer() {
  const pathname = usePathname();
  useEffect(() => {
    if (typeof window === "undefined" || typeof IntersectionObserver === "undefined") {
      return;
    }

    const targets = document.querySelectorAll<HTMLElement>(".scroll-reveal");

    const inViewport = (el: HTMLElement) => {
      const r = el.getBoundingClientRect();
      return r.top < window.innerHeight && r.bottom > 0;
    };
    targets.forEach((el) => {
      if (inViewport(el)) el.classList.add("in-view");
    });

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -80px 0px",
      },
    );

    targets.forEach((el) => {
      if (!el.classList.contains("in-view")) io.observe(el);
    });

    return () => io.disconnect();
  }, [pathname]);

  return null;
}
