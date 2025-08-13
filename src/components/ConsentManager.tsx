// src/components/ConsentManager.tsx
import React, { useState, useEffect } from 'react';
import { Cookies } from "react-cookie-consent";
import { Link } from 'react-router-dom';
import { ShieldCheck, Cookie, Settings, X } from 'lucide-react';
// Importamos las utilidades directamente
import { getOrCreateVisitorId, sendDataToN8N } from '@/lib/analytics';

// Interfaces y constantes (sin cambios)
export interface ConsentPreferences {
  essential: true;
  performance: boolean;
  analytics: boolean;
  marketing: boolean;
}
const CONSENT_COOKIE_KEY = 'intellibrander_consent_preferences';

// --- COMPONENTE MEJORADO Y CON ESTILO ---

export const ConsentManager = ({ onConsentChange }: { onConsentChange: (prefs: ConsentPreferences) => void }) => {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  // 1. Comprobar la cookie al cargar el componente
  useEffect(() => {
    const consentCookie = Cookies.get(CONSENT_COOKIE_KEY);
    if (!consentCookie) {
      // Si no hay cookie, mostramos el banner después de un breve retraso
      const timer = setTimeout(() => setShowBanner(true), 1500);
      return () => clearTimeout(timer);
    } else {
      try {
        const prefs = JSON.parse(consentCookie) as ConsentPreferences;
        onConsentChange(prefs);
      } catch (e) {
        const timer = setTimeout(() => setShowBanner(true), 1500);
        return () => clearTimeout(timer);
      }
    }
  }, [onConsentChange]);
  



  const handleAcceptAll = () => {
    // --- NUEVA LÓGICA DE SEGUIMIENTO ---
    // 1. Obtenemos el Visitor ID (o lo creamos si es la primera vez)
    const visitorId = getOrCreateVisitorId();
    // 2. Enviamos el evento de consentimiento DIRECTAMENTE
    sendDataToN8N({
      visitor_id: visitorId,
      event_name: 'Consent Accept All',
      page_url: window.location.href,
      timestamp: new Date().toISOString(),
      target_id: 'btn-consent-accept' // Asignamos un ID virtual
    });
    // --- FIN DE LA NUEVA LÓGICA ---

    // Lógica original para guardar la cookie y actualizar el estado de la app
    const allPrefs: ConsentPreferences = { essential: true, performance: true, analytics: true, marketing: true };
    Cookies.set(CONSENT_COOKIE_KEY, JSON.stringify(allPrefs), { expires: 150 });
    onConsentChange(allPrefs);
    setShowBanner(false);
  };
  
  const handleSavePreferences = (prefs: ConsentPreferences) => {
    Cookies.set(CONSENT_COOKIE_KEY, JSON.stringify(prefs), { expires: 150 });
    onConsentChange(prefs);
    setShowBanner(false);
    setShowPreferences(false);
  };


  
  // No renderizar nada si el banner no debe mostrarse
  if (!showBanner) {
    return null;
  }

  // --- RENDERIZADO DEL BANNER ---
  return (
    <>
      <div 
        className="fixed left-1/2 -translate-x-1/2 bottom-4 w-[calc(100%-2rem)] z-[100] bg-white rounded-xl border border-gray-200 p-4 transition-all duration-500 sm:left-6 sm:translate-x-0 sm:w-auto sm:max-w-md sm:bottom-6 sm:p-6"
        style={{ 
          animation: 'slideInUp 0.5s ease-out, pulseShadow 3s ease-in-out infinite',
          boxShadow: '0 10px 25px -5px rgba(126, 63, 242, 0.2), 0 8px 10px -6px rgba(126, 63, 242, 0.3)'
        }}
      >
        <div className="flex items-start gap-4">
          <ShieldCheck className="h-8 w-8 text-[#7E3FF2] flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-bold text-lg text-gray-900">Tu Privacidad es Importante</h4>
            <p className="text-sm text-gray-600 mt-2 leading-relaxed">
              Usamos cookies para mejorar la experiencia. Al hacer clic en "Aceptar", aceptas el uso de cookies como se describe en nuestra{" "}
              <Link to="/politica-de-cookies" className="font-semibold text-[#7E3FF2] hover:underline">
                Política de cookies
              </Link>.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-end gap-3 mt-6">
          <button 
            onClick={() => setShowPreferences(true)}
            className="text-sm font-medium text-gray-700 hover:text-[#7E3FF2] px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Preferencias
          </button>
          <button 
            id="btn-consent-accept" 
            onClick={handleAcceptAll}
            className="text-sm font-bold bg-gradient-to-r from-[#7E3FF2] to-[#01F9C6] text-white px-6 py-2 rounded-lg hover:shadow-glow transition-all"
          >
            Aceptar
          </button>
        </div>
      </div>

      {/* Modal de Preferencias */}
      {showPreferences && (
        <PreferencesModal 
          onClose={() => setShowPreferences(false)}
          onSave={handleSavePreferences}
        />
      )}
    </>
  );
};


// Componente para el modal de preferencias
const PreferencesModal = ({ 
  onClose, 
  onSave 
}: { 
  onClose: () => void; 
  onSave: (prefs: ConsentPreferences) => void; 
}) => {
  const [preferences, setPreferences] = useState<ConsentPreferences>({
    essential: true,
    performance: true,
    analytics: true,
    marketing: true,
  });

  // Cargar preferencias guardadas al abrir el modal
  useEffect(() => {
    const savedPrefs = Cookies.get(CONSENT_COOKIE_KEY);
    if (savedPrefs) {
      try {
        const parsedPrefs = JSON.parse(savedPrefs) as ConsentPreferences;
        setPreferences(prev => ({
          ...prev,
          ...parsedPrefs
        }));
      } catch (e) {
        console.error('Error al cargar preferencias:', e);
      }
    }
  }, []);

  const handleToggle = (key: keyof Omit<ConsentPreferences, 'essential'>) => {
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSave = () => {
    onSave(preferences);
  };

  const handleAllowAll = () => {
    const allPrefs: ConsentPreferences = { 
      essential: true, 
      performance: true, 
      analytics: true, 
      marketing: true 
    };
    onSave(allPrefs);
  };

  const PreferenceItem = ({ 
    title, 
    description, 
    checked, 
    onChange,
    required = false
  }: {
    title: string;
    description: string;
    checked: boolean;
    onChange: () => void;
    required?: boolean;
  }) => (
    <div className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50">
      <div className="flex items-center h-5 mt-0.5">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          disabled={required}
          className={`w-4 h-4 rounded ${required ? 'text-gray-400' : 'text-[#7E3FF2]'} border-gray-300 focus:ring-[#7E3FF2]`}
        />
      </div>
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-900 dark:text-white">
          {title}
          {required && <span className="text-xs text-gray-500 ml-1">(Siempre activo)</span>}
        </label>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 z-[1000] overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="fixed inset-0 bg-black/50 transition-opacity" onClick={onClose}></div>
        <div className="relative w-full max-w-2xl transform overflow-hidden rounded-xl bg-white p-6 text-left shadow-xl transition-all dark:bg-gray-900">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Preferencias de Privacidad</h3>
            <button
              onClick={onClose}
              className="rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-500 dark:hover:bg-gray-800"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-300">
              Utilizamos cookies y tecnologías similares para mejorar su experiencia. 
              Seleccione las categorías que desea permitir. Para más información, consulte nuestra{" "}
              <Link to="/politica-de-cookies" className="text-[#7E3FF2] hover:underline">
                Política de cookies
              </Link>.
            </p>

            <div className="space-y-4">
              <PreferenceItem
                title="Cookies Esenciales"
                description="Estas cookies son necesarias para el funcionamiento básico del sitio web y no se pueden desactivar."
                checked={preferences.essential}
                onChange={() => {}}
                required
              />
              
              <PreferenceItem
                title="Cookies de Rendimiento"
                description="Nos ayudan a entender cómo interactúan los visitantes con nuestro sitio web."
                checked={preferences.performance}
                onChange={() => handleToggle('performance')}
              />
              
              <PreferenceItem
                title="Cookies de Análisis"
                description="Nos permiten medir el tráfico del sitio y ver las fuentes de tráfico mediante la recopilación de información en conjuntos de datos."
                checked={preferences.analytics}
                onChange={() => handleToggle('analytics')}
              />
              
              <PreferenceItem
                title="Cookies de Marketing"
                description="Utilizadas para rastrear a los visitantes en los sitios web. La intención es mostrar anuncios relevantes y atractivos para el usuario individual."
                checked={preferences.marketing}
                onChange={() => handleToggle('marketing')}
              />
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row-reverse justify-end gap-3">
            <button
              onClick={handleSave}
              className="inline-flex justify-center rounded-md bg-[#7E3FF2] px-4 py-2 text-sm font-medium text-white hover:bg-[#6b2fd6] focus:outline-none focus:ring-2 focus:ring-[#7E3FF2] focus:ring-offset-2 transition-colors"
            >
              Guardar preferencias
            </button>
            <button
              onClick={handleAllowAll}
              className="inline-flex justify-center rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
            >
              Permitir todo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};