"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef, useMemo, Component, ErrorInfo, useEffect, useState } from "react";
import * as THREE from "three";
import { Points, PointMaterial } from "@react-three/drei";

// ─── CSS-only fallback that looks great without WebGL ──────────────────────
function CSSStarfieldFallback() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated gradient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(16,185,129,0.06),transparent)]" />
      {/* Static star dots using CSS */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          radial-gradient(1px 1px at 10% 15%, rgba(255,255,255,0.6) 0%, transparent 100%),
          radial-gradient(1px 1px at 25% 40%, rgba(255,255,255,0.4) 0%, transparent 100%),
          radial-gradient(1px 1px at 40% 8%, rgba(255,255,255,0.5) 0%, transparent 100%),
          radial-gradient(1px 1px at 55% 25%, rgba(255,255,255,0.3) 0%, transparent 100%),
          radial-gradient(1px 1px at 70% 12%, rgba(255,255,255,0.6) 0%, transparent 100%),
          radial-gradient(1px 1px at 85% 35%, rgba(255,255,255,0.4) 0%, transparent 100%),
          radial-gradient(1px 1px at 15% 60%, rgba(255,255,255,0.5) 0%, transparent 100%),
          radial-gradient(1px 1px at 30% 75%, rgba(255,255,255,0.3) 0%, transparent 100%),
          radial-gradient(1px 1px at 60% 55%, rgba(255,255,255,0.6) 0%, transparent 100%),
          radial-gradient(1px 1px at 75% 70%, rgba(255,255,255,0.4) 0%, transparent 100%),
          radial-gradient(1px 1px at 90% 85%, rgba(255,255,255,0.5) 0%, transparent 100%),
          radial-gradient(1px 1px at 5% 90%, rgba(255,255,255,0.3) 0%, transparent 100%),
          radial-gradient(1.5px 1.5px at 45% 80%, rgba(16,185,129,0.7) 0%, transparent 100%),
          radial-gradient(1.5px 1.5px at 80% 50%, rgba(16,185,129,0.5) 0%, transparent 100%),
          radial-gradient(1px 1px at 20% 30%, rgba(255,255,255,0.4) 0%, transparent 100%),
          radial-gradient(1px 1px at 65% 90%, rgba(255,255,255,0.3) 0%, transparent 100%),
          radial-gradient(1px 1px at 35% 55%, rgba(255,255,255,0.5) 0%, transparent 100%),
          radial-gradient(1px 1px at 50% 45%, rgba(255,255,255,0.4) 0%, transparent 100%),
          radial-gradient(1px 1px at 92% 20%, rgba(255,255,255,0.6) 0%, transparent 100%),
          radial-gradient(1px 1px at 8% 45%, rgba(255,255,255,0.3) 0%, transparent 100%)
        `,
      }} />
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-40" />
    </div>
  );
}

// ─── WebGL support detection ────────────────────────────────────────────────
function detectWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    return !!gl;
  } catch {
    return false;
  }
}

// ─── Error Boundary ─────────────────────────────────────────────────────────
class ErrorBoundary extends Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch(error: Error, _info: ErrorInfo) {
    // Suppress the noisy THREE.js WebGL console errors gracefully
    if (typeof window !== "undefined") {
      console.info("Hero3D: WebGL unavailable, using CSS fallback.", error.message);
    }
  }
  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

// ─── ThreeJS Particle Cloud ─────────────────────────────────────────────────
function ParticleCloud() {
  const ref = useRef<THREE.Points>(null);
  const count = 2500;

  const positions = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      p[i] = (Math.random() - 0.5) * 16;
    }
    return p;
  }, []);

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta * 0.04;
      ref.current.rotation.y -= delta * 0.06;
    }
  });

  return (
    <group rotation={[10, 10, 15]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#10B981"
          size={0.025}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.8}
        />
      </Points>
    </group>
  );
}

// ─── Main export ─────────────────────────────────────────────────────────────
export default function Hero3D() {
  const [webglSupported, setWebglSupported] = useState<boolean | null>(null);

  useEffect(() => {
    setWebglSupported(detectWebGL());
  }, []);

  // Server-side and detection pending: render CSS fallback
  if (webglSupported === null || !webglSupported) {
    return (
      <div className="absolute inset-0 z-0 pointer-events-none">
        <CSSStarfieldFallback />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/90" />
      </div>
    );
  }

  // WebGL is available — render Three.js canvas
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <ErrorBoundary fallback={
        <div className="absolute inset-0">
          <CSSStarfieldFallback />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/90" />
        </div>
      }>
        <Canvas
          camera={{ position: [0, 0, 8], fov: 60 }}
          gl={{ antialias: false, powerPreference: "high-performance" }}
          onCreated={({ gl }) => {
            gl.setClearColor(new THREE.Color("#040404"), 1);
          }}
        >
          <fog attach="fog" args={["#040404", 6, 18]} />
          <ambientLight intensity={0.4} />
          <directionalLight position={[10, 10, 5]} intensity={0.8} color="#10B981" />
          <ParticleCloud />
        </Canvas>
      </ErrorBoundary>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/90" />
    </div>
  );
}
