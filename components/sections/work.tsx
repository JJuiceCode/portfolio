const projects = [
  {
    title: "E‑commerce Dashboard",
    desc: "판매 지표와 재고를 한 화면에서 관리하는 관리자 대시보드.",
    tags: ["Next.js", "Charts"],
  },
  {
    title: "Design System",
    desc: "팀 공용 컴포넌트 라이브러리와 문서 사이트.",
    tags: ["Storybook", "Tokens"],
  },
  {
    title: "Mobile-first Landing",
    desc: "성능과 SEO를 고려한 랜딩 페이지 및 A/B 테스트.",
    tags: ["Performance", "SEO"],
  },
];

export function Work() {
  return (
    <section
      id="work"
      className="scroll-mt-24 border-t border-[var(--border)] px-4 py-20 sm:px-6"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 max-w-xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400">
            Selected work
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl">
            프로젝트
          </h2>
          <p className="mt-3 text-[var(--muted)]">
            대표 작업물입니다. 상세 링크는 배포 후 연결하면 됩니다.
          </p>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <li key={p.title}>
              <article className="group flex h-full flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition hover:border-violet-500/40 hover:shadow-lg hover:shadow-violet-500/5 dark:hover:shadow-violet-500/10">
                <div className="mb-4 aspect-video w-full rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/10 dark:from-violet-500/25 dark:to-fuchsia-500/15" />
                <h3 className="text-lg font-semibold text-[var(--foreground)] group-hover:text-violet-600 dark:group-hover:text-violet-400">
                  {p.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--muted)]">
                  {p.desc}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li
                      key={t}
                      className="text-xs text-violet-600/90 dark:text-violet-400/90"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
