import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface HolographicCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

const HolographicCard: React.FC<HolographicCardProps> = ({ 
  children, 
  className = '', 
  intensity = 0.1 
}) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7.5deg', '-7.5deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7.5deg', '7.5deg']);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className={`
        relative bg-gradient-to-b from-dark-700/50 to-dark-800/50 
        border border-neon-cyan/20 backdrop-blur-sm
        hover:border-neon-cyan/40 transition-all duration-300
        ${className}
      `}
      whileHover={{ 
        scale: 1.02,
        boxShadow: '0 0 30px rgba(0, 255, 255, 0.2)'
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div 
        className="absolute inset-0 bg-gradient-to-r from-neon-cyan/5 via-transparent to-neon-blue/5 opacity-0 hover:opacity-100 transition-opacity duration-300"
        style={{ transform: 'translateZ(10px)' }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default HolographicCard;