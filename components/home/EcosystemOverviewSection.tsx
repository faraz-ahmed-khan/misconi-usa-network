import { SectionHeading } from "@/components/shared/SectionHeading";
import { Icon } from "@/components/shared/Icon";
import { Reveal } from "@/components/shared/Reveal";

const SURFACES = [
  {
    num: "1.",
    title: "Misconi USA Network — Education & Orientation",
    description: "Learn how readiness works, explore the ecosystem, and understand your next step.",
    icon: "book" as const,
  },
  {
    num: "2.",
    title: "Get Your Business Score — Assessment & Activation",
    description: "Take the Business Score assessment to activate readiness and receive your readiness level.",
    icon: "chart" as const,
  },
  {
    num: "3.",
    title: "MisconiUSA.com — Operational Readiness System",
    description: "Subscribe, unlock your readiness pathway, and complete the requirements needed to access opportunities.",
    icon: "building" as const,
  },
];

const FLOW_NOTE = "This structure ensures a guided progression: Learn → Score → Become Ready";

export default function EcosystemOverviewSection() {
  return (
    <section className="bg-surface-white py-24 px-4 sm:px-6 lg:px-8" aria-labelledby="ecosystem-overview-heading">
      <div className="mx-auto max-w-content">
        <Reveal delay={0}>
          <SectionHeading
            id="ecosystem-overview-heading"
            title="Ecosystem Overview: The 3-Surface Model"
            subtitle="The Misconi Readiness Ecosystem is built on three surfaces:"
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {SURFACES.map((s, index) => (
            <Reveal
              key={s.title}
              delay={100 * index}
              className="rounded-card border border-surface-gray-border bg-white p-8 flex flex-col transition-all duration-200 ease hover:-translate-y-1 hover:border-brand-blue hover:shadow-card"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-icon-box bg-surface-blue-pale text-brand-blue mb-4">
                <Icon name={s.icon} size="lg" />
              </div>
              <p className="text-[12px] font-bold uppercase tracking-wider text-brand-blue mb-2">{s.num}</p>
              <h3 className="text-subhead font-bold text-type-heading">{s.title}</h3>
              <p className="mt-2 text-[15px] text-type-muted leading-[1.65] flex-1">{s.description}</p>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-center text-[15px] text-type-muted italic">
          {FLOW_NOTE}
        </p>
      </div>
    </section>
  );
}
