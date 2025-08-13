// Tech-Noir Minimalist Animation Utilities
import React, { useEffect, useRef, useState } from 'react';

// Hook para animaciones de entrada desde los extremos
export const useSlideInAnimation = (direction: 'left' | 'right' | 'top' | 'bottom' = 'left', delay: number = 0) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const getTransform = () => {
    if (isVisible) return 'translate3d(0, 0, 0)';
    
    switch (direction) {
      case 'left': return 'translate3d(-100px, 0, 0)';
      case 'right': return 'translate3d(100px, 0, 0)';
      case 'top': return 'translate3d(0, -100px, 0)';
      case 'bottom': return 'translate3d(0, 100px, 0)';
      default: return 'translate3d(-100px, 0, 0)';
    }
  };

  return {
    ref: elementRef,
    style: {
      transform: getTransform(),
      opacity: isVisible ? 1 : 0,
      transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    }
  };
};

// Hook para animaciones de fade in con scroll
export const useFadeInOnScroll = (delay: number = 0) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.2, rootMargin: '30px' }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return {
    ref: elementRef,
    style: {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
      transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    }
  };
};

// Componente para rayos diagonales animados
export const DiagonalRays: React.FC<{ 
  direction?: 'left' | 'right';
  intensity?: 'low' | 'medium' | 'high';
  color?: string;
}> = ({ 
  direction = 'right', 
  intensity = 'medium',
  color = '#01F9C6' 
}) => {
  const rayCount = intensity === 'low' ? 3 : intensity === 'medium' ? 5 : 8;
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: rayCount }).map((_, i) => (
        <div
          key={i}
          className="absolute h-px opacity-20 animate-pulse"
          style={{
            background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
            width: '200%',
            top: `${15 + i * 12}%`,
            left: direction === 'right' ? '-50%' : '50%',
            transform: `rotate(${direction === 'right' ? 15 : -15}deg)`,
            animationDelay: `${i * 0.3}s`,
            animationDuration: `${2 + i * 0.2}s`,
          }}
        />
      ))}
    </div>
  );
};

// Componente para fondo granulado con columnas
export const GranularBackground: React.FC<{ 
  orientation?: 'vertical' | 'horizontal';
  opacity?: number;
}> = ({ 
  orientation = 'vertical',
  opacity = 0.03 
}) => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Textura granulada */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 25% 25%, #01F9C6 1px, transparent 1px),
            radial-gradient(circle at 75% 75%, #7E3FF2 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          opacity: opacity,
        }}
      />
      
      {/* Columnas/líneas direccionales */}
      <div className="absolute inset-0">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className={`absolute bg-gradient-to-${orientation === 'vertical' ? 'b' : 'r'} from-transparent via-cyan-tech to-transparent`}
            style={{
              [orientation === 'vertical' ? 'left' : 'top']: `${15 + i * 15}%`,
              [orientation === 'vertical' ? 'width' : 'height']: '1px',
              [orientation === 'vertical' ? 'height' : 'width']: '100%',
              opacity: 0.1,
            }}
          />
        ))}
      </div>
    </div>
  );
};

// Hook para animaciones de entrada escalonada
export const useStaggeredAnimation = (itemCount: number, baseDelay: number = 100) => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animar elementos uno por uno
          for (let i = 0; i < itemCount; i++) {
            setTimeout(() => {
              setVisibleItems(prev => new Set([...prev, i]));
            }, i * baseDelay);
          }
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [itemCount, baseDelay]);

  return {
    containerRef,
    getItemStyle: (index: number) => ({
      opacity: visibleItems.has(index) ? 1 : 0,
      transform: visibleItems.has(index) ? 'translateY(0)' : 'translateY(20px)',
      transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    })
  };
};

// Componente para efectos de glitch sutil
export const GlitchText: React.FC<{ 
  children: React.ReactNode;
  intensity?: 'low' | 'medium' | 'high';
}> = ({ 
  children, 
  intensity = 'low' 
}) => {
  return (
    <span className={`relative inline-block tech-glitch-${intensity}`}>
      {children}
    </span>
  );
};
