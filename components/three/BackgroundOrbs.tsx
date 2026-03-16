'use client'

import { useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface OrbProps {
  position: [number, number, number]
  color: string
  size: number
  speed: number
  offset: number
}

function Orb({ position, color, size, speed, offset }: OrbProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const basePos = useRef(position)

  useFrame(({ clock }) => {
    if (!meshRef.current) return
    const t = clock.getElapsedTime()
    meshRef.current.position.x = basePos.current[0] + Math.sin(t * speed + offset) * 1.5
    meshRef.current.position.y = basePos.current[1] + Math.cos(t * speed * 0.7 + offset) * 1.2
    meshRef.current.position.z = basePos.current[2] + Math.sin(t * speed * 0.5 + offset) * 0.8
  })

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[size, 16, 16]} />
      <meshBasicMaterial color={color} transparent opacity={0.7} />
    </mesh>
  )
}

const orbConfigs: OrbProps[] = [
  { position: [-6, 3, -10], color: '#1A0B3D', size: 8, speed: 0.12, offset: 0 },
  { position: [7, -4, -12], color: '#0A1A4A', size: 10, speed: 0.09, offset: 1.5 },
  { position: [0, 6, -8], color: '#2A0630', size: 7, speed: 0.15, offset: 3 },
  { position: [-4, -5, -9], color: '#051C30', size: 9, speed: 0.11, offset: 0.8 },
  { position: [5, 2, -11], color: '#0D1A2A', size: 6, speed: 0.13, offset: 2.2 },
]

function OrbScene() {
  return (
    <>
      <ambientLight intensity={0.1} />
      {orbConfigs.map((orb, i) => (
        <Orb key={i} {...orb} />
      ))}
    </>
  )
}

/** Three.js ambient orb background — lazy-loaded, SSR disabled */
export default function BackgroundOrbs() {
  return (
    <div
      className="fixed inset-0 z-0"
      style={{
        filter: 'blur(80px)',
        pointerEvents: 'none',
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent', pointerEvents: 'none' }}
        gl={{ alpha: true, antialias: false }}
      >
        <OrbScene />
      </Canvas>
    </div>
  )
}
