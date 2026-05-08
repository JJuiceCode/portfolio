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
            <p>다양한 웹 서비스 운영 및 프론트엔드 개발 실무를 경험하며 사용자 중심의 UI/UX 개선과 안정적인 서비스 개발에 집중해왔습니다.</p>
            <p>
              React, Next.js 기반의 프로젝트 경험을 바탕으로 유지보수성과 재사용성을 고려한 컴포넌트 설계 및 협업 중심의 개발 프로세스에 익숙합니다.
            </p>
            <p>
              실무에서는 기획·디자인·백엔드 개발자와의 협업을 통해 요구사항을 구체화하고, 서비스 운영 과정에서 발생하는 문제를 빠르게 분석하고
              해결하는 역할을 수행해왔습니다.
            </p>
            <p>
              새로운 기술과 개발 트렌드에 꾸준히 관심을 가지며, 더 나은 사용자 경험과 효율적인 개발 환경을 만들기 위해 지속적으로 학습하고 성장하고
              있습니다.
            </p>
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
