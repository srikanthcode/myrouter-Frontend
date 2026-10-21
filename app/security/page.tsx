import Link from "next/link";
import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Security",
  description: "How ProRouter protects accounts, API keys, provider credentials, payments and data.",
};

const practices = [
  { t: "Key hashing", b: "API keys are stored only as hashes with a short public prefix. The secret is displayed once at creation and can never be recovered — only rotated." },
  { t: "Credential encryption", b: "Upstream provider credentials are encrypted at rest with a key derived from your deployment's ENCRYPTION_KEY, and are never returned by any API." },
  { t: "Password hashing", b: "Passwords are hashed with a memory-hard algorithm and are never logged or returned. Session tokens are stored as hashes." },
  { t: "CSRF hardening", b: "Cookie-authenticated mutations enforce an Origin allow-list server-side. API-key requests, which are not cookie-based, are exempt by design." },
  { t: "Webhook verification", b: "Payment webhooks are rejected unless the HMAC signature verifies, and each event id is recorded so a replayed delivery cannot double-credit a wallet." },
  { t: "Idempotent money", b: "Wallet movements are append-only ledger entries guarded by idempotency keys, so retries cannot create duplicate credits or debits." },
  { t: "Rate limiting", b: "Registration, sign-in and checkout are rate-limited per IP and per user to blunt credential stuffing and card-testing." },
  { t: "Request tracing", b: "Every request carries an x-request-id that appears in logs and in error responses, so an issue can be traced end-to-end." },
  { t: "Audit logging", b: "Security-relevant actions — sign-in, key creation, rotation, revocation, admin changes — are written to an audit log." },
  { t: "Least privilege", b: "Administrative routes require an admin or support role, and support accounts cannot perform destructive billing changes." },
];

export default function SecurityPage() {
  return (
    <LegalShell
      eyebrow="Trust"
      title="Security"
      updated="8 October 2026"
      subtitle="How we protect your account, your keys, your provider credentials and your money."
    >
      <section className="space-y-4">
        <h2>Controls</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {practices.map((p) => (
            <div key={p.t} className="rounded-xl border border-line bg-panel p-4">
              <div className="text-[13.5px] font-semibold text-fg">{p.t}</div>
              <p className="mt-1.5 text-[13px] leading-relaxed text-mut">{p.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2>Your responsibilities</h2>
        <ul>
          <li>Keep API keys out of client-side code, public repositories and logs.</li>
          <li>Use a separate key per environment or per integration so a leak can be revoked narrowly.</li>
          <li>Set an expiry and a spending limit on keys that do not need to be permanent.</li>
          <li>Rotate a key immediately if you suspect it has been exposed — rotation invalidates the old secret at once.</li>
          <li>Use a strong, unique password and keep your account email secure.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2>Data handling</h2>
        <p>
          We do not persist prompt or completion content by default — only request metadata needed for metering, routing, analytics and abuse prevention. See the{" "}
          <Link href="/privacy">privacy policy</Link> for the full retention picture, and the <Link href="/providers">providers page</Link> for each upstream
          provider&apos;s retention policy.
        </p>
      </section>

      <section className="space-y-3">
        <h2>Reporting a vulnerability</h2>
        <p>
          If you believe you have found a security issue, please email <span className="font-mono text-fg">security@prorouter.com</span> with steps to reproduce.
          Please do not test against other users&apos; accounts, run denial-of-service tests, or access data that is not yours. We will acknowledge your report
          and keep you updated on remediation.
        </p>
      </section>
    </LegalShell>
  );
}
