import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center" style={{
      background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #1e40af 100%)'
    }}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
            Agencia de
            <span className="block text-orange-400">Inteligencia Artificial</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transformamos tu estrategia de marketing con soluciones de inteligencia artificial a medida, 
            automatizando procesos para un crecimiento exponencial
          </p>
          
          <Button variant="cta" size="xl" className="text-xl px-12 py-6">
            Solicitar Asesoría Gratuita
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;