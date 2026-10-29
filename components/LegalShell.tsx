import type { ReactNode } from "react";
import { PageHeader, PublicShell } from "@/components/PublicShell";

/**
 * Shared shell for long-form legal/content pages so terms, privacy, refunds,
 * security and the changelog all render with identical typography.
 */
export function LegalShell({ eyebrow, title, updated, subtitle, children }: { eyebrow: string; title: string; updated?: string; subtitle?: string; children: ReactNode }) {
  return (
    <PublicShell>
      <PageHeader eyebrow={eyebrow} title={title} subtitle={subtitle}>
        {updated && <p className="font-mono text-[12px] text-mut2">Last updated {updated}</p>}
      </PageHeader>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="max-w-3xl space-y-6 text-[13.5px] leading-relaxed text-mut [&_a]:text-accent [&_a:hover]:underline [&_h2]:mt-10 [&_h2]:text-[15px] [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-fg [&_h2:first-child]:mt-0 [&_li]:leading-relaxed [&_strong]:text-fg [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5">
          {children}
        </div>
      </div>
    </PublicShell>
  );
}
