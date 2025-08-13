// src/context/AnalyticsContext.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { getOrCreateVisitorId, sendDataToN8N, EventData } from '@/lib/analytics';

// --- Interfaces y Contexto (Sin cambios) ---
interface AnalyticsContextType {
  visitorId: string;
  trackClickEvent: (params: { eventName: string; targetId: string }) => void;
}
const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

// --- Componente Proveedor (con la corrección de URL) ---
export const AnalyticsProvider = ({ children }: { children?: ReactNode }) => {
  const [visitorId, setVisitorId] = useState<string>('');
  // Todavía usamos useLocation, pero solo como un "gatillo" para el useEffect
  const location = useLocation();

  // Inicializa el Visitor ID (Sin cambios)
  useEffect(() => {
    setVisitorId(getOrCreateVisitorId());
  }, []);

  // --- Lógica para el seguimiento de PAGEVIEW (CORREGIDA) ---
  useEffect(() => {
    if (!visitorId) return;

    const timer = setTimeout(() => {
        const eventData: EventData = {
          visitor_id: visitorId,
          event_name: 'PageView',
          // CAMBIO CLAVE: Usamos window.location.href para obtener la URL completa
          page_url: window.location.href, 
          timestamp: new Date().toISOString()
        };
        
        //console.log('PageView Detectado, enviando a n8n:', eventData);
        sendDataToN8N(eventData);
    }, 0);

    return () => clearTimeout(timer);

  }, [location.pathname, visitorId]); // La dependencia sigue siendo location.pathname para detectar cambios
  
  // Lógica para el seguimiento de SCROLL (Sin cambios, ya usaba href)
  useEffect(() => {
    if (!visitorId) return;
    const scrollMilestones = [25, 50, 75, 90];
    const trackedMilestones = new Set<number>();
    let isThrottled = false;

    const handleDocumentScroll = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollableHeight <= 0) return;
      const currentScrollDepth = (window.scrollY / scrollableHeight) * 100;

      for (const milestone of scrollMilestones) {
        if (currentScrollDepth >= milestone && !trackedMilestones.has(milestone)) {
          const eventData: EventData = {
            visitor_id: visitorId,
            event_name: 'Scroll Depth',
            scroll_percent: milestone,
            page_url: window.location.href, // Ya era correcto aquí
            timestamp: new Date().toISOString()
          };
          sendDataToN8N(eventData);
          trackedMilestones.add(milestone);
        }
      }
    };

    const throttledScrollHandler = () => {
      if (!isThrottled) {
        window.requestAnimationFrame(() => {
          handleDocumentScroll();
          isThrottled = false;
        });
        isThrottled = true;
      }
    };

    window.addEventListener('scroll', throttledScrollHandler, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', throttledScrollHandler);
    };
  }, [visitorId]);
  
  // Función para rastrear CLICS (Sin cambios, ya usaba href)
  const trackClickEvent = useCallback((params: { eventName: string; targetId: string }) => {
    if (!visitorId) return;
    const eventData: EventData = {
      visitor_id: visitorId,
      event_name: params.eventName,
      target_id: params.targetId,
      page_url: window.location.href, // Ya era correcto aquí
      timestamp: new Date().toISOString()
    };
    sendDataToN8N(eventData);
  }, [visitorId]);
  
  const value = { visitorId, trackClickEvent };
  
  if (!children) return null; 

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};

// --- Custom Hook (Sin cambios) ---
export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (context === undefined) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};