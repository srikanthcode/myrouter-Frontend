import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Text & Reply",
  description: "Five text models with pay-as-you-go pricing, monthly reply plans, and visible usage.",
  robots: { index: false, follow: false },
};

export default function TextReplyLayout({ children }: { children: ReactNode }) {
  return children;
}
