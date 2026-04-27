import Image from "next/image";
import { GithubIcon } from "@/components/icons/github-icon";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-32 sm:px-6 sm:pt-40">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-1/4 top-0 h-[420px] w-[420px] rounded-full bg-accent/15 blur-3xl dark:bg-accent/20" />
        <div className="absolute -right-1/4 bottom-0 h-[320px] w-[320px] rounded-full bg-fuchsia-500/10 blur-3xl dark:bg-fuchsia-600/15" />
      </div>

      <div className="mx-auto grid max-w-5xl items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.75fr)] lg:gap-10">
        <div>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-accent">Frontend Engineer</p>
          <h1 className="max-w-3xl text-3xl font-semibold text-foreground sm:text-3xl md:text-4xl">
            복잡한 이커머스 구조를 설계하고 <span className="text-accent">문제를 해결해 사용자 경험으로</span> 연결합니다.
          </h1>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#work"
              className="inline-flex h-12 items-center justify-center rounded-full bg-accent-dark px-8 text-sm font-medium text-white transition hover:bg-accent/90 dark:hover:bg-accent/80"
            >
              프로젝트 보기
            </a>
            <a
              href="https://github.com/JJuiceCode"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub 프로필 열기"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border bg-surface px-8 text-sm font-medium text-foreground transition hover:border-accent/50 hover:bg-accent-soft"
            >
              <GithubIcon className="h-4 w-4" />
              GitHub
            </a>
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-full border border-border px-8 text-sm font-medium bg-surface text-foreground transition hover:border-accent/50 hover:bg-accent-soft"
            >
              연락하기
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none">
          <div className="relative aspect-square w-full">
            <Image
              src="/hero/jjuice_3d_coding.png"
              alt="3D 코딩 일러스트"
              fill
              priority
              sizes="(min-width: 1024px) 32vw, (min-width: 640px) 448px, 100vw"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
