"use client";

import { useId, useState } from "react";
import type { ProjectArea } from "@/lib/projects";

type TechnicalAccordionProps = {
  areas: ProjectArea[];
};

export function TechnicalAccordion({ areas }: TechnicalAccordionProps) {
  const baseId = useId();
  const [openId, setOpenId] = useState<string | null>(areas[0]?.id ?? null);

  return (
    <section className="border-t border-border bg-surface/40 px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400">
            Technical deep-dive
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            기술 상세
          </h2>
          <p className="mt-3 text-muted">
            영역을 선택하면 사용한 기술과 구체적인 구현·협업 내용을 확인할 수 있습니다.
          </p>
        </div>

        <div className="mt-10 space-y-3" role="region" aria-label="프로젝트 영역별 기술 상세">
          {areas.map((area) => {
            const isOpen = openId === area.id;
            const panelId = `${baseId}-${area.id}-panel`;
            const buttonId = `${baseId}-${area.id}-button`;

            return (
              <div
                key={area.id}
                className="overflow-hidden rounded-2xl border border-border bg-background/80 shadow-sm backdrop-blur-sm dark:bg-background/60"
              >
                <h3 className="m-0 text-base font-semibold">
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenId(isOpen ? null : area.id)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-foreground transition hover:bg-accent/5 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-violet-500 sm:px-6 sm:py-5"
                  >
                    <span className="min-w-0">{area.title}</span>
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-muted transition ${
                        isOpen ? "rotate-180 text-violet-600 dark:text-violet-400" : ""
                      }`}
                      aria-hidden
                    >
                      <ChevronIcon className="h-4 w-4" />
                    </span>
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="space-y-5 border-t border-border px-5 pb-5 pt-4 sm:px-6 sm:pb-6 sm:pt-5">
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-muted">Tech stack</p>
                        <ul className="mt-3 flex flex-wrap gap-2">
                          {area.techStack.map((tech) => (
                            <li
                              key={tech}
                              className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-foreground"
                            >
                              {tech}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-muted">
                          Implementation & history
                        </p>
                        <ul className="mt-3 space-y-3 text-sm leading-relaxed text-muted">
                          {area.details.map((paragraph, i) => (
                            <li key={i} className="relative pl-4 before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-violet-500/80 dark:before:bg-violet-400/80">
                              {paragraph}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="m6 9 6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
