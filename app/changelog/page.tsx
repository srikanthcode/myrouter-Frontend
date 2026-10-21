import Link from "next/link";
import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";
import { Badge } from "@/components/ui";

export const metadata: Metadata = {
  title: "Changelog",
  description: "What's new in ProRouter — routing, billing, promotions and platform changes.",
};

const releases = [
  {
    version: "0.1.0",
    date: "8 October 2026",
    tag: "Current",
    tone: "accent" as const,
    items: [
      "Unified OpenAI-compatible API at /v1/chat/completions with streaming, tool calls and JSON mode.",
      "Smart routing with health-aware provider fallback and per-model route priorities.",
      "Free model tier with a real request queue, per-plan rate limits and queue priority.",
      "Prepaid INR wallet with an immutable ledger, admin-configurable credit packages and bonus credit.",
      "Razorpay checkout with signature-verified, idempotent webhooks — wallet credited exactly once.",
      "Astra promotion: referral codes, redemption, entitlements and a 7-day trial.",
      "Dashboard with overview, API keys, activity log, request inspector, usage analytics, wallet, referrals and settings.",
      "Public model catalogue, provider directory, rankings, pricing and live status page.",
      "Per-request cost reporting and request ids on every response for tracing.",
    ],
  },
];

export default function ChangelogPage() {
  return (
    <LegalShell
      eyebrow="Releases"
      title="Changelog"
      subtitle="Notable changes to the ProRouter platform, newest first."
    >
      <div className="space-y-10">
        {releases.map((r) => (
          <section key={r.version} className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="font-mono tabular-nums">v{r.version}</h2>
              {r.tag && <Badge tone={r.tone}>{r.tag}</Badge>}
              <span className="whitespace-nowrap font-mono text-[12px] tabular-nums text-mut2">{r.date}</span>
            </div>
            <ul>
              {r.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <section className="space-y-3">
        <h2>Stay informed</h2>
        <p>
          Health and incidents are published on the <Link href="/status">status page</Link>. For API details see the{" "}
          <Link href="/docs">documentation</Link>.
        </p>
      </section>
    </LegalShell>
  );
}
