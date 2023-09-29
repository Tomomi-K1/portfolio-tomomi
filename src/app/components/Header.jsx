'use client'
import { useEffect } from 'react';
import Button from '@mui/material/Button';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export default function Header(){

    useEffect( () => {
        AOS.init();  
    }, [])

    return(
        <header className='w-screen h-screen text-white'>
            {/* <div className='circle circle-1'></div> */}
            <div data-aos="zoom-in" data-aos-duration="1500" className='circle circle-2'>
                <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <defs> 
                        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                            <stop id="stop1" stopColor="rgba(253.933, 156.356, 225.975, 1)" offset="0%"></stop>
                            <stop id="stop2" stopColor="rgba(188.686, 251.63, 255, 0.2)" offset="100%"></stop>
                        </linearGradient>
                    </defs>
                <path fill="url(#sw-gradient)" d="M26.4,-32.5C32.6,-26.2,35.1,-16.4,35.6,-7.2C36,1.9,34.5,10.4,30.7,18.4C26.9,26.3,20.9,33.7,12.8,37.9C4.6,42,-5.7,43,-14.8,40C-24,37,-32,30,-37.5,21.3C-43,12.5,-45.9,2,-44,-7.5C-42,-17,-35.2,-25.4,-27.1,-31.5C-18.9,-37.5,-9.5,-41.1,0.3,-41.5C10.1,-41.8,20.1,-38.9,26.4,-32.5Z" width="100%" height="100%" transform="translate(50 50)" strokeWidth="0"></path>
                </svg>
            </div>
            <div data-aos="zoom-in" data-aos-duration="1500" className='circle circle-3'>
            <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <defs> 
                        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                            <stop id="stop1" stopColor="rgba(253.933, 156.356, 225.975, 1)" offset="0%"></stop>
                            <stop id="stop2" stopColor="rgba(188.686, 251.63, 255, 0.2)" offset="100%"></stop>
                        </linearGradient>
                    </defs>
                <path fill="url(#sw-gradient)" d="M26.4,-32.5C32.6,-26.2,35.1,-16.4,35.6,-7.2C36,1.9,34.5,10.4,30.7,18.4C26.9,26.3,20.9,33.7,12.8,37.9C4.6,42,-5.7,43,-14.8,40C-24,37,-32,30,-37.5,21.3C-43,12.5,-45.9,2,-44,-7.5C-42,-17,-35.2,-25.4,-27.1,-31.5C-18.9,-37.5,-9.5,-41.1,0.3,-41.5C10.1,-41.8,20.1,-38.9,26.4,-32.5Z" width="100%" height="100%" transform="translate(50 50)" strokeWidth="0"></path>
                </svg>
            </div>
            <div data-aos="fade-right" data-aos-duration="1500" className="flex flex-col h-screen justify-center w-11/12 m-auto max-w-screen-lg">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-bold">Hi, I&#39;m <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">Tomomi</span>
                <span  data-aos="fade-right" className="block">Full Stack Developer</span>
            </h1>
        <nav className='mt-10 md:mt-10 lg:mt-24'>
            <ul className='grid grid-cols-2 sm:grid-cols-4 justify-items-start'> 
                <li><a href="#projects"><Button className="mb-5  border-white text-white transition duration-600 hover:border-none hover:bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400" variant="outlined">Project</Button></a></li>
                <li><a href="#about"><Button className="mb-5  border-white text-white transition duration-600 hover:border-none hover:bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400" variant="outlined">About</Button></a></li>
                <li><a href="#contact"><Button className="mb-5  border-white text-white transition duration-600 hover:border-none hover:bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400" variant="outlined">Contact</Button></a></li>
                <li><a href="/resume.pdf"><Button className="mb-5  border-white text-white transition duration-600 hover:border-none hover:bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400" variant="outlined">Resume</Button></a></li>
            </ul>

            <ul className='w-1/12 flex justify-between'> 
                <li><a href="https://www.linkedin.com/in/tomomi-kosaka/"><LinkedInIcon color="white"/></a></li>
                <li><a href="https://github.com/Tomomi-K1"><GitHubIcon /></a></li>
            </ul>
        </nav>
        </div>
        </header>
    )
}