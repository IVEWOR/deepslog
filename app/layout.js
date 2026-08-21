import { Funnel_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SITE_URL } from "@/lib/site";

const funnelDisplay = Funnel_Display({
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Deepak Jangra | Shopify Plus Developer",
    template: "%s",
  },
  description:
    "Senior full-stack engineering for Shopify merchants who need speed, checkout conversion, and code that holds up at Plus-level traffic.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Deepak Jangra | Shopify Plus Developer",
    description:
      "Senior full-stack engineering for Shopify merchants who need speed, checkout conversion, and code that holds up at Plus-level traffic.",
    url: SITE_URL,
    siteName: "Deepak Jangra",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/deepak.jpg", // Default OG image (Make sure this exists in your /public folder)
        width: 1200,
        height: 630,
        alt: "Deepak Jangra - Shopify Plus Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deepak Jangra | Shopify Plus Developer",
    description:
      "Senior full-stack engineering for Shopify merchants who need speed, checkout conversion, and code that holds up at Plus-level traffic.",
    creator: "@deepakjangra",
    images: ["/deepak.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className={funnelDisplay.className}>
        {children}
        <Script
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "ea88142598b349b9b9c1682da19f3a0f"}'
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
