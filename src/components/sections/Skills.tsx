import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { SKILLS_DATA } from '../../utils/constants';
import InteractiveSkillChart from '../ui/InteractiveSkillChart';
import HolographicCard from '../ui/HolographicCard';

const Skills: React.FC = () => {
  const { ref, inView } = useScrollAnimation(0.2);

  const SkillBar: React.FC<{ skill: { name: string; level: number }; index: number }> = ({ 
    skill, 
    index 
  }) => (
    <motion.div
      className="space-y-2"
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="flex justify-between items-center">
        <span className="font-mono text-sm text-gray-300">{skill.name}</span>
        <span className="font-mono text-sm text-neon-cyan">{skill.level}%</span>
      </div>
      <div className="w-full bg-dark-700 rounded-full h-2 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-neon-cyan to-neon-blue rounded-full"
          style={{ width: `${skill.level}%` }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
        />
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold font-mono text-neon-cyan mb-4">
            SKILL_SET.JSON
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-blue mx-auto mb-6" />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit of technologies, design skills, and soft skills
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <HolographicCard className="p-8 h-full">
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-3 h-3 bg-neon-cyan rounded-full animate-pulse" />
                  <h3 className="text-2xl font-bold font-mono text-neon-cyan">
                    Technical Skills
                  </h3>
                </div>
                <div className="space-y-4">
                  {SKILLS_DATA.technical.map((skill, index) => (
                    <SkillBar key={skill.name} skill={skill} index={index} />
                  ))}
                </div>
              </div>
            </HolographicCard>
          </motion.div>

          {/* Design Skills */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <HolographicCard className="p-8 h-full">
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-3 h-3 bg-neon-blue rounded-full animate-pulse" />
                  <h3 className="text-2xl font-bold font-mono text-neon-blue">
                    Design Skills
                  </h3>
                </div>
                <div className="space-y-4">
                  {SKILLS_DATA.design.map((skill, index) => (
                    <SkillBar key={skill.name} skill={skill} index={index} />
                  ))}
                </div>
              </div>
            </HolographicCard>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <HolographicCard className="p-8 h-full">
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-3 h-3 bg-neon-green rounded-full animate-pulse" />
                  <h3 className="text-2xl font-bold font-mono text-neon-green">
                    Soft Skills
                  </h3>
                </div>
                <div className="space-y-4">
                  {SKILLS_DATA.soft.map((skill, index) => (
                    <SkillBar key={skill.name} skill={skill} index={index} />
                  ))}
                </div>
              </div>
            </HolographicCard>
          </motion.div>
        </div>

        {/* Interactive Radar Charts */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <HolographicCard className="p-6">
            <InteractiveSkillChart 
              skills={SKILLS_DATA.technical.slice(0, 6)} 
              title="Technical Radar"
              color="#00ffff"
            />
          </HolographicCard>
          
          <HolographicCard className="p-6">
            <InteractiveSkillChart 
              skills={SKILLS_DATA.design} 
              title="Design Radar"
              color="#0080ff"
            />
          </HolographicCard>
          
          <HolographicCard className="p-6">
            <InteractiveSkillChart 
              skills={SKILLS_DATA.soft} 
              title="Soft Skills Radar"
              color="#00ff00"
            />
          </HolographicCard>
        </motion.div>

        {/* Skill Categories Summary */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <h4 className="text-lg font-mono text-neon-cyan">Frontend</h4>
              <p className="text-gray-400 text-sm">React, TypeScript, Tailwind CSS</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-mono text-neon-blue">Backend</h4>
              <p className="text-gray-400 text-sm">Node.js, Python, Java, Databases</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-mono text-neon-green">Tools</h4>
              <p className="text-gray-400 text-sm">Git, Docker, AWS, Design Suite</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;