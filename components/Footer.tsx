import Link from "next/link";
import { Logo } from "./Logo";

const columns = [
  { title: "Platform", links: [{ label: "Models", href: "/models" }, { label: "Providers", href: "/providers" }, { label: "Rankings", href: "/rankings" }, { label: "Pricing", href: "/pricing" }] },
  { title: "Developers", links: [{ label: "Documentation", href: "/docs" }, { label: "Playground", href: "/chat" }, { label: "Status", href: "/status" }, { label: "Changelog", href: "/changelog" }] },
  { title: "Company", links: [{ label: "Terms", href: "/terms" }, { label: "Privacy", href: "/privacy" }, { label: "Refunds", href: "/refund" }, { label: "Security", href: "/security" }] },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink2">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div className="space-y-3">
          <Logo />
          <p className="text-[13px] leading-relaxed text-mut">One API. Every Model. Unified access to the AI model ecosystem with smart routing, automatic fallback and unified billing.</p>
        </div>
        {columns.map((c) => (
          <div key={c.title}>
            <h4 className="mb-3 font-mono text-[10.5px] font-medium uppercase tracking-[0.16em] text-mut2">{c.title}</h4>
            <ul className="space-y-2">
              {c.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[13px] text-mut transition-colors duration-200 hover:text-fg">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-line py-5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 font-mono text-[11.5px] text-mut2 sm:flex-row sm:px-6">
          <span>© {new Date().getFullYear()} ProRouter. All rights reserved.</span>
          <span>Built for developers · API-first</span>
        </div>
      </div>
    </footer>
  );
}
