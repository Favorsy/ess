import React from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Uranus = () => {
  const uranus = useLoader(GLTFLoader, "./Uranus.glb");

  return (
    <mesh >
        <primitive object={uranus.scene} scale={0.0015} position={[50, 0, 2]} />
    </mesh>
  )
}

export default Uranus