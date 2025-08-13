// src/pages/PoliticaPrivacidadPage.tsx
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PoliticaPrivacidadPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow">
        {/* Espacio blanco superior */}
        <div className="h-32 bg-white"></div>
        
        {/* Banner del Título */}
        <section className="py-12 bg-[#0A1F66] relative">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-white">
              Política de Privacidad
            </h1>
          </div>
        </section>

        {/* Sección del Contenido */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg lg:prose-xl max-w-none
                          [&_h2]:text-[#0A1F66] [&_h2]:mt-10 [&_h2]:mb-6 [&_h2]:font-bold [&_h2]:text-2xl
                          [&_h2]:[text-shadow:0_0_8px_rgba(1,249,198,0.5)]
                          [&_h3]:text-xl [&_h3]:font-bold [&_h3]:mt-8 [&_h3]:mb-4 [&_h3]:text-[#7E3FF2]
                          [&_p]:text-[#4B5563] [&_p]:mb-4 [&_p]:leading-relaxed
                          [&_ul]:text-[#4B5563] [&_ul]:mb-6
                          [&_li]:mb-2 [&_li]:marker:text-[#01F9C6]
                          [&_a]:text-[#7E3FF2] hover:[&_a]:underline">

              <p className="text-sm text-gray-500">Última actualización: 1 de agosto de 2025</p>

              <h2>RESUMEN DE PUNTOS CLAVE</h2>
              <p>
                <em>
                  Este resumen proporciona los puntos clave de nuestro aviso de privacidad, pero puede encontrar más detalles sobre cualquiera de estos temas en las secciones correspondientes.
                </em>
              </p>
              <ul>
                <li><strong>¿Qué información personal procesamos?</strong> Cuando visita, utiliza o navega por nuestros Servicios, podemos procesar información personal dependiendo de cómo interactúe con nosotros, las elecciones que haga y los productos y características que utilice.</li>
                <li><strong>¿Procesamos alguna información personal sensible?</strong> No procesamos información personal sensible.</li>
                <li><strong>¿Recopilamos información de terceros?</strong> No recopilamos datos de fuentes de terceros.</li>
                <li><strong>¿Cómo procesamos su información?</strong> Procesamos su información para proporcionar, mejorar y administrar nuestros Servicios, comunicarnos con usted, para la seguridad y prevención de fraudes, y para cumplir con la ley.</li>
                <li><strong>¿En qué situaciones y con qué partes compartimos información personal?</strong> Podemos compartir información en situaciones específicas y con terceros específicos, como proveedores de servicios que nos ayudan a operar nuestro negocio.</li>
                <li><strong>¿Cómo mantenemos segura su información?</strong> Contamos con procesos y procedimientos técnicos y organizativos para proteger su información personal.</li>
                <li><strong>¿Cuáles son sus derechos?</strong> Dependiendo de su ubicación geográfica, la ley de privacidad aplicable puede otorgarle ciertos derechos con respecto a su información personal.</li>
                <li><strong>¿Cómo ejerce sus derechos?</strong> La forma más sencilla de ejercer sus derechos es contactándonos directamente en <a href="mailto:hola@intellibrander.com">hola@intellibrander.com</a>.</li>
              </ul>
              
              <h2>1. ¿QUÉ INFORMACIÓN RECOPILAMOS?</h2>
              <h3>Información personal que usted nos revela</h3>
              <p><strong>En resumen:</strong> Recopilamos la información personal que usted nos proporciona.</p>
              <p>
                Recopilamos la información personal que usted nos proporciona voluntariamente cuando expresa interés en obtener información sobre nosotros, cuando participa en actividades en los Servicios o cuando se pone en contacto con nosotros. La información que recopilamos puede incluir nombres, números de teléfono y direcciones de correo electrónico.
              </p>
              
              <h3>Información recopilada automáticamente</h3>
              <p><strong>En resumen:</strong> Cierta información (como su dirección IP y/o características de su navegador y dispositivo) se recopila automáticamente cuando visita nuestros Servicios.</p>
              <p>
                Esta información no revela su identidad específica, pero puede incluir datos de uso y del dispositivo. Es necesaria para mantener la seguridad y el funcionamiento de nuestros Servicios, y para nuestros fines internos de análisis.
              </p>
              <p>La información que recopilamos incluye:</p>
              <ul>
                <li><strong>Datos de Registro y Uso:</strong> Datos de servicio, diagnóstico y rendimiento que nuestros servidores recopilan.</li>
                <li><strong>Datos del Dispositivo:</strong> Información sobre el dispositivo que utiliza para acceder a los Servicios.</li>
                <li><strong>Cookies y Tecnologías Similares:</strong> Usamos cookies y `localStorage` para recopilar información. Para más detalles, consulte nuestra <a href="/politica-de-cookies">Política de Cookies</a>.</li>
                <li><strong>Datos de Analítica de Primera Parte:</strong> Si usted otorga su consentimiento, recopilamos de forma anónima: un identificador de visitante único (visitor_id), las páginas visitadas (PageView), clics en botones y la profundidad de desplazamiento (scroll).</li>
              </ul>

              <h2>2. ¿CÓMO PROCESAMOS SU INFORMACIÓN?</h2>
              <p><strong>En resumen:</strong> Procesamos su información para proporcionar nuestros Servicios, comunicarnos con usted, por seguridad y para cumplir con la ley.</p>
              <p>
                Procesamos su información para facilitar la prestación de servicios, responder a sus consultas, enviarle información administrativa, solicitar comentarios y enviarle comunicaciones de marketing (siempre en consonancia con sus preferencias).
              </p>

              <h2>3. ¿CUÁNDO Y CON QUIÉN COMPARTIMOS SU INFORMACIÓN PERSONAL?</h2>
              <p><strong>En resumen:</strong> Podemos compartir información en situaciones específicas y con los siguientes terceros.</p>
              <p>
                Podemos compartir sus datos con proveedores de servicios que nos ayudan a operar, como nuestro proveedor de automatización (n8n), nuestro proveedor de alojamiento de datos (Google Sheets) y nuestro proveedor de infraestructura en la nube (AWS).
              </p>

              <h2>4. ¿UTILIZAMOS COOKIES Y OTRAS TECNOLOGÍAS DE SEGUIMIENTO?</h2>
              <p><strong>En resumen:</strong> Podemos utilizar cookies y `localStorage` para recopilar y almacenar su información.</p>
              <p>
                La información específica sobre cómo utilizamos dichas tecnologías y cómo puede gestionar su consentimiento se establece en nuestra <a href="/politica-de-cookies">Política de Cookies</a>.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PoliticaPrivacidadPage;
