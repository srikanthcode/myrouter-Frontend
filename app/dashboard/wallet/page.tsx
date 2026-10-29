"use client";

import { useCallback, useEffect, useState } from "react";
import { ArrowDownToLine, ArrowUpFromLine, History, Package, Receipt, Wallet } from "lucide-react";
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

interface Package {
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

export default function WalletPage() {
  const toast = useToast();
  const { refresh } = useSession();
  const [wallet, setWallet] = useState<WalletData | null>(null);
  const [packages, setPackages] = useState<Package[]>([]);
  const [payments, setPayments] = useState<Payment[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [buying, setBuying] = useState<Package | null>(null);
  const [busy, setBusy] = useState(false);

  const load = useCallback(async () => {
    try {
      const [w, p, pay] = await Promise.all([
        api<WalletData>("/wallet"),
        api<{ items: Package[] }>("/wallet/packages"),
        api<{ items: Payment[] }>("/payments"),
      ]);
      setWallet(w);
      setPackages(Array.isArray(p?.items) ? p.items : Array.isArray(p) ? (p as unknown as Package[]) : []);
      setPayments(Array.isArray(pay?.items) ? pay.items : Array.isArray(pay) ? (pay as unknown as Payment[]) : []);
      setError(null);
    } catch (e) {
      setError(e instanceof ApiError ? e.message : "Could not load your wallet.");
    }
  }, []);

  useEffect(() => {
    void refresh();
    void load();
  }, [load]);

  async function checkout(pkg: Package) {
    setBusy(true);
    try {
      const res = await api<{ paymentId: string; invoice: string; gatewayOrderId?: string; keyId?: string }>("/wallet/checkout", {
        method: "POST",
        body: { packageSlug: pkg.slug, idempotencyKey: `web-${pkg.slug}-${Date.now()}` },
      });
      toast.push(`Checkout created for ${pkg.priceFormatted} (invoice ${res.invoice}). Wallet is credited once the gateway webhook confirms payment.`, "success");
      setBuying(null);
      await load();
      await refresh();
    } catch (e) {
      toast.push(e instanceof ApiError ? e.message : "Could not start checkout.", "error");
    } finally {
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
        <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">Wallet</h1>
        <p className="mt-1 text-[13.5px] text-mut">Prepaid balance in INR. Paid-model inference is deducted per request; free models cost nothing.</p>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <Card className="p-5 sm:col-span-1">
          <div className="flex items-center justify-between gap-2">
            <div className="text-[11.5px] uppercase tracking-wide text-mut2">Available balance</div>
            <Wallet className="size-3.5 shrink-0 text-mut2" strokeWidth={1.75} aria-hidden="true" />
          </div>
          <div className="mt-2 font-mono text-3xl font-semibold tabular-nums">{wallet.balanceFormatted}</div>
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
        <h2 className="text-sm font-semibold">Add credits</h2>
        <p className="mt-1 text-[12.5px] text-mut">Some packages include bonus credit on top of what you pay.</p>
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
                <h3 className="text-[15px] font-semibold">{p.name}</h3>
                <div className="mt-2 font-mono text-xl font-semibold tabular-nums">{p.priceFormatted}</div>
                <div className="mt-1 flex-1 text-[12.5px]">
                  {p.bonusPaise > 0 ? <span className="text-good">+{formatINR(p.bonusPaise)} bonus · {p.totalFormatted} total</span> : <span className="text-mut2">No bonus credit</span>}
                </div>
                <Button className="mt-4" size="sm" onClick={() => setBuying(p)}>Buy {p.priceFormatted}</Button>
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
          <h2 className="text-sm font-semibold">Payments</h2>
          <p className="mt-0.5 text-[12.5px] text-mut">Credit is applied only after the gateway webhook is signature-verified.</p>
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

      <Modal open={!!buying} onClose={() => setBuying(null)} title="Confirm top-up">
        {buying && (
          <>
            <p className="text-[13px] text-mut">
              You are buying <span className="font-medium text-fg">{buying.name}</span> for{" "}
              <span className="font-mono tabular-nums text-fg">{buying.priceFormatted}</span>
              {buying.bonusPaise > 0 && <> and will receive <span className="font-mono tabular-nums text-good">{buying.totalFormatted}</span> in credits</>}.
            </p>
            <p className="mt-3 text-[12.5px] text-mut2">
              Your wallet is credited only after the payment gateway confirms the charge via a verified webhook. If the gateway is not configured on this
              deployment, the checkout will return a clear error and no money will move.
            </p>
            <div className="mt-5 flex justify-end gap-2">
              <Button variant="ghost" onClick={() => setBuying(null)}>Cancel</Button>
              <Button loading={busy} onClick={() => void checkout(buying)}>Continue to payment</Button>
            </div>
          </>
        )}
      </Modal>
    </div>
  );
}
