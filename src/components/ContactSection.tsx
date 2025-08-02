import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import { Calendar, Clock, Phone, User, Mail } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const countryCodes = [
  { code: '+51', name: 'Perú', flag: '🇵🇪' },
  { code: '+1', name: 'EE.UU.', flag: '🇺🇸' },
  { code: '+52', name: 'México', flag: '🇲🇽' },
  { code: '+54', name: 'Argentina', flag: '🇦🇷' },
  { code: '+56', name: 'Chile', flag: '🇨🇱' },
  { code: '+57', name: 'Colombia', flag: '🇨🇴' },
  { code: '+58', name: 'Venezuela', flag: '🇻🇪' },
  { code: '+591', name: 'Bolivia', flag: '🇧🇴' },
  { code: '+593', name: 'Ecuador', flag: '🇪🇨' },
  { code: '+595', name: 'Paraguay', flag: '🇵🇾' },
  { code: '+598', name: 'Uruguay', flag: '🇺🇾' },
  { code: '+34', name: 'España', flag: '🇪🇸' },
];

const ContactSection = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "+51", // Default to Perú
    privacyPolicy: false,
  });

  const isDateInRange = (date: Date, checkToday = true) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // If checking for today's date (for selection), return false
    if (checkToday && isSameDay(date, today)) {
      return false;
    }
    
    const threeMonthsLater = new Date();
    threeMonthsLater.setMonth(threeMonthsLater.getMonth() + 3);
    threeMonthsLater.setHours(23, 59, 59, 999);
    
    return date > today && date <= threeMonthsLater;
  };

  const isSameDay = (date1: Date, date2: Date) => {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  };

  const renderCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    // Get first day of month and total days in month
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();
    
    // Adjust first day (0 = Sunday, 1 = Monday, etc.)
    const startDay = firstDay === 0 ? 6 : firstDay - 1;
    
    const days = [];
    const today = new Date();
    
    // Previous month days
    for (let i = startDay - 1; i >= 0; i--) {
      const day = daysInPrevMonth - i;
      days.push({
        day,
        isCurrentMonth: false,
        isToday: false,
        isSelectable: false,
        date: new Date(year, month - 1, day)
      });
    }
    
    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const isSelectable = isDateInRange(date);
      const isToday = isSameDay(date, today);
      
      days.push({
        day,
        isCurrentMonth: true,
        isToday,
        isSelectable,
        date
      });
    }
    
    // Next month days
    let nextMonthDay = 1;
    while (days.length % 7 !== 0) {
      const date = new Date(year, month + 1, nextMonthDay);
      days.push({
        day: nextMonthDay,
        isCurrentMonth: false,
        isToday: false,
        isSelectable: isDateInRange(date),
        date
      });
      nextMonthDay++;
    }
    
    return days;
  };

  const handlePrevMonth = () => {
    const prevMonth = new Date(currentDate);
    prevMonth.setMonth(prevMonth.getMonth() - 1);
    setCurrentDate(prevMonth);
  };

  const handleNextMonth = () => {
    const nextMonth = new Date(currentDate);
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    
    // Don't allow going beyond 3 months in the future
    const threeMonthsLater = new Date();
    threeMonthsLater.setMonth(threeMonthsLater.getMonth() + 3);
    
    if (nextMonth <= threeMonthsLater) {
      setCurrentDate(nextMonth);
    }
  };

  const handleDateClick = (date: Date) => {
    if (isDateInRange(date, true)) {  // Pass true to check for today's date
      setSelectedDate(date);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone || !selectedDate) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos y selecciona una fecha",
        variant: "destructive",
        className: "bg-white text-gray-900 border border-red-500/50 shadow-lg rounded-lg"
      });
      return;
    }
    
    if (!formData.privacyPolicy) {
      toast({ 
        title: "Error", 
        description: "Debes aceptar las políticas de privacidad para continuar", 
        variant: "destructive" 
      });
      return;
    }
    
    try {
      // Format the date as YYYY-MM-DD
      const formattedDate = selectedDate.toISOString().split('T')[0];
      
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: `${formData.countryCode} ${formData.phone}`,
        selectedDate: formattedDate,
        timestamp: new Date().toISOString(),
        source: 'contact-form'
      };
      
      const response = await fetch('https://workflow.edinsonsamame.online/webhook/93cdb2cf-9890-4585-9876-8b5f38a7ad70', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
        mode: 'no-cors' // Important for CORS
      });
      
      // Show success message
      toast({
        title: "¡Enviado correctamente!",
        description: "Te contactaremos pronto para tu asesoría gratuita.",
        className: "bg-white text-gray-900 border border-digital-purple/50 shadow-lg rounded-lg"
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        countryCode: "+51",
        privacyPolicy: false,
      });
      setSelectedDate(null);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.",
        variant: "destructive",
        className: "bg-white text-gray-900 border border-red-500/50 shadow-lg rounded-lg"
      });
    }
  };
  return (
    <section id="contact" className="py-20 bg-electric-blue text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            ¿Listo para Automatizar tu Éxito?
          </h2>
          <p className="text-xl opacity-80">
            Agenda una consultoría gratuita y descubre cómo podemos transformar tu negocio.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-black/20 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-digital-purple/30">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Left: Calendar */}
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6">Selecciona tu Horario</h3>
              <div className="bg-white/10 rounded-lg p-6">
                  <div className="flex justify-between items-center mb-4">
                  <button 
                    type="button" 
                    onClick={handlePrevMonth}
                    className="p-1 rounded-full hover:bg-white/10 transition-colors"
                    disabled={currentDate.getMonth() <= new Date().getMonth() && currentDate.getFullYear() <= new Date().getFullYear()}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <h4 className="text-lg font-semibold">
                    {currentDate.toLocaleString('es-ES', { month: 'long', year: 'numeric' })}
                  </h4>
                  <button 
                    type="button" 
                    onClick={handleNextMonth}
                    className="p-1 rounded-full hover:bg-white/10 transition-colors"
                    disabled={currentDate.getMonth() >= new Date().getMonth() + 2}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                <div className="grid grid-cols-7 gap-1 text-sm mb-4">
                  {['L', 'M', 'X', 'J', 'V', 'S', 'D'].map((day) => (
                    <div key={day} className="font-semibold text-center text-sm py-1">
                      {day}
                    </div>
                  ))}
                  {renderCalendar().map((dayData, index) => {
                    const isSelected = selectedDate && isSameDay(dayData.date, selectedDate);
                    const isToday = dayData.isToday;
                    
                    return (
                      <button
                        key={index}
                        type="button"
                        onClick={() => isDateInRange(dayData.date, true) && handleDateClick(dayData.date)}
                        disabled={!dayData.isSelectable}
                        className={`
                          w-8 h-8 flex items-center justify-center rounded-full text-sm
                          ${isSameDay(dayData.date, new Date()) ? 'border-2 border-cyan-400' : ''}
                          ${isSelected ? 'bg-digital-purple text-white' : ''}
                          ${!isDateInRange(dayData.date, false) ? 'text-gray-400 cursor-not-allowed' : 'hover:bg-gray-100 hover:text-gray-900 cursor-pointer'}
                        `}
                      >
                        {dayData.day}
                      </button>
                    );
                  })}
                </div>
                <div className="border-t border-white/20 pt-4 space-y-2 text-left text-sm">
                   <div className="flex items-center"><Clock className="w-4 h-4 mr-2 text-tech-cyan" /><span>Disponible: 9:00 AM - 6:00 PM</span></div>
                   <div className="flex items-center"><Phone className="w-4 h-4 mr-2 text-tech-cyan" /><span>Duración: 30 minutos</span></div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center lg:text-left">Completa tus Datos</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-digital-purple" />
                  <Input 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Nombre y Apellido" 
                    className="pl-10 bg-white/10 border-digital-purple/50 h-12 text-white placeholder:text-gray-400" 
                    required
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-digital-purple" />
                  <Input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Corporativo" 
                    className="pl-10 bg-white/10 border-digital-purple/50 h-12 text-white placeholder:text-gray-400" 
                    required
                  />
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="relative">
                    <Select 
                      value={formData.countryCode}
                      onValueChange={(value) => setFormData(prev => ({ ...prev, countryCode: value }))}
                    >
                      <SelectTrigger className="h-12 bg-white/10 border-digital-purple/50 text-white">
                        <SelectValue>
                          <span className="flex items-center">
                            <span className="w-12 text-left">{formData.countryCode}</span>
                          </span>
                        </SelectValue>
                      </SelectTrigger>
                      <SelectContent className="bg-[#0A1F66] border-digital-purple/50 text-white">
                        {countryCodes.map((country) => (
                          <SelectItem 
                            key={country.code} 
                            value={country.code}
                            className="hover:bg-digital-purple/20 focus:bg-digital-purple/30"
                          >
                            {country.flag} {country.code} {country.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="relative col-span-2">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-digital-purple" />
                    </div>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Número de celular"
                      className="pl-10 bg-white/10 border-digital-purple/50 h-12 text-white placeholder:text-gray-400"
                      required
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-3 pt-2">
                  <Checkbox 
                    id="privacy" 
                    checked={formData.privacyPolicy}
                    onCheckedChange={(checked) => setFormData(prev => ({ ...prev, privacyPolicy: checked as boolean }))}
                    className="border-digital-purple/80 data-[state=checked]:bg-digital-purple mt-0.5 flex-shrink-0" 
                  />
                  <label htmlFor="privacy" className="text-sm opacity-80 leading-relaxed">
                    Acepto las <a href="#" className="text-digital-purple font-bold hover:underline">Políticas de Privacidad</a> y el tratamiento de mis datos personales.
                  </label>
                </div>
                <Button type="submit" className="w-full font-bold text-lg h-14 bg-gradient-to-r from-[#7E3FF2] to-[#01F9C6] hover:shadow-glow transition-shadow">
                  AGENDAR CONSULTORÍA
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;