import type { ProjectArea } from "@/lib/projects";

type AssignedRolesProps = {
  areas: ProjectArea[];
  positionTitle: string;
  positionDescription: string[];
};

export function AssignedRoles({ areas, positionTitle, positionDescription }: AssignedRolesProps) {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">POISITON</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">프로젝트 담당 영역 - {positionTitle}</h2>
          <ul className="mt-3 space-y-2 text-muted">
            {positionDescription.map(description => (
              <li key={description}>{description}</li>
            ))}
          </ul>
        </div>

        <ol className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area, index) => (
            <li key={area.id}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-surface p-5 shadow-sm transition hover:border-accent/35 hover:shadow-md hover:shadow-accent/5 dark:hover:shadow-accent/10">
                <span className="text-xs font-mono text-muted">{(index + 1).toString().padStart(2, "0")}</span>
                <p className="mt-2 text-base font-semibold text-foreground">{area.title}</p>
                <p className="mt-2 text-sm text-muted">{area.subText}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
