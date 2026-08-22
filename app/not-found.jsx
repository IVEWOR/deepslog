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
      eyebrow="404 — Page Not Found"
      tone="indigo"
      title="This page"
      titleAccent="doesn't exist."
      description="The link's broken, or the page moved. Either way, let's get you back to something that works."
      primaryAction={
        <Link
          href="/"
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white bg-indigo-600 rounded-xl hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-500/30"
        >
          Back to Homepage
        </Link>
      }
      secondaryAction={
        <Link
          href="/work"
          className="w-full sm:w-auto px-8 py-4 text-base font-medium text-slate-600 hover:text-slate-900 transition-colors underline-offset-4 hover:underline flex items-center justify-center gap-2"
        >
          See Case Studies
        </Link>
      }
      extra={
        <ContactModal
          triggerText="Report a broken link"
          triggerStyle="mx-auto inline-flex items-center gap-2 text-sm text-slate-500 hover:text-indigo-600 font-medium transition-colors cursor-pointer"
          title="Report a broken link."
          subtitle="Tell me what page you were trying to reach and I'll get it fixed."
          subject="Broken Link Report (404)"
          fields={[
            { name: "email", label: "Email", type: "email", required: true },
            {
              name: "message",
              label: "What page were you looking for?",
              type: "textarea",
              placeholder: "The link I clicked, or the page I expected to find...",
              required: true,
            },
          ]}
        />
      }
    />
  );
}
