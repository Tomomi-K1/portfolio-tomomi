'use client'

import { useForm, ValidationError } from '@formspree/react';
import Button from '@mui/material/Button';
import MainButton from './parts/MainButton';


export default function Contact(){
    const [state, handleSubmit] = useForm("xzblkzvo");

    return(
    <section id="contact" className="mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3 w-11/12 m-auto max-w-screen-lg pt-36">
        <div>
           <h2 className='text-left text-3xl sm:text-4xl md:text-5xl font-bold text-center sm:text-left pb-8'>Contact</h2> 
           <p>I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>
        </div>
        {state.succeeded? (
            <div className="flex flex-col">
                <p>Thanks for contacting me!</p>
            </div>
            )
        :(
        <div className="flex flex-col">
        <h2 className="text-2xl font-bold my-2"> Get in Touch !</h2>
            <form className="flex flex-col" onSubmit={handleSubmit}>
                <label htmlFor="email">
                    Email Address
                </label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    className="text-black"
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
                <label htmlFor="subject">
                    Subject
                </label>
                <input
                    id="subject"
                    type="subject"
                    name="subject"
                    className="text-black"
                />
                <ValidationError
                    prefix="Subject"
                    field="subject"
                    errors={state.errors}
                />
                <label htmlFor="message">
                    Messages
                </label>
                <textarea
                    id="message"
                    name="message"
                    className="text-black"
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
                {/* <div class="g-recaptcha" data-sitekey="6LdGtV8oAAAAAIYycXHV53x8H8vg3mmpegHlCOg8"></div>  */}
                <div className="text-center mt-3">
                    <MainButton btnName={"submit"} />
                </div>
            </form>
        </div>
        )
    }
    
    </section>
    );
}