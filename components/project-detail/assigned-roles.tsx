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
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">이번 프로젝트에서 맡은 부분</h2>
          <p className="mt-3 text-muted">
            화면 단위로 역할을 나누어 기여했습니다. 아래 아코디언에서 각 영역의 기술 스택과 구현 히스토리를 펼쳐 볼 수 있습니다.
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
