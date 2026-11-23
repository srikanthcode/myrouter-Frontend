"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Check, ShieldCheck, Sparkles, CreditCard, Clock, Zap } from "lucide-react";
import { Badge, Button, Card, EmptyState, useToast } from "@/components/ui";
import { useSession } from "@/components/DashboardShell";
import { ApiError, api, cx, formatINR } from "@/lib/api";

function loadRazorpayScript(): Promise<boolean> {
  return new Promise((resolve) => {
    if (typeof window === "undefined") {
      resolve(false);
      return;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if ((window as any).Razorpay) {
      resolve(true);
      return;
    }
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

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

function SubscriptionsContent() {
  const toast = useToast();
  const { me, refresh } = useSession();
  const searchParams = useSearchParams();
  const rawParam = (searchParams.get("plan") || searchParams.get("package") || "").toLowerCase().trim();
  const requestedCurrency = (searchParams.get("currency") || "").toUpperCase().trim();

  const [currency, setCurrency] = useState<"INR" | "USD">("INR");
  const [busy, setBusy] = useState(false);
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  useEffect(() => {
    if (requestedCurrency === "USD") {
      setCurrency("USD");
    } else if (requestedCurrency === "INR") {
      setCurrency("INR");
    }
  }, [requestedCurrency]);

  const plans = currency === "USD" ? USD_PLANS : INR_PLANS;
  const currentPlanSlug = me?.plan?.slug || "free";
  const isBuilder = rawParam.includes("builder");
  const isPro = rawParam.includes("pro") && !rawParam.includes("500");
  const selectedSlug = isBuilder
    ? (currency === "USD" ? "builder-usd" : "builder")
    : isPro
      ? (currency === "USD" ? "pro-usd" : "pro")
      : null;

  useEffect(() => {
    void refresh();
    void loadRazorpayScript();
  }, [refresh]);

  async function checkout(p: PlanItem) {
    if (busy || p.pricePaise === 0) return;
    setBusy(true);
    setActiveSlug(p.slug);
    try {
      const loaded = await loadRazorpayScript();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if (!loaded || !(window as any).Razorpay) {
        toast.push("Could not load Razorpay payment gateway. Please check your connection.", "error");
        setBusy(false);
        setActiveSlug(null);
        return;
      }

      const res = await api<{
        paymentId: string;
        invoice: string;
        amountPaise: number;
        currency: string;
        gatewayOrderId?: string;
        keyId?: string;
      }>("/wallet/checkout", {
        method: "POST",
        body: { packageSlug: p.slug, currency: p.currency || currency, idempotencyKey: `sub-${p.slug}-${Date.now()}` },
      });

      if (!res.gatewayOrderId) {
        throw new Error("Could not initialize payment order. Please try again.");
      }

      const razorpayKey = res.keyId || process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
      if (!razorpayKey) {
        toast.push("Razorpay Key ID is not configured on this environment.", "error");
        setBusy(false);
        setActiveSlug(null);
        return;
      }

      const options = {
        key: razorpayKey,
        amount: res.amountPaise,
        currency: res.currency || p.currency || currency || "INR",
        name: "ProRouter",
        description: `${p.name} Plan Subscription (${p.priceFormatted}/${p.period})`,
        image: "https://www.prorouter.in/icon.svg",
        order_id: res.gatewayOrderId,
        handler: async function (response: {
          razorpay_payment_id: string;
          razorpay_order_id: string;
          razorpay_signature: string;
        }) {
          try {
            await api("/wallet/verify", {
              method: "POST",
              body: {
                paymentId: res.paymentId,
                razorpayPaymentId: response.razorpay_payment_id,
                razorpayOrderId: response.razorpay_order_id,
                razorpaySignature: response.razorpay_signature,
              },
            });
            toast.push(`Payment successful! You have been upgraded to the ${p.name} Plan.`, "success");
            await refresh();
          } catch (verifyErr) {
            toast.push(verifyErr instanceof ApiError ? verifyErr.message : "Payment verification failed. Please contact support.", "error");
          } finally {
            setBusy(false);
            setActiveSlug(null);
          }
        },
        modal: {
          ondismiss: function () {
            setBusy(false);
            setActiveSlug(null);
          },
        },
        theme: { color: "#10b981" },
      };

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } catch (err) {
      setBusy(false);
      setActiveSlug(null);
      toast.push(err instanceof Error ? err.message : "Payment could not be started.", "error");
    }
  }

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
          const isCurrent = currentPlanSlug === p.slug || (currentPlanSlug === "free" && p.slug.startsWith("free"));
          const isSelected = selectedSlug === p.slug;
          const isFeatured = p.slug.includes("builder");

          return (
            <Card
              key={p.slug}
              className={cx(
                "relative flex flex-col p-6 transition-all duration-200",
                isSelected
                  ? "border-accent ring-2 ring-accent/40 bg-panel2/50"
                  : isCurrent
                    ? "border-good/50 bg-good/[0.02]"
                    : isFeatured
                      ? "border-accent/40"
                      : "border-line"
              )}
            >
              {isSelected && (
                <span className="absolute -top-2.5 left-5">
                  <Badge tone="accent">Selected Plan</Badge>
                </span>
              )}
              {!isSelected && isCurrent && (
                <span className="absolute -top-2.5 left-5">
                  <Badge tone="good">Current Plan</Badge>
                </span>
              )}
              {!isSelected && !isCurrent && isFeatured && (
                <span className="absolute -top-2.5 left-5">
                  <Badge tone="accent">Most Popular</Badge>
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
                ) : p.pricePaise === 0 ? (
                  <Button variant="secondary" className="w-full" disabled>
                    Included Free
                  </Button>
                ) : (
                  <Button
                    className="w-full"
                    disabled={busy && activeSlug !== p.slug}
                    loading={busy && activeSlug === p.slug}
                    onClick={() => void checkout(p)}
                  >
                    {activeSlug === p.slug ? "Initializing..." : `Choose ${p.name} (${p.priceFormatted})`}
                  </Button>
                )}
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default function SubscriptionsPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-mut font-mono text-xs">Loading subscriptions...</div>}>
      <SubscriptionsContent />
    </Suspense>
  );
}
