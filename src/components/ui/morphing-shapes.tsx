"use client";

import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function Shape({ activeStep }: { activeStep: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const targetRotation = useRef({ x: 0, y: 0 });
  const scale = useRef(1);

  useEffect(() => {
    targetRotation.current.x = activeStep * Math.PI * 0.5;
    targetRotation.current.y = activeStep * Math.PI * 0.25;
    scale.current = 1.2;
    const timeout = setTimeout(() => { scale.current = 1; }, 300);
    return () => clearTimeout(timeout);
  }, [activeStep]);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetRotation.current.x, 5 * delta);
      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetRotation.current.y, 5 * delta);
      meshRef.current.scale.setScalar(THREE.MathUtils.lerp(meshRef.current.scale.x, scale.current, 10 * delta));
      
      // Auto-rotation
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.01;
    }
  });

  const colors = ["#22d3ee", "#c084fc", "#fb923c", "#facc15"];
  const targetColor = colors[activeStep % colors.length];

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh ref={meshRef}>
        {activeStep === 0 && <torusGeometry args={[1.5, 0.4, 32, 64]} />}
        {activeStep === 1 && <octahedronGeometry args={[1.8, 0]} />}
        {activeStep === 2 && <dodecahedronGeometry args={[1.6, 0]} />}
        {activeStep === 3 && <torusKnotGeometry args={[1.2, 0.4, 100, 16]} />}
        
        <MeshDistortMaterial
          color={targetColor}
          envMapIntensity={1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          metalness={0.8}
          roughness={0.2}
          distort={0.2}
          speed={2}
        />
      </mesh>
    </Float>
  );
}

export function MorphingShapes({ activeStep }: { activeStep: number }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="w-full h-[400px] md:h-full min-h-[400px]">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#e879f9" />
        <Shape activeStep={activeStep} />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
