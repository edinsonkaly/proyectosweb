import { useState, useEffect } from "react";
import { Menu, X, Linkedin, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/impulso-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Altura aproximada del header
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-border/20 ${
      isScrolled ? 'bg-background/80 backdrop-blur-md' : 'bg-background/95 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4">
        {/* Main Navigation */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Impulso E-Marcketing'ia Logo" className="h-10 w-10" />
            <span className="text-xl font-bold text-foreground">Impulso E-Marcketing'ia</span>
          </div>

          {/* Desktop Main Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-accent transition-colors">
              Quienes Somos
            </a>
            <a href="#" className="text-foreground hover:text-accent transition-colors">
              Blog
            </a>
            <a href="#" className="text-foreground hover:text-accent transition-colors">
              Acerca De
            </a>
            <button className="bg-purple text-purple-foreground px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-all shadow-lg">
              Consulta Gratis
            </button>
          </nav>

          {/* Social Media Icons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground p-2"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Secondary Navigation - Page Sections */}
        <div className="hidden md:block border-t border-border/20">
          <nav className="flex items-center justify-center space-x-8 py-3">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('ideal-client')}
              className="text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              ¿Es para ti?
            </button>
            <button
              onClick={() => scrollToSection('benefits')}
              className="text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              Beneficios
            </button>
            <button
              onClick={() => scrollToSection('methodology')}
              className="text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              Proceso
            </button>
            <button
              onClick={() => scrollToSection('urgency')}
              className="text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              ¿Por qué ahora?
            </button>
            <button
              onClick={() => scrollToSection('technologies')}
              className="text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              Tecnologías
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              Contacto
            </button>
          </nav>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-800">
            <nav className="py-4 space-y-4">
              {/* Main Menu Items */}
              <div className="space-y-2">
                <a href="#" className="block text-gray-300 hover:text-white transition-colors py-2">
                  Quienes Somos
                </a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors py-2">
                  Blog
                </a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors py-2">
                  Acerca De
                </a>
              </div>

              {/* Divider */}
              <div className="border-t border-slate-700 my-4"></div>

              {/* Page Sections */}
              <div className="space-y-2">
                <button
                  onClick={() => scrollToSection('hero')}
                  className="block text-sm text-gray-400 hover:text-orange-400 transition-colors py-1"
                >
                  Inicio
                </button>
                <button
                  onClick={() => scrollToSection('vision')}
                  className="block text-sm text-gray-400 hover:text-orange-400 transition-colors py-1"
                >
                  Visión
                </button>
                <button
                  onClick={() => scrollToSection('benefits')}
                  className="block text-sm text-gray-400 hover:text-orange-400 transition-colors py-1"
                >
                  Beneficios
                </button>
                <button
                  onClick={() => scrollToSection('methodology')}
                  className="block text-sm text-gray-400 hover:text-orange-400 transition-colors py-1"
                >
                  Metodología
                </button>
                <button
                  onClick={() => scrollToSection('stats')}
                  className="block text-sm text-gray-400 hover:text-orange-400 transition-colors py-1"
                >
                  Resultados
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="block text-sm text-gray-400 hover:text-orange-400 transition-colors py-1"
                >
                  Contacto
                </button>
                <button
                  onClick={() => scrollToSection('faq')}
                  className="block text-sm text-gray-400 hover:text-orange-400 transition-colors py-1"
                >
                  FAQ
                </button>
              </div>

              {/* Social Media Icons */}
              <div className="flex items-center space-x-4 pt-4 border-t border-slate-700">
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;