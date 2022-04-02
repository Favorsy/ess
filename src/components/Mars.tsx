import React from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Mars = () => {
  const mars = useLoader(GLTFLoader, "./Mars.glb");

  return (
    <mesh >
        <primitive object={mars.scene} scale={0.0004} position={[20, 0, -2]} />
    </mesh>
  )
}

export default Mars