import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import faqImage from "@/assets/faq-professional.jpg";

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
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Image */}
          <div className="order-2 lg:order-1 relative">
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              <img 
                src={faqImage} 
                alt="Profesional considerando estrategias de IA" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-400 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500 rounded-full opacity-15 blur-2xl"></div>
          </div>
          
          {/* Right Column - FAQ */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Preguntas
              <span className="block text-accent">Frecuentes</span>
            </h2>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="border border-border rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-6 text-left bg-card hover:bg-muted transition-colors duration-200 flex items-center justify-between"
                  >
                    <span className="font-semibold text-foreground pr-4">
                      {faq.question}
                    </span>
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-accent flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-accent flex-shrink-0" />
                    )}
                  </button>
                  
                  {openIndex === index && (
                    <div className="p-6 bg-muted border-t border-border">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;