import { ExternalLinkIcon } from "@/components/icons/external-link-icon";

type ProjectLiveLinkProps = {
  href: string[];
  linkLabel?: string[];
};

export function ProjectLiveLink({ href, linkLabel }: ProjectLiveLinkProps) {
  const links =
    linkLabel?.map((label, index) => ({
      label,
      href: href[index],
    })) ?? [];

  return (
    <section className="border-b border-border bg-surface/50 px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-sm font-medium text-foreground">배포 링크</h2>
          <p className="mt-1 text-sm text-muted">실제 서비스 환경으로 이동합니다.</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-end">
          {links.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-accent-dark px-7 text-sm font-medium text-white shadow-lg shadow-accent/25 transition hover:bg-accent/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              {label}
              <ExternalLinkIcon className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
