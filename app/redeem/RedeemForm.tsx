"use client";

import Link from "next/link";
import { useState } from "react";
import { CheckCircle2, TriangleAlert } from "lucide-react";
import { ApiError, api } from "@/lib/api";
import { Badge, Button, Card, Input, useToast } from "@/components/ui";

interface RedeemResult {
  success: boolean;
  entitlement: { activatedAt: string; expiresAt: string; daysLeft: number };
  message: string;
}

const linkPrimary =
  "inline-flex h-10 cursor-pointer items-center justify-center rounded-lg bg-accent px-5 text-sm font-medium text-accent-ink transition-colors duration-200 hover:bg-accent2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";
const linkSecondary =
  "inline-flex h-10 cursor-pointer items-center justify-center rounded-lg border border-line2 bg-white/[0.04] px-5 text-sm font-medium text-fg transition-colors duration-200 hover:bg-white/[0.08] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export function RedeemForm({ defaultCode }: { defaultCode: string }) {
  const toast = useToast();
  const [code, setCode] = useState(defaultCode);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState<RedeemResult | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setBusy(true);
    try {
      const res = await api<RedeemResult>("/promotions/astra/redeem", { method: "POST", body: { code: code.trim().toUpperCase() } });
      setDone(res);
      toast.push(res.message || "Code redeemed!", "success");
    } catch (err) {
      const msg = err instanceof ApiError ? err.message : "Could not redeem this code.";
      setError(msg);
    } finally {
      setBusy(false);
    }
  }

  if (done) {
    return (
      <div className="max-w-md rounded-xl border border-good/30 bg-good/10 p-6">
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone="good">
            <CheckCircle2 className="size-3" strokeWidth={1.75} aria-hidden="true" />
            Activated
          </Badge>
          <span className="text-[14px] font-semibold text-good">{done.message}</span>
        </div>
        <p className="mt-3 text-[13.5px] leading-relaxed text-mut">
          Your Astra access is active for {done.entitlement.daysLeft} day{done.entitlement.daysLeft === 1 ? "" : "s"}, expiring on{" "}
          {new Date(done.entitlement.expiresAt).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <Link href="/dashboard/astra" className={linkPrimary}>
            Go to Astra
          </Link>
          <Link href="/chat" className={linkSecondary}>
            Try the playground
          </Link>
        </div>
      </div>
    );
  }

  return (
    <Card className="max-w-md p-6">
      <form onSubmit={submit} className="space-y-4">
        <Input
          label="Referral or gift code"
          placeholder="PRO-XXXXXX"
          value={code}
          onChange={(e) => setCode(e.target.value.toUpperCase())}
          hint="Codes look like PRO-A1B2C3 and are not case sensitive."
          autoComplete="off"
          required
        />
        {error && (
          <div className="flex items-start gap-2 rounded-lg border border-bad/30 bg-bad/10 px-3 py-2.5 text-[13px] text-bad" role="alert">
            <TriangleAlert className="mt-px size-4 shrink-0" aria-hidden="true" />
            {error}
          </div>
        )}
        <Button type="submit" loading={busy} disabled={code.trim().length < 4} className="w-full">
          Redeem code
        </Button>
        <p className="text-[12.5px] text-mut2">
          You cannot redeem your own referral code — share it with a friend instead. Each code can only be redeemed once per account.
        </p>
      </form>
    </Card>
  );
}
