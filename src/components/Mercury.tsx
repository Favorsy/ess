import React from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Mercury = () => {
  const mercury = useLoader(GLTFLoader, "./Mercury.glb");

  return (
    <mesh >
        <primitive object={mercury.scene} scale={0.0004} position={[5, 0, 0]} />
    </mesh>
  )
}

export default Mercury