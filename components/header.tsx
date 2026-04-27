"use client";

import { useState } from "react";
import { ThemeToggle } from "./theme-toggle";
import Link from "next/link";
import { getProjectsForListing } from "@/lib/projects";

const projectSubMenu = getProjectsForListing().map(project => ({
  href: `/projects/${project.slug}`,
  label: project.title,
}));

const nav = [
  { href: "/#about", label: "About" },
  { href: "/#work", label: "Work", children: projectSubMenu },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="text-sm font-semibold tracking-tight text-foreground transition hover:text-accent">
          JJuiceCode
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="주요 메뉴">
          {nav.map(item =>
            item.children ? (
              <div key={item.href} className="group relative">
                <a
                  href={item.href}
                  className="flex items-center gap-1 text-sm text-muted transition hover:text-accent focus-visible:text-accent"
                  aria-haspopup="true"
                >
                  {item.label}
                  <ChevronDownIcon />
                </a>
                <div className="invisible absolute left-1/2 top-full w-80 -translate-x-1/2 pt-5 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="rounded-2xl border border-border bg-background/95 p-2 shadow-lg backdrop-blur-md">
                    {item.children.map(child => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-xl px-4 py-3 text-sm font-medium leading-snug text-foreground transition hover:bg-accent-soft hover:text-accent focus-visible:bg-accent-soft focus-visible:text-accent"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a key={item.href} href={item.href} className="text-sm text-muted transition hover:text-accent">
                {item.label}
              </a>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="메뉴 열기"
            onClick={() => setOpen(v => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={`border-t border-border bg-background md:hidden ${open ? "block" : "hidden"}`}>
        <nav className="flex flex-col gap-1 px-4 py-3" aria-label="모바일 메뉴">
          {nav.map(item =>
            item.children ? (
              <div key={item.href} className="flex flex-col">
                <a
                  href={item.href}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground transition hover:bg-accent-soft"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
                <div className="ml-3 border-l border-border pl-3">
                  {item.children.map(child => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block rounded-lg px-3 py-2 text-sm text-muted transition hover:bg-accent-soft hover:text-accent"
                      onClick={() => setOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2.5 text-sm text-foreground transition hover:bg-accent-soft"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ),
          )}
        </nav>
      </div>
    </header>
  );
}

function MenuIcon() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m6 9 6 6 6-6" />
    </svg>
  );
}
