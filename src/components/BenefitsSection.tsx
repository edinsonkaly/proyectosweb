import { 
  Zap, 
  Target, 
  TrendingUp, 
  Users, 
  BarChart3, 
  Shield 
} from "lucide-react";
import benefitsBg from "@/assets/fondo-beneficios.png";

const benefits = [
  {
    icon: Zap,
    title: "Libera tu tiempo",
    description: "Automatiza respuestas, seguimiento de leads y gestión de redes sociales. Recupera 6+ horas diarias para enfocarte en hacer crecer tu negocio."
  },
  {
    icon: Target,
    title: "Nunca pierdas un cliente",
    description: "Respuesta automática 24/7 en WhatsApp, redes sociales y email. Tus clientes siempre recibirán atención inmediata, incluso mientras duermes."
  },
  {
    icon: TrendingUp,
    title: "Ventas en piloto automático", 
    description: "Sistemas de seguimiento automatizado que nutren leads, califican prospectos y programan citas sin tu intervención manual."
  },
  {
    icon: Users,
    title: "Escalabilidad sin contratar",
    description: "Atiende 10x más clientes con la misma calidad, sin necesidad de contratar personal adicional. La IA trabaja 24/7 por ti."
  },
  {
    icon: BarChart3,
    title: "Datos que realmente importan",
    description: "Reportes automáticos que te muestran qué funciona, cuánto vendes y dónde invertir tu tiempo y dinero para mejores resultados."
  },
  {
    icon: Shield,
    title: "Implementación sin riesgos",
    description: "Acompañamiento completo durante todo el proceso. Garantizamos que tu automatización funcione desde el día uno."
  }
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="relative py-20 bg-electric-blue">
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          background: `linear-gradient(0deg, rgba(10, 31, 102, 0.95), rgba(10, 31, 102, 0.95)), url(${benefitsBg}) no-repeat center center`,
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          zIndex: 0
        }}
      />
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            🚀 ¿Por qué automatizar tu negocio?
          </h2>
          <p className="text-xl text-light-gray-text max-w-3xl mx-auto">
            Descubre los beneficios reales que experimentarás desde el primer día
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-digital-purple/20"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-digital-purple to-tech-cyan rounded-xl mb-6">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">
                {benefit.title}
              </h3>
              
              <p className="text-light-gray-text leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;