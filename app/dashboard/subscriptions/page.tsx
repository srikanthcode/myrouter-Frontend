"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Check, ShieldCheck, Sparkles, CreditCard, Clock, Zap } from "lucide-react";
import { Badge, Button, Card, EmptyState, useToast } from "@/components/ui";
import { useSession } from "@/components/DashboardShell";
import { api, cx, formatINR } from "@/lib/api";

interface PlanItem {
  slug: string;
  name: string;
  tagline: string;
  pricePaise: number;
  priceFormatted: string;
  currency: string;
  period: string;
  freeRpm: number;
  freeRph: number;
  freeRpd: number;
  concurrency: number;
  queuePriority: number;
  features: string[];
}

const INR_PLANS: PlanItem[] = [
  {
    slug: "free",
    name: "Free",
    tagline: "Explore frontier AI models with zero upfront commitment.",
    pricePaise: 0,
    priceFormatted: "₹0",
    currency: "INR",
    period: "forever",
    freeRpm: 10,
    freeRph: 100,
    freeRpd: 1000,
    concurrency: 2,
    queuePriority: 10,
    features: [
      "Access to all 500+ AI models",
      "1,000,000 free daily tokens on DeepSeek V4.1 & Qwen 27B",
      "Standard queue priority (10)",
      "Streaming SSE responses",
      "OpenAI & Anthropic SDK compatibility",
      "1 active API key",
    ],
  },
  {
    slug: "builder",
    name: "Builder",
    tagline: "For developers and early-stage products building with AI.",
    pricePaise: 99900,
    priceFormatted: "₹999",
    currency: "INR",
    period: "month",
    freeRpm: 30,
    freeRph: 500,
    freeRpd: 5000,
    concurrency: 5,
    queuePriority: 20,
    features: [
      "Higher throughput limits (30 req / min)",
      "5,000 requests per day",
      "High-priority queue routing (20)",
      "5 concurrent streams",
      "Multiple API keys",
      "Detailed latency & usage breakdown",
      "Pay-as-you-go balance rollover",
    ],
  },
  {
    slug: "pro",
    name: "Pro",
    tagline: "Maximum throughput, dedicated priority queue, and high concurrency.",
    pricePaise: 249900,
    priceFormatted: "₹2,499",
    currency: "INR",
    period: "month",
    freeRpm: 60,
    freeRph: 1500,
    freeRpd: 15000,
    concurrency: 15,
    queuePriority: 30,
    features: [
      "Ultra-high throughput (60 req / min)",
      "15,000 requests per day",
      "VIP priority queue routing (30)",
      "15 concurrent streams",
      "Unlimited API keys",
      "Reasoning & thought token support",
      "Priority customer support",
    ],
  },
];

const USD_PLANS: PlanItem[] = [
  {
    slug: "free",
    name: "Free",
    tagline: "Explore frontier AI models with zero upfront commitment.",
    pricePaise: 0,
    priceFormatted: "$0",
    currency: "USD",
    period: "forever",
    freeRpm: 10,
    freeRph: 100,
    freeRpd: 1000,
    concurrency: 2,
    queuePriority: 10,
    features: [
      "Access to all 500+ AI models",
      "1,000,000 free daily tokens on DeepSeek V4.1 & Qwen 27B",
      "Standard queue priority (10)",
      "Streaming SSE responses",
      "OpenAI & Anthropic SDK compatibility",
      "1 active API key",
    ],
  },
  {
    slug: "builder-usd",
    name: "Builder",
    tagline: "For developers and early-stage products building with AI.",
    pricePaise: 1200,
    priceFormatted: "$12",
    currency: "USD",
    period: "month",
    freeRpm: 30,
    freeRph: 500,
    freeRpd: 5000,
    concurrency: 5,
    queuePriority: 20,
    features: [
      "Higher throughput limits (30 req / min)",
      "5,000 requests per day",
      "High-priority queue routing (20)",
      "5 concurrent streams",
      "Multiple API keys",
      "Detailed latency & usage breakdown",
      "Pay-as-you-go balance rollover",
    ],
  },
  {
    slug: "pro-usd",
    name: "Pro",
    tagline: "Maximum throughput, dedicated priority queue, and high concurrency.",
    pricePaise: 2900,
    priceFormatted: "$29",
    currency: "USD",
    period: "month",
    freeRpm: 60,
    freeRph: 1500,
    freeRpd: 15000,
    concurrency: 15,
    queuePriority: 30,
    features: [
      "Ultra-high throughput (60 req / min)",
      "15,000 requests per day",
      "VIP priority queue routing (30)",
      "15 concurrent streams",
      "Unlimited API keys",
      "Reasoning & thought token support",
      "Priority customer support",
    ],
  },
];

export default function SubscriptionsPage() {
  const toast = useToast();
  const { me, refresh } = useSession();
  const [currency, setCurrency] = useState<"INR" | "USD">("INR");
  const plans = currency === "USD" ? USD_PLANS : INR_PLANS;
  const currentPlanSlug = me?.plan?.slug || "free";

  useEffect(() => {
    void refresh();
  }, [refresh]);

  return (
    <div className="fade-up space-y-6 max-w-7xl mx-auto pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-xl font-semibold tracking-tight sm:text-2xl text-fg">
            Subscription Management
          </h1>
          <p className="mt-1 text-[13.5px] text-mut max-w-2xl">
            Subscriptions increase your rate limits (RPM), daily request quotas, concurrency, and queue priority. Model inference is charged separately against your prepaid wallet, except for your daily 1,000,000 free token entitlement.
          </p>
        </div>

        {/* Currency Switcher */}
        <div className="inline-flex items-center gap-0.5 rounded-lg border border-line bg-panel2/80 p-0.5 self-start">
          <button
            type="button"
            onClick={() => setCurrency("INR")}
            className={cx(
              "cursor-pointer rounded-md px-3 py-1 font-mono text-xs font-semibold transition-colors",
              currency === "INR" ? "bg-accent text-accent-ink shadow-xs" : "text-mut hover:text-fg"
            )}
          >
            🇮🇳 INR (₹)
          </button>
          <button
            type="button"
            onClick={() => setCurrency("USD")}
            className={cx(
              "cursor-pointer rounded-md px-3 py-1 font-mono text-xs font-semibold transition-colors",
              currency === "USD" ? "bg-accent text-accent-ink shadow-xs" : "text-mut hover:text-fg"
            )}
          >
            🇺🇸 USD ($)
          </button>
        </div>
      </div>

      {/* Current Active Plan Status */}
      <Card className="p-5 border-accent/30 bg-panel">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium uppercase tracking-wider text-mut2">Active Subscription</span>
              <Badge tone="accent">Current Plan</Badge>
            </div>
            <div className="text-2xl font-bold text-fg capitalize">
              {me?.plan?.name || "Free"} Plan
            </div>
            <p className="text-xs text-mut">
              Rate Limit: {me?.plan?.freeRpm || 10} RPM · Queue Priority: {me?.plan?.queuePriority || 10} · Status: Active
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/dashboard/wallet"
              className="inline-flex h-9 items-center justify-center rounded-lg border border-line bg-white/[0.04] px-4 text-xs font-medium text-fg hover:bg-white/[0.08] transition"
            >
              Manage Wallet Funds
            </Link>
          </div>
        </div>
      </Card>

      {/* Plan Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        {plans.map((p) => {
          const isCurrent = currentPlanSlug === p.slug;
          const isFeatured = p.slug.includes("builder");

          return (
            <Card
              key={p.slug}
              className={cx(
                "relative flex flex-col p-6 transition-all duration-200",
                isCurrent ? "border-accent bg-panel2/50" : isFeatured ? "border-accent/40" : "border-line"
              )}
            >
              {isCurrent && (
                <span className="absolute -top-2.5 left-5">
                  <Badge tone="accent">Current Plan</Badge>
                </span>
              )}
              {!isCurrent && isFeatured && (
                <span className="absolute -top-2.5 left-5">
                  <Badge tone="good">Popular</Badge>
                </span>
              )}

              <h3 className="text-lg font-semibold text-fg">{p.name}</h3>
              <p className="mt-1 text-xs text-mut leading-relaxed">{p.tagline}</p>

              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-mono text-3xl font-semibold text-fg">{p.priceFormatted}</span>
                <span className="text-xs text-mut2">/ {p.period}</span>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2 border-t border-line pt-3 text-[11.5px]">
                <div>
                  <div className="text-mut2">Throughput</div>
                  <div className="font-mono text-fg font-medium">{p.freeRpm} RPM</div>
                </div>
                <div>
                  <div className="text-mut2">Daily Quota</div>
                  <div className="font-mono text-fg font-medium">{p.freeRpd.toLocaleString()} RPD</div>
                </div>
                <div>
                  <div className="text-mut2">Concurrency</div>
                  <div className="font-mono text-fg font-medium">{p.concurrency} streams</div>
                </div>
                <div>
                  <div className="text-mut2">Queue Priority</div>
                  <div className="font-mono text-fg font-medium">{p.queuePriority}</div>
                </div>
              </div>

              <ul className="mt-5 flex-1 space-y-2 border-t border-line pt-4 text-xs">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="size-3.5 text-accent shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="text-mut">{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                {isCurrent ? (
                  <Button variant="secondary" className="w-full" disabled>
                    Current Active Plan
                  </Button>
                ) : (
                  <Link
                    href={`/dashboard/wallet?plan=${p.slug}&currency=${currency}`}
                    className="inline-flex h-9 w-full items-center justify-center rounded-lg bg-accent px-4 text-xs font-medium text-accent-ink hover:bg-accent2 transition"
                  >
                    {p.pricePaise === 0 ? "Downgrade to Free" : `Upgrade to ${p.name}`}
                  </Link>
                )}
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
