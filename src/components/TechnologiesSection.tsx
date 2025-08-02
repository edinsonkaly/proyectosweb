

const technologies = [
  { name: "OpenAI", logo: "/logos/openai.svg" },
  { name: "Zapier", logo: "/logos/zapier.svg" },
  { name: "n8n", logo: "/logos/n8n.svg" },
  { name: "Make", logo: "/logos/make.svg" },
  { name: "Evolution API", logo: "/logos/evolution-api.svg" },
  { name: "Gemini", logo: "/logos/gemini.svg" },
  { name: "Zoho", logo: "/logos/zoho.svg" },
  { name: "Supabase", logo: "/logos/supabase.svg" },
  { name: "Airtable", logo: "/logos/airtable.svg" },
  { name: "Qdrant", logo: "/logos/qdrant.svg" },
  { name: "PostgreSQL", logo: "/logos/postgresql.svg" },
  { name: "HubSpot", logo: "/logos/hubspot.svg" },
  { name: "Mautic", logo: "/logos/mautic.svg" },
  { name: "Cal.com", logo: "/logos/calcom.svg" },
  { name: "Notion", logo: "/logos/notion.svg" },
  { name: "WhatsApp API", logo: "/logos/whatsapp.svg" },
];

const TechnologiesSection = () => {
  return (
    <section id="technologies" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-electric-blue mb-4">
            Tecnologías que Dominamos
          </h2>
          <p className="text-xl text-dark-gray-text max-w-3xl mx-auto">
            Integramos las mejores herramientas del mercado para crear soluciones 
            automatizadas que realmente funcionen para tu negocio.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-center">
          {technologies.map((tech) => (
            <div 
              key={tech.name} 
              className="p-4 flex justify-center items-center group"
            >
              <img 
                src={tech.logo} 
                alt={tech.name} 
                className="h-10 w-auto object-contain transition-all duration-300 filter grayscale group-hover:grayscale-0 group-hover:scale-110"
                title={tech.name}
              />
            </div>
          ))}
        </div>
        <div className="mt-20 text-center">
          <div className="inline-block p-1 bg-gradient-to-r from-digital-purple to-tech-cyan rounded-2xl">
            <div className="bg-white px-8 py-6 rounded-xl">
              <h3 className="text-2xl font-heading font-bold text-electric-blue mb-4">
                ¿Por qué estas tecnologías?
              </h3>
              <p className="text-lg text-dark-gray-text max-w-2xl mx-auto">
                Cada herramienta está cuidadosamente seleccionada para crear un ecosistema 
                completo que automatice todos los aspectos de tu negocio digital.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;