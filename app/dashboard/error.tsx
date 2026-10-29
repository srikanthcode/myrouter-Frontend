"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RotateCcw, LayoutDashboard } from "lucide-react";

export default function DashboardErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Dashboard page error:", error);
  }, [error]);

  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center rounded-2xl border border-line bg-panel p-8 text-center">
      <div className="flex size-12 items-center justify-center rounded-xl border border-warn/30 bg-warn/10 text-warn">
        <AlertTriangle className="size-6" />
      </div>
      <h2 className="mt-4 text-lg font-semibold tracking-tight text-fg">
        Unable to load dashboard section
      </h2>
      <p className="mt-1.5 max-w-sm text-[13px] text-mut">
        A temporary error occurred while fetching your data. Try refreshing below.
      </p>
      <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
        <button
          onClick={() => reset()}
          className="inline-flex h-8 cursor-pointer items-center justify-center gap-1.5 rounded-lg bg-accent px-3.5 text-[12.5px] font-medium text-accent-ink transition-colors duration-200 hover:bg-accent2"
        >
          <RotateCcw className="size-3.5" /> Try again
        </button>
        <Link
          href="/dashboard"
          className="inline-flex h-8 items-center justify-center gap-1.5 rounded-lg border border-line bg-white/[0.04] px-3.5 text-[12.5px] font-medium text-fg transition-colors duration-200 hover:bg-white/[0.08]"
        >
          <LayoutDashboard className="size-3.5" /> Overview
        </Link>
      </div>
    </div>
  );
}
