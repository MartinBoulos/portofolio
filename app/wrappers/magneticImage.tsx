'use client';
import { motion } from "framer-motion";
import { useRef, useState } from "react";

interface Props{
    width?: "70%" | "auto";
    dragginess?: "medium" | "sticky";
  }

export default function MagneticImage( { children, width, dragginess }:any ) {
    
    const ref:any = useRef(null);
    const [position, setPostion] = useState({ x:0, y:0 });
    const [scale, setScale] = useState(1);

    const mouseMove = (e: any) => {
        const { clientX, clientY } = e;
        const { width, height, left, top } = ref.current.getBoundingClientRect();
        const x = (clientX - (left + width / 2))/parseInt(dragginess);
        const y = (clientY - (top + height / 2))/parseInt(dragginess);
        setPostion({ x, y });
    }

    const mouseLeave = (e: any) => {
        setPostion({ x:0, y:0 });
    }

    const { x, y } = position;

    return (
        <motion.div
            style={{ width: width }}
            onMouseMove={mouseMove}
            onMouseLeave={mouseLeave}
            ref={ref}
            animate={{ x, y, scale }}
            transition={{
                type: "spring",
                stiffness: 500,
                damping: 30,
                mass: 0.1
            }}
        >
            { children }
        </motion.div>
    )
}