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
    <section id="ideal-client" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            ¿Esto es para ti?
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Descubre si nuestras soluciones son perfectas para tu negocio
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Es para ti */}
            <div className="bg-card p-8 rounded-xl shadow-lg border-2 border-success">
              <h3 className="text-2xl font-bold text-success mb-6 flex items-center">
                <Check className="h-6 w-6 mr-3" />
                ✅ Es perfecto para ti si:
              </h3>
              <ul className="space-y-4 text-left">
                {idealProfile.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* No es para ti */}
            <div className="bg-card p-8 rounded-xl shadow-lg border-2 border-red-500">
              <h3 className="text-2xl font-bold text-red-500 mb-6 flex items-center">
                <X className="h-6 w-6 mr-3" />
                ❌ No es para ti si:
              </h3>
              <ul className="space-y-4 text-left">
                {notFor.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <X className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12">
            <div className="bg-gradient-to-r from-success via-accent to-purple p-1 rounded-lg inline-block">
              <div className="bg-background px-8 py-4 rounded-lg">
                <p className="text-lg font-semibold text-foreground">
                  Si te identificas con los puntos verdes, 
                  <span className="text-accent"> ¡estás en el lugar correcto!</span>
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