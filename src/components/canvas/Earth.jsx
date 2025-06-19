// import React, { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

// import CanvasLoader from "../Loader";

// const Earth = () => {
//   const earth = useGLTF("./planet/scene.gltf");

//   return (
//     <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
//   );
// };

// const EarthCanvas = () => {
//   return (
//     <Canvas
//       shadows
//       frameloop='demand'
//       dpr={[1, 2]}
//       gl={{ preserveDrawingBuffer: true }}
//       camera={{
//         fov: 45,
//         near: 0.1,
//         far: 200,
//         position: [-4, 3, 6],
//       }}
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls
//           autoRotate
//           enableZoom={false}
//           maxPolarAngle={Math.PI / 2}
//           minPolarAngle={Math.PI / 2}
//         />
//         <Earth />

//         <Preload all />
//       </Suspense>
//     </Canvas>
//   );
// };

// export default EarthCanvas;










import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");

  useEffect(() => {
    if (!earth.scene) return;

    const cleanGeometry = (geometry) => {
      if (!geometry.attributes.position) return;
      
      const positions = geometry.attributes.position.array;
      let hadNaN = false;
      
      // Replace any NaN values with 0
      for (let i = 0; i < positions.length; i++) {
        if (isNaN(positions[i])) {
          positions[i] = 0;
          hadNaN = true;
        }
      }
      
      if (hadNaN) {
        console.warn("Cleaned NaN values from geometry");
        geometry.attributes.position.needsUpdate = true;
      }
      
      // Compute bounding volume with fallback
      try {
        geometry.computeBoundingSphere();
      } catch (e) {
        console.warn("Using fallback bounding sphere");
        geometry.boundingSphere = new THREE.Sphere(
          new THREE.Vector3(),
          2.5 * 1.5 // Scale factor * approximate radius
        );
      }
    };

    earth.scene.traverse((child) => {
      if (child.isMesh && child.geometry) {
        cleanGeometry(child.geometry);
        
        // Ensure materials are properly configured
        if (Array.isArray(child.material)) {
          child.material.forEach(mat => mat.side = THREE.DoubleSide);
        } else {
          child.material.side = THREE.DoubleSide;
        }
      }
    });

  }, [earth.scene]);

  return (
    <primitive 
      object={earth.scene} 
      scale={2.5} 
      position-y={0} 
      rotation-y={0} 
    />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ 
        preserveDrawingBuffer: true,
        antialias: true,
        powerPreference: "high-performance"
      }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <ambientLight intensity={0.5} />
        <directionalLight 
          position={[1, 1, 1]} 
          intensity={1.5} 
          castShadow
        />
        <OrbitControls
          autoRotate
          autoRotateSpeed={3}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;