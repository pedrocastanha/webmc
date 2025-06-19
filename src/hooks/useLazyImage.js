import { useState, useRef } from 'react';

export function useLazyImage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const imgRef = useRef();

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setIsError(true);
  };

  return {
    imgRef,
    isLoaded,
    isError,
    handleLoad,
    handleError
  };
}

