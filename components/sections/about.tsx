export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-border px-4 py-20 sm:px-6">
      <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[1fr_1.2fr] md:gap-16">
        <div className="text-center sm:text-left">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">About</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">소개</h2>
        </div>
        <div className="space-y-4 text-muted">
          <div className="space-y-2 leading-relaxed">
            <p>이커머스 서비스 전반을 경험하며, 단순 UI 구현을 넘어 실제 운영과 연결되는 구조 설계를 중요하게 생각합니다.</p>
            <p>
              Next.js, React, TypeScript 기반으로 상태 관리와 컴포넌트 구조를 설계하고, 다양한 브랜드 환경에서도 확장 가능한 프론트엔드 개발을
              지향합니다.
            </p>
            <p>또한 AI를 요구사항 정리, 구현 검토, 디버깅까지 활용하며, 최종 판단과 책임은 직접 가져가는 실무 중심 개발자로 성장하고 있습니다.</p>
          </div>
          <ul className="flex flex-wrap gap-2 pt-2">
            {["React", "Next.js", "TypeScript", "Redux Toolkit", "SWR", "Axios", "Monorepo", "Tailwind CSS"].map(tag => (
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
