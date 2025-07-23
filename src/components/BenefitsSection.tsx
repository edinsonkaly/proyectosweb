import { 
  Zap, 
  Target, 
  TrendingUp, 
  Users, 
  BarChart3, 
  Shield 
} from "lucide-react";

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
    <section id="benefits" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            🚀 ¿Por qué automatizar tu negocio?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubre los beneficios reales que experimentarás desde el primer día
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-border hover:border-accent/50"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent to-success rounded-xl mb-6">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-4">
                {benefit.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
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