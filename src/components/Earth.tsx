import React from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { connect } from "react-redux";
import setIsRendering from "../redux/setIsRendering";

const Earth = (props: any) => {
    
    const earth = useLoader(GLTFLoader, "./Earth.glb");

    return (
        <mesh>
            <primitive
                object={earth.scene}
                scale={0.0004}
                position={[15, 0, -5]}
            />
        </mesh>
    );
};

export default Earth
