'use client'

import React from 'react';

export default function ProjectCard({project}){
    return(
        <article class="project-card">
            <h3 className="text-xl font-bold text-blue-400">{project.name}</h3>
            {/* <h4>Project Summary</h4> */}
            <img src={project.imgUrl} alt={project.imgAlt} />
            {/* <p>{project.description}</p> */}
            {/* <h4>Technologies Used</h4> */}
            <ul className='flex justify-center'>
            {project.usedTech.map((t, idx)=>
                <li key={idx} className="m-1">{t}</li>
            )}
            </ul>
            <ul className='flex justify-around'>
                <li><a href={project.url}>live site</a></li>
                <li><a href={project.github}>Code</a></li>
            </ul>
        </article>
    );
}