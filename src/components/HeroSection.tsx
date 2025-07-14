import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-primary">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-primary/70" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Marketing Digital
          <span className="block text-accent">Potenciado con IA</span>
        </h1>
        
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Transformamos tu estrategia de marketing con soluciones de inteligencia artificial a medida, 
          automatizando procesos para un crecimiento exponencial
        </p>
        
        <Button variant="cta" size="xl" className="text-lg">
          Solicitar Asesoría Gratuita
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;