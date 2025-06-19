import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

export const useScrollAnimation = (threshold: number = 0.1) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true
  });

  return { ref, inView };
};

export const useParallax = (speed: number = 0.5) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * speed;
        elementRef.current.style.transform = `translateY(${parallax}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return elementRef;
};