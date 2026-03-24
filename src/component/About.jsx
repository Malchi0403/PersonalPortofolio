import { motion } from "framer-motion"
import { Tilt } from 'react-tilt'

import { images, navigation, profile, skills } from "../data"
import { SectionWrapper } from '../hoc'

const ServiceSkills = ({ index, name }) => {
    return (
        <div className="w-full  flex place-content-center  items-center">
            <div className=" w-full  mx-auto flex justify-center items-center  ">

                <Tilt className=" w-full">
                    <motion.div initial={{
                        opacity: 0,
                        y: -25,
                    }}
                        viewport={{ once: true }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 1,
                                delay: 0.3 + index * 0.2,
                            }
                        }} className='w-[170px] max-xs:w-full lg:w-full green-pink-gradient p-[1px] rounded-[20px] shadow-sm shadow-slate-500'>
                        <div
                            className='bg-tertiary rounded-[20px] py-1   flex justify-evenly items-center flex-col'
                        >
                            <p className='text-white max-xs:text-[8px] xs:text-[8.5px] sm:text-[8px] md:text-[12px]  font-bold text-center'>
                                {name}
                            </p>
                        </div>
                    </motion.div>
                </Tilt>
            </div>
        </div>
    )
}

const About = () => {
    const [Profile] = profile
    return (

        <div className='min-h-[calc(100dvh-4rem)] mt-14   w-full' id={navigation[1].id}>

            <div className='flex flex-col md:flex-row  md:justify-around items-center  w-full gap-1 '>
                <Tilt className=" w-full  lg:max-w-[30%] lg:grid lg:place-items-center   ">
                    <motion.img initial={{
                        opacity: 0,
                        y: -25,
                    }}
                        viewport={{ once: true }}

                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                type: "spring",
                                duration: 1,
                                delay: 1,
                            }
                        }} src={images[0].mine} className='h-full w-1/2 mx-auto lg:w-full  lg:max-w-[280px] object-cover -8 rounded-lg lg:shadow-sm shadow-slate-50' />
                </Tilt>
                <div className="w-full lg:max-w-[70%] ">
                    <div className='lg:text-[42px] xs:text-[32px] text-center'>
                        <motion.h1 initial={{
                            opacity: 0,
                            y: 25,
                        }}
                            viewport={{ once: true }}

                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 1,
                                    delay: 1,
                                }
                            }} className='text-center text-lg md:text-4xl mb-2 md:mb-4'>ABOUT ME</motion.h1>
                        <div className='mx-auto w-[90%]'>
                            <motion.p initial={{
                                opacity: 0,
                                y: -25,
                            }}
                                viewport={{ once: true }}

                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 1,
                                        delay: 1.2,
                                    }
                                }} className='text-justify text-xs md:text-base'>Fullstack Engineer with 2+ years of experience building production-ready web and mobile applications.<br />
                                I specialize in Next.js, React, and Golang, creating scalable systems, high-performance APIs, and responsive user interfaces.<br/>
                                I’ve worked with international teams and delivered real-world applications used by thousands of users.<br/>
                                I focus on writing clean, maintainable code and building products that are fast, reliable, and user-friendly.</motion.p>
                        </div>
                    </div>
                    <motion.h1
                        initial={{
                            opacity: 0,
                            y: -25,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 1,
                                delay: 1,
                            }
                        }}
                        viewport={{ once: true }}
                        className='text-center text-lg md:text-4xl my-2 md:mb-4'>MY SKILL</motion.h1>
                    <div className='mt-2 w-[90%] mx-auto '>

                        <motion.div className='grid grid-cols-1 md:grid-cols-2 place-content-center gap-2 p-2'>
                            {skills.map((item, i) => (
                                <ServiceSkills key={item.name} index={i} {...item} />
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
