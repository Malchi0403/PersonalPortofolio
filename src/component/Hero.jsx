import { Float, Preload } from "@react-three/drei"
import { Canvas, useThree } from "@react-three/fiber"
import { motion } from 'framer-motion'
import { Suspense, useEffect, useMemo, useRef, useState } from "react"
import { Link } from "react-scroll"
import { Newest } from "../Newest"
import { navigation, profile, social } from "../data"
import { SectionWrapper } from "../hoc"
import CanvasLoader from "./Loader"
import { Stars } from "./canvas"
import React from "react"

// download
const PDF_FILE_URL = "/CV ATS.pdf"
// size 3d
function MyMesh({isMobile}) {
 
    const positionMouse = useMemo(() => {
        
        if(isMobile){
            return [1.2,-3,2]
            
        } else {
            return [0,0,0]
        }

    },[isMobile])
    const positionFloatMouse = useMemo(() => {
        
        if(isMobile){
            return  [0.5, -1.5, -2]
            
        } else {
            return [0, -2, 0.3]
        }

    },[isMobile])
    const scaleMouse = useMemo(() => {
        
        if(isMobile){
            return 3
            
        } else {
            return 1.7
        }

    },[isMobile])
const meshPosition = useRef(positionMouse);
const meshPositionFloat = useRef(positionFloatMouse);
const meshScale = useRef(scaleMouse);
    const meshRotation = useRef([0, 0, 0]);
    

    return (
        <group  >

            <mesh  scale={meshScale.current ?? 1.2} position={meshPosition.current ?? [1.2, -3, 2] }>
                <Float position={meshPositionFloat.current} rotation={meshRotation.current}>
                    <ambientLight intensity={1.3} />
                    <Newest />
                </Float>    
            </mesh>
        </group>
    );
}



const Hero = () => {
    const downloadFile = (url) => {
        fetch(url).then(response => response.blob()).then(blob => {
            const blobURL = window.URL.createObjectURL(new Blob([blob]))
            const fileName = url.split("/").pop()
            const aTag = document.createElement("a")
            aTag.href = blobURL
            aTag.setAttribute("download", fileName)
            document.body.appendChild(aTag)
            aTag.click()
            aTag.remove()
        })

    }
    const [isMobile,setIsMobile] = useState(false)
    const checkWindowSize = () => {
        let windowWidth;
        if(typeof window !== 'undefined'){
            windowWidth = window.innerWidth
        }
        if(windowWidth <= 1024) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }
    useEffect(() => {
        checkWindowSize()
    },[isMobile])
    if(typeof window !== 'undefined') {
        window.addEventListener('resize',checkWindowSize)
    }
    
    const [Profile] = profile
    return (
        <div className="mb-20 mt-2 md:mt-16 lg:mt-0">
            <Stars />
            <section id="home" className="h-[100vh] flex items-center w-full flex-col">
                <div className="container mx-auto h-full flex flex-col justify-center ">
                    <div className="flex items-center"
                    >
                        <div className="flex flex-col-reverse xs:gap-y-4 scale-75 lg:scale-100  md:flex-col-reverse lg:flex-row">
                            <motion.div initial={{
                                opacity: 0,
                                x: -25,
                            }}
                    viewport={{once:true}}

                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                    transition: {
                                        duration: 1,
                                        delay: 1,
                                    }
                                }} className="w-1 mr-8 mt-11 md:h-48 bg-gradient-to-br from-violet-500 via-pink-500 to-red-500 lg:block md:hidden " />
                            <div className="flex flex-col sm:max-w-2xl  mr-0 items-center md:w-full md:items-center lg:items-start">
                                <motion.div initial={{
                                    opacity: 0,
                                    y: 25,
                                }}
                    viewport={{once:true}}

                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            duration: 1,
                                            delay: 1,
                                        }
                                    }} className="mt-12 mr-4 text-center md:pl-10 md:text-left font-body font-extrabold ">
                                    <h1
                                        className="text-2xl md:text-3xl md:mb-4">
                                        Hey, I'm <span className="text-fuchsia-800">{Profile.name}</span>
                                    </h1>
                                    <p className="mx-auto text-center md:text-justify text-base mb-2 w-3/5 md:w-full md:text-base md:mb-6">
                                        {Profile?.content}
                                    </p>
                                    <button
                                        onClick={() => downloadFile(PDF_FILE_URL)} className='text-white font-primary tracking-wider bg-gradient-to-br from-violet-500 via-pink-500 to-red-500 px-10 py-1 md:py-2 md:px-14 rounded-full' >DOWNLOAD CV</button>
                                </motion.div>
                            </div>
                            <div className="w-1/2  lg:w-auto mx-auto h-72    bg-violet-800 bg-opacity-20 rounded-t-full outline outline-offset-8 outline-fuchsia-600">
                                <div className="w-full h-full ">

                                <Canvas  camera={{ position:isMobile ?[0,0,7] :[0, 0, 8] ,near: 1, far: 100 }} >
                                    <Suspense fallback={<CanvasLoader />}>
                                        <MyMesh isMobile={isMobile} />
                                    </Suspense>
                                    <Preload all />
                                </Canvas>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full -mt-14 md:hidden">
                              <ul className="flex justify-evenly w-full ">
                                  {social.map((item, index) => {
                                      return (
                                          <li key={index} className={`flex justify-content items-center ${item.color ? item.color : "text-white"} ${item.colorHover ? item.colorHover : 'hover:text-red-500'}`}>
                                              <a href={item.href} className="text-base">
                                                  {React.cloneElement(item.icon,{size:20})}
                                              </a>
                                          </li>
                                      )
                                  })}
                              </ul>

</div>
                </div>
                <div  className="absolute  lg:bottom-64 md:bottom-64 bottom-7 ">
                    <div className="absolute hidden md:top-44 lg:bottom-1 w-full md:flex justify-center  items-center z-30">
                        <Link
                            to={navigation[1].id}
                            spy={true}
                            smooth={true}
                            duration={400}
                            offset={90}
                            className="w-[35px] h-[64px] rounded-3xl border-4 bg-slate-600 border-secondary flex justify-center items-start p-2 cursor-pointer"
                        >
                            <motion.div
                                animate={{
                                    y: [0, 24, 0]
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    repeatType: 'loop'
                                }}
                                className="w-3 h-3 rounded-full bg-secondary mb-1"
                            />
                        </Link>
                    </div>
                </div>

               
            </section>
        </div>
    )
}

export default SectionWrapper(Hero, navigation[0].id)