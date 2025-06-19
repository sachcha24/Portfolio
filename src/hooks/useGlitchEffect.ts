import { useCallback, useRef } from 'react';

export const useGlitchEffect = () => {
  const timeoutRef = useRef<NodeJS.Timeout>();

  const triggerGlitch = useCallback((element: HTMLElement, duration: number = 300) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    element.classList.add('animate-glitch');
    
    timeoutRef.current = setTimeout(() => {
      element.classList.remove('animate-glitch');
    }, duration);
  }, []);

  return { triggerGlitch };
};