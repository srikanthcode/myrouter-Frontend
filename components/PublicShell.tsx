import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { PublicNav } from "./PublicNav";

/**
 * Shared chrome for every public (marketing/docs) page: nav, content slot,
 * footer. Keeps the landing page, catalogue and legal pages visually identical.
 */
export function PublicShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <PublicNav />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

/** Consistent page header used by every public page below the landing page. */
export function PageHeader({ eyebrow, title, subtitle, children }: { eyebrow?: string; title: string; subtitle?: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="grid-backdrop pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16">
        {eyebrow && <div className="mb-3 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-accent">{eyebrow}</div>}
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">{title}</h1>
        {subtitle && <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-mut">{subtitle}</p>}
        {children && <div className="mt-6">{children}</div>}
      </div>
    </section>
  );
}
