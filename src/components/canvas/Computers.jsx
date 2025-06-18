import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, SpotLight, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Computers = ({isMobile}) => {
  const computer = useGLTF('/desktop_pc/scene.gltf');

  return (
  

    <mesh>
       <hemisphereLight intensity={0.15} groundColor="black" /> 
       <pointLight intensity={1} />
       <SpotLight position={[-20 , 50 , 10]} 
       angle={0.12}
       intensity={1} 
       castShadow
       shadow-mapSize={1024} />
      <primitive 
        object={computer.scene}
        scale={isMobile ? 0.6: 0.75}
        position={isMobile ? [0,-3.5,-2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
      

    </mesh>
  );
};

const ComputersCanvas = () => {
   // 1️⃣ Create a state variable to track if the screen is in mobile size
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // 2️⃣ Create a media query that checks if the screen width is 500px or less
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // 3️⃣ Define a function that will run when the screen size changes
    const handleMediaQueryChange = (e) => {
      // `e.matches` is true if the screen is 500px or smaller
      setIsMobile(e.matches);
    };

    // 4️⃣ Set the initial value of isMobile when the component first loads
    // This handles the case when the user loads the site directly on a small or large screen
    setIsMobile(mediaQuery.matches);

    // 5️⃣ Add the event listener to watch for screen size changes (resizing)
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // 6️⃣ Cleanup function: This removes the event listener when the component unmounts
    // It prevents memory leaks or multiple listeners piling up
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []); // 7️⃣ Empty array → runs only once when the component is mounted

  // ✅ Now you can use `isMobile` in your component to make things responsive

//   | Line                                   | When it runs                         | What it does                                            |
// | -------------------------------------- | ------------------------------------ | ------------------------------------------------------- |
// | **Line B** `setIsMobile(...)`          | Once on page load                    | Checks and sets `isMobile` based on current screen size |
// | **Line C** `addEventListener(...)`     | Once on page load                    | Starts watching for screen resizes                      |
// | **Line A** `handleMediaQueryChange(e)` | Every time screen size crosses 500px | Updates `isMobile`                                      |
// | **Line D** `removeEventListener(...)`  | When component unmounts (disappears) | Stops watching screen size                              |


  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: isMobile ? [18, 2, 5] : [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;



