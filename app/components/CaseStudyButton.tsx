"use client";

import { Fragment, useEffect, useRef, useState } from "react";

export type CaseStudyData = {
  summary?: string;
  highlights: string[];
};

function renderEmphasized(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong
          key={i}
          className="font-medium text-foreground bg-accent-soft px-1 rounded-sm"
        >
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}

export function CaseStudyButton({
  data,
  projectName,
  projectTag,
}: {
  data: CaseStudyData;
  projectName: string;
  projectTag: string;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  function show() {
    dialogRef.current?.showModal();
    setOpen(true);
  }

  function close() {
    dialogRef.current?.close();
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  function onBackdropClick(e: React.MouseEvent<HTMLDialogElement>) {
    if (e.target === dialogRef.current) close();
  }

  return (
    <>
      <button
        type="button"
        onClick={show}
        className="group/link inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-accent"
      >
        <span className="h-px w-6 bg-border-strong transition-all group-hover/link:w-10 group-hover/link:bg-accent" />
        Case study ↗
      </button>

      <dialog
        ref={dialogRef}
        onClose={() => setOpen(false)}
        onClick={onBackdropClick}
        className="case-study-dialog fixed inset-0 m-auto max-h-[calc(100dvh-2rem)] w-[calc(100vw-2rem)] max-w-2xl overflow-y-auto rounded-md border border-border-strong bg-surface p-0 text-foreground backdrop:bg-black/60 backdrop:backdrop-blur-sm"
      >
        <div className="flex flex-col gap-6 p-8 sm:p-10">
          <div className="flex items-start justify-between gap-6 border-b border-border pb-5">
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[11px] uppercase tracking-widest text-muted">
                Case study · {projectTag}
              </span>
              <h3 className="font-mono text-2xl font-medium leading-tight tracking-tight text-foreground sm:text-3xl">
                {projectName}
              </h3>
            </div>
            <button
              type="button"
              onClick={close}
              aria-label="Close case study"
              className="shrink-0 rounded-full border border-border px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-muted transition-colors hover:border-border-strong hover:text-accent"
            >
              Close ✕
            </button>
          </div>

          {data.summary && (
            <p className="text-base leading-relaxed text-muted sm:text-lg">
              {renderEmphasized(data.summary)}
            </p>
          )}

          <ul className="flex flex-col gap-3">
            {data.highlights.map((h) => (
              <li
                key={h}
                className="flex items-start gap-3 text-sm leading-relaxed text-muted sm:text-base"
              >
                <span
                  aria-hidden
                  className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                />
                <span>{renderEmphasized(h)}</span>
              </li>
            ))}
          </ul>
        </div>
      </dialog>
    </>
  );
}
