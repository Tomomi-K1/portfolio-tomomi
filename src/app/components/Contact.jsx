'use client'

import { useForm, ValidationError } from '@formspree/react';
import MainButton from './parts/MainButton';
import './Contact.css';


export default function Contact() {
    const [state, handleSubmit] = useForm("xzblkzvo");

    return (
        <section id="contact" className="mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-14 w-11/12 m-auto max-w-screen-lg pt-24 sm:pt-36">
            <div>
                <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-center sm:text-left pb-8'>Contact</h2>
                <p className='p-4'>
                    I&#39;m excited to hear from you about potential job opportunities, collaborative projects, or just to say hello. Please take a moment to fill out the form below, and I&#39;ll do my best to respond as soon as possible. Thank you for considering me for your project or job opportunity, and I can&#39;t wait to start our conversation!
                </p>
            </div>
            {state.succeeded ? (
                <div className="flex flex-col items-center justify-center">
                    <p>Thanks for contacting me!</p>
                </div>
            )
                : (
                    <div className="flex flex-col">
                        <h2 className="text-2xl font-bold mb-6"> Get in Touch !</h2>
                        <form className="flex flex-col" onSubmit={handleSubmit}>
                            <label htmlFor="email">
                                Email Address
                            </label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                className="bg-slate-900 text-white border-b-2 border-white p-2 autofill:bg-slate-900 autofill:text-white autofill:transition-colors autofill:duration-[5000s]"
                                required
                            />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />
                            <label htmlFor="subject" className='mt-2'>
                                Subject
                            </label>
                            <input
                                id="subject"
                                type="subject"
                                name="subject"
                                className="text-white bg-slate-900 border-b-2 border-white p-2"
                                required
                            />
                            <ValidationError
                                prefix="Subject"
                                field="subject"
                                errors={state.errors}
                            />
                            <label htmlFor="message" className='mt-2'>
                                Messages
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                className="text-white bg-slate-900 border-b-2 border-white p-2"
                                required
                            />
                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                            />
                            <div className="text-center mt-8">
                                <MainButton btnName={"submit"} />
                            </div>
                        </form>
                    </div>
                )
            }
        </section>
    );
}