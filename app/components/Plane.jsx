import { useGLTF, Text, MeshTransmissionMaterial } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useEffect, useLayoutEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useControls } from "leva";
// import { OrthographicCamera } from "@react-three/drei";

export default function Plane() {
    const mesh = useRef(null)
    const { nodes } = useGLTF("/models/plane.glb")
    const { viewport } = useThree();

    // const materialProps = useControls({
    //     thickness: { value: 0, min: 0, max: 3, step: 0.05 },
    //     roughness: { value: 1, min: 0, max: 1, step: 0.1 },
    //     transmission: { value: 0, min: 0, max: 1, step: 0.1 },
    //     ior: { value: 1, min: 0, max: 3, step: 0.1 },
    //     chromaticAberration: { value: 0, min: 0, max: 1 },
    //     backside: { value: false }
    // })

    const materialProps = {
        thickness: 0,
        roughness: 1,
        transmission: 0,
        ior: 1,
        chromaticAberration: 0,
        backside: false
    }

    useEffect(() => {
        mesh.current.rotation.x = 1
    },[])
    return (
        <group scale={viewport.width / 1}>
            <mesh ref={mesh} {...nodes.Plane} scale={1} position={[0,0,-6]}>
                <MeshTransmissionMaterial {...materialProps} color="#22183b"/>
            </mesh>
        </group>
    )
}