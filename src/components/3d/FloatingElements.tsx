import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Box, Torus } from '@react-three/drei';
import * as THREE from 'three';

const FloatingShape: React.FC<{ position: [number, number, number]; type: string }> = ({ 
  position, 
  type 
}) => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.5;
      ref.current.rotation.y = state.clock.elapsedTime * 0.3;
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  const material = (
    <meshStandardMaterial
      color="#00ffff"
      transparent
      opacity={0.6}
      wireframe
      emissive="#00ffff"
      emissiveIntensity={0.2}
    />
  );

  switch (type) {
    case 'sphere':
      return (
        <Sphere ref={ref} position={position} args={[0.5, 32, 32]}>
          {material}
        </Sphere>
      );
    case 'box':
      return (
        <Box ref={ref} position={position} args={[0.8, 0.8, 0.8]}>
          {material}
        </Box>
      );
    case 'torus':
      return (
        <Torus ref={ref} position={position} args={[0.6, 0.2, 16, 32]}>
          {material}
        </Torus>
      );
    default:
      return null;
  }
};

const FloatingElements: React.FC = () => {
  const shapes = [
    { position: [-3, 2, -2], type: 'sphere' },
    { position: [3, -1, -3], type: 'box' },
    { position: [-2, -2, -1], type: 'torus' },
    { position: [2, 3, -4], type: 'sphere' },
  ] as const;

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        {shapes.map((shape, index) => (
          <FloatingShape
            key={index}
            position={shape.position}
            type={shape.type}
          />
        ))}
      </Canvas>
    </div>
  );
};

export default FloatingElements;