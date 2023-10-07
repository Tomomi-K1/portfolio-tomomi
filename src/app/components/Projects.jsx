'use client'

import React from 'react';
import ProjectCard from "./ProjectCard";

export default function Projects({projects}){

    return(
    <section id="projects" className="text-center text-white">
        <div className="w-11/12 m-auto max-w-screen-lg">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 text-center sm:text-left"> Projects </h2>
            {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-5"> */}
            <div className="grid grid-cols-1 gap-14">
            {projects.map((project, idx) =>{
                return <ProjectCard key={idx} project={project} />
            })}   
            </div>
        </div>
    </section>
    );
}