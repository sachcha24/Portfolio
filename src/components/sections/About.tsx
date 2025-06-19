import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { Award, Calendar, MapPin, Zap } from 'lucide-react';
import HolographicCard from '../ui/HolographicCard';

const About: React.FC = () => {
  const { ref, inView } = useScrollAnimation(0.2);

  const achievements = [
    { number: '25+', label: 'Projects Completed', icon: Zap },
    { number: '3+', label: 'Years Experience', icon: Calendar },
    { number: '2', label: 'Businesses Founded', icon: Award },
    { number: '100+', label: 'Events Managed', icon: MapPin },
  ];

  const journey = [
    {
      year: '2011-2022',
      title: 'Lyceum International School',
      description: 'School Cricket Captain & Senior Prefect. Built leadership foundation through sports and academics.',
      image: 'https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      year: '2023-2024',
      title: 'IIT Foundation - Merit Award',
      description: 'Achieved merit recognition while developing technical skills and entrepreneurial mindset.',
      image: 'https://images.pexels.com/photos/6238050/pexels-photo-6238050.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      year: '2024-Present',
      title: 'University of Westminster - BSc Computer Science',
      description: 'Currently pursuing Computer Science while actively leading multiple organizations and projects.',
      image: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold font-mono text-neon-cyan mb-4">
            ABOUT_ME.EXE
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-blue mx-auto mb-6" />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A passionate technologist bridging the gap between innovation and execution
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left Column - Bio */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <HolographicCard className="p-8">
              <div className="space-y-6">
                <div className="w-32 h-32 mx-auto lg:mx-0 rounded-full bg-gradient-to-br from-neon-cyan to-neon-blue p-1">
                  <div className="w-full h-full rounded-full bg-dark-800 flex items-center justify-center">
                    <span className="text-4xl font-bold font-mono text-neon-cyan">SD</span>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold font-mono text-neon-cyan mb-4">
                    Hello, I'm Sachira
                  </h3>
                  <div className="space-y-4 text-gray-300 leading-relaxed">
                    <p>
                      I'm a Computer Science undergraduate at the University of Westminster with a 
                      passion for creating innovative solutions that bridge technology and creativity.
                    </p>
                    <p>
                      My journey began in school where I developed leadership skills as Cricket Captain 
                      and Senior Prefect. This foundation led me to entrepreneurship, founding multiple 
                      ventures including Cupid.lk and taking on leadership roles in various organizations.
                    </p>
                    <p>
                      Today, I blend technical expertise with creative vision, whether I'm developing 
                      cross-platform applications, managing marketing campaigns, or organizing 
                      international film festivals.
                    </p>
                  </div>
                </div>
              </div>
            </HolographicCard>
          </motion.div>

          {/* Right Column - Journey Timeline */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold font-mono text-neon-cyan mb-8">
              My Journey
            </h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-cyan via-neon-blue to-neon-green" />
              
              {journey.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative flex items-start space-x-6 mb-12"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                >
                  {/* Timeline Dot */}
                  <div className="flex-shrink-0 w-16 h-16 bg-dark-800 border-4 border-neon-cyan rounded-full flex items-center justify-center relative z-10">
                    <span className="text-xs font-mono font-bold text-neon-cyan text-center leading-tight">
                      {item.year.split('-')[0]}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <HolographicCard className="flex-1 p-6">
                    <div className="flex items-start space-x-4">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-16 h-16 rounded-lg object-cover border border-neon-cyan/20"
                      />
                      <div className="flex-1">
                        <h4 className="text-lg font-bold font-mono text-neon-cyan mb-1">
                          {item.title}
                        </h4>
                        <p className="text-sm text-neon-blue font-mono mb-3">{item.year}</p>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </HolographicCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Achievement Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {achievements.map((achievement, index) => (
            <HolographicCard key={index} className="p-6 text-center">
              <motion.div
                className="space-y-3"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <achievement.icon size={32} className="text-neon-cyan mx-auto" />
                <motion.div
                  className="text-3xl font-bold font-mono text-neon-cyan"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                >
                  {achievement.number}
                </motion.div>
                <p className="text-gray-400 text-sm font-mono">
                  {achievement.label}
                </p>
              </motion.div>
            </HolographicCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;