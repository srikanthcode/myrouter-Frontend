"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RotateCcw, Home } from "lucide-react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 py-12 text-center">
      <div className="flex size-14 items-center justify-center rounded-2xl border border-line bg-panel shadow-sm">
        <AlertTriangle className="size-7 text-accent" />
      </div>
      <h1 className="mt-5 text-xl font-semibold tracking-tight text-fg sm:text-2xl">
        Something went wrong
      </h1>
      <p className="mt-2 max-w-md text-[13.5px] leading-relaxed text-mut">
        We couldn&apos;t load this section properly. You can try refreshing or returning home.
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <button
          onClick={() => reset()}
          className="inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-lg bg-accent px-4 text-[13px] font-medium text-accent-ink transition-colors duration-200 hover:bg-accent2"
        >
          <RotateCcw className="size-3.5" /> Try again
        </button>
        <Link
          href="/"
          className="inline-flex h-9 items-center justify-center gap-2 rounded-lg border border-line2 bg-white/[0.04] px-4 text-[13px] font-medium text-fg transition-colors duration-200 hover:bg-white/[0.08]"
        >
          <Home className="size-3.5" /> Return home
        </Link>
      </div>
    </div>
  );
}
