import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Linkedin, Instagram, Facebook, MessageCircle } from 'lucide-react';
import logo from "@/assets/intelibrander_logo_white.svg";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [shouldHideSecondaryNav, setShouldHideSecondaryNav] = useState(false);
  const isAboutPage = location.pathname === '/acerca-de-intellibrander';

  useEffect(() => {
    // Solo ocultar la navegación secundaria si estamos en la página Acerca De
    if (isAboutPage) {
      const timer = setTimeout(() => {
        setShouldHideSecondaryNav(true);
      }, 50); // Pequeño retraso para asegurar que la página se ha renderizado
      
      return () => clearTimeout(timer);
    } else {
      setShouldHideSecondaryNav(false);
    }
  }, [isAboutPage, location.pathname]);

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'scrolled' : ''}`}>
      <div className="container mx-auto px-4">
        {/* Main Navigation */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => navigate('/')}
          >
            <img 
              src={logo} 
              alt="Intellibrander Logo" 
              className="h-8 w-auto"
              onClick={(e) => {
                e.stopPropagation();
                navigate('/');
              }}
            />
            <span 
              className="text-xl font-bold text-white hover:text-digital-purple transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                navigate('/');
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
            <a href="/acerca-de-intellibrander" className="text-white hover:text-digital-purple transition-colors">
              Acerca De
            </a>
            <a 
              href="/#contacto"
              onClick={handleContactClick}
              className="glowing-button bg-digital-purple text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-all inline-block"
            >
              Consulta Gratis
            </a>
          </nav>

          {/* Social Media Icons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="https://linkedin.com/company/intellibrander/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-digital-purple transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-white hover:text-digital-purple transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a 
              href="https://www.facebook.com/intellibrander" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-digital-purple transition-colors"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a 
              href="https://api.whatsapp.com/send/?phone=51980187824&text=Hola%2C+acabo+de+visitar+su+p%C3%A1gina+web+y+quisiera+mas+informaci%C3%B3n&type=phone_number&app_absent=0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-digital-purple transition-colors"
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
          <div className="md:hidden glowing-menu rounded-lg mx-4 my-2">
            <nav className="bg-electric-blue rounded-lg py-4 space-y-4 px-4">
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
        )}
      </div>
    </header>
  );
};

export default Header;