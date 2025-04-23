"use client";

import {motion, useInView, useAnimation} from "framer-motion";
import React, {use, useEffect, useRef, useState } from 'react';

interface Props{
  textAlign?: "center";
  children: JSX.Element;
  width?: "fit-content" | "100%";
}

export const Reveal = ({ children, width = "fit-content", textAlign }: Props) => {
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
        <div style={{ textAlign: textAlign }}>
            <motion.div
                ref={ref}
                variants={{
                  hidden: { opacity: 0 , y: 75},
                  visible: { opacity: 1 , y: 0}
                }}
                initial = "hidden"
                animate = {mainControls}
                transition={{ duration: 0.5 }}
            >{children}</motion.div>
        </div>
    );
}