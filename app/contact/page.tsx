import { PageHeading } from "@/components/shared/PageHeading";
import { Reveal } from "@/components/shared/Reveal";
import { SUPPORT_EMAIL } from "@/lib/constants";

export const metadata = {
  title: "Contact | Misconi USA Network",
  description: "Contact Misconi USA Network for questions about readiness, SBA education, and opportunity preparation.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-surface-white">
      <div className="border-b border-surface-gray-border bg-surface-white pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-content">
          <Reveal delay={0}>
            <PageHeading
              title="Contact Misconi USA Network"
              description={
                <>
                  Email:{" "}
                  <a
                    href={`mailto:${SUPPORT_EMAIL}`}
                    className="font-semibold text-brand-blue hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 rounded"
                  >
                    {SUPPORT_EMAIL}
                  </a>
                </>
              }
            />
          </Reveal>
        </div>
      </div>
    </div>
  );
}
