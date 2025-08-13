// --- START OF FILE ScanLine.tsx ---

import { motion, type Transition } from 'framer-motion';
import type { CSSProperties } from 'react';

interface ScanLineProps {
  className?: string;
  direction: 'top-left' | 'top-right';
  speed?: number;
  delay?: number;
  color?: string;
  width?: string;
  trailWidth?: string;
}

export const ScanLine = ({
  className = '',
  direction = 'top-left',
  speed = 8,
  delay = 0,
  color = 'rgba(1, 249, 198, 0.6)',
  width = '3px',
  trailWidth = '150px',
}: ScanLineProps) => {
  
  const height = '300vmax';

  // --- LÓGICA DE ANIMACIÓN (sin cambios) ---
  const getAnimationProps = () => {
    const transition: Transition = {
      duration: speed,
      delay: delay,
      repeat: Infinity,
      repeatType: 'loop',
      ease: 'linear',
    };

    if (direction === 'top-left') {
      return {
        initial: { x: '-50vw', y: '-50vh', rotate: 45 },
        animate: { x: '150vw', y: '50vh' },
        transition,
      };
    } else {
      return {
        initial: { x: '150vw', y: '-50vh', rotate: -45 },
        animate: { x: '-50vw', y: '50vh' },
        transition,
      };
    }
  };

  const { initial, animate, transition } = getAnimationProps();

  // --- LÓGICA DE ESTILOS CONDICIONALES (¡LA CLAVE DE LA SOLUCIÓN!) ---
  let trailStyle: CSSProperties = {};
  let lineStyle: CSSProperties = {};

  if (direction === 'top-left') {
    // La línea se mueve de izquierda a derecha.
    // La estela debe estar DETRÁS (a la izquierda).
    // Por lo tanto, el gradiente va de derecha (sólido) a izquierda (transparente).
    trailStyle = {
      background: `linear-gradient(to left, ${color} 0%, transparent 100%)`,
      filter: 'blur(30px)',
      opacity: 0.6,
    };
    // La línea nítida debe estar en el borde DERECHO del contenedor.
    lineStyle = {
      right: 0,
      background: color,
      boxShadow: `0 0 15px 2px ${color}`,
    };
  } else { // 'top-right'
    // La línea se mueve de derecha a izquierda.
    // La estela debe estar DETRÁS (a la derecha).
    // Por lo tanto, el gradiente va de izquierda (sólido) a derecha (transparente).
    trailStyle = {
      background: `linear-gradient(to right, ${color} 0%, transparent 100%)`,
      filter: 'blur(30px)',
      opacity: 0.6,
    };
    // La línea nítida debe estar en el borde IZQUIERDO del contenedor.
    lineStyle = {
      left: 0,
      background: color,
      boxShadow: `0 0 15px 2px ${color}`,
    };
  }
  
  return (
    // El contenedor animado
    <motion.div
      className={`absolute top-0 left-0 pointer-events-none ${className}`}
      style={{
        transformOrigin: 'top center',
        width: trailWidth,
        height,
        willChange: 'transform',
      }}
      initial={initial}
      animate={animate}
      transition={transition}
    >
      {/* La estela con su estilo condicional */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          ...trailStyle,
        }}
      />
      
      {/* La línea con su estilo y posición condicional */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          width,
          height,
          ...lineStyle,
        }}
      />
    </motion.div>
  );
};

export default ScanLine;