import React, { Suspense } from 'react';
import ParticleSystem from './ParticleSystem';
import FloatingElements from './FloatingElements';

const InteractiveBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Suspense fallback={null}>
        <ParticleSystem />
        <FloatingElements />
      </Suspense>
    </div>
  );
};

export default InteractiveBackground;