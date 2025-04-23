'use client';
import { motion } from "framer-motion";
import { useRef, useState } from "react";

export default function MagneticHover( { children }:any ) {
    
    const ref:any = useRef(null);
    const [position , setPostion] = useState({ x:0, y:0 });

    const mouseMove = (e: any) => {
        const { clientX, clientY } = e;
        const { width, height, left, top } = ref.current.getBoundingClientRect();
        const x = (clientX - (left + width / 2))/3;
        const y = clientY - (top + height / 2);
        setPostion({ x, y });
    }

    const mouseLeave = (e: any) => {
        setPostion({ x:0, y:0 });
    }

    const { x, y } = position;

    return (
        <motion.div
            onMouseMove={mouseMove}
            onMouseLeave={mouseLeave}
            ref={ref}
            animate={{ x, y }}
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