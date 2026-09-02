import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ErrorPage({
  code = "404",
  eyebrow = "Page Not Found",
  title,
  titleAccent,
  description,
  primaryAction,
  secondaryAction,
  extra,
}) {
  return (
    <main className="flex min-h-screen flex-col bg-[var(--color-paper)] text-[var(--color-ink)] selection:bg-[var(--color-accent)] selection:text-[var(--color-paper)]">
      <Navbar />
      <section className="flex flex-1 items-center justify-center px-[clamp(1.5rem,4vw,4rem)] py-24 lg:py-32">
        <div className="mx-auto max-w-lg text-center">
          <div
            aria-hidden="true"
            className="stat-number animate-fade-in-up text-[clamp(4rem,10vw,6rem)] leading-none text-[color:var(--color-muted)]"
          >
            {code}
          </div>

          <span className="label mt-6 inline-block animate-fade-in-up [animation-delay:100ms]">
            {eyebrow}
          </span>

          <h1
            className="mt-4 animate-fade-in-up [animation-delay:200ms]"
            style={{ fontWeight: "var(--weight-display-black)" }}
          >
            {title}{" "}
            {titleAccent && <span className="accent">{titleAccent}</span>}
          </h1>

          <p className="body-lg mx-auto mt-6 max-w-md animate-fade-in-up [animation-delay:300ms]">
            {description}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 animate-fade-in-up [animation-delay:400ms] sm:flex-row">
            {primaryAction}
            {secondaryAction}
          </div>

          {extra && (
            <div className="mt-10 animate-fade-in-up [animation-delay:500ms]">
              {extra}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}
