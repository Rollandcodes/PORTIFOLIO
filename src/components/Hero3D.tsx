"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef, useMemo, Component, ErrorInfo, ReactNode } from "react";
import * as THREE from "three";
import { Float, Points, PointMaterial } from "@react-three/drei";

class ErrorBoundary extends Component<{children: ReactNode, fallback: ReactNode}, {hasError: boolean}> {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn("WebGL or Canvas failed to initialize:", error.message);
  }
  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

function ParticleCloud() {
  const ref = useRef<THREE.Points>(null);
  const count = 3000;
  
  const positions = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      p[i] = (Math.random() - 0.5) * 15;
    }
    return p;
  }, [count]);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta * 0.05;
      ref.current.rotation.y -= delta * 0.07;
    }
  });

  return (
    <group rotation={[10, 10, 15]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#10B981"
          size={0.03}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function FloatingShape() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(t / 2) * 0.5;
      meshRef.current.rotation.x = Math.cos(t / 2) * 0.5;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[2, 1]} />
        <meshPhysicalMaterial
          color="#050505"
          emissive="#0A0A0A"
          roughness={0.2}
          metalness={0.8}
          wireframe={true}
          wireframeLinewidth={2}
        />
      </mesh>
    </Float>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-background/90 pointer-events-none">
      <ErrorBoundary fallback={<div className="absolute inset-0 bg-[#050505]/50 z-10" />}>
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
          <fog attach="fog" args={["#050505", 5, 15]} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} color="#10B981" />
          <ParticleCloud />
          <FloatingShape />
        </Canvas>
      </ErrorBoundary>
      <div className="absolute inset-0 bg-background/40 z-10" />
    </div>
  );
}
