import Link from "next/link";
import { Card, CardTitle, CardDescription } from "@/components/shared/Card";
import { PageHeading } from "@/components/shared/PageHeading";
import { Reveal } from "@/components/shared/Reveal";
import type { EducationLibrary } from "@/lib/education-content";
import { cn } from "@/lib/utils";

type EducationLibraryPageProps = {
  library: EducationLibrary;
};

export default function EducationLibraryPage({ library }: EducationLibraryPageProps) {
  const { h1, intro, topics, routingButtons } = library;

  return (
    <div className="min-h-screen bg-surface-white">
      <div
        className="border-b border-surface-gray-border pt-28 pb-16 px-4 sm:px-6 lg:px-8"
        style={{ background: "linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)" }}
      >
        <div className="mx-auto max-w-content">
          <Reveal delay={0}>
            <PageHeading title={h1} description={intro} eyebrow="Education Library" />
          </Reveal>
        </div>
      </div>

      <div className="mx-auto max-w-content px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {topics.map((topic, index) => (
            <Reveal key={topic.id} delay={80 * index}>
              <Card className="h-full flex flex-col">
                <CardTitle>{topic.title}</CardTitle>
                <CardDescription className="flex-1">
                  {topic.description}
                  {topic.bullets && (
                    <ul className="mt-3 list-disc list-inside space-y-1">
                      {topic.bullets.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </CardDescription>
                <p className="mt-4 text-[14px] font-semibold text-brand-blue">
                  Learn more → {topic.learnMoreLabel}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400}>
          <div className="mt-16 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-3">
            {routingButtons.map((button, index) => {
              const className = cn(
                "inline-flex items-center justify-center rounded-button px-6 py-3 text-[14px] font-semibold transition-all duration-200 ease focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2",
                index === 0
                  ? "bg-brand-blue text-white hover:bg-brand-blue-hover hover:shadow-button hover:-translate-y-0.5"
                  : "border-2 border-brand-blue bg-white text-brand-blue hover:shadow-button hover:-translate-y-0.5"
              );

              if (button.external) {
                return (
                  <a
                    key={button.label}
                    href={button.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                  >
                    {button.label}
                  </a>
                );
              }

              return (
                <Link key={button.label} href={button.href} className={className}>
                  {button.label}
                </Link>
              );
            })}
          </div>
        </Reveal>
      </div>
    </div>
  );
}
