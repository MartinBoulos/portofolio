import {motion, useInView, useAnimation} from "framer-motion";
import React, {use, useEffect, useRef, useState } from 'react';

interface Props{
    children: JSX.Element;
    width?: "fit-content";
}

export const FadeIn = ({ children, width = "fit-content"}: Props) => {
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
    <div ref={ref} style={{ width: width, overflow: "visible" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        }}
        initial = "hidden"
        animate = {mainControls}
        transition={{ duration: 2 }}
      >{children}</motion.div>
    </div>
  );
};