import React, { useState } from 'react';

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappLink = "https://api.whatsapp.com/send/?phone=51980187824&text=Hola%2C+acabo+de+visitar+su+p%C3%A1gina+web+y+quisiera+mas+informaci%C3%B3n&type=phone_number&app_absent=0";

  // Estilos en línea para asegurar que se apliquen
  const buttonStyle = {
    position: 'fixed',
    bottom: '24px',
    right: '24px',
    zIndex: 9999,
    backgroundColor: '#25D366', // Verde de WhatsApp
    color: 'white',
    width: '56px',
    height: '56px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    border: 'none',
    cursor: 'pointer',
    outline: 'none',
    transition: 'transform 0.2s ease, background-color 0.2s ease',
    ':hover': {
      backgroundColor: '#128C7E',
      transform: 'scale(1.05)'
    }
  };

  const popupStyle = {
    position: 'fixed',
    bottom: '96px',
    right: '24px',
    width: '300px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    zIndex: 10000,
    overflow: 'hidden',
    border: '1px solid #e5e7eb',
    animation: 'fadeIn 0.2s ease-out'
  };

  const headerStyle = {
    backgroundColor: '#25D366',
    color: 'white',
    padding: '12px 16px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const messageStyle = {
    padding: '16px',
    backgroundColor: '#f9fafb',
    margin: '12px',
    borderRadius: '8px',
    fontSize: '14px',
    lineHeight: '1.5',
    color: '#1f2937'
  };

  const actionButtonStyle = {
    width: 'calc(100% - 32px)',
    margin: '0 16px 16px',
    backgroundColor: '#25D366',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    padding: '10px 16px',
    fontSize: '14px',
    fontWeight: 500,
    cursor: 'pointer',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px'
  };

  return (
    <>
      {/* Botón flotante de WhatsApp */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={buttonStyle}
        aria-label="Abrir chat de WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="currentColor"
          style={{ color: 'white' }}
        >
          <path d="M17.5 14.4c-.3-.2-1.8-.9-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-1 1.1-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5-.2 0-.4 0-.6 0-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.9 1.2 3.1c.2.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.3zM12 22.1h-.1c-1.8 0-3.5-.5-5.1-1.4l-.4-.2-3.7 1 1-3.7-.2-.4c-.9-1.6-1.4-3.3-1.4-5.1 0-5.4 4.4-9.9 9.9-9.9 2.7 0 5.1 1 7 3 1.9 1.9 2.9 4.4 2.9 7-.1 5.4-4.5 9.8-9.9 9.8z"/>
        </svg>
      </button>

      {/* Ventana emergente */}
      {isOpen && (
        <div style={popupStyle}>
          {/* Encabezado */}
          <div style={headerStyle}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                style={{ color: 'white' }}
              >
                <path d="M17.5 14.4c-.3-.2-1.8-.9-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-1 1.1-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5-.2 0-.4 0-.6 0-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.9 1.2 3.1c.2.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.3zM12 22.1h-.1c-1.8 0-3.5-.5-5.1-1.4l-.4-.2-3.7 1 1-3.7-.2-.4c-.9-1.6-1.4-3.3-1.4-5.1 0-5.4 4.4-9.9 9.9-9.9 2.7 0 5.1 1 7 3 1.9 1.9 2.9 4.4 2.9 7-.1 5.4-4.5 9.8-9.9 9.8z"/>
              </svg>
              <span style={{ fontWeight: 600 }}>WhatsApp</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
              aria-label="Cerrar"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Cuerpo del mensaje */}
          <div style={{ padding: '16px' }}>
            <div style={messageStyle}>
              Hola 👋 Estamos aquí para ayudarte. Coméntanos sobre tu proyecto 🚀
            </div>

            {/* Botón de acción */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              style={actionButtonStyle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                style={{ color: 'white' }}
              >
                <path d="M17.5 14.4c-.3-.2-1.8-.9-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-1 1.1-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5-.2 0-.4 0-.6 0-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.9 1.2 3.1c.2.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.3zM12 22.1h-.1c-1.8 0-3.5-.5-5.1-1.4l-.4-.2-3.7 1 1-3.7-.2-.4c-.9-1.6-1.4-3.3-1.4-5.1 0-5.4 4.4-9.9 9.9-9.9 2.7 0 5.1 1 7 3 1.9 1.9 2.9 4.4 2.9 7-.1 5.4-4.5 9.8-9.9 9.8z"/>
              </svg>
              Abrir chat
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppButton;
