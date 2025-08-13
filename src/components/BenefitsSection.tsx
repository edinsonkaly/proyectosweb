import { 
  Zap, 
  Target, 
  TrendingUp, 
  Users, 
  BarChart3, 
  Shield 
} from "lucide-react";
import benefitsBg from "@/assets/fondo-beneficios.png";
import { useFadeInOnScroll, useStaggeredAnimation, DiagonalRays, GranularBackground } from '@/utils/techNoirAnimations';

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
  const titleAnimation = useFadeInOnScroll(0);
  const { containerRef, getItemStyle } = useStaggeredAnimation(benefits.length, 150);
  
  return (
    <section id="benefits" className="relative py-20 bg-electric-blue overflow-hidden">
      {/* Fondo de imagen */}
      {/* Fondo con efecto de partículas */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-electric-blue/80 to-electric-blue/90"></div>
        <div className="absolute inset-0 bg-[url('@/assets/grid-pattern.svg')] opacity-5"></div>
      </div>
      
      {/* Efecto de rayos diagonales */}
      <DiagonalRays opacity={0.05} />
      
      {/* Fondo granulado */}
      <GranularBackground orientation="diagonal" opacity={0.03} />
      
      <div className="container relative z-10 mx-auto px-4">
        <div ref={titleAnimation.ref} style={titleAnimation.style} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4 neon-glow">
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
              className="relative bg-white/5 backdrop-blur-md p-8 rounded-2xl transition-all duration-300 
                        border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]
                        hover:shadow-[0_12px_40px_rgba(126,63,242,0.3)] hover:-translate-y-1
                        before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br 
                        before:from-white/5 before:to-transparent before:opacity-0 hover:before:opacity-100 
                        before:transition-opacity before:duration-300 overflow-hidden
                        after:absolute after:inset-0 after:rounded-2xl after:bg-[radial-gradient(100%_100%_at_100%_100%,rgba(126,63,242,0.1),transparent)]
                        after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-500"
            >
              <div className="relative z-10">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-digital-purple to-tech-cyan rounded-xl mb-6 shadow-lg">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">
                  {benefit.title}
                </h3>
                
                <p className="text-light-gray-text leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;