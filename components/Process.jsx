export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Store Audit & Discovery",
      description:
        "I review your current storefront, theme, and apps, and flag performance and conversion bottlenecks before writing a line of code.",
    },
    {
      number: "02",
      title: "Staging & Setup",
      description:
        "I set up a clean staging environment and confirm scope, timeline, and rollback plan before touching the live store.",
    },
    {
      number: "03",
      title: "Agile Build",
      description:
        "Modular Liquid and Hydrogen components, weekly async updates, and a staging link that always works.",
    },
    {
      number: "04",
      title: "QA & Handoff",
      description:
        "Lighthouse auditing, cross-browser QA, and accessibility checks before I hand over fully documented code.",
    },
  ];

  // Fixed per column — mobile stacks 1-up, sm pairs 2-up, lg is a single row of 4.
  const stepBorders = [
    "border-b lg:border-b-0",
    "border-b sm:border-l lg:border-b-0",
    "border-b sm:border-b-0 lg:border-l",
    "sm:border-l",
  ];

  return (
    <section
      id="process"
      className="bg-[var(--color-paper)] border-b border-[color:var(--color-line)]"
    >
      {/* Header */}
      <div className="flex flex-col gap-6 px-[clamp(1.5rem,4vw,4rem)] py-14 lg:flex-row lg:items-end lg:justify-between lg:py-20">
        <div>
          <span className="label animate-fade-in-up [animation-delay:100ms]">
            How I Work
          </span>
          <h2 className="mt-4 max-w-xl animate-fade-in-up [animation-delay:200ms]">
            A transparent process,{" "}
            <span className="accent">zero surprises.</span>
          </h2>
        </div>
        <p className="body-sm max-w-sm text-[color:var(--color-muted)] lg:text-right animate-fade-in-up [animation-delay:300ms]">
          I don&rsquo;t disappear for weeks and deliver spaghetti code. My
          workflow is designed for merchants who need to keep selling while
          their store gets rebuilt.
        </p>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 border-t border-[color:var(--color-border-light)] sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <div
            key={step.number}
            className={`animate-fade-in-up border-[color:var(--color-border-light)] px-[clamp(1.5rem,4vw,4rem)] py-10 lg:py-14 ${stepBorders[index]}`}
            style={{ animationDelay: `${400 + index * 150}ms` }}
          >
            <span className="stat-number text-[1.5rem]">{step.number}</span>
            <h4 className="mt-4">{step.title}</h4>
            <p className="body-sm mt-3 text-[color:var(--color-muted)]">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
