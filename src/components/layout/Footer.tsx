import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:sachirad24@gmail.com', label: 'Email' },
  ];

  const contactInfo = [
    { icon: Mail, text: 'sachirad24@gmail.com', href: 'mailto:sachirad24@gmail.com' },
    { icon: Phone, text: '+94 77 483 8430', href: 'tel:+94774838430' },
    { icon: MapPin, text: 'Maharagama, Sri Lanka', href: '#' },
  ];

  return (
    <footer className="relative bg-dark-900 border-t border-neon-cyan/20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-800/50 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold font-mono text-neon-cyan">
                {'<SD />'}
              </span>
            </div>
            <p className="text-gray-400 max-w-md">
              Computer Science undergraduate, entrepreneur, and creative technologist 
              building the future through code, creativity, and innovation.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-dark-700 border border-neon-cyan/20 rounded-full flex items-center justify-center text-neon-cyan hover:border-neon-cyan hover:bg-neon-cyan/10 transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold font-mono text-neon-cyan">Quick Links</h3>
            <div className="space-y-2">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((link, index) => (
                <motion.button
                  key={link}
                  onClick={() => {
                    const element = document.querySelector(`#${link.toLowerCase()}`);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-gray-400 hover:text-neon-cyan transition-colors duration-200 font-mono"
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  {link}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold font-mono text-neon-cyan">Get In Touch</h3>
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={contact.text}
                  href={contact.href}
                  className="flex items-center space-x-3 text-gray-400 hover:text-neon-cyan transition-colors duration-200"
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <contact.icon size={18} className="text-neon-cyan" />
                  <span className="font-mono text-sm">{contact.text}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="mt-12 pt-8 border-t border-neon-cyan/20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-gray-400 text-sm font-mono flex items-center">
            Made with <Heart size={16} className="text-neon-pink mx-1 animate-pulse" /> by Sachira Dhananjaya
          </p>
          <p className="text-gray-500 text-sm font-mono">
            © 2025 Sachira Dhananjaya. All rights reserved.
          </p>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-50" />
    </footer>
  );
};

export default Footer;