import { Float, Preload } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import React, { Suspense, useEffect, useMemo, useRef, useState } from "react"
import { Newest } from "../Newest"
import { navigation, profile, social } from "../data"
import { SectionWrapper } from "../hoc"
import CanvasLoader from "./Loader"

// download
const PDF_FILE_URL = "/Misael_Timpolas_Fullstack_Developer.pdf"
// size 3d
function MyMesh({ isMobile }) {

    const positionMouse = useMemo(() => {

        if (isMobile) {
            return [1.2, -3, 2]

        } else {
            return [0, 0, 0]
        }

    }, [isMobile])
    const positionFloatMouse = useMemo(() => {

        if (isMobile) {
            return [0.5, -1.5, -2]

        } else {
            return [0, -2, 0.3]
        }

    }, [isMobile])
    const scaleMouse = useMemo(() => {

        if (isMobile) {
            return 3

        } else {
            return 1.7
        }

    }, [isMobile])
    const meshPosition = useRef(positionMouse);
    const meshPositionFloat = useRef(positionFloatMouse);
    const meshScale = useRef(scaleMouse);
    const meshRotation = useRef([0, 0, 0]);


    return (
        <group  >

            <mesh scale={meshScale.current ?? 1.2} position={meshPosition.current ?? [1.2, -3, 2]}>
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
    const [isMobile, setIsMobile] = useState(false)
    const checkWindowSize = () => {
        let windowWidth;
        if (typeof window !== 'undefined') {
            windowWidth = window.innerWidth
        }
        if (windowWidth <= 1024) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }
    useEffect(() => {
        checkWindowSize()
    }, [isMobile])
    if (typeof window !== 'undefined') {
        window.addEventListener('resize', checkWindowSize)
    }

    const [Profile] = profile
    return (
        <div className="h-[calc(100dvh-4rem)] mt-14 " id={navigation[0].id}>
            <section id="home" className="h-full  flex  items-center w-full ">
                <div className="container mx-auto h-full flex items-center flex-col justify-center   ">
                    <div className="flex w-full h-full flex-col-reverse xs:gap-y-4  lg:flex-row items-center justify-center  "
                    >
                        <div className="flex ">
                            <div  className="w-1 mr-8 bg-gradient-to-br from-violet-500 via-pink-500 to-red-500 lg:block md:hidden " />
                            <div className="md:w-full ">
                                <div className="font-body">
                                    <h1
                                        className="text-lg md:text-3xl ">
                                        Hey, I'm <span className="text-fuchsia-300">{Profile.name}</span>
                                    </h1>
                                    <p className=" text-sm my-2  md:w-full md:text-base md:mb-6">
                                       I build fast, scalable, and production-ready web applications.
        <br/>2+ years experience working with international teams and building systems used by thousands of users.
                                    </p>
                                    <button
                                        onClick={() => downloadFile(PDF_FILE_URL)} className='text-white font-primary tracking-wider bg-gradient-to-br from-violet-500 via-pink-500 to-red-500 px-10 py-1 md:py-2 md:px-14 rounded-full' >DOWNLOAD CV</button>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-[30%] h-full  grid place-items-center">

                            <div className="w-full max-w-[17rem] h-full max-h-[15rem] bg-violet-800 bg-opacity-20 rounded-t-full outline outline-offset-8 outline-fuchsia-600">
                                <div className="w-full h-full   ">

                                    <Canvas camera={{ position: isMobile ? [0, 0, 10] : [0, 0, 8], near: 1, far: 100 }} dpr={[1, 1.5]}>
                                        <Suspense fallback={<CanvasLoader />}>
                                            <MyMesh isMobile={isMobile} />
                                        </Suspense>
                                        <Preload all />
                                    </Canvas>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-[15%]   grid place-items-center  md:hidden">
                        <ul className="flex justify-evenly w-full ">
                            {social.map((item, index) => {
                                return (
                                    <li key={index} className={`flex justify-content items-center ${item.color ? item.color : "text-white"} ${item.colorHover ? item.colorHover : 'hover:text-red-500'}`}>
                                        <a href={item.href} className="text-base" aria-label={`Visit my ${item.name} profile`}>
                                            {React.cloneElement(item.icon, { size: 20 })}
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero