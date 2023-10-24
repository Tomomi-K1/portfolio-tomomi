'use client'
import React, { useEffect } from'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { AiFillHtml5 } from "react-icons/ai";


const frontend =[
    {name:"React",
    icon: <AiFillHtml5 className='mr-1'/>},
    {name:"Next.js",
    icon: <AiFillHtml5 className='mr-1'/>},
    {name:"HTML",
    icon: <AiFillHtml5 className='mr-1'/>},
    {name:"CSS",
    icon: <AiFillHtml5 className='mr-1'/>},
    {name:"Javascript",
    icon: <AiFillHtml5 className='mr-1'/>},
    {name:"JQuery",
    icon: <AiFillHtml5 className='mr-1'/>},
    {name:"Tailwind CSS",
    icon: <AiFillHtml5 className='mr-1'/>},
    {name:"Bootstrap",
    icon: <AiFillHtml5 className='mr-1'/>},
    {name:"Material UI",
    icon: <AiFillHtml5 className='mr-1'/>}
];

const backend = [
    {name:"Material UI",
    icon: <AiFillHtml5 className='mr-1'/>}
]

{/* <li className='mr-2'>Node.js</li>
<li className='mr-2'>PostgreSQL</li>
<li className='mr-2'>Express.js</li>
<li className='mr-2'>Python</li>
<li className='mr-2'>Flask</li>
<li className='mr-2'>SQLAlchemy</li>
<li className='mr-2'>Jinja</li> */}

const others = [
    {name:"Git",
    icon: <AiFillHtml5 className='mr-1'/>}
]
{/* <li className='mr-2'>Github</li>
<li className='mr-2'>Linux</li>
<li className='mr-2'>Photoshop</li>
<li className='mr-2'>Figma</li> */}

export default function TechSkill(){
    useEffect( () => {
        AOS.init();  
    }, [])
    return(
        <div className='tech_section w-11/12 mx-auto my-24 max-w-screen-lg'> 
            <h2 className='text-center sm:text-left text-3xl sm:text-4xl md:text-5xl font-bold mb-5'>Tech Skills</h2>
            <div className='grid grid-cols-1 sm:grid-cols-3 justify-items-left'>
                <article data-aos="fade-right" className='pb-5'>
                    <h5 className='font-bold text-xl'>Frontend</h5>
                    <ul className='flex flex-wrap sm:flex-col'>
                        {frontend.map((item, idx) =>{
                            return(
                                <li key={idx} className='m-2 flex justify-start items-center'>
                                    {item.icon}  
                                    {item.name}
                                </li>
                            )
                        })}
                    </ul>
                </article>
                <article data-aos="fade-right" className='pb-5'>
                    <h5 className='font-bold text-xl'>Backend</h5>
                      <ul className='flex flex-wrap sm:flex-col'>
                      {backend.map((item, idx) =>{
                            return(
                                <li key={idx} className='m-2 flex justify-start items-center'>
                                    {item.icon}  
                                    {item.name}
                                </li>
                            )
                        })}
                    </ul>
                </article>
                <article data-aos="fade-right" className='pb-5'>
                    <h5 className='font-bold text-xl'>Others</h5>
                    <ul className='flex flex-wrap sm:flex-col'>
                    {others.map((item, idx) =>{
                            return(
                                <li key={idx} className='m-2 flex justify-start items-center'>
                                    {item.icon}  
                                    {item.name}
                                </li>
                            )
                        })}
                    </ul>
                </article>
            </div>
        </div>
    );
}