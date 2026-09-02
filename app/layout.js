import Script from "next/script";
import "./globals.css";
import { ppNeueMontreal, ppNeueMontrealText, geistMono } from "./fonts";
import { SITE_URL } from "@/lib/site";

const fontVars = [
  ppNeueMontreal.variable,
  ppNeueMontrealText.variable,
  geistMono.variable,
].join(" ");

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "deepakj. | Shopify Plus Developer",
    template: "%s",
  },
  description:
    "Senior full-stack engineering for Shopify merchants who need speed, checkout conversion, and code that holds up at Plus-level traffic.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "deepakj. | Shopify Plus Developer",
    description:
      "Senior full-stack engineering for Shopify merchants who need speed, checkout conversion, and code that holds up at Plus-level traffic.",
    url: SITE_URL,
    siteName: "deepakj.",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/deepak.jpg", // Default OG image (Make sure this exists in your /public folder)
        width: 1200,
        height: 630,
        alt: "deepakj. - Shopify Plus Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "deepakj. | Shopify Plus Developer",
    description:
      "Senior full-stack engineering for Shopify merchants who need speed, checkout conversion, and code that holds up at Plus-level traffic.",
    creator: "@deepakjangra",
    images: ["/deepak.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${fontVars} scroll-smooth`}
      data-scroll-behavior="smooth"
    >
      <body>
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
