"use client";

import {motion, useInView, useAnimation} from "framer-motion";
import React, {use, useEffect, useRef, useState } from 'react';

interface Props{
    children: JSX.Element;
    width?: "fit-content";
}

export const SlideInRight = ({ children, width = "fit-content"}: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const mainControls = useAnimation();

    useEffect (() => {
      if (isInView){
        mainControls.start("visible");
      }
    //console.log(isInView);
    },[isInView])
    
  return(
    <div ref={ref} style={{ width: width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0 , x: 300, display: "flex", justifyContent: "center" },
          visible: { opacity: 1 , x: 0, display: "flex", justifyContent: "center"}
        }}
        initial = "hidden"
        animate = {mainControls}
        transition={{ duration: 1.5 }}
      >{children}</motion.div>
    </div>
  );
};