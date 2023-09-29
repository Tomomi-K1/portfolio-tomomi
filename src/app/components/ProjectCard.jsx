'use client'

import React from 'react';

export default function ProjectCard({project}){
    return(
        <article class="project-card">
            <img src={project.imgUrl} alt={project.imgAlt} />
            {/* <p>{project.description}</p> */}
            {/* <h4>Technologies Used</h4> */}
            <h3 className="text-2xl text-left font-bold">{project.name}</h3>
            <ul className='flex justify-start'>
            {project.usedTech.map((t, idx)=>
                <li key={idx} className="mr-1">{t}</li>
            )}
            </ul>
            <ul className='flex justify-start'>
                <li className='mr-2'><a href={project.url}>live site</a></li>
                <li><a href={project.github}>Code</a></li>
            </ul>
        </article>
    );
}