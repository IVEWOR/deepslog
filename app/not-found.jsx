import Link from "next/link";
import ErrorPage from "@/components/ErrorPage";
import ContactModal from "@/components/ContactModal";

export const metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <ErrorPage
      code="404"
      eyebrow="Page Not Found"
      title="This page"
      titleAccent="doesn't exist."
      description="The link's broken, or the page moved. Either way, let's get you back to something that works."
      primaryAction={
        <Link href="/" className="btn btn-primary w-full sm:w-auto">
          Back to Homepage
        </Link>
      }
      secondaryAction={
        <Link
          href="/work"
          className="ui-text link-underline text-[color:var(--color-ink)]"
        >
          See Case Studies
        </Link>
      }
      extra={
        <ContactModal
          triggerText="Report a Broken Link"
          triggerStyle="ui-text link-underline text-[color:var(--color-muted)] cursor-pointer"
          title="Report a broken link."
          subtitle="Tell me what page you were trying to reach and I'll get it fixed."
          subject="Broken Link Report (404)"
          fields={[
            { name: "email", label: "Email", type: "email", required: true },
            {
              name: "message",
              label: "What page were you looking for?",
              type: "textarea",
              placeholder:
                "The link I clicked, or the page I expected to find...",
              required: true,
            },
          ]}
        />
      }
    />
  );
}
