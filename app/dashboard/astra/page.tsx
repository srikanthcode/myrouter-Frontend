"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { Check, Sparkles } from "lucide-react";
import { ApiError, api } from "@/lib/api";
import { Badge, Button, Card, Input, Skeleton, useToast } from "@/components/ui";
import { useSession } from "@/components/DashboardShell";

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

export default function AstraPage() {
  const toast = useToast();
  const { refresh } = useSession();
  const [data, setData] = useState<AstraPromo | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [code, setCode] = useState("");
  const [busy, setBusy] = useState(false);

  const load = useCallback(async () => {
    try {
      setData(await api<AstraPromo>("/promotions/astra"));
      setError(null);
    } catch (e) {
      setError(e instanceof ApiError ? e.message : "Could not load the Astra promotion.");
    }
  }, []);

  useEffect(() => {
    void refresh();
    void load();
  }, [load]);

  async function redeem(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    try {
      await api("/promotions/astra/redeem", { method: "POST", body: { code: code.trim().toUpperCase() } });
      toast.push("Astra activated!", "success");
      setCode("");
      await load();
      await refresh();
    } catch (err) {
      toast.push(err instanceof ApiError ? err.message : "Could not redeem that code.", "error");
    } finally {
      setBusy(false);
    }
  }

  if (error) return <div className="rounded-xl border border-bad/30 bg-bad/10 p-4 text-sm text-bad" role="alert">{error}</div>;
  if (!data) return <div className="space-y-4">{[0, 1].map((i) => <Skeleton key={i} className="h-32 w-full" />)}</div>;

  const campaign = data.campaign;
  const ent = data.entitlement;
  const trialPct = ent
    ? Math.max(2, Math.min(100, (ent.daysLeft / Math.max(1, campaign?.trialDays ?? ent.daysLeft)) * 100))
    : 0;

  return (
    <div className="fade-up space-y-6">
      <div>
        <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">Astra</h1>
        <p className="mt-1 text-[13.5px] text-mut">The flagship model tier. Activate it with a referral code or subscribe at the promotional price.</p>
      </div>

      {/* Status */}
      <Card className="p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-[15px] font-semibold">Status</h2>
              <Badge tone={ent ? "good" : "neutral"}>{ent ? "Active" : "Not active"}</Badge>
            </div>
            {ent ? (
              <>
                <p className="mt-3 text-[13.5px] text-mut">
                  {ent.daysLeft} day{ent.daysLeft === 1 ? "" : "s"} remaining — expires on{" "}
                  {new Date(ent.expiresAt).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}.
                </p>
                <div
                  className="mt-4 h-1.5 w-full max-w-sm overflow-hidden rounded-full bg-white/[0.06]"
                  role="progressbar"
                  aria-label="Trial days remaining"
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={Math.round(trialPct)}
                >
                  <div className="h-full rounded-full bg-accent transition-colors duration-200" style={{ width: `${trialPct}%` }} />
                </div>
              </>
            ) : (
              <p className="mt-3 text-[13.5px] text-mut">
                Astra is not active on your account. Redeem a referral code below, or subscribe from the pricing page.
              </p>
            )}
          </div>
          <Link href="/chat"><Button variant="secondary">Try Astra in playground</Button></Link>
        </div>
      </Card>

      {/* Redeem */}
      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="p-6">
          <h2 className="text-sm font-semibold">Redeem a code</h2>
          <p className="mt-1 text-[12.5px] text-mut">Activate a {campaign?.trialDays ?? 7}-day Astra trial with a referral or gift code.</p>
          <form onSubmit={redeem} className="mt-4 space-y-4">
            <Input
              label="Referral or gift code"
              placeholder="PRO-XXXXXX"
              value={code}
              onChange={(e) => setCode(e.target.value.toUpperCase())}
              autoComplete="off"
              required
            />
            <Button type="submit" loading={busy} disabled={code.trim().length < 4}>Activate Astra</Button>
          </form>
          <p className="mt-3 text-[12px] text-mut2">You cannot redeem your own code. Get yours on the <Link href="/dashboard/referrals" className="text-accent transition-colors duration-200 hover:text-accent2">referrals page</Link>.</p>
        </Card>

        {/* Campaign */}
        {campaign ? (
          <Card className="border-accent/40 p-6">
            <div className="flex flex-wrap items-center gap-2">
              <Sparkles className="size-4 text-accent" strokeWidth={1.75} aria-hidden="true" />
              <h2 className="text-sm font-semibold">{campaign.name}</h2>
              <Badge tone="accent">{campaign.discountPercent}% off</Badge>
              {!campaign.active && <Badge tone="warn">inactive</Badge>}
            </div>
            <div className="mt-4 flex flex-wrap items-baseline gap-3">
              <span className="font-mono text-2xl font-semibold tabular-nums text-accent">{campaign.promoPriceFormatted}</span>
              <span className="font-mono text-[14px] tabular-nums text-mut2 line-through">{campaign.originalPriceFormatted}</span>
            </div>
            <ul className="mt-4 grid gap-2">
              <li className="flex items-start gap-2 text-[13px] text-mut">
                <Check className="mt-0.5 size-3.5 shrink-0 text-accent" strokeWidth={1.75} aria-hidden="true" />
                <span>Includes a {campaign.trialDays}-day trial.</span>
              </li>
              {campaign.endsAt && (
                <li className="flex items-start gap-2 text-[13px] text-mut">
                  <Check className="mt-0.5 size-3.5 shrink-0 text-accent" strokeWidth={1.75} aria-hidden="true" />
                  <span>Offer ends {new Date(campaign.endsAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}.</span>
                </li>
              )}
            </ul>
            <Link href="/pricing" className="mt-5 inline-flex h-10 items-center justify-center rounded-lg bg-accent px-5 text-sm font-medium text-accent-ink transition-colors duration-200 hover:bg-accent2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">Subscribe on pricing page</Link>
          </Card>
        ) : (
          <Card className="p-6">
            <h2 className="text-sm font-semibold">No active campaign</h2>
            <p className="mt-2 text-[13px] text-mut">There is no Astra campaign running on this deployment right now. Referral redemption is unavailable until one is active.</p>
          </Card>
        )}
      </div>

      {data.myCode && (
        <Card className="p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="text-[11.5px] uppercase tracking-wide text-mut2">Your referral code</div>
              <div className="mt-1.5 font-mono text-lg tracking-wider text-accent">{data.myCode}</div>
            </div>
            <Link href="/dashboard/referrals"><Button variant="secondary" size="sm">Manage referrals</Button></Link>
          </div>
        </Card>
      )}
    </div>
  );
}
