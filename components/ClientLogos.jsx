import Image from "next/image";

// Single source of truth for the "trusted by" logo cloud used across the site.
// `invert` marks logos that only ship a dark-on-transparent asset, so we flip
// them to white via CSS filter when rendered on a dark background.
const LOGOS = [
  {
    name: "MerkBart",
    light: { src: "/logos/merkbart.webp", width: 180, height: 62 },
    dark: { src: "/logos/merkbart.svg", width: 180, height: 62 },
  },
  {
    name: "GrayMattersNYC",
    light: { src: "/logos/gmn.png", width: 1002, height: 91 },
    dark: { src: "/logos/gmn_white.png", width: 1002, height: 91 },
  },
  {
    name: "The Business Fashion",
    light: { src: "/logos/thebusinessfashion.avif", width: 300, height: 27 },
    dark: {
      src: "/logos/thebusinessfashion.avif",
      width: 300,
      height: 27,
      invert: true,
    },
  },
  {
    name: "Faire",
    light: { src: "/logos/faire.svg", width: 104, height: 13 },
    dark: { src: "/logos/faire_white.svg", width: 104, height: 13 },
  },
];

export default function ClientLogos({ variant = "light", imgClassName = "" }) {
  return (
    <>
      {LOGOS.map((logo) => {
        const asset = logo[variant];
        return (
          <Image
            key={logo.name}
            src={asset.src}
            alt={logo.name}
            width={asset.width}
            height={asset.height}
            className={`h-4 sm:h-5 w-auto object-contain shrink-0 ${
              asset.invert ? "invert" : ""
            } ${imgClassName}`}
          />
        );
      })}
    </>
  );
}
