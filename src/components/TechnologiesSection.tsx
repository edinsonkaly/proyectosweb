// TechnologiesSection.tsx (LA VERSIÓN ORIGINAL Y CORRECTA)

import React, { useState, useRef, useEffect } from 'react';
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
import hestiaLogo from '../assets/logos/hestia.svg';
import calcomLogo from '../assets/logos/calcom.svg';
import notionLogo from '../assets/logos/notion.svg';
import whatsappLogo from '../assets/logos/whatsapp.svg';
import typeformLogo from '../assets/logos/typeform.svg';
import flowiseLogo from '../assets/logos/flowise.svg';
import chatwootlogo from '../assets/logos/chatwoot.svg';
import twiliologo from '../assets/logos/twilio.svg';

const technologies = [
  { name: "OpenAI", logo: openaiLogo },
  { name: "Zapier", logo: zapierLogo, style: { transform: 'scale(1.9)', transformOrigin: 'center', maxHeight: '60px' } },
  { name: "n8n", logo: n8nLogo },
  { name: "Make", logo: makeLogo, style: { transform: 'scale(1.9)', transformOrigin: 'center', maxHeight: '60px' } },
  { name: "Evolution API", logo: evolutionApiLogo },
  { name: "Gemini", logo: geminiLogo },
  { name: "Zoho", logo: zohoLogo },
  { name: "Supabase", logo: supabaseLogo, style: { transform: 'scale(1.9)', transformOrigin: 'center', maxHeight: '60px' } },
  { name: "Airtable", logo: airtableLogo },
  { name: "Qdrant", logo: qdrantLogo },
  { name: "PostgreSQL", logo: postgresqlLogo, style: { transform: 'scale(1.9)', transformOrigin: 'center', maxHeight: '60px' } },
  { name: "HubSpot", logo: hubspotLogo },
  { name: "Mautic", logo: mauticLogo },
  { name: "Hestia", logo: hestiaLogo },
  { name: "Cal.com", logo: calcomLogo },
  { name: "Notion", logo: notionLogo },
  { name: "WhatsApp API", logo: whatsappLogo },
  { name: "Typeform", logo: typeformLogo },
  { name: "Flowise", logo: flowiseLogo, style: { transform: 'scale(1.9)', transformOrigin: 'center', maxHeight: '60px' } },
  { name: "Chatwoot", logo: chatwootlogo },
  { name: "Twilio", logo: twiliologo },
];

interface TechItem {
  name: string;
  logo: string;
  logoClass?: string;
  style?: React.CSSProperties;
}

const TechCarousel = ({ items, reverse = false }: { items: TechItem[], reverse?: boolean }) => {
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="tech-carousel-container relative w-full py-4 select-none">
      {/* Scanning line effect */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="tech-scan-line"></div>
      </div>
      
      <div
        className={`
          flex w-fit space-x-8 whitespace-nowrap
          ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}
        `}
        style={{
          animationPlayState: isPaused ? 'paused' : 'running',
          animationDuration: '15s',
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite',
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {[...items, ...items].map((tech, index) => (
          <div
            key={`${tech.name}-${index}`}
            className="group/item inline-flex flex-col items-center justify-center px-4 transition-all duration-500 cursor-default tech-logo-container"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Tech name with glitch effect - Now above the logo */}
            <span 
              className="
                mb-2 text-xs font-mono font-semibold text-[#0A1F66] opacity-0 
                transition-all duration-500 ease-out pointer-events-none
                group-hover/item:opacity-100 group-hover/item:text-[#01F9C6]
                tech-glitch-text relative text-center whitespace-nowrap
              "
              style={{
                textShadow: hoveredIndex === index ? '0 0 10px #01F9C6' : 'none'
              }}
            >
              {tech.name}
              {/* Glitch overlay */}
              <span className="tech-glitch-overlay absolute inset-0 opacity-0 group-hover/item:opacity-100">
                {tech.name}
              </span>
            </span>

            {/* Holographic container */}
            <div className="relative h-16 w-24 flex items-center justify-center p-2">
              {/* Background glow effect */}
              <div className="absolute inset-0 tech-logo-bg opacity-0 group-hover/item:opacity-100 transition-opacity duration-500"></div>
              
              {/* Hexagonal border */}
              <div className="absolute inset-0 tech-hexagon opacity-0 group-hover/item:opacity-100 transition-all duration-500"></div>
              
              {/* Logo */}
              <img
                src={tech.logo}
                alt={tech.name}
                className="
                  relative z-10 max-h-12 max-w-full object-contain filter grayscale
                  transition-all duration-500 ease-out
                  group-hover/item:grayscale-0 group-hover/item:scale-110
                  group-hover/item:brightness-110 group-hover/item:contrast-110
                "
                title={tech.name}
                style={{
                  width: 'auto',
                  height: 'auto',
                  maxHeight: '48px',
                  maxWidth: '90px',
                  filter: hoveredIndex === index ? 'grayscale(0) drop-shadow(0 0 8px #01F9C6)' : undefined,
                  ...tech.style
                }}
                draggable={false}
              />
              
              {/* Data stream effect */}
              <div className="absolute inset-0 tech-data-stream opacity-0 group-hover/item:opacity-100"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const TechnologiesSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const firstRow = technologies.slice(0, Math.ceil(technologies.length / 2));
  const secondRow = technologies.slice(Math.ceil(technologies.length / 2));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative" ref={sectionRef}>
      <div id="technologies" className="absolute -top-24"></div>
      
      {/* Matrix background effect */}
      <div className="tech-matrix-bg absolute inset-0 opacity-10"></div>
      
      <section
        className={`
          pt-20 pb-20 bg-white overflow-hidden relative
          transition-all duration-1000 ease-out
          ${isVisible ? 'tech-section-visible' : 'tech-section-hidden'}
        `}
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(126, 63, 242, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(1, 249, 198, 0.08) 0%, transparent 50%),
            linear-gradient(135deg, transparent 0%, rgba(10, 31, 102, 0.02) 50%, transparent 100%),
            radial-gradient(#E5E7EB 1px, transparent 1px)
          `,
          backgroundSize: '800px 800px, 600px 600px, 100% 100%, 24px 24px',
          backgroundPosition: '0% 0%, 100% 100%, 0% 0%, 0% 0%'
        }}
      >
        {/* Animated grid overlay */}
        <div className="tech-grid-overlay absolute inset-0 opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12">
            {/* Title with cyberpunk effect */}
            <div className="relative inline-block mb-4">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#0A1F66] mb-4 select-text relative tech-title">
                Tecnologías que Dominamos
                {/* Scanning line over title */}
                <div className="tech-title-scan absolute inset-0"></div>
              </h2>
              
              {/* Corner brackets */}
              <div className="tech-corner-brackets absolute -inset-4 pointer-events-none">
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#7E3FF2]"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#7E3FF2]"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#01F9C6]"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#01F9C6]"></div>
              </div>
            </div>
            
            <p className="text-xl text-[#0A1F66]/80 max-w-3xl mx-auto select-text tech-subtitle">
              Integramos las mejores herramientas del mercado para crear soluciones 
              automatizadas que realmente funcionen para tu negocio.
            </p>
          </div>

          {/* Carousels with enhanced spacing */}
          <div className="space-y-12 select-none">
            <TechCarousel items={firstRow} />
            <TechCarousel items={secondRow} reverse />
          </div>

          {/* Enhanced call-to-action with holographic effect */}
          <div className="mt-20 text-center">
            <div className="relative inline-block">
              {/* Holographic background */}
              <div className="tech-holographic-bg absolute -inset-2 rounded-3xl"></div>
              
              <div className="relative bg-white/95 backdrop-blur-sm px-12 py-8 rounded-2xl border border-[#7E3FF2]/20 tech-cta-container">
                <h3 className="text-2xl font-heading font-bold text-[#0A1F66] mb-4 select-text">
                  ¿Por qué estas tecnologías?
                </h3>
                <p className="text-lg text-[#0A1F66]/80 max-w-2xl mx-auto select-text">
                  Cada herramienta está cuidadosamente seleccionada para crear un ecosistema 
                  completo que automatice todos los aspectos de tu negocio digital.
                </p>
                
                {/* Data visualization bars */}
                <div className="flex justify-center mt-6 space-x-2 h-[40px] items-end">
                  {[...Array(8)].map((_, i) => (
                    <div 
                      key={i}
                      className="tech-data-bar"
                      style={{
                        '--i': i,
                      } as React.CSSProperties}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechnologiesSection;