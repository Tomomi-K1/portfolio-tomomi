'use client'
import React, { useEffect } from'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { AiFillHtml5 } from "react-icons/ai";


const frontend =[
    {name:"React",},
    {name:"Next.js",},
    {name:"HTML",},
    {name:"CSS",},
    {name:"Javascript",},
    {name:"JQuery",},
    {name:"Tailwind CSS",},
    {name:"Bootstrap",},
    {name:"Material UI",}
];

const backend = [
    {name:"Node"},
    {name:"Express"},
    {name:"Python"},
    {name:"Flask"},
    {name:"PostgreSQL"},
    {name:"SQLAlchemy"}
]

const others = [
    {name:"Git"},
    {name:"GitHub"},
    {name:"Jest"},
    {name:"Jasmine"}
]


export default function TechSkill(){
    useEffect( () => {
        AOS.init();  
    }, [])
    return(
        <div className='tech_section w-11/12 mx-auto my-24 max-w-screen-lg'> 
            <h2 className='text-center sm:text-left text-3xl sm:text-4xl md:text-5xl font-bold mb-5'>Tech Skills</h2>
            <div>
                <TechList title={"Frontend"} list={frontend} />
                <TechList title={"Backend"} list={backend} />
                <TechList title={"Others"} list={others} />
            </div>
        </div>
    );
}

function TechList({title, list}){
    return(
        <article data-aos="fade-right" data-aos-duration="1500" className='pb-5'>
            <h5 className='font-bold text-xl'>{title}</h5>
            <ul className='flex flex-wrap'>
                {list.map((item, idx) =>{
                    return(
                        <li key={idx} className='m-2 flex justify-start items-center rounded-3xl px-4 py-1 bg-gray-700'>
                            {item.name}
                        </li>
                    )
                })}
            </ul>
        </article>
    )
}