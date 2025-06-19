import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { Mail, Phone, MapPin, Send, User, MessageSquare, CheckCircle } from 'lucide-react';
import HolographicCard from '../ui/HolographicCard';
import NeonButton from '../ui/NeonButton';

const Contact: React.FC = () => {
  const { ref, inView } = useScrollAnimation(0.2);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sachirad24@gmail.com',
      href: 'mailto:sachirad24@gmail.com',
      color: 'text-neon-cyan'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+94 77 483 8430',
      href: 'tel:+94774838430',
      color: 'text-neon-blue'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Maharagama, Sri Lanka',
      href: '#',
      color: 'text-neon-green'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold font-mono text-neon-cyan mb-4">
            CONTACT_INIT
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-blue mx-auto mb-6" />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to collaborate? Let's build something amazing together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold font-mono text-neon-cyan mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-400 leading-relaxed">
                I'm always excited to discuss new opportunities, collaborate on innovative 
                projects, or simply chat about technology and creativity. Whether you're 
                looking for a developer, a creative partner, or want to explore business 
                opportunities, I'd love to hear from you.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  className="block group"
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <HolographicCard className="p-4">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-dark-700 rounded-full flex items-center justify-center border border-opacity-20 group-hover:border-opacity-40 transition-all duration-300 ${info.color.replace('text', 'border')}`}>
                        <info.icon size={20} className={`${info.color} group-hover:animate-pulse`} />
                      </div>
                      <div>
                        <p className="text-sm font-mono text-gray-400">{info.label}</p>
                        <p className={`font-mono ${info.color} group-hover:text-white transition-colors duration-300`}>
                          {info.value}
                        </p>
                      </div>
                    </div>
                  </HolographicCard>
                </motion.a>
              ))}
            </div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <HolographicCard className="p-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-neon-green rounded-full animate-pulse" />
                  <span className="font-mono text-neon-green">Available for Projects</span>
                </div>
                <p className="text-gray-400 text-sm mt-2">
                  Currently accepting new freelance projects and collaboration opportunities
                </p>
              </HolographicCard>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <HolographicCard className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <User size={20} className="text-neon-cyan" />
                  <h3 className="text-xl font-bold font-mono text-neon-cyan">
                    Send Message
                  </h3>
                </div>

                {/* Name Field */}
                <div className="space-y-2">
                  <label className="text-sm font-mono text-gray-400">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={`w-full bg-dark-700 border border-neon-cyan/20 rounded px-4 py-3 text-white placeholder-gray-500 focus:border-neon-cyan focus:outline-none transition-colors duration-300 font-mono ${
                      formData.name ? 'border-neon-cyan/40' : ''
                    }`}
                    placeholder="Your name"
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label className="text-sm font-mono text-gray-400">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`w-full bg-dark-700 border border-neon-cyan/20 rounded px-4 py-3 text-white placeholder-gray-500 focus:border-neon-cyan focus:outline-none transition-colors duration-300 font-mono ${
                      formData.email ? 'border-neon-cyan/40' : ''
                    }`}
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Subject Field */}
                <div className="space-y-2">
                  <label className="text-sm font-mono text-gray-400">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className={`w-full bg-dark-700 border border-neon-cyan/20 rounded px-4 py-3 text-white placeholder-gray-500 focus:border-neon-cyan focus:outline-none transition-colors duration-300 font-mono ${
                      formData.subject ? 'border-neon-cyan/40' : ''
                    }`}
                    placeholder="Project collaboration"
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label className="text-sm font-mono text-gray-400">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className={`w-full bg-dark-700 border border-neon-cyan/20 rounded px-4 py-3 text-white placeholder-gray-500 focus:border-neon-cyan focus:outline-none transition-colors duration-300 resize-none font-mono ${
                      formData.message ? 'border-neon-cyan/40' : ''
                    }`}
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Submit Button */}
                <motion.div
                  className="pt-4"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <NeonButton
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting || isSubmitted}
                    className="w-full justify-center"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-neon-cyan border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </div>
                    ) : isSubmitted ? (
                      <div className="flex items-center space-x-2">
                        <CheckCircle size={20} />
                        <span>Message Sent!</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <Send size={20} />
                        <span>Send Message</span>
                      </div>
                    )}
                  </NeonButton>
                </motion.div>
              </form>
            </HolographicCard>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold font-mono text-neon-cyan mb-4">
              Ready to Start Something Amazing?
            </h3>
            <p className="text-gray-400 mb-8">
              Whether it's a web application, mobile app, creative project, or business venture, 
              I'm here to help bring your ideas to life with cutting-edge technology and innovative design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NeonButton
                variant="secondary"
                size="lg"
                onClick={() => window.open('mailto:sachirad24@gmail.com', '_blank')}
              >
                <Mail size={20} className="mr-2" />
                Email Me Directly
              </NeonButton>
              <NeonButton
                variant="accent"
                size="lg"
                onClick={() => window.open('tel:+94774838430', '_blank')}
              >
                <Phone size={20} className="mr-2" />
                Call Now
              </NeonButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;