import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import WhatsAppButton from "./components/WhatsAppButton";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname, hash, state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
    
    // Función para manejar el scroll al elemento
    const scrollToElement = (id: string, behavior: ScrollBehavior = 'smooth') => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior });
        return true;
      }
      return false;
    };

    // Handle hash-based scrolling
    if (hash) {
      const id = hash.substring(1);
      // Pequeño retraso para asegurar que el DOM esté listo
      setTimeout(() => {
        scrollToElement(id);
      }, 50);
    }
    
    // Handle state-based scrolling (for contact section)
    if (state?.scrollToContact) {
      // Limpiar el estado primero para evitar bucles
      navigate('.', { state: {}, replace: true });
      
      // Función para manejar el scroll al contacto
      const handleContactScroll = () => {
        const scrolled = scrollToElement('contacto');
        if (scrolled) {
          window.history.replaceState({}, '', '#contacto');
        }
        return scrolled;
      };

      // Intentar hacer scroll inmediatamente
      if (!handleContactScroll()) {
        // Si no se pudo, esperar un momento e intentar de nuevo
        const timer = setTimeout(() => {
          handleContactScroll();
        }, 500);
        return () => clearTimeout(timer);
      }
    }
  }, [pathname, hash, state, navigate]);

  return null;
};

const App = () => (
  <div style={{ position: 'relative', minHeight: '100vh' }}>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/acerca-de-intellibrander" element={<AboutPage />} />
          <Route path="/acerca-de-intellibrander/" element={<AboutPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<Index />} />
        </Routes>
        <WhatsAppButton />
      </TooltipProvider>
    </QueryClientProvider>
  </div>
);

export default App;
