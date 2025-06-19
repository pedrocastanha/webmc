import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export function AnimatedSection({ 
  children, 
  className = '', 
  animation = 'fade-in-up',
  delay = 0 
}) {
  const [setRef, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '50px'
  });

  const animationClasses = {
    'fade-in-up': 'animate-fade-in-up',
    'scale-in': 'animate-scale-in',
    'slide-in-left': 'animate-slide-in-left',
    'slide-in-right': 'animate-slide-in-right'
  };

  return (
    <div
      ref={setRef}
      className={`transition-all duration-700 ${
        isIntersecting 
          ? `${animationClasses[animation]} opacity-100` 
          : 'opacity-0 translate-y-8'
      } ${className}`}
      style={{ 
        animationDelay: isIntersecting ? `${delay}ms` : '0ms' 
      }}
    >
      {children}
    </div>
  );
}

