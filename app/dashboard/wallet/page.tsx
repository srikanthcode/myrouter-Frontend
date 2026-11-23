"use client";

import { Suspense, useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  ArrowDownToLine,
  ArrowRight,
  ArrowUpFromLine,
  Check,
  CheckCircle2,
  Clock,
  CreditCard,
  Download,
  History,
  Package,
  Printer,
  Receipt,
  ShieldCheck,
  Sparkles,
  Wallet,
  X,
} from "lucide-react";
import { ApiError, api, cx, formatINR, timeAgo } from "@/lib/api";
import { Badge, Button, Card, EmptyState, Modal, Skeleton, useToast } from "@/components/ui";
import { useSession } from "@/components/DashboardShell";
import { useDashboardEvents } from "@/lib/useDashboardEvents";
import { DEFAULT_PLANS, DEFAULT_PLANS_USD, type PlanSummary } from "@/lib/server-api";

interface WalletData {
  balancePaise: number;
  balanceFormatted: string;
  currency: string;
  transactions: Array<{
    id: string;
    type: string;
    amountPaise: number;
    amountFormatted: string;
    balanceAfterPaise: number;
    reference: string | null;
    createdAt: string;
  }>;
}

interface PackageItem {
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

interface Payment {
  id: string;
  invoice: string;
  amountPaise: number;
  amountFormatted: string;
  gateway: string;
  status: string;
  createdAt: string;
}

interface DailyEntitlement {
  campaign: string;
  eligibleModels: string[];
  active: boolean;
  dailyAllowanceTokens: number;
  tokensConsumedToday: number;
  tokensRemainingToday: number;
  nextResetAt: string;
  remainingFormatted: string;
}

interface PaymentReceipt {
  invoice: string;
  paymentId: string;
  orderId?: string;
  packageName: string;
  amountFormatted: string;
  creditsFormatted: string;
  currency: string;
  date: string;
  userEmail: string;
}

const txTone: Record<string, "good" | "bad" | "neutral" | "accent"> = {
  topup: "good",
  refund: "good",
  promotional: "accent",
  gift: "accent",
  usage: "bad",
  adjustment: "neutral",
};

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

const DEFAULT_WALLET_PACKAGES: PackageItem[] = [
  {
    id: "pkg-starter-100",
    slug: "starter-100",
    name: "Starter Pack",
    pricePaise: 10000,
    priceFormatted: "₹100",
    bonusPaise: 0,
    totalPaise: 10000,
    totalFormatted: "₹100",
    currency: "INR",
  },
  {
    id: "pkg-pro-500",
    slug: "pro-500",
    name: "Pro Pack",
    pricePaise: 50000,
    priceFormatted: "₹500",
    bonusPaise: 5000,
    totalPaise: 55000,
    totalFormatted: "₹550",
    currency: "INR",
  },
  {
    id: "pkg-scale-1000",
    slug: "scale-1000",
    name: "Scale Pack",
    pricePaise: 100000,
    priceFormatted: "₹1,000",
    bonusPaise: 20000,
    totalPaise: 120000,
    totalFormatted: "₹1,200",
    currency: "INR",
  },
  {
    id: "pkg-power-2500",
    slug: "power-2500",
    name: "Power Pack",
    pricePaise: 250000,
    priceFormatted: "₹2,500",
    bonusPaise: 65000,
    totalPaise: 315000,
    totalFormatted: "₹3,150",
    currency: "INR",
  },
];

const DEFAULT_WALLET_PACKAGES_USD: PackageItem[] = [
  {
    id: "pkg-starter-usd-5",
    slug: "starter-usd-5",
    name: "Starter Pack",
    pricePaise: 500,
    priceFormatted: "$5.00",
    bonusPaise: 0,
    totalPaise: 500,
    totalFormatted: "$5.00",
    currency: "USD",
  },
  {
    id: "pkg-pro-usd-10",
    slug: "pro-usd-10",
    name: "Pro Pack",
    pricePaise: 1000,
    priceFormatted: "$10.00",
    bonusPaise: 150,
    totalPaise: 1150,
    totalFormatted: "$11.50",
    currency: "USD",
  },
  {
    id: "pkg-scale-usd-25",
    slug: "scale-usd-25",
    name: "Scale Pack",
    pricePaise: 2500,
    priceFormatted: "$25.00",
    bonusPaise: 500,
    totalPaise: 3000,
    totalFormatted: "$30.00",
    currency: "USD",
  },
  {
    id: "pkg-power-usd-50",
    slug: "power-usd-50",
    name: "Power Pack",
    pricePaise: 5000,
    priceFormatted: "$50.00",
    bonusPaise: 1500,
    totalPaise: 6500,
    totalFormatted: "$65.00",
    currency: "USD",
  },
  {
    id: "pkg-builder-usd",
    slug: "builder-usd",
    name: "Builder Plan",
    pricePaise: 1200,
    priceFormatted: "$12.00",
    bonusPaise: 100,
    totalPaise: 1300,
    totalFormatted: "$13.00",
    currency: "USD",
  },
  {
    id: "pkg-pro-usd",
    slug: "pro-usd",
    name: "Pro Plan",
    pricePaise: 2900,
    priceFormatted: "$29.00",
    bonusPaise: 300,
    totalPaise: 3200,
    totalFormatted: "$32.00",
    currency: "USD",
  },
];

function WalletContent() {
  const toast = useToast();
  const { me, refresh } = useSession();
  const searchParams = useSearchParams();
  const rawParam = (searchParams.get("package") || searchParams.get("plan") || "").toLowerCase().trim();
  const requestedCurrency = (searchParams.get("currency") || "").toUpperCase().trim();

  const [wallet, setWallet] = useState<WalletData | null>(null);
  const [packages, setPackages] = useState<PackageItem[]>([]);
  const [payments, setPayments] = useState<Payment[]>([]);
  const [dailyQuota, setDailyQuota] = useState<DailyEntitlement | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [currency, setCurrency] = useState<"INR" | "USD">("INR");
  type CheckoutState = "IDLE" | "INITIALIZING" | "CHECKOUT_OPEN" | "VERIFYING" | "PAYMENT_CONFIRMED" | "FAILED" | "CANCELLED";
  const [checkoutState, setCheckoutState] = useState<CheckoutState>("IDLE");
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const [receipt, setReceipt] = useState<PaymentReceipt | null>(null);

  useEffect(() => {
    if (requestedCurrency === "USD") {
      setCurrency("USD");
    } else if (requestedCurrency === "INR") {
      setCurrency("INR");
    }
  }, [requestedCurrency]);

  const plans = currency === "USD" ? DEFAULT_PLANS_USD : DEFAULT_PLANS;
  const isBuilder = rawParam.includes("builder");
  const isPro = rawParam.includes("pro") && !rawParam.includes("500");
  const selectedPlanSlug = isBuilder
    ? (currency === "USD" ? "builder-usd" : "builder")
    : isPro
      ? (currency === "USD" ? "pro-usd" : "pro")
      : null;

  const selectedPlanBanner = plans.find((p) => p.slug === selectedPlanSlug);

  // Preload Razorpay SDK once on component mount
  useEffect(() => {
    void loadRazorpayScript();
  }, []);

  // Listen to real-time events for instant updates
  useDashboardEvents((evt) => {
    if (
      evt.type === "wallet.balance.updated" ||
      evt.type === "payment.completed" ||
      evt.type === "ledger.entry.created"
    ) {
      void load();
      void refresh();
    }
  });

  const load = useCallback(async () => {
    try {
      const [w, p, pay, dq] = await Promise.all([
        api<WalletData>("/wallet"),
        api<{ items: PackageItem[] }>("/wallet/packages"),
        api<{ items: Payment[] }>("/payments"),
        api<DailyEntitlement>("/promotions/daily-entitlement").catch(() => null),
      ]);

      if (w) {
        // Strict deduplication of transactions by ID
        const seenTx = new Set<string>();
        const dedupedTxs = (w.transactions || []).filter((t) => {
          if (!t.id || seenTx.has(t.id)) return false;
          seenTx.add(t.id);
          return true;
        });
        setWallet({ ...w, transactions: dedupedTxs });
      } else {
        setWallet(null);
      }

      const fallbackP = currency === "USD" ? DEFAULT_WALLET_PACKAGES_USD : DEFAULT_WALLET_PACKAGES;
      const items = Array.isArray(p?.items) && p.items.length > 0 && p.items[0]?.currency === currency ? p.items : fallbackP;
      setPackages(items);

      if (dq) {
        setDailyQuota(dq);
      }

      const rawPayments = Array.isArray(pay?.items) ? pay.items : Array.isArray(pay) ? (pay as unknown as Payment[]) : [];
      const seenPay = new Set<string>();
      const dedupedPayments = rawPayments.filter((item) => {
        if (!item.id || seenPay.has(item.id)) return false;
        seenPay.add(item.id);
        return true;
      });
      setPayments(dedupedPayments);
      setError(null);
    } catch (e) {
      setError(e instanceof ApiError ? e.message : "Could not load your wallet.");
    }
  }, [currency]);

  useEffect(() => {
    void refresh();
    void load();
  }, [load, refresh]);

  async function checkout(pkg: {
    slug: string;
    name: string;
    priceFormatted: string;
    pricePaise?: number;
    totalFormatted?: string;
    totalPaise?: number;
    currency?: string;
  }) {
    if (busy) return;
    setBusy(true);
    setActiveSlug(pkg.slug);
    setCheckoutState("INITIALIZING");
    try {
      const loaded = await loadRazorpayScript();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if (!loaded || !(window as any).Razorpay) {
        toast.push("Could not load Razorpay payment gateway. Please check your connection.", "error");
        setBusy(false);
        setActiveSlug(null);
        setCheckoutState("FAILED");
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
        body: { packageSlug: pkg.slug, currency: pkg.currency || currency, idempotencyKey: `web-${pkg.slug}-${Date.now()}` },
      });

      if (!res.gatewayOrderId) {
        throw new Error("Could not initialize payment order. Please try again.");
      }

      const razorpayKey = res.keyId || process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
      if (!razorpayKey) {
        toast.push("Razorpay Key ID is not configured on this environment.", "error");
        setBusy(false);
        setActiveSlug(null);
        setCheckoutState("FAILED");
        return;
      }

      const options = {
        key: razorpayKey,
        amount: res.amountPaise,
        currency: res.currency || pkg.currency || currency || "INR",
        name: "ProRouter",
        description: `${pkg.name} — ${pkg.totalFormatted || pkg.priceFormatted} Credits`,
        image: "https://www.prorouter.in/icon.svg",
        order_id: res.gatewayOrderId,
        handler: async function (response: {
          razorpay_payment_id: string;
          razorpay_order_id: string;
          razorpay_signature: string;
        }) {
          try {
            setCheckoutState("VERIFYING");
            await api("/wallet/verify", {
              method: "POST",
              body: {
                paymentId: res.paymentId,
                razorpayPaymentId: response.razorpay_payment_id,
                razorpayOrderId: response.razorpay_order_id,
                razorpaySignature: response.razorpay_signature,
              },
            });
            setCheckoutState("PAYMENT_CONFIRMED");
            const isPlan = pkg.slug.includes("builder") || pkg.slug.includes("pro");
            if (isPlan) {
              toast.push(`Payment successful! You have been upgraded to the ${pkg.name}.`, "success");
            } else {
              toast.push(`Payment successful! ${pkg.totalFormatted || pkg.priceFormatted} added to your wallet.`, "success");
            }

            // Optimistically add the captured payment immediately to the list
            const newPaymentRow: Payment = {
              id: res.paymentId || response.razorpay_payment_id,
              invoice: res.invoice,
              amountPaise: res.amountPaise,
              amountFormatted: formatINR(res.amountPaise),
              gateway: "razorpay",
              status: "captured",
              createdAt: new Date().toISOString(),
            };
            setPayments((prev) => [newPaymentRow, ...prev.filter((p) => p.id !== newPaymentRow.id && p.invoice !== newPaymentRow.invoice)]);

            // Optimistically update wallet balance and transaction ledger
            const creditAdded = pkg.totalPaise || pkg.pricePaise;
            setWallet((prev) => {
              if (!prev) return prev;
              const updatedBal = prev.balancePaise + creditAdded;
              const newTx = {
                id: "tx_" + Date.now(),
                type: "topup",
                amountPaise: creditAdded,
                amountFormatted: formatINR(creditAdded),
                balanceAfterPaise: updatedBal,
                reference: res.invoice,
                createdAt: new Date().toISOString(),
              };
              return {
                ...prev,
                balancePaise: updatedBal,
                balanceFormatted: formatINR(updatedBal),
                transactions: [newTx, ...prev.transactions.filter((t) => t.id !== newTx.id)],
              };
            });

            // Set verified receipt modal
            setReceipt({
              invoice: res.invoice,
              paymentId: response.razorpay_payment_id,
              orderId: response.razorpay_order_id,
              packageName: pkg.name,
              amountFormatted: pkg.priceFormatted,
              creditsFormatted: pkg.totalFormatted || pkg.priceFormatted,
              currency: res.currency || pkg.currency || currency,
              date: new Date().toLocaleString(),
              userEmail: me?.user?.email ?? "",
            });

            await load();
            await refresh();
          } catch (verifyErr) {
            setCheckoutState("FAILED");
            toast.push(verifyErr instanceof ApiError ? verifyErr.message : "Payment verification failed. Please contact support.", "error");
          } finally {
            setBusy(false);
            setActiveSlug(null);
            setTimeout(() => setCheckoutState("IDLE"), 2000);
          }
        },
        prefill: {
          name: me?.user?.name ?? "",
          email: me?.user?.email ?? "",
        },
        notes: {
          invoice: res.invoice,
          package: pkg.slug,
        },
        theme: {
          color: "#10b981",
        },
        modal: {
          ondismiss: () => {
            setBusy(false);
            setActiveSlug(null);
            setCheckoutState("CANCELLED");
            setTimeout(() => setCheckoutState("IDLE"), 1000);
          },
        },
      };

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const rzp = new (window as any).Razorpay(options);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      rzp.on("payment.failed", (failRes: any) => {
        toast.push(failRes?.error?.description || "Payment failed. Please try another payment method.", "error");
        setBusy(false);
        setActiveSlug(null);
        setCheckoutState("FAILED");
        setTimeout(() => setCheckoutState("IDLE"), 2000);
      });
      setCheckoutState("CHECKOUT_OPEN");
      rzp.open();
    } catch (e) {
      toast.push(e instanceof ApiError ? e.message : "Could not start checkout.", "error");
      setBusy(false);
      setActiveSlug(null);
      setCheckoutState("FAILED");
      setTimeout(() => setCheckoutState("IDLE"), 1500);
    }
  }

  const credits = (wallet?.transactions ?? []).filter((t) => t.amountPaise > 0).reduce((a, t) => a + t.amountPaise, 0);
  const debits = (wallet?.transactions ?? []).filter((t) => t.amountPaise < 0).reduce((a, t) => a + Math.abs(t.amountPaise), 0);

  if (error) return <div className="rounded-xl border border-bad/30 bg-bad/10 p-4 text-sm text-bad" role="alert">{error}</div>;
  if (!wallet) return <div className="space-y-4">{[0, 1, 2].map((i) => <Skeleton key={i} className="h-28 w-full" />)}</div>;

  const quotaTotal = dailyQuota?.dailyAllowanceTokens || 1000000;
  const quotaRemaining = dailyQuota?.tokensRemainingToday ?? 1000000;
  const quotaConsumed = dailyQuota?.tokensConsumedToday ?? 0;
  const quotaPct = Math.min(100, Math.round((quotaConsumed / quotaTotal) * 100));

  return (
    <div className="fade-up space-y-6">
      <div>
        <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">Wallet & Billing</h1>
        <p className="mt-1 text-[13.5px] text-mut">Authoritative balance & daily token entitlements. Paid inference is billed per request; free tokens reset daily.</p>
      </div>

      {/* Primary Metrics Grid */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {/* Available Paid Balance */}
        <Card className="p-5">
          <div className="flex items-center justify-between gap-2">
            <div className="text-[11px] uppercase tracking-wide text-mut2 font-medium">Available balance</div>
            <Wallet className="size-3.5 shrink-0 text-mut2" strokeWidth={1.75} aria-hidden="true" />
          </div>
          <div className="mt-2 font-mono text-2xl sm:text-3xl font-semibold tabular-nums text-good">{wallet.balanceFormatted}</div>
          <div className="mt-1 text-[12px] text-mut2">{wallet.currency} · prepaid, never expires</div>
        </Card>

        {/* Daily Free Allowance */}
        <Card className="p-5 border-accent/30 bg-accent/[0.02]">
          <div className="flex items-center justify-between gap-2">
            <div className="text-[11px] uppercase tracking-wide text-accent font-medium flex items-center gap-1">
              <Sparkles className="size-3" />
              <span>Daily Free Tokens</span>
            </div>
            <Clock className="size-3.5 shrink-0 text-mut2" strokeWidth={1.75} aria-hidden="true" />
          </div>
          <div className="mt-2 font-mono text-xl sm:text-2xl font-semibold tabular-nums text-fg">
            {(quotaRemaining).toLocaleString()}
          </div>
          <div className="mt-1 text-[11.5px] text-mut flex items-center justify-between">
            <span>of {quotaTotal.toLocaleString()} free/day</span>
            <span className="font-mono text-accent text-[11px]">{100 - quotaPct}% left</span>
          </div>
          <div className="mt-2 w-full h-1.5 bg-line rounded-full overflow-hidden">
            <div
              className="h-full bg-accent transition-all duration-300"
              style={{ width: `${Math.max(3, 100 - quotaPct)}%` }}
            />
          </div>
          <div className="mt-1.5 text-[10.5px] text-mut2 font-mono">
            DeepSeek V4.1 & Qwen 27B · Resets 00:00 UTC
          </div>
        </Card>

        {/* Credited Recent */}
        <Card className="p-5">
          <div className="flex items-center justify-between gap-2">
            <div className="text-[11px] uppercase tracking-wide text-mut2 font-medium">Credited (recent)</div>
            <ArrowDownToLine className="size-3.5 shrink-0 text-mut2" strokeWidth={1.75} aria-hidden="true" />
          </div>
          <div className="mt-2 font-mono text-xl font-semibold tabular-nums text-good">{formatINR(credits)}</div>
          <div className="mt-1 text-[12px] text-mut2">Top-ups and promo gifts</div>
        </Card>

        {/* Spent Recent */}
        <Card className="p-5">
          <div className="flex items-center justify-between gap-2">
            <div className="text-[11px] uppercase tracking-wide text-mut2 font-medium">Spent (recent)</div>
            <ArrowUpFromLine className="size-3.5 shrink-0 text-mut2" strokeWidth={1.75} aria-hidden="true" />
          </div>
          <div className="mt-2 font-mono text-xl font-semibold tabular-nums text-bad">{formatINR(debits)}</div>
          <div className="mt-1 text-[12px] text-mut2">Paid inference consumption</div>
        </Card>
      </div>

      {/* Selected Plan Action Banner */}
      {selectedPlanBanner && selectedPlanBanner.pricePaise > 0 && (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xl border border-accent/40 bg-accent/10 p-4">
          <div className="flex items-start sm:items-center gap-3">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-accent/30 bg-accent/20">
              <Sparkles className="size-4 text-accent" />
            </span>
            <div>
              <p className="text-sm font-semibold text-fg">
                Selected Plan: {selectedPlanBanner.name} ({selectedPlanBanner.priceFormatted} / month)
              </p>
              <p className="text-xs text-mut">
                {selectedPlanBanner.freeRpm} req/min rate limit · {selectedPlanBanner.freeRpd.toLocaleString()} requests/day · Queue priority {selectedPlanBanner.queuePriority}
              </p>
            </div>
          </div>
          <Button
            size="sm"
            loading={busy && activeSlug === selectedPlanBanner.slug}
            disabled={busy && activeSlug !== selectedPlanBanner.slug}
            onClick={() => void checkout(selectedPlanBanner)}
            className="shrink-0"
          >
            Activate {selectedPlanBanner.name} ({selectedPlanBanner.priceFormatted})
          </Button>
        </div>
      )}

      {/* Monthly Subscription Plans */}
      <section className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-sm font-semibold">Monthly Plans ({currency})</h2>
              <Badge tone="accent">Rate Limits & Priority</Badge>
            </div>
            <p className="mt-0.5 text-[12.5px] text-mut">
              Plans increase your rate limits, free model quota, and queue priority. Model inference is billed directly from your wallet balance.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="inline-flex items-center gap-0.5 rounded-lg border border-line bg-panel2/80 p-0.5">
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

            <Link
              href="/dashboard/subscriptions"
              className="text-[12px] font-medium text-accent hover:underline flex items-center gap-1 shrink-0 ml-1"
            >
              <span>Subscriptions</span>
              <ArrowRight className="size-3" />
            </Link>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {plans.map((p) => {
            const currentPlanSlug = me?.plan?.slug || "free";
            const isCurrent = currentPlanSlug === p.slug || (currentPlanSlug === "free" && p.slug.startsWith("free"));
            const isSelected = selectedPlanSlug === p.slug;
            const isFeatured = p.slug.includes("builder");

            return (
              <Card
                key={p.slug}
                className={cx(
                  "relative flex flex-col p-5 transition-all duration-200",
                  isSelected
                    ? "border-accent ring-2 ring-accent/40 bg-panel2/60"
                    : isCurrent
                      ? "border-good/50 bg-good/[0.02]"
                      : isFeatured
                        ? "border-accent/40 bg-panel hover:border-accent/70"
                        : "border-line hover:border-line2"
                )}
              >
                {isSelected && (
                  <span className="absolute -top-2.5 left-4">
                    <Badge tone="accent">Selected Plan</Badge>
                  </span>
                )}
                {!isSelected && isCurrent && (
                  <span className="absolute -top-2.5 left-4">
                    <Badge tone="good">Current Active Plan</Badge>
                  </span>
                )}
                {!isSelected && !isCurrent && isFeatured && (
                  <span className="absolute -top-2.5 left-4">
                    <Badge tone="accent">Most Popular</Badge>
                  </span>
                )}

                <div className="flex items-baseline justify-between gap-2 mt-1">
                  <h3 className="text-[15px] font-semibold text-fg">{p.name}</h3>
                  <div className="font-mono text-xl font-semibold tabular-nums text-fg">
                    {p.priceFormatted}
                    <span className="text-[11px] font-normal text-mut2"> / {p.period}</span>
                  </div>
                </div>
                <p className="mt-1 text-[11.5px] text-mut line-clamp-2">{p.tagline}</p>

                <dl className="mt-3 grid grid-cols-2 gap-2 border-t border-line/60 pt-2.5 text-[11px]">
                  <div>
                    <dt className="text-mut2">Free / min</dt>
                    <dd className="font-mono font-medium text-fg">{p.freeRpm}</dd>
                  </div>
                  <div>
                    <dt className="text-mut2">Free / day</dt>
                    <dd className="font-mono font-medium text-fg">{p.freeRpd.toLocaleString()}</dd>
                  </div>
                  <div>
                    <dt className="text-mut2">Concurrency</dt>
                    <dd className="font-mono font-medium text-fg">{p.concurrency}</dd>
                  </div>
                  <div>
                    <dt className="text-mut2">Queue priority</dt>
                    <dd className="font-mono font-medium text-fg">{p.queuePriority}</dd>
                  </div>
                </dl>

                <ul className="mt-3 flex-1 space-y-1.5 border-t border-line/60 pt-2.5 text-[11.5px]">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-1.5 text-mut">
                      <Check className="size-3 text-accent shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4">
                  {p.pricePaise === 0 ? (
                    <Button variant="secondary" size="sm" className="w-full" disabled>
                      {isCurrent ? "Current Plan" : "Free Forever"}
                    </Button>
                  ) : isCurrent ? (
                    <Button variant="secondary" size="sm" className="w-full" disabled>
                      Current Active Plan
                    </Button>
                  ) : (
                    <Button
                      size="sm"
                      className="w-full"
                      disabled={busy && activeSlug !== p.slug}
                      loading={busy && activeSlug === p.slug}
                      onClick={() => void checkout(p)}
                    >
                      {activeSlug === p.slug
                        ? checkoutState === "INITIALIZING"
                          ? "Initializing..."
                          : checkoutState === "CHECKOUT_OPEN"
                            ? "Checkout Active"
                            : checkoutState === "VERIFYING"
                              ? "Verifying..."
                              : `Choose ${p.name} (${p.priceFormatted})`
                        : `Choose ${p.name} (${p.priceFormatted})`}
                    </Button>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Top up */}
      <section>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-sm font-semibold">Add credits ({currency})</h2>
              <Badge tone="accent">{currency === "USD" ? "International" : "Domestic"}</Badge>
            </div>
            <p className="mt-0.5 text-[12.5px] text-mut">
              {currency === "USD"
                ? "Pay securely in US Dollars via International Cards (Visa, Mastercard, Amex) & PayPal."
                : "Pay securely in INR via UPI (GPay, PhonePe, Paytm), RuPay Cards, or NetBanking."}
            </p>
          </div>

          <div className="flex items-center gap-2">
            {/* Currency Switcher */}
            <div className="inline-flex items-center gap-0.5 rounded-lg border border-line bg-panel2/80 p-0.5">
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

            <div className="hidden sm:flex items-center gap-1.5 rounded-full border border-line bg-panel2/60 px-3 py-1 font-mono text-[10.5px] text-mut">
              <ShieldCheck className="size-3 text-good" />
              <span>Instant Activation</span>
            </div>
          </div>
        </div>

        {packages.length === 0 ? (
          <div className="mt-3">
            <EmptyState icon={<Package className="size-6" strokeWidth={1.75} />} title="No credit packages are configured on this deployment." />
          </div>
        ) : (
          <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {packages.map((p) => (
              <Card
                key={p.slug}
                className={cx(
                  "flex flex-col p-5 transition-colors duration-200 border-line hover:border-line2",
                  activeSlug === p.slug && "border-accent/60"
                )}
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-[15px] font-semibold">{p.name}</h3>
                  {p.bonusPaise > 0 && <Badge tone="accent">Bonus</Badge>}
                </div>
                <div className="mt-2 font-mono text-2xl font-semibold tabular-nums">{p.priceFormatted}</div>
                <div className="mt-1 flex-1 text-[12.5px]">
                  {p.bonusPaise > 0 ? (
                    <span className="text-good font-medium">+{formatINR(p.bonusPaise)} bonus · {p.totalFormatted} total</span>
                  ) : (
                    <span className="text-mut2">Standard balance</span>
                  )}
                </div>
                <Button
                  className="mt-4 w-full"
                  size="sm"
                  disabled={busy && activeSlug !== p.slug}
                  loading={busy && activeSlug === p.slug}
                  onClick={() => void checkout(p)}
                >
                  {activeSlug === p.slug
                    ? checkoutState === "INITIALIZING"
                      ? "Initializing..."
                      : checkoutState === "CHECKOUT_OPEN"
                        ? "Checkout Active"
                        : checkoutState === "VERIFYING"
                          ? "Verifying..."
                          : `Buy ${p.priceFormatted}`
                    : `Buy ${p.priceFormatted}`}
                </Button>
              </Card>
            ))}
          </div>
        )}
      </section>

      {/* Transactions */}
      <Card>
        <div className="border-b border-line px-5 py-3.5">
          <h2 className="text-sm font-semibold">Transaction ledger</h2>
          <p className="mt-0.5 text-[12.5px] text-mut">Append-only. Every balance change is an immutable ledger entry.</p>
        </div>
        {wallet.transactions.length === 0 ? (
          <div className="p-5">
            <EmptyState icon={<History className="size-6" strokeWidth={1.75} />} title="No transactions yet." />
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-[13px]">
              <thead className="text-[11px] uppercase tracking-wide text-mut2">
                <tr className="border-b border-line">
                  <th scope="col" className="px-5 py-2.5 font-medium">When</th>
                  <th scope="col" className="px-3 py-2.5 font-medium">Type</th>
                  <th scope="col" className="px-3 py-2.5 font-medium">Amount</th>
                  <th scope="col" className="px-3 py-2.5 font-medium">Balance after</th>
                  <th scope="col" className="px-5 py-2.5 font-medium">Reference</th>
                </tr>
              </thead>
              <tbody>
                {wallet.transactions.map((t) => (
                  <tr key={t.id} className="border-b border-line/60 transition-colors duration-200 last:border-0 hover:bg-white/[0.03]">
                    <td className="whitespace-nowrap px-5 py-2.5 text-mut">{timeAgo(t.createdAt)}</td>
                    <td className="px-3 py-2.5"><Badge tone={txTone[t.type] ?? "neutral"}>{t.type}</Badge></td>
                    <td className={cx("whitespace-nowrap px-3 py-2.5 font-mono tabular-nums", t.amountPaise >= 0 ? "text-good" : "text-bad")}>
                      {t.amountPaise >= 0 ? "+" : "−"}{formatINR(Math.abs(t.amountPaise))}
                    </td>
                    <td className="whitespace-nowrap px-3 py-2.5 font-mono tabular-nums text-mut">{formatINR(t.balanceAfterPaise)}</td>
                    <td className="whitespace-nowrap px-5 py-2.5 font-mono text-[12px] text-mut2">{t.reference ?? "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>

      {/* Payments */}
      <Card>
        <div className="border-b border-line px-5 py-3.5">
          <h2 className="text-sm font-semibold">Payment History</h2>
          <p className="mt-0.5 text-[12.5px] text-mut">Verified gateway charges with corresponding GST invoice numbers.</p>
        </div>
        {payments.length === 0 ? (
          <div className="p-5">
            <EmptyState icon={<Receipt className="size-6" strokeWidth={1.75} />} title="No payments yet" body="Buy a credit package above and the payment will appear here with its invoice number." />
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-[13px]">
              <thead className="text-[11px] uppercase tracking-wide text-mut2">
                <tr className="border-b border-line">
                  <th scope="col" className="px-5 py-2.5 font-medium">Invoice</th>
                  <th scope="col" className="px-3 py-2.5 font-medium">Gateway</th>
                  <th scope="col" className="px-3 py-2.5 font-medium">Amount</th>
                  <th scope="col" className="px-3 py-2.5 font-medium">Status</th>
                  <th scope="col" className="px-5 py-2.5 font-medium">Created</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((p) => (
                  <tr key={p.id} className="border-b border-line/60 transition-colors duration-200 last:border-0 hover:bg-white/[0.03]">
                    <td className="whitespace-nowrap px-5 py-2.5 font-mono text-[12px]">{p.invoice}</td>
                    <td className="px-3 py-2.5 text-mut">{p.gateway}</td>
                    <td className="whitespace-nowrap px-3 py-2.5 font-mono tabular-nums">{p.amountFormatted}</td>
                    <td className="px-3 py-2.5"><Badge tone={p.status === "captured" ? "good" : p.status === "failed" ? "bad" : "neutral"}>{p.status}</Badge></td>
                    <td className="whitespace-nowrap px-5 py-2.5 text-mut">{timeAgo(p.createdAt)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>

      {/* Verified Receipt Modal */}
      <Modal open={!!receipt} onClose={() => setReceipt(null)} title="Payment Receipt">
        {receipt && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 rounded-lg border border-good/30 bg-good/10 p-3 text-good text-sm">
              <CheckCircle2 className="size-5 shrink-0" />
              <div>
                <p className="font-semibold">Payment Confirmed & Verified</p>
                <p className="text-[12px] text-good/80">Funds added instantly to your ProRouter account balance.</p>
              </div>
            </div>

            <div className="rounded-xl border border-line bg-panel2/60 p-4 font-mono text-xs space-y-2.5">
              <div className="flex justify-between border-b border-line/60 pb-2">
                <span className="text-mut">Invoice #:</span>
                <span className="font-bold text-fg">{receipt.invoice}</span>
              </div>
              <div className="flex justify-between border-b border-line/60 pb-2">
                <span className="text-mut">Razorpay Payment ID:</span>
                <span className="text-fg">{receipt.paymentId}</span>
              </div>
              {receipt.orderId && (
                <div className="flex justify-between border-b border-line/60 pb-2">
                  <span className="text-mut">Gateway Order ID:</span>
                  <span className="text-fg">{receipt.orderId}</span>
                </div>
              )}
              <div className="flex justify-between border-b border-line/60 pb-2">
                <span className="text-mut">Item:</span>
                <span className="text-fg">{receipt.packageName}</span>
              </div>
              <div className="flex justify-between border-b border-line/60 pb-2">
                <span className="text-mut">Amount Paid:</span>
                <span className="font-bold text-fg">{receipt.amountFormatted}</span>
              </div>
              <div className="flex justify-between border-b border-line/60 pb-2">
                <span className="text-mut">Credits Added:</span>
                <span className="font-bold text-good">{receipt.creditsFormatted}</span>
              </div>
              <div className="flex justify-between border-b border-line/60 pb-2">
                <span className="text-mut">Date & Time:</span>
                <span className="text-fg">{receipt.date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-mut">Account:</span>
                <span className="text-fg">{receipt.userEmail}</span>
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  if (typeof window !== "undefined") window.print();
                }}
              >
                <Printer className="size-3.5 mr-1.5" />
                Print Receipt
              </Button>
              <Button size="sm" onClick={() => setReceipt(null)}>
                Done
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default function WalletPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-mut font-mono text-xs">Loading wallet...</div>}>
      <WalletContent />
    </Suspense>
  );
}
