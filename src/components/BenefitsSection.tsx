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
    <section id="benefits" className="py-20 bg-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Beneficios Clave de Nuestra
            <span className="block text-orange-500">Metodología IA</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-orange-100"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-xl mb-6">
                <benefit.icon className="w-8 h-8 text-orange-500" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
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