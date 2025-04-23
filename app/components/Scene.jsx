'use client';

import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import '../css/SceneCSS.css';
import Model from './Model';
import { Environment, Backdrop, OrthographicCamera } from "@react-three/drei";
import { useControls } from "leva";
import { h1 } from "framer-motion/client";
import SceneCSS from "./Scene.module.css"

export default function Scene() {
    const canvasRef = useRef(null);
    const CameraProps = {  
        near: 1,
        far: 10000
    }

    return (
        // <Canvas ref={canvasRef} className="Canvas" style={{ height: "80vh" }}>
        //     <directionalLight intensity={3} position={[0, 3, 2]}/>
        //     <Environment preset="city"/>
        //     <Model />
        //     <OrthographicCamera {...CameraProps} position={[0, 0, 1000]}></OrthographicCamera>
        // </Canvas>
        <h1 className={SceneCSS.txt}>PORTOFOLIO</h1>
    )
}