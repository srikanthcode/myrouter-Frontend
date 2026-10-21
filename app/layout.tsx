import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ToastProvider } from "@/components/ui";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://prorouter.com"),
  title: {
    default: "ProRouter — One API. Every Model.",
    template: "%s · ProRouter",
  },
  description:
    "ProRouter gives developers one unified API, one wallet and one dashboard across dozens of AI models and providers, with smart routing, automatic fallback and free model access.",
  keywords: ["AI API", "model router", "OpenAI compatible", "AI infrastructure", "ProRouter"],
  openGraph: {
    title: "ProRouter — One API. Every Model.",
    description: "One API, one wallet, one dashboard. Route across every AI provider with automatic fallback.",
    url: "https://prorouter.com",
    siteName: "ProRouter",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "ProRouter — One API. Every Model.", description: "One API, one wallet, one dashboard." },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <head>
        {/* Runs before first paint so the saved theme applies without a flash. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("prorouter-theme");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}var r=document.documentElement;r.classList.toggle("light",t==="light");r.classList.toggle("dark",t==="dark")}catch(e){}})()`,
          }}
        />
      </head>
      <body className="min-h-screen antialiased">
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}