import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';

// Nuevas importaciones
import { ConsentManager, ConsentPreferences } from "./components/ConsentManager";
import { AnalyticsProvider } from "./context/AnalyticsContext";
import ScrollToTop from './components/ScrollToTop';

// Componentes de página y otros
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import PoliticaCookiesPage from "./pages/PoliticaCookiesPage";
import PoliticaPrivacidadPage from "./pages/PoliticaPrivacidadPage";
import WhatsAppButton from "./components/WhatsAppButton";

const queryClient = new QueryClient();

const App = () => {
  const [consent, setConsent] = useState<ConsentPreferences | null>(null);

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />

          <>
            {/* El Provider de Analítica ahora se renderiza condicionalmente basado en el consentimiento */}
            {consent?.analytics ? (
              <AnalyticsProvider>
                <ScrollToTop />
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/acerca-de-intellibrander" element={<AboutPage />} />
                  <Route path="/acerca-de-intellibrander/" element={<AboutPage />} />
                  <Route path="/politica-de-cookies" element={<PoliticaCookiesPage />} />
                  <Route path="/politica-de-privacidad" element={<PoliticaPrivacidadPage />} />
                  <Route path="*" element={<Index />} />
                </Routes>
              </AnalyticsProvider>
            ) : (
              <>
                <ScrollToTop />
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/acerca-de-intellibrander" element={<AboutPage />} />
                  <Route path="/acerca-de-intellibrander/" element={<AboutPage />} />
                  <Route path="/politica-de-cookies" element={<PoliticaCookiesPage />} />
                  <Route path="/politica-de-privacidad" element={<PoliticaPrivacidadPage />} />
                  <Route path="*" element={<Index />} />
                </Routes>
              </>
            )}
            <WhatsAppButton />
            <ConsentManager onConsentChange={setConsent} />
          </>

        </TooltipProvider>
      </QueryClientProvider>
    </div>
  );
};

export default App;
