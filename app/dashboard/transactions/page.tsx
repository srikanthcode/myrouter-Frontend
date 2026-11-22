"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowDownToLine, ArrowUpFromLine, Download, History, Receipt, Search, ShieldCheck } from "lucide-react";
import { ApiError, api, cx, formatINR, timeAgo } from "@/lib/api";
import { Badge, Button, Card, EmptyState, Input, Skeleton, useToast } from "@/components/ui";
import { useSession } from "@/components/DashboardShell";
import { useDashboardEvents } from "@/lib/useDashboardEvents";

interface Transaction {
  id: string;
  type: string;
  amountPaise: number;
  amountFormatted: string;
  balanceAfterPaise: number;
  reference: string | null;
  createdAt: string;
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

export default function TransactionsPage() {
  const toast = useToast();
  const { me, refresh } = useSession();
  const [transactions, setTransactions] = useState<Transaction[] | null>(null);
  const [payments, setPayments] = useState<Payment[]>([]);
  const [filterType, setFilterType] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    try {
      const [walletRes, payRes] = await Promise.all([
        api<{ balancePaise: number; transactions: Transaction[] }>("/wallet"),
        api<{ items: Payment[] }>("/payments"),
      ]);

      if (walletRes && Array.isArray(walletRes.transactions)) {
        const seen = new Set<string>();
        const deduped = walletRes.transactions.filter((t) => {
          if (!t.id || seen.has(t.id)) return false;
          seen.add(t.id);
          return true;
        });
        setTransactions(deduped);
      } else {
        setTransactions([]);
      }

      const rawPayments = Array.isArray(payRes?.items)
        ? payRes.items
        : Array.isArray(payRes)
        ? (payRes as unknown as Payment[])
        : [];
      const seenPay = new Set<string>();
      const dedupedPayments = rawPayments.filter((p) => {
        if (!p.id || seenPay.has(p.id)) return false;
        seenPay.add(p.id);
        return true;
      });
      setPayments(dedupedPayments);
      setError(null);
    } catch (e) {
      setError(e instanceof ApiError ? e.message : "Could not load transactions.");
      setTransactions([]);
    }
  }, []);

  useEffect(() => {
    void refresh();
    void load();
  }, [load, refresh]);

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

  const exportCsv = () => {
    if (!transactions || transactions.length === 0) return;
    const headers = ["Transaction ID", "Date", "Type", "Amount (INR)", "Balance After (INR)", "Reference"];
    const rows = transactions.map((t) => [
      t.id,
      t.createdAt,
      t.type,
      (t.amountPaise / 100).toFixed(2),
      (t.balanceAfterPaise / 100).toFixed(2),
      t.reference || "",
    ]);
    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const encoded = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encoded);
    link.setAttribute("download", `prorouter_transactions_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.push("Exported transactions ledger CSV.", "success");
  };

  const filteredTransactions = (transactions || []).filter((t) => {
    if (filterType !== "all" && t.type !== filterType) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      const matchRef = t.reference?.toLowerCase().includes(q);
      const matchType = t.type.toLowerCase().includes(q);
      const matchId = t.id.toLowerCase().includes(q);
      if (!matchRef && !matchType && !matchId) return false;
    }
    return true;
  });

  const credits = (transactions ?? []).filter((t) => t.amountPaise > 0).reduce((a, t) => a + t.amountPaise, 0);
  const debits = (transactions ?? []).filter((t) => t.amountPaise < 0).reduce((a, t) => a + Math.abs(t.amountPaise), 0);

  return (
    <div className="fade-up space-y-6 max-w-7xl mx-auto pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-xl font-semibold tracking-tight sm:text-2xl text-fg">
            Transactions & Billing Ledger
          </h1>
          <p className="mt-1 text-[13.5px] text-mut">
            Append-only financial ledger. Every wallet top-up, promotional credit, and inference deduction is recorded permanently.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="secondary" size="sm" onClick={exportCsv} disabled={!transactions || transactions.length === 0}>
            <Download className="size-3.5 mr-1" />
            Export CSV
          </Button>
          <Link
            href="/dashboard/wallet"
            className="inline-flex h-8 items-center rounded-lg bg-accent px-3 text-xs font-medium text-accent-ink hover:bg-accent2 transition"
          >
            Add Funds
          </Link>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid gap-3 sm:grid-cols-3">
        <Card className="p-4">
          <div className="flex items-center justify-between text-xs text-mut2 uppercase tracking-wider">
            <span>Authoritative Balance</span>
            <ShieldCheck className="size-3.5 text-good" />
          </div>
          <div className="mt-2 font-mono text-2xl font-bold text-good">
            {me ? formatINR(me.balancePaise) : "₹0.00"}
          </div>
          <div className="text-[11.5px] text-mut2 mt-0.5">Live synced balance</div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between text-xs text-mut2 uppercase tracking-wider">
            <span>Total Credited</span>
            <ArrowDownToLine className="size-3.5 text-good" />
          </div>
          <div className="mt-2 font-mono text-2xl font-bold text-fg">
            {formatINR(credits)}
          </div>
          <div className="text-[11.5px] text-mut2 mt-0.5">Top-ups and bonus credits</div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between text-xs text-mut2 uppercase tracking-wider">
            <span>Total Spent</span>
            <ArrowUpFromLine className="size-3.5 text-bad" />
          </div>
          <div className="mt-2 font-mono text-2xl font-bold text-bad">
            {formatINR(debits)}
          </div>
          <div className="text-[11.5px] text-mut2 mt-0.5">Model inference usage</div>
        </Card>
      </div>

      {/* Filter and Search Bar */}
      <Card className="p-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex flex-wrap items-center gap-1.5">
            {[
              ["all", "All Transactions"],
              ["topup", "Top-Ups"],
              ["usage", "Inference Usage"],
              ["promotional", "Free Quota / Bonus"],
              ["refund", "Refunds"],
            ].map(([k, label]) => (
              <button
                key={k}
                onClick={() => setFilterType(k)}
                className={cx(
                  "cursor-pointer rounded-lg px-3 py-1.5 text-xs font-medium transition",
                  filterType === k
                    ? "bg-accent text-accent-ink shadow-xs"
                    : "border border-line bg-panel2/60 text-mut hover:text-fg"
                )}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="w-full sm:w-64">
            <Input
              placeholder="Search reference, type, ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-8 text-xs"
            />
          </div>
        </div>
      </Card>

      {/* Ledger Table */}
      <Card className="overflow-hidden">
        <div className="border-b border-line px-5 py-3.5 flex items-center justify-between">
          <div>
            <h2 className="text-sm font-semibold text-fg">Ledger Entries</h2>
            <p className="text-xs text-mut mt-0.5">Every balance change is a verified, immutable ledger row.</p>
          </div>
          <span className="text-xs font-mono text-mut2">
            {filteredTransactions.length} {filteredTransactions.length === 1 ? "entry" : "entries"}
          </span>
        </div>

        {error ? (
          <div className="p-4 text-xs text-bad bg-bad/10">{error}</div>
        ) : transactions === null ? (
          <div className="p-5 space-y-3">
            {[0, 1, 2].map((i) => (
              <Skeleton key={i} className="h-10 w-full" />
            ))}
          </div>
        ) : filteredTransactions.length === 0 ? (
          <div className="p-8">
            <EmptyState
              icon={<History className="size-6 text-mut2" />}
              title="No transactions found"
              body={searchQuery ? "No entries match your search criteria." : "When you top up credits or run model inferences, transactions appear here in real time."}
            />
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-line bg-white/[0.02] text-[11px] uppercase tracking-wide text-mut2">
                <tr>
                  <th scope="col" className="px-5 py-3 font-medium">When</th>
                  <th scope="col" className="px-3 py-3 font-medium">Type</th>
                  <th scope="col" className="px-3 py-3 font-medium text-right">Amount</th>
                  <th scope="col" className="px-3 py-3 font-medium text-right">Balance After</th>
                  <th scope="col" className="px-5 py-3 font-medium">Reference</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line/60">
                {filteredTransactions.map((t) => (
                  <tr key={t.id} className="hover:bg-white/[0.02] transition">
                    <td className="whitespace-nowrap px-5 py-3 text-mut">{timeAgo(t.createdAt)}</td>
                    <td className="px-3 py-3">
                      <Badge tone={txTone[t.type] ?? "neutral"}>{t.type}</Badge>
                    </td>
                    <td className={cx("whitespace-nowrap px-3 py-3 font-mono text-right font-medium", t.amountPaise >= 0 ? "text-good" : "text-bad")}>
                      {t.amountPaise >= 0 ? "+" : "−"}{formatINR(Math.abs(t.amountPaise))}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3 font-mono text-right text-mut">{formatINR(t.balanceAfterPaise)}</td>
                    <td className="whitespace-nowrap px-5 py-3 font-mono text-[11.5px] text-mut2">{t.reference ?? "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>

      {/* Payment Receipts */}
      <Card className="overflow-hidden">
        <div className="border-b border-line px-5 py-3.5">
          <h2 className="text-sm font-semibold text-fg">Gateway Payment Receipts</h2>
          <p className="text-xs text-mut mt-0.5">Razorpay order records and GST invoice tracking.</p>
        </div>

        {payments.length === 0 ? (
          <div className="p-8">
            <EmptyState
              icon={<Receipt className="size-6 text-mut2" />}
              title="No payment receipts yet"
              body="When you top up your wallet via UPI, Cards, or NetBanking, verified receipts appear here."
            />
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-line bg-white/[0.02] text-[11px] uppercase tracking-wide text-mut2">
                <tr>
                  <th scope="col" className="px-5 py-3 font-medium">Invoice Number</th>
                  <th scope="col" className="px-3 py-3 font-medium">Gateway</th>
                  <th scope="col" className="px-3 py-3 font-medium text-right">Amount</th>
                  <th scope="col" className="px-3 py-3 font-medium">Status</th>
                  <th scope="col" className="px-5 py-3 font-medium">Created</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line/60">
                {payments.map((p) => (
                  <tr key={p.id} className="hover:bg-white/[0.02] transition">
                    <td className="whitespace-nowrap px-5 py-3 font-mono font-medium text-fg">{p.invoice}</td>
                    <td className="px-3 py-3 text-mut uppercase text-[11px]">{p.gateway}</td>
                    <td className="whitespace-nowrap px-3 py-3 font-mono text-right text-fg font-medium">{p.amountFormatted}</td>
                    <td className="px-3 py-3">
                      <Badge tone={p.status === "captured" ? "good" : p.status === "failed" ? "bad" : "neutral"}>
                        {p.status}
                      </Badge>
                    </td>
                    <td className="whitespace-nowrap px-5 py-3 text-mut">{timeAgo(p.createdAt)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>
    </div>
  );
}
