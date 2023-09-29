'use client'

import React from 'react';
import ProjectCard from "./ProjectCard";

export default function Projects({projects}){

    return(
    <section id="projects" className="text-center text-white">
        <div className="w-11/12 m-auto max-w-screen-lg">
            <h2 className="text-4xl mb-10"> Projects </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3">
            {projects.map((project, idx) =>{
                return <ProjectCard key={idx} project={project} />
            })}   
            </div>
        </div>
    </section>
    );
}