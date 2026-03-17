import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { LINKS } from "@/lib/constants";

export const metadata = {
  title: "Readiness | Misconi USA Network",
  description: "What it means to be ready. Readiness levels, the Business Score, and how readiness supports opportunity access.",
};

const EVALUATES = [
  "Identity and documentation",
  "Operational structure",
  "Financial preparedness",
  "Capability alignment",
  "Opportunity requirements",
];

export default function ReadinessPage() {
  return (
    <div className="min-h-screen bg-surface-white">
      <div className="border-b border-surface-gray-border bg-surface-white pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-content">
          <Reveal delay={0}>
            <h1 className="text-section font-bold text-type-heading">
              What It Means to Be Ready
            </h1>
            <p className="mt-4 text-[17px] text-type-body leading-[1.7]">
              Readiness is the structured process that prepares your business for real opportunities. This page explains readiness levels, the Business Score, and how readiness protects and empowers your business.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto max-w-content px-4 py-24 sm:px-6 lg:px-8 space-y-20">
        <section aria-labelledby="what-is-readiness-heading">
          <Reveal delay={0}>
            <SectionHeading
              id="what-is-readiness-heading"
              title="What Is Readiness?"
              subtitle="Readiness is the structured process that prepares your business for real opportunities. It evaluates:"
            />
            <ul className="mt-4 list-disc list-inside text-type-body space-y-1">
              {EVALUATES.map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
            <p className="mt-6 text-[17px] text-type-body leading-[1.7] max-w-prose">
              Readiness protects your business, increases your chances of success, and ensures you&apos;re matched with opportunities you can actually fulfill.
            </p>
          </Reveal>
        </section>

        <section aria-labelledby="why-matters-heading">
          <Reveal delay={120}>
            <SectionHeading
              id="why-matters-heading"
              title="Why Readiness Matters"
              subtitle="Without readiness, businesses may pursue opportunities they are not prepared to fulfill. Readiness aligns your identity, operations, finances, and capabilities with opportunity requirements—so you can compete with confidence and reduce risk."
            />
          </Reveal>
        </section>

        <section aria-labelledby="readiness-levels-heading">
          <Reveal delay={240}>
            <SectionHeading
              id="readiness-levels-heading"
              title="Readiness Levels"
              subtitle="After taking the Business Score, you receive a readiness level. This level reflects where your business stands across the dimensions of readiness and guides your next steps—including which pathway to follow on MisconiUSA.com."
            />
          </Reveal>
        </section>

        <section aria-labelledby="business-score-heading">
          <Reveal delay={360}>
            <SectionHeading
              id="business-score-heading"
              title="The Business Score"
              subtitle="The Business Score is the assessment that activates readiness. It is taken at Get Your Business Score (GYBS). The score does not collect your information for intake on this site; it is a separate step that you choose when you are ready to move from learning to activation."
            />
          </Reveal>
        </section>

        <section aria-labelledby="opportunity-access-heading">
          <Reveal delay={480}>
            <SectionHeading
              id="opportunity-access-heading"
              title="How Readiness Supports Opportunity Access"
              subtitle="Readiness pathways on MisconiUSA.com help you complete the requirements needed to access contracts, distribution, partnerships, and SBA-aligned programs. The Network explains how this works; the operational system is where you complete it."
            />
          </Reveal>
        </section>

        <Reveal delay={600}>
          <div className="rounded-card border border-surface-gray-border bg-surface-blue-tint p-8 text-center">
            <p className="font-semibold text-type-heading">Ready to activate readiness and receive your readiness level?</p>
            <a
              href={LINKS.GYBS}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center rounded-button bg-brand-blue px-6 py-3 text-[14px] font-semibold text-white hover:bg-brand-blue-hover transition-colors duration-200 ease focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
            >
              Get Your Business Score
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
