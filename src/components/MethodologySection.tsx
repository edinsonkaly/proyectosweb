import phase1Image from "@/assets/phase1.jpg";
import phase2Image from "@/assets/phase2.jpg";
import phase3Image from "@/assets/phase3.jpg";

const phases = [
  {
    number: "1",
    title: "Diagnóstico y Estrategia",
    image: phase1Image,
    description: "Análisis profundo de procesos actuales y definición de objetivos estratégicos"
  },
  {
    number: "2", 
    title: "Diseño e Implementación",
    image: phase2Image,
    description: "Desarrollo y configuración de soluciones IA personalizadas para tu negocio"
  },
  {
    number: "3",
    title: "Optimización y Soporte",
    image: phase3Image,
    description: "Monitoreo continuo, ajustes y soporte técnico especializado 24/7"
  }
];

const MethodologySection = () => {
  return (
    <section id="methodology" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-electric-blue mb-4">
            Implementación Estratégica
            <span className="block text-digital-purple">en 3 Fases</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {phases.map((phase, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-2xl shadow-[0_10px_30px_rgba(126,63,242,0.6)] hover:shadow-[0_15px_50px_rgba(126,63,242,0.8)] hover:-translate-y-2 transition-all duration-300 h-full min-h-[300px] flex flex-col border-2 border-transparent hover:border-[#7E3FF2]/30"
            >
              {/* Background Image with Blur */}
              <div 
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{
                  backgroundImage: `url(${phase.image})`,
                  filter: 'blur(4px)',
                  opacity: 0.9
                }}
              />
              {/* Content Overlay */}
              <div className="relative z-10 p-8 flex-1 flex flex-col bg-black/40 text-white">
                <span className="text-5xl font-bold text-warning-red">0{phase.number}</span>
                <h3 className="text-2xl font-bold text-white my-4">{phase.title}</h3>
                <p className="text-white/90 leading-relaxed flex-1">
                  {phase.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;