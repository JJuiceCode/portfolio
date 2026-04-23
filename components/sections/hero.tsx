export function Hero() {
  return (
    <section className="relative px-4 pb-20 pt-32 sm:px-6 sm:pt-40">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-1/4 top-0 h-[420px] w-[420px] rounded-full bg-accent/15 blur-3xl dark:bg-accent/20" />
        <div className="absolute -right-1/4 bottom-0 h-[320px] w-[320px] rounded-full bg-fuchsia-500/10 blur-3xl dark:bg-fuchsia-600/15" />
      </div>

      <div className="mx-auto max-w-5xl">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-accent">Creative Developer</p>
        <h1 className="max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl">
          심플한 인터페이스로
          <br />
          <span className="bg-linear-to-r from-accent to-fuchsia-600 bg-clip-text text-transparent dark:from-accent dark:to-fuchsia-400">
            명확한 경험
          </span>
          을 만듭니다.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          프론트엔드와 디자인 시스템에 관심이 많은 개발자입니다. 반응형 웹과 접근성을 중시합니다.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#work"
            className="inline-flex h-12 items-center justify-center rounded-full bg-accent-dark px-8 text-sm font-medium text-white transition hover:bg-accent/90 dark:hover:bg-accent/80"
          >
            프로젝트 보기
          </a>
          <a
            href="#contact"
            className="inline-flex h-12 items-center justify-center rounded-full border border-border px-8 text-sm font-medium text-foreground transition hover:border-accent/50 hover:bg-(--accent-soft)"
          >
            연락하기
          </a>
        </div>
      </div>
    </section>
  );
}
