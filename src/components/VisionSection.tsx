import professionalImage from "@/assets/professional.jpg";

const VisionSection = () => {
  return (
    <section id="vision" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div>
            <p className="text-orange-500 text-sm font-semibold mb-2 uppercase tracking-wide">
              Una Agencia con Visión de Futuro
            </p>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Convertimos Datos en
              <span className="block text-orange-500">Decisiones Rentables</span>
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Ayudamos a directores y empresarios visionarios a implementar soluciones de 
              inteligencia artificial que generan ventajas competitivas reales. Nuestro enfoque 
              estratégico convierte información compleja en oportunidades de crecimiento medibles 
              y sostenibles.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-orange-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-orange-500 mb-2">80%</div>
                <div className="text-gray-700 text-sm">más eficiencia</div>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">70%</div>
                <div className="text-gray-700 text-sm">mejor ROI</div>
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