import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from "lucide-react";


const Footer = () => {
  return (
    <footer className="bg-electric-blue text-white pt-20 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-2 lg:col-span-1">
            <img src="/logo-white.svg" alt="Intellibrander Logo" width={180} height={40} className="mb-4"/>
            <p className="text-gray-300 mb-6">
              Soluciones de IA que venden por ti mientras tú vives. Tu negocio en automático, tus ventas en piloto automático.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-tech-cyan transition-colors"><Linkedin className="h-6 w-6" /></a>
              <a href="#" className="text-gray-300 hover:text-tech-cyan transition-colors"><Instagram className="h-6 w-6" /></a>
              <a href="#" className="text-gray-300 hover:text-tech-cyan transition-colors"><Facebook className="h-6 w-6" /></a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-tech-cyan mb-4">Servicios</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Automatización con IA</a></li>
              <li><a href="#" className="hover:text-white transition-colors">WhatsApp Business API</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Marketing Automatizado</a></li>
              <li><a href="#" className="hover:text-white transition-colors">CRM Inteligente</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold text-tech-cyan mb-4">Empresa</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Quienes Somos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Casos de Éxito</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-tech-cyan mb-4">Contacto</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-digital-purple" />
                <span>hola@intellibrander.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-digital-purple" />
                <span>+57 (300) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-digital-purple" />
                <span>Colombia, LATAM</span>
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