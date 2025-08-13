// src/lib/analytics.ts

// --- Definición de la estructura de nuestros datos ---
export interface EventData {
  visitor_id: string;
  event_name: string;
  page_url: string;
  timestamp: string;
  target_id?: string;
  scroll_percent?: number;
}

// --- Constantes Reutilizables ---
const VISITOR_ID_KEY = 'intellibrander_visitor_id';
const WEBHOOK_URL = import.meta.env.VITE_APP_N8N_WEBHOOK_URL;

// --- Funciones de Utilidad Exportables ---

/**
 * Gestiona el Visitor ID. Lo obtiene del localStorage o genera uno nuevo.
 * @returns {string} El identificador único del visitante.
 */
export const getOrCreateVisitorId = (): string => {
  let visitorId = localStorage.getItem(VISITOR_ID_KEY);
  if (!visitorId) {
    visitorId = ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
    localStorage.setItem(VISITOR_ID_KEY, visitorId);
  }
  return visitorId;
};

/**
 * Envía cualquier dato de evento al webhook de n8n.
 * @param {object} data - El objeto con la información del evento.
 */
export const sendDataToN8N = (data: EventData) => {
  if (!WEBHOOK_URL) {
    console.error("La URL del Webhook de n8n no está configurada (VITE_APP_N8N_WEBHOOK_URL).");
    return;
  }
  fetch(WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
    mode: 'cors',
    keepalive: true
  }).catch(error => console.error('Error de red al enviar datos a n8n:', error));
};
