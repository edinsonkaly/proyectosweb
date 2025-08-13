import { useState, useEffect } from 'react';
import { useAnalytics } from '@/context/AnalyticsContext';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Linkedin, Instagram, Facebook, MessageCircle } from 'lucide-react';
import logo from "@/assets/intelibrander_logo_white.svg";
import { useSlideInAnimation } from '@/utils/techNoirAnimations';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [shouldHideSecondaryNav, setShouldHideSecondaryNav] = useState(false);
  
  // Animaciones Tech-Noir para el header
  const logoAnimation = useSlideInAnimation('left', 0);
  const navAnimation = useSlideInAnimation('right', 200);
  const socialAnimation = useSlideInAnimation('right', 400);
  // Normalizar la ruta para manejar con/sin barra final
  const normalizedPath = location.pathname.replace(/\/$/, '');
  const isSecondaryPage = [
    '/acerca-de-intellibrander', 
    '/politica-de-cookies',
    '/politica-de-privacidad'
  ].some(path => normalizedPath === path.replace(/\/$/, ''));
  const { trackClickEvent } = useAnalytics();

  useEffect(() => {
    // Ocultar la navegación secundaria en páginas secundarias
    if (isSecondaryPage) {
      const timer = setTimeout(() => {
        setShouldHideSecondaryNav(true);
      }, 50); // Pequeño retraso para asegurar que la página se ha renderizado
      
      return () => clearTimeout(timer);
    } else {
      setShouldHideSecondaryNav(false);
    }
  }, [isSecondaryPage, location.pathname]);

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      // Pequeño retraso para asegurar que la navegación ha ocurrido
      setTimeout(() => {
        const contactSection = document.getElementById('contacto');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const contactSection = document.getElementById('contacto');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled ? 'scrolled' : ''}`}>
      <div className="container mx-auto px-4">
        {/* Main Navigation */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer"
            onClick={(e) => {
              if (location.pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              } else {
                navigate('/');
              }
            }}
          >
            <img 
              src={logo} 
              alt="Intellibrander Logo" 
              className="h-8 w-auto"
              onClick={(e) => {
                e.stopPropagation();
                if (location.pathname === '/') {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                  navigate('/');
                }
              }}
            />
            <span 
              className="text-xl font-bold text-white hover:text-digital-purple transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                if (location.pathname === '/') {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                  navigate('/');
                }
              }}
            >
              Intellibrander
            </span>
          </div>

          {/* Desktop Main Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="/" 
              onClick={(e) => {
                if (location.pathname === '/') {
                  e.preventDefault();
                  scrollToSection('hero');
                }
                // Si no está en la página principal, el comportamiento por defecto del enlace navegará a la página principal
              }}
              className="text-white hover:text-digital-purple transition-colors"
            >
              Inicio
            </a>
            <a
              id="btn-nav-acerca-de-header" 
              href="/acerca-de-intellibrander" 
              className="text-white hover:text-digital-purple transition-colors"
              onClick={() => {
                trackClickEvent({
                  eventName: 'Click Navegación (Acerca De)', // Nombre descriptivo para tus informes
                  targetId: 'btn-nav-acerca-de-header' // El mismo ID que le asignaste
                });
              }}
            >
              Acerca De
            </a>
            <a 
              href="/#contacto"
              id="btn-consulta-gratis-header"
              onClick={(e) => {
                trackClickEvent({ 
                  eventName: 'Click Consulta Gratis (Header)', 
                  targetId: 'btn-consulta-gratis-header' 
                });
                handleContactClick(e);
              }}
              className="glowing-button bg-digital-purple text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-all inline-block"
            >
              Consulta Gratis
            </a>
          </nav>

          {/* Social Media Icons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              id="btn-social-linkedin-header" 
              href="https://linkedin.com/company/intellibrander/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-digital-purple transition-colors"
              onClick={() => {
                trackClickEvent({
                  eventName: 'Click Social (LinkedIn)', // Nombre descriptivo para tus informes
                  targetId: 'btn-social-linkedin-header' // El mismo ID que le asignaste
                });
              }}
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              id="btn-social-instagram-header" 
              href="https://www.instagram.com/intellibrander"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-digital-purple transition-colors"
              onClick={() => {
                trackClickEvent({
                  eventName: 'Click Social (Instagram)', // Nombre descriptivo para tus informes
                  targetId: 'btn-social-instagram-header' // El mismo ID que le asignaste
                });
              }}
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a 
              id="btn-social-facebook-header"
              href="https://www.facebook.com/intellibrander" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-digital-purple transition-colors"
              onClick={() => {
                trackClickEvent({
                  eventName: 'Click Social (Facebook)', // Nombre descriptivo para tus informes
                  targetId: 'btn-social-facebook-header' // El mismo ID que le asignaste
                });
              }}
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a 
              id="btn-social-whatsapp-header"
              href="https://api.whatsapp.com/send/?phone=51980187824&text=Hola%2C+acabo+de+visitar+su+p%C3%A1gina+web+y+quisiera+mas+informaci%C3%B3n&type=phone_number&app_absent=0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-digital-purple transition-colors"
              onClick={() => {
                trackClickEvent({
                  eventName: 'Click Social (WhatsApp)', // Nombre descriptivo para tus informes
                  targetId: 'btn-social-whatsapp-header' // El mismo ID que le asignaste
                });
              }}
            >
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Secondary Navigation - Page Sections */}
        <div 
          className={`hidden md:block border-t border-white/20 transition-all duration-500 overflow-hidden ${
            shouldHideSecondaryNav ? 'max-h-0 border-t-0 opacity-0' : 'max-h-20 opacity-100'
          }`}
          style={{
            transition: 'max-height 0.5s ease-in-out, opacity 0.3s ease-in-out, border 0.5s ease-in-out'
          }}
        >
          <nav className="flex items-center justify-center space-x-8 py-3">
            <button 
              onClick={() => {
                if (location.pathname !== '/') {
                  navigate('/');
                  // Pequeño retraso para asegurar que la navegación ha ocurrido
                  setTimeout(() => {
                    scrollToSection('hero');
                  }, 100);
                } else {
                  scrollToSection('hero');
                }
              }} 
              className="text-sm text-white hover:text-digital-purple transition-colors"
            >
              Inicio
            </button>
            <button onClick={() => scrollToSection('ideal-client')} className="text-sm text-white hover:text-digital-purple transition-colors">¿Es para ti?</button>
            <button onClick={() => scrollToSection('benefits')} className="text-sm text-white hover:text-digital-purple transition-colors">Beneficios</button>
            <button onClick={() => scrollToSection('methodology')} className="text-sm text-white hover:text-digital-purple transition-colors">Proceso</button>
            <button onClick={() => scrollToSection('urgency')} className="text-sm text-white hover:text-digital-purple transition-colors">¿Por qué ahora?</button>
            <button onClick={() => scrollToSection('technologies')} className="text-sm text-white hover:text-digital-purple transition-colors">Tecnologías</button>
            <button 
              onClick={() => {
                if (location.pathname !== '/') {
                  navigate('/');
                  // Pequeño retraso para asegurar que la navegación ha ocurrido
                  setTimeout(() => {
                    const contactSection = document.getElementById('contacto');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 100);
                } else {
                  const contactSection = document.getElementById('contacto');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }
              }} 
              className="text-sm text-white hover:text-digital-purple transition-colors"
            >
              Contacto
            </button>
          </nav>
        </div>

          {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-[99] bg-black/50 md:hidden" onClick={() => setIsMenuOpen(false)}>
            <div className="glowing-menu rounded-lg mx-4 my-2 relative z-[100]" onClick={e => e.stopPropagation()}>
            <nav className="bg-electric-blue rounded-lg py-4 space-y-4 px-4 relative">
              {/* Botón de cierre */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMenuOpen(false);
                }}
                className="absolute top-3 right-3 text-white hover:text-digital-purple transition-colors"
                aria-label="Cerrar menú"
              >
                <X className="h-6 w-6" />
              </button>
              <a 
                href="/" 
                onClick={(e) => {
                  if (location.pathname === '/') {
                    e.preventDefault();
                    scrollToSection('hero');
                  }
                  setIsMenuOpen(false);
                }} 
                className="block text-white hover:text-digital-purple transition-colors py-2"
              >
                Inicio
              </a>
              <a href="/acerca-de-intellibrander" onClick={() => setIsMenuOpen(false)} className="block text-white hover:text-digital-purple transition-colors py-2">Acerca De</a>
              <a href="/blog" onClick={() => setIsMenuOpen(false)} className="block text-white hover:text-digital-purple transition-colors py-2">Blog</a>
              <div className="border-t border-white/20 my-4"></div>
              <button onClick={() => scrollToSection('hero')} className="block w-full text-left text-white hover:text-digital-purple transition-colors py-1">Inicio</button>
              <button onClick={() => scrollToSection('ideal-client')} className="block w-full text-left text-white hover:text-digital-purple transition-colors py-1">¿Es para ti?</button>
              <button onClick={() => scrollToSection('benefits')} className="block w-full text-left text-white hover:text-digital-purple transition-colors py-1">Beneficios</button>
              <button onClick={() => scrollToSection('methodology')} className="block w-full text-left text-white hover:text-digital-purple transition-colors py-1">Proceso</button>
              <button onClick={() => scrollToSection('urgency')} className="block w-full text-left text-white hover:text-digital-purple transition-colors py-1">¿Por qué ahora?</button>
              <button onClick={() => scrollToSection('technologies')} className="block w-full text-left text-white hover:text-digital-purple transition-colors py-1">Tecnologías</button>
              <a 
                href="/#contacto"
                onClick={(e) => {
                  e.preventDefault();
                  if (location.pathname !== '/') {
                    navigate('/');
                    setTimeout(() => {
                      const contactSection = document.getElementById('contacto');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                      }
                      setIsMenuOpen(false);
                    }, 100);
                  } else {
                    const contactSection = document.getElementById('contacto');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                      setIsMenuOpen(false);
                    }
                  }
                }}
                className="block w-full text-left text-white hover:text-digital-purple transition-colors py-1"
              >
                Contacto
              </a>
              <div className="flex items-center space-x-4 pt-4 border-t border-white/20">
                <a href="#" className="text-white hover:text-digital-purple transition-colors"><Linkedin className="h-5 w-5" /></a>
                <a href="#" className="text-white hover:text-digital-purple transition-colors"><Instagram className="h-5 w-5" /></a>
                <a href="#" className="text-white hover:text-digital-purple transition-colors"><Facebook className="h-5 w-5" /></a>
              </div>
            </nav>
          </div>
        </div>
        )}
      </div>
    </header>
  );
};

export default Header;