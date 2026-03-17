import { LINKS } from "@/lib/constants";

const CTAS = [
  {
    title: "Get Your Business Score",
    description: "Activate readiness and receive your readiness level.",
    href: LINKS.GYBS,
  },
  {
    title: "Begin Your Readiness Pathway",
    description: "Subscribe and start completing the requirements needed to access opportunities.",
    href: LINKS.MISCONI_USA,
  },
  {
    title: "Get SBA-Aligned Training",
    description: "Build your foundation with SBA-aligned education and support.",
    href: LINKS.SBA_READY,
  },
];

export default function CTASection() {
  return (
    <section className="bg-surface-gray py-24 px-4 sm:px-6 lg:px-8" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-content">
        <h2 id="cta-heading" className="text-section font-bold text-type-heading text-center">
          Choose your next step
        </h2>
        <p className="mt-3 text-[17px] text-type-muted text-center">
          Once you understand readiness, choose the path that matches your needs:
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {CTAS.map((c) => (
            <div
              key={c.title}
              className="rounded-card border border-surface-gray-border bg-white p-8 transition-all duration-200 ease hover:border-brand-blue hover:shadow-card-hover"
            >
              <h3 className="text-subhead font-bold text-type-heading">{c.title}</h3>
              <p className="mt-2 text-[15px] text-type-muted">{c.description}</p>
              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-button bg-brand-blue px-4 py-3 text-[14px] font-semibold text-white hover:bg-brand-blue-hover transition-colors duration-200 ease focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
              >
                {c.title}
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
