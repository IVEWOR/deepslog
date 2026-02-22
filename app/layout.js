import { Funnel_Display } from "next/font/google";
import "./globals.css";

const funnelDisplay = Funnel_Display({
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://deepslog.com"),
  title: {
    default: "Deepak Jangra | Senior Full-Stack Developer",
    template: "%s | Deepak Jangra",
  },
  description:
    "9+ years building high-performance web applications for agencies and startups. Specializing in Next.js, Shopify, and custom WordPress.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Deepak Jangra | Senior Full-Stack Developer",
    description:
      "9+ years building high-performance web applications for agencies and startups.",
    url: "https://deepslog.com",
    siteName: "Deepak Jangra",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/deepak.jpg", // Default OG image (Make sure this exists in your /public folder)
        width: 1200,
        height: 630,
        alt: "Deepak Jangra - Senior Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deepak Jangra | Senior Full-Stack Developer",
    description: "High-performance web apps and technical architecture.",
    images: ["/deepak.jpg"],
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className={funnelDisplay.className}>{children}</body>
    </html>
  );
}
