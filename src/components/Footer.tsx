import { Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - Logo and Social */}
          <div>
            <h3 className="text-2xl font-bold text-accent mb-6">EON SAM</h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Agencia de Marketing Digital especializada en soluciones de Inteligencia Artificial 
              para el crecimiento exponencial de tu negocio.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors duration-200"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Column 2 - Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Nuestros Servicios</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/80 hover:text-accent transition-colors duration-200">
                  Implementación de IA
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-accent transition-colors duration-200">
                  Marketing Automatizado
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-accent transition-colors duration-200">
                  Análisis Predictivo
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-accent transition-colors duration-200">
                  Optimización de Procesos
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-accent transition-colors duration-200">
                  Consultoría Estratégica
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 3 - Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Links de Interés</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/80 hover:text-accent transition-colors duration-200">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-accent transition-colors duration-200">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-accent transition-colors duration-200">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-accent transition-colors duration-200">
                  Casos de Éxito
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-accent transition-colors duration-200">
                  Recursos
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 4 - Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contáctanos</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                <span className="text-white/80">
                  hola@eonsam.com
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                <span className="text-white/80">
                  +1 (555) 123-4567
                </span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-accent mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-white/80">
                  123 Business Center<br />
                  Miami, FL 33101<br />
                  Estados Unidos
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="text-center text-white/60">
            <p>&copy; 2024 EON SAM. Todos los derechos reservados. | Política de Privacidad | Términos de Servicio</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;