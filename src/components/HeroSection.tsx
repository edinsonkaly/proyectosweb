// --- START OF FILE HeroSection.tsx ---

import { useState, useCallback, useEffect, useMemo, useRef } from "react";
import { motion } from 'framer-motion';
import { useAnalytics } from "@/context/AnalyticsContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { User, Mail, Phone, Check } from "lucide-react";
import { Label } from "@/components/ui/label";
import heroBg from "@/assets/fondo-hero.png";

const countryCodes = [
  { code: '+51', name: 'Perú', flag: '🇵🇪' },
  { code: '+1', name: 'EE.UU.', flag: '🇺🇸' },
  { code: '+52', name: 'México', flag: '🇲🇽' },
  { code: '+54', name: 'Argentina', flag: '🇦🇷' },
  { code: '+56', name: 'Chile', flag: '🇨🇱' },
  { code: '+57', name: 'Colombia', flag: '🇨🇴' },
  { code: '+58', name: 'Venezuela', flag: '🇻🇪' },
  { code: '+591', name: 'Bolivia', flag: '🇧🇴' },
  { code: '+593', name: 'Ecuador', flag: '🇪🇨' },
  { code: '+595', name: 'Paraguay', flag: '🇵🇾' },
  { code: '+598', name: 'Uruguay', flag: '🇺🇾' },
  { code: '+34', name: 'España', flag: '🇪🇸' },
];
import ScrollIndicator from "./ScrollIndicator";
import Particles from "@tsparticles/react";
import type { Engine, ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { useSlideInAnimation, useFadeInOnScroll, DiagonalRays, GranularBackground } from '@/utils/techNoirAnimations';
import { ScanLine } from '@/components/ui/ScanLine'; // IMPORTAMOS EL COMPONENTE MEJORADO

// --- Hook personalizado para detectar el tamaño de la pantalla ---
const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Se ejecuta solo en el cliente para evitar errores en SSR
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);
    listener(); // Establece el valor inicial
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [query]);

  return matches;
};

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "+51",
    privacyPolicy: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { visitorId, trackClickEvent } = useAnalytics();
  
  const isDesktop = useMediaQuery('(min-width: 768px)');

  const backgroundStyles = useMemo(() => {
    const desktopStyles = {
      backgroundImage: `url(${heroBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      zIndex: 0,
    };
    
    const mobileStyles = {
      backgroundImage: `url(${heroBg})`,
      backgroundSize: '300%',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      zIndex: 0,
    };

    return isDesktop ? desktopStyles : mobileStyles;
  }, [isDesktop]);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particleOptions: ISourceOptions = {
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: ["#7E3FF2", "#01F9C6"],
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.1,
        width: 1,
      },
      move: {
        direction: "none" as const,
        enable: true,
        outModes: {
          default: "bounce" as const,
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      toast({ title: "Error", description: "Por favor completa todos los campos", variant: "destructive" });
      return;
    }
    
    if (!formData.privacyPolicy) {
      toast({ title: "Error", description: "Debes aceptar las políticas de privacidad para continuar", variant: "destructive" });
      return;
    }
    
    trackClickEvent({
      eventName: 'Submit Formulario Hero',
      targetId: 'form-hero'
    });
    
    const phoneWithCountryCode = `${formData.countryCode} ${formData.phone}`;
    
    setIsLoading(true);
    try {
      await fetch(import.meta.env.VITE_APP_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "no-cors",
        body: JSON.stringify({ 
          visitor_id: visitorId,
          ...formData, 
          phone: phoneWithCountryCode,
          timestamp: new Date().toISOString(), 
          source: "landing_page_hero" 
        }),
      });
      toast({ 
        title: "¡Enviado correctamente!", 
        description: "Te contactaremos pronto para tu asesoría gratuita.",
        className: "bg-white text-gray-900 border border-digital-purple/50 shadow-lg rounded-lg"
      });
      setFormData({ 
        name: "", 
        email: "", 
        phone: "", 
        countryCode: "+51",
        privacyPolicy: false 
      });
    } catch (error) {
      console.error("Error:", error);
      toast({ 
        title: "Error", 
        description: "Hubo un problema al enviar el formulario. Inténtalo de nuevo.", 
        variant: "destructive",
        className: "border border-red-300 shadow-lg rounded-lg"
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Animaciones de entrada para elementos del hero
  const titleAnimation = useSlideInAnimation('left', 0);
  const subtitleAnimation = useSlideInAnimation('left', 200);
  const benefitsAnimation = useSlideInAnimation('left', 400);
  const contrastAnimation = useSlideInAnimation('left', 600);
  const formBottomAnimation = useFadeInOnScroll(800);

  return (
    <section 
      id="hero" 
      className="relative min-h-[calc(100vh+80px)] md:min-h-screen flex items-center justify-center pt-32 md:pt-40 text-white pb-20 md:pb-0 overflow-hidden"
    >
      {/* --- SECCIÓN DE FONDOS REFACTORIZADA CON EFECTOS TECH-NOIR --- */}
      
      {/* Capa 1: Imagen de Fondo (con estilos dinámicos) */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={backgroundStyles}
      />

      {/* Capa 2: Rayos diagonales (decoración estática) */}
      <DiagonalRays direction="right" intensity="medium" color="#01F9C6" />
      
      {/* Capa 3: Fondo granulado con líneas */}
      <GranularBackground orientation="vertical" opacity={0.05} />

      {/* Capa 4: Gradiente Superpuesto */}
      <div 
        className="absolute inset-0 z-[1]"
        style={{
          background: 'linear-gradient(0deg, rgba(10, 31, 102, 0.85), rgba(10, 31, 102, 0.85))'
        }}
      />

      {/* Capa 5: Efecto holográfico sutil */}
      <div className="absolute inset-0 z-[1] holographic opacity-30" />

      {/* --- NUEVA CAPA PARA LAS LÍNEAS DE ESCANEO DIAGONALES --- */}
      {/* Se ubica en z-[2], detrás del contenido (z-[3]) y las partículas */}
      <div className="absolute inset-0 z-[2] pointer-events-none">
        <ScanLine 
          direction="top-left" 
          color="rgba(1, 249, 198, 0.3)" 
          speed={5} 
          trailWidth="200px" // Haz la estela más ancha
        />
        <ScanLine 
          direction="top-right" 
          color="rgba(126, 63, 242, 0.3)"           
          speed={5} 

        />
      </div>
      
      {/* Capa 6: Partículas */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particleOptions}
        className="absolute inset-0 z-[2]"
      />
      
      {/* Capa 7: Líneas de circuito animadas */}
      <div className="absolute inset-0 z-[2] circuit-lines opacity-10" />
      
      {/* Contenido Principal */}
      <div className="relative z-[3] w-full px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-items-center">
          {/* Columna Izquierda - Texto */}
          <div className="w-full max-w-2xl mx-auto space-y-8 text-center md:text-center lg:text-left px-4">
            <div ref={titleAnimation.ref} style={titleAnimation.style}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white leading-tight [text-shadow:_0_2px_10px_rgba(0,0,0,0.9)] neon-glow">
                Soluciones que venden por ti
                <span className="block text-digital-purple [text-shadow:_0_2px_10px_rgba(0,0,0,0.9)] tech-glitch-low" data-text="mientras tú vives">mientras tú vives</span>
              </h1>
            </div>
            
            <div ref={benefitsAnimation.ref} style={benefitsAnimation.style} className="space-y-3 text-lg md:text-xl text-light-gray-text leading-relaxed max-w-xl">
              <p className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full border-2 border-[#01F9C6] mr-3 mt-0.5">
                  <Check className="w-4 h-4 text-[#01F9C6]" />
                </span>
                <span>Tu negocio y tus ventas en piloto automático.</span>
              </p>
              <p className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full border-2 border-[#01F9C6] mr-3 mt-0.5">
                  <Check className="w-4 h-4 text-[#01F9C6]" />
                </span>
                <span>Automatizamos tu comunicación, atención y captación de clientes con IA.</span>
              </p>
              <p className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full border-2 border-[#01F9C6] mr-3 mt-0.5">
                  <Check className="w-4 h-4 text-[#01F9C6]" />
                </span>
                <span>Implementamos estrategias de marketing digital que te permiten crecer.</span>
              </p>
            </div>

            <div ref={contrastAnimation.ref} style={contrastAnimation.style} className="space-y-3 text-sm md:text-base data-stream">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
                <span className="text-warning-red line-through">Antes: 8 horas al día en redes</span>
                <span className="text-tech-cyan font-semibold">→ Ahora: 99.9% automático</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
                <span className="text-warning-red line-through">Antes: Perder clientes por no responder</span>
                <span className="text-tech-cyan font-semibold">→ Ahora: Respuesta instantánea 24/7</span>
              </div>
            </div>
          </div>

          {/* Columna Derecha - Formulario */}
          <div className="w-full flex justify-center">
            <div>
              <div className="bg-[#0A1F66] p-8 rounded-2xl w-full max-w-md relative z-10"
                   style={{
                     boxShadow: '0 10px 30px -5px rgba(126, 63, 242, 0.4)'
                   }}>
                <h3 className="text-2xl font-bold text-white mb-6 text-center relative z-10">
                  🚀 Consulta Gratuita
                </h3>
                <p className="text-white/80 text-center mb-6 relative z-10">
                  Descubre cómo automatizar tu negocio en 30 minutos
                </p>
                
                <form id="form-hero" onSubmit={handleSubmit} className="space-y-4 relative z-10">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-[#666]" />
                  </div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Nombre completo"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="pl-10 bg-white/10 border-digital-purple/50 h-12 text-white placeholder:text-gray-400"
                    required
                  />
                </div>
                
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-[#666]" />
                  </div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Correo electrónico"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="pl-10 bg-white/10 border-digital-purple/50 h-12 text-white placeholder:text-gray-400"
                    required
                  />
                </div>
                
                <div className="flex space-x-2">
                  <div className="w-32">
                    <Select 
                      value={formData.countryCode}
                      onValueChange={(value) => setFormData(prev => ({ ...prev, countryCode: value }))}
                    >
                      <SelectTrigger className="w-full bg-white/10 border-digital-purple/50 h-12 text-white focus:ring-2 focus:ring-[#7E3FF2] focus:ring-offset-0">
                        <SelectValue>
                          <span className="flex items-center">
                            <span className="w-12 text-left">{formData.countryCode}</span>
                          </span>
                        </SelectValue>
                      </SelectTrigger>
                      <SelectContent className="max-h-60 bg-[#0A1F66] border-digital-purple/50 text-white">
                        {countryCodes.map((country) => (
                          <SelectItem key={country.code} value={country.code}>
                            {country.flag} {country.name} ({country.code})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="relative flex-1">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-[#666]" />
                    </div>
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="Número de celular"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="pl-10 bg-white/10 border-digital-purple/50 h-12 text-white placeholder:text-gray-400"
                      required
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Checkbox 
                    id="privacy-policy"
                    checked={formData.privacyPolicy}
                    onCheckedChange={(checked) => setFormData(prev => ({ ...prev, privacyPolicy: checked as boolean }))}
                    className="h-4 w-4 border-digital-purple/80 data-[state=checked]:bg-digital-purple mt-0.5 flex-shrink-0"
                  />
                  <Label htmlFor="privacy-policy" className="text-sm text-white">
                    Acepto las <a href="#" className="text-[#7E3FF2] font-bold hover:underline">Políticas de Privacidad</a> y el tratamiento de mis datos personales.
                  </Label>
                </div>
                
                  <Button 
                    type="submit"
                    disabled={isLoading}
                    className="w-full font-bold bg-gradient-to-r from-[#7E3FF2] to-[#01F9C6] hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] transition-all duration-300 py-6 text-base uppercase neon-glow hover:scale-105"
                  >
                    {isLoading ? 'Enviando...' : 'Solicitar Asesoría Gratuita'}
                  </Button>
                </form>
              </div>
              
              <div ref={formBottomAnimation.ref} style={formBottomAnimation.style} className="mt-6 text-center">
                <div className="flex items-center justify-center space-x-2 text-tech-cyan/60 text-sm">
                  <div className="w-8 h-px bg-gradient-to-r from-transparent to-tech-cyan/40"></div>
                  <span className="px-2 opacity-70">Respuesta en menos de 24 horas</span>
                  <div className="w-8 h-px bg-gradient-to-l from-transparent to-tech-cyan/40"></div>
                </div>
                <div className="mt-2 flex justify-center space-x-1">
                  <div className="w-2 h-2 rounded-full bg-tech-cyan/30 animate-pulse"></div>
                  <div className="w-2 h-2 rounded-full bg-tech-cyan/30 animate-pulse" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-2 h-2 rounded-full bg-tech-cyan/30 animate-pulse" style={{animationDelay: '0.4s'}}></div>
                </div>
              </div>
            </div>
          </div>
          <ScrollIndicator targetId="#features" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;