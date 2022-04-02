import React from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Sun = () => {
  const sun = useLoader(GLTFLoader, "./Sun.glb");

  return (
    <mesh >
        <primitive object={sun.scene} scale={0.005} position={[0, 0, 0]} />
    </mesh>
  )
}

export default Sun