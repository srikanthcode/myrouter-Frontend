"use client";
import { createContext, useCallback, useContext, useEffect, useId, useRef, useState, type ReactNode } from "react";
import { Check, CheckCircle2, Copy, Info, X, XCircle } from "lucide-react";
import { cx } from "@/lib/api";

/* ────────────────────────────────────────────────────────────────
 * ProRouter UI primitives — Minimalism & Swiss Style, dark.
 * Every interactive element: cursor-pointer, visible focus, 200ms
 * color-only transitions (no layout-shifting hovers).
 * ──────────────────────────────────────────────────────────────── */

const focusRing = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost" | "danger" | "outline";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
};

export function Button({ variant = "primary", size = "md", className, loading, children, ...rest }: ButtonProps) {
  const base = `inline-flex cursor-pointer select-none items-center justify-center gap-2 rounded-lg font-medium transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50 ${focusRing}`;
  const variants = {
    primary: "bg-accent text-accent-ink hover:bg-accent2",
    secondary: "border border-line2 bg-white/[0.04] text-fg hover:bg-white/[0.08]",
    outline: "border border-line2 text-fg hover:border-mut2 hover:bg-white/[0.04]",
    ghost: "text-mut hover:bg-white/[0.06] hover:text-fg",
    danger: "border border-bad/30 bg-bad/10 text-bad hover:bg-bad/20",
  };
  const sizes = { sm: "h-8 px-3 text-[13px]", md: "h-10 px-4 text-sm", lg: "h-12 px-6 text-[15px]" };
  return (
    <button className={cx(base, variants[variant], sizes[size], className)} disabled={loading || rest.disabled} {...rest}>
      {loading && <Spinner className="size-3.5" />}
      {children}
    </button>
  );
}

export function IconButton({ label, size = "md", className, children, ...rest }: React.ButtonHTMLAttributes<HTMLButtonElement> & { label: string; size?: "sm" | "md" }) {
  return (
    <button
      aria-label={label}
      className={cx(
        `inline-flex cursor-pointer items-center justify-center rounded-md text-mut transition-colors duration-200 hover:bg-white/[0.06] hover:text-fg disabled:pointer-events-none disabled:opacity-50 ${focusRing}`,
        size === "sm" ? "size-7" : "size-9",
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

export function CopyButton({ value, label = "Copy to clipboard", className }: { value: string; label?: string; className?: string }) {
  const [copied, setCopied] = useState(false);
  const toast = useToast();
  return (
    <button
      type="button"
      aria-label={label}
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(value);
          setCopied(true);
          setTimeout(() => setCopied(false), 1600);
        } catch {
          toast.push("Could not copy — please select the text manually.", "error");
        }
      }}
      className={cx(
        `inline-flex cursor-pointer items-center gap-1.5 rounded-md border border-line2 bg-white/[0.04] px-2 py-1 text-[12px] text-mut transition-colors duration-200 hover:bg-white/[0.08] hover:text-fg ${focusRing}`,
        className,
      )}
    >
      {copied ? <Check className="size-3.5 text-good" aria-hidden="true" /> : <Copy className="size-3.5" aria-hidden="true" />}
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

export function Spinner({ className }: { className?: string }) {
  return (
    <svg className={cx("animate-spin", className)} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.25" strokeWidth="4" />
      <path d="M22 12a10 10 0 0 0-10-10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

export function Badge({ tone = "neutral", children, className }: { tone?: "neutral" | "good" | "warn" | "bad" | "accent" | "free"; children: ReactNode; className?: string }) {
  const tones = {
    neutral: "border-line2 bg-white/[0.06] text-mut",
    good: "border-good/25 bg-good/10 text-good",
    warn: "border-warn/25 bg-warn/10 text-warn",
    bad: "border-bad/25 bg-bad/10 text-bad",
    accent: "border-accent/30 bg-accent/10 text-accent",
    free: "border-accent/30 bg-accent/10 text-accent",
  };
  return <span className={cx("inline-flex items-center gap-1 whitespace-nowrap rounded-md border px-2 py-0.5 text-[11px] font-medium tracking-wide", tones[tone], className)}>{children}</span>;
}

export function Card({ className, children, ...rest }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cx("rounded-xl border border-line bg-panel", className)} {...rest}>
      {children}
    </div>
  );
}

export function Input({ className, label, hint, error, trailing, id, ...rest }: React.InputHTMLAttributes<HTMLInputElement> & { label?: string; hint?: string; error?: string; trailing?: ReactNode }) {
  const autoId = useId();
  const inputId = id ?? autoId;
  const describedBy = error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined;
  return (
    <div className="space-y-1.5">
      {label && (
        <label htmlFor={inputId} className="block text-[13px] font-medium text-mut">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          id={inputId}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          className={cx(
            "h-10 w-full rounded-lg border border-line bg-ink2 px-3 text-sm text-fg placeholder:text-mut2 transition-colors duration-200 focus:border-accent/60 focus:outline-none focus:ring-2 focus:ring-accent/20 disabled:opacity-50",
            error && "border-bad/60",
            trailing ? "pr-11" : null,
            className,
          )}
          {...rest}
        />
        {trailing && <div className="absolute inset-y-0 right-1.5 flex items-center">{trailing}</div>}
      </div>
      {error ? (
        <span id={`${inputId}-error`} className="block text-xs text-bad">
          {error}
        </span>
      ) : hint ? (
        <span id={`${inputId}-hint`} className="block text-xs text-mut2">
          {hint}
        </span>
      ) : null}
    </div>
  );
}

export function Textarea({ className, label, hint, error, id, ...rest }: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label?: string; hint?: string; error?: string }) {
  const autoId = useId();
  const inputId = id ?? autoId;
  return (
    <div className="space-y-1.5">
      {label && (
        <label htmlFor={inputId} className="block text-[13px] font-medium text-mut">
          {label}
        </label>
      )}
      <textarea
        id={inputId}
        aria-invalid={error ? true : undefined}
        className={cx(
          "w-full rounded-lg border border-line bg-ink2 px-3 py-2 text-sm text-fg placeholder:text-mut2 transition-colors duration-200 focus:border-accent/60 focus:outline-none focus:ring-2 focus:ring-accent/20",
          error && "border-bad/60",
          className,
        )}
        {...rest}
      />
      {error ? <span className="block text-xs text-bad">{error}</span> : hint ? <span className="block text-xs text-mut2">{hint}</span> : null}
    </div>
  );
}

export function Select({ className, label, id, children, ...rest }: React.SelectHTMLAttributes<HTMLSelectElement> & { label?: string }) {
  const autoId = useId();
  const selectId = id ?? autoId;
  return (
    <div className="space-y-1.5">
      {label && (
        <label htmlFor={selectId} className="block text-[13px] font-medium text-mut">
          {label}
        </label>
      )}
      <select
        id={selectId}
        className={cx(
          "h-10 w-full cursor-pointer rounded-lg border border-line bg-ink2 px-3 text-sm text-fg transition-colors duration-200 focus:border-accent/60 focus:outline-none focus:ring-2 focus:ring-accent/20",
          className,
        )}
        {...rest}
      >
        {children}
      </select>
    </div>
  );
}

export function Skeleton({ className }: { className?: string }) {
  return <div className={cx("animate-pulse rounded-lg bg-white/[0.05]", className)} aria-hidden="true" />;
}

export function EmptyState({ icon, title, body, action }: { icon?: ReactNode; title: string; body?: string; action?: ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-line2 px-6 py-12 text-center">
      {icon && <div className="mb-3 text-mut2" aria-hidden="true">{icon}</div>}
      <h3 className="text-sm font-semibold text-fg">{title}</h3>
      {body && <p className="mt-1 max-w-sm text-[13px] leading-relaxed text-mut">{body}</p>}
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
}

export function Modal({ open, onClose, title, children, wide }: { open: boolean; onClose: () => void; title?: ReactNode; children: ReactNode; wide?: boolean }) {
  const panelRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  useEffect(() => {
    if (!open) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    panelRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      previouslyFocused?.focus?.();
    };
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-scrim backdrop-blur-xs" onClick={onClose} aria-hidden="true" />
      <div
        ref={panelRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? titleId : undefined}
        className={cx("fade-up relative w-full rounded-2xl border border-line2 bg-panel shadow-xl outline-none", wide ? "max-w-2xl" : "max-w-md")}
      >
        <div className="flex items-center justify-between gap-4 border-b border-line px-5 py-4">
          <div id={titleId} className="text-[15px] font-semibold">
            {title}
          </div>
          <IconButton label="Close dialog" size="sm" onClick={onClose}>
            <X className="size-4" aria-hidden="true" />
          </IconButton>
        </div>
        <div className="px-5 py-5">{children}</div>
      </div>
    </div>
  );
}

type ToastItem = { id: number; message: string; tone: "success" | "error" | "info" };
const ToastCtx = createContext<{ push: (message: string, tone?: ToastItem["tone"]) => void }>({ push: () => {} });
export function useToast() {
  return useContext(ToastCtx);
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const push = useCallback((message: string, tone: ToastItem["tone"] = "info") => {
    const id = Date.now() + Math.random();
    setToasts((t) => [...t.slice(-3), { id, message, tone }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 4200);
  }, []);
  return (
    <ToastCtx.Provider value={{ push }}>
      {children}
      <div className="pointer-events-none fixed bottom-4 right-4 z-[60] flex w-[calc(100vw-2rem)] max-w-sm flex-col gap-2" role="status" aria-live="polite">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={cx(
              "fade-up flex items-start gap-2.5 rounded-lg border px-3.5 py-3 text-[13px] text-fg shadow-lg backdrop-blur",
              t.tone === "success" && "border-good/25 bg-panel2/95",
              t.tone === "error" && "border-bad/30 bg-panel2/95",
              t.tone === "info" && "border-line2 bg-panel2/95",
            )}
          >
            {t.tone === "success" && <CheckCircle2 className="mt-px size-4 shrink-0 text-good" aria-hidden="true" />}
            {t.tone === "error" && <XCircle className="mt-px size-4 shrink-0 text-bad" aria-hidden="true" />}
            {t.tone === "info" && <Info className="mt-px size-4 shrink-0 text-mut" aria-hidden="true" />}
            <span className="leading-snug">{t.message}</span>
          </div>
        ))}
      </div>
    </ToastCtx.Provider>
  );
}
