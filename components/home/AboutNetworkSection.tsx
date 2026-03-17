import { Icon } from "@/components/shared/Icon";

const BULLETS = [
  "What readiness actually means",
  "Why readiness matters",
  "How the ecosystem is structured",
  "What your next step should be",
];

const INFO_ITEMS = [
  "Clarity before action",
  "No intake or scoring",
  "Orientation layer only",
];

export default function AboutNetworkSection() {
  return (
    <section className="bg-surface-gray py-24 px-4 sm:px-6 lg:px-8" aria-labelledby="about-network-heading">
      <div className="mx-auto max-w-content">
        <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
          <div>
            <h2 id="about-network-heading" className="text-section font-bold text-type-heading">
              About the Misconi USA Network
            </h2>
            <p className="mt-4 text-[17px] text-type-body leading-[1.75]">
              Misconi USA Network is the education layer of the Misconi Readiness Ecosystem. Before you take the Business Score or enter a readiness pathway, this is where you gain clarity.
            </p>
            <p className="mt-6 text-[16px] font-bold text-type-heading">
              You&apos;ll learn:
            </p>
            <ul className="mt-2 space-y-2.5">
              {BULLETS.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-1.5 flex h-1.5 w-1.5 flex-shrink-0 rounded-sm bg-brand-blue" />
                  <span className="text-[16px] text-type-body">{b}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[16px] text-type-muted italic">
              The Network does not collect your information or activate readiness. It simply gives you the understanding you need to move forward with confidence.
            </p>
          </div>

          <div className="rounded-card bg-surface-blue-tint p-8">
            <p className="text-[13px] font-medium uppercase tracking-[0.08em] text-type-muted">
              Education Layer of the Misconi Readiness Ecosystem
            </p>
            <ul className="mt-6 space-y-4">
              {INFO_ITEMS.map((label) => (
                <li key={label} className="flex items-center gap-3">
                  <Icon name="check" size="sm" className="text-brand-blue flex-shrink-0" />
                  <span className="text-[15px] font-medium text-type-heading">{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
