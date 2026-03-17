import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { LINKS } from "@/lib/constants";

export const metadata = {
  title: "About | Misconi USA Network",
  description: "Clarity before action. Readiness before opportunity. Learn the mission behind the Network.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-surface-white">
      <div className="border-b border-surface-gray-border bg-surface-white pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-content">
          <Reveal delay={0}>
            <h1 className="text-section font-bold text-type-heading">
              Clarity Before Action. Readiness Before Opportunity.
            </h1>
            <p className="mt-4 text-[17px] text-type-body leading-[1.7] max-w-prose">
              Misconi USA Network exists to help businesses understand readiness before they step into it. This page explains the mission behind the Network, the role it plays in the ecosystem, and how it prepares you for the next stage of your journey.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto max-w-content px-4 py-24 sm:px-6 lg:px-8 space-y-20">
        <section aria-labelledby="our-mission-heading">
          <Reveal delay={0}>
            <SectionHeading id="our-mission-heading" title="Our Mission" />
            <p className="mt-4 text-[17px] text-type-body leading-[1.7] max-w-prose">
              The Network is the education layer of the Misconi Readiness Ecosystem. We provide clarity and orientation so that businesses can make informed decisions about readiness—what it means, why it matters, and what their next step should be—without pressure or intake.
            </p>
          </Reveal>
        </section>

        <section aria-labelledby="who-we-serve-heading">
          <Reveal delay={100}>
            <SectionHeading id="who-we-serve-heading" title="Who We Serve" />
            <p className="mt-4 text-[17px] text-type-body leading-[1.7] max-w-prose">
              We serve new and early-stage businesses, growing businesses preparing for opportunities, suppliers and contractors seeking clarity, entrepreneurs exploring SBA-aligned programs, and anyone who needs to understand readiness before taking action. If you need clarity, orientation, or education, this is your starting point.
            </p>
          </Reveal>
        </section>

        <section aria-labelledby="why-readiness-heading">
          <Reveal delay={200}>
            <SectionHeading id="why-readiness-heading" title="Why Readiness Matters" />
            <p className="mt-4 text-[17px] text-type-body leading-[1.7] max-w-prose">
              Readiness is the foundation for contracts, distribution, partnerships, and SBA-aligned programs. It protects your business, increases your chances of success, and ensures you&apos;re matched with opportunities you can actually fulfill. Understanding it before you enter the system puts you in control.
            </p>
          </Reveal>
        </section>

        <section aria-labelledby="how-ecosystem-heading">
          <Reveal delay={300}>
            <SectionHeading id="how-ecosystem-heading" title="How the Ecosystem Works" />
            <p className="mt-4 text-[17px] text-type-body leading-[1.7] max-w-prose">
              The ecosystem is built on three surfaces: the Network (education), Get Your Business Score (assessment and activation), and MisconiUSA.com (operational readiness). The progression is simple: Learn → Score → Become Ready. The Network does not collect your information or activate readiness; it gives you the understanding you need to move forward with confidence.
            </p>
          </Reveal>
        </section>

        <section aria-labelledby="your-next-step-heading">
          <Reveal delay={400}>
            <SectionHeading id="your-next-step-heading" title="Your Next Step" />
            <p className="mt-4 text-[17px] text-type-body leading-[1.7] max-w-prose">
              When you&apos;re ready to activate readiness and receive your readiness level, take the Business Score at Get Your Business Score (GYBS). The Network is here whenever you need to revisit concepts or share the ecosystem with others.
            </p>
            <div className="mt-6">
              <a
                href={LINKS.GYBS}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-button bg-brand-blue px-6 py-3 text-[14px] font-semibold text-white hover:bg-brand-blue-hover transition-colors duration-200 ease focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
              >
                Get Your Business Score
              </a>
            </div>
          </Reveal>
        </section>
      </div>
    </div>
  );
}
