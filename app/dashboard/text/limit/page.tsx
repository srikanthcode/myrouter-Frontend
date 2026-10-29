import Link from "next/link";
import { ArrowRight, Check, Clock3, Gauge, TriangleAlert, Zap } from "lucide-react";
import { Badge, Card } from "@/components/ui";
import { TEXT_USAGE, usd } from "@/components/text-reply/catalog";
import {
  PreviewNotice,
  SectionHeading,
  TextPageHeading,
  UsageMeter,
  ctaPrimary,
  ctaSecondary,
  ctaSmall,
} from "@/components/text-reply/ui";

export default function TextLimitPage() {
  return (
    <div className="space-y-6">
      <TextPageHeading
        eyebrow="Text & Reply · Limit preview"
        title="Monthly allowance reached."
        description="This is the 100% state of the usage dashboard. New replies pause until the plan renews, the allowance is upgraded, or billing switches to pay-as-you-go."
        actions={
          <>
            <Link href="/dashboard/text/usage" className={ctaSmall}>
              Back to usage
            </Link>
            <Link href="/dashboard/text/manage" className={ctaSecondary}>
              Manage Subscription
            </Link>
          </>
        }
      />

      <PreviewNotice>
        This limit state is a development fixture. It does not block a live API key, charge an overage fee, or change a
        real subscription.
      </PreviewNotice>

      <section className="relative overflow-hidden rounded-2xl border border-warn/30 bg-warn/[0.045] p-5 sm:p-6">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,158,11,0.08),transparent_55%)]"
        />
        <div className="relative">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="flex items-start gap-3">
              <span className="flex size-10 items-center justify-center rounded-lg border border-warn/25 bg-warn/10 text-warn">
                <TriangleAlert size={19} aria-hidden="true" />
              </span>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-xl font-semibold tracking-[-0.03em] text-fg">0 replies remaining</h2>
                  <Badge tone="warn">100% used</Badge>
                </div>
                <p className="mt-1 text-[12px] leading-relaxed text-mut">
                  {TEXT_USAGE.planName} · {TEXT_USAGE.repliesUsed.toLocaleString()} of {TEXT_USAGE.repliesIncluded.toLocaleString()} replies used this period.
                </p>
              </div>
            </div>
            <Badge tone="warn">Preview data</Badge>
          </div>
          <div className="mt-5 max-w-2xl">
            <UsageMeter used={TEXT_USAGE.repliesIncluded} included={TEXT_USAGE.repliesIncluded} />
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <div className="rounded-lg border border-line bg-ink2 px-3.5 py-3">
              <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-mut2">Plan</p>
              <p className="mt-1 text-[12.5px] font-medium text-fg">{TEXT_USAGE.planName}</p>
            </div>
            <div className="rounded-lg border border-line bg-ink2 px-3.5 py-3">
              <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-mut2">Renews</p>
              <p className="mt-1 text-[12.5px] font-medium text-fg">{TEXT_USAGE.renews}</p>
            </div>
            <div className="rounded-lg border border-line bg-ink2 px-3.5 py-3">
              <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-mut2">Overage charge</p>
              <p className="mt-1 text-[12.5px] font-medium text-fg">$0.00</p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <SectionHeading
          title="Choose what happens next"
          body="Every option states its trade-off. No option silently charges an overage."
        />
        <div className="grid gap-4 lg:grid-cols-3">
          <Card className="flex flex-col border-accent/25 bg-accent/[0.035] p-5">
            <div className="flex items-center justify-between gap-2">
              <span className="flex size-8 items-center justify-center rounded-md border border-accent/25 bg-accent/10 text-accent">
                <Zap size={15} aria-hidden="true" />
              </span>
              <Badge tone="accent">Largest allowance</Badge>
            </div>
            <h3 className="mt-3 text-[14px] font-semibold text-fg">Upgrade to Text Pro</h3>
            <p className="mt-1 text-[11.5px] leading-relaxed text-mut">10,000 replies per month for heavier ongoing use.</p>
            <p className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-fg">
              {usd(19.99)}
              <span className="ml-1 text-[10px] font-normal text-mut2">/ month</span>
            </p>
            <p className="mt-1 text-[10.5px] text-mut2">Proration and exact renewal shown by the provider.</p>
            <Link href="/dashboard/text/checkout?plan=text-pro" className={`${ctaPrimary} mt-auto w-full pt-0`}>
              Upgrade Plan
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </Card>

          <Card className="flex flex-col p-5">
            <div className="flex items-center justify-between gap-2">
              <span className="flex size-8 items-center justify-center rounded-md border border-line2 bg-white/[0.04] text-mut">
                <Gauge size={15} aria-hidden="true" />
              </span>
              <Badge tone="neutral">No monthly fee</Badge>
            </div>
            <h3 className="mt-3 text-[14px] font-semibold text-fg">Switch to pay-as-you-go</h3>
            <p className="mt-1 text-[11.5px] leading-relaxed text-mut">Keep replying with token-based billing instead of a monthly reply cap.</p>
            <p className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-fg">
              $0.50
              <span className="ml-1 text-[10px] font-normal text-mut2">/ 1M input</span>
            </p>
            <p className="mt-1 text-[10.5px] text-mut2">$1.50 per 1M output tokens. Balance gates new requests.</p>
            <Link href="/dashboard/text/payg" className={`${ctaSecondary} mt-auto w-full pt-0`}>
              View pay-as-you-go
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </Card>

          <Card className="flex flex-col p-5">
            <div className="flex items-center justify-between gap-2">
              <span className="flex size-8 items-center justify-center rounded-md border border-line2 bg-white/[0.04] text-mut">
                <Clock3 size={15} aria-hidden="true" />
              </span>
              <Badge tone="neutral">No action</Badge>
            </div>
            <h3 className="mt-3 text-[14px] font-semibold text-fg">Wait for renewal</h3>
            <p className="mt-1 text-[11.5px] leading-relaxed text-mut">The allowance resets at the start of the next billing period.</p>
            <p className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-fg">1 Nov 2026</p>
            <p className="mt-1 text-[10.5px] text-mut2">Preview renewal date for the Text Plus fixture.</p>
            <Link href="/dashboard/text/manage" className={`${ctaSecondary} mt-auto w-full pt-0`}>
              Review subscription
            </Link>
          </Card>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <Card className="p-5">
          <h2 className="text-[13px] font-semibold text-fg">What still works</h2>
          <ul className="mt-3 space-y-2.5">
            {[
              "You can review usage, tokens, and recent requests.",
              "You can change plans or switch to pay-as-you-go.",
              "You can manage or cancel the subscription.",
              "Failed requests still do not consume a reply.",
            ].map((item) => (
              <li key={item} className="flex gap-2 text-[11.5px] leading-relaxed text-mut">
                <Check size={14} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </Card>
        <Card className="p-5">
          <h2 className="text-[13px] font-semibold text-fg">What stops</h2>
          <ul className="mt-3 space-y-2.5">
            {[
              "New requests that need a monthly-plan reply.",
              "Any additional automatic overage charge.",
              "Any silent downgrade to a slower model.",
              "Any promise that the allowance is unlimited.",
            ].map((item) => (
              <li key={item} className="flex gap-2 text-[11.5px] leading-relaxed text-mut">
                <span className="mt-1.5 size-1 shrink-0 rounded-full bg-warn" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 border-t border-line pt-3 text-[10.5px] leading-relaxed text-mut2">
            The API response for a real allowance limit must identify the limit and the next allowed action. This
            frontend preview does not emit API errors.
          </p>
        </Card>
      </section>
    </div>
  );
}
