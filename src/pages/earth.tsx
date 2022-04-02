import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import { useLoader, Canvas } from "@react-three/fiber";
import { Stars, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { IoMdClose } from "react-icons/io";
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { FiRotateCw } from "react-icons/fi";
import Slider from "@mui/material/Slider";
import Divider from "@mui/material/Divider";
import { useNumberWithDot } from "@utils/hooks";

const object = {
    name: "Earth",
    type: "Planet",
    details: `
    Earth is the third planet from the Sun and the only astronomical object known to harbor life. 
While large amounts of water can be found throughout the Solar System, only Earth sustains liquid surface water. 
About 71% of Earth's surface is made up of the ocean, dwarfing Earth's polar ice, lakes and rivers. 
The remaining 29% of Earth's surface is land, consisting of continents and islands. 
Earth's surface layer is formed of several slowly moving tectonic plates, interacting to produce mountain ranges, volcanoes and earthquakes. 
Earth's liquid outer core generates the magnetic field that shapes Earth's magnetosphere, deflecting destructive solar winds.`,
    distance: 149597870700,
    circumference: 40075,
    dayCount: 365,
    rotationSpeed: 1674.4,
};

const Earth: NextPage = () => {
    const [starCount, setStarCount] = React.useState("5000"),
        [starDepth, setStarDepth] = React.useState("50"),
        [autoRotate, setAutoRotate] = React.useState(true),
        [moonShow, setMoonShow] = React.useState(false);

    const Model = () => {
        const earth = useLoader(GLTFLoader, "./Earth.glb");
        const moon = useLoader(GLTFLoader, "./Moon.glb");

        return (
            <group position={[0, 0, 0]}>
                <mesh onClick={() => console.log("reast")}>
                    <primitive
                        object={earth.scene}
                        scale={0.004}
                        position={[0, 0, 0]}
                    />
                </mesh>
                {moonShow === true && (
                    <mesh onClick={() => console.log("reast")}>
                        <primitive
                            object={moon.scene}
                            scale={0.0005}
                            position={[3, 1, 0]}
                        />
                    </mesh>
                )}
            </group>
        );
    };

    return (
        <div className="bg-black w-screen h-screen lg:flex">
            <Head>
                <title>{object.name}</title>
            </Head>

            <Canvas className="w-[65%] h-full">
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <Stars
                    count={Number(starCount.replace(".", ""))}
                    depth={Number(starDepth)}
                />
                <OrbitControls autoRotate={autoRotate} />
                <React.Suspense fallback={null}>
                    <Model />
                </React.Suspense>
            </Canvas>

            <div className="w-[35%] bg-neutral-900 h-full">
                <nav className="h-[8%] border-b border-neutral-800 flex text-gray-300 items-center space-x-2 mx-2 text-center select-none">
                    <button>
                        <IoMdClose className="text-2xl" />
                    </button>
                    <h1 className="text-xl text-center">About {object.name}</h1>
                </nav>

                <div className="h-[65%] overflow-y-scroll mx-2 text-white space-y-3">
                    <div className="flex justify-between px-3">
                        <section>
                            <p className="text-lg font-semibold">Name</p>
                            <p>{object.name}</p>
                        </section>
                        <section>
                            <p className="text-lg font-semibold">Type</p>
                            <p>{object.type}</p>
                        </section>
                    </div>
                    <span className="flex flex-col px-3">
                        <p className="text-lg font-semibold">Details</p>
                        <p>{object.details}</p>
                    </span>
                    <div className="flex justify-between px-3">
                        <section>
                            <p className="text-lg font-semibold">Distance From <br /> the Sun</p>
                            <p>{useNumberWithDot(object.distance)} KM</p>
                        </section>
                        <section>
                            <p className="text-lg font-semibold">Circumference</p>
                            <p>{useNumberWithDot(object.circumference)} KM</p>
                        </section>
                    </div>
                    <div className="flex justify-between px-3">
                        <section>
                            <p className="text-lg font-semibold">Day Count</p>
                            <p>{object.dayCount}</p>
                        </section>
                        <section>
                            <p className="text-lg font-semibold">Rotation Speed</p>
                            <p>{useNumberWithDot(object.rotationSpeed)} KM/H</p>
                        </section>
                    </div>
                </div>

                <div className="h-[12%] flex border-t border-neutral-800 mx-2 text-white select-none justify-between">
                    <section className="w-1/3 flex flex-col justify-center items-center">
                        <p>Auto Rotate</p>
                        <button onClick={() => setAutoRotate((ar) => !ar)}>
                            {autoRotate === false ? (
                                <FaPlayCircle className="text-3xl" />
                            ) : (
                                <FaPauseCircle className="text-3xl" />
                            )}
                        </button>
                    </section>

                    <Divider
                        orientation="vertical"
                        flexItem
                        className="bg-neutral-800"
                    />

                    <section className="w-1/3 flex flex-col justify-center items-center">
                        <p>Moon</p>
                        <button onClick={() => setMoonShow((ms) => !ms)}>
                            {moonShow === false ? (
                                <HiEye className="text-3xl" />
                            ) : (
                                <HiEyeOff className="text-3xl" />
                            )}
                        </button>
                    </section>

                    <Divider
                        orientation="vertical"
                        flexItem
                        className="bg-neutral-800"
                    />

                    <section className="w-1/3 flex flex-col justify-center items-center">
                        <p>Reset Stars</p>
                        <button onClick={() => { setStarCount("5000"); setStarDepth("50")}}>
                            <FiRotateCw className="text-3xl" />
                        </button>
                    </section>
                </div>

                <div className="h-[15%] border-t border-neutral-800 mx-2 text-white select-none">
                    <p className="text-lg font-semibold">Stars</p>

                    <section className="flex space-x-4">
                        <p>Count</p>
                        <Slider
                            aria-label="Star Count"
                            defaultValue={5000}
                            min={0}
                            max={100000}
                            sx={{
                                width: "55%",
                            }}
                            onChange={(e) =>
                                setStarCount(
                                    useNumberWithDot(
                                        (e.target! as HTMLInputElement)
                                            .value! as string
                                    )
                                )
                            }
                        />
                        <p>{starCount}</p>
                    </section>

                    <section className="flex space-x-4">
                        <p>Depth</p>
                        <Slider
                            aria-label="Star Depth"
                            defaultValue={50}
                            min={0}
                            max={1000}
                            sx={{
                                width: "55%",
                            }}
                            onChange={(e) =>
                                setStarDepth(
                                    (e.target! as HTMLInputElement)
                                        .value! as string
                                )
                            }
                        />
                        <p>{starDepth}</p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Earth;
