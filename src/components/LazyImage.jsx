import React from 'react';
import { useLazyImage } from '../hooks/useLazyImage';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export function LazyImage({ 
  src, 
  alt, 
  className = '', 
  placeholder = '/src/assets/images/placeholder.jpg',
  ...props 
}) {
  const { imgRef, isLoaded, isError, handleLoad, handleError } = useLazyImage();
  const [setRef, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '50px'
  });

  const shouldLoad = isIntersecting && !isLoaded && !isError;

  return (
    <div ref={setRef} className={`relative overflow-hidden ${className}`}>
      {!isLoaded && !isError && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      
      <img
        ref={imgRef}
        src={shouldLoad ? src : placeholder}
        alt={alt}
        onLoad={handleLoad}
        onError={handleError}
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        {...props}
      />
      
      {isError && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <span className="text-gray-400 text-sm">Erro ao carregar imagem</span>
        </div>
      )}
    </div>
  );
}

