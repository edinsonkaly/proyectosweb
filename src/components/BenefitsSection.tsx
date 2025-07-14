import { 
  TrendingUp, 
  Brain, 
  DollarSign, 
  Zap, 
  Target, 
  BarChart3 
} from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Mayor Eficiencia Operativa",
    description: "Automatización inteligente de procesos repetitivos que libera tiempo para decisiones estratégicas."
  },
  {
    icon: Brain,
    title: "Mejora en Decisiones",
    description: "Análisis predictivo basado en IA para tomar decisiones informadas con datos precisos."
  },
  {
    icon: DollarSign,
    title: "Reducción de Costos",
    description: "Optimización de recursos y reducción significativa de gastos operativos mediante IA."
  },
  {
    icon: Zap,
    title: "Implementación Rápida",
    description: "Metodología ágil que permite ver resultados tangibles en las primeras semanas."
  },
  {
    icon: Target,
    title: "Segmentación Precisa",
    description: "Identificación exacta de audiencias objetivo para maximizar el impacto de campañas."
  },
  {
    icon: BarChart3,
    title: "Métricas Avanzadas",
    description: "Dashboards inteligentes con insights accionables para monitoreo en tiempo real."
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Beneficios Clave de Nuestra
            <span className="block text-accent">Metodología IA</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-background p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-accent/10 rounded-lg mb-6">
                <benefit.icon className="w-8 h-8 text-accent" />
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