import Link from "next/link";
import { cx } from "@/lib/api";

/**
 * ProRouter brand mark — geometric slate tile with an emerald route glyph.
 * Flat, single-accent (per design-system/prorouter/MASTER.md). No gradients.
 * Animated: pulsing dot + shifting route line for an organic feel.
 */
export function Logo({ size = 28, href = "/", className, wordmark = true }: { size?: number; href?: string; className?: string; wordmark?: boolean }) {
  return (
    <Link href={href} className={cx("group inline-flex cursor-pointer items-center gap-2.5", className)} aria-label="ProRouter home">
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true" className="overflow-visible">
        {/* Base tile with subtle glow on hover */}
        <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" className="fill-ink2 transition-colors duration-200" />
        <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" className="stroke-line2" />
        {/* Route line — animates on hover */}
        <path
          d="M10 9.5v6a6 6 0 0 0 12 0v-6"
          stroke="var(--color-accent)"
          strokeWidth="2.4"
          strokeLinecap="round"
          className="transition-all duration-500 group-hover:stroke-[#4ADE80] group-hover:stroke-[2.8]"
        />
        {/* Pulsing dot at the bottom */}
        <circle cx="16" cy="22.2" r="2.1" fill="#4ADE80">
          <animate attributeName="r" values="2.1;2.8;2.1" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0.7;1" dur="2s" repeatCount="indefinite" />
        </circle>
        {/* Secondary accent core */}
        <circle cx="16" cy="15.5" r="1.2" fill="none" stroke="rgba(74,222,128,0.3)" strokeWidth="0.5">
          <animate attributeName="r" values="1.2;2.5;1.2" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3;0;0.3" dur="3s" repeatCount="indefinite" />
        </circle>
      </svg>
      {wordmark && (
        <span className="text-[15px] font-semibold tracking-tight">
          Pro<span className="font-normal text-mut">Router</span>
        </span>
      )}
    </Link>
  );
}