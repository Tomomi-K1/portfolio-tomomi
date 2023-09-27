'use client'
import React, { useEffect } from'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css'; 



export default function About(){
    useEffect( () => {
        AOS.init();  
    }, [])
    return(
    <section id="about" className="flex flex-col justify-center items-center bg-pink-100 py-20">
        <div className="w-11/12 m-auto max-w-screen-lg grid grid-cols-1 sm:grid-cols-2 gap-10 justify-items-center">
        <Image 
                width={200} 
                height={200} 
                loading="lazy" 
                src="/self-square.jpg" 
                alt="A Picture of Tomomi Kosaka." 
                className='rounded-full'/>
            <div className="about_content flex flex-col justify-center items-center">
                <h2 className="text-black text-3xl text-bold mb-5">About Me</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime adipisci unde, ea nobis sapiente voluptatum quas veritatis dolores ad tenetur optio esse beatae quisquam nam id illum consequuntur sequi hic.</p>
            </div>
         
        </div>
        <div className='tech_section w-11/12 mx-auto mt-10 max-w-screen-lg'> 
            <h2 className='text-center text-3xl text-bold mb-5'>Tech Skills</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 justify-items-center'>
                <article data-aos="fade-right">
                    <h5>Frontend</h5>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>React</li>
                        <li>Next.js</li>
                        <li>Tailwind CSS</li>
                        <li>Bootstrap</li>
                        <li>Material UI</li>
                    </ul>
                </article>
                <article>
                    <h5>Backend</h5>
                    <ul>
                        <li>Node.js</li>
                        <li>PostgreSQL</li>
                        <li>Express.js</li>
                        <li>Python</li>
                        <li>Flask</li>
                        <li>SQLAlchemy</li>
                        <li>Jinja</li>
                    </ul>
                </article>
                <article>
                    <h5>others</h5>
                    <ul>
                        <li>Github</li>
                        <li>Linux</li>
                        <li>Photoshop</li>
                        <li>Figma</li>
                    </ul>
                </article>
            </div>
        </div>
    </section>
    );
}