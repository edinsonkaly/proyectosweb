import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import heroBackground from "@/assets/hero-neural-bg.jpg";

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("https://workflow.edinsonsamame.online/webhook/93cdb2cf-9890-4585-9876-8b5f38a7ad70", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source: "landing_page_hero"
        }),
      });

      toast({
        title: "¡Enviado correctamente!",
        description: "Te contactaremos pronto para tu asesoría gratuita.",
      });

      setFormData({ name: "", email: "", phone: "" });
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Error",
        description: "Hubo un problema al enviar el formulario. Inténtalo de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 bg-white">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 animate-pulse"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        {/* Neural Animation Overlay */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-orange-400 rounded-full animate-pulse"
              style={{
                left: `${20 + (i * 10)}%`,
                top: `${30 + (i % 3) * 20}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: '2s'
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Content Grid */}
      <div className="relative z-10 w-full px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center justify-between">
          {/* Left Column - Text */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 leading-tight">
              Agencia de
              <span className="block text-orange-400">Inteligencia Artificial</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-700 leading-relaxed max-w-2xl">
              Transformamos tu estrategia de marketing con soluciones de inteligencia artificial a medida, 
              automatizando procesos para un crecimiento exponencial
            </p>
          </div>

          {/* Right Column - Form */}
          <div className="flex justify-end">
            <div className="bg-white p-8 rounded-2xl shadow-2xl border-2 border-orange-400 w-full max-w-md">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
                Solicita tu Asesoría Gratuita
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Nombre completo"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full"
                    required
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Correo electrónico"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full"
                    required
                  />
                </div>
                
                <div>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Número de celular"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  variant="cta" 
                  size="lg" 
                  className="w-full text-lg py-6"
                  disabled={isLoading}
                >
                  {isLoading ? "Enviando..." : "Solicitar Asesoría Gratuita"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;