"use client";

import { useState } from "react";
import { ThemeToggle } from "./theme-toggle";
import Link from "next/link";

const nav = [
  { href: "/#about", label: "About" },
  { href: "/#work", label: "Work" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="text-sm font-semibold tracking-tight text-foreground transition hover:text-accent">
          Portfolio
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="주요 메뉴">
          {nav.map(item => (
            <a key={item.href} href={item.href} className="text-sm text-muted transition hover:text-violet-600 dark:hover:text-violet-400">
              {item.label}
            </a>
          ))}
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
          {nav.map(item => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2.5 text-sm text-foreground transition hover:bg-(--accent-soft)"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
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
