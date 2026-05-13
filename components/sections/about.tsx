export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-border px-4 py-20 sm:px-6">
      <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[1fr_1.2fr] md:gap-16">
        {/* left */}
        <div className="text-center sm:text-left">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">About</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">소개</h2>
          <ul className="mt-6 md:mt-12 flex flex-wrap gap-2 pt-2">
            {["React", "Next.js", "TypeScript", "Redux Toolkit", "SWR", "Monorepo", "Tailwind CSS"].map(tag => (
              <li key={tag} className="rounded-lg border border-border bg-surface px-3 py-1 text-sm font-medium text-foreground">
                {tag}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT */}
        <div className="space-y-6 break-keep">
          <div className="border-l-2 border-accent pl-5">
            <p className="text-lg leading-relaxed text-foreground">
              실서비스 환경에서 유지보수성과 확장성을 고려한 프론트엔드 구조 설계와 운영 경험을 중심으로 실무를 수행해왔습니다.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-background p-5">
              <h3 className="text-sm font-semibold text-accent">Commerce Experience</h3>

              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">PDP, 구매 인터랙션, 상태 관리 구조, 멀티 브랜드 환경 구축 경험</p>
            </div>

            <div className="rounded-2xl border border-border bg-background p-5">
              <h3 className="text-sm font-semibold text-accent">Frontend Architecture</h3>

              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">유지보수성과 확장성을 고려한 상태 흐름 및 컴포넌트 구조 설계</p>
            </div>

            <div className="rounded-2xl border border-border bg-background p-5">
              <h3 className="text-sm font-semibold text-accent">Operation & Stability</h3>

              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">실서비스 운영 이슈 분석 및 안정적인 운영 환경 개선 경험</p>
            </div>

            <div className="rounded-2xl border border-border bg-background p-5">
              <h3 className="text-sm font-semibold text-accent">AI Workflow</h3>

              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">AI 기반 워크플로우와 최신 개발 도구를 활용한 생산성 개선</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
