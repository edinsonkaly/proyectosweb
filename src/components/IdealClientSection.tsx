import { Check, X } from "lucide-react";

const IdealClientSection = () => {
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
    <section id="ideal-client" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-electric-blue mb-4">
            ¿Esto es para ti?
          </h2>
          <p className="text-xl text-dark-gray-text mb-12">
            Descubre si nuestras soluciones son perfectas para tu negocio
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Es para ti */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-digital-purple/20">
              <h3 className="text-2xl font-bold text-digital-purple mb-6 flex items-center">
                <Check className="h-6 w-6 mr-3" />
                Es perfecto para ti si:
              </h3>
              <ul className="space-y-4 text-left">
                {idealProfile.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-digital-purple mt-0.5 flex-shrink-0" />
                    <span className="text-dark-gray-text">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* No es para ti */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-warning-red/20">
              <h3 className="text-2xl font-bold text-warning-red mb-6 flex items-center">
                <X className="h-6 w-6 mr-3" />
                No es para ti si:
              </h3>
              <ul className="space-y-4 text-left">
                {notFor.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <X className="h-5 w-5 text-warning-red mt-0.5 flex-shrink-0" />
                    <span className="text-dark-gray-text">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12">
            <div className="mt-12 bg-gradient-to-r from-digital-purple to-tech-cyan p-1 rounded-lg inline-block">
              <div className="bg-white px-8 py-4 rounded-md">
                <p className="text-lg font-semibold text-dark-gray-text">
                  Si te identificas con los puntos positivos, 
                  <span className="text-digital-purple"> ¡estás en el lugar correcto!</span>
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