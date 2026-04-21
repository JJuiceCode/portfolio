export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-border px-4 py-20 sm:px-6">
      <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[1fr_1.2fr] md:gap-16">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400">About</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">소개</h2>
        </div>
        <div className="space-y-4 text-muted">
          <p className="leading-relaxed">
            사용자가 직관적으로 이해할 수 있는 UI와, 유지보수하기 쉬운 코드 구조를 목표로 합니다. Next.js, React, TypeScript를 주로 사용하며 디자인
            토큰과 컴포넌트 단위 설계를 선호합니다.
          </p>
          <p className="leading-relaxed">
            이 포트폴리오는 다크/라이트 테마와 반응형 레이아웃을 반영한 예시 페이지입니다. 실제 프로필과 프로젝트 링크로 교체해 사용하세요.
          </p>
          <ul className="flex flex-wrap gap-2 pt-2">
            {["React", "Next.js", "TypeScript", "Tailwind CSS"].map(tag => (
              <li key={tag} className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-foreground">
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
