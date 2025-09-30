import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, Html, OrbitControls } from "@react-three/drei";

/*
  Simple Scene component:
  - Uses primitives (sphere, cylinder, box) to build a placeholder astronaut.
  - Float gives a subtle idle motion.
  - OrbitControls are enabled but limited so the view stays nice.
*/

function AstronautPlaceholder() {
  return (
    <Float floatIntensity={0.6} rotationIntensity={0.5} speed={1}>
      <group position={[0, -0.05, 0]}>
        {/* Helmet */}
        <mesh position={[0, 0.6, 0]}>
          <sphereGeometry args={[0.6, 32, 32]} />
          <meshStandardMaterial metalness={0.2} roughness={0.1} color="#ffffff" />
        </mesh>

        {/* Visor */}
        <mesh position={[0, 0.6, 0.35]}>
          <sphereGeometry args={[0.55, 32, 32]} />
          <meshStandardMaterial color="#0b84ff" transparent opacity={0.95} />
        </mesh>

        {/* Body */}
        <mesh position={[0, -0.2, 0]}>
          <cylinderGeometry args={[0.5, 0.6, 1.0, 18]} />
          <meshStandardMaterial color="#f3f4f6" />
        </mesh>

        {/* Backpack */}
        <mesh position={[0, -0.15, -0.55]}>
          <boxGeometry args={[0.6, 0.7, 0.2]} />
          <meshStandardMaterial color="#e5e7eb" />
        </mesh>

        {/* Arms */}
        <mesh position={[-0.95, 0.1, 0]} rotation={[0, 0, 0.6]}>
          <cylinderGeometry args={[0.12, 0.12, 0.8, 12]} />
          <meshStandardMaterial color="#f3f4f6" />
        </mesh>
        <mesh position={[0.95, 0.1, 0]} rotation={[0, 0, -0.6]}>
          <cylinderGeometry args={[0.12, 0.12, 0.8, 12]} />
          <meshStandardMaterial color="#f3f4f6" />
        </mesh>

        {/* Legs */}
        <mesh position={[-0.25, -1.0, 0]}>
          <cylinderGeometry args={[0.12, 0.12, 0.8, 12]} />
          <meshStandardMaterial color="#f3f4f6" />
        </mesh>
        <mesh position={[0.25, -1.0, 0]}>
          <cylinderGeometry args={[0.12, 0.12, 0.8, 12]} />
          <meshStandardMaterial color="#f3f4f6" />
        </mesh>
      </group>
    </Float>
  );
}

export default function Scene() {
  const canvasRef = useRef();

  // When clicking the 3D area, scroll to projects (simple behavior for beginners)
  const onClick = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="scene-wrap" onClick={onClick}>
      <Canvas className="canvas" camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 3} maxPolarAngle={Math.PI / 1.8} />
        <AstronautPlaceholder />
      </Canvas>

      <HtmlOverlay />
    </div>
  );
}

// Simple HTML label anchored below the canvas (using regular DOM so it's easier)
function HtmlOverlay() {
  return (
    <div className="scene-hint" style={{ pointerEvents: "none" }}>
      Click the astronaut to open projects ↓
    </div>
  );
}
