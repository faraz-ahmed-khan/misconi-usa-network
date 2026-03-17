import { SectionHeading } from "@/components/shared/SectionHeading";
import { Icon } from "@/components/shared/Icon";

const TOPICS = [
  { title: "What readiness is", icon: "book" as const },
  { title: "Why readiness matters", icon: "shield" as const },
  { title: "How readiness levels work", icon: "chart" as const },
  { title: "What the Business Score represents", icon: "chart" as const },
  { title: "How pathways support business growth", icon: "arrow" as const },
  { title: "How the Prime Agent model works", icon: "users" as const },
  { title: "How to prepare for contracts, distribution, and SBA-aligned programs", icon: "building" as const },
];

const DISCLAIMER =
  "These are not operational services. They are guides designed to help you understand the system before entering it.";

export default function EducationSupportSection() {
  return (
    <section className="bg-surface-white py-24 px-4 sm:px-6 lg:px-8" aria-labelledby="education-support-heading">
      <div className="mx-auto max-w-content">
        <SectionHeading
          id="education-support-heading"
          title="Services / support areas — education only"
          subtitle="The Network provides educational content on:"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TOPICS.map((t) => (
            <div
              key={t.title}
              className="rounded-[14px] border border-surface-gray-border bg-white p-7 transition-all duration-200 ease hover:border-brand-blue hover:bg-surface-blue-pale-hover"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-icon-box-sm bg-surface-blue-pale text-brand-blue mb-3">
                <Icon name={t.icon} size="sm" />
              </div>
              <p className="text-[16px] font-semibold text-type-heading">{t.title}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-[14px] text-surface-gray-muted italic">
          {DISCLAIMER}
        </p>
      </div>
    </section>
  );
}
