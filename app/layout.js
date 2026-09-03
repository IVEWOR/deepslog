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
  title: "Deepak Jangra | Shopify Developer",
  description:
    "Senior full-stack engineering for Shopify merchants who need speed, checkout conversion, and code that holds up at Plus-level traffic.",
  alternates: {
    canonical: "/",
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      {
        url: "/icons/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/icons/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/icons/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/icons/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/icons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    title: "Deepak Jangra | Shopify Developer",
    description:
      "Senior full-stack engineering for Shopify merchants who need speed, checkout conversion, and code that holds up at Plus-level traffic.",
    url: SITE_URL,
    siteName: "Deepak Jangra",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-about.png",
        width: 1200,
        height: 630,
        alt: "Deepak Jangra - Shopify Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deepak Jangra | Shopify Developer",
    description:
      "Senior full-stack engineering for Shopify merchants who need speed, checkout conversion, and code that holds up at Plus-level traffic.",
    creator: "@deepakjdev",
    images: ["/og-about.png"],
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
