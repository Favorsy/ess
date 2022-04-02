import React from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Venus = () => {
  const venus = useLoader(GLTFLoader, "./Venus.glb");

  return (
    <mesh >
        <primitive object={venus.scene} scale={0.0004} position={[10, 0, -3]} />
    </mesh>
  )
}

export default Venus