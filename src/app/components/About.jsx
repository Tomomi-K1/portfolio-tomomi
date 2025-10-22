'use client'
import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TechSkill from './TechSkill';


export default function About() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
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
                            In my previous roles, I was always the “go-to tech person” — even though I wasn&apos;t part of the IT department. I actually loved it, and that curiosity grew into a real passion for creating solutions through code. It eventually led me to become a Full Stack Engineer! 🚀

                            I build web apps with React, TypeScript, Next.js, Node.js, Prisma, tRPC, and PostgreSQL, turning ideas into reliable, user-friendly solutions. 😃💻

                            I love collaborating with teams, sharing ideas, and making sure everything works the way it’s supposed to. I take pride in writing clean, maintainable code that supports both users and teammates.
                        </p>
                    </div>
                </div>
            </div>
            <TechSkill />

        </section>
    );
}