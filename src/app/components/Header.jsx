'use client'
import { useEffect } from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MainButton from './parts/MainButton';

const menu = [
    {
        title: "projects",
        link: "#projects"
    },
    {
        title: "about",
        link: "#about"
    },
    {
        title: "contact",
        link: "#contact"
    },
    {
        title: "resume",
        link: "/temporary.pdf"
    }
]

export default function Header() {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <header className='h-screen text-white'>
            {/* <div className='circle circle-1'></div> */}
            <div className='circle circle-1'>
                <img src="/blob.svg" data-aos="zoom-in" data-aos-duration="1500" className="head_circle-1" alt="" />
            </div>
            <div className='circle circle-2'>
                <img data-aos="zoom-in" data-aos-duration="1500" className="head_circle-2" src="/blob.svg" alt="" />
            </div>
            <div data-aos="fade-right" data-aos-duration="1500" className="flex flex-col h-screen justify-center w-11/12 m-auto max-w-screen-lg">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-bold">Hi, I&#39;m <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">Tomomi</span>
                    <span data-aos="fade-right" className="block">Full Stack Developer</span>
                </h1>
                <nav className='mt-10 md:mt-10 lg:mt-24'>
                    <ul className='grid grid-cols-2 sm:grid-cols-4 justify-items-start'>
                        {menu.map((m, idx) => (
                            <li key={idx}>
                                <a href={m.link}>
                                    <MainButton btnName={m.title} />
                                </a>
                            </li>
                        ))}
                    </ul>
                    <ul className='w-[90px] flex justify-between'>
                        <li>
                            <a href="https://www.linkedin.com/in/tomomi-kosaka/">
                                <LinkedInIcon color="white" />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/Tomomi-K1">
                                <GitHubIcon />
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}