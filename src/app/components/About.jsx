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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 justify-items-center sm:justify-items-left">
            <Image 
                    width={300} 
                    height={300} 
                    loading="lazy" 
                    src="/self-square.jpg" 
                    alt="A Picture of Tomomi Kosaka." 
                    className='rounded-full'
                    />
                <div className="about_content flex flex-col justify-center items-center z-[1]">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime adipisci unde, ea nobis sapiente voluptatum quas veritatis dolores ad tenetur optio esse beatae quisquam nam id illum consequuntur sequi hic.</p>
                </div>
            
            </div>
        </div>
        <TechSkill />

    </section>
    );
}