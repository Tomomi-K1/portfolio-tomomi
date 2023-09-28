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
            <div data-aos="fade-right" className="flex flex-col h-screen justify-center w-11/12 m-auto max-w-screen-lg">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-bold">Hi, I&#39;m <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">Tomomi</span>
                <span  data-aos="fade-right" className="block">Full Stack Developer</span>
            </h1>
        <nav className='mt-10 md:mt-10 lg:mt-24'>
            <ul className='grid grid-cols-2 sm:grid-cols-4 justify-items-start'> 
                <li><a href="#projects"><Button className="mb-5  border-white text-white transition duration-600 hover:border-none hover:bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400" variant="outlined">Project</Button></a></li>
                <li><a href="#about"><Button className="mb-5  border-white text-white transition duration-600 hover:border-none hover:bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400" variant="outlined">About</Button></a></li>
                <li><a href="#contact"><Button className="mb-5  border-white text-white transition duration-600 hover:border-none hover:bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400" variant="outlined">Contact</Button></a></li>
                <li><a href="#resume"><Button className="mb-5  border-white text-white transition duration-600 hover:border-none hover:bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400" variant="outlined">Resume</Button></a></li>
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