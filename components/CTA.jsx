import ContactModal from "./ContactModal";
import { CONTACT_EMAIL } from "@/lib/site";

export default function CTA() {
  return (
    <section id="contact" className="surface-inverted">
      <div className="px-[clamp(1.5rem,4vw,4rem)] py-20 lg:py-28">
        {/* <span className="label animate-fade-in-up [animation-delay:100ms]">
          Get In Touch
        </span> */}
        <div className="flex items-center gap-3 animate-fade-in-up [animation-delay:500ms]">
          <span className="relative flex h-2.5 w-2.5">
            <span
              className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
              style={{ background: "var(--color-status-live)" }}
            />
            <span
              className="relative inline-flex h-2.5 w-2.5 rounded-full"
              style={{ background: "var(--color-status-live)" }}
            />
          </span>
          <span className="stat-caption text-(--color-ink-surface-muted)">
            Available for new projects
          </span>
        </div>

        <h2 className="mt-4 max-w-7xl text-(--color-ink-surface-text) animate-fade-in-up [animation-delay:200ms] md:text-8xl! leading-tight">
          Ready to fix or scale your{" "}
          <span className="accent">Shopify store?</span>
        </h2>

        <p className="body-lg mt-6 max-w-md animate-fade-in-up [animation-delay:300ms]">
          Stop losing sales to slow checkouts and fragile themes. Let&rsquo;s
          build something that converts.
        </p>

        <div className="mt-10 flex flex-col items-start gap-6 animate-fade-in-up [animation-delay:400ms] sm:flex-row sm:items-center">
          <ContactModal
            triggerText="Get a Shopify Audit"
            triggerStyle="btn btn-primary w-full sm:w-auto"
            title="Get your free Shopify audit."
            subtitle="Send your store and I'll tell you what to fix first. No pitch, no obligation."
            subject="Shopify Audit Request"
            fields={[
              { name: "name", label: "Name", type: "text", required: true },
              { name: "email", label: "Email", type: "email", required: true },
              {
                name: "website",
                label: "Store URL",
                type: "url",
                placeholder: "https://yourstore.com",
                required: true,
              },
              {
                name: "message",
                label: "What's going on?",
                type: "textarea",
                placeholder:
                  "Slow checkout, buggy theme, scaling issues - what's the priority?",
                required: true,
              },
            ]}
            calTitle="Want to talk it through instead?"
            calSubtitle="Grab 15 minutes and we'll go over what I'd fix first."
          />
        </div>
      </div>
    </section>
  );
}
