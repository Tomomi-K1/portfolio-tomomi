'use client'
import React, { useEffect } from'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import TechSkill from './TechSkill';


export default function About(){
    useEffect( () => {
        AOS.init();  
    }, [])
    return(
    <section id="about" className="flex flex-col justify-center items-center ">
        <div className="w-11/12 m-auto max-w-screen-lg">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center sm:text-left mb-10">About Me</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 justify-items-center items-center sm:justify-items-left">
            <Image 
                    width={300} 
                    height={300} 
                    loading="lazy" 
                    src="/self-square.jpg" 
                    alt="A Picture of Tomomi Kosaka." 
                    className='rounded-full'
                    />
                <div className="about_content flex flex-col justify-center items-center z-[1]">
                    <p className='p-4 text-lg'> 
                    <span className='block text-xl font-bold'>Hello!👋</span>
                    I have over a decade of experience in customer service and administration, where I naturally gravitated towards solving tech-related issues. This curiosity eventually led me to pursue a career in software development, allowing me to merge my love for technology with practical problem-solving skills.🚀 I&apos;m not only a dependable team player but also proficient in handling customer-facing tasks.😃  I&apos;m genuinely excited to apply my skills and knowledge, and I&apos;m fully prepared to take on any challenge that comes my way!💪🔧</p>
                </div>
            </div>
        </div>
        <TechSkill />

    </section>
    );
}