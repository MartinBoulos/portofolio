'use client';

import Image from 'next/image';
import './page.css';
import './parallax.css';
import './waveCSS.css';
import Link from 'next/link';
import React, {useEffect, useLayoutEffect, useRef, useState } from 'react';
import {motion, useInView, useAnimation, backOut, circOut} from "framer-motion";
import { Reveal } from "./wrappers/reveal";
import { SlideIn } from './wrappers/slideIn';
import { SlideInRight } from './wrappers/slideInRight';
import { FadeIn } from './wrappers/fadeIn';
//import { Parallax, ParallaxLayer } from '@react-spring/parallax';
//import { tree } from 'next/dist/build/templates/app-page';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
//import headRoom from 'react-headroom';
//import Loader from './components/Loader.js';
import Header from './components/Header';
import Headroom from 'react-headroom';
import SplitType from 'split-type';
import MagneticImage from './wrappers/magneticImage';
import dynamic from 'next/dynamic';
//const Scene = dynamic(() => import('@/app/components/Scene'), { ssr: false })
import Scene from './components/Scene.jsx'


import InstaImg from '../public/images/logos/InstaLogo.png';
import LinkInImg from '../public/images/logos/LinkedInLogo.png';

function Home() {
  //ref for body element
  const bodyRef = useRef(null);

  //gets mouse position
  const [mousePos, setMousePos]:any = useState({
    x: 0,
    y: 0
  });
  //set cursor variant (normal & pointer)
  const [cursorVariant, setCursorVariant]:any = useState("default");
  //change cursor functions
  const expandCursor = () => setCursorVariant("expanded");
  const shrinkCursor = () => setCursorVariant("default");

  //moves the mouse
  useEffect(() => {
    const mouseMove = (e:any) => {
      setMousePos({
        x: e.clientX,
        y: e.clientY,
      })
      console.log(e.clientX, e.clientY)
    }
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove)
    }
  }, [])

  //assigning the variants of the cursor
  const variants = {
    default: {
      x: mousePos.x - 5,
      y: mousePos.y - 5
    },
    expanded: {
      height: 100,
      width: 100,
      x: mousePos.x - 50,
      y: mousePos.y - 50,
      backgroundColor: "rgba(255,255,255,0.4)",
      border: "2px solid white"
    }
  }
  //ref for the main element containing all the parallax images
  let mainEl:any = useRef(null);

  // i :)
  var i: string | number;
  //array to hold each individual parallax image
  const parallaxImgs = [];
  //array to hold their refs
  const paraRefs:any = [];
  //ref for the main Text containing Martin Elgamal
  var mainTextEl:any = useRef(null);
  //loop through every parallax image and loads it
  paraRefs[0] = useRef(null);
  paraRefs[1] = useRef(null);
  paraRefs[2] = useRef(null);
  paraRefs[3] = useRef(null);
  paraRefs[4] = useRef(null);
  paraRefs[5] = useRef(null);
  paraRefs[6] = useRef(null);
  paraRefs[7] = useRef(null);
  paraRefs[8] = useRef(null);
  paraRefs[9] = useRef(null);
  for (i=1; i<=10; i++) {
    if(i!=10){
        let indName = "img"+i;
        parallaxImgs.push(
        <Image
          ref={paraRefs[i]}
          className={`paraImg ${indName}`}
          src={"./Parallax home images/Background copy "+i+".png"}
          alt={`image`}
          width={3000}
          height={3000}
        />
        );
    }
    //loads the text element containing Martin Elgamal
    else{
      parallaxImgs.push(  
        <motion.div className='mainText' ref={mainTextEl}>  
          <h1>MARTIN</h1>
          <h2>ELGAMAL</h2>
        </motion.div>
      );
    }
  }
  //arrays to hold the speed of each individual parallax image as the mouse moves
  //the background moves the most
  const dataSpeedsY = [0.3, 0.27, 0.25, 0.2, 0.2, 0.15, 0.09, 0.08, 0.07];
  const dataSpeedsX = [0.3, 0.27, 0.25, 0.2, 0.15, 0.15, 0.09, 0.08, 0.07];

  //moves the parallax images as the mouse moves
  const [xValue, setXValue] = useState(0);
  const [yValue, setYValue] = useState(0);
  const currentYCoord: any[] = [];
  const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
    setXValue(mousePos.x - window.innerWidth / 2);
    setYValue(mousePos.y - window.innerHeight / 2);

    for(i=1; i<=9; i++){
      currentYCoord[i-1] = (yValue * dataSpeedsY[i-1]) 
      if(paraRefs[i].current){
        paraRefs[i].current.style.transform = `translate(calc(-50% + ${-xValue * dataSpeedsX[i-1]}px),
         calc(-50% + ${currentYCoord[i-1]}px))`;
      }
    }
  }

  //handles scroll of Martin Elgamal text
  // let scrollY:any = window.scrollY;
  // let factorThroughPage:any;
  // let coeff:any;
  // useEffect(() => {
  //   const handleScroll = () => {
  //     scrollY = window.scrollY;
  //     factorThroughPage = scrollY / window.innerHeight;
  //     coeff = 50 + factorThroughPage*100*0.2;
  //     mainTextEl.current.style.top = `${coeff}%`;
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  
  gsap.registerPlugin(ScrollTrigger);
  const TargetSplitType:any = useRef(null);
  const PortofolioTextEl:any = useRef(null);
  const PortoDesc:any = useRef(null);

  // useEffect(() => {
  //   const text = SplitType.create(TargetSplitType.current, { types: "chars" });
  //   if(window.innerWidth < 500){
  //     gsap.from(text.chars, {
  //       scrollTrigger: {
  //         trigger: text.chars,
  //         start: 'top 80%',
  //         end: 'top -450%',
  //         scrub: true,
  //         markers: false
  //       },
  //       opacity: 0.1,
  //       stagger: 0.1
  //     })
  //   }
  //   else{
  //     gsap.from(text.chars, {
  //       scrollTrigger: {
  //         trigger: text.chars,
  //         start: 'top 80%',
  //         end: 'top 20%',
  //         scrub: true,
  //         markers: false
  //       },
  //       opacity: 0.1,
  //       stagger: 0.1
  //     })
  //   }
  // },[])

  // useEffect(() => {
  //   let tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: '.portoText',
  //       start: 'top 80%',
  //       end: 'top 20%',
  //       scrub: true,
  //       markers: true
  //     }
  //   })

  //   tl.fromTo('.portoText', {
  //     x: -window.innerWidth
  //   },{
  //     x: 0
  //   })
  // }, [])

  useLayoutEffect(() => {
     const context = gsap.context(() => {
      const text = SplitType.create(TargetSplitType.current, { types: "chars" });
      if(window.innerWidth < 500){
        gsap.from(text.chars, {
          scrollTrigger: {
            trigger: text.chars,
            start: 'top 80%',
            end: 'top -450%',
            scrub: true,
            markers: false
          },
          opacity: 0.1,
          stagger: 0.1
        })
      }
      else{
        gsap.from(text.chars, {
          scrollTrigger: {
            trigger: text.chars,
            start: 'top 80%',
            end: 'top 20%',
            scrub: true,
            markers: false
          },
          opacity: 0.1,
          stagger: 0.1
        })
      }
      // const tl = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: TargetSplitType.current,
      //     start: 'top 80%',
      //     end: 'top 20%',
      //     scrub: true
      //   }
      // })
      // tl.fromTo(TargetSplitType.current, { x: -window.innerWidth }, { x: 0 }, 0)

      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: PortoDesc.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      })
      tl2.fromTo(PortoDesc.current, { y: -100 }, { y: -0 }, 0)

      const tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: mainEl.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
          markers: false
        }
      })
      if (window.innerWidth < 1000){
        tl3.fromTo(mainTextEl.current, { y: 0 }, { y: 200 }, 0)
      }
      else{
        tl3.fromTo(mainTextEl.current, { y: 0 }, { y: 200 }, 0)
      }
    })
  }, [])

  const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
  }
  const lenis = useLenis(({ scroll }) => {
    
  })
  
  return (
    <ReactLenis root={true} options={{ wheelMultiplier: 1 }}>
      <body className='body' ref={bodyRef}>
        {/* <Loader /> */}
        <Headroom>
          <Header onMouseMove={handleMouseMove} onMouseEnter={expandCursor} onMouseLeave={shrinkCursor} onClick={scrollToTop}/>
        </Headroom>
        <main ref={mainEl} className='main' onMouseMove={handleMouseMove}>
          <div className='vignette'></div>
          {parallaxImgs}
        </main>
        {/* <div className='portoBanner' ref={PortofolioTextEl}>
          <h1 ref={TargetSplitType} className='portoText'>PORTOFOLIO</h1>
        </div> */}
        
        <Scene />
        <div className='mainContentContainer1'>
          <div className="wave2">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
            </svg>
          </div>
          <div className='textContainer' ref={PortoDesc}>
            <Reveal>
              <h1>Hey, I&apos;m Martin<span>.</span></h1>
            </Reveal>
            <Reveal>
              <h2>I am a <span>Full Stack Web Developer</span></h2>
            </Reveal>
            <Reveal>
              <p className='meIntro'>I have been coding for 5 years now and have plenty of experience working with UI/UX design and also some back-end skills. I have a passion for coding and art which makes it easy to implement into web design. Currently I am studying computer science at New Ramses College.</p>
            </Reveal>
            <Reveal>
              <Link href='./contact'>
                <button className='contactMeBtn' onMouseEnter={expandCursor} onMouseLeave={shrinkCursor}>Contact me</button>
              </Link>
            </Reveal>
          </div>
          
          <div className='portoImgContainer'>
          <MagneticImage dragginess="20">
            <Image
              className='portoImg'
              src={"./images/image_50459649.jpg"}
              alt={`image`}
              width={3024/2}
              height={4032/2}
            />
          </MagneticImage>
          </div>
        </div>
        <div className='mainContentContainer2'>
          <Reveal textAlign='center'>
            <h1>Can you even lift bro<span>?</span></h1>
          </Reveal>
          <div className='projectContainer'>
            <Image
              className='mockup1Img'
              src={"./images/FinalMockup.png"}
              alt='Clothing Brand Mockup'
              width={1800}
              height={760}
            />
            <FadeIn>
              <div className='mockup1TextContainer'>
                <h1 style={{ cursor: "none" }} onMouseEnter={expandCursor} onMouseLeave={shrinkCursor}>Clothing Brand</h1>
                <p style={{ cursor: "none" }}>UI Design · Backend Login Page · Retail</p>
              </div>
            </FadeIn>
          </div>
        </div>
        <div className='contactContainer'>
          {/* <h2>GET · IN · TOUCH</h2> */}
          <div className='wave'>
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                  <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" className="shape-fill"></path>
              </svg>
          </div>
          <div className="contactDetails">
            <div className="contacts">
              <ul>
                <li>
                  <h2>Email</h2>
                  <p>martin.boulos.lamie@gmail.com</p>
                </li>
                <li>                 
                  <h2>Phone number</h2>
                  <p>+20 1000208676</p>
                </li>
              </ul>
            </div>
            <div className="socials">
              <ul>
                <li>
                  <Link href='https://www.instagram.com/martin_boulos/'>
                    <Image
                      src={InstaImg}
                      alt='InstaLogo'
                    />
                  </Link>
                </li>
                <li>
                  <Link href='https://www.linkedin.com/in/martin-roufaeil-55906b309/'>
                    <Image
                      src={LinkInImg}
                      alt='LinkInImg'
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <motion.div 
          className='cursor'
          variants={variants}
          animate={cursorVariant}
          transition={{ type: "tween", ease: "circOut" }}
        />
      </body>
    </ReactLenis>
  )
}
export default Home;