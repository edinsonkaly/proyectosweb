import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "¿Cuánto tiempo toma implementar una solución de IA?",
    answer: "El tiempo de implementación varía según la complejidad del proyecto. Generalmente, proyectos básicos toman entre 4-6 semanas, mientras que soluciones más complejas pueden requerir 2-3 meses. Siempre proporcionamos un cronograma detallado en la fase de planificación."
  },
  {
    question: "¿Necesito conocimientos técnicos para usar las soluciones de IA?",
    answer: "No es necesario. Diseñamos todas nuestras soluciones pensando en la facilidad de uso. Proporcionamos capacitación completa a tu equipo y documentación clara. Nuestro soporte técnico está disponible 24/7 para resolver cualquier duda."
  },
  {
    question: "¿Qué tipo de ROI puedo esperar?",
    answer: "Nuestros clientes típicamente ven un retorno de inversión entre 200-400% en el primer año. Esto se debe a la optimización de procesos, reducción de costos operativos y mejora en la toma de decisiones. Cada proyecto incluye métricas claras de rendimiento."
  },
  {
    question: "¿Ofrecen soporte post-implementación?",
    answer: "Absolutamente. Incluimos 6 meses de soporte completo post-implementación, con monitoreo 24/7, actualizaciones y optimizaciones. También ofrecemos planes de mantenimiento extendido para asegurar el máximo rendimiento de tu inversión."
  },
  {
    question: "¿Trabajan con empresas de todos los tamaños?",
    answer: "Sí, trabajamos desde startups hasta grandes corporaciones. Adaptamos nuestras soluciones al tamaño y presupuesto de cada cliente. Tenemos metodologías escalables que se ajustan a las necesidades específicas de cada organización."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-electric-blue mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-xl text-dark-gray-text max-w-3xl mx-auto">
              Resolvemos tus dudas para que tomes la mejor decisión con total confianza.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 last:border-b-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-6 text-left flex items-center justify-between transition-colors duration-300 group"
                >
                  <span className="text-xl font-medium text-dark-gray-text group-hover:text-electric-blue">
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`w-6 h-6 text-digital-purple flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'transform rotate-180' : ''}`}
                  />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}
                >
                  <div className="pb-6 pr-8">
                    <p className="text-dark-gray-text/80 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;