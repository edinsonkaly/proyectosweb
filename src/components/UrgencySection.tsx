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
    <section id="urgency" className="py-20 bg-gradient-to-b from-red-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              ⚠️ ¿Qué pasa si no automatizas?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              El costo de no actuar es más alto que el costo de automatizar. 
              Cada día que pasa sin automatización es dinero y oportunidades perdidas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {consequences.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-card p-8 rounded-xl shadow-lg border-l-4 border-red-500">
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-100 p-3 rounded-lg">
                      <Icon className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-3">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Urgency Call to Action */}
          <div className="bg-gradient-to-r from-red-500 to-orange-500 p-8 rounded-2xl text-center text-white">
            <h3 className="text-3xl font-bold mb-4">
              ⏰ El momento de actuar es AHORA
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Cada día que esperas, tu competencia se adelanta más. 
              No dejes que el miedo al cambio te cueste el futuro de tu negocio.
            </p>
            <div className="bg-white p-6 rounded-lg inline-block">
              <p className="text-foreground text-lg font-semibold">
                La automatización que implementes hoy, será la ventaja competitiva de mañana
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;