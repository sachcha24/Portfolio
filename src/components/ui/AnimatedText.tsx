import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  texts: string[];
  className?: string;
  speed?: number;
  pause?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  texts, 
  className = '', 
  speed = 100, 
  pause = 2000 
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = texts[currentTextIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText !== currentFullText) {
          setCurrentText(currentFullText.substring(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pause);
        }
      } else {
        if (currentText !== '') {
          setCurrentText(currentFullText.substring(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isDeleting, texts, speed, pause]);

  return (
    <div className={`font-mono ${className}`}>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-neon-cyan"
      >
        {currentText}
      </motion.span>
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
        className="text-neon-cyan"
      >
        |
      </motion.span>
    </div>
  );
};

export default AnimatedText;