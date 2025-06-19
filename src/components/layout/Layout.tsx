import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CustomCursor from '../ui/CustomCursor';
import ScrollProgress from '../ui/ScrollProgress';
import InteractiveBackground from '../3d/InteractiveBackground';
import FloatingParticles from '../ui/FloatingParticles';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-dark-900 text-white overflow-x-hidden">
      {/* Background Effects */}
      <InteractiveBackground />
      <FloatingParticles count={30} speed={0.3} />
      
      {/* UI Elements */}
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      
      {/* Main Content */}
      <main className="relative z-10">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;