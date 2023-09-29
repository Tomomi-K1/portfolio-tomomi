'use client'

import React from 'react';

export default function ProjectCard({project}){
    return(
        <article>
            <h3>{project.name}</h3>
            <h4>Project Summary</h4>
            <p>{project.description}</p>
            <h4>Technologies Used</h4>
            <ul>
            {project.usedTech.map((t, idx)=>
                <li key={idx}>{t}</li>
            )}
            </ul>
            <img src={project.imgUrl} alt={project.imgAlt} />
            <a href={project.url}>live site</a>
            <a href={project.github}>Code</a>
        </article>
    );
}