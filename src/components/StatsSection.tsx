import { Clock, Rocket, Users, Globe } from 'lucide-react';
import teamImage from '../assets/equipo-trabajo-intellibrander.jpg';

const stats = [
  {
    number: "10+",
    label: "años de experiencia",
    icon: <Clock className="w-8 h-8 text-[#7E3FF2] mb-2 mx-auto" />
  },
  {
    number: "80+", 
    label: "proyectos exitosos",
    icon: <Rocket className="w-8 h-8 text-[#7E3FF2] mb-2 mx-auto" />
  },
  {
    number: "50+",
    label: "clientes satisfechos",
    icon: <Users className="w-8 h-8 text-[#7E3FF2] mb-2 mx-auto" />
  },
  {
    number: "15+",
    label: "países alcanzados",
    icon: <Globe className="w-8 h-8 text-[#7E3FF2] mb-2 mx-auto" />
  }
];

const StatsSection = () => {
  return (
    <section 
      id="stats" 
      className="py-20 bg-white min-h-[600px] flex items-center"
      style={{
        backgroundImage: 'radial-gradient(#E5E7EB 1px, transparent 1px)',
        backgroundSize: '24px 24px'
      }}
    >
      <div className="container mx-auto px-4 h-full">
        <div className="flex flex-col md:flex-row items-stretch h-full">
          {/* Columna izquierda - Imagen del equipo */}
          <div className="w-full md:w-1/2 mb-12 md:mb-0 md:pr-8 flex">
            <div className="relative w-full rounded-xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/10 mix-blend-multiply"></div>
              <img 
                src={teamImage} 
                alt="Equipo de IntelliBrander" 
                className="w-full h-full object-cover"
                style={{
                  minHeight: '500px',
                  maxHeight: '600px',
                  objectPosition: 'center 30%'
                }}
              />
              {/* Sombra degradada en la parte inferior */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </div>
          
          {/* Columna derecha - Contenido */}
          <div className="w-full md:w-1/2 md:pl-8 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A1F66] mb-6 font-montserrat">
              Confianza Basada en Resultados
            </h2>
            <p className="text-gray-700 mb-10 font-open-sans">
              Nuestra trayectoria es la garantía de tu éxito. Cada número representa una historia de crecimiento y eficiencia que podemos replicar para ti.
            </p>
            
            {/* Grid de métricas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-[#F9F9FB] p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                >
                  {stat.icon}
                  <div className="text-3xl font-extrabold text-[#7E3FF2] mb-1 font-montserrat">
                    {stat.number}
                  </div>
                  <p className="text-gray-700 font-open-sans">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;