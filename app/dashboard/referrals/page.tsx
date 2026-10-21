"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { Sparkles, UserCheck, Users } from "lucide-react";
import { ApiError, api } from "@/lib/api";
import { Badge, Card, CopyButton, EmptyState, Input, Skeleton } from "@/components/ui";

interface Referral {
  code: string;
  sharePath: string;
  successfulRedemptions: number;
  activeAstraUsers: number;
  trialDays: number;
}

const linkButtonSecondary =
  "inline-flex h-8 cursor-pointer items-center justify-center rounded-lg border border-line2 bg-white/[0.04] px-3 text-[13px] font-medium text-fg transition-colors duration-200 hover:bg-white/[0.08] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export default function ReferralsPage() {
  const [data, setData] = useState<Referral | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [origin, setOrigin] = useState("");

  const load = useCallback(async () => {
    try {
      setData(await api<Referral>("/promotions/astra/referral"));
      setError(null);
    } catch (e) {
      setError(e instanceof ApiError ? e.message : "Could not load your referral code.");
    }
  }, []);

  useEffect(() => {
    setOrigin(window.location.origin);
    void load();
  }, [load]);

  const shareUrl = data ? `${origin}${data.sharePath}` : "";

  if (error) return <div className="rounded-xl border border-bad/30 bg-bad/10 p-4 text-sm text-bad" role="alert">{error}</div>;
  if (!data) return <div className="space-y-4">{[0, 1].map((i) => <Skeleton key={i} className="h-32 w-full" />)}</div>;

  return (
    <div className="fade-up space-y-6">
      <div>
        <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">Referrals</h1>
        <p className="mt-1 text-[13.5px] text-mut">
          Share your code — when someone redeems it they get {data.trialDays} days of Astra access, and you can track it here.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <Card className="p-4">
          <div className="flex items-center justify-between gap-2">
            <div className="text-[11.5px] uppercase tracking-wide text-mut2">Successful redemptions</div>
            <UserCheck className="size-3.5 shrink-0 text-mut2" strokeWidth={1.75} aria-hidden="true" />
          </div>
          <div className="mt-1.5 font-mono text-2xl font-semibold tabular-nums">{data.successfulRedemptions}</div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center justify-between gap-2">
            <div className="text-[11.5px] uppercase tracking-wide text-mut2">Active Astra users from your code</div>
            <Sparkles className="size-3.5 shrink-0 text-mut2" strokeWidth={1.75} aria-hidden="true" />
          </div>
          <div className="mt-1.5 font-mono text-2xl font-semibold tabular-nums">{data.activeAstraUsers}</div>
        </Card>
      </div>

      <Card className="p-6">
        <div className="flex flex-wrap items-center gap-2">
          <h2 className="text-sm font-semibold">Your referral code</h2>
          <Badge tone="accent">ProRouter referral</Badge>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <div className="rounded-lg border border-line bg-ink2 px-5 py-3 font-mono text-lg tracking-wider tabular-nums text-accent">{data.code}</div>
          <CopyButton value={data.code} label="Copy referral code" />
        </div>

        <div className="mt-5">
          <div className="text-[11.5px] uppercase tracking-wide text-mut2">Share link</div>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <div className="min-w-0 flex-1">
              <Input readOnly value={shareUrl} aria-label="Share link" className="font-mono text-[12px] text-mut" />
            </div>
            <CopyButton value={shareUrl} label="Copy share link" className="shrink-0" />
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2 border-t border-line pt-5">
          <a
            href={`https://wa.me/?text=${encodeURIComponent(`Try ProRouter — one API for every AI model. Use my code ${data.code} for ${data.trialDays} days of Astra access: ${shareUrl}`)}`}
            target="_blank"
            rel="noreferrer"
            className={linkButtonSecondary}
          >
            Share on WhatsApp
          </a>
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`One API for every AI model. Use my code ${data.code} for ${data.trialDays} days of Astra access:`)}&url=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noreferrer"
            className={linkButtonSecondary}
          >
            Share on X
          </a>
          <Link href="/dashboard/astra" className={linkButtonSecondary}>
            Astra status
          </Link>
        </div>
      </Card>

      <Card className="p-5">
        <h2 className="text-sm font-semibold">How it works</h2>
        <ul className="mt-3 space-y-2 text-[13px] text-mut">
          {[
            "Your code is personal to your account and can be shared with anyone.",
            "A friend opens your share link and redeems the code to activate their Astra trial.",
            "You cannot redeem your own code — the check happens server-side, so it cannot be spoofed from the browser.",
            "Each account can redeem a given code once, and redemptions are recorded in an immutable log.",
          ].map((item) => (
            <li key={item} className="flex gap-2.5">
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </Card>

      {data.successfulRedemptions === 0 && (
        <EmptyState
          icon={<Users className="size-6" strokeWidth={1.75} />}
          title="No redemptions yet"
          body="Share your link to get started. Your code is already active and ready to use."
        />
      )}
    </div>
  );
}
