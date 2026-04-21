export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-border px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-3xl border border-border bg-(--accent-soft) px-6 py-12 sm:px-10 sm:py-16">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-violet-700 dark:text-violet-300">Contact</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">함께 일하고 싶으신가요?</h2>
          <p className="mt-3 max-w-lg text-muted">프로젝트 제안이나 협업 문의는 이메일로 보내 주세요.</p>
          <a
            href="mailto:hello@example.com"
            className="mt-8 inline-flex items-center gap-2 text-lg font-medium text-violet-600 underline-offset-4 transition hover:underline dark:text-violet-400"
          >
            hello@example.com
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
