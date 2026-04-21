import Image from "next/image";
import Link from "next/link";

type ProjectHeroProps = {
  title: string;
  summary: string;
  image: { src: string; alt: string };
};

export function ProjectHero({ title, summary, image }: ProjectHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 bg-linear-to-b from-background via-background/40 to-transparent dark:from-background dark:via-background/60" />
      <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-24 sm:px-6 sm:pb-14 sm:pt-28">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-violet-600 dark:hover:text-violet-400"
        >
          <span aria-hidden>←</span>
          모든 프로젝트
        </Link>
        <div className="mt-8 grid items-end gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-12">
          <div className="max-w-xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400">
              Project
            </p>
            <h1 className="mt-3 text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">{summary}</p>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute -inset-4 rounded-4xl bg-linear-to-tr from-violet-500/20 via-fuchsia-500/10 to-transparent blur-2xl dark:from-violet-500/25 dark:via-fuchsia-500/15" />
            <div className="relative overflow-hidden rounded-3xl border border-border bg-surface shadow-[0_24px_80px_-24px_rgba(124,58,237,0.35)] ring-1 ring-black/5 dark:shadow-[0_28px_90px_-28px_rgba(167,139,250,0.35)] dark:ring-white/10">
              <div className="relative aspect-16/10 w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 52vw, 100vw"
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent dark:from-background/90" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
