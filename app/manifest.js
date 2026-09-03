export default function manifest() {
  return {
    name: "Deepak Jangra - Independent Shopify Developer",
    short_name: "Deepak Jangra",
    description:
      "Senior full-stack engineering for Shopify merchants who need speed, checkout conversion, and code that holds up at Plus-level traffic.",
    start_url: "/",
    display: "standalone",
    background_color: "#f8f5f0",
    theme_color: "#17140f",
    icons: [
      {
        src: "/icons/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        src: "/icons/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/icons/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
