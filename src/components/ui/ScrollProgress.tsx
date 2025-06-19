import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.pageYOffset / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-dark-700 z-50">
      <motion.div
        className="h-full bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-green"
        style={{ width: `${scrollProgress}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${scrollProgress}%` }}
        transition={{ duration: 0.1 }}
      />
      <div 
        className="absolute top-0 right-0 h-full w-1 bg-neon-cyan animate-pulse"
        style={{ right: `${100 - scrollProgress}%` }}
      />
    </div>
  );
};

export default ScrollProgress;