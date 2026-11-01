"use client";

import { useCallback, useEffect, useState } from "react";
import { ArrowDownToLine, ArrowUpFromLine, CreditCard, History, Package, Receipt, ShieldCheck, Wallet } from "lucide-react";
import { ApiError, api, cx, formatINR, timeAgo } from "@/lib/api";
import { Badge, Button, Card, EmptyState, Modal, Skeleton, useToast } from "@/components/ui";
import { useSession } from "@/components/DashboardShell";

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
  {
    id: "pkg-builder",
    slug: "builder",
    name: "Builder Plan",
    pricePaise: 99900,
    priceFormatted: "₹999",
    bonusPaise: 5100,
    totalPaise: 105000,
    totalFormatted: "₹1,050",
    currency: "INR",
  },
  {
    id: "pkg-pro",
    slug: "pro",
    name: "Pro Plan",
    pricePaise: 249900,
    priceFormatted: "₹2,499",
    bonusPaise: 25100,
    totalPaise: 275000,
    totalFormatted: "₹2,750",
    currency: "INR",
  },
];

export default function WalletPage() {
  const toast = useToast();
  const { me, refresh } = useSession();
  const [wallet, setWallet] = useState<WalletData | null>(null);
  const [packages, setPackages] = useState<PackageItem[]>([]);
  const [payments, setPayments] = useState<Payment[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [buying, setBuying] = useState<PackageItem | null>(null);
  const [busy, setBusy] = useState(false);

  const load = useCallback(async () => {
    try {
      const [w, p, pay] = await Promise.all([
        api<WalletData>("/wallet"),
        api<{ items: PackageItem[] }>("/wallet/packages"),
        api<{ items: Payment[] }>("/payments"),
      ]);
      setWallet(w);
      const items = Array.isArray(p?.items) && p.items.length > 0 ? p.items : Array.isArray(p) && (p as unknown as PackageItem[]).length > 0 ? (p as unknown as PackageItem[]) : DEFAULT_WALLET_PACKAGES;
      setPackages(items);
      setPayments(Array.isArray(pay?.items) ? pay.items : Array.isArray(pay) ? (pay as unknown as Payment[]) : []);
      setError(null);
    } catch (e) {
      setError(e instanceof ApiError ? e.message : "Could not load your wallet.");
    }
  }, []);

  useEffect(() => {
    void refresh();
    void load();
  }, [load, refresh]);

  async function checkout(pkg: PackageItem) {
    setBusy(true);
    try {
      const loaded = await loadRazorpayScript();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if (!loaded || !(window as any).Razorpay) {
        toast.push("Could not load Razorpay payment gateway. Please check your connection.", "error");
        setBusy(false);
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
        body: { packageSlug: pkg.slug, idempotencyKey: `web-${pkg.slug}-${Date.now()}` },
      });

      if (!res.gatewayOrderId) {
        throw new Error("Could not initialize payment order. Please try again.");
      }

      const razorpayKey = res.keyId || process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_live_TDesBovNH5VpIY";

      const options = {
        key: razorpayKey,
        amount: res.amountPaise,
        currency: res.currency || "INR",
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
            setBusy(true);
            await api("/wallet/verify", {
              method: "POST",
              body: {
                paymentId: res.paymentId,
                razorpayPaymentId: response.razorpay_payment_id,
                razorpayOrderId: response.razorpay_order_id,
                razorpaySignature: response.razorpay_signature,
              },
            });
            toast.push(`Payment successful! ${pkg.totalFormatted || pkg.priceFormatted} added to your wallet.`, "success");
            setBuying(null);
            await load();
            await refresh();
          } catch (verifyErr) {
            toast.push(verifyErr instanceof ApiError ? verifyErr.message : "Payment verification failed. Please contact support.", "error");
          } finally {
            setBusy(false);
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
          },
        },
      };

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const rzp = new (window as any).Razorpay(options);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      rzp.on("payment.failed", (failRes: any) => {
        toast.push(failRes?.error?.description || "Payment failed. Please try another payment method.", "error");
        setBusy(false);
      });
      rzp.open();
    } catch (e) {
      toast.push(e instanceof ApiError ? e.message : "Could not start checkout.", "error");
      setBusy(false);
    }
  }

  const credits = (wallet?.transactions ?? []).filter((t) => t.amountPaise > 0).reduce((a, t) => a + t.amountPaise, 0);
  const debits = (wallet?.transactions ?? []).filter((t) => t.amountPaise < 0).reduce((a, t) => a + Math.abs(t.amountPaise), 0);

  if (error) return <div className="rounded-xl border border-bad/30 bg-bad/10 p-4 text-sm text-bad" role="alert">{error}</div>;
  if (!wallet) return <div className="space-y-4">{[0, 1, 2].map((i) => <Skeleton key={i} className="h-28 w-full" />)}</div>;

  return (
    <div className="fade-up space-y-6">
      <div>
        <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">Wallet & Billing</h1>
        <p className="mt-1 text-[13.5px] text-mut">Prepaid balance in INR. Paid-model inference is deducted per request; free models cost nothing.</p>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <Card className="p-5 sm:col-span-1">
          <div className="flex items-center justify-between gap-2">
            <div className="text-[11.5px] uppercase tracking-wide text-mut2">Available balance</div>
            <Wallet className="size-3.5 shrink-0 text-mut2" strokeWidth={1.75} aria-hidden="true" />
          </div>
          <div className="mt-2 font-mono text-3xl font-semibold tabular-nums text-good">{wallet.balanceFormatted}</div>
          <div className="mt-1 text-[12.5px] text-mut2">{wallet.currency} · prepaid, never expires</div>
        </Card>
        <Card className="p-5">
          <div className="flex items-center justify-between gap-2">
            <div className="text-[11.5px] uppercase tracking-wide text-mut2">Credited (recent)</div>
            <ArrowDownToLine className="size-3.5 shrink-0 text-mut2" strokeWidth={1.75} aria-hidden="true" />
          </div>
          <div className="mt-2 font-mono text-xl font-semibold tabular-nums text-good">{formatINR(credits)}</div>
        </Card>
        <Card className="p-5">
          <div className="flex items-center justify-between gap-2">
            <div className="text-[11.5px] uppercase tracking-wide text-mut2">Spent (recent)</div>
            <ArrowUpFromLine className="size-3.5 shrink-0 text-mut2" strokeWidth={1.75} aria-hidden="true" />
          </div>
          <div className="mt-2 font-mono text-xl font-semibold tabular-nums text-bad">{formatINR(debits)}</div>
        </Card>
      </div>

      {/* Top up */}
      <section>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-sm font-semibold">Add credits</h2>
            <p className="mt-0.5 text-[12.5px] text-mut">Pay securely with UPI, Credit/Debit Cards, or NetBanking via Razorpay.</p>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 rounded-full border border-line bg-panel2/60 px-3 py-1 font-mono text-[10.5px] text-mut">
            <ShieldCheck className="size-3 text-good" />
            <span>Instant Activation</span>
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
                  "flex flex-col p-5 transition-colors duration-200",
                  buying?.slug === p.slug ? "border-accent/60" : "hover:border-line2",
                )}
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-[15px] font-semibold">{p.name}</h3>
                  {p.bonusPaise > 0 && <Badge tone="accent">Bonus</Badge>}
                </div>
                <div className="mt-2 font-mono text-xl font-semibold tabular-nums">{p.priceFormatted}</div>
                <div className="mt-1 flex-1 text-[12.5px]">
                  {p.bonusPaise > 0 ? (
                    <span className="text-good font-medium">+{formatINR(p.bonusPaise)} bonus · {p.totalFormatted} total</span>
                  ) : (
                    <span className="text-mut2">No bonus credit</span>
                  )}
                </div>
                <Button className="mt-4" size="sm" onClick={() => setBuying(p)}>
                  Buy {p.priceFormatted}
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
          <p className="mt-0.5 text-[12.5px] text-mut">Append-only. Every balance change is a new row — nothing is edited in place.</p>
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

      <Modal open={!!buying} onClose={() => !busy && setBuying(null)} title="Confirm Top-Up">
        {buying && (
          <div className="space-y-4">
            <div className="rounded-lg border border-line bg-ink2/60 p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-[14px] font-semibold text-fg">{buying.name}</h4>
                  <p className="mt-0.5 text-[12px] text-mut">ProRouter API Balance</p>
                </div>
                <div className="text-right">
                  <div className="font-mono text-lg font-bold text-fg">{buying.priceFormatted}</div>
                  {buying.bonusPaise > 0 && (
                    <div className="font-mono text-[11px] text-good">+{formatINR(buying.bonusPaise)} Bonus</div>
                  )}
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between border-t border-line/60 pt-2.5 text-[12px]">
                <span className="text-mut">Total Credits Received:</span>
                <span className="font-mono font-semibold text-good">{buying.totalFormatted}</span>
              </div>
            </div>

            {/* Payment Method Badges */}
            <div className="rounded-lg border border-line bg-panel2/40 p-3.5 text-[11.5px] space-y-2">
              <div className="flex items-center gap-2 font-medium text-fg">
                <ShieldCheck className="size-4 text-good" />
                <span>Secured by Razorpay</span>
              </div>
              <p className="text-mut text-[11.5px] leading-relaxed">
                Supports all payment methods: UPI (Google Pay, PhonePe, Paytm, BHIM), Credit/Debit Cards (Visa, Mastercard, RuPay), NetBanking, and Wallets.
              </p>
              <div className="flex items-center gap-2 pt-1 text-[11px] text-mut2">
                <CreditCard className="size-3.5" />
                <span>Instant 256-bit encrypted checkout</span>
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <Button variant="ghost" disabled={busy} onClick={() => setBuying(null)}>
                Cancel
              </Button>
              <Button loading={busy} onClick={() => void checkout(buying)}>
                Pay {buying.priceFormatted}
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
