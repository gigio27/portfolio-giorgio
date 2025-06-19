import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'
import { useRef, useMemo } from 'react'

function OrbitingParticles() {
  const ref = useRef()
  const positions = useMemo(() => {
    const count = 1000
    const pos = []
    for (let i = 0; i < count; i++) {
      const radius = 1.2 + Math.random() * 0.8
      const angle = Math.random() * Math.PI * 2
      const y = (Math.random() - 0.5) * 2
      const x = Math.cos(angle) * radius
      const z = Math.sin(angle) * radius
      pos.push(x, y, z)
    }
    return new Float32Array(pos)
  }, [])

  useFrame(() => {
    ref.current.rotation.y += 0.001
  })

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial color="#00B67A" size={0.03} sizeAttenuation depthWrite={false} transparent />
    </Points>
  )
}

const HeroParticles = () => {
  return (
    <div style={{ height: '100vh', width: '100%', background: '#0f0f0f', position: 'relative' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <OrbitingParticles />
      </Canvas>

      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        color: 'white',
        zIndex: 10
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '0.5em' }}>Hi, I'm Giorgio</h1>
        <p style={{ fontSize: '1.25rem' }}>Full Stack Developer — MERN • C# • Python</p>
      </div>
    </div>
  )
}

export default HeroParticles
