import professionalImage from "@/assets/professional.jpg";

const VisionSection = () => {
  return (
    <section id="vision" className="py-20 bg-white" style={{
      backgroundImage: 'radial-gradient(#E5E7EB 1px, transparent 1px)',
      backgroundSize: '24px 24px'
    }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div>
            <p className="text-digital-purple text-sm font-semibold mb-2 uppercase tracking-wide">
              Una Agencia con Visión de Futuro
            </p>
            
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-electric-blue mb-6 leading-tight">
              Convertimos Datos en
              <span className="block text-digital-purple">Decisiones Rentables</span>
            </h2>
            
            <p className="text-dark-gray-text text-lg leading-relaxed mb-8">
              Ayudamos a directores y empresarios visionarios a implementar soluciones de 
              inteligencia artificial que generan ventajas competitivas reales. Nuestro enfoque 
              estratégico convierte información compleja en oportunidades de crecimiento medibles 
              y sostenibles.
            </p>

            <div className="space-y-6 mb-8">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="font-semibold text-dark-gray-text">Crecimiento Acelerado</span>
                  <span className="text-sm font-bold text-digital-purple">+120%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-digital-purple to-tech-cyan h-2.5 rounded-full" style={{ width: "75%" }}></div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg border border-digital-purple/20 shadow-md">
                <div className="text-3xl font-bold text-digital-purple mb-2">+80%</div>
                <div className="text-dark-gray-text text-sm">Más Eficiencia</div>
              </div>
              <div className="bg-white p-6 rounded-lg border border-tech-cyan/20 shadow-md">
                <div className="text-3xl font-bold text-tech-cyan mb-2">+70%</div>
                <div className="text-dark-gray-text text-sm">Mejor ROI</div>
              </div>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="relative">
            <img 
              src={professionalImage} 
              alt="Profesional trabajando con IA" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;