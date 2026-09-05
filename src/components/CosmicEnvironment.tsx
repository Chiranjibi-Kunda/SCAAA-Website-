import { Canvas, useFrame } from "@react-three/fiber";
import { Sparkles, Stars } from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import type { Group } from "three";

function GalaxyField() {
  const galaxy = useRef<Group>(null);
  const rings = useMemo(() => Array.from({ length: 7 }, (_, index) => ({
    radius: 1.4 + index * 0.65,
    rotation: (index * Math.PI) / 7,
  })), []);

  useFrame((state, delta) => {
    if (!galaxy.current) return;
    galaxy.current.rotation.z += delta * 0.004;
    galaxy.current.rotation.x = 0.4 + state.pointer.y * 0.06;
    galaxy.current.rotation.y = state.pointer.x * 0.08;
  });

  return (
    <group ref={galaxy} position={[2.5, 0.5, -6]} rotation={[0.4, 0, -0.3]}>
      {rings.map((ring, index) => (
        <mesh key={ring.radius} rotation={[0, 0, ring.rotation]}>
          <torusGeometry args={[ring.radius, 0.018 + index * 0.004, 8, 120]} />
          <meshBasicMaterial color={index % 2 ? "#7ab9ff" : "#d9ecff"} transparent opacity={0.24 - index * 0.016} />
        </mesh>
      ))}
      <mesh>
        <sphereGeometry args={[0.46, 32, 32]} />
        <meshBasicMaterial color="#d9edff" transparent opacity={0.82} />
      </mesh>
    </group>
  );
}

function ObservatoryTelescope() {
  const telescope = useRef<Group>(null);

  useFrame((state) => {
    if (!telescope.current) return;
    telescope.current.rotation.y = -0.42 + state.pointer.x * 0.12;
    telescope.current.rotation.x = 0.05 + state.pointer.y * 0.04;
  });

  return (
    <group ref={telescope} position={[3.5, 0.15, -1.4]} rotation={[0.08, -0.42, -0.18]} scale={0.82}>
      <mesh position={[0, -1.4, 0]}>
        <cylinderGeometry args={[0.08, 0.14, 1.8, 16]} />
        <meshStandardMaterial color="#182a48" metalness={0.8} roughness={0.3} />
      </mesh>
      <mesh position={[0, -2.22, 0]}>
        <cylinderGeometry args={[0.68, 0.96, 0.22, 32]} />
        <meshStandardMaterial color="#10192d" metalness={0.7} roughness={0.4} />
      </mesh>
      <group position={[0, -0.45, 0]} rotation={[0.18, 0, -0.52]}>
        <mesh rotation={[0, Math.PI / 2, 0]}>
          <cylinderGeometry args={[0.32, 0.39, 2.7, 32]} />
          <meshStandardMaterial color="#243c62" metalness={0.88} roughness={0.24} />
        </mesh>
        <mesh position={[1.43, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
          <cylinderGeometry args={[0.41, 0.41, 0.14, 32]} />
          <meshStandardMaterial color="#a8dafd" emissive="#457ebb" emissiveIntensity={0.35} metalness={0.6} roughness={0.2} />
        </mesh>
        <mesh position={[-1.34, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
          <cylinderGeometry args={[0.23, 0.31, 0.28, 24]} />
          <meshStandardMaterial color="#10192d" metalness={0.8} roughness={0.35} />
        </mesh>
      </group>
      <pointLight color="#81c5ff" intensity={4} distance={6} position={[1.15, -0.25, 0]} />
    </group>
  );
}

function Scene() {
  return (
    <>
      <color attach="background" args={["#02040e"]} />
      <fog attach="fog" args={["#02040e", 7, 22]} />
      <Stars radius={90} depth={50} count={2600} factor={3.1} saturation={0.2} fade speed={0.18} />
      <Sparkles count={180} scale={[14, 8, 8]} size={1.5} speed={0.12} color="#b9dcff" opacity={0.5} />
      <ambientLight intensity={0.45} />
      <directionalLight color="#a8d8ff" intensity={1.4} position={[3, 4, 4]} />
      <GalaxyField />
      <ObservatoryTelescope />
    </>
  );
}

export function CosmicEnvironment() {
  return (
    <div className="cosmic-canvas" aria-hidden="true">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 8], fov: 52 }} gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}>
        <Suspense fallback={null}><Scene /></Suspense>
      </Canvas>
    </div>
  );
}
