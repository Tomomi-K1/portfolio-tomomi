'use client'

import { useForm, ValidationError } from '@formspree/react';
import Button from '@mui/material/Button';


export default function Contact(){
    const [state, handleSubmit] = useForm("xzblkzvo");
    if (state.succeeded) {
        return <p>Thanks for contacting me! </p>;
    }

    return(
    <section id="contact" className="mx-auto py-10 justify-center items-center ">
        <div className="w-10/12 md:w-5/12 lg:w-4/12 m-auto max-w-screen-lg flex flex-col">
            <h2 className="text-2xl font-bold my-2"> Get in Touch !</h2>
            <form className="flex flex-col" onSubmit={handleSubmit}>
                <label htmlFor="email">
                    Email Address
                </label>
                <input
                    id="email"
                    type="email"
                    name="email"
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
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
                <div className="text-center mt-3">
                <Button type="submit" 
                        disabled={state.submitting}
                        className="mb-5  border-white text-white transition duration-600 hover:border-none hover:bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400" 
                        variant="outlined">
                    Submit
                </Button>
                </div>
            </form>
        </div>
    </section>
    );
}