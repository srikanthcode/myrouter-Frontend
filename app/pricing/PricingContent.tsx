"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, CreditCard, Landmark, ReceiptText, Sparkles, Wallet, Webhook } from "lucide-react";
import { Badge } from "@/components/ui";
import { cx } from "@/lib/api";
import {
  DEFAULT_PLANS,
  DEFAULT_PLANS_USD,
  DEFAULT_PACKAGES_INR,
  DEFAULT_PACKAGES_USD,
  type PlanSummary,
  type PackageSummary,
} from "@/lib/server-api";

interface AstraCampaign {
  name: string;
  originalPricePaise: number;
  originalPriceFormatted: string;
  discountPercent: number;
  promoPricePaise: number;
  promoPriceFormatted: string;
  trialDays: number;
  endsAt: string | null;
  active: boolean;
}

export function PricingContent({
  campaign,
}: {
  campaign: AstraCampaign | null;
}) {
  const [currency, setCurrency] = useState<"INR" | "USD">("INR");

  const plans = currency === "USD" ? DEFAULT_PLANS_USD : DEFAULT_PLANS;
  const packages = currency === "USD" ? DEFAULT_PACKAGES_USD : DEFAULT_PACKAGES_INR;

  const linkButtonPrimary =
    "inline-flex h-10 cursor-pointer items-center justify-center rounded-lg bg-accent px-5 text-sm font-medium text-accent-ink transition-colors duration-200 hover:bg-accent2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";
  const linkButtonSecondary =
    "inline-flex h-10 cursor-pointer items-center justify-center rounded-lg border border-line2 bg-white/[0.04] px-5 text-sm font-medium text-fg transition-colors duration-200 hover:bg-white/[0.08] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";
  const linkButtonSecondarySm =
    "inline-flex h-9 cursor-pointer items-center justify-center rounded-lg border border-line2 bg-white/[0.04] px-4 text-[13px] font-medium text-fg transition-colors duration-200 hover:bg-white/[0.08] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      {/* Currency Switcher Bar */}
      <div className="mb-10 flex flex-col items-center justify-center gap-3">
        <div className="text-center">
          <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-accent">
            Select Billing Currency
          </span>
        </div>
        <div className="inline-flex items-center gap-1 rounded-xl border border-line bg-panel2/80 p-1 shadow-sm">
          <button
            type="button"
            onClick={() => setCurrency("INR")}
            className={cx(
              "flex items-center gap-2 rounded-lg px-4 py-2 font-mono text-xs font-semibold cursor-pointer transition-all duration-200",
              currency === "INR"
                ? "bg-accent text-accent-ink shadow-xs"
                : "text-mut hover:text-fg"
            )}
          >
            <span>🇮🇳</span>
            <span>Indian Rupee (₹ INR)</span>
          </button>
          <button
            type="button"
            onClick={() => setCurrency("USD")}
            className={cx(
              "flex items-center gap-2 rounded-lg px-4 py-2 font-mono text-xs font-semibold cursor-pointer transition-all duration-200",
              currency === "USD"
                ? "bg-accent text-accent-ink shadow-xs"
                : "text-mut hover:text-fg"
            )}
          >
            <span>🇺🇸</span>
            <span>US Dollar ($ USD)</span>
          </button>
        </div>
        <p className="text-[12px] text-mut2">
          {currency === "INR"
            ? "Pay securely with UPI (GPay, PhonePe, Paytm), RuPay & NetBanking via Razorpay"
            : "Pay securely with International Cards (Visa, Mastercard, American Express) & PayPal via Razorpay"}
        </p>
      </div>

      {/* Subscription Plans */}
      <section>
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              Monthly Plans ({currency})
            </h2>
            <p className="mt-1 text-[13.5px] text-mut">
              Plans increase your rate limits, free model quota, and queue priority. Model inference is billed directly from your wallet.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {plans.map((p) => {
            const featured = p.slug.includes("builder");
            return (
              <div
                key={p.slug}
                className={cx(
                  "relative flex flex-col rounded-xl border bg-panel p-6 shadow-sm transition-all duration-200",
                  featured ? "border-accent/40 bg-panel/95" : "border-line"
                )}
              >
                {featured && (
                  <span className="absolute -top-2.5 left-6">
                    <Badge tone="accent">Most Popular</Badge>
                  </span>
                )}
                <h3 className="text-[16px] font-semibold text-fg">{p.name}</h3>
                <p className="mt-1 text-[12.5px] text-mut">{p.tagline}</p>

                <div className="mt-5 flex items-baseline gap-1">
                  <span className="font-mono text-3xl font-semibold tabular-nums text-fg">
                    {p.priceFormatted}
                  </span>
                  <span className="text-[12.5px] text-mut2">/ {p.period}</span>
                </div>

                <ul className="mt-5 flex-1 space-y-2.5 text-[13px]">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-md border border-accent/25 bg-accent/10">
                        <Check className="size-3.5 text-accent" strokeWidth={1.75} aria-hidden="true" />
                      </span>
                      <span className="text-mut">{f}</span>
                    </li>
                  ))}
                </ul>

                <dl className="mt-5 grid grid-cols-2 gap-2 border-t border-line pt-4 text-[12px]">
                  <div>
                    <dt className="text-mut2">Free / min</dt>
                    <dd className="font-mono tabular-nums text-fg">{p.freeRpm}</dd>
                  </div>
                  <div>
                    <dt className="text-mut2">Free / day</dt>
                    <dd className="font-mono tabular-nums text-fg">{p.freeRpd.toLocaleString()}</dd>
                  </div>
                  <div>
                    <dt className="text-mut2">Concurrency</dt>
                    <dd className="font-mono tabular-nums text-fg">{p.concurrency}</dd>
                  </div>
                  <div>
                    <dt className="text-mut2">Queue priority</dt>
                    <dd className="font-mono tabular-nums text-fg">{p.queuePriority}</dd>
                  </div>
                </dl>

                <Link
                  href={
                    p.pricePaise === 0
                      ? "/signup"
                      : `/dashboard/wallet?package=${p.slug}&currency=${currency}`
                  }
                  className={`mt-6 ${featured ? linkButtonPrimary : linkButtonSecondary}`}
                >
                  {p.pricePaise === 0 ? "Start free" : `Choose ${p.name} (${p.priceFormatted})`}
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* Astra Promo */}
      {campaign && (
        <section className="mt-12">
          <div className="rounded-2xl border border-accent/40 bg-panel p-6 sm:p-8">
            <div className="flex flex-wrap items-start justify-between gap-6">
              <div className="max-w-2xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="flex size-8 items-center justify-center rounded-lg border border-accent/25 bg-accent/10">
                    <Sparkles className="size-4 text-accent" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <Badge tone="accent">{campaign.name}</Badge>
                  <Badge tone="good">{campaign.discountPercent}% off</Badge>
                  {campaign.trialDays > 0 && <Badge tone="neutral">{campaign.trialDays}-day trial</Badge>}
                </div>
                <h2 className="mt-4 text-xl font-semibold tracking-tight">Get the flagship model at a promotional price.</h2>
                <p className="mt-2 text-[13.5px] leading-relaxed text-mut">
                  Redeem a referral code to activate {campaign.trialDays} days of Astra access, or subscribe at the discounted rate
                  {campaign.endsAt ? ` before ${new Date(campaign.endsAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}` : ""}.
                </p>
                <div className="mt-4 flex flex-wrap items-baseline gap-3">
                  <span className="font-mono text-2xl font-semibold tabular-nums text-accent">{campaign.promoPriceFormatted}</span>
                  <span className="font-mono text-[14px] tabular-nums text-mut2 line-through">{campaign.originalPriceFormatted}</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Link href="/dashboard/astra" className={linkButtonPrimary}>Get Astra</Link>
                <Link href="/dashboard/referrals" className={linkButtonSecondary}>Redeem a code</Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Credit Packages Section */}
      <section className="mt-14">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <Badge tone="accent">Pay-As-You-Go</Badge>
              <Badge tone="good">
                {currency === "USD"
                  ? "Global Visa, Mastercard & PayPal via Razorpay"
                  : "Instant Razorpay UPI, Cards & NetBanking"}
              </Badge>
            </div>
            <h2 className="mt-2.5 text-xl font-semibold tracking-tight sm:text-2xl">
              Wallet Credits & Top-Up Packs ({currency})
            </h2>
            <p className="mt-1 text-[13.5px] text-mut max-w-2xl">
              Prepaid token credits with zero markup and no expiration. Add funds securely via {currency === "USD" ? "International Cards (Visa, Mastercard, Amex) or PayPal" : "UPI (GPay, PhonePe, Paytm), Cards, or NetBanking"}.
            </p>
          </div>
          <Link
            href={`/dashboard/wallet?currency=${currency}`}
            className={linkButtonPrimary}
          >
            Open Wallet & Pay
          </Link>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg) => {
            const isPopular = pkg.slug.includes("pro") || pkg.slug.includes("scale");
            return (
              <div
                key={pkg.slug}
                className={cx(
                  "relative flex flex-col rounded-xl border bg-panel p-5 shadow-sm transition-all duration-200 hover:border-accent/60",
                  isPopular ? "border-accent/40 bg-panel/95" : "border-line"
                )}
              >
                {isPopular && (
                  <span className="absolute -top-2.5 left-5">
                    <Badge tone="accent">Recommended</Badge>
                  </span>
                )}
                <h3 className="text-[15.5px] font-semibold text-fg">{pkg.name}</h3>
                <div className="mt-2 flex items-baseline gap-1.5">
                  <span className="font-mono text-2xl font-semibold tabular-nums text-fg">
                    {pkg.priceFormatted}
                  </span>
                  <span className="text-[12px] text-mut2">one-time</span>
                </div>

                <div className="mt-2 flex-1 space-y-1.5 text-[12.5px]">
                  {pkg.bonusPaise > 0 ? (
                    <div className="inline-flex items-center gap-1 rounded bg-good/10 px-2 py-0.5 font-medium text-good">
                      + {pkg.totalFormatted} total credits (bonus included)
                    </div>
                  ) : (
                    <div className="text-mut2">100% credited to your wallet balance</div>
                  )}
                  <ul className="mt-3 space-y-1.5 text-mut text-[12px]">
                    <li className="flex items-center gap-1.5">
                      <Check className="size-3.5 text-accent shrink-0" />
                      <span>Valid for all 35+ frontier models</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <Check className="size-3.5 text-accent shrink-0" />
                      <span>Never expires · No minimum charge</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <Check className="size-3.5 text-accent shrink-0" />
                      <span>Instant Razorpay checkout ({currency})</span>
                    </li>
                  </ul>
                </div>

                <Link
                  href={`/dashboard/wallet?package=${pkg.slug}&currency=${currency}`}
                  className={`mt-5 ${isPopular ? linkButtonPrimary : linkButtonSecondarySm} w-full text-center`}
                >
                  Buy for {pkg.priceFormatted}
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* Billing Notes */}
      <section className="mt-14 grid gap-4 md:grid-cols-3">
        {[
          {
            t: "Immutable ledger",
            b: "Every credit and debit is an append-only wallet transaction with a reference. Balances are never edited in place.",
            icon: Landmark,
          },
          {
            t: "Signature-verified gateway",
            b: "Payments are verified via Razorpay HMAC SHA-256 cryptographic signatures. Retried transactions cannot double-credit.",
            icon: Webhook,
          },
          {
            t: "Per-request transparency",
            b: "Each API response reports the exact cost of that request in token units, and appears in your real-time activity log.",
            icon: ReceiptText,
          },
        ].map((c) => {
          const Icon = c.icon;
          return (
            <div key={c.t} className="rounded-xl border border-line bg-panel p-5">
              <div className="flex size-8 items-center justify-center rounded-lg border border-line bg-ink2">
                <Icon className="size-4 text-accent" strokeWidth={1.75} aria-hidden="true" />
              </div>
              <h3 className="mt-3 text-sm font-semibold">{c.t}</h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-mut">{c.b}</p>
            </div>
          );
        })}
      </section>

      <p className="mt-10 text-center text-[12.5px] text-mut2">
        Prices exclude applicable taxes. See{" "}
        <Link href="/refund" className="text-accent transition-colors duration-200 hover:underline">
          refund policy
        </Link>{" "}
        and{" "}
        <Link href="/terms" className="text-accent transition-colors duration-200 hover:underline">
          terms of service
        </Link>
        .
      </p>
    </div>
  );
}
