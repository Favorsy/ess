import type { NextPage } from 'next'
import Head from 'next/head'
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";
import { Suspense } from "react";
import { connect } from 'react-redux';

// ! COMPONENTS
import Sun from "@comps/Sun";
import Moon from "@comps/Moon";
import Mercury from '@comps/Mercury';
import Venus from '@comps/Venus';
import Earth from "@comps/Earth";
import Mars from "@comps/Mars";
import Jupiter from "@comps/Jupiter";
import Saturn from "@comps/Saturn";
import Uranus from "@comps/Uranus";
import Neptune from "@comps/Neptune";

const Model = () => {

  return (
    <group position={[0, 0, 0]} >
      <Sun />
      <Mercury />
      <Venus />
      <Earth />
      <Moon />
      <Mars />
      <Jupiter />
      <Saturn />
      <Uranus />
      <Neptune />
    </group>
  );

};

const Home: NextPage = () => {

  return (

    <div className="bg-black w-screen h-screen text-white">


      <Head>
        <title>Explore Solar System</title>
        <meta name="description" content="This Web Application Can " />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Canvas onCreated={() => console.log("tst")}>

        <Suspense fallback={null}>

          <Stars depth={300} count={35000} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Model />
          <OrbitControls  />

        </Suspense>

      </Canvas>


      <div className="fixed bottom-0 w-64 text-justify">
        Planets may look like American soccer balls.
        This problem is caused by the FOV. Reducing
        objects with the mouse wheel or changing position
        of the Camera with the right click can work.
      </div>

      <div className="fixed top-0 right-0 text-gray-300">
        ALPHA 2.1 (Full Version Coming Soon!)
      </div>

      <div className="fixed top-0 left-0 text-gray-300">
        Click to Earth for Details
      </div>

    </div>
  )
}

export default Home;