import { SectionHeading } from "@/components/shared/SectionHeading";
import { Icon } from "@/components/shared/Icon";
import { Timeline } from "@/components/shared/Timeline";

const EVALUATES = [
  "Identity and documentation",
  "Operational structure",
  "Financial preparedness",
  "Capability alignment",
  "Opportunity requirements",
];

const TIMELINE_STEPS = [
  { title: "Learn", description: "Understand readiness and the ecosystem on the Network." },
  { title: "Score", description: "Take the Business Score at GYBS to activate readiness." },
  { title: "Activate Readiness", description: "Receive your readiness level and next steps." },
  { title: "Begin Pathway", description: "Subscribe on MisconiUSA.com and complete requirements." },
  { title: "Access Opportunity Support", description: "Unlock access to contracts, distribution, and SBA-aligned programs." },
];

export default function HowReadinessWorksSection() {
  return (
    <section id="readiness-education" className="bg-surface-gray py-24 px-4 sm:px-6 lg:px-8" aria-labelledby="how-readiness-heading">
      <div className="mx-auto max-w-content">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              id="how-readiness-heading"
              title="How the process works — how readiness works"
              subtitle="Readiness is the structured process that prepares your business for real opportunities. It evaluates:"
            />
            <ul className="mt-4 space-y-2">
              {EVALUATES.map((e) => (
                <li key={e} className="flex items-start gap-3">
                  <Icon name="check" size="sm" className="mt-0.5 flex-shrink-0 text-brand-blue" />
                  <span className="text-[17px] text-type-body">{e}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-card bg-footer-dark p-8">
            <h3 className="text-[18px] font-semibold text-white">What Readiness Evaluates</h3>
            <ol className="mt-6 space-y-4">
              {EVALUATES.map((e, i) => (
                <li key={e} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-white/20 text-[13px] font-semibold text-white">
                    {i + 1}
                  </span>
                  <span className="text-[15px] text-white">{e}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-section font-bold text-type-heading text-center">
            How businesses move through the ecosystem
          </h3>
          <Timeline steps={TIMELINE_STEPS} className="mt-10 max-w-2xl mx-auto" />
        </div>
      </div>
    </section>
  );
}
