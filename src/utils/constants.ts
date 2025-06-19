export const COLORS = {
  neon: {
    cyan: '#00ffff',
    blue: '#0080ff', 
    green: '#00ff00',
    pink: '#ff0080',
    purple: '#8000ff',
  },
  dark: {
    900: '#000000',
    800: '#0a0a0a',
    700: '#1a1a1a',
    600: '#2a2a2a',
  }
};

export const ANIMATION_VARIANTS = {
  fadeInUp: {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
    }
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  },
  glitchIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  }
};

export const SKILLS_DATA = {
  technical: [
    { name: 'Python', level: 90 },
    { name: 'Java', level: 85 },
    { name: 'JavaScript', level: 88 },
    { name: 'React', level: 85 },
    { name: 'HTML5', level: 95 },
    { name: 'CSS3', level: 90 },
    { name: 'TypeScript', level: 80 },
    { name: 'Node.js', level: 75 }
  ],
  design: [
    { name: 'Photoshop', level: 85 },
    { name: 'After Effects', level: 80 },
    { name: 'DaVinci Resolve', level: 75 },
    { name: 'Canva', level: 90 },
    { name: 'Figma', level: 70 }
  ],
  soft: [
    { name: 'Leadership', level: 95 },
    { name: 'Communication', level: 90 },
    { name: 'Event Management', level: 85 },
    { name: 'Team Work', level: 88 },
    { name: 'Problem Solving', level: 92 }
  ]
};

export const EXPERIENCE_DATA = [
  {
    title: 'Digital Marketing & Web Development Handle',
    company: 'IIT',
    period: '2025 - Present',
    description: 'Leading digital marketing initiatives and web development projects for the institute.',
    type: 'work'
  },
  {
    title: 'Chief Marketing Officer',
    company: 'LunarLync.lk',
    period: '2024 - 2025',
    description: 'Spearheaded marketing strategies and brand development for innovative tech startup.',
    type: 'work'
  },
  {
    title: 'Clothing Brand Owner',
    company: 'Cupid.lk',
    period: '2023 - Present',
    description: 'Founded and managing a successful clothing brand with focus on modern designs.',
    type: 'entrepreneurship'
  },
  {
    title: 'Administrative Associate',
    company: 'ChirathVision Production House',
    period: '2020 - 2023',
    description: 'Managed administrative operations and supported creative production processes.',
    type: 'work'
  }
];

export const PROJECTS_DATA = [
  {
    title: 'PhysioConnect',
    description: 'Cross-platform physiotherapy application connecting patients with therapists',
    tech: ['React Native', 'Node.js', 'MongoDB', 'Socket.io'],
    image: 'https://images.pexels.com/photos/4506105/pexels-photo-4506105.jpeg?auto=compress&cs=tinysrgb&w=800',
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'OnScreen 25\' Website',
    description: 'Official website for the international short film festival',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800',
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Real Estate Platform',
    description: 'Interactive real estate webpage with advanced filtering and maps',
    tech: ['React', 'Mapbox GL', 'Node.js', 'PostgreSQL'],
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Student Hub',
    description: 'Desktop application for student management and communication',
    tech: ['Java', 'JavaFX', 'SQLite', 'JUnit'],
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
    demoUrl: '#',
    githubUrl: '#'
  }
];