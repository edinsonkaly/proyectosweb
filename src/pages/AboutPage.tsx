import { useEffect, MouseEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAnalytics } from "@/context/AnalyticsContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import resumenImage from "@/assets/resumen-acercade.jpg";
import { motion } from "framer-motion";

const AboutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { trackClickEvent } = useAnalytics();

  const handleContactClick = (e: MouseEvent<HTMLAnchorElement>) => {
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
    if (location.hash === '') {
      window.scrollTo(0, 0);
    } else {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Sección 1: Hero - El Propósito */}
      <section className="relative py-20 md:py-32 bg-[#0A1F66] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.05]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-heading font-extrabold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Transformamos el estancamiento en acción automatizada.
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Descubre la filosofía detrás de Intellibrander. No somos solo una agencia de desarrollo; 
              somos tu socio estratégico para recuperar el control, aumentar tu productividad y escalar 
              tu negocio con inteligencia artificial.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Sección 2: Nuestra Identidad */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-2/3">
              <div className="bg-gradient-to-br from-[#7E3FF2] to-[#0A1F66] p-1 rounded-2xl">
                <div className="bg-white p-1 rounded-xl overflow-hidden">
                  <img 
                    src={resumenImage} 
                    alt="Resumen de IntelliBrander" 
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-[#0A1F66] mb-6">
                Resumen de Marca
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-[#7E3FF2]">Nombre:</h3>
                  <p className="text-gray-700">Intellibrander</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#7E3FF2]">Industria:</h3>
                  <p className="text-gray-700">Desarrollo de páginas web, automatizaciones y soluciones digitales con IA.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#7E3FF2]">Misión:</h3>
                  <p className="text-gray-700 italic">
                    "Tu negocio en automático y tus ventas en piloto automático. Automatizamos tu comunicación, 
                    atención y captación de clientes con IA."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 3: Nuestra Personalidad */}
      <section className="py-20 bg-[#0A1F66]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-white text-center mb-16">
            Cómo Nos Comunicamos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tarjeta 1 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#7E3FF2]/50 transition-all duration-300">
              <div className="w-16 h-16 bg-[#7E3FF2] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Confiable y Profesional</h3>
              <p className="text-gray-300">
                Actuamos con seguridad, inspirando confianza a través de soluciones innovadoras y resultados medibles.
              </p>
            </div>

            {/* Tarjeta 2 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#7E3FF2]/50 transition-all duration-300">
              <div className="w-16 h-16 bg-[#7E3FF2] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Directo y Claro</h3>
              <p className="text-gray-300">
                Hablamos tu idioma. Nuestra comunicación es amigable, inteligente y siempre enfocada en la claridad.
              </p>
            </div>

            {/* Tarjeta 3 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#7E3FF2]/50 transition-all duration-300">
              <div className="w-16 h-16 bg-[#7E3FF2] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Inspirador e Innovador</h3>
              <p className="text-gray-300">
                No solo implementamos tecnología, te inspiramos a ver el potencial ilimitado de la automatización.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 4: Para Quién Existimos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-[#0A1F66] mb-8">
              Creado para el Emprendedor Comprometido
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Nos dirigimos a emprendedores y pequeños empresarios latinoamericanos de entre 25 y 45 años. 
              Personas como tú, comprometidas no solo con su éxito profesional, sino también con su desarrollo personal. 
              Entendemos tu lucha porque la hemos vivido.
            </p>
          </div>
        </div>
      </section>

      {/* Sección 5: Llamada a la Acción Final */}
      <section className="py-20 bg-gradient-to-br from-[#0A1F66] to-[#1a2b7a]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-white mb-6">
              ¿Esta filosofía resuena contigo?
            </h2>
            <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
              Si compartes nuestra visión sobre el poder de la automatización para liberar tu potencial, es hora de conversar. 
              Agenda una consultoría gratuita y sin compromiso.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                id="btn-agendar-consultoria-about"
                href="/#contacto" 
                onClick={(e) => {
                  trackClickEvent({
                    eventName: 'Click Agendar Consultoría (About Page)',
                    targetId: 'btn-agendar-consultoria-about'
                  });
                  handleContactClick(e);
                }}
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#7E3FF2] to-[#01F9C6] text-white font-bold rounded-xl hover:shadow-lg hover:shadow-[#7E3FF2]/30 transition-all duration-300"
              >
                Agendar Consultoría Gratuita
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
