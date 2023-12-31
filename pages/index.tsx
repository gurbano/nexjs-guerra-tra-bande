import React, { useRef, useState } from "react"
import Head from "next/head"
import { Button } from "components/Button/Button"
import { LP_GRID_ITEMS } from "../lp-items"
import { Canvas, useFrame } from '@react-three/fiber'

export default function FOG() {
  return (
    <>
    <Head>
      <meta property="og:url" content="https://next-enterprise.vercel.app/" />
      <meta
        property="og:image"
        content="https://raw.githubusercontent.com/Blazity/next-enterprise/main/project-logo.png"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <title>Fields of glory</title>
    </Head>
    <section className="bg-gray-900 mx-auto">
      <Canvas className="mx-auto h-screen" style={{height: '100vh'}}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
        <mesh scale={1.1}>
          <sphereGeometry/>
          <meshStandardMaterial color="yellow" />
        </mesh>
      </Canvas>
    </section>
    </>
  )
}

function Box(props) {
  // This reference will give us direct access to the mesh
  const meshRef = useRef<THREE.Mesh>()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (meshRef.current!.rotation.x += delta))
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}