import { useEffect } from 'react';
import React from 'react';
import openaiLogo from '../assets/logos/openai.svg';
import zapierLogo from '../assets/logos/zapier.svg';
import n8nLogo from '../assets/logos/n8n.svg';
import makeLogo from '../assets/logos/make.svg';
import evolutionApiLogo from '../assets/logos/evolution-api.svg';
import geminiLogo from '../assets/logos/Google-Gemini.svg';
import zohoLogo from '../assets/logos/zoho.svg';
import supabaseLogo from '../assets/logos/supabase.svg';
import airtableLogo from '../assets/logos/airtable.svg';
import qdrantLogo from '../assets/logos/qdrant.svg';
import postgresqlLogo from '../assets/logos/postgresql.svg';
import hubspotLogo from '../assets/logos/hubspot.svg';
import mauticLogo from '../assets/logos/mautic.svg';
import calcomLogo from '../assets/logos/calcom.svg';
import notionLogo from '../assets/logos/notion.svg';
import whatsappLogo from '../assets/logos/whatsapp.svg';
import typeformLogo from '../assets/logos/typeform.svg';
import flowiseLogo from '../assets/logos/flowise.svg';
import chatwootlogo from '../assets/logos/chatwoot.svg';
import twiliologo from '../assets/logos/twilio.svg';

const technologies = [
  { name: "OpenAI", logo: openaiLogo },
  { 
    name: "Zapier", 
    logo: zapierLogo,
    style: { 
      transform: 'scale(1.9)',
      transformOrigin: 'center',
      maxHeight: '60px'
    }
  },
  { name: "n8n", logo: n8nLogo },
  { 
    name: "Make", 
    logo: makeLogo,
    style: { 
      transform: 'scale(1.9)',
      transformOrigin: 'center',
      maxHeight: '60px'
    }
  },
  { name: "Evolution API", logo: evolutionApiLogo },
  { name: "Gemini", logo: geminiLogo },
  { name: "Zoho", logo: zohoLogo },
  { 
    name: "Supabase", 
    logo: supabaseLogo,
    style: { 
      transform: 'scale(1.9)',
      transformOrigin: 'center',
      maxHeight: '60px' // Ajusta este valor según sea necesario
    }
  },
  { name: "Airtable", logo: airtableLogo },
  { name: "Qdrant", logo: qdrantLogo },
  { 
    name: "PostgreSQL", 
    logo: postgresqlLogo,
    style: { 
      transform: 'scale(1.9)',
      transformOrigin: 'center',
      maxHeight: '60px'
    }
  },
  { name: "HubSpot", logo: hubspotLogo },
  { name: "Mautic", logo: mauticLogo },
  { name: "Cal.com", logo: calcomLogo },
  { name: "Notion", logo: notionLogo },
  { name: "WhatsApp API", logo: whatsappLogo },
  { name: "Typeform", logo: typeformLogo },
  { 
    name: "Flowise", 
    logo: flowiseLogo,
    style: { 
      transform: 'scale(1.9)',
      transformOrigin: 'center',
      maxHeight: '60px'
    }
  },
  { name: "Chatwoot", logo: chatwootlogo },
  { name: "Twilio", logo: twiliologo },
];

// Definir el tipo para los items del carrusel
interface TechItem {
  name: string;
  logo: string;
  logoClass?: string;
}

// Componente para la fila del carrusel
const TechCarousel = ({ items, reverse = false }: { items: TechItem[], reverse?: boolean }) => {
  return (
    <div className="relative w-full overflow-hidden py-4">
      <div className={`flex space-x-8 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'} whitespace-nowrap`}>
        {[...items, ...items].map((tech, index) => (
          <div key={`${tech.name}-${index}`} className="inline-flex items-center justify-center px-6 group">
            <div className="h-16 w-32 flex items-center justify-center p-2">
              <img 
                src={tech.logo} 
                alt={tech.name}
                className={`max-h-12 max-w-full object-contain transition-all duration-300 filter grayscale group-hover:grayscale-0 group-hover:scale-105 ${tech.logoClass || ''}`}
                title={tech.name}
                style={{ 
                  width: 'auto',
                  height: 'auto',
                  maxHeight: '48px',
                  maxWidth: '120px',
                  ...tech.style
                }}
              />
            </div>
            <span className="ml-2 text-sm font-medium text-gray-600 hidden group-hover:inline-block">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const TechnologiesSection: React.FC = () => {
  // Efecto para agregar los estilos del carrusel
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      @keyframes marquee-reverse {
        0% { transform: translateX(-50%); }
        100% { transform: translateX(0); }
      }
      .animate-marquee {
        animation: marquee 30s linear infinite;
        display: inline-block;
      }
      .animate-marquee-reverse {
        animation: marquee-reverse 30s linear infinite;
        display: inline-block;
      }
      .animate-marquee:hover, .animate-marquee-reverse:hover {
        animation-play-state: paused;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Dividir las tecnologías en dos grupos para las filas
  const firstRow = technologies.slice(0, Math.ceil(technologies.length / 2));
  const secondRow = technologies.slice(Math.ceil(technologies.length / 2));

  return (
    <div className="relative">
      <div id="technologies" className="absolute -top-24"></div>
      <section 
        className="pt-32 pb-16 bg-white overflow-hidden"
        style={{
          backgroundImage: 'radial-gradient(#E5E7EB 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-electric-blue mb-4">
              Tecnologías que Dominamos
            </h2>
            <p className="text-xl text-dark-gray-text max-w-3xl mx-auto">
              Integramos las mejores herramientas del mercado para crear soluciones 
              automatizadas que realmente funcionen para tu negocio.
            </p>
          </div>
          
          <div className="space-y-8">
            {/* Primera fila: izquierda a derecha */}
            <TechCarousel items={firstRow} />
            
            {/* Segunda fila: derecha a izquierda */}
            <TechCarousel items={secondRow} reverse />
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
    </div>
  );
};

export default TechnologiesSection;