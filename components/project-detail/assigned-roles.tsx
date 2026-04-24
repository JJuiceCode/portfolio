import type { ProjectArea } from "@/lib/projects";

type AssignedRolesProps = {
  areas: ProjectArea[];
};

export function AssignedRoles({ areas }: AssignedRolesProps) {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">POISITON</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">프로젝트 담당 영역 - ProductDetailPage (PDP)</h2>
          <p className="mt-3 text-muted">
            상품상세(PDP) 페이지의 핵심 컴포넌트와 상태 흐름을 설계 및 구현하여, 복잡한 상품 데이터 구조와 다양한 UI 요구사항을 안정적으로
            처리했습니다.
          </p>
          <p className="mt-2 text-muted">
            Figma 기반 디자인을 반영한 반응형 UI를 구현하고, 사용자 인터랙션과 API 연동을 고려한 컴포넌트 아키텍처를 구축했습니다.
          </p>
        </div>

        <ol className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area, index) => (
            <li key={area.id}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-surface p-5 shadow-sm transition hover:border-accent/35 hover:shadow-md hover:shadow-accent/5 dark:hover:shadow-accent/10">
                <span className="text-xs font-mono text-muted">{(index + 1).toString().padStart(2, "0")}</span>
                <p className="mt-2 text-base font-semibold text-foreground">{area.title}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
