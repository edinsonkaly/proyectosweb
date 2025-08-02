import { useCallback, useEffect, useState } from 'react';
import './ScrollIndicator.css';

const ScrollIndicator = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [isInHero, setIsInHero] = useState(true);

  // Función para hacer scroll a la sección "Es para ti"
  const scrollToEsParaTi = useCallback((e) => {
    if (isScrolling) return;
    e.preventDefault();
    
    const targetSection = document.getElementById('es-para-ti');
    if (!targetSection) return;
    
    setIsScrolling(true);
    
    // Hacer scroll a la sección objetivo
    targetSection.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
    
    // Resetear el estado después de la animación
    setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  }, [isScrolling]);

  // Verificar si estamos en la sección hero
  useEffect(() => {
    const checkHeroPosition = () => {
      const heroSection = document.getElementById('hero');
      if (!heroSection) return;
      
      const rect = heroSection.getBoundingClientRect();
      // Verificar si el hero está visible en la pantalla
      const isVisible = rect.top <= 0 && rect.bottom >= window.innerHeight / 2;
      setIsInHero(isVisible);
    };

    // Verificar al cargar y al hacer scroll
    checkHeroPosition();
    window.addEventListener('scroll', checkHeroPosition, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', checkHeroPosition);
    };
  }, []);

  // No mostrar si no estamos en el hero
  if (!isInHero) return null;

  return (
    <div 
      className="scroll-indicator-container"
      onClick={scrollToEsParaTi}
      title="Ver más"
      style={{ cursor: isScrolling ? 'wait' : 'pointer' }}
    >
      <div className="mouse">
        <div className="scroll-wheel"></div>
      </div>
    </div>
  );
};

export default ScrollIndicator;
