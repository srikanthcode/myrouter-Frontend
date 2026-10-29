import Link from "next/link";
import type { Metadata } from "next";
import { Check, CreditCard, Landmark, ReceiptText, Sparkles, Wallet, Webhook } from "lucide-react";
import { PageHeader, PublicShell } from "@/components/PublicShell";
import { Badge, EmptyState } from "@/components/ui";
import { fetchJson, type PlanSummary } from "@/lib/server-api";

export const metadata: Metadata = {
  title: "Pricing",
  description: "ProRouter plans and credit packages. Free models cost nothing; paid models are billed per million tokens from your wallet.",
};

interface PackageSummary {
  id: string;
  slug: string;
  name: string;
  pricePaise: number;
  priceFormatted: string;
  bonusPaise: number;
  totalPaise: number;
  totalFormatted: string;
  currency: string;
}

interface AstraPromo {
  available: boolean;
  campaign: {
    name: string;
    originalPricePaise: number;
    originalPriceFormatted: string;
    discountPercent: number;
    promoPricePaise: number;
    promoPriceFormatted: string;
    trialDays: number;
    endsAt: string | null;
    active: boolean;
  } | null;
  entitlement: { activatedAt: string; expiresAt: string; daysLeft: number } | null;
  myCode: string | null;
}

const linkButtonPrimary =
  "inline-flex h-10 cursor-pointer items-center justify-center rounded-lg bg-accent px-5 text-sm font-medium text-accent-ink transition-colors duration-200 hover:bg-accent2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";
const linkButtonSecondary =
  "inline-flex h-10 cursor-pointer items-center justify-center rounded-lg border border-line2 bg-white/[0.04] px-5 text-sm font-medium text-fg transition-colors duration-200 hover:bg-white/[0.08] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";
const linkButtonSecondarySm =
  "inline-flex h-9 cursor-pointer items-center justify-center rounded-lg border border-line2 bg-white/[0.04] px-4 text-[13px] font-medium text-fg transition-colors duration-200 hover:bg-white/[0.08] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export default async function PricingPage() {
  const [plansRes, packagesRes, astra] = await Promise.all([
    fetchJson<{ items: PlanSummary[] }>("/plans"),
    fetchJson<{ items: PackageSummary[] }>("/wallet/packages"),
    fetchJson<AstraPromo>("/promotions/astra"),
  ]);

  const plans = plansRes?.items ?? [];
  const packages = packagesRes?.items ?? [];
  const campaign = astra?.available ? astra.campaign : null;

  return (
    <PublicShell>
      <PageHeader
        eyebrow="Pricing"
        title="Pay for what you use. Nothing else."
        subtitle="Free models are genuinely free, subject to plan rate limits and the shared queue. Paid models are billed per million tokens straight from your wallet — no seat fees, no minimums."
      />

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        {/* Plans */}
        <section>
          <h2 className="text-lg font-semibold tracking-tight">Plans</h2>
          <p className="mt-1 text-[13.5px] text-mut">Plans change your free-model rate limits and queue priority. Inference on paid models is always billed separately.</p>

          {plans.length === 0 ? (
            <div className="mt-6">
              <EmptyState icon={<CreditCard className="size-5" strokeWidth={1.75} />} title="Plans are not configured on this deployment." />
            </div>
          ) : (
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {plans.map((p) => {
                const featured = p.slug === "boost";
                return (
                  <div key={p.slug} className={featured ? "relative flex flex-col rounded-xl border border-accent/40 bg-panel p-6" : "relative flex flex-col rounded-xl border border-line bg-panel p-6"}>
                    {featured && <span className="absolute -top-2.5 left-6"><Badge tone="accent">Most popular</Badge></span>}
                    <h3 className="text-[15px] font-semibold">{p.name}</h3>
                    <p className="mt-1 text-[12.5px] text-mut">{p.tagline}</p>

                    <div className="mt-5 flex items-baseline gap-1">
                      <span className="font-mono text-2xl font-semibold tabular-nums">{p.priceFormatted}</span>
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
                      <div><dt className="text-mut2">Free / min</dt><dd className="font-mono tabular-nums">{p.freeRpm}</dd></div>
                      <div><dt className="text-mut2">Free / day</dt><dd className="font-mono tabular-nums">{p.freeRpd.toLocaleString()}</dd></div>
                      <div><dt className="text-mut2">Concurrency</dt><dd className="font-mono tabular-nums">{p.concurrency}</dd></div>
                      <div><dt className="text-mut2">Queue priority</dt><dd className="font-mono tabular-nums">{p.queuePriority}</dd></div>
                    </dl>

                    <Link href={p.pricePaise === 0 ? "/signup" : "/dashboard"} className={`mt-6 ${featured ? linkButtonPrimary : linkButtonSecondary}`}>
                      {p.pricePaise === 0 ? "Start free" : `Choose ${p.name}`}
                    </Link>
                  </div>
                );
              })}
            </div>
          )}
        </section>

        {/* Astra promo */}
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

        {/* Credit packages */}
        <section className="mt-12">
          <h2 className="text-lg font-semibold tracking-tight">Wallet credits</h2>
          <p className="mt-1 text-[13.5px] text-mut">Prepaid credits never expire. Some packages include bonus credit on top of what you pay.</p>

          {packages.length === 0 ? (
            <div className="mt-6">
              <EmptyState icon={<Wallet className="size-5" strokeWidth={1.75} />} title="No credit packages configured on this deployment." />
            </div>
          ) : (
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {packages.map((pkg) => (
                <div key={pkg.slug} className="flex flex-col rounded-xl border border-line bg-panel p-5">
                  <h3 className="text-[15px] font-semibold">{pkg.name}</h3>
                  <div className="mt-3 font-mono text-xl font-semibold tabular-nums">{pkg.priceFormatted}</div>
                  {pkg.bonusPaise > 0 ? (
                    <div className="mt-1.5 text-[12.5px] text-good">+ {pkg.totalFormatted} total credit</div>
                  ) : (
                    <div className="mt-1.5 text-[12.5px] text-mut2">No bonus</div>
                  )}
                  <Link href="/dashboard/wallet" className={`mt-5 ${linkButtonSecondarySm}`}>Buy credits</Link>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Billing notes */}
        <section className="mt-12 grid gap-4 md:grid-cols-3">
          {[
            { t: "Immutable ledger", b: "Every credit and debit is an append-only wallet transaction with a reference. Balances are never edited in place.", icon: Landmark },
            { t: "Credited by webhook only", b: "Payments are confirmed by a signature-verified gateway webhook, never by the browser. Retried webhooks cannot double-credit.", icon: Webhook },
            { t: "Per-request cost", b: "Each API response reports the exact cost of that request, and the same figure appears in your activity log.", icon: ReceiptText },
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
          Prices are in INR and exclude applicable taxes. See <Link href="/refund" className="text-accent transition-colors duration-200 hover:underline">refund policy</Link> and <Link href="/terms" className="text-accent transition-colors duration-200 hover:underline">terms</Link>.
        </p>
      </div>
    </PublicShell>
  );
}
