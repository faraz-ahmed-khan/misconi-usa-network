import HeroSection from "@/components/home/HeroSection";
import AboutNetworkSection from "@/components/home/AboutNetworkSection";
import EcosystemOverviewSection from "@/components/home/EcosystemOverviewSection";
import HowReadinessWorksSection from "@/components/home/HowReadinessWorksSection";
import EducationSupportSection from "@/components/home/EducationSupportSection";
import TargetAudienceSection from "@/components/home/TargetAudienceSection";
import CTASection from "@/components/home/CTASection";
import FAQSection from "@/components/home/FAQSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutNetworkSection />
      <EcosystemOverviewSection />
      <HowReadinessWorksSection />
      <EducationSupportSection />
      <TargetAudienceSection />
      <CTASection />
      <FAQSection />
    </>
  );
}
