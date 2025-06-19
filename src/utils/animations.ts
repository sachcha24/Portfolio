export const createGlitchEffect = (element: HTMLElement, duration: number = 300) => {
  const glitchClass = 'animate-glitch';
  element.classList.add(glitchClass);
  
  setTimeout(() => {
    element.classList.remove(glitchClass);
  }, duration);
};

export const createTypewriterEffect = (
  element: HTMLElement, 
  text: string, 
  speed: number = 50,
  callback?: () => void
) => {
  let index = 0;
  element.textContent = '';
  
  const timer = setInterval(() => {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
    } else {
      clearInterval(timer);
      if (callback) callback();
    }
  }, speed);
  
  return timer;
};

export const createNeonGlow = (color: string = '#00ffff') => ({
  boxShadow: `0 0 5px ${color}, 0 0 10px ${color}, 0 0 15px ${color}, 0 0 20px ${color}`,
  textShadow: `0 0 5px ${color}, 0 0 10px ${color}, 0 0 15px ${color}`
});

export const generateParticles = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    vx: (Math.random() - 0.5) * 2,
    vy: (Math.random() - 0.5) * 2,
    size: Math.random() * 3 + 1,
    opacity: Math.random() * 0.5 + 0.3
  }));
};

export const easeOutExpo = (t: number): number => {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
};

export const lerp = (start: number, end: number, factor: number): number => {
  return start + (end - start) * factor;
};