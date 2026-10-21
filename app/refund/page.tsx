import Link from "next/link";
import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "When ProRouter wallet credits can be refunded, and how to request one.",
};

export default function RefundPage() {
  return (
    <LegalShell
      eyebrow="Legal"
      title="Refund Policy"
      updated="8 October 2026"
      subtitle="How refunds work for prepaid wallet credits and plan subscriptions."
    >
      <section className="space-y-3">
        <h2>1. Wallet credits are prepaid</h2>
        <p>
          Credits you add to your ProRouter wallet are prepaid balance used to pay for paid-model inference. Because credits are consumed on demand, unused balance is
          generally non-refundable once added — except in the situations below.
        </p>
      </section>

      <section className="space-y-3">
        <h2>2. When we do refund</h2>
        <ul>
          <li><strong>Duplicate or accidental charge</strong> — you were charged twice for the same top-up, or charged an amount you did not authorise.</li>
          <li><strong>Failed top-up</strong> — money left your account but the credit never arrived, and we cannot trace and credit it.</li>
          <li><strong>Platform error</strong> — a billing defect on our side caused an incorrect deduction that we cannot reverse through the ledger.</li>
          <li><strong>Unused balance on closure</strong> — where required by applicable law, or at our discretion for a substantial unused balance.</li>
          <li><strong>Statutory rights</strong> — where consumer law in your jurisdiction grants a cancellation or refund right that we cannot exclude.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2>3. When we cannot refund</h2>
        <ul>
          <li>Credits already spent on inference, including tokens consumed by requests that later returned an error upstream.</li>
          <li>Free-model usage, which is not charged in the first place.</li>
          <li>Plan subscription periods already elapsed.</li>
          <li>Accounts terminated for breach of the <Link href="/terms">terms of service</Link>.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2>4. How to request a refund</h2>
        <p>
          Email <span className="font-mono text-fg">billing@prorouter.com</span> from the address on your account, and include your invoice number (visible in{" "}
          <Link href="/dashboard/wallet">Wallet</Link> → payments) and the reason for the request. We aim to acknowledge within 2 business days and to resolve
          within 7 business days.
        </p>
      </section>

      <section className="space-y-3">
        <h2>5. How refunds are issued</h2>
        <p>
          Approved refunds are returned to the original payment method through the same gateway that processed the payment. Bank and gateway timelines
          typically mean the money appears within 5–10 business days. Where a gateway refund is not possible, we may credit your wallet instead with your
          agreement.
        </p>
      </section>

      <section className="space-y-3">
        <h2>6. Incorrect charges</h2>
        <p>
          Every wallet movement is an immutable ledger entry with a reference, and each API response reports its own cost. If you believe a deduction is wrong,
          check <Link href="/dashboard/wallet">Wallet</Link> and <Link href="/dashboard/activity">Activity</Link> first — if it still looks incorrect, contact us
          with the request id shown on the response and we will investigate.
        </p>
      </section>

      <section className="space-y-3">
        <h2>7. Chargebacks</h2>
        <p>
          Please contact us before raising a chargeback — we can usually resolve billing issues faster directly. Accounts with an open chargeback may have API
          access suspended until the dispute is resolved.
        </p>
      </section>
    </LegalShell>
  );
}
