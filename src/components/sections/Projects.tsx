import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { PROJECTS_DATA } from '../../utils/constants';
import { ExternalLink, Github, Play, Code, Sparkles } from 'lucide-react';
import HolographicCard from '../ui/HolographicCard';
import NeonButton from '../ui/NeonButton';

const Projects: React.FC = () => {
  const { ref, inView } = useScrollAnimation(0.2);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const ProjectCard: React.FC<{ 
    project: typeof PROJECTS_DATA[0]; 
    index: number; 
    onClick: () => void;
  }> = ({ project, index, onClick }) => (
    <motion.div
      className="group cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      onClick={onClick}
    >
      <HolographicCard className="overflow-hidden h-full">
        <div className="relative">
          {/* Project Image */}
          <div className="relative overflow-hidden h-48">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-60" />
            
            {/* Hover Overlay */}
            <motion.div
              className="absolute inset-0 bg-neon-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-center space-y-2">
                <Play size={48} className="text-neon-cyan mx-auto" />
                <p className="text-white font-mono text-sm">View Details</p>
              </div>
            </motion.div>
          </div>

          {/* Project Info */}
          <div className="p-6 space-y-4">
            <div className="flex items-start justify-between">
              <h3 className="text-xl font-bold font-mono text-neon-cyan group-hover:text-neon-blue transition-colors duration-300">
                {project.title}
              </h3>
              <Sparkles size={20} className="text-neon-green animate-pulse" />
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-2 py-1 text-xs font-mono bg-dark-700 border border-neon-cyan/20 rounded text-neon-cyan"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-3 pt-2">
              <motion.a
                href={project.demoUrl}
                className="flex items-center space-x-2 text-neon-cyan hover:text-neon-blue transition-colors duration-200 text-sm font-mono"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={16} />
                <span>Demo</span>
              </motion.a>
              <motion.a
                href={project.githubUrl}
                className="flex items-center space-x-2 text-gray-400 hover:text-neon-green transition-colors duration-200 text-sm font-mono"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={16} />
                <span>Code</span>
              </motion.a>
            </div>
          </div>
        </div>
      </HolographicCard>
    </motion.div>
  );

  return (
    <section id="projects" className="py-20 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold font-mono text-neon-cyan mb-4">
            PROJECT_PORTFOLIO
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-blue mx-auto mb-6" />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of innovative solutions and creative implementations
          </p>
        </motion.div>

        {/* Featured Project */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-green rounded-lg opacity-20 blur"></div>
            <div className="relative bg-dark-800 rounded-lg p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <Code size={24} className="text-neon-cyan" />
                    <span className="text-sm font-mono text-neon-cyan">FEATURED PROJECT</span>
                  </div>
                  
                  <h3 className="text-3xl font-bold font-mono text-white">
                    {PROJECTS_DATA[0].title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {PROJECTS_DATA[0].description}. This project showcases my ability to create 
                    comprehensive solutions that bridge healthcare and technology, featuring 
                    real-time communication, appointment management, and progress tracking.
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {PROJECTS_DATA[0].tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm font-mono bg-dark-700 border border-neon-cyan/30 rounded-full text-neon-cyan"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <NeonButton variant="primary" size="md">
                      <ExternalLink size={18} className="mr-2" />
                      View Live Demo
                    </NeonButton>
                    <NeonButton variant="secondary" size="md">
                      <Github size={18} className="mr-2" />
                      Source Code
                    </NeonButton>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 to-neon-blue/20 rounded-lg blur-xl"></div>
                  <img 
                    src={PROJECTS_DATA[0].image} 
                    alt={PROJECTS_DATA[0].title}
                    className="relative w-full h-80 object-cover rounded-lg border border-neon-cyan/20"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.slice(1).map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              onClick={() => setSelectedProject(index + 1)}
            />
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject !== null && (
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="bg-dark-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-neon-cyan/30"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-bold font-mono text-neon-cyan">
                      {PROJECTS_DATA[selectedProject].title}
                    </h3>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      ✕
                    </button>
                  </div>
                  
                  <img 
                    src={PROJECTS_DATA[selectedProject].image} 
                    alt={PROJECTS_DATA[selectedProject].title}
                    className="w-full h-64 object-cover rounded-lg mb-6 border border-neon-cyan/20"
                  />
                  
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {PROJECTS_DATA[selectedProject].description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="text-sm font-mono text-neon-cyan">Tech Stack:</span>
                    {PROJECTS_DATA[selectedProject].tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs font-mono bg-dark-700 border border-neon-cyan/20 rounded text-neon-cyan"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <NeonButton variant="primary" size="md">
                      <ExternalLink size={18} className="mr-2" />
                      View Demo
                    </NeonButton>
                    <NeonButton variant="secondary" size="md">
                      <Github size={18} className="mr-2" />
                      Source Code
                    </NeonButton>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-gray-400 mb-6 font-mono">
            Want to see more projects or discuss a collaboration?
          </p>
          <NeonButton 
            variant="accent" 
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
      </div>
    </section>
  );
};

export default Projects;