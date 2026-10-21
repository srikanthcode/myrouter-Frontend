"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { cx } from "@/lib/api";

const links = [
  { href: "/models", label: "Models" },
  { href: "/providers", label: "Providers" },
  { href: "/rankings", label: "Rankings" },
  { href: "/pricing", label: "Pricing" },
  { href: "/chat", label: "Playground" },
  { href: "/docs", label: "Docs" },
];

export function PublicNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [me, setMe] = useState<{ user: { role: string } | null } | null>(null);

  useEffect(() => {
    fetch("/api/auth/me", { credentials: "include" })
      .then((r) => (r.ok ? r.json() : null))
      .then(setMe)
      .catch(() => setMe(null));
  }, [pathname]);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ink/80 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6">
        <div className="flex items-center gap-8">
          <Logo />
          <nav className="hidden items-center gap-0.5 md:flex" aria-label="Primary">
            {links.map((l) => {
              const active = pathname.startsWith(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  aria-current={active ? "page" : undefined}
                  className={cx(
                    "relative rounded-md px-2.5 py-1.5 text-[13px] transition-colors duration-200 after:absolute after:inset-x-2.5 after:bottom-0 after:h-[2px] after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-200 hover:text-fg hover:after:scale-x-100",
                    active ? "text-fg after:scale-x-100" : "text-mut",
                  )}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <Link href="/status" className="flex items-center gap-2 rounded-md px-2.5 py-1.5 text-[13px] text-mut transition-colors duration-200 hover:text-fg">
            <span className="size-1.5 rounded-full bg-good" aria-hidden="true" /> Status
          </Link>
          {me?.user ? (
            <Link href="/dashboard" className="inline-flex h-9 items-center rounded-lg bg-accent px-4 text-sm font-medium text-accent-ink transition-colors duration-200 hover:bg-accent2">
              Dashboard
            </Link>
          ) : (
            <>
              <Link href="/login" className="rounded-lg px-3 py-2 text-sm text-mut transition-colors duration-200 hover:text-fg">
                Sign in
              </Link>
              <Link href="/signup" className="inline-flex h-9 items-center rounded-lg bg-accent px-4 text-sm font-medium text-accent-ink transition-colors duration-200 hover:bg-accent2">
                Sign up
              </Link>
            </>
          )}
        </div>
        <button
          className="rounded-md p-2 text-mut transition-colors duration-200 hover:text-fg md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-line bg-ink2 px-4 py-3 md:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {links.map((l) => {
              const active = pathname.startsWith(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  aria-current={active ? "page" : undefined}
                  className={cx("rounded-md px-3 py-2.5 text-sm transition-colors duration-200", active ? "bg-white/[0.06] text-fg" : "text-mut hover:bg-white/[0.06] hover:text-fg")}
                >
                  {l.label}
                </Link>
              );
            })}
            <div className="mt-2 flex items-center gap-2 border-t border-line pt-3">
              <ThemeToggle />
              {me?.user ? (
                <Link href="/dashboard" className="flex-1 rounded-lg bg-accent px-3 py-2 text-center text-sm font-medium text-accent-ink">
                  Dashboard
                </Link>
              ) : (
                <>
                  <Link href="/login" className="flex-1 rounded-lg border border-line2 px-3 py-2 text-center text-sm text-fg">
                    Sign in
                  </Link>
                  <Link href="/signup" className="flex-1 rounded-lg bg-accent px-3 py-2 text-center text-sm font-medium text-accent-ink">
                    Sign up
                  </Link>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
