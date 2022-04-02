import React from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Saturn = () => {
  const saturn = useLoader(GLTFLoader, "./Saturn.glb");

  return (
    <mesh >
        <primitive object={saturn.scene} scale={0.0023} position={[40, 0, 0]} />
    </mesh>
  )
}

export default Saturn