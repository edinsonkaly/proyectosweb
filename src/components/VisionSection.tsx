import professionalImage from "@/assets/professional.jpg";

const VisionSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Left Column - 60% */}
          <div className="lg:col-span-3">
            <p className="text-accent text-lg font-semibold mb-4 uppercase tracking-wide">
              Una Agencia con Visión de Futuro
            </p>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Convertimos Datos en
              <span className="block text-accent">Decisiones Rentables</span>
            </h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed">
              Ayudamos a directores y empresarios visionarios a implementar soluciones de 
              inteligencia artificial que generan ventajas competitivas reales. Nuestro enfoque 
              estratégico convierte información compleja en oportunidades de crecimiento medibles 
              y sostenibles.
            </p>
          </div>
          
          {/* Right Column - 40% */}
          <div className="lg:col-span-2 relative">
            <img 
              src={professionalImage} 
              alt="Profesional trabajando con IA" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
            
            {/* Floating Stats */}
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground p-4 rounded-lg shadow-lg">
              <div className="text-2xl font-bold">80%</div>
              <div className="text-sm">más eficiencia</div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-success text-success-foreground p-4 rounded-lg shadow-lg">
              <div className="text-2xl font-bold">70%</div>
              <div className="text-sm">mejor ROI</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;