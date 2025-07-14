import HeroSection from "@/components/HeroSection";
import VisionSection from "@/components/VisionSection";
import BenefitsSection from "@/components/BenefitsSection";
import MethodologySection from "@/components/MethodologySection";
import StatsSection from "@/components/StatsSection";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <VisionSection />
      <BenefitsSection />
      <MethodologySection />
      <StatsSection />
      <ContactSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
