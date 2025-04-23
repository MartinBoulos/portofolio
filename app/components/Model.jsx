import { useGLTF, Text, MeshTransmissionMaterial } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useControls } from "leva";
import { OrthographicCamera } from "@react-three/drei";
import Plane from "./Plane";

export default function Model({ canvasRef }) {
    
    gsap.registerPlugin(ScrollTrigger);

    const mesh = useRef(null)
    const { nodes } = useGLTF("/models/torus.glb")
    const { viewport } = useThree();

    // const materialProps = useControls({
    //     thickness: { value: 0.3, min: 0, max: 3, step: 0.05 },
    //     roughness: { value: 0.2, min: 0, max: 1, step: 0.1 },
    //     transmission: { value: 1, min: 0, max: 1, step: 0.1 },
    //     ior: { value: 1.1, min: 0, max: 3, step: 0.1 },
    //     chromaticAberration: { value: 0, min: 0, max: 1 },
    //     backside: { value: false }
    // })
    const materialProps = {
        thickness: 0.3,
        roughness: 0.2,
        transmission: 1,
        ior: 1.1,
        chromaticAberration: 0,
        backside: false
    }

    useFrame(() => {
        mesh.current.rotation.x += 0.01
    })  
    let size = 1;
    if(window.innerWidth < 800){
        size = 2.5;
    }
    return (
        <group scale={viewport.width / 14}>
            <Plane />
            <Text fontSize={2.1} font="fonts/Roboto/Roboto-Bold.ttf" position={[0, 0, -1]} color={"#ffffff"}>
                PORTOFOLIO
            </Text>
            <mesh ref={mesh} {...nodes.Torus} scale={size}>
                <MeshTransmissionMaterial {...materialProps}/>
            </mesh>
        </group>
    )
}