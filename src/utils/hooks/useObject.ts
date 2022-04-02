import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { ObjectMap } from "@react-three/fiber";
export const useObject = (object: GLTF & ObjectMap) => object;