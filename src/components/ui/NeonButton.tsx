import React from 'react';
import { motion } from 'framer-motion';

interface NeonButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
}

const NeonButton: React.FC<NeonButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false
}) => {
  const variants = {
    primary: 'border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black',
    secondary: 'border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-black',
    accent: 'border-neon-green text-neon-green hover:bg-neon-green hover:text-black'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={`
        relative border-2 font-mono font-medium transition-all duration-300
        ${variants[variant]} ${sizes[size]} ${className}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        hover:shadow-lg hover:animate-glow
      `}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        ease: 'easeOut'
      }}
    >
      <span className="relative z-10">{children}</span>
      <motion.div
        className="absolute inset-0 opacity-0 hover:opacity-20 transition-opacity duration-300"
        style={{
          background: variant === 'primary' ? '#00ffff' : 
                     variant === 'secondary' ? '#0080ff' : '#00ff00'
        }}
      />
    </motion.button>
  );
};

export default NeonButton;