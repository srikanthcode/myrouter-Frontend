import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, CreditCard, Gauge, MessagesSquare, ShieldCheck } from "lucide-react";
import { Badge, Card } from "@/components/ui";
import {
  TEXT_BENEFITS,
  TEXT_PAYG,
  TEXT_PLANS,
  TEXT_STEPS,
  TEXT_USAGE,
  compact,
  usd,
} from "@/components/text-reply/catalog";
import {
  FaqList,
  ModelGrid,
  PreviewNotice,
  SectionHeading,
  UsageMeter,
  ctaPrimary,
  ctaSecondary,
  ctaSmall,
} from "@/components/text-reply/ui";

export const metadata: Metadata = {
  title: "Text & Reply",
  description: "Affordable AI conversations with pay-as-you-go pricing, monthly reply plans, and a unified API.",
};

export default function TextReplyPage() {
  const remaining = Math.max(0, TEXT_USAGE.repliesIncluded - TEXT_USAGE.repliesUsed);
  return (
    <div className="space-y-6">
      <section className="relative overflow-hidden rounded-2xl border border-line bg-panel px-5 py-8 sm:px-8 sm:py-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,197,94,0.10),transparent_55%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.02))] lg:block"
        />
        <div className="relative max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/[0.07] px-3 py-1 font-mono text-[9.5px] uppercase tracking-[0.16em] text-accent">
            <MessagesSquare size={12} aria-hidden="true" />
            AI Text &amp; Reply
          </div>
          <h1 className="mt-5 text-4xl font-semibold tracking-[-0.055em] text-fg sm:text-5xl">
            AI Text &amp; Reply
          </h1>
          <p className="mt-3 text-lg font-medium tracking-[-0.02em] text-fg sm:text-xl">
            Affordable AI conversations. Simple pricing. One unified API.
          </p>
          <p className="mt-3 max-w-xl text-[13.5px] leading-relaxed text-mut">
            Five text models for everyday answers, support, writing, and detailed work. Pay for tokens as you go, or
            choose a monthly reply allowance with the numbers shown up front.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-2.5">
            <Link href="/dashboard/text/plans" className={ctaPrimary}>
              Choose Plan
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
            <Link href="/dashboard/text/payg" className={ctaSecondary}>
              View pay-as-you-go
            </Link>
            <Link href="/dashboard/text/usage" className={ctaSmall}>
              See usage
            </Link>
          </div>
          <p className="mt-4 text-[11px] text-mut2">
            Pricing preview · No payment provider is connected · Development fixtures are labeled
          </p>
        </div>
        <div className="relative mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-4">
          {[
            { label: "Text models", value: "5" },
            { label: "PAYG input", value: `$${TEXT_PAYG.inputUsdPerMillion.toFixed(2)}`, suffix: "/ 1M" },
            { label: "PAYG output", value: `$${TEXT_PAYG.outputUsdPerMillion.toFixed(2)}`, suffix: "/ 1M" },
            { label: "Monthly from", value: usd(TEXT_PLANS[0].priceUsd), suffix: "/ mo" },
          ].map((stat) => (
            <div key={stat.label} className="bg-ink2/80 px-4 py-3.5">
              <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-mut2">{stat.label}</p>
              <p className="mt-1.5 text-lg font-semibold tracking-[-0.03em] text-fg">
                {stat.value}
                {stat.suffix ? <span className="ml-1 text-[10px] font-normal text-mut2">{stat.suffix}</span> : null}
              </p>
            </div>
          ))}
        </div>
      </section>

      <PreviewNotice>
        This Text &amp; Reply experience is a frontend preview. Prices and usage figures are development fixtures, not a
        live quote. Checkout, balance changes, and subscription updates are disabled until billing is connected.
      </PreviewNotice>

      <section className="space-y-4">
        <SectionHeading
          title="Choose how you pay"
          body="Use token-based billing when usage varies, or pick a monthly allowance when you want a steadier number."
        />
        <div className="grid gap-4 lg:grid-cols-2">
          <Card className="flex flex-col p-5 sm:p-6">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <span className="flex size-9 items-center justify-center rounded-lg border border-line2 bg-white/[0.04] text-accent">
                  <Gauge size={17} aria-hidden="true" />
                </span>
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-mut2">Pay As You Go</p>
                  <h3 className="mt-0.5 text-[15px] font-semibold text-fg">{TEXT_PAYG.name}</h3>
                </div>
              </div>
              <Badge tone="accent">No monthly fee</Badge>
            </div>
            <p className="mt-4 text-[12.5px] leading-relaxed text-mut">
              Pay for billable input and output tokens across all five text models. No subscription, no unused reply
              allowance.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-lg border border-line bg-ink2 px-3.5 py-3">
                <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-mut2">Input</p>
                <p className="mt-1 text-xl font-semibold tracking-[-0.03em] text-fg">
                  ${TEXT_PAYG.inputUsdPerMillion.toFixed(2)}
                  <span className="ml-1 text-[10px] font-normal text-mut2">/ 1M tokens</span>
                </p>
              </div>
              <div className="rounded-lg border border-line bg-ink2 px-3.5 py-3">
                <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-mut2">Output</p>
                <p className="mt-1 text-xl font-semibold tracking-[-0.03em] text-fg">
                  ${TEXT_PAYG.outputUsdPerMillion.toFixed(2)}
                  <span className="ml-1 text-[10px] font-normal text-mut2">/ 1M tokens</span>
                </p>
              </div>
            </div>
            <ul className="mt-4 space-y-2">
              {["Price follows actual billable tokens", "Estimate cost before you spend", "Failed requests do not consume replies"].map(
                (item) => (
                  <li key={item} className="flex gap-2 text-[12px] text-mut">
                    <Check size={14} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                    {item}
                  </li>
                ),
              )}
            </ul>
            <div className="mt-auto pt-5">
              <Link href="/dashboard/text/payg" className={`${ctaSecondary} w-full sm:w-auto`}>
                View pay-as-you-go
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </Card>

          <Card className="flex flex-col border-accent/25 bg-accent/[0.035] p-5 sm:p-6">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <span className="flex size-9 items-center justify-center rounded-lg border border-accent/25 bg-accent/10 text-accent">
                  <CreditCard size={17} aria-hidden="true" />
                </span>
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-mut2">Monthly Plans</p>
                  <h3 className="mt-0.5 text-[15px] font-semibold text-fg">A reply allowance you can see</h3>
                </div>
              </div>
              <Badge tone="accent">Most chosen</Badge>
            </div>
            <p className="mt-4 text-[12.5px] leading-relaxed text-mut">
              Pick a monthly reply allowance from 1,000 to 10,000 replies. Each plan shows its allowance and limit
              behavior before checkout.
            </p>
            <div className="mt-4 flex items-baseline gap-1.5">
              <span className="text-3xl font-semibold tracking-[-0.045em] text-fg">{usd(4.99)}</span>
              <span className="text-[11px] text-mut2">/ month</span>
            </div>
            <p className="mt-1 text-[11px] text-mut2">Text Mini · 1,000 replies included</p>
            <ul className="mt-4 space-y-2">
              {["Monthly allowance with a visible reset date", "Upgrade, downgrade, or switch to PAYG", "Failed requests do not use a reply"].map(
                (item) => (
                  <li key={item} className="flex gap-2 text-[12px] text-mut">
                    <Check size={14} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                    {item}
                  </li>
                ),
              )}
            </ul>
            <div className="mt-auto pt-5">
              <Link href="/dashboard/text/plans" className={`${ctaPrimary} w-full sm:w-auto`}>
                Compare monthly plans
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <SectionHeading
          title="Five text models, one interface"
          body="Choose the smallest model that fits the task, or route between them through the same API."
          action={<Link href="/models" className={ctaSmall}>Browse all models</Link>}
        />
        <ModelGrid />
      </section>

      <section className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
        <Card className="p-5 sm:p-6">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-mut2">Usage snapshot</p>
              <h2 className="mt-1 text-lg font-semibold tracking-[-0.025em] text-fg">{TEXT_USAGE.planName}</h2>
              <p className="mt-0.5 text-[11.5px] text-mut2">{TEXT_USAGE.status} · Renews {TEXT_USAGE.renews}</p>
            </div>
            <Badge tone="warn">Preview data</Badge>
          </div>
          <div className="mt-5">
            <UsageMeter used={TEXT_USAGE.repliesUsed} included={TEXT_USAGE.repliesIncluded} />
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3 border-t border-line pt-4 sm:grid-cols-4">
            {[
              { label: "Remaining", value: `${remaining.toLocaleString()} replies` },
              { label: "Input tokens", value: compact(TEXT_USAGE.inputTokens) },
              { label: "Output tokens", value: compact(TEXT_USAGE.outputTokens) },
              { label: "Failed", value: `${TEXT_USAGE.failedRequests} not counted` },
            ].map((item) => (
              <div key={item.label}>
                <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-mut2">{item.label}</p>
                <p className="mt-1 text-[13px] font-medium text-fg">{item.value}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            <Link href="/dashboard/text/usage" className={ctaSmall}>
              Open usage dashboard
              <ArrowRight size={12} aria-hidden="true" />
            </Link>
            <Link href="/dashboard/text/manage" className={ctaSmall}>
              Manage Subscription
            </Link>
          </div>
        </Card>

        <div className="space-y-3">
          <Card className="p-5">
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-accent" aria-hidden="true" />
              <h3 className="text-[13px] font-semibold text-fg">Clear limits, before checkout</h3>
            </div>
            <p className="mt-2 text-[12px] leading-relaxed text-mut">
              Monthly plans show their reply allowance and what happens at the limit. Failed requests do not consume
              replies, and this preview does not apply a silent overage charge.
            </p>
            <Link href="/dashboard/text/fair-use" className="mt-3 inline-flex items-center gap-1 text-[12px] font-medium text-accent transition-colors hover:text-accent2">
              Read the fair-use policy
              <ArrowRight size={12} aria-hidden="true" />
            </Link>
          </Card>
          <Card className="p-5">
            <div className="flex items-center gap-2">
              <Gauge size={16} className="text-accent" aria-hidden="true" />
              <h3 className="text-[13px] font-semibold text-fg">Text Unlimited is not for sale</h3>
            </div>
            <p className="mt-2 text-[12px] leading-relaxed text-mut">
              A $29.99 preview tier appears on the plan screen, but it cannot be purchased. We will publish fair-use,
              concurrency, and capacity limits before offering unlimited access.
            </p>
            <Link href="/dashboard/text/fair-use" className="mt-3 inline-flex items-center gap-1 text-[12px] font-medium text-accent transition-colors hover:text-accent2">
              See what must be defined
              <ArrowRight size={12} aria-hidden="true" />
            </Link>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <SectionHeading
          title="More affordable AI text access"
          body="The billing model stays visible: one API, five models, and a usage view that separates replies from tokens."
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {TEXT_BENEFITS.map((benefit, index) => (
            <Card key={benefit.title} className="p-4">
              <span className="font-mono text-[9.5px] tracking-[0.16em] text-mut2">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-2 text-[13px] font-semibold text-fg">{benefit.title}</h3>
              <p className="mt-1 text-[12px] leading-relaxed text-mut">{benefit.body}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionHeading title="Three steps" body="A short path from billing choice to visible usage." />
          <ol className="mt-4 space-y-3">
            {TEXT_STEPS.map((step, index) => (
              <li key={step.title} className="flex gap-3">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-md border border-line2 bg-white/[0.04] font-mono text-[10px] text-accent">
                  {index + 1}
                </span>
                <div>
                  <p className="text-[12.5px] font-medium text-fg">{step.title}</p>
                  <p className="mt-0.5 text-[11.5px] leading-relaxed text-mut">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <Link href="/dashboard/text/usage" className={`${ctaSecondary} mt-5`}>
            Open the usage dashboard
          </Link>
        </div>
        <div>
          <SectionHeading title="Questions, answered" body="The details that affect a reply, a bill, or a limit." />
          <div className="mt-4">
            <FaqList />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden rounded-2xl border border-accent/25 bg-accent/[0.045] px-5 py-7 sm:px-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <h2 className="text-xl font-semibold tracking-[-0.03em] text-fg">Start with a visible price and a visible limit.</h2>
            <p className="mt-2 text-[12.5px] leading-relaxed text-mut">
              Compare monthly allowances or stay on token-based billing. Checkout remains in preview until a payment
              provider is connected.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link href="/dashboard/text/plans" className={ctaPrimary}>
              Compare plans
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
            <Link href="/dashboard/wallet" className={ctaSecondary}>
              Add Balance
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
