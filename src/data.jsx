import MyImage from './assets/images/me.webp'
import MyIcon from './assets/images/icon.webp'
import { FiFacebook, FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi'
import { javascript, html, css, reactjs, vue, postgre, bootstrap, golang, mysql, tailwind, nodejs, git, threejs, } from "./assets/tech";
import { waysfood, dewetour,gpdi } from './assets/projectImage';
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
        content: "I'm Fullstack Developer ,who uses coding to operate on both Front-end & Back-end system.",
        textAbout: "I'm a dedicated full-stack developer with a strong foundation in both frontend and backend development. With a year of industry experience as a frontend engineer, I have successfully developed and maintained applications that deliver seamless user experiences and efficient backend systems. My passion lies in building scalable, responsive, and robust web solutions, and I enjoy working on both the client and server sides to bring ideas to life. I am always eager to learn and improve, driven by a commitment to high-quality code and a user-centered approach to development.",
        projects: [
            {
                title: 'Ways-food',
                desc: 'Waysfood is my project used React.Js & Golang . this website for make it easily user for orders food from anywhere.',
                vercel: 'https://foodsmarket.vercel.app/',
                github: 'https://github.com/Malchiram/foodmarket',
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
                github: 'https://github.com/Malchiram/TourProject',
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
                title: 'GPdI Shekinah',
                desc: 'Welcome to GPdI Shekinah, a place where faith and community come together. Our website is designed to give you easy access to information about our church, events, services, and more. Whether you’re a first-time visitor or a regular member, we aim to make your experience seamless and inspiring.',
                vercel: '',
                github: 'https://github.com/Malchiram/gpdi',
                image: gpdi,
                tags: [
                    {
                        name: "react",
                        color: "blue-text-gradient",
                    },
                    {
                        name: "strapi",
                        color: "green-text-gradient",
                    },
                    {
                        name: "cloudinary",
                        color: "pink-text-gradient",
                    },
                    {
                        name: "restAPI",
                        color: "pink-text-gradient",
                    },
                ],
            }
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
        href: 'https://github.com/Malchiram',
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
        name: "CMS",
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