import MyImage from './assets/images/me.webp'
import MyIcon from './assets/images/icon.webp'
import { FiFacebook, FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi'
import { javascript, html, css, reactjs, vue, postgre, bootstrap, golang, mysql, tailwind, nodejs, git, threejs, } from "./assets/tech";
import { waysfood, dewetour,gpdi,rootopia,amanah } from './assets/projectImage';
import { FaWhatsapp } from "react-icons/fa";
export const images = [
    {
        mine: MyImage,

    },
    {
        iconMe: { MyIcon },
    },
];

export const profile = [
    {
        name: 'Malchiram',
        content: "Fullstack Developer crafting seamless experiences from frontend to backend.",
        textAbout: "I'm a Full Stack Developer with almost 3 years of experience delivering end-to-end web and mobile solutions using Next.js, Golang, TypeScript, and React Native. Adept at developing efficient APIs, building responsive user interfaces, and deploying applications through Docker, AWS, and GCP. Passionate about scalable software design and global collaboration. Eager to contribute technical expertise and creative problem-solving to an innovative engineering team.",
        projects: [
            {
                title: 'GPdI Shekinah',
                desc: 'GPdI Shekinah website is a dynamic landing page that serves as the digital home for the church community. Visitors can easily explore upcoming church events, and get details about the location.',
                vercel: 'https://gpdishekinah.online/',
                github: 'https://github.com/Malchi0403/gpdi',
                image: gpdi,
                tags: [
                    {
                        name: "nextJS",
                        color: "blue-text-gradient",
                    },
                    {
                        name: "docker",
                        color: "green-text-gradient",
                    },
                    {
                        name: "golang",
                        color: "pink-text-gradient",
                    },
                    {
                        name: "fullstack development",
                        color: "pink-text-gradient",
                    },
                ],
            },{
                title: 'Amanah Jaya Service',
                desc: 'Amanah Jaya Service is my client project , they asked me for help them to build their website from scratch .',
                vercel: 'https://amanahjaya.vercel.app/',
                github: 'https://github.com/Malchi0403/amanahjaya',
                image: amanah,
                tags: [
                    {
                        name: "Next Js",
                        color: "blue-text-gradient",
                    },
                    {
                        name: "SEO",
                        color: "green-text-gradient",
                    },
                    {
                        name: "Framer motion",
                        color: "pink-text-gradient",
                    },
                    {
                        name: "typescript",
                        color: "pink-text-gradient",
                    },
                ],
            },
            {
                title: 'Ways-food',
                desc: 'Waysfood is my project used React.Js & Golang . this website for make it easily user for orders food from anywhere.',
                vercel: 'https://foodsmarket.vercel.app/',
                github: 'https://github.com/Malchi0403/foodmarket',
                image: waysfood,
                tags: [
                    {
                        name: "react",
                        color: "blue-text-gradient",
                    },
                    {
                        name: "restapi",
                        color: "green-text-gradient",
                    },
                    {
                        name: "golang",
                        color: "pink-text-gradient",
                    },
                ],
            },
            {
                title: 'Dewe-tour',
                desc: 'Dewe-Tour is website offering personalized tour packages for holidaymakers and staycation seekers. User-friendly interface enables easy exploration, booking, and customization of itineraries. Emphasis on transparency reliability, and convenience for an enhanced customer experience.',
                vercel: 'https://projectstour.vercel.app',
                github: 'https://github.com/Malchi0403/TourProject',
                image: dewetour,
                tags: [
                    {
                        name: "react",
                        color: "blue-text-gradient",
                    },
                    {
                        name: "restapi",
                        color: "green-text-gradient",
                    },
                    {
                        name: "golang",
                        color: "pink-text-gradient",
                    },
                ],
            },
            {
                title: 'Rootopia',
                desc: ' Developed an interactive 3D website using Three.js and React.js, focusing on the main interface and dynamic 3D-based navigation. This project began as a freelance contract but was discontinued by the client before completion. It is still used as a showcase of my skills in UI design and web-based 3D development.',
                vercel: 'https://3d-rootopia.vercel.app',
                github: 'https://github.com/Malchi0403/3d-rootopia',
                image: rootopia,
                tags: [
                    {
                        name: "Next JS",
                        color: "blue-text-gradient",
                    },
                    {
                        name: "Tailwind",
                        color: "green-text-gradient",
                    },
                    {
                        name: "Three JS",
                        color: "pink-text-gradient",
                    },
                    {
                        name: "3D",
                        color: "pink-text-gradient",
                    },
                ],
            },
          
        ]
    }
]

export const social = [
    {
        icon: <FiLinkedin />,
        href: 'https://www.linkedin.com/in/malchiram',
        color: "text-blue-500",
        colorHover: "hover:text-blue-900",
    },
    {
        icon: <FiGithub />,
        href: 'https://github.com/Malchi0403',
        color: "text-white",
        colorHover: "hover:text-gray-500",
    },
    {
        icon: <FiInstagram />,
        href: 'https://www.instagram.com/misaeeeelt',
        color: "text-purple-500",
        colorHover: "hover:text-purple-700",
    },
    {
        icon: <FiFacebook />,
        href: 'https://www.facebook.com/misaeltimpolas',
        color: "text-blue-500",
        colorHover: "hover:text-blue-600",
    },
    {
        icon: <FaWhatsapp />,
        href: 'https://wa.me/6282114057823',
        color: "text-green-500",
        colorHover: "hover:text-green-600",
    },
]

export const navigation = [
    {
        name: 'Home',
        id: 'home',
    },
    {
        name: 'About',
        id: 'about',
    },
    {
        name: 'Projects',
        id: 'project',
    },
    {
        name: 'Contact',
        id: 'contact',
    },
]

export const skills = [
    {
        name: "Javascript",
        icon: javascript,
    },
    {
        name: "Golang",
        icon: tailwind,
    },
    {
        name: "Docker",
        icon: bootstrap,
    },
    {
        name: "React JS",
        icon: css,
    },
    {
        name: "Next JS",
        icon: mysql,
    },
    {
        name: "Vue JS",
        icon: postgre,
    },
    {
        name: "Animation 3D",
        icon: golang,
    },
    {
        name: "AWS",
        icon: html,
    },
    {
        name: "Linux System Operation",
        icon: vue,
    },
    {
        name: "TypeScript",
        icon: threejs,
    },
    {
        name: "Nginx",
        icon: reactjs,
    },
    {
        name: "Git",
        icon: git,
    },
]