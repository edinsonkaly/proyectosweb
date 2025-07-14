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
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Implementación Estratégica
            <span className="block text-accent">en 3 Fases</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {phases.map((phase, index) => (
            <div key={index} className="relative group">
              <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                <img 
                  src={phase.image} 
                  alt={phase.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-primary/60" />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-xl mr-4">
                      {phase.number}
                    </div>
                    <h3 className="text-xl font-bold">{phase.title}</h3>
                  </div>
                  <p className="text-white/90 leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;