import { Check, X } from "lucide-react";
import { useFadeInOnScroll, useSlideInAnimation, GranularBackground, DiagonalRays } from '@/utils/techNoirAnimations';

// Custom CheckCircle component
const CheckCircle = () => (
  <svg className="h-6 w-6 text-digital-purple flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 4 12 14.01l-3-3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Custom XSquare component
const XSquare = () => (
  <svg className="h-6 w-6 text-warning-red flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
    <rect x="3" y="3" width="18" height="18" rx="4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 9l6 6m0-6l-6 6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IdealClientSection = () => {
  const titleAnimation = useFadeInOnScroll(0);
  const leftColumnAnimation = useSlideInAnimation('left', 200);
  const rightColumnAnimation = useSlideInAnimation('right', 400);
  
  const idealProfile = [
    "Tienes un negocio en crecimiento pero sin presencia digital sólida",
    "Pasas más de 6 horas al día respondiendo mensajes y gestionando redes",
    "Pierdes clientes porque no puedes responder 24/7",
    "Quieres automatizar tu marketing y ventas sin perder el toque humano",
    "Buscas crecer sin contratar más personal de inmediato",
    "Estás abierto a adoptar nuevas tecnologías para escalar tu negocio"
  ];

  const notFor = [
    "Buscas soluciones completamente gratis",
    "No tienes presupuesto para invertir en crecimiento",
    "Prefieres hacer todo manualmente",
    "No confías en la tecnología para tu negocio"
  ];

  return (
    <section 
    id="ideal-client" 
    className="py-20 bg-white relative overflow-hidden" 
    // CAMBIO 1: Reemplazamos el fondo con el de TechnologiesSection
    style={{
      backgroundImage: `
        radial-gradient(circle at 25% 25%, rgba(126, 63, 242, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 75% 75%, rgba(1, 249, 198, 0.08) 0%, transparent 50%),
        linear-gradient(135deg, transparent 0%, rgba(10, 31, 102, 0.02) 50%, transparent 100%),
        radial-gradient(#E5E7EB 1px, transparent 1px)
      `,
      backgroundSize: '800px 800px, 600px 600px, 100% 100%, 24px 24px',
      backgroundPosition: '0% 0%, 100% 100%, 0% 0%, 0% 0%'
    }}
  >

    {/* Estas clases vienen de techNoir.css y index.css */}
    <div className="tech-matrix-bg absolute inset-0 opacity-10 pointer-events-none"></div>
    <div className="tech-grid-overlay absolute inset-0 opacity-20 pointer-events-none"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div ref={titleAnimation.ref} style={titleAnimation.style}>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-electric-blue mb-4 tech-glitch-low" data-text="¿Esto es para ti?">
              ¿Esto es para ti?
            </h2>
            <p className="text-xl text-dark-gray-text mb-12">
              Descubre si nuestras soluciones son perfectas para tu negocio
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Es para ti */}
            <div className="group relative">
              {/* Gradient Shadow */}
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-digital-purple/30 to-tech-cyan/30 blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-white p-8 rounded-xl transition-all duration-300 hover:-translate-y-1 border-0 overflow-hidden h-full flex flex-col">
                {/* Gradient Border */}
                <div className="absolute inset-0 rounded-xl p-[1px]" style={{
                  background: 'linear-gradient(135deg, #7E3FF2 0%, #01F9C6 100%)',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                  opacity: 0.8
                }} />
              
              <h3 className="text-2xl font-heading font-bold text-digital-purple mb-6 flex items-center">
                <span className="inline-flex items-center justify-center mr-3">
                  <CheckCircle />
                </span>
                Es perfecto para ti si:
              </h3>
              <ul className="space-y-4 text-left">
                {idealProfile.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle />
                    <span className="text-dark-gray-text">{item}</span>
                  </li>
                ))}
              </ul>
              </div>
            </div>

            {/* No es para ti */}
            <div className="group relative">
              {/* Red Shadow */}
              <div className="absolute -inset-1 rounded-xl bg-warning-red/30 blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-white p-8 rounded-xl transition-all duration-300 hover:-translate-y-1 border-0 overflow-hidden h-full flex flex-col">
                {/* Red Border */}
                <div className="absolute inset-0 rounded-xl p-[1px]" style={{
                  background: '#FF4A4A',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                  opacity: 0.8
                }} />
              
              <h3 className="text-2xl font-heading font-bold text-warning-red mb-6 flex items-center">
                <span className="inline-flex items-center justify-center mr-3">
                  <XSquare />
                </span>
                No es para ti si:
              </h3>
              <ul className="space-y-4 text-left">
                {notFor.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <XSquare />
                    <span className="text-dark-gray-text">{item}</span>
                  </li>
                ))}
              </ul>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="relative bg-white p-[1px] rounded-xl inline-block transition-all duration-300 group shadow-lg">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-digital-purple/30 to-tech-cyan/30 transition-opacity duration-300"></div>
              <div className="relative bg-white px-8 py-4 rounded-xl z-10">
                <p className="text-lg font-heading font-semibold text-dark-gray-text">
                  Si te identificas con los puntos positivos, 
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-digital-purple to-tech-cyan">
                    {' '}¡estás en el lugar correcto!
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IdealClientSection;