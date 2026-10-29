import Link from "next/link";
import { ArrowRight, Check, Infinity as InfinityIcon, ShieldCheck } from "lucide-react";
import { Badge, Card } from "@/components/ui";
import { TEXT_COMPARISON, TEXT_PLANS, TEXT_REPLY_RULES } from "@/components/text-reply/catalog";
import {
  BillingSwitch,
  PlanCard,
  PreviewNotice,
  SectionHeading,
  TextPageHeading,
  ctaPrimary,
  ctaSecondary,
  ctaSmall,
} from "@/components/text-reply/ui";

export default function TextPlansPage() {
  return (
    <div className="space-y-6">
      <TextPageHeading
        eyebrow="Text & Reply"
        title="Monthly plans with visible allowances."
        description="Choose a reply allowance for regular use. Every card states what is included and what happens at the limit before checkout."
        actions={<BillingSwitch active="plans" />}
      />

      <PreviewNotice>
        Plan prices, allowances, and checkout are a frontend preview. No subscription is created and no payment is
        collected. Text Unlimited is shown for comparison only and is not for sale.
      </PreviewNotice>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {TEXT_PLANS.map((plan) => (
          <PlanCard key={plan.id} plan={plan} />
        ))}
      </section>

      <div className="flex flex-col gap-3 rounded-xl border border-warn/20 bg-warn/[0.045] px-4 py-3.5 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-start gap-2 text-[12px] leading-relaxed text-mut">
          <ShieldCheck size={15} className="mt-0.5 shrink-0 text-warn" aria-hidden="true" />
          Text Unlimited cannot be purchased. Fair-use, concurrency, and capacity limits must be published first.
        </p>
        <Link href="/dashboard/text/fair-use" className={ctaSmall}>
          View fair-use policy
        </Link>
      </div>

      <section className="space-y-4">
        <SectionHeading title="Compare the two billing models" body="A side-by-side view of commitment, limits, and what the usage screen reports." />
        <Card className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[680px] text-left">
              <thead>
                <tr className="border-b border-line bg-white/[0.02] text-[10px] uppercase tracking-[0.14em] text-mut2">
                  <th className="px-4 py-3 font-medium sm:px-5">Detail</th>
                  <th className="px-4 py-3 font-medium">Pay As You Go</th>
                  <th className="px-4 py-3 font-medium">Monthly Plans</th>
                </tr>
              </thead>
              <tbody>
                {TEXT_COMPARISON.map((row) => (
                  <tr key={row.label} className="border-b border-line/70 last:border-0">
                    <td className="px-4 py-3 text-[12px] font-medium text-fg sm:px-5">{row.label}</td>
                    <td className="px-4 py-3 text-[12px] text-mut">{row.payg}</td>
                    <td className="px-4 py-3 text-[12px] text-mut">{row.monthly}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </section>

      <section className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <SectionHeading title="What a plan covers" body="The allowance tracks completed replies. Token consumption still varies by request." />
          <div className="grid gap-3 sm:grid-cols-2">
            {TEXT_REPLY_RULES.slice(0, 4).map((rule) => (
              <Card key={rule.title} className="p-4">
                <h3 className="text-[12.5px] font-semibold text-fg">{rule.title}</h3>
                <p className="mt-1.5 text-[11.5px] leading-relaxed text-mut">{rule.body}</p>
              </Card>
            ))}
          </div>
        </div>
        <div className="space-y-3">
          <SectionHeading title="At the limit" body="No surprise overage in this preview." />
          <Card className="p-4">
            <ul className="space-y-3">
              {[
                "Requests that need a reply stop when the allowance is exhausted.",
                "Upgrade to a larger allowance or switch to pay-as-you-go.",
                "Wait for the next renewal date shown on the usage screen.",
                "Failed requests do not consume a reply.",
                "No silent throttle, downgrade, or overage charge.",
              ].map((item) => (
                <li key={item} className="flex gap-2 text-[12px] leading-relaxed text-mut">
                  <Check size={14} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/dashboard/text/limit" className={`${ctaSmall} mt-4`}>
              Preview the limit state
            </Link>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-2">
              <InfinityIcon size={16} className="text-mut2" aria-hidden="true" />
              <h3 className="text-[12.5px] font-semibold text-fg">Text Unlimited</h3>
              <Badge tone="warn">Not for sale</Badge>
            </div>
            <p className="mt-1.5 text-[11.5px] leading-relaxed text-mut">
              The $29.99 preview tier is not purchasable. Unlimited access will only be offered after maximum output,
              rate limits, concurrency, abuse detection, and capacity controls are documented.
            </p>
            <Link href="/dashboard/text/fair-use" className={`${ctaSecondary} mt-3 w-full`}>
              Read the requirements
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </Card>
        </div>
      </section>

      <div className="flex flex-col gap-4 rounded-xl border border-line bg-panel px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-[14px] font-semibold text-fg">Usage varies too much for a monthly allowance?</h2>
          <p className="mt-1 text-[12px] text-mut">Stay on token-based billing with no monthly commitment.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link href="/dashboard/text/payg" className={ctaPrimary}>
            View pay-as-you-go
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
          <Link href="/dashboard/text/usage" className={ctaSmall}>
            See usage snapshot
          </Link>
        </div>
      </div>
    </div>
  );
}
