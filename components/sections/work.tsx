import Link from "next/link";
import { getProjectsForListing } from "@/lib/projects";
import Image from "next/image";

export function Work() {
  const projects = getProjectsForListing();
  return (
    <section id="work" className="scroll-mt-24 border-t border-border px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 max-w-xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">Selected work</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">프로젝트</h2>
          <p className="mt-3 text-muted">대표 작업물입니다. 카드를 눌러 상세 페이지로 이동하세요.</p>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(p => (
            <li key={p.slug}>
              <Link
                href={`/projects/${p.slug}`}
                className="block h-full rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <article className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 dark:hover:shadow-accent/10">
                  <div className="relative mb-4 aspect-video w-full overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800">
                    <Image
                      src={p.heroImage.src}
                      alt={p.heroImage.alt}
                      fill
                      priority
                      sizes="(min-width: 1024px) 52vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-accent">{p.title}</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map(t => (
                      <li key={t} className="text-xs text-accent/90">
                        {t}
                      </li>
                    ))}
                  </ul>
                </article>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
