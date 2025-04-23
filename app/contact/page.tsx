"use client";
import { withRouter } from "next/router";
import PageCSS from "./page.module.css";
import { useEffect, useState } from "react";
import { animate, delay, motion } from "framer-motion";
import Image from "next/image";
import exp from "constants";
import { transform } from "next/dist/build/swc";
import { Svg } from "@react-three/drei";
import path from "path";
import Link from "next/link";

const CheckVarients = {
  hidden: {
    x: -5,
    y: -5,
    opacity: 0,
    pathLength: 0,
    transition: {
      duration: 0.3,
    },
  },
  copied: {
    x: -5,
    y: -5,
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 0.3,
    },
  },
};
const SvgCheckVarients = {
  hidden: {
    pathLength: 0,
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
  copied: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 0.3,
    },
  },
};

function ContactPage() {
  //gets mouse position
  const [mousePos, setMousePos]: any = useState({
    x: 0,
    y: 0,
  });

  //moves the mouse
  useEffect(() => {
    const mouseMove = (e: any) => {
      setMousePos({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  //set cursor variant (normal & pointer)
  const [cursorVariant, setCursorVariant]: any = useState("default");
  //change cursor functions
  const expandCursor = () => setCursorVariant("expanded");
  const shrinkCursor = () => setCursorVariant("default");

  //assigning the variants of the cursor
  const CursorVariants = {
    default: {
      x: mousePos.x - 5,
      y: mousePos.y - 5,
    },
    expanded: {
      height: 100,
      width: 100,
      x: mousePos.x - 50,
      y: mousePos.y - 50,
      backgroundColor: "rgba(255,255,255,0.4)",
      border: "2px solid white",
    },
    hidden: {
      x: mousePos.x - 5,
      y: mousePos.y - 5,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const [checkVariant, setCheckVariant] = useState("hidden");
  const [svgCheckVariant, setSvgCheckVariant] = useState("hidden");

  const [isHover, setIsHover] = useState(false);

  const copy = () => {
    setCheckVariant("copied");
    setSvgCheckVariant("copied");
    setCursorVariant("hidden");

    setTimeout(() => {
      setCheckVariant("hidden");
      setSvgCheckVariant("hidden");
      setCursorVariant("default");
    }, 1000);
  };

  return (
    <body className={PageCSS.bodyContact}>
      <ol className={PageCSS.contacts} style={{ padding: 0 }}>
        <li>
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className={PageCSS.icon}
          >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg> */}
          <h2>Email</h2>
          <div onClick={async () => {
              await navigator.clipboard.writeText("martin.roufaeil@gmail.com");
              copy();
            }}>
            <p>martin.roufaeil@gmail.com</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className={PageCSS.copyIcon}
            >
              <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
              <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
            </svg>
          </div>
        </li>
        <li>
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className={PageCSS.phoneIcon}
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg> */}
          <h2>Phone</h2>
          <div onClick={async () => {
              await navigator.clipboard.writeText("+201000208676");
              copy();
            }}>
            <p>+20 1000208676</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className={PageCSS.copyIcon}
            >
              <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
              <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
            </svg>
          </div>
        </li>
        <li>
          <h2>LinkedIn</h2>
          <Link
            href={"https://www.linkedin.com/in/martin-roufaeil-55906b309/"}
            className={PageCSS.Link}
          >
            visit page
          </Link>
        </li>
      </ol>
      <div className={PageCSS.waveContact}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className={PageCSS.shapeFill}
          ></path>
        </svg>
        <div className={PageCSS.waveFill} />
      </div>
      <motion.div
        className={PageCSS.cursorContainer}
        variants={CursorVariants}
        animate={cursorVariant}
        transition={{ type: "tween", ease: "circOut" }}
      >
        <motion.div className={PageCSS.cursor}></motion.div>
        <motion.svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className={PageCSS.cursorCheck}
          variants={CheckVarients}
          initial={checkVariant}
          animate={checkVariant}
          transition={{ duration: 1 }}
        >
          <motion.path
            d="M1 7L6 12L17 1"
            variants={SvgCheckVarients}
            initial={svgCheckVariant}
            animate={svgCheckVariant}
            transition={{ duration: 1 }}
          />
        </motion.svg>
      </motion.div>
    </body>
  );
}

export default ContactPage;
