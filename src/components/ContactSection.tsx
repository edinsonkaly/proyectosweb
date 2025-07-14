import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar, Clock, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          {/* Left Column - Orange Background */}
          <div className="bg-accent text-accent-foreground p-12 flex flex-col justify-center">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                ¡Agendemos una Reunión!
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Asesoría Gratuita
              </p>
              
              {/* Calendar Widget Placeholder */}
              <div className="bg-white/10 rounded-lg p-8 mb-6">
                <div className="flex items-center justify-center mb-4">
                  <Calendar className="w-8 h-8 mr-3" />
                  <span className="text-lg font-semibold">Selecciona tu horario</span>
                </div>
                
                {/* Simple calendar representation */}
                <div className="grid grid-cols-7 gap-2 text-sm">
                  <div className="text-center p-2 font-semibold">L</div>
                  <div className="text-center p-2 font-semibold">M</div>
                  <div className="text-center p-2 font-semibold">X</div>
                  <div className="text-center p-2 font-semibold">J</div>
                  <div className="text-center p-2 font-semibold">V</div>
                  <div className="text-center p-2 font-semibold">S</div>
                  <div className="text-center p-2 font-semibold">D</div>
                  
                  {Array.from({ length: 35 }, (_, i) => (
                    <div 
                      key={i} 
                      className="text-center p-2 hover:bg-white/20 rounded cursor-pointer transition-colors"
                    >
                      {i + 1 > 31 ? '' : i + 1}
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 space-y-2">
                  <div className="flex items-center text-sm">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>Disponible: 9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Phone className="w-4 h-4 mr-2" />
                    <span>Duración: 30 minutos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Light Background */}
          <div className="bg-muted p-12 flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              ¿Cómo Podemos Ayudarte?
            </h3>
            
            <form className="space-y-6">
              <div>
                <Input 
                  placeholder="Nombre y Apellido"
                  className="h-12"
                />
              </div>
              
              <div>
                <Input 
                  type="email"
                  placeholder="Email Corporativo"
                  className="h-12"
                />
              </div>
              
              <div>
                <Input 
                  placeholder="Empresa"
                  className="h-12"
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox id="privacy" />
                <label htmlFor="privacy" className="text-sm text-muted-foreground leading-relaxed">
                  Acepto las políticas de privacidad y el tratamiento de mis datos personales
                </label>
              </div>
              
              <Button variant="cta" size="xl" className="w-full">
                ¡HABLEMOS!
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;