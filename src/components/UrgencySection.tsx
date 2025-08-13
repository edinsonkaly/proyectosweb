// --- START OF FILE UrgencySection.tsx ---

import { WhiteSectionWrapper } from '@/components/ui/WhiteSectionWrapper'; // PASO 1: Importamos el wrapper
import { AlertTriangle, Clock, TrendingDown, DollarSign } from "lucide-react";
import { useFadeInOnScroll } from '@/utils/techNoirAnimations';

const UrgencySection = () => {
  const titleAnimation = useFadeInOnScroll(0);
  
  const consequences = [
    {
      icon: DollarSign,
      title: "Pierdes dinero cada día",
      description: "Cada cliente que no respondes a tiempo es una venta perdida. Los estudios muestran que el 78% de los clientes compra a quien responde primero.",
      color: "bg-red-50",
      iconColor: "text-red-500",
      shadow: "shadow-red-200"
    },
    {
      icon: Clock,
      title: "Tu tiempo se agota",
      description: "Mientras gastas horas en tareas repetitivas, tus competidores ya están automatizando y creciendo más rápido que tú.",
      color: "bg-amber-50",
      iconColor: "text-amber-500",
      shadow: "shadow-amber-200"
    },
    {
      icon: TrendingDown,
      title: "Tu competencia se adelanta",
      description: "Cada mes que no automatizas, tus competidores ganan ventaja. La automatización ya no es opcional, es obligatoria.",
      color: "bg-blue-50",
      iconColor: "text-blue-500",
      shadow: "shadow-blue-200"
    },
    {
      icon: AlertTriangle,
      title: "El burnout empresarial",
      description: "Trabajar 12+ horas diarias no es sostenible. Sin automatización, terminarás agotado y tu negocio estancado.",
      color: "bg-purple-50",
      iconColor: "text-purple-500",
      shadow: "shadow-purple-200"
    }
  ];

  // PASO 2: Reemplazamos toda la estructura del return
  return (
    // Usamos el wrapper y le pasamos el ID para la navegación.
    <WhiteSectionWrapper id="urgency">
      
      {/* 
        PASO 3: Pegamos aquí el contenido que antes estaba DENTRO del <section>.
        Ya no necesitamos ni el <section> ni el <div className="container..."> 
        porque el wrapper se encarga de eso.
      */}
      <div className="max-w-6xl mx-auto -mt-8">
        <div ref={titleAnimation.ref} style={titleAnimation.style} className="text-center mb-12 pt-4">
          <div className="relative inline-block mb-4">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-electric-blue mb-4 select-text relative tech-title">
              ¿Qué pasa si <span className="text-warning-red">no automatizas?</span>
              <div className="tech-title-scan absolute inset-0"></div>
            </h2>
            <div className="tech-corner-brackets absolute -inset-4 pointer-events-none">
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#7E3FF2]"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#7E3FF2]"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#01F9C6]"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#01F9C6]"></div>
            </div>
          </div>
          <p className="text-xl text-dark-gray-text max-w-3xl mx-auto">
            El costo de no actuar es más alto que el costo de automatizar. 
            Cada día que pasa sin automatización es dinero y oportunidades perdidas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {consequences.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className={`relative bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group ${
                index === 0 || index === 3 ? 'urgent-card' : ''
              }`}>
                {/* Animated border */}
                {(index === 0 || index === 3) && (
                  <>
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent animate-pulse"></div>
                    <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-transparent via-purple-500 to-transparent animate-pulse"></div>
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-pulse"></div>
                    <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-transparent via-red-500 to-transparent animate-pulse"></div>
                  </>
                )}
                <div className="flex items-start space-x-4">
                  <div className={`${item.color} p-3 rounded-lg ${item.shadow} transition-all duration-300 transform hover:scale-110`}>
                    <Icon className={`h-6 w-6 ${item.iconColor} drop-shadow-md`} />
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
        <div className="bg-gradient-to-r from-digital-purple to-tech-cyan p-1 rounded-2xl text-center -mt-8">
          <div className="bg-white p-6 md:p-8 rounded-xl">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-electric-blue mb-3">
              El momento de actuar es <span className="text-warning-red">AHORA</span>
            </h3>
            <p className="text-lg md:text-xl text-dark-gray-text max-w-2xl mx-auto">
              No dejes que la inacción te cueste el futuro de tu negocio. La automatización que implementes hoy será tu ventaja competitiva de mañana.
            </p>
          </div>
        </div>
      </div>
      
    </WhiteSectionWrapper>
  );
};

export default UrgencySection;