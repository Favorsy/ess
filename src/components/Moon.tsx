import React from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Moon = () => {
  const moon = useLoader(GLTFLoader, "./Moon.glb");

  return (
    <mesh >
        <primitive object={moon.scene} scale={0.0004} position={[14, 0, 1]} />
    </mesh>
  )
}

export default Moon