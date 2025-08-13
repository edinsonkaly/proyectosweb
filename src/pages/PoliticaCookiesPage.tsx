import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PoliticaCookiesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow">
        {/* Espacio blanco superior */}
        <div className="h-32 bg-white"></div>
        
        {/* Sección del Título */}
        <section className="py-12 bg-[#0A1F66] relative">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-white">
              Política de Cookies
            </h1>
          </div>
        </section>

        {/* Sección del Contenido */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg lg:prose-xl max-w-none
                          [&_h2]:text-[#0A1F66] [&_h2]:mt-10 [&_h2]:mb-6 [&_h2]:font-bold [&_h2]:text-2xl
                          [&_h2]:[text-shadow:0_0_8px_rgba(1,249,198,0.5)]
                          [&_p]:text-[#4B5563] [&_p]:mb-4 [&_p]:leading-relaxed
                          [&_ul]:text-[#4B5563] [&_ul]:mb-6
                          [&_li]:mb-2 [&_li]:marker:text-[#01F9C6]
                          [&_a]:text-[#7E3FF2] hover:[&_a]:underline">

              <h2>1. Introducción y Aceptación</h2>
              <p>
                La presente Política de Cookies ("Política") tiene como finalidad informar de manera clara y transparente la forma en que <strong>Intellibrander</strong> utiliza cookies y otras tecnologías de seguimiento en su sitio web <code>https://intellibrander.com</code>.
              </p>
              <p>
                Esta Política describe la tipología de información que se recaba de los usuarios y los tratamientos que se realizan con dicha información. Al hacer clic en "Aceptar" en nuestro banner de consentimiento o al continuar navegando por nuestro sitio tras ser notificado, el usuario declara haber leído y aceptado de manera expresa la presente Política.
              </p>

              <h2>2. ¿Qué son las Cookies y Tecnologías Similares?</h2>
              <p>
                Las cookies son pequeños archivos de texto que un sitio web instala en tu navegador o dispositivo. Sin embargo, en esta política, el término "cookie" se utiliza en un sentido amplio para incluir otras tecnologías de almacenamiento local, como <strong><code>localStorage</code></strong>, que nos permiten guardar información en tu navegador de forma persistente.
              </p>
              <p>
                Estas tecnologías nos permiten almacenar datos sobre tu dispositivo y tu navegación para funcionalidades esenciales y análisis, con el objetivo de mejorar tu experiencia en nuestro sitio.
              </p>

              <h2>3. Tipos de Cookies que Utilizamos</h2>
              <p>Intellibrander utiliza las siguientes tecnologías de seguimiento, clasificadas por su finalidad:</p>
              <ul>
                <li>
                  <strong>Cookies Esenciales (Siempre Activas):</strong> Son indispensables para que el sitio web funcione correctamente. Esto incluye, por ejemplo, la cookie que guarda tus preferencias de consentimiento para no volver a preguntarte en futuras visitas. No puedes desactivar estas cookies.
                </li>
                <li>
                  <strong>Cookies de Análisis y Personalización (Requieren Consentimiento):</strong> Estas nos permiten entender cómo interactúas con nuestro sitio web para poder mejorar nuestros servicios. Si otorgas tu consentimiento, utilizaremos las siguientes:
                  <ul>
                      <li><strong>Analítica de Primera Parte (Nuestro Mini-Rastreador):</strong> Utilizamos un script de seguimiento propio para recopilar datos de uso de forma anónima. Esta tecnología guarda un <strong>identificador de visitante único (`visitor_id`)</strong> en el <code>localStorage</code> de tu navegador. Este ID nos permite reconocer tu navegador en visitas posteriores sin conocer tu identidad personal. Los datos que recopilamos incluyen las páginas que visitas (`PageView`), los clics que realizas en botones específicos y la profundidad de tu desplazamiento en la página (scroll).</li>
                      <li><strong>Finalidad:</strong> Analizar el rendimiento del sitio, optimizar la experiencia del usuario y entender el viaje de nuestros visitantes para mejorar nuestras ofertas.</li>
                  </ul>
                </li>
                 <li>
                  <strong>Cookies Publicitarias (Requieren Consentimiento):</strong> En el futuro, podríamos utilizar cookies de terceros para gestionar nuestra oferta publicitaria. Estas cookies, si se activan con tu consentimiento, nos ayudarían a mostrarte anuncios más relevantes en otras plataformas. Actualmente no utilizamos cookies de esta categoría.
                </li>
              </ul>
              
              <h2>4. Gestión de las Preferencias de Cookies</h2>
              <p>
                Tienes el control total sobre las cookies no esenciales. Puedes aceptar, rechazar o personalizar tus preferencias en cualquier momento a través de nuestro banner de consentimiento, o haciendo clic en el enlace "Preferencias de Cookies" que se encuentra en el pie de página de nuestro sitio.
              </p>
              <p>
                Ten en cuenta que si rechazas las cookies de análisis, tu experiencia de navegación no se verá afectada, pero no podremos utilizar tu visita anónima para mejorar nuestro sitio web.
              </p>

              <h2>5. Finalidades del Tratamiento</h2>
              <p>
                Para obtener información más detallada sobre cómo tratamos tus datos personales (por ejemplo, los datos que envías a través de nuestros formularios), por favor, consulta nuestra <a href="/politica-de-privacidad" className="text-tech-cyan hover:underline">Política de Privacidad</a>.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PoliticaCookiesPage;
