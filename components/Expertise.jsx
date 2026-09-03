export default function Expertise() {
  const features = [
    {
      number: "01",
      title: "Shopify Plus & Hydrogen",
      description:
        "Checkout Extensibility, Liquid, custom Plus builds, and headless Hydrogen storefronts. Hands-on experience shipping on the Plus platform.",
    },
    {
      number: "02",
      title: "Performance & CWV",
      description:
        "99+ Lighthouse scores and sub-2s loads. Core Web Vitals built in from day one, not bolted on after.",
    },
    {
      number: "03",
      title: "Store Rescue & Migrations",
      description:
        "Broken checkout? Messy app stack? Acquired brand with a dead store? I stabilize existing stores and plan complex migrations without starting from scratch.",
    },
    {
      number: "04",
      title: "Subscription & Retention",
      description:
        "Recharge, Klaviyo lifecycle flows, and event tracking. I build the backend that keeps subscribers paying.",
    },
  ];

  return (
    <section
      id="expertise"
      className="bg-(--color-paper) border-b border-(--color-line)"
    >
      {/* Header */}
      <div className="flex flex-col gap-6 border-b border-(--color-border-light) px-[clamp(1.5rem,4vw,4rem)] py-14 lg:flex-row lg:items-end lg:justify-between lg:py-20">
        <div>
          <span className="label animate-fade-in-up [animation-delay:100ms]">
            The Shopify Advantage
          </span>
          <h2 className="mt-4 max-w-xl animate-fade-in-up [animation-delay:200ms]">
            Why <span className="accent">Shopify </span> merchants hire me.
          </h2>
        </div>
        <p className="body-sm max-w-sm text-(--color-muted) lg:text-right animate-fade-in-up [animation-delay:300ms]">
          I don&rsquo;t install apps and hope. I build the custom layer that
          lets you scale without replatforming.
        </p>
      </div>

      {/* 2x2 grid */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {features.map((feature, index) => (
          <div
            key={feature.number}
            className={`animate-fade-in-up border-(--color-border-light) px-[clamp(1.5rem,4vw,4rem)] py-10 lg:py-14 ${
              index % 2 === 0 ? "md:border-r" : ""
            } ${index < 3 ? "border-b" : ""}`}
            style={{ animationDelay: `${400 + index * 150}ms` }}
          >
            {/* <span className="stat-number text-[1.5rem] text-(--color-muted)">
              {feature.number}
            </span> */}
            <h3 className="mt-5">{feature.title}</h3>
            <p className="body-sm mt-3 max-w-sm text-(--color-muted)">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
