export function Footer() {
  return (
    <footer className="border-t border-border px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-sm text-muted sm:flex-row">
        <p>© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="transition hover:text-accent">
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-accent"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
