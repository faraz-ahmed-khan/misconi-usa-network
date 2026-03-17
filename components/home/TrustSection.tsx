import { SectionHeading } from "@/components/shared/SectionHeading";
import { StatsCounters } from "@/components/shared/StatsCounters";
import { TestimonialsSlider } from "@/components/shared/TestimonialsSlider";
import { PartnersStrip } from "@/components/shared/PartnersStrip";
import { Icon } from "@/components/shared/Icon";
import { Reveal } from "@/components/shared/Reveal";
import type { TestimonialItem } from "@/components/shared/TestimonialsSlider";
import type { Partner } from "@/lib/types";

const TRUST_BULLETS = [
  "How the readiness system works",
  "The role of Misconi USA as the Prime Agent",
  "National alignment with SBA-supported training",
  "Testimonials and success stories",
  "Partner and ecosystem credibility",
  "How readiness protects and empowers businesses",
];

const CLOSING = "This is where you see the system clearly before stepping into it.";

const TRUST_STATS = [
  { label: "Readiness dimensions", value: "5", description: "Identity, operations, financial, capability, opportunity" },
  { label: "Ecosystem surfaces", value: "3", description: "Network, GYBS, MisconiUSA" },
  { label: "Guidance layers", value: "Education first", description: "Clarity before action" },
  { label: "Support categories", value: "Pathway-based", description: "Structured progression" },
];

interface TrustSectionProps {
  testimonials: TestimonialItem[];
  partners: Partner[];
}

export default function TrustSection({ testimonials, partners }: TrustSectionProps) {
  return (
    <section className="bg-surface-white py-24 px-4 sm:px-6 lg:px-8" aria-labelledby="trust-heading">
      <div className="mx-auto max-w-content">
        <Reveal delay={0}>
          <SectionHeading
            id="trust-heading"
            title="Trust & credibility"
            subtitle="Readiness is built on transparency and structure. The Network reinforces trust by showing:"
          />
        </Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TRUST_BULLETS.map((b, index) => (
            <Reveal key={b} delay={80 * (index + 1)}>
              <div className="flex items-start gap-3">
                <Icon name="check" size="sm" className="mt-0.5 flex-shrink-0 text-brand-blue" />
                <span className="text-[15px] font-medium text-type-heading">{b}</span>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={80 * (TRUST_BULLETS.length + 1)}>
          <blockquote className="mt-10 border-l-4 border-brand-blue pl-5 text-[17px] italic text-type-body">
            {CLOSING}
          </blockquote>
        </Reveal>

        <Reveal delay={80 * (TRUST_BULLETS.length + 2)}>
          <div className="mt-16">
            <StatsCounters stats={TRUST_STATS} />
          </div>
        </Reveal>

        <Reveal delay={80 * (TRUST_BULLETS.length + 3)}>
          <div className="mt-16 bg-surface-gray-light py-16 px-4">
            <h3 className="text-section font-bold text-type-heading text-center mb-10">What others say</h3>
            <TestimonialsSlider testimonials={testimonials} />
          </div>
        </Reveal>

        <Reveal delay={80 * (TRUST_BULLETS.length + 4)}>
          <div className="mt-0">
            <PartnersStrip partners={partners} title="Ecosystem & partners" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
