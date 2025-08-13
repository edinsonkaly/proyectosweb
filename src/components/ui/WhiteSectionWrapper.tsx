import React from 'react';

interface WhiteSectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export const WhiteSectionWrapper: React.FC<WhiteSectionWrapperProps> = ({ children, id, className = '' }) => {
  return (
    <div className="relative">
      {/* 
        El ID para la navegación se coloca en un div ancla.
        La clase -top-24 compensa la altura del header fijo, asegurando
        que la sección se alinee perfectamente al hacer scroll.
      */}
      {id && <div id={id} className="absolute -top-24"></div>}
      
      {/* Las superposiciones de "techNoir.css" y "index.css" que crean el efecto */}
      <div className="tech-matrix-bg absolute inset-0 opacity-10 pointer-events-none"></div>
      
      <section
        className={`pt-20 pb-20 bg-white overflow-hidden relative ${className}`}
        style={{
          // El fondo base granulado y con toques de color
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(126, 63, 242, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(1, 249, 198, 0.08) 0%, transparent 50%),
            linear-gradient(135deg, transparent 0%, rgba(10, 31, 102, 0.02) 50%, transparent 100%),
            radial-gradient(#E5E7EB 1px, transparent 1px)
          `,
          backgroundSize: '800px 800px, 600px 600px, 100% 100%, 24px 24px',
          backgroundPosition: '0% 0%, 100% 100%, 0% 0%, 0% 0%'
        }}
      >
        {/* La superposición de rejilla animada */}
        <div className="tech-grid-overlay absolute inset-0 opacity-20 pointer-events-none"></div>
        
        {/* El contenido de tu sección (pasado como 'children') se renderizará aquí */}
        <div className="container mx-auto px-4 relative z-10">
          {children}
        </div>
      </section>
    </div>
  );
};
