import { useState } from 'react';
import { Plus, X } from 'lucide-react';

const faqs = [
  {
    question: "¿Necesito conocimientos técnicos para usar sus soluciones?",
    answer: "No es necesario. Diseñamos todas nuestras soluciones pensando en la facilidad de uso. Proporcionamos capacitación completa a tu equipo y documentación clara. Nuestro soporte técnico está disponible 24/7 para resolver cualquier duda."
  },
  {
    question: "¿Qué tipo de ROI puedo esperar?",
    answer: "Nuestros clientes típicamente ven un retorno de inversión entre 200-400% en el primer año. Esto se debe a la optimización de procesos, reducción de costos operativos y mejora en la toma de decisiones. Cada proyecto incluye métricas claras de rendimiento."
  },
  {
    question: "¿Cuánto tiempo toma implementar una solución de IA?",
    answer: "El tiempo de implementación varía según la complejidad del proyecto. Generalmente, proyectos básicos toman entre 4-6 semanas, mientras que soluciones más complejas pueden requerir 2-3 meses. Siempre proporcionamos un cronograma detallado en la fase de planificación."
  },
  {
    question: "¿Ofrecen soporte post-implementación?",
    answer: "Absolutamente. Incluimos 1 mese de soporte completo post-implementación, con monitoreo 24/7, actualizaciones y optimizaciones. También ofrecemos planes de mantenimiento extendido para asegurar el máximo rendimiento de tu inversión."
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
    <section 
      id="faq" 
      className="py-20 bg-white"
      style={{
        backgroundImage: 'radial-gradient(#E5E7EB 1px, transparent 1px)',
        backgroundSize: '24px 24px'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0A1F66] mb-4 font-montserrat">
              Preguntas Frecuentes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-open-sans">
              Resolvemos tus dudas para que tomes la mejor decisión con total confianza.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`
                  bg-[#F9F9FB] rounded-lg overflow-hidden transition-all duration-300
                  ${openIndex === index ? 'shadow-md' : 'shadow-sm'}
                  hover:shadow-md
                `}
                style={{
                  borderLeft: `3px solid #7E3FF2`,
                  transition: 'all 0.3s ease',
                }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`
                    w-full px-6 py-5 text-left flex items-center justify-between 
                    transition-all duration-300 group
                    ${openIndex === index ? 'bg-gray-50' : 'hover:bg-gray-50'}
                  `}
                >
                  <span className="text-lg font-semibold text-gray-800 group-hover:text-[#7E3FF2] font-open-sans">
                    {faq.question}
                  </span>
                  <div className="ml-4 flex-shrink-0">
                    {openIndex === index ? (
                      <X className="w-5 h-5 text-[#7E3FF2] transform transition-transform duration-300" />
                    ) : (
                      <Plus className="w-5 h-5 text-[#7E3FF2] transform transition-transform duration-300" />
                    )}
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-6 pt-2 text-gray-600 font-open-sans">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA de Soporte */}
          <div className="mt-16 bg-gradient-to-r from-[#7E3FF2] to-[#00C4FF] rounded-xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3 font-montserrat">¿No encuentras tu respuesta?</h3>
            <p className="mb-6 font-open-sans">
              Nuestro equipo de expertos está listo para resolver cualquier otra duda. Contáctanos directamente.
            </p>
            <div className="relative z-10">
              <a 
                href="https://api.whatsapp.com/send?phone=51980187824&text=Hola%2C%20me%20gustaría%20recibir%20más%20información%20sobre%20sus%20servicios%20de%20automatización%20con%20IA." 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-[#7E3FF2] px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 font-open-sans relative z-20"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open('https://api.whatsapp.com/send?phone=51980187824&text=Hola%2C%20me%20gustaría%20recibir%20más%20información%20sobre%20sus%20servicios%20de%20automatización%20con%20IA.', '_blank');
                }}
              >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.498 14.382v3.3c0 .66.536 1.204 1.195 1.24.69.04 1.307-.5 1.307-1.2v-6.5a1 1 0 0 0-1-1h-6.5a1.2 1.2 0 0 0-1.2 1.3c.04.66.58 1.2 1.24 1.2h3.3l-5.3 5.3a1 1 0 0 0 1.414 1.413l5.3-5.3z" />
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-2a8 8 0 1 1 0-16 8 8 0 0 1 0 16z" />
              </svg>
              Hablar con un experto
            </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;