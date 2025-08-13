import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash, state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top on path change
    window.scrollTo(0, 0);

    // Function to handle smooth scrolling to an element
    const scrollToElement = (id: string) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
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

export default ScrollToTop;
