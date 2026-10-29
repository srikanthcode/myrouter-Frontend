import Link from "next/link";
import { ArrowRight, Check, Gauge, ReceiptText } from "lucide-react";
import { Badge, Card } from "@/components/ui";
import { PaygEstimator } from "@/components/text-reply/PaygEstimator";
import { TEXT_PAYG, TEXT_REPLY_RULES } from "@/components/text-reply/catalog";
import {
  BillingSwitch,
  ModelGrid,
  PreviewNotice,
  SectionHeading,
  TextPageHeading,
  ctaPrimary,
  ctaSecondary,
  ctaSmall,
} from "@/components/text-reply/ui";

export default function TextPaygPage() {
  return (
    <div className="space-y-6">
      <TextPageHeading
        eyebrow="Text & Reply"
        title="Pay for the tokens you use."
        description="One transparent pay-as-you-go rate across all five text models. No monthly subscription and no unused reply allowance."
        actions={<BillingSwitch active="payg" />}
      />

      <PreviewNotice>
        The rates below are preview pricing. Wallet debits and payment-provider billing are not connected in this build,
        so no balance is charged.
      </PreviewNotice>

      <section className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
        <Card className="relative overflow-hidden p-5 sm:p-6">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,197,94,0.09),transparent_58%)]"
          />
          <div className="relative">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <Gauge size={16} className="text-accent" aria-hidden="true" />
                  <p className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-mut2">Pay As You Go</p>
                </div>
                <h2 className="mt-1.5 text-2xl font-semibold tracking-[-0.04em] text-fg">{TEXT_PAYG.name}</h2>
                <p className="mt-1 max-w-md text-[12.5px] leading-relaxed text-mut">{TEXT_PAYG.tagline}</p>
              </div>
              <Badge tone="accent">No monthly fee</Badge>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border border-line bg-ink2 px-4 py-4">
                <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-mut2">Input tokens</p>
                <p className="mt-1.5 text-3xl font-semibold tracking-[-0.045em] text-fg">
                  ${TEXT_PAYG.inputUsdPerMillion.toFixed(2)}
                </p>
                <p className="mt-1 text-[11px] text-mut2">per 1 million billable tokens</p>
              </div>
              <div className="rounded-lg border border-line bg-ink2 px-4 py-4">
                <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-mut2">Output tokens</p>
                <p className="mt-1.5 text-3xl font-semibold tracking-[-0.045em] text-fg">
                  ${TEXT_PAYG.outputUsdPerMillion.toFixed(2)}
                </p>
                <p className="mt-1 text-[11px] text-mut2">per 1 million billable tokens</p>
              </div>
            </div>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {[
                "No monthly subscription",
                "Billed from actual token usage",
                "All five text models included",
                "Failed requests do not use a reply",
                "Balance gates new requests",
                "Estimator uses your assumptions",
              ].map((item) => (
                <li key={item} className="flex gap-2 text-[12px] text-mut">
                  <Check size={14} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Card>

        <Card className="flex flex-col p-5 sm:p-6">
          <div className="flex items-center gap-2">
            <ReceiptText size={16} className="text-accent" aria-hidden="true" />
            <h2 className="text-[13px] font-semibold text-fg">What you are billed for</h2>
          </div>
          <div className="mt-4 space-y-4">
            <div>
              <p className="text-[12px] font-medium text-fg">Input tokens</p>
              <p className="mt-0.5 text-[11.5px] leading-relaxed text-mut">
                The prompt and conversation context sent to the model. Longer context increases input tokens.
              </p>
            </div>
            <div className="border-t border-line pt-3">
              <p className="text-[12px] font-medium text-fg">Output tokens</p>
              <p className="mt-0.5 text-[11.5px] leading-relaxed text-mut">
                The generated answer. Longer answers increase output tokens, which are priced separately.
              </p>
            </div>
            <div className="border-t border-line pt-3">
              <p className="text-[12px] font-medium text-fg">Per completed request</p>
              <p className="mt-0.5 text-[11.5px] leading-relaxed text-mut">
                Each request is charged from its billable token counts. A reply is an access unit; it is not a fixed
                amount of text.
              </p>
            </div>
          </div>
          <Link href="/dashboard/wallet" className={`${ctaSecondary} mt-auto w-full pt-0`}>
            Open wallet
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </Card>
      </section>

      <section className="space-y-4">
        <SectionHeading
          title="Estimate before you spend"
          body="Adjust replies, input tokens, and output tokens to see how the published rates combine."
          action={<span className="font-mono text-[10px] uppercase tracking-[0.14em] text-mut2">Preview calculator</span>}
        />
        <PaygEstimator />
      </section>

      <section className="space-y-4">
        <SectionHeading
          title="How replies are counted"
          body="Billing by token and access by reply are separate. Both rules are shown here before checkout."
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {TEXT_REPLY_RULES.map((rule) => (
            <Card key={rule.title} className="p-4">
              <h3 className="text-[12.5px] font-semibold text-fg">{rule.title}</h3>
              <p className="mt-1.5 text-[11.5px] leading-relaxed text-mut">{rule.body}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <SectionHeading
          title="All five models use the same rates"
          body="Rates do not change by model in this preview. Choose a model for the task, not for a different price."
        />
        <ModelGrid />
      </section>

      <div className="flex flex-col gap-4 rounded-xl border border-line bg-panel px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-[14px] font-semibold text-fg">Prefer a fixed monthly allowance?</h2>
          <p className="mt-1 text-[12px] text-mut">Compare reply allowances from 1,000 to 10,000 per month.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link href="/dashboard/text/plans" className={ctaPrimary}>
            Compare monthly plans
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
          <Link href="/dashboard/text/fair-use" className={ctaSmall}>
            Fair-use policy
          </Link>
        </div>
      </div>
    </div>
  );
}
