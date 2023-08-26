import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = ({ isMobile }) => {
  const ball = useGLTF("/Green_Ball/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={2.15} groundColor="black" />
      <pointLight intensity={1181} />
      <spotLight
        position={[220, 50, 10]}
        angle={0.1}
        penumbra={1}
        intensity={11121}
        castShadow
        shadow-mapSize={1024}
      />

      <primitive
        object={ball.scene}
        scale={isMobile ? 0.7 : 0.22}
        position={isMobile ? [0, -3, -2.2] : [0, 0, 0]}
        rotation={[-1.01, -2.2, -2.1]}
      />
    </mesh>
    // <primitive object={ball.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const GreenBall = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Ball />
      </Suspense>
    </Canvas>
  );
};

export default GreenBall;
