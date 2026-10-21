import Link from "next/link";
import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "What ProRouter collects, why, how long it is kept, and the choices you have.",
};

export default function PrivacyPage() {
  return (
    <LegalShell
      eyebrow="Legal"
      title="Privacy Policy"
      updated="8 October 2026"
      subtitle="What we collect, why we collect it, how long we keep it, and how you can control it."
    >
      <section className="space-y-3">
        <h2>1. Summary</h2>
        <p>
          We collect the minimum needed to run a metered API: your account details, your keys, and per-request metadata such as model, token counts, latency,
          status and cost. We do not sell your personal data.
        </p>
      </section>

      <section className="space-y-3">
        <h2>2. What we collect</h2>
        <ul>
          <li><strong>Account data</strong> — email address, display name, hashed password, role and account status.</li>
          <li><strong>Session data</strong> — a session token stored as a hash, plus IP address and user-agent for security and audit purposes.</li>
          <li><strong>API keys</strong> — key prefix and hash only. The full key is shown once at creation and never stored.</li>
          <li><strong>Request metadata</strong> — timestamp, model, provider, routing decision, token counts, latency, HTTP status, error code and cost.</li>
          <li><strong>Billing data</strong> — wallet ledger entries, payment records, invoice numbers and gateway identifiers. We never store full card numbers.</li>
          <li><strong>Audit log</strong> — security-relevant actions such as sign-in, key creation, key rotation and administrative changes.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2>3. Prompt and completion content</h2>
        <p>
          By default we do <strong>not</strong> persist the content of your prompts or model responses. We store metadata about the request — token counts,
          model, provider, latency, status and cost — because that is what metering, billing, rate limiting and your own activity log require.
        </p>
        <p>
          If a feature you enable requires storing content (for example saving a conversation in the playground), it is stored for your account only and can be
          deleted by you. Content sent to an upstream provider is governed by that provider&apos;s retention policy, which we surface on the{" "}
          <Link href="/providers">providers page</Link>.
        </p>
      </section>

      <section className="space-y-3">
        <h2>4. Why we use it</h2>
        <ul>
          <li>To authenticate you and keep your account secure.</li>
          <li>To route requests, enforce plan limits and queue priority.</li>
          <li>To meter usage and bill your wallet accurately.</li>
          <li>To show you activity, usage and cost analytics in your dashboard.</li>
          <li>To detect abuse, fraud and attacks, and to meet legal obligations.</li>
          <li>To provide support when you contact us.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2>5. Sharing</h2>
        <p>We share data only where necessary:</p>
        <ul>
          <li><strong>Upstream providers</strong> — the prompt you send is transmitted to the provider serving your request. We do not send your account identity.</li>
          <li><strong>Payment gateways</strong> — to process top-ups and issue invoices.</li>
          <li><strong>Infrastructure providers</strong> — hosting and database services under contract.</li>
          <li><strong>Legal</strong> — where required by law or to protect rights and safety.</li>
        </ul>
        <p>We do not sell personal data, and we do not share it for third-party advertising.</p>
      </section>

      <section className="space-y-3">
        <h2>6. Retention</h2>
        <ul>
          <li>Account data is kept while your account is open, then deleted or anonymised within 30 days of closure.</li>
          <li>Request metadata is retained for up to 12 months so you can review long-run usage.</li>
          <li>Wallet ledger and payment records are kept for as long as tax and accounting law requires.</li>
          <li>Audit and security logs are retained for up to 12 months.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2>7. Security</h2>
        <p>
          Passwords and session tokens are hashed, provider credentials are encrypted at rest, and all traffic is served over TLS. Access to production data is
          restricted. See the <Link href="/security">security page</Link> for more detail.
        </p>
      </section>

      <section className="space-y-3">
        <h2>8. Your rights</h2>
        <p>
          Depending on where you live, you may have the right to access, correct, export, restrict or delete your personal data, and to object to certain
          processing. You can update your name and password from <Link href="/dashboard/settings">Settings</Link>, and request an export or deletion by emailing
          us. We will respond within the period required by applicable law.
        </p>
      </section>

      <section className="space-y-3">
        <h2>9. Cookies</h2>
        <p>
          We use a single first-party session cookie to keep you signed in. It is required for the dashboard and the playground to work and is not used for
          advertising or cross-site tracking.
        </p>
      </section>

      <section className="space-y-3">
        <h2>10. Children</h2>
        <p>The service is not directed at children, and we do not knowingly collect data from anyone under 18.</p>
      </section>

      <section className="space-y-3">
        <h2>11. Contact</h2>
        <p>Privacy questions and data requests can be sent to <span className="font-mono text-fg">privacy@prorouter.com</span>.</p>
      </section>
    </LegalShell>
  );
}
