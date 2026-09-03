import Link from "next/link";

const CLIENTS = [
  { name: "Merkbart", href: "/work/merkbart" },
  { name: "Gray _Matters", href: "/work/graymattersnyc" },
  { name: "The Business Fashion", href: "/work/thebusinessfashion" },
  { name: "Faire", href: "/work/faire" },
  { name: "Chasin' Unicorns", href: "/work/chasin-unicorns" },
  { name: "The Collection", href: "/work/darkestfox" },
  { name: "LEO Eyewear", href: "/work/leoeyewear" },
];

const nameClasses =
  "text-[clamp(0.8rem,2vw,0.8rem)] font-display  uppercase text-(--color-paper)/90! font-[600]";

function MarqueeTrack() {
  return (
    <>
      {CLIENTS.map((client, i) =>
        client.href ? (
          <Link
            key={`${client.name}-${i}`}
            href={client.href}
            className={`${nameClasses}`}
          >
            {client.name}
          </Link>
        ) : (
          <span key={`${client.name}-${i}`} className={`${nameClasses}`}>
            {client.name}
          </span>
        ),
      )}
    </>
  );
}

export default function SocialProof() {
  return (
    <section className="bg-(--color-ink) md:flex items-center md:h-10 py-2">
      <div className="px-[clamp(1.5rem,4vw,4rem)] md:border-r border-r-(--color-ink-surface-line) hidden md:block">
        <span className="label md:block md:w-max text-(--color-ink-surface-muted)!">
          Trusted by Shopify Merchants
        </span>
      </div>

      <div className="relative flex items-center overflow-hidden">
        <div
          className="animate-marquee motion-reduce:animate-none flex w-max items-center gap-x-10 whitespace-nowrap hover:[animation-play-state:paused] sm:gap-x-20"
          style={{ animationDuration: "55s" }}
        >
          <MarqueeTrack />
          <MarqueeTrack />
        </div>
      </div>
    </section>
  );
}
