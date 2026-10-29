import Link from "next/link";
import { cx } from "@/lib/api";

/**
 * ProRouter brand mark — emerald tile with a geometric "P".
 * Flat, single-accent (per design-system/prorouter/MASTER.md).
 */
export function Logo({ size = 28, href = "/", className, wordmark = true }: { size?: number; href?: string; className?: string; wordmark?: boolean }) {
  return (
    <Link href={href} className={cx("group inline-flex cursor-pointer items-center gap-2.5", className)} aria-label="ProRouter home">
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true" className="shrink-0">
        <rect width="32" height="32" rx="8" className="fill-accent transition-colors duration-200 group-hover:fill-accent2" />
        <g stroke="var(--color-accent-ink)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <path d="M11.7 23.3V8.7" />
          <path d="M11.7 8.7h4.2a4.2 4.2 0 0 1 0 8.4h-4.2" />
        </g>
      </svg>
      {wordmark && (
        <span className="text-[15px] font-semibold tracking-tight">
          Pro<span className="font-normal text-mut">Router</span>
        </span>
      )}
    </Link>
  );
}
