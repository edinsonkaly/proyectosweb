import { useState } from "react";

const TechnologiesSection = () => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const technologies = [
    { name: "OpenAI", category: "IA" },
    { name: "Zapier", category: "Automatización" },
    { name: "n8n", category: "Automatización" },
    { name: "Make", category: "Automatización" },
    { name: "Evolution API", category: "WhatsApp" },
    { name: "Gemini", category: "IA Google" },
    { name: "Zoho", category: "CRM" },
    { name: "Supabase", category: "Base de datos" },
    { name: "Airtable", category: "Gestión" },
    { name: "Qdrant", category: "IA Vectorial" },
    { name: "PostgreSQL", category: "Base de datos" },
    { name: "HubSpot", category: "Marketing" },
    { name: "Mautic", category: "Email Marketing" },
    { name: "Cal.com", category: "Agendamiento" },
    { name: "Notion", category: "Productividad" },
    { name: "WhatsApp API", category: "Mensajería" }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "IA": "from-purple via-purple-500 to-purple-600",
      "Automatización": "from-success via-green-500 to-green-600", 
      "WhatsApp": "from-green-500 via-green-600 to-green-700",
      "IA Google": "from-blue-500 via-blue-600 to-blue-700",
      "CRM": "from-orange-500 via-accent to-orange-600",
      "Base de datos": "from-slate-500 via-slate-600 to-slate-700",
      "Gestión": "from-yellow-500 via-yellow-600 to-yellow-700",
      "IA Vectorial": "from-indigo-500 via-indigo-600 to-indigo-700",
      "Marketing": "from-pink-500 via-pink-600 to-pink-700",
      "Email Marketing": "from-red-500 via-red-600 to-red-700",
      "Agendamiento": "from-cyan-500 via-cyan-600 to-cyan-700",
      "Productividad": "from-emerald-500 via-emerald-600 to-emerald-700",
      "Mensajería": "from-green-600 via-green-700 to-green-800"
    };
    return colors[category as keyof typeof colors] || "from-gray-500 via-gray-600 to-gray-700";
  };

  return (
    <section id="technologies" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              🛠️ Tecnologías que dominamos
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Integramos las mejores herramientas del mercado para crear soluciones 
              automatizadas que realmente funcionen para tu negocio.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-12">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className={`
                  relative p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer
                  ${hoveredTech === tech.name
                    ? `bg-gradient-to-br ${getCategoryColor(tech.category)} text-white border-transparent shadow-xl scale-105`
                    : 'bg-card border-border hover:border-accent/50'
                  }
                `}
                onMouseEnter={() => setHoveredTech(tech.name)}
                onMouseLeave={() => setHoveredTech(null)}
              >
                <div className="text-center">
                  <h3 className={`font-bold text-lg mb-2 transition-colors ${
                    hoveredTech === tech.name ? 'text-white' : 'text-foreground'
                  }`}>
                    {tech.name}
                  </h3>
                  <p className={`text-sm transition-colors ${
                    hoveredTech === tech.name ? 'text-white/80' : 'text-muted-foreground'
                  }`}>
                    {tech.category}
                  </p>
                </div>
                
                {/* Glow effect when hovered */}
                {hoveredTech === tech.name && (
                  <div className="absolute inset-0 rounded-xl blur-xl opacity-30 bg-gradient-to-br from-white to-transparent"></div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-r from-accent via-success to-purple p-1 rounded-xl inline-block">
              <div className="bg-background px-8 py-6 rounded-xl">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  🎯 ¿Por qué usamos estas tecnologías?
                </h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Cada herramienta está cuidadosamente seleccionada para crear un ecosistema 
                  completo que automatice todos los aspectos de tu negocio digital.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;