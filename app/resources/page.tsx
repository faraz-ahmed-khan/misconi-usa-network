import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card, CardTitle, CardDescription } from "@/components/shared/Card";
import { Reveal } from "@/components/shared/Reveal";
import { LINKS } from "@/lib/constants";
import { MOCK_RESOURCES } from "@/lib/mock-data";

export const metadata = {
  title: "Resources | Misconi USA Network",
  description: "Articles, guides, videos, glossary, and FAQ to learn the language of readiness.",
};

export default function ResourcesPage() {
  const { articles, guides, videos, glossary, faq } = MOCK_RESOURCES;

  return (
    <div className="min-h-screen bg-surface-white">
      <div className="border-b border-surface-gray-border bg-surface-white pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-content">
          <Reveal delay={0}>
            <h1 className="text-section font-bold text-type-heading">
              Learn the Language of Readiness
            </h1>
            <p className="mt-4 text-[17px] text-type-body leading-[1.7]">
              Explore articles, guides, videos, and educational materials that help you understand readiness, the ecosystem, and the Prime Agent model.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto max-w-content px-4 py-24 sm:px-6 lg:px-8 space-y-20">
        <section aria-labelledby="articles-heading">
          <Reveal delay={0}>
            <SectionHeading id="articles-heading" title="Articles" />
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((item, index) => (
              <Reveal key={item.id} delay={80 * index}>
                <Card>
                  <CardTitle className="text-base">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </Card>
              </Reveal>
            ))}
          </div>
        </section>

        <section aria-labelledby="guides-heading">
          <Reveal delay={100}>
            <SectionHeading id="guides-heading" title="Guides" />
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {guides.map((item, index) => (
              <Reveal key={item.id} delay={80 * index}>
                <Card>
                  <CardTitle className="text-base">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </Card>
              </Reveal>
            ))}
          </div>
        </section>

        <section aria-labelledby="videos-heading">
          <Reveal delay={200}>
            <SectionHeading id="videos-heading" title="Videos" />
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {videos.map((item, index) => (
              <Reveal key={item.id} delay={80 * index}>
                <Card>
                  <div className="aspect-video rounded-lg bg-surface-gray flex items-center justify-center text-type-muted text-[15px]">
                    Video placeholder
                  </div>
                  <CardTitle className="mt-4 text-base">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </Card>
              </Reveal>
            ))}
          </div>
        </section>

        <section aria-labelledby="glossary-heading">
          <Reveal delay={300}>
            <SectionHeading id="glossary-heading" title="Glossary" />
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {glossary.map((item, index) => (
              <Reveal key={item.id} delay={80 * index}>
                <Card>
                  <CardTitle className="text-base">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </Card>
              </Reveal>
            ))}
          </div>
        </section>

        <section aria-labelledby="faq-heading">
          <Reveal delay={400}>
            <SectionHeading id="faq-heading" title="FAQ" />
          </Reveal>
          <div className="mt-8 space-y-4">
            {faq.map((item, index) => (
              <Reveal key={item.id} delay={80 * index}>
                <Card>
                  <CardTitle className="text-base">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </Card>
              </Reveal>
            ))}
          </div>
        </section>

        <Reveal delay={500}>
          <div className="text-center pt-8">
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
      </div>
    </div>
  );
}
