import { SectionHeading } from "@/components/shared/SectionHeading";

const AUDIENCES = [
  "New and early-stage businesses",
  "Growing businesses preparing for opportunities",
  "Suppliers and contractors seeking clarity",
  "Entrepreneurs exploring SBA-aligned programs",
  "Anyone who needs to understand readiness before taking action",
];

const CLOSING = "If you need clarity, orientation, or education, this is your starting point.";

export default function TargetAudienceSection() {
  return (
    <section className="bg-surface-gray py-24 px-4 sm:px-6 lg:px-8" aria-labelledby="target-audience-heading">
      <div className="mx-auto max-w-content">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              id="target-audience-heading"
              title="Target audience"
              subtitle="Misconi USA Network is designed for:"
            />
          </div>
          <div className="flex flex-wrap gap-3">
            {AUDIENCES.map((a) => (
              <span
                key={a}
                className="inline-flex rounded-tag bg-surface-blue-pale px-4 py-2 text-[13px] font-medium text-brand-blue"
              >
                {a}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <div className="w-full max-w-[720px] rounded-xl bg-footer-dark py-8 px-6 text-center">
            <p className="text-[18px] font-medium text-white">
              {CLOSING}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
