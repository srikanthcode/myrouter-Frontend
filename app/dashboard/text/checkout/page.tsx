import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, CreditCard, LockKeyhole, ShieldCheck, TriangleAlert } from "lucide-react";
import { Badge, Button, Card } from "@/components/ui";
import { TEXT_PAYG, planById, usd } from "@/components/text-reply/catalog";
import {
  PreviewNotice,
  SectionHeading,
  TextPageHeading,
  ctaSecondary,
  ctaSmall,
} from "@/components/text-reply/ui";

export const metadata: Metadata = {
  title: "Checkout",
};

export default async function TextCheckoutPage({
  searchParams,
}: {
  searchParams: Promise<{ plan?: string }>;
}) {
  const params = await searchParams;
  const plan = planById(params.plan);
  const waitlist = plan.status === "waitlist";

  return (
    <div className="space-y-6">
      <TextPageHeading
        eyebrow="Text & Reply · Checkout preview"
        title="Review your plan."
        description="Confirm the allowance, renewal, and total before any payment step. This preview stops before payment because no provider is connected."
        actions={
          <Link href="/dashboard/text/plans" className={ctaSmall}>
            Back to plans
          </Link>
        }
      />

      <PreviewNotice>
        No payment provider is connected. The confirmation button is disabled, no card is charged, and no subscription
        is created by this screen.
      </PreviewNotice>

      {waitlist ? (
        <div className="flex flex-col gap-3 rounded-xl border border-warn/25 bg-warn/[0.045] px-4 py-3.5 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-start gap-2 text-[12px] leading-relaxed text-mut">
            <TriangleAlert size={15} className="mt-0.5 shrink-0 text-warn" aria-hidden="true" />
            {plan.name} is not for sale. Its fair-use and capacity limits are not published, so checkout cannot proceed.
          </p>
          <Link href="/dashboard/text/fair-use" className={ctaSmall}>
            Read the fair-use policy
          </Link>
        </div>
      ) : null}

      <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
        <Card className="p-5 sm:p-6">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-mut2">Order summary</p>
              <h2 className="mt-1 text-xl font-semibold tracking-[-0.03em] text-fg">{plan.name}</h2>
              <p className="mt-1 text-[11.5px] text-mut2">{plan.tagline}</p>
            </div>
            <Badge tone={waitlist ? "warn" : "neutral"}>{waitlist ? "Not for sale" : "Preview"}</Badge>
          </div>

          <div className="mt-5 flex items-baseline gap-1.5 border-y border-line py-4">
            <span className="text-3xl font-semibold tracking-[-0.045em] text-fg">{usd(plan.priceUsd)}</span>
            <span className="text-[11px] text-mut2">/ month</span>
          </div>

          <dl className="space-y-3 py-4 text-[12px]">
            <div className="flex items-start justify-between gap-4">
              <dt className="text-mut">Reply allowance</dt>
              <dd className="text-right font-medium text-fg">
                {plan.replies === null ? "Set by fair use (not published)" : `${plan.replies.toLocaleString()} replies / month`}
              </dd>
            </div>
            <div className="flex items-start justify-between gap-4">
              <dt className="text-mut">Renewal</dt>
              <dd className="text-right font-medium text-fg">Monthly · cancels at period end</dd>
            </div>
            <div className="flex items-start justify-between gap-4">
              <dt className="text-mut">Tax</dt>
              <dd className="text-right font-medium text-fg">Calculated by the provider</dd>
            </div>
            <div className="flex items-start justify-between gap-4">
              <dt className="text-mut">Due today</dt>
              <dd className="text-right font-medium text-fg">{usd(plan.priceUsd)}</dd>
            </div>
            <div className="flex items-start justify-between gap-4 border-t border-line pt-3">
              <dt className="font-medium text-fg">Total (preview)</dt>
              <dd className="text-right text-base font-semibold text-fg">{usd(plan.priceUsd)}</dd>
            </div>
          </dl>

          <div className="rounded-lg border border-line bg-ink2 px-3.5 py-3">
            <p className="text-[11px] leading-relaxed text-mut2">
              Token usage still varies by request. A reply is an access allowance, not a fixed amount of text. Failed
              requests do not consume a reply.
            </p>
          </div>

          <ul className="mt-4 space-y-2">
            {plan.features.map((feature) => (
              <li key={feature} className="flex gap-2 text-[12px] text-mut">
                <Check size={14} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>
        </Card>

        <div className="space-y-4">
          <Card className="p-5 sm:p-6">
            <div className="flex items-center gap-2">
              <CreditCard size={16} className="text-mut2" aria-hidden="true" />
              <h2 className="text-[13px] font-semibold text-fg">Payment method</h2>
            </div>
            <div className="mt-3 flex items-center justify-between gap-3 rounded-lg border border-dashed border-line2 bg-white/[0.02] px-3.5 py-3.5">
              <div>
                <p className="text-[12.5px] font-medium text-fg">No provider connected</p>
                <p className="mt-0.5 text-[11px] text-mut2">Card and local payment methods will appear here.</p>
              </div>
              <LockKeyhole size={17} className="shrink-0 text-mut2" aria-hidden="true" />
            </div>
            <div className="mt-4 space-y-2.5">
              <div className="flex items-center justify-between gap-3 text-[11.5px]">
                <span className="text-mut">Billing status</span>
                <Badge tone="warn">Preview only</Badge>
              </div>
              <div className="flex items-center justify-between gap-3 text-[11.5px]">
                <span className="text-mut">Charge today</span>
                <span className="font-medium text-fg">$0.00</span>
              </div>
              <div className="flex items-center justify-between gap-3 text-[11.5px]">
                <span className="text-mut">Subscription created</span>
                <span className="font-medium text-fg">No</span>
              </div>
            </div>
            <Button className="mt-5 w-full" disabled aria-describedby="checkout-unavailable">
              Confirm subscription — unavailable
            </Button>
            <p id="checkout-unavailable" className="mt-2 text-center text-[10.5px] leading-relaxed text-mut2">
              Checkout is disabled until a payment provider confirms charges and subscription state.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              <Link href="/dashboard/text/manage" className={ctaSmall}>
                Preview management
              </Link>
              <Link href="/dashboard/wallet" className={ctaSmall}>
                Add Balance instead
              </Link>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-2">
              <ShieldCheck size={15} className="text-accent" aria-hidden="true" />
              <h2 className="text-[12.5px] font-semibold text-fg">What activates after payment</h2>
            </div>
            <ol className="mt-3 space-y-2.5">
              {[
                "Provider confirms the charge and subscription.",
                "The reply allowance becomes active for the period.",
                "Usage tracking starts from the confirmed renewal date.",
              ].map((item, index) => (
                <li key={item} className="flex gap-2 text-[11.5px] leading-relaxed text-mut">
                  <span className="flex size-4 shrink-0 items-center justify-center rounded-sm border border-line2 font-mono text-[9px] text-mut2">
                    {index + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ol>
            <p className="mt-3 border-t border-line pt-3 text-[10.5px] leading-relaxed text-mut2">
              Need token-based billing instead? Pay-as-you-go starts at ${TEXT_PAYG.inputUsdPerMillion.toFixed(2)} per 1M
              input tokens with no monthly fee.
            </p>
            <Link href="/dashboard/text/payg" className={`${ctaSecondary} mt-3 w-full`}>
              Compare pay-as-you-go
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </Card>
        </div>
      </div>

      <section className="space-y-3">
        <SectionHeading title="Before you confirm" body="These rules apply to the preview and will remain visible when billing is connected." />
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            { title: "No hidden allowance", body: "The reply allowance and renewal date are shown before checkout." },
            { title: "No silent overage", body: "At the limit, new replies stop until renewal, upgrade, or a switch to PAYG." },
            { title: "No fake success", body: "A confirmation appears only after a provider confirms the charge and subscription." },
          ].map((item) => (
            <Card key={item.title} className="p-4">
              <h3 className="text-[12.5px] font-semibold text-fg">{item.title}</h3>
              <p className="mt-1.5 text-[11.5px] leading-relaxed text-mut">{item.body}</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
