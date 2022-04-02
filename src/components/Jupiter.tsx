import React from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Jupiter = () => {
  const jupiter = useLoader(GLTFLoader, "./Jupiter.glb");

  return (
    <mesh >
        <primitive object={jupiter.scene} scale={0.0025} position={[30, 0, 5]} />
    </mesh>
  )
}

export default Jupiter