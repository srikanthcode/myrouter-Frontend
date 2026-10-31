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
  metadataBase: new URL("https://www.prorouter.in"),
  title: {
    default: "ProRouter — #1 Unified AI API Gateway & Model Router | 35+ Models",
    template: "%s | ProRouter",
  },
  description:
    "ProRouter is the leading unified AI API provider and model router. Access 35+ frontier models including DeepSeek V4.1, Claude 3.5 Sonnet, Moonshot Kimi K2.7 Code, and OpenAI with one unified API key, one wallet, automatic zero-downtime fallback, and ultra low-latency token streaming.",
  keywords: [
    "ProRouter",
    "Pro Router",
    "prorouter.in",
    "AI API provider",
    "best AI API provider",
    "AI model router",
    "LLM router",
    "unified AI gateway",
    "OpenAI compatible API",
    "OpenRouter alternative",
    "DeepSeek API",
    "DeepSeek V4.1 Flash",
    "Claude 3.5 Sonnet API",
    "Claude Opus API",
    "Kimi K2.7 Code API",
    "Qwen 3.8 API",
    "AI API gateway",
    "cheap AI API",
    "fast LLM inference",
    "AI infrastructure",
    "AI token router",
    "automatic AI fallback",
    "free AI API",
    "India AI API",
  ],
  alternates: {
    canonical: "https://www.prorouter.in",
  },
  openGraph: {
    title: "ProRouter — #1 Unified AI API Gateway & Model Router",
    description:
      "One API, one wallet, one dashboard. Route across 35+ AI models including DeepSeek, Claude, Kimi, and OpenAI with zero downtime and automatic fallback.",
    url: "https://www.prorouter.in",
    siteName: "ProRouter",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/icon.svg",
        width: 512,
        height: 512,
        alt: "ProRouter Logo — One API. Every Model.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ProRouter — #1 Unified AI API Gateway & Model Router",
    description:
      "One API, one wallet, one dashboard. Route across 35+ AI models including DeepSeek, Claude, Kimi, and OpenAI.",
    images: ["/icon.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
  applicationName: "ProRouter",
  authors: [{ name: "ProRouter Team", url: "https://www.prorouter.in" }],
  creator: "ProRouter",
  publisher: "ProRouter",
};

export const viewport: Viewport = {
  themeColor: "#f8fafc",
  width: "device-width",
  initialScale: 1,
};

// Rich Structured Data (JSON-LD) for Google Search dominance
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ProRouter",
  alternateName: ["Pro Router", "ProRouter AI", "prorouter.in"],
  url: "https://www.prorouter.in",
  logo: "https://www.prorouter.in/icon.svg",
  description:
    "ProRouter is the premier unified AI infrastructure platform and model router providing low-latency inference across 35+ frontier AI models.",
  sameAs: ["https://twitter.com/prorouter", "https://github.com/srikanthcode"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "technical support",
    url: "https://www.prorouter.in/chat",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "ProRouter",
  alternateName: ["Pro Router", "ProRouter AI"],
  url: "https://www.prorouter.in",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.prorouter.in/models?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const softwareApplicationJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "ProRouter Unified AI Gateway",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "All",
  url: "https://www.prorouter.in",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
  },
  featureList: [
    "Unified OpenAI-compatible API endpoint",
    "35+ Frontier & Open-Weight LLMs (Claude, DeepSeek, Kimi, OpenAI, Qwen)",
    "Zero-downtime automatic provider failover",
    "Real-time token streaming playground",
    "Unified wallet with transparent INR pricing",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`light ${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <head>
        {/* Runs before first paint so the saved theme applies without a flash. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("prorouter-theme");if(t!=="light"&&t!=="dark"){t="light"}var r=document.documentElement;r.classList.toggle("light",t==="light");r.classList.toggle("dark",t==="dark")}catch(e){}})()`,
          }}
        />
        {/* Structured Data: Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {/* Structured Data: WebSite with Google Sitelinks Search */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {/* Structured Data: WebApplication */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationJsonLd) }}
        />
      </head>
      <body className="min-h-screen antialiased">
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
