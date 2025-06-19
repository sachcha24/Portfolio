import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useMousePosition } from '../../hooks/useMousePosition';

const CustomCursor: React.FC = () => {
  const { x, y } = useMousePosition();
  const [isHovering, setIsHovering] = useState(false);
  const [cursorVariant, setCursorVariant] = useState<'default' | 'text' | 'button'>('default');

  useEffect(() => {
    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      if (target.tagName === 'BUTTON' || target.closest('button')) {
        setCursorVariant('button');
        setIsHovering(true);
      } else if (target.tagName === 'A' || target.closest('a')) {
        setCursorVariant('button');
        setIsHovering(true);
      } else if (target.matches('h1, h2, h3, h4, h5, h6, p, span')) {
        setCursorVariant('text');
        setIsHovering(true);
      }
    };

    const handleMouseLeave = () => {
      setCursorVariant('default');
      setIsHovering(false);
    };

    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, []);

  const variants = {
    default: {
      x: x - 16,
      y: y - 16,
      backgroundColor: 'rgba(0, 255, 255, 0.8)',
      mixBlendMode: 'difference',
      scale: 1,
    },
    text: {
      x: x - 32,
      y: y - 32,
      backgroundColor: 'transparent',
      border: '2px solid rgba(0, 255, 255, 0.8)',
      scale: 2,
    },
    button: {
      x: x - 24,
      y: y - 24,
      backgroundColor: 'rgba(0, 128, 255, 0.8)',
      scale: 1.5,
    }
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 bg-neon-cyan rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={variants[cursorVariant]}
        transition={{
          type: 'tween',
          ease: 'backOut',
          duration: 0.15
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 bg-white rounded-full pointer-events-none z-50"
        animate={{
          x: x - 2,
          y: y - 2,
        }}
        transition={{
          type: 'tween',
          ease: 'backOut',
          duration: 0.1
        }}
      />
    </>
  );
};

export default CustomCursor;