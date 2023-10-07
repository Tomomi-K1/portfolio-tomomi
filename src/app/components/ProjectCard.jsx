'use client'

import React from 'react';

export default function ProjectCard({project}){
    return(
        <article className="project-card grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-14">
            <img src={project.imgUrl} alt={project.imgAlt} />
            {/* <p>{project.description}</p> */}
            {/* <h4>Technologies Used</h4> */}
            <div>
                <h3 className="text-2xl text-left font-bold">{project.name}</h3>
                <ul className='flex flex-wrap justify-start'>
                <h4 className='font-bold'>Built with: </h4>
                {project.usedTech.map((t, idx)=>
                    <li key={idx} className="mr-1">{t}</li>
                )}
                </ul>
                <ul className='flex flex-col items-start justify-start'>
                    <li className='hover:underline hover:underline-offset-1'><a href={project.url}>Live site</a></li>
                    <li className='hover:underline hover:underline-offset-1'><a href={project.github}>Code</a></li>
                </ul>
            </div>
        </article>
    );
}