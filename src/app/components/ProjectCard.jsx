'use client'

import React, { useState } from 'react';

export default function ProjectCard({project}){
    const [hover, setHover] =useState(false);
    return(
        <article onMouseOver={()=>setHover(true)} onMouseOut={()=>setHover(false)}className="project-card p-5 rounded-lg  hover:bg-gray-600 hover:bg-opacity-20">
            <img src={project.imgUrl} alt={project.imgAlt} />
            {/* <p>{project.description}</p> */}
            {/* <h4>Technologies Used</h4> */}
            <div className='relative'>
                <h3 className={`text-2xl text-left font-bold my-3 ${hover? "bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text":""}`}>{project.name}</h3>
                <p className='text-left mb-3'>{project.description}</p>
                <ul className='flex flex-wrap justify-start my-1'>
                {project.usedTech.map((t, idx)=>
                    <li key={idx} className="mr-1 mb-1 text-xs bg-gray-700 py-1 px-2 rounded-lg">{t}</li>
                )}
                </ul>
                <ul className='mt-2 flex flex-wrap items-start justify-start'>
                    <li className='hover:bg-blue-500 border rounded-md px-2 py-1 mr-2'><a href={project.url}>Demo</a></li>
                    <li className='hover:bg-blue-500 border rounded-md px-2 py-1'><a href={project.github}>Code</a></li>
                </ul>
            </div>
        </article>
    );
}