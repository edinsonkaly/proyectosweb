import { useState, useEffect } from "react";
import { Menu, X, Linkedin, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/intelibrander_logo_white.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Intellibrander Logo" className="h-8 w-auto" />
            <span className="text-xl font-bold text-white">Intellibrander</span>
          </div>

          {/* Desktop Main Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-digital-purple transition-colors">
              Quienes Somos
            </a>
            <a href="#" className="text-white hover:text-digital-purple transition-colors">
              Blog
            </a>
            <a href="#" className="text-white hover:text-digital-purple transition-colors">
              Acerca De
            </a>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="glowing-button bg-digital-purple text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-all"
            >
              Consulta Gratis
            </button>
          </nav>

          {/* Social Media Icons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="#" className="text-white hover:text-digital-purple transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-white hover:text-digital-purple transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-white hover:text-digital-purple transition-colors">
              <Facebook className="h-5 w-5" />
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
        <div className="hidden md:block border-t border-white/20">
          <nav className="flex items-center justify-center space-x-8 py-3">
            <button onClick={() => scrollToSection('hero')} className="text-sm text-white hover:text-digital-purple transition-colors">Inicio</button>
            <button onClick={() => scrollToSection('ideal-client')} className="text-sm text-white hover:text-digital-purple transition-colors">¿Es para ti?</button>
            <button onClick={() => scrollToSection('benefits')} className="text-sm text-white hover:text-digital-purple transition-colors">Beneficios</button>
            <button onClick={() => scrollToSection('methodology')} className="text-sm text-white hover:text-digital-purple transition-colors">Proceso</button>
            <button onClick={() => scrollToSection('urgency')} className="text-sm text-white hover:text-digital-purple transition-colors">¿Por qué ahora?</button>
            <button onClick={() => scrollToSection('technologies')} className="text-sm text-white hover:text-digital-purple transition-colors">Tecnologías</button>
            <button onClick={() => scrollToSection('contact')} className="text-sm text-white hover:text-digital-purple transition-colors">Contacto</button>
          </nav>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden glowing-menu rounded-lg mx-4 my-2">
            <nav className="bg-electric-blue rounded-lg py-4 space-y-4 px-4">
              <a href="#" className="block text-white hover:text-digital-purple transition-colors py-2">Quienes Somos</a>
              <a href="#" className="block text-white hover:text-digital-purple transition-colors py-2">Blog</a>
              <a href="#" className="block text-white hover:text-digital-purple transition-colors py-2">Acerca De</a>
              <div className="border-t border-white/20 my-4"></div>
              <button onClick={() => scrollToSection('hero')} className="block w-full text-left text-white hover:text-digital-purple transition-colors py-1">Inicio</button>
              <button onClick={() => scrollToSection('ideal-client')} className="block w-full text-left text-white hover:text-digital-purple transition-colors py-1">¿Es para ti?</button>
              <button onClick={() => scrollToSection('benefits')} className="block w-full text-left text-white hover:text-digital-purple transition-colors py-1">Beneficios</button>
              <button onClick={() => scrollToSection('methodology')} className="block w-full text-left text-white hover:text-digital-purple transition-colors py-1">Proceso</button>
              <button onClick={() => scrollToSection('urgency')} className="block w-full text-left text-white hover:text-digital-purple transition-colors py-1">¿Por qué ahora?</button>
              <button onClick={() => scrollToSection('technologies')} className="block w-full text-left text-white hover:text-digital-purple transition-colors py-1">Tecnologías</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-white hover:text-digital-purple transition-colors py-1">Contacto</button>
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