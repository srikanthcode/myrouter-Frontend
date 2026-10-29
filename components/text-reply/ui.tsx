import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, Check, ChevronDown, Clock3, Info, ShieldCheck } from "lucide-react";
import { Badge, Card } from "@/components/ui";
import {
  TEXT_FAQS,
  TEXT_MODELS,
  TEXT_RECENT_REPLIES,
  TEXT_USAGE,
  TEXT_USAGE_DAYS,
  compact,
  usd,
  type MonthlyPlan,
  type RecentReply,
  type UsageDay,
} from "@/components/text-reply/catalog";

export const ctaPrimary =
  "inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-accent px-4 text-[13px] font-medium text-accent-ink transition-colors hover:bg-accent2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export const ctaSecondary =
  "inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-line2 bg-white/[0.03] px-4 text-[13px] font-medium text-fg transition-colors hover:bg-white/[0.07] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export const ctaGhost =
  "inline-flex h-10 items-center justify-center gap-2 rounded-lg px-3 text-[13px] font-medium text-mut transition-colors hover:bg-white/[0.05] hover:text-fg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export const ctaSmall =
  "inline-flex h-8 items-center justify-center gap-1.5 rounded-md border border-line2 bg-white/[0.03] px-3 text-[12px] font-medium text-fg transition-colors hover:bg-white/[0.07] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export function TextPageHeading({
  eyebrow,
  title,
  description,
  actions,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  actions?: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
      <div className="max-w-2xl">
        {eyebrow ? (
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-mut2">{eyebrow}</p>
        ) : null}
        <h1 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-fg sm:text-4xl">{title}</h1>
        <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-mut">{description}</p>
      </div>
      {actions ? <div className="flex shrink-0 flex-wrap items-center gap-2">{actions}</div> : null}
    </div>
  );
}

export function BillingSwitch({ active }: { active: "payg" | "plans" }) {
  return (
    <div
      role="group"
      aria-label="Billing model"
      className="inline-flex rounded-lg border border-line bg-ink2 p-0.5"
    >
      <Link
        href="/dashboard/text/payg"
        aria-current={active === "payg" ? "page" : undefined}
        className={`inline-flex h-8 items-center rounded-md px-3 text-[12px] font-medium transition-colors ${
          active === "payg" ? "bg-panel2 text-fg" : "text-mut hover:text-fg"
        }`}
      >
        Pay As You Go
      </Link>
      <Link
        href="/dashboard/text/plans"
        aria-current={active === "plans" ? "page" : undefined}
        className={`inline-flex h-8 items-center rounded-md px-3 text-[12px] font-medium transition-colors ${
          active === "plans" ? "bg-panel2 text-fg" : "text-mut hover:text-fg"
        }`}
      >
        Monthly Plans
      </Link>
    </div>
  );
}

export function PreviewNotice({ children }: { children: ReactNode }) {
  return (
    <div className="flex gap-2.5 rounded-lg border border-line bg-white/[0.025] px-3.5 py-3 text-[12.5px] leading-relaxed text-mut">
      <Info size={15} className="mt-0.5 shrink-0 text-mut2" aria-hidden="true" />
      <p>{children}</p>
    </div>
  );
}

export function SectionHeading({
  title,
  body,
  action,
}: {
  title: string;
  body?: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h2 className="text-xl font-semibold tracking-[-0.025em] text-fg">{title}</h2>
        {body ? <p className="mt-1.5 max-w-xl text-[13px] leading-relaxed text-mut">{body}</p> : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}

export function ModelGrid() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {TEXT_MODELS.map((model, index) => (
        <Card key={model.id} className="flex flex-col p-4">
          <div className="flex items-center justify-between gap-2">
            <span className="font-mono text-[10px] tracking-[0.16em] text-mut2">
              {String(index + 1).padStart(2, "0")}
            </span>
            <Badge tone="neutral">{model.tier}</Badge>
          </div>
          <h3 className="mt-3 text-[13.5px] font-semibold text-fg">{model.name}</h3>
          <p className="mt-1.5 flex-1 text-[12px] leading-relaxed text-mut">{model.description}</p>
          <p className="mt-3 border-t border-line pt-2.5 text-[11px] text-mut2">{model.bestFor}</p>
        </Card>
      ))}
    </div>
  );
}

export function PlanCard({ plan }: { plan: MonthlyPlan }) {
  const waitlist = plan.status === "waitlist";
  return (
    <Card
      className={`relative flex h-full flex-col p-5 ${
        plan.popular ? "border-accent/35 bg-accent/[0.035]" : ""
      }`}
    >
      {plan.popular ? (
        <span className="absolute -top-2.5 left-4 rounded-full border border-accent/30 bg-ink px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em] text-accent">
          Most popular
        </span>
      ) : null}
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="text-[15px] font-semibold text-fg">{plan.name}</h3>
          <p className="mt-1 text-[12px] leading-relaxed text-mut">{plan.tagline}</p>
        </div>
        {waitlist ? <Badge tone="warn">Not for sale</Badge> : <Badge tone="neutral">Preview</Badge>}
      </div>
      <div className="mt-5 flex items-baseline gap-1.5">
        <span className="text-3xl font-semibold tracking-[-0.045em] text-fg">{usd(plan.priceUsd)}</span>
        <span className="text-[11px] text-mut2">/ month</span>
      </div>
      <p className="mt-1 text-[11.5px] text-mut2">
        {plan.replies === null ? "Reply limits defined by fair use" : `${plan.replies.toLocaleString()} replies included`}
      </p>
      <ul className="mt-4 space-y-2.5">
        {plan.features.map((feature) => (
          <li key={feature} className="flex gap-2 text-[12px] leading-relaxed text-mut">
            <Check size={14} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-5">
        <Link
          href={waitlist ? "/dashboard/text/fair-use" : `/dashboard/text/checkout?plan=${plan.id}`}
          className={`${waitlist ? ctaSecondary : plan.popular ? ctaPrimary : ctaSecondary} w-full`}
          aria-label={waitlist ? "View fair-use policy" : `Choose ${plan.name}`}
        >
          {waitlist ? "View fair-use policy" : "Choose Plan"}
          <ArrowRight size={14} aria-hidden="true" />
        </Link>
        {waitlist ? (
          <p className="mt-2 text-[10.5px] leading-relaxed text-mut2">
            Unlimited access will not be offered until its limits are published.
          </p>
        ) : null}
      </div>
    </Card>
  );
}

export function UsageMeter({ used, included }: { used: number; included: number }) {
  const pct = Math.min(100, Math.max(0, (used / included) * 100));
  const tone = pct >= 100 ? "bg-bad" : pct >= 80 ? "bg-warn" : "bg-accent";
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <p className="text-[12px] text-mut">
          <span className="font-medium text-fg">{used.toLocaleString()}</span> of {included.toLocaleString()} replies used
        </p>
        <p className="font-mono text-[11px] text-mut2">{pct.toFixed(1)}%</p>
      </div>
      <div
        className="mt-2 h-2 overflow-hidden rounded-full bg-white/[0.06]"
        role="progressbar"
        aria-label="Monthly replies used"
        aria-valuemin={0}
        aria-valuemax={included}
        aria-valuenow={used}
      >
        <div className={`h-full rounded-full ${tone}`} style={{ width: `${pct}%` }} />
      </div>
      <div className="mt-2 flex justify-between text-[10.5px] text-mut2">
        <span>{Math.max(0, included - used).toLocaleString()} remaining</span>
        <span>Resets {TEXT_USAGE.renews}</span>
      </div>
    </div>
  );
}

function dayLabel(date: string): string {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${Number(date.slice(8, 10))} ${months[Number(date.slice(5, 7)) - 1]}`;
}

export function ReplyChart({ days = TEXT_USAGE_DAYS }: { days?: UsageDay[] }) {
  const max = Math.max(...days.map((day) => day.replies), 1);
  const total = days.reduce((sum, day) => sum + day.replies, 0);
  return (
    <Card className="p-4 sm:p-5">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <h3 className="text-[13px] font-semibold text-fg">Replies per day</h3>
          <p className="mt-0.5 text-[11px] text-mut2">Last {days.length} days · {total.toLocaleString()} replies</p>
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-mut2">Preview data</span>
      </div>
      <div className="mt-5 flex h-40 items-end gap-1.5" aria-label={`Daily replies: ${days.map((day) => `${dayLabel(day.date)} ${day.replies}`).join(", ")}`}>
        {days.map((day, index) => (
          <div key={day.date} className="group relative flex h-full flex-1 items-end">
            <div
              className={`w-full rounded-sm transition-colors ${
                index === days.length - 1 ? "bg-accent" : "bg-accent/30 group-hover:bg-accent/60"
              }`}
              style={{ height: `${Math.max(5, (day.replies / max) * 100)}%` }}
              title={`${dayLabel(day.date)}: ${day.replies} replies`}
            />
          </div>
        ))}
      </div>
      <div className="mt-2 flex justify-between text-[10px] text-mut2">
        <span>{dayLabel(days[0].date)}</span>
        <span>{dayLabel(days[Math.floor(days.length / 2)].date)}</span>
        <span>{dayLabel(days[days.length - 1].date)}</span>
      </div>
      <ul className="sr-only">
        {days.map((day) => (
          <li key={day.date}>{dayLabel(day.date)}: {day.replies} replies</li>
        ))}
      </ul>
    </Card>
  );
}

export function RecentRepliesTable({ replies = TEXT_RECENT_REPLIES }: { replies?: RecentReply[] }) {
  return (
    <Card className="overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line px-4 py-3.5 sm:px-5">
        <div>
          <h3 className="text-[13px] font-semibold text-fg">Recent requests</h3>
          <p className="mt-0.5 text-[11px] text-mut2">A completed response counts as one reply.</p>
        </div>
        <Badge tone="neutral">Preview data</Badge>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-left">
          <thead>
            <tr className="border-b border-line text-[10px] uppercase tracking-[0.14em] text-mut2">
              <th className="px-4 py-2.5 font-medium sm:px-5">Request</th>
              <th className="px-3 py-2.5 font-medium">Model</th>
              <th className="px-3 py-2.5 font-medium">Input</th>
              <th className="px-3 py-2.5 font-medium">Output</th>
              <th className="px-3 py-2.5 font-medium">Replies</th>
              <th className="px-4 py-2.5 text-right font-medium sm:px-5">Status</th>
            </tr>
          </thead>
          <tbody>
            {replies.map((reply) => (
              <tr key={reply.id} className="border-b border-line/70 last:border-0">
                <td className="px-4 py-3 sm:px-5">
                  <p className="font-mono text-[11px] text-fg">{reply.id}</p>
                  <p className="mt-0.5 text-[10.5px] text-mut2">{reply.at}</p>
                </td>
                <td className="px-3 py-3 font-mono text-[11px] text-mut">{reply.model}</td>
                <td className="px-3 py-3 font-mono text-[11px] text-mut">{compact(reply.inputTokens)}</td>
                <td className="px-3 py-3 font-mono text-[11px] text-mut">
                  {reply.outputTokens === 0 ? "—" : compact(reply.outputTokens)}
                </td>
                <td className={`px-3 py-3 font-mono text-[11px] ${reply.replies ? "text-fg" : "text-mut2"}`}>
                  {reply.replies}
                </td>
                <td className="px-4 py-3 text-right sm:px-5">
                  <Badge tone={reply.status === "completed" ? "good" : "bad"}>
                    {reply.status === "completed" ? "Completed" : "Failed"}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="border-t border-line px-4 py-3 text-[10.5px] text-mut2 sm:px-5">
        Failed requests are shown for transparency and are not deducted from the reply allowance.
      </p>
    </Card>
  );
}

export function FaqList() {
  return (
    <div className="divide-y divide-line rounded-xl border border-line bg-panel">
      {TEXT_FAQS.map((faq) => (
        <details key={faq.q} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-3.5 text-[13px] font-medium text-fg [&::-webkit-details-marker]:hidden">
            {faq.q}
            <ChevronDown size={15} className="shrink-0 text-mut2 transition-transform group-open:rotate-180" aria-hidden="true" />
          </summary>
          <p className="px-4 pb-4 pr-10 text-[12.5px] leading-relaxed text-mut">{faq.a}</p>
        </details>
      ))}
    </div>
  );
}

export function TextStat({
  label,
  value,
  detail,
  icon,
}: {
  label: string;
  value: string;
  detail?: string;
  icon?: ReactNode;
}) {
  return (
    <Card className="p-4">
      <div className="flex items-start justify-between gap-2">
        <p className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-mut2">{label}</p>
        {icon ? <span className="text-mut2" aria-hidden="true">{icon}</span> : null}
      </div>
      <p className="mt-2 text-xl font-semibold tracking-[-0.03em] text-fg">{value}</p>
      {detail ? <p className="mt-1 text-[11px] text-mut2">{detail}</p> : null}
    </Card>
  );
}

export function PolicyRow({
  title,
  body,
  pending,
}: {
  title: string;
  body: string;
  pending?: string;
}) {
  return (
    <div className="flex gap-3 border-b border-line py-4 last:border-0">
      <ShieldCheck size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-[13px] font-medium text-fg">{title}</h3>
          {pending ? (
            <span className="inline-flex items-center gap-1 rounded-full border border-warn/25 bg-warn/10 px-2 py-0.5 text-[9.5px] font-medium text-warn">
              <Clock3 size={10} aria-hidden="true" />
              {pending}
            </span>
          ) : null}
        </div>
        <p className="mt-1 text-[12px] leading-relaxed text-mut">{body}</p>
      </div>
    </div>
  );
}
