import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import IdealClientSection from "@/components/IdealClientSection";
import VisionSection from "@/components/VisionSection";
import BenefitsSection from "@/components/BenefitsSection";
import MethodologySection from "@/components/MethodologySection";
import UrgencySection from "@/components/UrgencySection";
import TechnologiesSection from "@/components/TechnologiesSection";
import StatsSection from "@/components/StatsSection";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-electric-blue"> {/* Aseguramos un color de fondo base */}
      <Header />
      <main className="relative z-10"> {/* <-- ESTA ES LA MODIFICACIÓN CLAVE */}
        <HeroSection />
        <IdealClientSection />
        <VisionSection />
        <BenefitsSection />
        <MethodologySection />
        <UrgencySection />
        <StatsSection />
        <TechnologiesSection />
        <ContactSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
