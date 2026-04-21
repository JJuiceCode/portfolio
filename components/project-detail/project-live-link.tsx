type ProjectLiveLinkProps = {
  href: string;
  label?: string;
};

export function ProjectLiveLink({ href, label = "라이브 프로젝트 보기" }: ProjectLiveLinkProps) {
  return (
    <section className="border-b border-border bg-surface/50 px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-sm font-medium text-foreground">배포 링크</h2>
          <p className="mt-1 text-sm text-muted">실제 서비스 또는 스테이징 환경으로 이동합니다.</p>
        </div>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-violet-600 px-7 text-sm font-medium text-white shadow-lg shadow-violet-500/25 transition hover:bg-violet-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500 dark:bg-violet-500 dark:hover:bg-violet-400 dark:shadow-violet-500/20"
        >
          {label}
          <ExternalLinkIcon className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </section>
  );
}

function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M14 3h7v7M10 14 21 3M21 14v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
