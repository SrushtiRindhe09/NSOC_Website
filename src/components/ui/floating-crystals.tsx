"use client";

import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, Sparkles } from "@react-three/drei";
import * as THREE from "three";

function Crystal({ position, scale, color, speed }: { position: [number, number, number], scale: number, color: string, speed: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01 * speed;
      meshRef.current.rotation.y += 0.015 * speed;
    }
  });

  return (
    <Float speed={2 * speed} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 0]} />
        <meshPhysicalMaterial
          color={color}
          transmission={0.9}
          opacity={1}
          metalness={0.1}
          roughness={0.1}
          ior={1.5}
          thickness={2}
          specularIntensity={1}
          envMapIntensity={1}
        />
      </mesh>
    </Float>
  );
}

export function FloatingCrystals() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#a5f3fc" />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#e879f9" />
        
        {/* Ice crystals */}
        <Crystal position={[-5, 2, -2]} scale={1.5} color="#e0f2fe" speed={0.8} />
        <Crystal position={[6, -3, -5]} scale={2} color="#bae6fd" speed={0.5} />
        <Crystal position={[-7, -4, -8]} scale={2.5} color="#fbcfe8" speed={0.4} />
        <Crystal position={[5, 4, -4]} scale={1.2} color="#7dd3fc" speed={1.2} />
        
        <Sparkles count={50} scale={12} size={2} speed={0.4} opacity={0.5} color="#e0f2fe" />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
