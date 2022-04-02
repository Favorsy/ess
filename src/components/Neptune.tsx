import React from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Neptune = () => {
  const neptune = useLoader(GLTFLoader, "./Neptune.glb");

  return (
    <mesh >
        <primitive object={neptune.scene} scale={0.0015} position={[60, 0, 3]} />
    </mesh>
  )
}

export default Neptune