import { Funnel_Display } from "next/font/google";
import "./globals.css";

const funnelDisplay = Funnel_Display({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html className="bg-zinc-900" lang="en">
      <body className={funnelDisplay.className}>{children}</body>
    </html>
  );
}
