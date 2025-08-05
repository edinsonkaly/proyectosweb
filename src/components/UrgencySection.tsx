import { AlertTriangle, Clock, TrendingDown, DollarSign } from "lucide-react";

const UrgencySection = () => {
  const consequences = [
    {
      icon: DollarSign,
      title: "Pierdes dinero cada día",
      description: "Cada cliente que no respondes a tiempo es una venta perdida. Los estudios muestran que el 78% de los clientes compra a quien responde primero."
    },
    {
      icon: Clock,
      title: "Tu tiempo se agota",
      description: "Mientras gastas horas en tareas repetitivas, tus competidores ya están automatizando y creciendo más rápido que tú."
    },
    {
      icon: TrendingDown,
      title: "Tu competencia se adelanta",
      description: "Cada mes que no automatizas, tus competidores ganan ventaja. La automatización ya no es opcional, es obligatoria."
    },
    {
      icon: AlertTriangle,
      title: "El burnout empresarial",
      description: "Trabajar 12+ horas diarias no es sostenible. Sin automatización, terminarás agotado y tu negocio estancado."
    }
  ];

  return (
    <section id="urgency" className="py-20 bg-white" style={{
      backgroundImage: 'radial-gradient(#E5E7EB 1px, transparent 1px)',
      backgroundSize: '24px 24px'
    }}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-electric-blue mb-4">
              ¿Qué pasa si <span className="text-warning-red">no automatizas?</span>
            </h2>
            <p className="text-xl text-dark-gray-text max-w-3xl mx-auto">
              El costo de no actuar es más alto que el costo de automatizar. 
              Cada día que pasa sin automatización es dinero y oportunidades perdidas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {consequences.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-warning-red/30">
                  <div className="flex items-start space-x-4">
                    <div className="bg-warning-red/10 p-3 rounded-lg">
                      <Icon className="h-6 w-6 text-warning-red" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-electric-blue mb-3">
                        {item.title}
                      </h3>
                      <p className="text-dark-gray-text leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Urgency Call to Action */}
          <div className="bg-gradient-to-r from-digital-purple to-tech-cyan p-1 rounded-2xl text-center">
            <div className="bg-white p-8 rounded-xl">
              <h3 className="text-3xl font-heading font-bold text-electric-blue mb-4">
                El momento de actuar es <span className="text-warning-red">AHORA</span>
              </h3>
              <p className="text-xl mb-6 text-dark-gray-text max-w-2xl mx-auto">
                No dejes que la inacción te cueste el futuro de tu negocio. La automatización que implementes hoy será tu ventaja competitiva de mañana.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;