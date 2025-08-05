import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook, MessageCircle } from "lucide-react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import logo from "@/assets/intelibrander_logo_white.svg";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isAboutPage = location.pathname === '/acerca-de-intellibrander/';
  return (
    <footer className="bg-electric-blue text-white pt-20 pb-8 relative z-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <a 
                href="/" 
                className="flex items-center space-x-3"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/');
                }}
              >
                <img 
                  src={logo} 
                  alt="Intellibrander Logo" 
                  className="h-8 w-auto"
                />
                <span className="text-xl font-bold text-white hover:text-digital-purple transition-colors">
                  Intellibrander
                </span>
              </a>
            </div>
            <p className="text-gray-300 mb-6">
              Soluciones de IA que venden por ti mientras tú vives. Tu negocio en automático, tus ventas en piloto automático.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/intellibrander/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-digital-purple transition-colors"
                aria-label="LinkedIn de Intellibrander"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-white hover:text-digital-purple transition-colors cursor-not-allowed"
                aria-label="Instagram de Intellibrander (próximamente)"
                onClick={(e) => e.preventDefault()}
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://www.facebook.com/intellibrander" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-digital-purple transition-colors"
                aria-label="Facebook de Intellibrander"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://api.whatsapp.com/send/?phone=51980187824&text=Hola%2C+acabo+de+visitar+su+p%C3%A1gina+web+y+quisiera+mas+informaci%C3%B3n&type=phone_number&app_absent=0" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-digital-purple transition-colors"
                aria-label="WhatsApp de Intellibrander"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-tech-cyan mb-4">Servicios</h4>
            <ul className="space-y-3 text-gray-300">
              <li>Automatización digital con IA</li>
              <li>Desarrollo web Inteligente</li>
              <li>Marketing Automatizado</li>
              <li>CRM Inteligente</li>
              <li>Embudos de ventas</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold text-tech-cyan mb-4">Empresa</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                {isAboutPage ? (
                  <span className="text-gray-500 cursor-default">
                    Quienes Somos
                  </span>
                ) : (
                  <Link 
                    to="/acerca-de-intellibrander/" 
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Quienes Somos
                  </Link>
                )}
              </li>
              <li>
                <a 
                  href="/#contacto" 
                  className="hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    
                    if (window.location.pathname !== '/') {
                      // Si no estamos en la página principal, navegamos a la raíz
                      navigate('/', { 
                        state: { scrollToContact: true },
                        replace: false // Cambiado a false para forzar recarga si es necesario
                      });
                    } 
                    
                    // Siempre intentamos hacer scroll al contacto
                    const scrollToContact = () => {
                      const element = document.getElementById('contacto');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                        window.history.replaceState(null, '', '#contacto');
                        return true;
                      }
                      return false;
                    };

                    // Intentar hacer scroll inmediatamente
                    if (!scrollToContact()) {
                      // Si no se pudo, esperar un momento e intentar de nuevo
                      const timer = setTimeout(() => {
                        scrollToContact();
                      }, 500);
                      return () => clearTimeout(timer);
                    }
                  }}
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-tech-cyan mb-4">Contacto</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-digital-purple flex-shrink-0" />
                <a 
                  href="mailto:hola@intellibrander.com" 
                  className="hover:text-white transition-colors"
                >
                  hola@intellibrander.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-digital-purple flex-shrink-0" />
                <a 
                  href="tel://51980187824" 
                  className="hover:text-white transition-colors"
                >
                  +51 980 187 824
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-digital-purple" />
                <span>Perú, LATAM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-digital-purple/30 mt-12 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} IntelliBrander. Automatizando el futuro de tu negocio.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;