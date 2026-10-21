import Link from "next/link";
import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern your use of the ProRouter API, dashboard and wallet.",
};

export default function TermsPage() {
  return (
    <LegalShell
      eyebrow="Legal"
      title="Terms of Service"
      updated="8 October 2026"
      subtitle="These terms govern your access to and use of ProRouter's API, dashboard, playground and wallet."
    >
      <section className="space-y-3">
        <h2>1. Agreement</h2>
        <p>
          By creating an account or sending a request to the ProRouter API you agree to these terms. If you are accepting on behalf of an organisation, you
          confirm you have authority to bind that organisation.
        </p>
      </section>

      <section className="space-y-3">
        <h2>2. Your account</h2>
        <ul>
          <li>You are responsible for keeping your API keys secret. Keys are stored only as hashes and are shown once at creation.</li>
          <li>You are responsible for all activity performed with your keys and session, including charges incurred.</li>
          <li>You must be at least 18 years old, or the age of majority in your jurisdiction, to hold an account.</li>
          <li>Notify us immediately if you believe a key has been compromised so we can rotate or revoke it.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2>3. Acceptable use</h2>
        <p>You agree not to use the service to:</p>
        <ul>
          <li>Break any applicable law, or infringe the rights of others.</li>
          <li>Generate content that is illegal, or that sexualises minors, or that facilitates violence or self-harm.</li>
          <li>Attempt to bypass rate limits, queue priority, plan limits, spending limits or authentication.</li>
          <li>Reverse engineer, resell or redistribute the service except as expressly permitted in writing.</li>
          <li>Probe, scan or overload the platform or any upstream provider.</li>
          <li>Upload credentials or personal data of third parties without a lawful basis.</li>
        </ul>
        <p>We may suspend or terminate accounts that breach these rules, and may report unlawful activity to the relevant authorities.</p>
      </section>

      <section className="space-y-3">
        <h2>4. Models and providers</h2>
        <p>
          ProRouter routes your requests to third-party AI providers. Those providers have their own terms and usage policies, and your use of a model through
          ProRouter is also subject to them. Model availability, capability and pricing can change at any time as upstream providers change their offerings.
        </p>
        <p>
          We do not guarantee that any particular model will be available at any particular moment. Routing, fallback and health checks reduce the impact of
          provider outages but cannot eliminate them.
        </p>
      </section>

      <section className="space-y-3">
        <h2>5. Outputs</h2>
        <p>
          Model outputs are probabilistic and may be inaccurate, incomplete or offensive. You are responsible for reviewing outputs before relying on them.
          Do not use outputs as the sole basis for medical, legal, financial or safety-critical decisions.
        </p>
        <p>As between you and us, you retain ownership of your inputs and of the outputs you generate, subject to the upstream provider&apos;s terms.</p>
      </section>

      <section className="space-y-3">
        <h2>6. Fees and billing</h2>
        <ul>
          <li>Paid models are billed per million input and output tokens, deducted from your prepaid wallet in Indian Rupees.</li>
          <li>Wallet credits are prepaid and, except as required by law or as stated in our <Link href="/refund">refund policy</Link>, non-refundable.</li>
          <li>Free-model usage is offered subject to plan rate limits and queue priority, and may be changed or withdrawn.</li>
          <li>Prices exclude applicable taxes, which are charged where required.</li>
          <li>If a request fails before any tokens are produced, it is not charged. Failed requests that consumed upstream tokens may still incur cost.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2>7. Availability</h2>
        <p>
          The service is provided on an &quot;as is&quot; and &quot;as available&quot; basis. We aim for high availability and publish live health on the{" "}
          <Link href="/status">status page</Link>, but we do not offer a service-level agreement unless one is separately agreed in writing.
        </p>
      </section>

      <section className="space-y-3">
        <h2>8. Limitation of liability</h2>
        <p>
          To the maximum extent permitted by law, ProRouter is not liable for indirect, incidental, special, consequential or punitive damages, or for lost
          profits, revenue, data or goodwill. Our aggregate liability for any claim relating to the service is limited to the greater of the amount you paid us
          in the three months preceding the claim, or INR 5,000.
        </p>
      </section>

      <section className="space-y-3">
        <h2>9. Suspension and termination</h2>
        <p>
          You may close your account at any time. We may suspend or terminate access for breach of these terms, for non-payment, for legal compliance, or where
          continuing to serve you would create risk for the platform or other users. On termination, unused wallet balance is handled under the{" "}
          <Link href="/refund">refund policy</Link>.
        </p>
      </section>

      <section className="space-y-3">
        <h2>10. Changes</h2>
        <p>
          We may update these terms. Material changes will be announced in-product or by email before they take effect. Continuing to use the service after a
          change means you accept the updated terms.
        </p>
      </section>

      <section className="space-y-3">
        <h2>11. Contact</h2>
        <p>Questions about these terms can be sent to <span className="font-mono text-fg">legal@prorouter.com</span>.</p>
      </section>
    </LegalShell>
  );
}
