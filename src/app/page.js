'use client';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Footer from './components/Footer';
import projectData from './projectData';

export default function Home() {
  console.log("%c Thank you for visiting my portfolio!! ", "color: white; font-size: 24px;background-color:green");
  console.log("%c You probably read about me section already? I hope😊", "color:yellow");
  
  return (
    <GoogleReCaptchaProvider 
      useRecaptchaNet
      reCaptchaKey='6Leey8goAAAAAIyV-JTLm9tjS7MC7ZGEZ8ooNzQS'>
      <div className='text-white bg-slate-900'>
      <Header />
      <main>
        <About />
        <Projects projects={projectData} />
        <Contact />
      </main>
      <Footer /> 
      </div>
    </GoogleReCaptchaProvider>
  )
}
