'use client'

import React, { useState, useEffect } from 'react';
import MainButton from './parts/MainButton';
import AOS from 'aos';

export default function ProjectCard({ project }) {
    const [hover, setHover] = useState(false);
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <article data-aos="fade-up" data-aos-duration="1500" onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)} className="project-card p-5 rounded-lg  hover:bg-gray-600 hover:bg-opacity-20 hover:shadow-sm hover:shadow-white">
            <img src={project.imgUrl} alt={project.imgAlt} />
            {/* <p>{project.description}</p> */}
            {/* <h4>Technologies Used</h4> */}
            <div className='relative'>
                <h3 className={`text-2xl text-left font-bold my-3 ${hover ? "bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text" : ""}`}>{project.name}</h3>
                <p className='text-left mb-3'>{project.description}</p>
                <ul className='flex flex-wrap justify-start my-1'>
                    {project.usedTech.map((t, idx) =>
                        <li key={idx} className="mr-1 mb-1 text-xs bg-gray-700 py-1 px-2 rounded-lg">{t}</li>
                    )}
                </ul>
                <div className='mt-2 flex flex-wrap items-start justify-start gap-3'>
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                        <MainButton btnName={"Demo"} />
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <MainButton btnName={"Code"} />
                    </a>
                </div>
            </div>
        </article>
    );
}