import { SectionHeading } from "@/components/shared/SectionHeading";
import { Icon } from "@/components/shared/Icon";
import { Reveal } from "@/components/shared/Reveal";
import { LINKS } from "@/lib/constants";

export const metadata = {
  title: "Ecosystem | Misconi USA Network",
  description: "The Misconi Readiness Ecosystem: Network, GYBS, MisconiUSA.com, and SBA Ready.",
};

const SURFACES = [
  {
    title: "Misconi USA Network",
    subtitle: "Education",
    description: "Learn how readiness works, explore the ecosystem, and understand your next step. This is the orientation layer—no intake, no scoring, only clarity.",
    icon: "book" as const,
    href: undefined,
  },
  {
    title: "Get Your Business Score",
    subtitle: "Assessment",
    description: "Take the Business Score assessment to activate readiness and receive your readiness level. This is where readiness activation begins.",
    icon: "chart" as const,
    href: LINKS.GYBS,
  },
  {
    title: "MisconiUSA.com",
    subtitle: "Operational Readiness",
    description: "Subscribe, unlock your readiness pathway, and complete the requirements needed to access opportunities. This is the operational system.",
    icon: "building" as const,
    href: LINKS.MISCONI_USA,
  },
  {
    title: "SBA Ready",
    subtitle: "Training",
    description: "Build your foundation with SBA-aligned education and support. National alignment with SBA-supported training and resources.",
    icon: "globe" as const,
    href: LINKS.SBA_READY,
  },
];

export default function EcosystemPage() {
  return (
    <div className="min-h-screen bg-surface-white">
      <div className="border-b border-surface-gray-border bg-surface-white pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-content">
          <Reveal delay={0}>
            <h1 className="text-section font-bold text-type-heading">
              The Misconi Readiness Ecosystem
            </h1>
            <p className="mt-4 text-[17px] text-type-body leading-[1.7]">
              The ecosystem is built on three surfaces that work together to guide your business from learning → scoring → readiness activation. SBA Ready provides additional training and alignment.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto max-w-content px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {SURFACES.map((s, index) => (
            <Reveal
              key={s.title}
              delay={100 * index}
              className="rounded-card border border-surface-gray-border bg-white p-8 transition-all duration-200 ease hover:-translate-y-1 hover:border-brand-blue hover:shadow-card"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-icon-box bg-surface-blue-pale text-brand-blue mb-4">
                <Icon name={s.icon} size="lg" />
              </div>
              <div className="flex items-center gap-2">
                <h2 className="text-subhead font-bold text-type-heading">{s.title}</h2>
                <span className="rounded bg-surface-blue-pale px-2 py-0.5 text-[12px] font-bold uppercase tracking-wider text-brand-blue">
                  {s.subtitle}
                </span>
              </div>
              <p className="mt-2 text-[15px] text-type-muted leading-[1.65]">{s.description}</p>
              {s.href && (
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center text-[14px] font-medium text-brand-blue hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded"
                >
                  Learn more
                  <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </Reveal>
          ))}
        </div>

        <section className="mt-16 border-t border-surface-gray-border pt-16" aria-labelledby="how-together-heading">
          <Reveal delay={100 * SURFACES.length}>
            <SectionHeading
              id="how-together-heading"
              title="How the surfaces work together"
              subtitle="A guided progression: Learn on the Network → Score at GYBS → Activate your pathway on MisconiUSA.com. Use SBA Ready for training and alignment. The Network does not collect your information or activate readiness; it prepares you to choose your next step with confidence."
            />
          </Reveal>
        </section>

        <Reveal delay={100 * (SURFACES.length + 1)}>
          <div className="mt-10 text-center">
            <p className="text-type-muted mb-4">Choose the path that matches your needs.</p>
            <a
              href={LINKS.GYBS}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-button bg-brand-blue px-6 py-3 text-[14px] font-semibold text-white hover:bg-brand-blue-hover transition-colors duration-200 ease focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
            >
              Choose Your Next Step
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
