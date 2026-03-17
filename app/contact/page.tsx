import ContactForm from "@/components/forms/ContactForm";
import { Reveal } from "@/components/shared/Reveal";

export const metadata = {
  title: "Contact | Misconi USA Network",
  description: "Have questions about readiness or the ecosystem? Reach out for clarity—this is not an intake form.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-surface-white">
      <div className="border-b border-surface-gray-border bg-surface-white pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-content">
          <Reveal delay={0}>
            <h1 className="text-section font-bold text-type-heading">
              We&apos;re Here to Help You Understand Your Next Step
            </h1>
            <p className="mt-4 text-[17px] text-type-body leading-[1.7]">
              Have questions about readiness, the ecosystem, or where you fit? Use the form below to reach out. This is not an intake form, just a simple way to get clarity before you move forward.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto max-w-xl px-4 py-24 sm:px-6 lg:px-8">
        <Reveal delay={120}>
          <ContactForm />
        </Reveal>
      </div>
    </div>
  );
}
