import React from 'react'
import {Suspense} from 'react'
import {Canvas} from '@react-three/fiber'
import { OrbitControls,Preload,useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'
const Earth = () => {
  const earth=useGLTF('/planet/scene.gltf')
  return (
   <primitive
   object={earth.scene}
   scale={2.3}
   position-y={0}
   rotation-y={0}/>
  )
}
const EarthCanvas=()=>{
  return (
    <Canvas shadows frameloop='demand' gl={{ preserveDrawingBuffer: true }} camera={{  position: [-4, 3, 6], fov: 45 }}>
  <Suspense fallback={<CanvasLoader />}>
    {/* Lights */}
    <ambientLight intensity={0.5} />
    <directionalLight position={[10, 10, 5]} intensity={1} />

    {/* Controls and Model */}
    <OrbitControls autoRotate enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
    <Earth />
  </Suspense>
</Canvas>

  )
}
export default EarthCanvas;