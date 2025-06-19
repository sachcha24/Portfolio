import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { EXPERIENCE_DATA } from '../../utils/constants';
import { Building, Calendar, MapPin, Award, Users, Zap } from 'lucide-react';
import HolographicCard from '../ui/HolographicCard';

const Experience: React.FC = () => {
  const { ref, inView } = useScrollAnimation(0.2);

  const leadershipRoles = [
    {
      title: 'ONSCREEN 25\' Short Film Festival',
      role: 'Chairperson',
      year: '2025',
      description: 'Leading the organization of an international short film festival, managing partnerships, logistics, and creative programming.',
      icon: Award
    },
    {
      title: 'ROBOTNEXUS 2.0 2025',
      role: 'Vice Chair',
      year: '2025',
      description: 'Co-leading Sri Lanka\'s premier robotics competition, overseeing technical standards and participant engagement.',
      icon: Zap
    },
    {
      title: 'HULT PRIZE Sri Lanka 2025',
      role: 'Partnership Director',
      year: '2025',
      description: 'Managing strategic partnerships and sponsorships for the world\'s largest student competition for social good.',
      icon: Users
    },
    {
      title: 'IEEE Robotics & Automation Society',
      role: 'Program Lead',
      year: '2024-Present',
      description: 'Leading technical programs and workshops to advance robotics education and research among students.',
      icon: Building
    }
  ];

  const ExperienceCard: React.FC<{ 
    experience: typeof EXPERIENCE_DATA[0]; 
    index: number; 
    isLeft: boolean;
  }> = ({ experience, index, isLeft }) => (
    <motion.div
      className={`flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'} mb-12`}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      {/* Timeline Connection */}
      <div className="flex-1 flex items-center">
        <div className={`flex-1 h-0.5 bg-gradient-to-${isLeft ? 'r' : 'l'} from-neon-cyan to-transparent`} />
      </div>

      {/* Timeline Dot */}
      <div className="flex-shrink-0 w-16 h-16 bg-dark-800 border-4 border-neon-cyan rounded-full flex items-center justify-center mx-8 relative z-10">
        <Building size={24} className="text-neon-cyan" />
      </div>

      {/* Timeline Connection */}
      <div className="flex-1 flex items-center">
        <div className={`flex-1 h-0.5 bg-gradient-to-${isLeft ? 'l' : 'r'} from-neon-cyan to-transparent`} />
      </div>

      {/* Content Card */}
      <div className={`absolute ${isLeft ? 'left-0' : 'right-0'} w-full max-w-md`}>
        <HolographicCard className="p-6">
          <div className="space-y-4">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <h3 className="text-lg font-bold font-mono text-neon-cyan">
                  {experience.title}
                </h3>
                <p className="text-neon-blue font-mono text-sm">
                  {experience.company}
                </p>
              </div>
              <span className="text-xs font-mono text-gray-400 bg-dark-700 px-2 py-1 rounded">
                {experience.type}
              </span>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <Calendar size={14} />
              <span className="font-mono">{experience.period}</span>
            </div>
            
            <p className="text-gray-300 text-sm leading-relaxed">
              {experience.description}
            </p>
          </div>
        </HolographicCard>
      </div>
    </motion.div>
  );

  const LeadershipCard: React.FC<{ 
    role: typeof leadershipRoles[0]; 
    index: number;
  }> = ({ role, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
    >
      <HolographicCard className="p-6 h-full">
        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-dark-700 rounded-full flex items-center justify-center border border-neon-cyan/20">
              <role.icon size={20} className="text-neon-cyan" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold font-mono text-neon-cyan text-sm leading-tight">
                {role.title}
              </h3>
              <p className="text-neon-blue font-mono text-xs mt-1">
                {role.role} • {role.year}
              </p>
            </div>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            {role.description}
          </p>
        </div>
      </HolographicCard>
    </motion.div>
  );

  return (
    <section id="experience" className="py-20 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold font-mono text-neon-cyan mb-4">
            EXPERIENCE_LOG
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-blue mx-auto mb-6" />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A journey through professional growth, leadership, and innovation
          </p>
        </motion.div>

        {/* Professional Experience Timeline */}
        <div className="mb-20">
          <motion.h3
            className="text-2xl font-bold font-mono text-neon-cyan mb-12 text-center"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Professional Experience
          </motion.h3>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-cyan via-neon-blue to-neon-green" />
            
            {EXPERIENCE_DATA.map((experience, index) => (
              <ExperienceCard
                key={index}
                experience={experience}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>

        {/* Leadership Roles */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold font-mono text-neon-cyan mb-8 text-center">
            Leadership & Organizational Roles
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {leadershipRoles.map((role, index) => (
              <LeadershipCard key={index} role={role} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Sports Achievement */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-neon-green via-neon-cyan to-neon-blue rounded-lg opacity-20 blur"></div>
            <div className="relative bg-dark-800 rounded-lg p-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-dark-700 rounded-full flex items-center justify-center mx-auto border-2 border-neon-green">
                  <Award size={32} className="text-neon-green" />
                </div>
                <h3 className="text-xl font-bold font-mono text-neon-green">
                  Sports Leadership
                </h3>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  <strong className="text-neon-cyan">School Cricket Captain & Senior Prefect</strong> (2022/2023) - 
                  Led the school cricket team while serving as Senior Prefect, developing leadership skills 
                  through sports management, team coordination, and student body representation.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {[
            { number: '4+', label: 'Professional Roles', icon: Building },
            { number: '5+', label: 'Leadership Positions', icon: Users },
            { number: '3+', label: 'Years Leadership', icon: Calendar },
            { number: '100+', label: 'Events Managed', icon: Award }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-dark-800/50 border border-neon-cyan/20 rounded-lg hover:border-neon-cyan/40 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <stat.icon size={32} className="text-neon-cyan mx-auto mb-3" />
              <div className="text-2xl font-bold font-mono text-neon-cyan mb-1">
                {stat.number}
              </div>
              <p className="text-gray-400 text-sm font-mono">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;