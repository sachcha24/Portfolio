import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Terminal, Play } from 'lucide-react';
import AnimatedText from '../ui/AnimatedText';
import GlitchText from '../ui/GlitchText';
import NeonButton from '../ui/NeonButton';

const Hero: React.FC = () => {
  const [showGlitch, setShowGlitch] = useState(false);
  const [terminalText, setTerminalText] = useState('');

  const roles = [
    'Computer Science Student',
    'Entrepreneur',
    'Creative Technologist',
    'Cricket Captain'
  ];

  const terminalCommands = [
    'Initializing portfolio...',
    'Loading creative modules...',
    'Establishing connections...',
    'Ready to innovate!'
  ];

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setShowGlitch(true);
      setTimeout(() => setShowGlitch(false), 300);
    }, 5000);

    return () => clearInterval(glitchInterval);
  }, []);

  useEffect(() => {
    let commandIndex = 0;
    const typeCommand = () => {
      if (commandIndex < terminalCommands.length) {
        const command = terminalCommands[commandIndex];
        let charIndex = 0;
        setTerminalText('');
        
        const typeChar = () => {
          if (charIndex < command.length) {
            setTerminalText(command.substring(0, charIndex + 1));
            charIndex++;
            setTimeout(typeChar, 50);
          } else {
            commandIndex++;
            setTimeout(typeCommand, 1000);
          }
        };
        
        typeChar();
      }
    };

    const initialDelay = setTimeout(typeCommand, 1000);
    return () => clearTimeout(initialDelay);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Matrix-style background */}
      <div className="absolute inset-0 opacity-10">
        <div className="matrix-bg animate-matrix" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Terminal Window */}
          <motion.div
            className="inline-block bg-dark-800/80 border border-neon-cyan/30 rounded-lg p-4 backdrop-blur-sm mb-8"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <Terminal size={18} className="text-neon-cyan ml-2" />
            </div>
            <div className="text-left font-mono text-sm">
              <span className="text-neon-green">sachira@portfolio:~$ </span>
              <span className="text-white">{terminalText}</span>
              <span className="animate-blink">|</span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            className="space-y-4"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold font-mono">
              <GlitchText 
                text="SACHIRA" 
                className="text-neon-cyan block"
                trigger={showGlitch}
              />
              <GlitchText 
                text="DHANANJAYA" 
                className="text-white block mt-2"
                trigger={showGlitch}
              />
            </h1>

            <div className="text-2xl md:text-3xl text-gray-300 font-mono h-16 flex items-center justify-center">
              <AnimatedText texts={roles} speed={80} pause={2000} />
            </div>
          </motion.div>

          {/* Quote */}
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <blockquote className="text-xl md:text-2xl text-gray-400 italic border-l-4 border-neon-cyan pl-6">
              "I build, I design, I play. A blend of code, creativity, and competition."
            </blockquote>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <NeonButton
              variant="primary"
              size="lg"
              onClick={() => scrollToAbout()}
              className="group flex items-center gap-3"
            >
              <Play size={20} className="group-hover:animate-pulse" />
              Explore My Journey
            </NeonButton>
            
            <NeonButton
              variant="secondary"
              size="lg"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Get In Touch
            </NeonButton>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            onClick={scrollToAbout}
          >
            <div className="flex flex-col items-center space-y-2 text-neon-cyan hover:text-neon-blue transition-colors duration-300">
              <span className="text-sm font-mono">Scroll Down</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ChevronDown size={24} />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-neon-cyan opacity-20"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;