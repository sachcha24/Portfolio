import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
}

interface InteractiveSkillChartProps {
  skills: Skill[];
  title: string;
  color?: string;
}

const InteractiveSkillChart: React.FC<InteractiveSkillChartProps> = ({ 
  skills, 
  title, 
  color = '#00ffff' 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) - 40;

    const drawRadarChart = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw grid circles
      for (let i = 1; i <= 5; i++) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, (radius / 5) * i, 0, 2 * Math.PI);
        ctx.strokeStyle = `rgba(0, 255, 255, ${0.1 + (i * 0.02)})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Draw grid lines
      const angleStep = (2 * Math.PI) / skills.length;
      for (let i = 0; i < skills.length; i++) {
        const angle = i * angleStep - Math.PI / 2;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, y);
        ctx.strokeStyle = 'rgba(0, 255, 255, 0.2)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Draw skill polygon
      ctx.beginPath();
      for (let i = 0; i < skills.length; i++) {
        const angle = i * angleStep - Math.PI / 2;
        const skillRadius = (skills[i].level / 100) * radius;
        const x = centerX + Math.cos(angle) * skillRadius;
        const y = centerY + Math.sin(angle) * skillRadius;
        
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.closePath();
      ctx.fillStyle = `${color}20`;
      ctx.fill();
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw skill points
      for (let i = 0; i < skills.length; i++) {
        const angle = i * angleStep - Math.PI / 2;
        const skillRadius = (skills[i].level / 100) * radius;
        const x = centerX + Math.cos(angle) * skillRadius;
        const y = centerY + Math.sin(angle) * skillRadius;
        
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
        
        // Draw skill labels
        const labelX = centerX + Math.cos(angle) * (radius + 20);
        const labelY = centerY + Math.sin(angle) * (radius + 20);
        
        ctx.fillStyle = 'white';
        ctx.font = '12px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(skills[i].name, labelX, labelY);
      }
    };

    drawRadarChart();
  }, [skills, color]);

  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <h3 className="text-xl font-mono text-neon-cyan mb-4">{title}</h3>
      <canvas
        ref={canvasRef}
        width={300}
        height={300}
        className="border border-neon-cyan/20 rounded-lg bg-dark-800/50"
      />
      <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="flex justify-between items-center text-gray-300"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 * index }}
          >
            <span>{skill.name}</span>
            <span className="text-neon-cyan font-mono">{skill.level}%</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default InteractiveSkillChart;