import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface GlitchTextProps {
  text: string;
  className?: string;
  trigger?: boolean;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, className = '', trigger = false }) => {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (trigger && textRef.current) {
      textRef.current.classList.add('animate-glitch');
      
      const timeout = setTimeout(() => {
        if (textRef.current) {
          textRef.current.classList.remove('animate-glitch');
        }
      }, 600);

      return () => clearTimeout(timeout);
    }
  }, [trigger]);

  return (
    <motion.span
      ref={textRef}
      className={`relative inline-block ${className}`}
      style={{
        textShadow: '0 0 10px rgba(0, 255, 255, 0.8)'
      }}
    >
      {text}
      <span
        className="absolute top-0 left-0 w-full h-full opacity-80 animate-pulse"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.1), transparent)',
          animation: 'glitch 0.3s infinite'
        }}
      />
    </motion.span>
  );
};

export default GlitchText;