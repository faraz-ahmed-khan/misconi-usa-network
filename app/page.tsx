import HeroSection from "@/components/home/HeroSection";
import AboutNetworkSection from "@/components/home/AboutNetworkSection";
import EcosystemOverviewSection from "@/components/home/EcosystemOverviewSection";
import HowReadinessWorksSection from "@/components/home/HowReadinessWorksSection";
import EducationSupportSection from "@/components/home/EducationSupportSection";
import TargetAudienceSection from "@/components/home/TargetAudienceSection";
import TrustSection from "@/components/home/TrustSection";
import CTASection from "@/components/home/CTASection";
import FAQSection from "@/components/home/FAQSection";
import { MOCK_TESTIMONIALS, MOCK_PARTNERS } from "@/lib/mock-data";

export default function HomePage() {
  const testimonials = MOCK_TESTIMONIALS.map((t) => ({
    id: t.id,
    quote: t.quote,
    author: t.author,
    role: t.role,
    company: t.company,
  }));
  const partners = MOCK_PARTNERS;

  return (
    <>
      <HeroSection />
      <AboutNetworkSection />
      <EcosystemOverviewSection />
      <HowReadinessWorksSection />
      <EducationSupportSection />
      <TargetAudienceSection />
      <TrustSection
        testimonials={testimonials.map((t) => ({
          id: t.id,
          quote: t.quote,
          author: t.author,
          role: t.role,
          company: t.company,
        }))}
        partners={partners}
      />
      <CTASection />
      <FAQSection />
    </>
  );
}
