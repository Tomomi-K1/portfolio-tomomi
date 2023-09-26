'use client'
import Button from '@mui/material/Button';

export default function Header(){
    return(
        <header className='w-screen h-screen text-white bg-gray-900'>
            <div className="w-11/12 m-auto max-w-screen-lg">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-bold">Hi, I'm <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">Tomomi</span>
                <span className="block">Full Stack Engineer</span>
            </h1>
        <nav className='mt-10 md:mt-10 lg:mt-24'>
            <ul className='grid grid-cols-2 sm:grid-cols-4 justify-items-start'> 
                <li><Button className="mb-5 border-white text-white" variant="outlined">Project</Button></li>
                <li><Button className="mb-5  border-white text-white" variant="outlined">About</Button></li>
                <li><Button className="mb-5  border-white text-white" variant="outlined">Contact</Button></li>
                <li><Button className="mb-5  border-white text-white" variant="outlined">Resume</Button></li>
            </ul>
        </nav>
        </div>
        </header>
    )
}